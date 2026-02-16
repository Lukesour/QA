#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

const workspace = path.resolve(__dirname, '..');
const qaPath = path.join(workspace, 'QA.json');
const schemaPath = path.join(workspace, 'QA.schema.json');

function fail(msg, errors) {
  errors.push(msg);
}

function warn(msg, warnings) {
  warnings.push(msg);
}

function parseDate(value) {
  if (typeof value !== 'string' || !/^\d{4}-\d{2}-\d{2}$/.test(value)) return null;
  const d = new Date(`${value}T00:00:00Z`);
  if (Number.isNaN(d.getTime())) return null;
  return d;
}

function dayDiff(from, to) {
  const a = parseDate(from);
  const b = parseDate(to);
  if (!a || !b) return null;
  const ms = b.getTime() - a.getTime();
  return Math.round(ms / (24 * 3600 * 1000));
}

function collectEntries(qa) {
  const buckets = [
    qa.mvp?.volumes || [],
    qa.country_library?.volumes || [],
    qa.major_library?.volumes || [],
    qa.return_to_china_module?.volumes || []
  ];
  return buckets.flatMap((volumes) => volumes.flatMap((v) => v.entries || []));
}

function checkTotals(library, name, errors) {
  if (!library) {
    fail(`${name}: missing library`, errors);
    return;
  }
  const actualVolumes = (library.volumes || []).length;
  const actualEntries = (library.volumes || []).reduce((sum, v) => sum + (v.entries || []).length, 0);

  if (library.total_volumes !== actualVolumes) {
    fail(`${name}.total_volumes=${library.total_volumes} but actual=${actualVolumes}`, errors);
  }
  if (library.total_entries !== actualEntries) {
    fail(`${name}.total_entries=${library.total_entries} but actual=${actualEntries}`, errors);
  }
}

function isPlaceholderText(text) {
  return typeof text === 'string' && /待补|待你补充|TBD|USER_FILL/.test(text);
}

function isValidSource(src, allowedSourceTypes) {
  if (!src || typeof src !== 'object') return false;
  if (typeof src.type !== 'string' || !allowedSourceTypes.has(src.type)) return false;
  if (src.type === 'manual_required') return false;
  if (typeof src.url !== 'string' || !/^https?:\/\//.test(src.url)) return false;
  if (!src.publisher || /^(TBD|USER_FILL)$/i.test(src.publisher)) return false;
  return true;
}

function hasFiveSectionNarrative(answerLong) {
  if (typeof answerLong !== 'string') return false;
  const req = ['场景开场：', '冲突升级：', '抉择路径：', '结果分歧：', '下一章入口：'];
  return req.every((token) => answerLong.includes(token));
}

function numericInText(text) {
  return /\d|%|万|元|天|周/.test(text || '');
}

function main() {
  const errors = [];
  const warnings = [];

  let qa;
  let schema;

  try {
    qa = JSON.parse(fs.readFileSync(qaPath, 'utf8'));
  } catch (err) {
    console.error(`Failed to parse QA.json: ${err.message}`);
    process.exit(1);
  }

  try {
    schema = JSON.parse(fs.readFileSync(schemaPath, 'utf8'));
  } catch (err) {
    console.error(`Failed to parse QA.schema.json: ${err.message}`);
    process.exit(1);
  }

  const requiredTopLevel = [
    'meta',
    'taxonomy',
    'reserved_scaffold',
    'mvp',
    'country_library',
    'major_library',
    'return_to_china_module',
    'future_backlog'
  ];

  for (const key of requiredTopLevel) {
    if (!(key in qa)) {
      fail(`Missing top-level key: ${key}`, errors);
    }
  }

  const phaseEnum = qa.taxonomy?.phase_enum;
  const statusEnum = qa.taxonomy?.status_enum;
  const backlogStatusEnum = qa.taxonomy?.backlog_status_enum;
  const reviewCycleDays = qa.taxonomy?.review_cycle_days || { P0: 45, P1: 90, P2: 180 };
  const schemaSourceTypes = new Set(schema?.$defs?.source?.properties?.type?.enum || []);

  if (!Array.isArray(phaseEnum) || phaseEnum.length === 0) fail('taxonomy.phase_enum is missing or empty', errors);
  if (!Array.isArray(statusEnum) || statusEnum.length === 0) fail('taxonomy.status_enum is missing or empty', errors);

  if (!schemaSourceTypes.size) {
    fail('schema.$defs.source.properties.type.enum is missing', errors);
  }

  checkTotals(qa.mvp, 'mvp', errors);
  checkTotals(qa.country_library, 'country_library', errors);
  checkTotals(qa.major_library, 'major_library', errors);
  checkTotals(qa.return_to_china_module, 'return_to_china_module', errors);

  const allEntries = collectEntries(qa);
  const allBacklog = qa.future_backlog?.dynamic_high_priority || [];
  const allEntryIds = new Set(allEntries.map((e) => e.id));

  const idSet = new Set();
  for (const entry of [...allEntries, ...allBacklog]) {
    if (!entry || typeof entry !== 'object') {
      fail('Found non-object entry in content or backlog', errors);
      continue;
    }
    if (!entry.id || typeof entry.id !== 'string') {
      fail('Found entry without valid id', errors);
      continue;
    }
    if (idSet.has(entry.id)) {
      fail(`Duplicate id detected: ${entry.id}`, errors);
      continue;
    }
    idSet.add(entry.id);
  }

  const entryRequired = [
    'id',
    'title',
    'phase',
    'status',
    'priority',
    'owner',
    'updated_at',
    'question_canonical',
    'question_aliases',
    'answer_short',
    'answer_long',
    'outline',
    'related_ids',
    'depends_on',
    'see_also',
    'persona_tags',
    'risk_level',
    'budget_band',
    'sources',
    'evidence_count',
    'publish_blockers',
    'policy_clause_snapshot',
    'scope_type',
    'publication_state',
    'publish_ready',
    'narrative_layer',
    'micro_case',
    'chapter_hook',
    'previous_chapter_id',
    'next_chapter_id',
    'branch_condition',
    'ending_type',
    'time_anchor',
    'budget_ledger',
    'persona_profile',
    'editorial_notes',
    'story_version',
    'role_state_before',
    'role_state_after',
    'consequence_matrix',
    'action_card'
  ];

  const phaseRank = {
    '综合': 0,
    '准备': 1,
    '申请': 2,
    '录取': 3,
    '签证': 4,
    '行前': 5,
    '在读': 6,
    '求职': 7
  };

  let oldPatternCount = 0;
  let fiveSectionCount = 0;
  let routeCompleteCount = 0;
  let numericOutcomeCount = 0;
  let preApplyCount = 0;
  let preApplyManualRequiredCount = 0;
  let prepareCount = 0;
  let prepareManualRequiredCount = 0;
  let unrealisticLanguageGapCount = 0;
  let fixedBudgetThresholdCount = 0;

  const preApplyTopicCounter = {
    exam: 0,
    writing: 0,
    recommendation: 0,
    school_list: 0,
    app_system: 0,
    interview: 0,
    scholarship: 0
  };
  const prepareTopicCounter = {
    prereq: 0,
    writing: 0,
    app_system: 0,
    interview: 0,
    scholarship: 0
  };

  const conflictSet = new Set();
  const branchSet = new Set();
  const nextActionSet = new Set();
  const nextActionFreq = new Map();
  const aliasOpeningFreq = new Map();

  for (const entry of allEntries) {
    for (const key of entryRequired) {
      if (!(key in entry)) {
        fail(`${entry.id}: missing required field ${key}`, errors);
      }
    }

    if (Array.isArray(phaseEnum) && !phaseEnum.includes(entry.phase)) {
      fail(`${entry.id}: invalid phase ${entry.phase}`, errors);
    }

    if (Array.isArray(statusEnum) && !statusEnum.includes(entry.status)) {
      fail(`${entry.id}: status "${entry.status}" not found in taxonomy.status_enum`, errors);
    }

    if (!parseDate(entry.updated_at)) {
      fail(`${entry.id}: updated_at must be a valid date`, errors);
    }

    if (!Array.isArray(entry.outline) || entry.outline.length < 4) {
      fail(`${entry.id}: outline should contain at least 4 items`, errors);
    }

    if (!Array.isArray(entry.question_aliases) || entry.question_aliases.length < 2) {
      fail(`${entry.id}: question_aliases should contain at least 2 variants`, errors);
    } else {
      for (const alias of entry.question_aliases) {
        if (typeof alias !== 'string') continue;
        const opening = (alias.split(/[，。？！]/)[0] || alias).trim();
        if (!opening) continue;
        aliasOpeningFreq.set(opening, (aliasOpeningFreq.get(opening) || 0) + 1);
      }
    }

    if (typeof entry.question_canonical !== 'string' || entry.question_canonical.trim() === '') {
      fail(`${entry.id}: question_canonical cannot be empty`, errors);
    }
    if (/^.+阶段：.+该怎么做？$/.test(entry.question_canonical)) {
      oldPatternCount += 1;
    }

    if (typeof entry.answer_short !== 'string' || entry.answer_short.trim() === '') {
      fail(`${entry.id}: answer_short cannot be empty`, errors);
    }

    if (typeof entry.answer_long !== 'string' || entry.answer_long.trim() === '') {
      fail(`${entry.id}: answer_long cannot be empty`, errors);
    } else {
      if (!hasFiveSectionNarrative(entry.answer_long)) {
        fail(`${entry.id}: answer_long must include five-section narrative markers`, errors);
      } else {
        fiveSectionCount += 1;
      }
      if (entry.answer_long.length < 280) {
        fail(`${entry.id}: answer_long is too short for narrative mode`, errors);
      }
      if (/发布门槛|证据要求|政策校验：请在发布前补齐/.test(entry.answer_long)) {
        fail(`${entry.id}: editorial phrases should not remain in answer_long`, errors);
      }
    }

    if (typeof entry.story_version !== 'string' || entry.story_version.trim() === '') {
      fail(`${entry.id}: story_version must be non-empty`, errors);
    }

    const nl = entry.narrative_layer;
    if (!nl || typeof nl !== 'object') {
      fail(`${entry.id}: narrative_layer must be an object`, errors);
    } else {
      for (const f of ['protagonist', 'goal', 'conflict', 'choice', 'result', 'foreshadow']) {
        if (typeof nl[f] !== 'string' || nl[f].trim() === '') {
          fail(`${entry.id}: narrative_layer.${f} must be non-empty`, errors);
        }
      }
      conflictSet.add(nl.conflict);
    }

    const mc = entry.micro_case;
    if (!mc || typeof mc !== 'object') {
      fail(`${entry.id}: micro_case must be an object`, errors);
    } else {
      for (const f of ['background', 'decision', 'action', 'outcome', 'review']) {
        if (typeof mc[f] !== 'string' || mc[f].trim() === '') {
          fail(`${entry.id}: micro_case.${f} must be non-empty`, errors);
        }
      }
      if (numericInText(mc.outcome)) {
        numericOutcomeCount += 1;
      }
    }

    const ch = entry.chapter_hook;
    if (!ch || typeof ch !== 'object') {
      fail(`${entry.id}: chapter_hook must be an object`, errors);
    } else {
      for (const f of ['next_action', 'failure_warning', 'next_chapter_teaser']) {
        if (typeof ch[f] !== 'string' || ch[f].trim() === '') {
          fail(`${entry.id}: chapter_hook.${f} must be non-empty`, errors);
        }
      }
      if (typeof ch.next_action === 'string' && ch.next_action.trim()) {
        const action = ch.next_action.trim();
        nextActionSet.add(action);
        nextActionFreq.set(action, (nextActionFreq.get(action) || 0) + 1);
      }
    }

    const ta = entry.time_anchor;
    if (!ta || typeof ta !== 'object') {
      fail(`${entry.id}: time_anchor must be an object`, errors);
    } else {
      for (const f of ['anchor_label', 'urgency_window', 'deadline_hint', 'failure_cost']) {
        if (typeof ta[f] !== 'string' || ta[f].trim() === '') {
          fail(`${entry.id}: time_anchor.${f} must be non-empty`, errors);
        }
      }
    }

    const bl = entry.budget_ledger;
    if (!bl || typeof bl !== 'object') {
      fail(`${entry.id}: budget_ledger must be an object`, errors);
    } else {
      for (const f of ['currency', 'application_cost', 'tuition_cost', 'living_cost', 'contingency_fund', 'funding_strategy']) {
        if (typeof bl[f] !== 'string' || bl[f].trim() === '') {
          fail(`${entry.id}: budget_ledger.${f} must be non-empty`, errors);
        }
      }
      if (!numericInText(bl.application_cost + bl.tuition_cost + bl.living_cost + bl.contingency_fund)) {
        fail(`${entry.id}: budget_ledger should contain numeric ranges`, errors);
      }
    }

    const pp = entry.persona_profile;
    if (!pp || typeof pp !== 'object') {
      fail(`${entry.id}: persona_profile must be an object`, errors);
    } else {
      for (const f of ['gpa_band', 'budget_segment', 'work_years', 'target_city_tier', 'risk_preference']) {
        if (typeof pp[f] !== 'string' || pp[f].trim() === '') {
          fail(`${entry.id}: persona_profile.${f} must be non-empty`, errors);
        }
      }
    }

    for (const key of ['role_state_before', 'role_state_after']) {
      const rs = entry[key];
      if (!rs || typeof rs !== 'object') {
        fail(`${entry.id}: ${key} must be object`, errors);
      } else {
        if (typeof rs.readiness_score !== 'number' || rs.readiness_score < 0 || rs.readiness_score > 100) {
          fail(`${entry.id}: ${key}.readiness_score should be 0-100`, errors);
        }
        if (typeof rs.timeline_buffer_days !== 'number' || rs.timeline_buffer_days < 0) {
          fail(`${entry.id}: ${key}.timeline_buffer_days should be >=0`, errors);
        }
        if (typeof rs.budget_pressure_index !== 'number' || rs.budget_pressure_index < 0 || rs.budget_pressure_index > 100) {
          fail(`${entry.id}: ${key}.budget_pressure_index should be 0-100`, errors);
        }
        if (typeof rs.stress_level !== 'string' || rs.stress_level.trim() === '') {
          fail(`${entry.id}: ${key}.stress_level should be non-empty`, errors);
        }
      }
    }

    const cm = entry.consequence_matrix;
    if (!cm || typeof cm !== 'object') {
      fail(`${entry.id}: consequence_matrix must be object`, errors);
    } else {
      for (const f of ['best_case', 'base_case', 'worst_case']) {
        if (typeof cm[f] !== 'string' || cm[f].trim() === '') fail(`${entry.id}: consequence_matrix.${f} missing`, errors);
      }
    }

    const ac = entry.action_card;
    if (!ac || typeof ac !== 'object') {
      fail(`${entry.id}: action_card must be object`, errors);
    } else {
      for (const f of ['today', 'within_72h', 'this_week']) {
        if (typeof ac[f] !== 'string' || ac[f].trim() === '') fail(`${entry.id}: action_card.${f} missing`, errors);
      }
    }

    if (!Array.isArray(entry.persona_tags) || entry.persona_tags.length === 0) {
      fail(`${entry.id}: persona_tags should not be empty`, errors);
    }

    if (typeof entry.editorial_notes !== 'string' || entry.editorial_notes.trim() === '') {
      fail(`${entry.id}: editorial_notes must be non-empty`, errors);
    }

    if (!Array.isArray(entry.related_ids)) {
      fail(`${entry.id}: related_ids must be an array`, errors);
    }

    if (!Array.isArray(entry.see_also) || entry.see_also.length === 0) {
      fail(`${entry.id}: see_also should not be empty`, errors);
    }

    if (!Array.isArray(entry.depends_on)) {
      fail(`${entry.id}: depends_on must be an array`, errors);
    }

    for (const refField of ['related_ids', 'depends_on', 'see_also']) {
      for (const refId of entry[refField] || []) {
        if (!allEntryIds.has(refId)) {
          fail(`${entry.id}: ${refField} contains unknown id ${refId}`, errors);
        }
      }
    }

    if (entry.previous_chapter_id !== null && !allEntryIds.has(entry.previous_chapter_id)) {
      fail(`${entry.id}: previous_chapter_id is unknown`, errors);
    }
    if (entry.next_chapter_id !== null && !allEntryIds.has(entry.next_chapter_id)) {
      fail(`${entry.id}: next_chapter_id is unknown`, errors);
    }

    if (typeof entry.branch_condition !== 'string' || entry.branch_condition.trim() === '') {
      fail(`${entry.id}: branch_condition must be non-empty`, errors);
    }
    branchSet.add(entry.branch_condition);

    const langGapMatch = entry.branch_condition.match(/差距超过([0-9]+(?:\.[0-9]+)?)分/);
    if (langGapMatch) {
      const gap = Number(langGapMatch[1]);
      if (Number.isFinite(gap) && gap > 1.5) {
        unrealisticLanguageGapCount += 1;
        fail(`${entry.id}: branch_condition language gap threshold too high (${gap})`, errors);
      }
    }

    if (/预算缓冲低于9万元/.test(entry.branch_condition)) {
      fixedBudgetThresholdCount += 1;
      fail(`${entry.id}: branch_condition uses fixed 9万元 threshold; should be persona-aware`, errors);
    }

    if (!['推进分支', '风险节点', '阶段收束'].includes(entry.ending_type)) {
      fail(`${entry.id}: ending_type is invalid`, errors);
    }

    if (entry.next_chapter_id && typeof entry.branch_condition === 'string' && entry.ending_type) {
      routeCompleteCount += 1;
    }

    for (const depId of entry.depends_on || []) {
      const dep = allEntries.find((x) => x.id === depId);
      if (!dep) continue;
      const depRank = phaseRank[dep.phase] ?? 99;
      const curRank = phaseRank[entry.phase] ?? 99;
      if (depRank > curRank) {
        fail(`${entry.id}: depends_on time reverse (${dep.id}:${dep.phase} -> ${entry.phase})`, errors);
      }
    }

    if (!Array.isArray(entry.sources) || entry.sources.length === 0) {
      fail(`${entry.id}: sources must be a non-empty array`, errors);
    } else {
      for (const [idx, src] of entry.sources.entries()) {
        if (!src || typeof src !== 'object') {
          fail(`${entry.id}: sources[${idx}] must be an object`, errors);
          continue;
        }
        if (!schemaSourceTypes.has(src.type)) {
          fail(`${entry.id}: sources[${idx}].type=${src.type} not in schema source enum`, errors);
        }
      }
    }

    const validEvidenceCount = (entry.sources || []).filter((src) => isValidSource(src, schemaSourceTypes)).length;
    if (entry.evidence_count !== validEvidenceCount) {
      fail(`${entry.id}: evidence_count(${entry.evidence_count}) must equal valid source count(${validEvidenceCount})`, errors);
    }

    if (!Array.isArray(entry.publish_blockers)) {
      fail(`${entry.id}: publish_blockers must be an array`, errors);
    }

    if (!['global', 'country', 'major', 'return'].includes(entry.scope_type)) {
      fail(`${entry.id}: invalid scope_type ${entry.scope_type}`, errors);
    }

    if (!['drafting', 'reviewing', 'ready', 'published', 'blocked'].includes(entry.publication_state)) {
      fail(`${entry.id}: invalid publication_state ${entry.publication_state}`, errors);
    }

    if (entry.publish_ready === true) {
      if (!['ready', 'published'].includes(entry.status)) {
        fail(`${entry.id}: publish_ready=true requires status ready/published`, errors);
      }
      if (entry.publish_blockers.length > 0) {
        fail(`${entry.id}: publish_ready=true but publish_blockers is not empty`, errors);
      }
      if (entry.needs_human_review !== false) {
        fail(`${entry.id}: publish_ready=true requires needs_human_review=false`, errors);
      }
    }

    if (entry.policy_sensitive === true) {
      if (!Array.isArray(entry.jurisdiction) || entry.jurisdiction.length === 0) {
        fail(`${entry.id}: policy_sensitive entry must have jurisdiction`, errors);
      }
      if (!Array.isArray(entry.official_links) || entry.official_links.length === 0) {
        fail(`${entry.id}: policy_sensitive entry must provide official_links`, errors);
      }
      if (!Array.isArray(entry.policy_clause_snapshot) || entry.policy_clause_snapshot.length === 0) {
        fail(`${entry.id}: policy_sensitive entry must provide policy_clause_snapshot`, errors);
      }
      for (const [idx, slot] of entry.policy_clause_snapshot.entries()) {
        if (!slot || typeof slot !== 'object') {
          fail(`${entry.id}: policy_clause_snapshot[${idx}] must be object`, errors);
          continue;
        }
        for (const f of ['field', 'official_clause', 'source_url', 'effective_date']) {
          if (typeof slot[f] !== 'string' || slot[f].trim() === '') {
            fail(`${entry.id}: policy_clause_snapshot[${idx}].${f} must be non-empty string`, errors);
          }
        }
        if (typeof slot.source_url === 'string' && !/^https?:\/\//.test(slot.source_url)) {
          fail(`${entry.id}: policy_clause_snapshot[${idx}].source_url must be URL`, errors);
        }
        if ((entry.publish_ready === true || entry.status === 'published') && (slot.effective_date === 'USER_FILL_EFFECTIVE_DATE' || isPlaceholderText(slot.effective_date))) {
          fail(`${entry.id}: ready/published policy entry contains placeholder effective_date`, errors);
        }
      }
    }

    if (!parseDate(entry.last_verified_at) || !parseDate(entry.next_review_at)) {
      fail(`${entry.id}: last_verified_at/next_review_at must be valid dates`, errors);
    } else {
      const expectedDays = reviewCycleDays[entry.priority];
      if (typeof expectedDays === 'number') {
        const diff = dayDiff(entry.last_verified_at, entry.next_review_at);
        if (diff !== expectedDays) {
          fail(`${entry.id}: review cycle mismatch, expected ${expectedDays} days but got ${diff}`, errors);
        }
        const expectedValidFor = `${expectedDays}天`;
        if (entry.valid_for !== expectedValidFor) {
          fail(`${entry.id}: valid_for=${entry.valid_for} should be ${expectedValidFor}`, errors);
        }
      }
    }

    if (entry.phase === '准备' || entry.phase === '申请') {
      preApplyCount += 1;
      if ((entry.sources || []).some((s) => s && s.type === 'manual_required')) {
        preApplyManualRequiredCount += 1;
      }

      const title = `${entry.title || ''} ${(entry.keywords || []).join(' ')}`.toLowerCase();
      if (/雅思|托福|ielts|toefl|pte|duolingo|gre|gmat/.test(title)) preApplyTopicCounter.exam += 1;
      if (/文书|ps|sop|cv|简历|writing sample|作品集/.test(title)) preApplyTopicCounter.writing += 1;
      if (/推荐信|recommendation/.test(title)) preApplyTopicCounter.recommendation += 1;
      if (/选校|冲稳保|项目清单|school list/.test(title)) preApplyTopicCounter.school_list += 1;
      if (/网申|申请系统|portal|gradcas|ucas/.test(title)) preApplyTopicCounter.app_system += 1;
      if (/面试|kira|zoom|interview/.test(title)) preApplyTopicCounter.interview += 1;
      if (/奖学金|scholarship/.test(title)) preApplyTopicCounter.scholarship += 1;
    }

    if (entry.phase === '准备') {
      prepareCount += 1;
      if ((entry.sources || []).some((s) => s && s.type === 'manual_required')) {
        prepareManualRequiredCount += 1;
      }
      const title = `${entry.title || ''} ${(entry.keywords || []).join(' ')}`.toLowerCase();
      if (/先修|数学|编程|写作|能力补足|门槛|体检|prerequisite/.test(title)) prepareTopicCounter.prereq += 1;
      if (/文书|ps|sop|cv|简历|推荐信|writing sample/.test(title)) prepareTopicCounter.writing += 1;
      if (/网申|申请系统|portal|gradcas|ucas|预填/.test(title)) prepareTopicCounter.app_system += 1;
      if (/面试|kira|zoom|interview|star/.test(title)) prepareTopicCounter.interview += 1;
      if (/奖学金|scholarship|资金/.test(title)) prepareTopicCounter.scholarship += 1;
    }
  }

  if (oldPatternCount > 0) fail(`question_canonical still has old pattern count=${oldPatternCount}`, errors);
  if (fiveSectionCount !== allEntries.length) fail(`five-section narrative coverage mismatch: ${fiveSectionCount}/${allEntries.length}`, errors);
  if (routeCompleteCount !== allEntries.length) fail(`route field coverage mismatch: ${routeCompleteCount}/${allEntries.length}`, errors);

  const minConflict = qa.taxonomy?.narrative_quality_targets?.min_conflict_unique ?? 24;
  const minBranch = qa.taxonomy?.narrative_quality_targets?.min_branch_condition_unique ?? 80;
  const minNumericRatio = qa.taxonomy?.narrative_quality_targets?.min_numeric_micro_outcome_ratio ?? 0.95;
  const minUniqueNextAction = qa.taxonomy?.narrative_quality_targets?.min_unique_next_action ?? 30;
  const maxTopNextActionRatio = qa.taxonomy?.narrative_quality_targets?.max_top_next_action_ratio ?? 0.35;
  const maxTopAliasOpeningRatio = qa.taxonomy?.narrative_quality_targets?.max_top_alias_opening_ratio ?? 0.55;
  const strictNarrativeLint = qa.taxonomy?.narrative_quality_targets?.strict_narrative_lint === true;
  const maxPreApplyManualRequiredRatio = qa.taxonomy?.narrative_quality_targets?.max_pre_apply_manual_required_ratio ?? 0.95;
  const minPreApplyRatio = qa.taxonomy?.narrative_quality_targets?.min_pre_apply_ratio ?? 0.60;
  const minPrepareRatio = qa.taxonomy?.narrative_quality_targets?.min_prepare_ratio ?? 0.30;
  const maxPrepareManualRequiredRatio = qa.taxonomy?.narrative_quality_targets?.max_prepare_manual_required_ratio ?? 0.95;
  const minMajorPreparePerVolume = qa.taxonomy?.narrative_quality_targets?.min_major_prepare_per_volume ?? 3;

  if (conflictSet.size < minConflict) fail(`conflict diversity too low: ${conflictSet.size} < ${minConflict}`, errors);
  if (branchSet.size < minBranch) fail(`branch_condition diversity too low: ${branchSet.size} < ${minBranch}`, errors);

  const numericRatio = allEntries.length ? numericOutcomeCount / allEntries.length : 0;
  if (numericRatio < minNumericRatio) fail(`micro_case numeric outcome ratio too low: ${numericRatio.toFixed(3)} < ${minNumericRatio}`, errors);

  const topNextActionCount = Math.max(0, ...nextActionFreq.values());
  const topNextActionRatio = allEntries.length ? topNextActionCount / allEntries.length : 0;
  const aliasTotalCount = Array.from(aliasOpeningFreq.values()).reduce((sum, n) => sum + n, 0);
  const topAliasOpeningCount = Math.max(0, ...aliasOpeningFreq.values());
  const topAliasOpeningRatio = aliasTotalCount ? topAliasOpeningCount / aliasTotalCount : 0;

  const narrativeIssues = [];
  if (nextActionSet.size < minUniqueNextAction) {
    narrativeIssues.push(`next_action unique count too low: ${nextActionSet.size} < ${minUniqueNextAction}`);
  }
  if (topNextActionRatio > maxTopNextActionRatio) {
    narrativeIssues.push(`top next_action ratio too high: ${topNextActionRatio.toFixed(3)} > ${maxTopNextActionRatio}`);
  }
  if (topAliasOpeningRatio > maxTopAliasOpeningRatio) {
    narrativeIssues.push(`top alias opening ratio too high: ${topAliasOpeningRatio.toFixed(3)} > ${maxTopAliasOpeningRatio}`);
  }
  for (const issue of narrativeIssues) {
    if (strictNarrativeLint) fail(issue, errors);
    else warn(issue, warnings);
  }

  const preApplyRatio = allEntries.length ? preApplyCount / allEntries.length : 0;
  if (preApplyRatio < minPreApplyRatio) {
    fail(`pre-apply ratio too low: ${preApplyRatio.toFixed(3)} < ${minPreApplyRatio}`, errors);
  }
  const prepareRatio = allEntries.length ? prepareCount / allEntries.length : 0;
  if (prepareRatio < minPrepareRatio) {
    fail(`prepare ratio too low: ${prepareRatio.toFixed(3)} < ${minPrepareRatio}`, errors);
  }

  const preApplyManualRatio = preApplyCount ? preApplyManualRequiredCount / preApplyCount : 0;
  if (preApplyManualRatio > maxPreApplyManualRequiredRatio) {
    warn(`pre-apply manual_required ratio high: ${preApplyManualRatio.toFixed(3)} > ${maxPreApplyManualRequiredRatio}`, warnings);
  }
  const prepareManualRatio = prepareCount ? prepareManualRequiredCount / prepareCount : 0;
  if (prepareManualRatio > maxPrepareManualRequiredRatio) {
    warn(`prepare manual_required ratio high: ${prepareManualRatio.toFixed(3)} > ${maxPrepareManualRequiredRatio}`, warnings);
  }

  if (preApplyTopicCounter.app_system < 3) {
    warn(`pre-apply app system coverage is thin: ${preApplyTopicCounter.app_system}`, warnings);
  }
  if (preApplyTopicCounter.interview < 3) {
    warn(`pre-apply interview coverage is thin: ${preApplyTopicCounter.interview}`, warnings);
  }
  if (preApplyTopicCounter.scholarship < 3) {
    warn(`pre-apply scholarship coverage is thin: ${preApplyTopicCounter.scholarship}`, warnings);
  }
  if (prepareTopicCounter.app_system < 1) {
    warn(`prepare app system coverage is thin: ${prepareTopicCounter.app_system}`, warnings);
  }
  if (prepareTopicCounter.interview < 1) {
    warn(`prepare interview coverage is thin: ${prepareTopicCounter.interview}`, warnings);
  }
  if (prepareTopicCounter.scholarship < 1) {
    warn(`prepare scholarship coverage is thin: ${prepareTopicCounter.scholarship}`, warnings);
  }

  for (const volume of qa.major_library?.volumes || []) {
    const c = (volume.entries || []).filter((e) => e.phase === '准备').length;
    if (c < minMajorPreparePerVolume) {
      fail(`major volume ${volume.volume_id} prepare entries too low: ${c} < ${minMajorPreparePerVolume}`, errors);
    }
  }

  for (const b of allBacklog) {
    if (typeof b.owner !== 'string' || b.owner.trim() === '') fail(`backlog ${b.id}: owner must be a non-empty string`, errors);
    if (!parseDate(b.updated_at)) fail(`backlog ${b.id}: updated_at must be a valid date`, errors);
    if (Array.isArray(backlogStatusEnum) && backlogStatusEnum.length > 0 && !backlogStatusEnum.includes(b.status)) {
      fail(`backlog ${b.id}: status "${b.status}" not found in taxonomy.backlog_status_enum`, errors);
    }
  }

  const splitDir = path.join(workspace, 'libraries');
  const splitFiles = [
    'mvp.json',
    'country_library.json',
    'major_library.json',
    'return_to_china_module.json',
    'future_backlog.json',
    'meta_and_taxonomy.json'
  ];

  if (!fs.existsSync(splitDir)) {
    fail('libraries/ directory is missing (run scripts/split_qa.js)', errors);
  } else {
    for (const f of splitFiles) {
      const p = path.join(splitDir, f);
      if (!fs.existsSync(p)) {
        fail(`split file missing: libraries/${f}`, errors);
      } else {
        try {
          JSON.parse(fs.readFileSync(p, 'utf8'));
        } catch (err) {
          fail(`split file parse error: libraries/${f} (${err.message})`, errors);
        }
      }
    }
  }

  if (errors.length > 0) {
    console.error('QA lint failed with the following issues:');
    for (const e of errors) console.error(`- ${e}`);
    process.exit(1);
  }

  const publishReadyCount = allEntries.filter((e) => e.publish_ready).length;
  const policyPlaceholderCount = allEntries
    .filter((e) => e.policy_sensitive)
    .flatMap((e) => e.policy_clause_snapshot || [])
    .filter((c) => c.effective_date === 'USER_FILL_EFFECTIVE_DATE' || /待你补充|待补|TBD|USER_FILL/.test(c.effective_date || ''))
    .length;

  console.log('QA lint passed');
  console.log(`- total entries: ${allEntries.length}`);
  console.log(`- backlog entries: ${allBacklog.length}`);
  console.log(`- unique ids: ${idSet.size}`);
  console.log(`- five-section narrative entries: ${fiveSectionCount}`);
  console.log(`- route-ready entries: ${routeCompleteCount}`);
  console.log(`- unique conflicts: ${conflictSet.size}`);
  console.log(`- unique branch conditions: ${branchSet.size}`);
  console.log(`- micro_case numeric outcome ratio: ${numericRatio.toFixed(3)}`);
  console.log(`- unique next_action: ${nextActionSet.size}`);
  console.log(`- top next_action ratio: ${topNextActionRatio.toFixed(3)}`);
  console.log(`- unique alias openings: ${aliasOpeningFreq.size}`);
  console.log(`- top alias opening ratio: ${topAliasOpeningRatio.toFixed(3)}`);
  console.log(`- pre-apply entries: ${preApplyCount}`);
  console.log(`- pre-apply ratio: ${preApplyRatio.toFixed(3)}`);
  console.log(`- pre-apply manual_required ratio: ${preApplyManualRatio.toFixed(3)}`);
  console.log(`- prepare entries: ${prepareCount}`);
  console.log(`- prepare ratio: ${prepareRatio.toFixed(3)}`);
  console.log(`- prepare manual_required ratio: ${prepareManualRatio.toFixed(3)}`);
  console.log(`- branch unrealistic language gaps: ${unrealisticLanguageGapCount}`);
  console.log(`- branch fixed 9w thresholds: ${fixedBudgetThresholdCount}`);
  console.log(`- publish_ready entries: ${publishReadyCount}`);
  console.log(`- policy effective_date placeholders: ${policyPlaceholderCount}`);
  if (warnings.length > 0) {
    console.log('Narrative lint warnings:');
    for (const w of warnings) console.log(`- ${w}`);
  }
}

main();

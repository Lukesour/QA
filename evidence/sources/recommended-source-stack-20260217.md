# Recommended Source Stack (2026-02-17)

Use this list when updating policy-heavy content. Priority order is mandatory.

## P0 Official Policy

- UK Student visa money: https://www.gov.uk/student-visa/money
- UK Graduate visa: https://www.gov.uk/graduate-visa
- UK Immigration Health Surcharge: https://www.gov.uk/healthcare-immigration-application/how-much-pay
- SG MOM EP eligibility: https://www.mom.gov.sg/passes-and-permits/employment-pass/eligibility
- SG ICA Student's Pass: https://www.ica.gov.sg/reside/STP/collect
- AU Student visa cost and financial capacity: https://www.studyaustralia.gov.au/en/plan-your-move/your-guide-to-visas
- AU Student visa (subclass 500): https://immi.homeaffairs.gov.au/visas/getting-a-visa/visa-listing/student-500
- HK Immigration annual report: https://www.immd.gov.hk/eng/publications/a_report_2024.html
- HK Study visa arrangement: https://www.immd.gov.hk/eng/services/visas/study.html
- HK IANG arrangement: https://www.immd.gov.hk/eng/services/visas/IANG.html

## P0 Platform Compliance (Publishing Rules)

- Zhihu terms: https://www.zhihu.com/term/zhihu-terms
- Xiaohongshu creator rules route (login required): https://creator.xiaohongshu.com/rules
- WeChat OA operation rules template (login required): https://mp.weixin.qq.com/cgi-bin/readtemplate?t=home/operation_tmpl&lang=zh_CN
- WeChat OA agreement template (login required): https://mp.weixin.qq.com/cgi-bin/readtemplate?t=home/agreement_tmpl&lang=zh_CN
- Rule-source summary file: `evidence/sources/platform-rule-sources-20260218.md`

## P1 Employment Outcome / ROI

- AU QILT Graduate Outcomes Survey: https://www.qilt.edu.au/surveys/graduate-outcomes-survey-(gos)
- SG MOE GES parliamentary reply (historical URL): https://www.moe.gov.sg/news/parliamentary-replies/20250120-latest-graduate-employment-survey-outcomes
  - Access status: may return 404 in terminal; treat as `owner_fill_required` and verify via browser search.

## P1 School Admission Windows

- UK Exeter official deadline page: https://www.exeter.ac.uk/study/postgraduate/applying/applicationdeadlines/
  - Verified checkpoint: 2026/27 international deadline `2026-09-11 23:59 (UK time)`, UK deadline `2026-09-16 23:59`, January 2027 intake opens `2026-03-02`.
- UK Glasgow postgraduate taught list: https://www.gla.ac.uk/postgraduate/taught/
  - Verified checkpoint: programme cards expose `data-entrymonths` including `January`/`September` (some `April`).
- HKBU Graduate School timeline: https://gs.hkbu.edu.hk/admission/research-postgraduate-programmes/application/admission-timeline
  - Verified checkpoint: AY 2026/27 deadlines `2025-12-01` and `2026-04-15`.
- NUS School of Computing graduate application page: https://www.comp.nus.edu.sg/programmes/pg/misc/application/
  - Verified checkpoint: August intake opens `2025-10-01`, closes `2026-01-31`, and notes one intake per year from AY2025.
- NTU coursework admission guide: https://www.ntu.edu.sg/admissions/graduate/cwadmissionguide
  - Verified checkpoint: AY 2026-27 includes August/November/January intakes with portal windows by programme (for example, many August-intake programmes open `1 Nov` and close `31 Mar`).
- NUS OAM graduate admissions page: https://www.nus.edu.sg/oam/apply-to-nus/graduate
  - Access status: blocked by Incapsula in unauthenticated terminal request. Keep as manual browser-verified source.
- Unimelb graduate coursework FAQ: https://study.unimelb.edu.au/how-to-apply/graduate-coursework-study/international-applications/faqs
  - Access status: blocked by Cloudflare challenge in terminal request. Keep as manual browser-verified source.
- Do not use aggregator websites as primary evidence for admission windows.

## P2 Demand Signal

- Zhihu in-site search URL
- Xiaohongshu in-site search URL
- Google Trends

## Source Use Rules

- Policy conclusion must cite P0 only.
- P2 signals can decide topic priority, but cannot be used as policy evidence.
- Every evidence module must include `as_of` date and `not_applicable_group`.
- For anti-bot pages, save browser screenshot + timestamp and mark `owner_fill` with blocking reason.
- If cookie is needed, upload to `evidence/sources/cookies/` and follow `evidence/sources/cookie-upload-guide-20260217.md`.

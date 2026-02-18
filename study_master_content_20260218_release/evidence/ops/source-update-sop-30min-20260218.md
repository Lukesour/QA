# Weekly 30-Min Source Update SOP (2026-02-18)

Purpose: keep policy/admission/ROI sources fresh without overrun.

## Owner and Timebox

- Owner: suan
- Cadence: every Monday
- Duration: 30 minutes hard cap

## Minute-by-Minute Checklist

1. 0-10 min: P0 policy quick check
   - UK: `student-visa/money`, `student-visa`, `graduate-visa`, `IHS`
   - HK: study visa, IANG, visa fee page
   - SG: MOM EP eligibility, ICA STP collect, MOM student work exemption
   - AU: StudyAustralia subclass 500, Home Affairs archive updates
2. 10-20 min: P1 admission/ROI quick check
   - Exeter, Glasgow, HKBU, NUS SoC, NTU admission guide
   - NUS JAUGES, NTU graduate employment release, QILT GOS
3. 20-25 min: source freshness and stale flag
   - update `last_verified_date` in registry
   - if outdated > tier cycle, mark `review_required`
4. 25-30 min: evidence sync
   - patch SSOT and verification log
   - create owner-fill ticket for blocked pages (Zhihu/XHS/Trends/private backend)

## Output Rules

- Every updated number must include `as_of` date.
- Every blocked retrieval must include `block_reason + required screenshot fields`.
- No policy conclusion from P2 demand signals.

## Escalation Rule

- If any P0 number changed, same day patch all affected articles and CTA assets.

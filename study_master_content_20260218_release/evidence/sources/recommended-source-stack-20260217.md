# Recommended Source Stack (2026-02-18)

Use this stack for all A01-A30 updates. Priority order is mandatory.

## P0 Official Policy (Can Support Conclusion)

- UK Student visa money: https://www.gov.uk/student-visa/money
- UK Student visa fee page: https://www.gov.uk/student-visa
- UK Graduate visa: https://www.gov.uk/graduate-visa
- UK Immigration Health Surcharge: https://www.gov.uk/healthcare-immigration-application/how-much-pay
- HK Study visa: https://www.immd.gov.hk/eng/services/visas/study.html
- HK IANG: https://www.immd.gov.hk/eng/services/visas/IANG.html
- HK fees page (terminal parser may be unstable, use owner browser capture if blocked): https://www.immd.gov.hk/eng/services/fees/visas/fees-for-visas-and-entry-permits.html
- HK annual report appendix 5: https://www.immd.gov.hk/publications/a_report_2024/en/appendix5.html
- SG MOM EP eligibility: https://www.mom.gov.sg/passes-and-permits/employment-pass/eligibility
  - as_of_2026_02_18_checkpoint: new applications salary floor from 2025-01-01 is SGD 5,600 (financial services SGD 6,200); same criteria apply for renewals from 2026-01-01.
- SG ICA Student's Pass collect: https://www.ica.gov.sg/reside/STP/collect
- SG Student work exemption: https://www.mom.gov.sg/passes-and-permits/work-pass-exemption-for-foreign-students
- AU Student visa page: https://www.studyaustralia.gov.au/en/plan-your-move/your-guide-to-visas/student-visa-subclass-500
- AU financial capacity update (AUD 29,710): https://immi.homeaffairs.gov.au/news-media/archive/article?itemId=1216
- AU Genuine Student update (GTE replacement): https://immi.homeaffairs.gov.au/news-media/archive/article?itemId=1210
  - parser note: Home Affairs archive pages can fail in terminal mode; keep `owner_fill_if_blocked` and attach browser screenshot.

## P1 Admission Window / Programme Evidence

- Exeter deadline page: https://www.exeter.ac.uk/study/postgraduate/applying/applicationdeadlines/
- Glasgow postgraduate key dates: https://www.gla.ac.uk/postgraduate/dates/
- Glasgow taught programme finder: https://www.gla.ac.uk/postgraduate/taught/
- HKBU timeline: https://gs.hkbu.edu.hk/admission/research-postgraduate-programmes/application/admission-timeline
- NUS SoC graduate application: https://www.comp.nus.edu.sg/programmes/pg/misc/application/
- NTU coursework admission guide: https://www.ntu.edu.sg/admissions/graduate/cwadmissionguide

## P1 Employment Outcome / ROI

- UK HESA graduate outcomes: https://www.hesa.ac.uk/data-and-analysis/graduates/outcomes
- SG NUS JAUGES official release: https://news.nus.edu.sg/jauges2024/
- SG NTU employment release: https://www.ntu.edu.sg/news/detail/ntu-graduates-maintain-strong-employment-rates-and-better-starting-pay-amid-global-economic-volatility
- AU QILT GOS: https://www.qilt.edu.au/surveys/graduate-outcomes-survey-(gos)
- SG data.gov GES dataset (new endpoint): https://data.gov.sg/datasets/d_493892c2528711f5aadbb64f90bb0f8d/view
  - endpoint note: dataset URIs can change after platform revisions; keep screenshot evidence in weekly archive.

## P2 Demand Signal (Topic Priority Only)

- Zhihu in-site search URL
- Xiaohongshu in-site search URL
- Google Trends

## P2 Platform Rule Sources (Compliance)

- WeChat OA rules: operator captures from WeChat official backend rule/violation center (terminal mode cannot access private console)
- Xiaohongshu creator rules: operator captures from Xiaohongshu creator backend rule center (terminal mode cannot access private console)

## P3 First-Party Closed-Loop Data (Most Valuable)

- `offers.jsonl`
- comment high-frequency questions by article
- DM questionnaire fields and conversion logs
- weekly funnel board (`Read Completion Rate`, `DMs`, `Form Submits`, `Consult Bookings`, `Deals`)

## Source Use Rules

- Policy conclusion must cite P0 only.
- P2 data can rank topics, but cannot support policy statements.
- Every evidence module must include `as_of` date and `not_applicable_group`.
- For anti-bot pages, keep `owner_fill` status and attach browser screenshot + timestamp.
- Canonical policy number references must match `evidence/policy/policy-single-source-of-truth-20260218.md`.
- If a P0 source is parse-blocked in terminal, do not downgrade source level; mark `owner_fill_if_blocked` and request browser capture.

# Policy Verification Log (2026-02-18)

This log keeps the exact checkpoints verified before content updates.

| region | page | key checkpoint | verified_on |
|---|---|---|---|
| UK | https://www.gov.uk/student-visa/money | London GBP 1,529/month, outside London GBP 1,171/month | 2026-02-18 |
| UK | https://www.gov.uk/graduate-visa | 2027-01-01 changes: Bachelor/Master 18 months, PhD 3 years | 2026-02-18 |
| UK | https://www.gov.uk/healthcare-immigration-application/how-much-pay | Student/dependant IHS GBP 776/year | 2026-02-18 |
| SG | https://www.mom.gov.sg/passes-and-permits/employment-pass/eligibility | Current S$5,600/S$6,200; from 2027-01-01 S$6,000/S$6,600 | 2026-02-18 |
| SG | https://www.ica.gov.sg/reside/STP/collect | Student's Pass issuance S$60; Multiple Journey Visa S$30 (if applicable) | 2026-02-18 |
| AU | https://www.studyaustralia.gov.au/en/plan-your-move/your-guide-to-visas/student-visa-subclass-500 | Student visa application fee AUD 2,000; generally up to 48 hours per fortnight during study period | 2026-02-18 |
| AU | https://immi.homeaffairs.gov.au/visas/getting-a-visa/visa-listing/student-500 | Course session work limit 48 hours per fortnight; stay up to 6 years in line with enrolment | 2026-02-18 |
| HK | https://www.immd.gov.hk/eng/publications/a_report_2024.html | IANG approvals exceeded 160,000 as at 2024-12-31 | 2026-02-18 |
| HK | https://www.immd.gov.hk/eng/services/visas/study.html | Study visa normal processing time: about 6 weeks after all required documents received | 2026-02-18 |
| HK | https://www.immd.gov.hk/eng/services/visas/IANG.html | IANG recent graduates can be granted 24 months stay without prior job offer | 2026-02-18 |
| AU | https://www.qilt.edu.au/surveys/graduate-outcomes-survey-(gos) | 2024 domestic undergrad full-time employment 74.0% (79.0% in 2023) | 2026-02-18 |

## Admission Window Verification Addendum

| region | page | key checkpoint | access_status | verified_on |
|---|---|---|---|---|
| UK | https://www.exeter.ac.uk/study/postgraduate/applying/applicationdeadlines/ | International deadline 2026-09-11 23:59 (UK time); UK deadline 2026-09-16 23:59; Jan 2027 intake opens 2026-03-02 | accessible | 2026-02-18 |
| UK | https://www.gla.ac.uk/postgraduate/taught/ | Programme cards include `data-entrymonths` such as January/September (some April) | accessible | 2026-02-18 |
| HK | https://gs.hkbu.edu.hk/admission/research-postgraduate-programmes/application/admission-timeline | AY 2026/27 deadlines: 1st 2025-12-01, 2nd 2026-04-15 | accessible | 2026-02-18 |
| SG | https://www.comp.nus.edu.sg/programmes/pg/misc/application/ | August intake opens 2025-10-01, closes 2026-01-31; only one annual intake from AY2025 | accessible | 2026-02-18 |
| SG | https://www.ntu.edu.sg/admissions/graduate/cwadmissionguide | AY 2026-27 table lists August/November/January intakes and portal open/close windows by programme | accessible | 2026-02-18 |
| SG | https://www.nus.edu.sg/oam/apply-to-nus/graduate | Terminal retrieval blocked by Incapsula challenge | blocked_owner_fill | 2026-02-18 |
| AU | https://study.unimelb.edu.au/how-to-apply/graduate-coursework-study/international-applications/faqs | Terminal retrieval blocked by Cloudflare challenge | blocked_owner_fill | 2026-02-18 |
| SG | https://www.moe.gov.sg/news/parliamentary-replies/20250120-latest-graduate-employment-survey-outcomes | Historical GES URL may return 404 in terminal and needs browser/manual verification | blocked_owner_fill | 2026-02-18 |

## Retrieval Notes

- Zhihu/Xiaohongshu result counts could not be reliably captured via unauthenticated requests due anti-bot/login walls.
- NUS OAM and Unimelb FAQ pages are in anti-bot mode for terminal retrieval; keep these items as manual browser verification tasks with screenshot evidence.
- MOE historical parliamentary-reply URL for GES is unstable in terminal retrieval; keep as `owner_fill` and verify from MOE website search in browser.
- These fields remain owner-fill in `evidence/seo/keyword-snapshots-20260217.md`.

## Round-4 Web Revalidation (2026-02-18)

- UK GOV pages were rechecked via web search/open:
  - Student money page still shows London GBP 1,529 and outside London GBP 1,171.
  - Graduate visa page still shows 2027-01-01 policy split (18 months for most non-PhD new applicants).
  - IHS page still shows GBP 776/year for students and dependants.
- SG MOM EP eligibility page still shows current S$5,600/S$6,200 and 2027-01-01 thresholds S$6,000/S$6,600.
- AU Study Australia page with direct fee anchor was rechecked:
  - https://www.studyaustralia.gov.au/en/plan-your-move/your-guide-to-visas/student-visa-subclass-500
  - checkpoint: Student visa application fee A$2,000 and study-period work restriction generally up to 48 hours per fortnight.

## Round-6 Web Revalidation (2026-02-18)

- Added dedicated round note: `evidence/policy/policy-revalidation-round6-20260218.md`.
- Reconfirmed no same-day threshold change for:
  - UK Student visa money / Graduate visa / IHS / Student visa fee.
  - SG EP eligibility / ICA Student's Pass collection fee.
  - HK Study visa processing and IANG first-stay window.
  - AU student visa fee and work-right summary.
- Unresolved browser-proof items remain in owner-fill queue:
  - HK detailed fee screenshot archive.
  - AU living-cost numeric screenshot when terminal page does not expose static value.

# Policy Single Source of Truth (SSOT) (Verified on 2026-02-18)

Owner: suan
Scope: A01-A30 policy and admission baseline
Rule: Any policy conclusion must quote this file first. Other files reference this file, not vice versa.

## P0 Policy Baseline

| Region | Topic | Current Truth (as of 2026-02-18) | Source |
|---|---|---|---|
| UK | Student visa financial evidence | London GBP 1,529/month; outside London GBP 1,171/month; up to 9 months; funds held 28 consecutive days and ending within 31 days before apply | https://www.gov.uk/student-visa/money |
| UK | Student visa fee | GBP 524 (outside UK and in-UK extension/switch same fee) | https://www.gov.uk/student-visa |
| UK | IHS | Students and dependants GBP 776/year | https://www.gov.uk/healthcare-immigration-application/how-much-pay |
| UK | Graduate visa | Apply before 2027-01-01: usually 2 years (PhD 3 years); on/after 2027-01-01: usually 18 months (PhD 3 years); fee GBP 880 | https://www.gov.uk/graduate-visa |
| HK | Study visa processing | Normal processing is about 6 weeks after all required docs received | https://www.immd.gov.hk/eng/services/visas/study.html |
| HK | IANG stay length | First stay is 24 months without other stay conditions | https://www.immd.gov.hk/eng/services/visas/IANG.html |
| HK | Specified schemes fee | Effective 2025-02-26, application fee HKD 600 and visa/entry permit fee (stay over 180 days) HKD 1,300 | https://www.immd.gov.hk/eng/specifiedschemes.html |
| HK | Annual migration stats | 2024 student visas/entry permits: 74,466; IANG visas/entry permits in 2024: 25,475 | https://www.immd.gov.hk/publications/a_report_2024/en/appendix5.html |
| SG | Employment Pass salary floor | From 2025-01-01 for new applications: SGD 5,600 (financial services SGD 6,200), increasing with age; same criteria apply to renewals from 2026-01-01 | https://www.mom.gov.sg/passes-and-permits/employment-pass/eligibility |
| SG | Employment Pass watchpoint | 2027 threshold updates are published on the same eligibility page; operator should review before each monthly policy refresh | https://www.mom.gov.sg/passes-and-permits/employment-pass/eligibility |
| SG | Student's Pass issuance | Issuance fee SGD 60; multiple-journey visa fee SGD 30 (if applicable) | https://www.ica.gov.sg/reside/STP/collect |
| SG | Student work rights | Full-time approved students can work up to 16 hours/week during term without work pass; during vacation period can work without work pass subject to MOM eligibility | https://www.mom.gov.sg/passes-and-permits/work-pass-exemption-for-foreign-students |
| AU | Student visa fee | Student visa (subclass 500) application fee AUD 2,000 (from 2025-07-01) | https://www.studyaustralia.gov.au/en/plan-your-move/your-guide-to-visas/student-visa-subclass-500 |
| AU | Financial capacity reference | Primary applicant annual living cost requirement AUD 29,710 (from 2024-05-10) | https://immi.homeaffairs.gov.au/news-media/archive/article?itemId=1216 |
| AU | Student work rights | During study periods, student visa holders can work up to 48 hours per fortnight | https://www.studyaustralia.gov.au/en/plan-your-move/your-guide-to-visas/student-visa-subclass-500 |
| AU | GS requirement | Genuine Student replaced GTE from 2024-03-23 | https://immi.homeaffairs.gov.au/news-media/archive/article?itemId=1210 |

## P1 Admission & ROI Baseline

| Type | Source | Verified Point | Status |
|---|---|---|---|
| UK admission window | https://www.exeter.ac.uk/study/postgraduate/applying/applicationdeadlines/ | 2026/27 international deadline 2026-09-11 23:59 (UK), UK deadline 2026-09-16 23:59, Jan 2027 intake opens 2026-03-02 | verified |
| UK admission window | https://www.gla.ac.uk/postgraduate/dates/ | Postgraduate key dates include Sep 2026 intake and Jan 2027 intake timeline anchors | verified |
| UK ROI baseline | https://www.graduateoutcomes.ac.uk/ | 2022/23 graduates in employment or further study: 88% | verified |
| HK admission window | https://gs.hkbu.edu.hk/admission/research-postgraduate-programmes/application/admission-timeline | AY2026/27 rounds: 2025-12-01 and 2026-04-15 | verified |
| SG admission window | https://www.comp.nus.edu.sg/programmes/pg/misc/application/ | NUS SoC MSc windows listed on page (e.g., Aug 2026 intake open 2025-10-01 and close 2026-01-31) | verified |
| SG admission window | https://www.ntu.edu.sg/admissions/graduate/cwadmissionguide | Coursework guide page includes example application period metadata (e.g., 1 Nov to 31 Mar) | verified |
| SG ROI baseline | https://news.nus.edu.sg/jauges2024/ | NUS-published JAUGES 2024 benchmark: labour-force graduates had 88.1% employment and 80.9% full-time permanent employment (6 months after finals) | verified |
| SG ROI baseline | https://www.ntu.edu.sg/news/detail/ntu-graduates-maintain-strong-employment-rates-and-better-starting-pay-amid-global-economic-volatility | NTU release confirms strong 2024 graduate employment and higher median/mean pay by discipline | verified |
| AU ROI baseline | https://www.qilt.edu.au/surveys/graduate-outcomes-survey-(gos) | QILT GOS remains the official AU graduate outcomes source | verified |
| SG ROI dataset endpoint | https://data.gov.sg/datasets/d_493892c2528711f5aadbb64f90bb0f8d/view | Endpoint may change by data.gov.sg revision; if unavailable in terminal, keep owner browser capture and timestamp | owner_fill_if_blocked |

## P2 Demand Signal Rule

- Zhihu/Xiaohongshu/Google Trends can set topic priority, but cannot support policy conclusion.
- If anti-bot/login blocks data capture, keep field as owner-fill and attach capture SOP + screenshot timestamp.

## Retrieval Constraints (as of 2026-02-18)

- Zhihu/Xiaohongshu search totals are blocked in terminal mode because of login and anti-bot signatures.
- Home Affairs Australia archive pages are unstable for automated parsing; keep latest owner browser evidence if terminal parser fails.
- HK ImmD fees page may return inconsistent responses in terminal mode; if data cannot be parsed, keep P0 and request browser screenshot capture.

## Change Control

- If any P0 item changes, patch all related article data points and lead magnet claims on the same day.
- No policy number may appear in article text unless it can be mapped back to this file line-by-line.

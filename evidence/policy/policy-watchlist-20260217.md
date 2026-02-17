# Policy Watchlist (as_of=2026-02-17)

This file records high-volatility policy checkpoints that can directly change article accuracy.

## UK

- Student visa money requirement ([gov.uk/student-visa/money](https://www.gov.uk/student-visa/money)):
  - London: GBP 1,529/month (up to 9 months)
  - Outside London: GBP 1,171/month (up to 9 months)
- Graduate visa duration ([gov.uk/graduate-visa](https://www.gov.uk/graduate-visa)):
  - Applications on or before 2026-12-31: usually 2 years (Bachelor/Master), 3 years (PhD)
  - Applications from 2027-01-01: 18 months (Bachelor/Master), 3 years (PhD)
- Immigration Health Surcharge ([gov.uk/healthcare-immigration-application/how-much-pay](https://www.gov.uk/healthcare-immigration-application/how-much-pay)):
  - Student/dependant: GBP 776/year

## Singapore

- Employment Pass eligibility ([mom.gov.sg/.../employment-pass/eligibility](https://www.mom.gov.sg/passes-and-permits/employment-pass/eligibility)):
  - Current minimum qualifying salary: SGD 5,600
  - Financial services minimum: SGD 6,200
  - From 2027-01-01: SGD 6,000 (general), SGD 6,600 (financial services)
- Student's Pass issuance ([ica.gov.sg/reside/STP/collect](https://www.ica.gov.sg/reside/STP/collect)):
  - Issuance fee: SGD 60
  - Multiple Journey Visa fee (if applicable): SGD 30

## Australia

- Student visa application charge ([studyaustralia.gov.au/.../cost-of-student-visa](https://www.studyaustralia.gov.au/en/plan-your-move/visa-requirements/cost-of-student-visa)):
  - From 2025-07-01: AUD 2,000 (primary applicant)
- Student visa work/stay conditions ([immi.homeaffairs.gov.au student-500](https://immi.homeaffairs.gov.au/visas/getting-a-visa/visa-listing/student-500)):
  - Course session work limit: up to 48 hours per fortnight
  - Stay duration: up to 6 years aligned with enrolment

## Hong Kong

- Immigration annual report ([immd.gov.hk ... annual report 2024](https://www.immd.gov.hk/eng/publications/a_report_2024.html)):
  - IANG approvals exceeded 160,000 as at 2024-12-31
- Student visa arrangement ([immd.gov.hk study](https://www.immd.gov.hk/eng/services/visas/study.html)):
  - Standard processing timeline: about 6 weeks after receiving all required documents
- IANG policy ([immd.gov.hk IANG](https://www.immd.gov.hk/eng/services/visas/IANG.html)):
  - Recent graduates can generally receive 24 months initial stay without prior job offer

## Action Rules

- If policy checkpoint is older than 30 days, linked decision/career articles must be downgraded to `review_required`.
- If source cannot be re-verified (login wall / anti-bot), keep existing conclusion but mark evidence as `review_required_with_owner_fill`.
- Every decision article must include: `as_of` date + official source link + `not_applicable_group`.

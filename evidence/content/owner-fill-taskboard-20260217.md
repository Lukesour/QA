# Owner Fill Taskboard (2026-02-17)

This board tracks fields that cannot be auto-collected in terminal mode and must be filled by owner.

## A. Login / Anti-Bot Sources

| source | block type | owner action | done |
|---|---|---|---|
| https://www.nus.edu.sg/oam/apply-to-nus/graduate | Incapsula challenge | Upload `nus.cookies.txt` to `evidence/sources/cookies/` and capture dated screenshot | [ ] |
| https://study.unimelb.edu.au/how-to-apply/graduate-coursework-study/international-applications/faqs | Cloudflare challenge | Upload `unimelb.cookies.txt` to `evidence/sources/cookies/` and capture dated screenshot | [ ] |
| https://www.zhihu.com/search | login wall / anti-bot | Upload `zhihu.cookies.txt`, then fill numeric slot in SEO snapshot | [ ] |
| https://www.xiaohongshu.com/search_result | login wall / anti-bot | Upload `xiaohongshu.cookies.txt`, then fill numeric slot in SEO snapshot | [ ] |

## B. SEO Numeric Slots

- file: `evidence/seo/keyword-snapshots-20260217.md`
- required fields per article: `zhihu_result_count`, `xhs_result_count`, `google_trends_index_90d`
- status: waiting owner fill for A01-A30

## C. Conversion Integration Keys

- file: `evidence/conversion/conversion-closed-loop-20260217.md`
- required:
  - `__YOU_FILL_HUBSPOT_APP_ID__`
  - `__YOU_FILL_TYPEFORM_FORM_ID__`
  - `__YOU_FILL_CALENDLY_ORG_URI__`
  - `__YOU_FILL_DOMAIN__`
  - `__YOU_FILL_TABLE__`
  - `__YOU_FILL_OWNER_MAP__`

## D. Case Evidence Upload

- index: `evidence/case-proofs/index.md`
- current status: templates prepared for A01-A30, real proof files pending upload
- required per case: timestamp-visible screenshot + action proof + result proof + PII mask

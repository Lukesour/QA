# Owner Fill Taskboard (2026-02-17)

This board tracks fields that cannot be auto-collected in terminal mode and must be filled by owner.

## A. Login / Anti-Bot Sources

| source | block type | owner action | done |
|---|---|---|---|
| https://www.nus.edu.sg/oam/apply-to-nus/graduate | Incapsula challenge | Upload `nus.cookies.txt` to `evidence/sources/cookies/` and capture dated screenshot | [ ] |
| https://study.unimelb.edu.au/how-to-apply/graduate-coursework-study/international-applications/faqs | Cloudflare challenge | Upload `unimelb.cookies.txt` to `evidence/sources/cookies/` and capture dated screenshot | [ ] |
| https://www.zhihu.com/search | login wall / anti-bot | `zhihu.cookies.txt` already uploaded, but validation shows `logged:false`; refresh cookie and re-test | [ ] |
| https://www.xiaohongshu.com/search_result | login wall / anti-bot | `xiaohongshu.cookies.txt` already uploaded, but validation shows `loggedIn:false`; refresh cookie and re-test | [ ] |
| validation log | status tracker | See `evidence/sources/cookie-validation-log-20260218.md` | [x] |

## B. SEO Numeric Slots

- file: `evidence/seo/keyword-snapshots-20260217.md`
- required fields per article: `zhihu_result_count`, `xhs_result_count`, `google_trends_index_90d`
- status: waiting owner fill for A01-A30

## C. Conversion Integration Keys

- file: `evidence/conversion/conversion-closed-loop-20260217.md`
- required:
  - `[待你填写_HUBSPOT_APP_ID]`
  - `[待你填写_TYPEFORM_FORM_ID]`
  - `[待你填写_CALENDLY_ORGANIZATION_URI]`
  - `[待你填写_WEBHOOK_DOMAIN]`
  - `[待你填写_DATA_WAREHOUSE_TABLE]`
  - `[待你填写_SALES_OWNER_MAPPING]`

## D. Case Evidence Upload

- index: `evidence/case-proofs/index.md`
- current status: templates prepared for A01-A30, real proof files pending upload
- required per case: timestamp-visible screenshot + action proof + result proof + PII mask

## E. Publish Priority

- primary publish file: `evidence/content/publish-ready-longform-20260217.md`
- fallback outline file: `evidence/content/publish-ready-drafts-20260217.md`

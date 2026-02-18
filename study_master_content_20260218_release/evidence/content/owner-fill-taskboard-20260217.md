# Owner Fill Taskboard (2026-02-18)

This board tracks fields that cannot be auto-collected in terminal mode and must be filled by owner.

## A. Login / Anti-Bot Sources

| source | block type | owner action | done |
|---|---|---|---|
| https://www.zhihu.com/search | login wall / anti-bot | refresh logged-in cookie and capture browser screenshot for each seed keyword | [ ] |
| https://www.xiaohongshu.com/search_result | login wall / anti-bot | refresh logged-in cookie and capture browser screenshot for each seed keyword | [ ] |
| https://trends.google.com/trends/explore | browser-only trend UI | capture China + Past 90 days chart screenshot for each seed keyword | [ ] |
| WeChat OA rule center (backend) | private backend | capture latest platform rule version screenshot (title/date/status/time) | [ ] |
| Xiaohongshu creator rule center (backend) | private backend | capture latest rule screenshot (title/date/status/time) | [ ] |
| validation log | status tracker | see `evidence/sources/cookie-validation-log-20260218.md` | [x] |

## B. SEO Numeric Slots

- file: `evidence/seo/keyword-snapshots-20260217.md`
- required fields per article: `zhihu_result_count`, `xiaohongshu_result_count`, `google_trends_index_90d`
- sprint priority (first): `A01/A02/A03/A09/A17/A24/A25/A29`

## C. Conversion Integration Keys

- file: `evidence/conversion/conversion-closed-loop-20260217.md`
- required:
  - `MANUAL_FILL_REQUIRED_HUBSPOT_APP_ID`
  - `MANUAL_FILL_REQUIRED_TYPEFORM_FORM_ID`
  - `MANUAL_FILL_REQUIRED_CALENDLY_ORGANIZATION_URI`
  - `MANUAL_FILL_REQUIRED_DOMAIN`
  - `MANUAL_FILL_REQUIRED_TABLE`
  - `MANUAL_FILL_REQUIRED_OWNER_MAP`

## D. Case Evidence Upload

- index: `evidence/case-proofs/index.md`
- mapping: `evidence/case-proofs/offers-case-mapping-20260218.md`
- required per case: timestamp-visible screenshot + action proof + result proof + PII mask
- sprint priority bundles:
  - `CASE-UK-001`, `CASE-UK-002`, `CASE-UK-003`
  - `CASE-HK-001`
  - `CASE-SG-001`
  - `CASE-AU-001`, `CASE-AU-002`, `CASE-AU-006`

## E. Publish Priority

- seed material cards: `evidence/content/seed-8-ops-cards-20260218.md`
- longform publish file: `evidence/content/publish-ready-longform-20260217.md`
- fallback outline file: `evidence/content/publish-ready-drafts-20260217.md`

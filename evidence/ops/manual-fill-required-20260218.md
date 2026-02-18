# Manual Fill Required (2026-02-18)

## 1) SEO Numeric Slots (Login/Browser Required)

- File: `evidence/seo/keyword-snapshots-20260217.md`
- JSON path: `v1_2_content_system.seo_signal_registry.signals[*]`
- Remaining fields requiring manual browser capture:
  - `zhihu_result_count` (public terminal blocked by anti-bot 403)
  - `xiaohongshu_result_count` total (public page shows content frame, but stable total count is not exposed in terminal)
  - `google_trends_index_90d` (Google Trends UI manual capture)
- Completed this round:
  - All placeholder tokens were replaced with explicit status messages instead of `MANUAL_FILL_REQUIRED_*`.
  - A01 retains HAR lower-bound evidence.

## 2) Real Case Evidence Upload (Private Numbers)

- Folder root: `evidence/case-proofs/bundles/`
- Required files per case:
  - `01-context-with-timestamp.png`
  - `02-action-steps.png`
  - `03-result-comparison.png`
  - `04-desensitization-note.md`
- Public benchmark reference (already prepared):
  - `evidence/case-proofs/public-benchmark-reference-20260218.md`

## 3) Conversion Integration Credentials

- JSON path: `v1_2_content_system.private_conversion_funnel.extension`
- Manual secrets/IDs still required:
  - `MANUAL_FILL_REQUIRED_HUBSPOT_APP_ID`
  - `MANUAL_FILL_REQUIRED_TYPEFORM_FORM_ID`
  - `MANUAL_FILL_REQUIRED_CALENDLY_ORGANIZATION_URI`
  - Webhook target URLs and PAT/tokens

## 4) Source Access Gaps Requiring Browser/Open Manual Validation

- Zhihu creator backend metrics
- Xiaohongshu creator backend metrics
- WeChat official account backend conversion metrics
- Any source blocked by anti-bot or challenge pages in terminal mode

## 5) Recommended Fill Order

1. Fill SEO totals for top-priority 8 articles first (A01/A02/A03/A09/A17/A24/A25/A29).
2. Upload case evidence for next 7 publish-day articles.
3. Fill private funnel IDs and run one end-to-end webhook test.

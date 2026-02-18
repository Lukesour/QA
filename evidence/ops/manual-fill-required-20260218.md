# Manual Fill Required (2026-02-18)

## 1) SEO Numeric Slots (Login Required)
- File: `evidence/seo/keyword-snapshots-20260217.md`
- JSON path: `v1_2_content_system.seo_signal_registry.signals[*]`
- Fields pending:
  - `zhihu_result_count`
  - `xiaohongshu_result_count`
  - `google_trends_index_90d`

## 2) Real Case Evidence Upload
- Folder root: `evidence/case-proofs/bundles/`
- Required files per case:
  - `01-context-with-timestamp.png`
  - `02-action-steps.png`
  - `03-result-comparison.png`
  - `04-desensitization-note.md`

## 3) Conversion Integration Credentials
- JSON path: `v1_2_content_system.private_conversion_funnel.extension`
- Fields pending:
  - `__YOU_FILL_HUBSPOT_APP_ID__`
  - `__YOU_FILL_TYPEFORM_FORM_ID__`
  - `__YOU_FILL_CALENDLY_ORG_URI__`
  - All webhook target URLs and tokens

## 4) Cookies Needed For Automated SEO Capture
- Zhihu logged-in cookie (`www.zhihu.com`), able to open content search pages.
- Xiaohongshu logged-in cookie (`www.xiaohongshu.com`), able to open search result pages without challenge page.

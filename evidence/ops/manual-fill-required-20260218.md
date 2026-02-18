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
  - `OWNER_FILL_HUBSPOT_APP_ID`
  - `OWNER_FILL_TYPEFORM_FORM_ID`
  - `OWNER_FILL_CALENDLY_ORGANIZATION_URI`
  - All webhook target URLs and tokens

## 4) Cookies Needed For Automated SEO Capture
- Zhihu:
  - Required cookie domain: `www.zhihu.com`
  - Required proof: open `https://www.zhihu.com/search?type=content&q=英国授课型硕士值不值` and page data shows `"logged":true`
  - If using API endpoint, also need valid anti-bot signature headers from same browser request: `x-zse-93` and dynamic `x-zse-96`.
- Xiaohongshu:
  - Required cookie domain: `www.xiaohongshu.com` and `edith.xiaohongshu.com`
  - Required proof: open `https://www.xiaohongshu.com/search_result?keyword=英国授课型硕士值不值` and page data shows `"loggedIn":true`
  - If calling search API, also need dynamic headers from same request: `x-s`, `x-s-common`, `x-t` (these are time-sensitive).

## 5) One-Time Upload Shortcut (Recommended)
- Upload one authenticated HAR file each:
  - `zhihu_search.har` (a successful search request in logged-in browser)
  - `xhs_search.har` (a successful search request in logged-in browser)
- With HAR, we can replay request headers exactly and fill numeric slots faster.

## 6) Current Blocked Sources (Need Browser/Open Manually)
- `SRC-AU-UNIMELB-INTAKE-FAQ-2026`: `https://study.unimelb.edu.au/how-to-apply/entry-requirements/important-dates` (Cloudflare/403 in terminal)
- `SRC-HK-EDUHK-TAUGHT-PG-INTAKE-2026`: `https://www.eduhk.hk/acadprog/en/postgrad/index.html` (TLS handshake issue in terminal environment)
- `SRC-ZHIHU-AI-GOVERNANCE-2025`: `https://zhuanlan.zhihu.com/p/1945125274678665604` (Zhihu anti-bot/403 in terminal)

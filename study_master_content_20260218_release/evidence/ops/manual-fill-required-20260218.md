# Manual Fill Required (2026-02-18)

## 1) SEO Numeric Slots (Login/Browser Required)

- Source file: `evidence/seo/keyword-snapshots-20260217.md`
- JSON path: `v1_2_content_system.seo_signal_registry.signals[*]`
- Fields still blocked in terminal mode:
  - `zhihu_result_count`
  - `xiaohongshu_result_count`
  - `google_trends_index_90d`

### Zhihu Capture SOP (运营执行)

1. 登录知乎网页端账号（确保能正常访问搜索页）。
2. 打开对应关键词链接（文件里每篇都给了 `zhihu_query_url`）。
3. 记录以下字段：
   - 关键词
   - 结果总量（或首屏可见总量口径）
   - 抓取时间（精确到分钟）
   - 账号状态（登录）
4. 截图要求：
   - 必须包含浏览器地址栏、关键词、结果区域、系统时间。
5. 回填格式建议：
   - `zhihu_result_count: 1230 (browser_logged_in_capture_2026-02-18_20:35)`

### 小红书 Capture SOP (运营执行)

1. 登录小红书网页端（不要用无痕模式）。
2. 打开 `xiaohongshu_query_url`。
3. 记录字段：
   - 关键词
   - 可见总量/首屏口径（统一口径）
   - 抓取时间
4. 截图要求：
   - 地址栏、关键词、结果区域、系统时间同屏。
5. 回填格式建议：
   - `xiaohongshu_result_count: 860 (browser_logged_in_capture_2026-02-18_20:42)`

### Google Trends Capture SOP (运营执行)

1. 打开 https://trends.google.com/trends/explore
2. 地区统一 `China`，时间统一 `Past 90 days`。
3. 输入关键词后记录：
   - 90天相对热度峰值（0-100）
   - 若无数据，填 `insufficient_data`。
4. 截图要求：
   - 搜索词、地区、时间范围、曲线图、系统时间同屏。
5. 回填格式建议：
   - `google_trends_index_90d: 57 (trends_capture_2026-02-18_20:50)`

## 2) Case Proof Upload (Owner Upload Required)

- Folder root: `evidence/case-proofs/bundles/`
- Case mapping file: `evidence/case-proofs/offers-case-mapping-20260218.md`
- Required files per bundle:
  - `01-context-with-timestamp.png`
  - `02-action-steps.png`
  - `03-result-comparison.png`
  - `04-desensitization-note.md`

## 3) Conversion Integration Credentials (Private)

- JSON path: `v1_2_content_system.private_conversion_funnel.extension`
- Still pending manual secrets:
  - `MANUAL_FILL_REQUIRED_HUBSPOT_APP_ID`
  - `MANUAL_FILL_REQUIRED_TYPEFORM_FORM_ID`
  - `MANUAL_FILL_REQUIRED_CALENDLY_ORGANIZATION_URI`

## 4) Weekly Dashboard Priority Fill (先填5个关键字段)

- File: `evidence/ops/weekly-content-funnel-dashboard-20260218.md`
- Priority order:
  1. `Read Completion Rate`
  2. `DMs`
  3. `Form Submits`
  4. `Consult Bookings`
  5. `Deals`

## 5) Recommended Execution Order

1. 先补 A01/A02/A03/A09/A17/A24/A25/A29 的 SEO 三项真实值。
2. 再上传 A01-A08 的案例截图，确保首批发布证据闭环。
3. 再补剩余 22 篇案例截图与周看板关键字段。

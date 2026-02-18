# SEO Keyword Snapshot (2026-02-18)

This snapshot records article-level search signal references.

## Data Collection Status
- Zhihu and Xiaohongshu search pages are currently blocked by anti-bot/login verification in this environment.
- Existing cookie files and user-provided header cookies are still not sufficient to capture stable result counts.
- Numeric fields now use explicit capture-status strings; totals still require logged-in browser capture.
- A01 has partial HAR-derived lower-bound counts (not full result totals): Zhihu page_size=20 and `is_end=false`; Xiaohongshu first page returned 22 items and `has_more=true`.

## Seed Sprint Priority (First Fill)

- Priority articles: `A01/A02/A03/A09/A17/A24/A25/A29`
- Required completion for each priority article:
  - `zhihu_result_count`
  - `xiaohongshu_result_count`
  - `google_trends_index_90d`
- If any priority article still has `blocked_403_or_login_required_*`, keep publish state at `draft_ready`.

| Article | Core Keyword | Zhihu Query URL | Xiaohongshu Query URL | Signal Tier | Signal Score | Zhihu Count | Xiaohongshu Count | Google Trends 90d | Status |
|---|---|---|---|---|---|---|---|---|---|
| A01 | 英国授课型硕士值不值 | https://www.zhihu.com/search?type=content&q=英国授课型硕士值不值 | https://www.xiaohongshu.com/search_result?keyword=英国授课型硕士值不值 | high | 4 | >=20 (HAR page1, is_end=false) | >=22 (HAR page1, has_more=true) | MANUAL_BROWSER_CAPTURE_REQUIRED | partial_har_lower_bound_waiting_total_capture |
| A02 | 一年制英硕适合谁 | https://www.zhihu.com/search?type=content&q=一年制英硕适合谁 | https://www.xiaohongshu.com/search_result?keyword=一年制英硕适合谁 | high | 4 | blocked_403_or_login_required_2026-02-18 | blocked_403_or_login_required_2026-02-18 | MANUAL_BROWSER_CAPTURE_REQUIRED | partial_public_capture_waiting_browser_login |
| A03 | 英国选校冲稳保 | https://www.zhihu.com/search?type=content&q=英国选校冲稳保 | https://www.xiaohongshu.com/search_result?keyword=英国选校冲稳保 | high | 4 | blocked_403_or_login_required_2026-02-18 | blocked_403_or_login_required_2026-02-18 | MANUAL_BROWSER_CAPTURE_REQUIRED | partial_public_capture_waiting_browser_login |
| A04 | 英国硕士预算 | https://www.zhihu.com/search?type=content&q=英国硕士预算 | https://www.xiaohongshu.com/search_result?keyword=英国硕士预算 | high | 4 | blocked_403_or_login_required_2026-02-18 | blocked_403_or_login_required_2026-02-18 | MANUAL_BROWSER_CAPTURE_REQUIRED | partial_public_capture_waiting_browser_login |
| A05 | 低GPA申英国硕士 | https://www.zhihu.com/search?type=content&q=低GPA申英国硕士 | https://www.xiaohongshu.com/search_result?keyword=低GPA申英国硕士 | high | 4 | blocked_403_or_login_required_2026-02-18 | blocked_403_or_login_required_2026-02-18 | MANUAL_BROWSER_CAPTURE_REQUIRED | partial_public_capture_waiting_browser_login |
| A06 | 英国硕士文书雷区 | https://www.zhihu.com/search?type=content&q=英国硕士文书雷区 | https://www.xiaohongshu.com/search_result?keyword=英国硕士文书雷区 | high | 4 | blocked_403_or_login_required_2026-02-18 | blocked_403_or_login_required_2026-02-18 | MANUAL_BROWSER_CAPTURE_REQUIRED | partial_public_capture_waiting_browser_login |
| A07 | 英国offer怎么选 | https://www.zhihu.com/search?type=content&q=英国offer怎么选 | https://www.xiaohongshu.com/search_result?keyword=英国offer怎么选 | high | 4 | blocked_403_or_login_required_2026-02-18 | blocked_403_or_login_required_2026-02-18 | MANUAL_BROWSER_CAPTURE_REQUIRED | partial_public_capture_waiting_browser_login |
| A08 | 英硕求职时间线 | https://www.zhihu.com/search?type=content&q=英硕求职时间线 | https://www.xiaohongshu.com/search_result?keyword=英硕求职时间线 | high | 4 | blocked_403_or_login_required_2026-02-18 | blocked_403_or_login_required_2026-02-18 | MANUAL_BROWSER_CAPTURE_REQUIRED | partial_public_capture_waiting_browser_login |
| A09 | 港硕适合谁 | https://www.zhihu.com/search?type=content&q=港硕适合谁 | https://www.xiaohongshu.com/search_result?keyword=港硕适合谁 | high | 4 | blocked_403_or_login_required_2026-02-18 | blocked_403_or_login_required_2026-02-18 | MANUAL_BROWSER_CAPTURE_REQUIRED | partial_public_capture_waiting_browser_login |
| A10 | 港硕选校 | https://www.zhihu.com/search?type=content&q=港硕选校 | https://www.xiaohongshu.com/search_result?keyword=港硕选校 | high | 4 | blocked_403_or_login_required_2026-02-18 | blocked_403_or_login_required_2026-02-18 | MANUAL_BROWSER_CAPTURE_REQUIRED | partial_public_capture_waiting_browser_login |
| A11 | 港硕申请时间线 | https://www.zhihu.com/search?type=content&q=港硕申请时间线 | https://www.xiaohongshu.com/search_result?keyword=港硕申请时间线 | high | 4 | blocked_403_or_login_required_2026-02-18 | blocked_403_or_login_required_2026-02-18 | MANUAL_BROWSER_CAPTURE_REQUIRED | partial_public_capture_waiting_browser_login |
| A12 | 低GPA申请港硕 | https://www.zhihu.com/search?type=content&q=低GPA申请港硕 | https://www.xiaohongshu.com/search_result?keyword=低GPA申请港硕 | high | 4 | blocked_403_or_login_required_2026-02-18 | blocked_403_or_login_required_2026-02-18 | MANUAL_BROWSER_CAPTURE_REQUIRED | partial_public_capture_waiting_browser_login |
| A13 | 港硕预算规划 | https://www.zhihu.com/search?type=content&q=港硕预算规划 | https://www.xiaohongshu.com/search_result?keyword=港硕预算规划 | high | 4 | blocked_403_or_login_required_2026-02-18 | blocked_403_or_login_required_2026-02-18 | MANUAL_BROWSER_CAPTURE_REQUIRED | partial_public_capture_waiting_browser_login |
| A14 | 港硕面试准备 | https://www.zhihu.com/search?type=content&q=港硕面试准备 | https://www.xiaohongshu.com/search_result?keyword=港硕面试准备 | high | 4 | blocked_403_or_login_required_2026-02-18 | blocked_403_or_login_required_2026-02-18 | MANUAL_BROWSER_CAPTURE_REQUIRED | partial_public_capture_waiting_browser_login |
| A15 | 港硕入学前准备 | https://www.zhihu.com/search?type=content&q=港硕入学前准备 | https://www.xiaohongshu.com/search_result?keyword=港硕入学前准备 | high | 4 | blocked_403_or_login_required_2026-02-18 | blocked_403_or_login_required_2026-02-18 | MANUAL_BROWSER_CAPTURE_REQUIRED | partial_public_capture_waiting_browser_login |
| A16 | 港硕留港还是回内地 | https://www.zhihu.com/search?type=content&q=港硕留港还是回内地 | https://www.xiaohongshu.com/search_result?keyword=港硕留港还是回内地 | high | 4 | blocked_403_or_login_required_2026-02-18 | blocked_403_or_login_required_2026-02-18 | MANUAL_BROWSER_CAPTURE_REQUIRED | partial_public_capture_waiting_browser_login |
| A17 | 新加坡授课型硕士适合谁 | https://www.zhihu.com/search?type=content&q=新加坡授课型硕士适合谁 | https://www.xiaohongshu.com/search_result?keyword=新加坡授课型硕士适合谁 | high | 4 | blocked_403_or_login_required_2026-02-18 | blocked_403_or_login_required_2026-02-18 | MANUAL_BROWSER_CAPTURE_REQUIRED | partial_public_capture_waiting_browser_login |
| A18 | NUS NTU SMU怎么选 | https://www.zhihu.com/search?type=content&q=NUS%20NTU%20SMU怎么选 | https://www.xiaohongshu.com/search_result?keyword=NUS%20NTU%20SMU怎么选 | mid | 3 | blocked_403_or_login_required_2026-02-18 | blocked_403_or_login_required_2026-02-18 | MANUAL_BROWSER_CAPTURE_REQUIRED | partial_public_capture_waiting_browser_login |
| A19 | 新加坡申请材料 | https://www.zhihu.com/search?type=content&q=新加坡申请材料 | https://www.xiaohongshu.com/search_result?keyword=新加坡申请材料 | high | 4 | blocked_403_or_login_required_2026-02-18 | blocked_403_or_login_required_2026-02-18 | MANUAL_BROWSER_CAPTURE_REQUIRED | partial_public_capture_waiting_browser_login |
| A20 | 新加坡留学预算 | https://www.zhihu.com/search?type=content&q=新加坡留学预算 | https://www.xiaohongshu.com/search_result?keyword=新加坡留学预算 | high | 4 | blocked_403_or_login_required_2026-02-18 | blocked_403_or_login_required_2026-02-18 | MANUAL_BROWSER_CAPTURE_REQUIRED | partial_public_capture_waiting_browser_login |
| A21 | 新加坡求职时间线 | https://www.zhihu.com/search?type=content&q=新加坡求职时间线 | https://www.xiaohongshu.com/search_result?keyword=新加坡求职时间线 | high | 4 | blocked_403_or_login_required_2026-02-18 | blocked_403_or_login_required_2026-02-18 | MANUAL_BROWSER_CAPTURE_REQUIRED | partial_public_capture_waiting_browser_login |
| A22 | 新加坡跨专业申请 | https://www.zhihu.com/search?type=content&q=新加坡跨专业申请 | https://www.xiaohongshu.com/search_result?keyword=新加坡跨专业申请 | high | 4 | blocked_403_or_login_required_2026-02-18 | blocked_403_or_login_required_2026-02-18 | MANUAL_BROWSER_CAPTURE_REQUIRED | partial_public_capture_waiting_browser_login |
| A23 | 新加坡留新还是回国 | https://www.zhihu.com/search?type=content&q=新加坡留新还是回国 | https://www.xiaohongshu.com/search_result?keyword=新加坡留新还是回国 | high | 4 | blocked_403_or_login_required_2026-02-18 | blocked_403_or_login_required_2026-02-18 | MANUAL_BROWSER_CAPTURE_REQUIRED | partial_public_capture_waiting_browser_login |
| A24 | 澳洲授课型硕士值不值 | https://www.zhihu.com/search?type=content&q=澳洲授课型硕士值不值 | https://www.xiaohongshu.com/search_result?keyword=澳洲授课型硕士值不值 | high | 4 | blocked_403_or_login_required_2026-02-18 | blocked_403_or_login_required_2026-02-18 | MANUAL_BROWSER_CAPTURE_REQUIRED | partial_public_capture_waiting_browser_login |
| A25 | 澳洲八大选校 | https://www.zhihu.com/search?type=content&q=澳洲八大选校 | https://www.xiaohongshu.com/search_result?keyword=澳洲八大选校 | high | 4 | blocked_403_or_login_required_2026-02-18 | blocked_403_or_login_required_2026-02-18 | MANUAL_BROWSER_CAPTURE_REQUIRED | partial_public_capture_waiting_browser_login |
| A26 | 澳洲申请时间线 | https://www.zhihu.com/search?type=content&q=澳洲申请时间线 | https://www.xiaohongshu.com/search_result?keyword=澳洲申请时间线 | high | 4 | blocked_403_or_login_required_2026-02-18 | blocked_403_or_login_required_2026-02-18 | MANUAL_BROWSER_CAPTURE_REQUIRED | partial_public_capture_waiting_browser_login |
| A27 | 澳洲城市预算对比 | https://www.zhihu.com/search?type=content&q=澳洲城市预算对比 | https://www.xiaohongshu.com/search_result?keyword=澳洲城市预算对比 | high | 4 | blocked_403_or_login_required_2026-02-18 | blocked_403_or_login_required_2026-02-18 | MANUAL_BROWSER_CAPTURE_REQUIRED | partial_public_capture_waiting_browser_login |
| A28 | 澳洲选课与就业 | https://www.zhihu.com/search?type=content&q=澳洲选课与就业 | https://www.xiaohongshu.com/search_result?keyword=澳洲选课与就业 | mid | 3 | blocked_403_or_login_required_2026-02-18 | blocked_403_or_login_required_2026-02-18 | MANUAL_BROWSER_CAPTURE_REQUIRED | partial_public_capture_waiting_browser_login |
| A29 | 澳洲在读找实习 | https://www.zhihu.com/search?type=content&q=澳洲在读找实习 | https://www.xiaohongshu.com/search_result?keyword=澳洲在读找实习 | high | 4 | blocked_403_or_login_required_2026-02-18 | blocked_403_or_login_required_2026-02-18 | MANUAL_BROWSER_CAPTURE_REQUIRED | partial_public_capture_waiting_browser_login |
| A30 | 澳洲offer终选 | https://www.zhihu.com/search?type=content&q=澳洲offer终选 | https://www.xiaohongshu.com/search_result?keyword=澳洲offer终选 | high | 4 | blocked_403_or_login_required_2026-02-18 | blocked_403_or_login_required_2026-02-18 | MANUAL_BROWSER_CAPTURE_REQUIRED | partial_public_capture_waiting_browser_login |

## Cookie Needed For Automated Capture
- Zhihu: logged-in cookie that can access `/search?type=content`
- Xiaohongshu: logged-in cookie that can access `/search_result?keyword=` without challenge page

## Notes
- After cookie refresh, fill numeric fields weekly and sync back to `v1_2_content_system.seo_signal_registry.signals`.
- Keep the same query URLs to preserve comparability across weeks.
- Capture timestamp format must be `YYYY-MM-DD_HH:MM` and appended in every numeric field.

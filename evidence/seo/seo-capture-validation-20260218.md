# SEO Capture Validation (2026-02-18)

This file records what was retrievable online and what still requires owner browser capture.

## Completed Online Checks

- Zhihu search endpoint check:
  - URL sample: `https://www.zhihu.com/search?type=content&q=英国授课型硕士值不值`
  - Result: `HTTP 403` in terminal due anti-bot.
- Xiaohongshu search page check:
  - URL sample: `https://www.xiaohongshu.com/search_result?keyword=英国授课型硕士值不值`
  - Result: page shell reachable, but stable total-result field is not reliably exposed in terminal.
- Google Trends API check:
  - pytrends can return partial data for some queries (example AU keywords), but many CN-topic long-tail queries return empty frames intermittently.
  - Decision: keep `MANUAL_BROWSER_CAPTURE_REQUIRED` as primary for consistency.

## Still Manual (Owner Fill)

- `zhihu_result_count` for A01-A30 (logged-in browser required).
- `xiaohongshu_result_count` for A01-A30 (logged-in browser required).
- `google_trends_index_90d` for A01-A30 (browser capture with dated screenshot required).

## Recommended Capture Format

- Fill as integer when available.
- If not available, use:
  - `MANUAL_BROWSER_CAPTURE_REQUIRED`
  - plus note: `capture_date`, `capture_account`, `capture_method`.

## Suggested Weekly Cadence

- Monday: capture top 8 high-priority topics.
- Wednesday: capture next 10 topics.
- Friday: capture remaining 12 topics and run priority re-rank.

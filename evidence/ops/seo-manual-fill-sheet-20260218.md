# SEO Manual Fill Sheet (2026-02-18)

Use this sheet to fill browser-only metrics one by one.
After filling, sync values back to:
`v1_2_content_system.seo_signal_registry.signals[*]`.

## Priority Batch (Top 8)

| Article | Core Keyword | Zhihu Result Count | Xiaohongshu Result Count | Google Trends 90d | Capture Date | Capture Account | Notes |
|---|---|---:|---:|---:|---|---|---|
| A01 | 英国授课型硕士值不值 | ____ | ____ | ____ | ____ | ____ | existing lower bound: Zhihu>=20 / XHS>=22 |
| A02 | 一年制英硕适合谁 | ____ | ____ | ____ | ____ | ____ |  |
| A03 | 英国选校冲稳保 | ____ | ____ | ____ | ____ | ____ |  |
| A09 | 港硕适合谁 | ____ | ____ | ____ | ____ | ____ |  |
| A17 | 新加坡授课型硕士适合谁 | ____ | ____ | ____ | ____ | ____ |  |
| A24 | 澳洲授课型硕士值不值 | ____ | ____ | ____ | ____ | ____ |  |
| A25 | 澳洲八大选校 | ____ | ____ | ____ | ____ | ____ |  |
| A29 | 澳洲在读找实习 | ____ | ____ | ____ | ____ | ____ |  |

## Standard Fill Rules

1. Use integer counts only (no `k+`, no ranges) when platform provides totals.
2. If a platform hides totals, keep field as `MANUAL_BROWSER_CAPTURE_REQUIRED` and add reason in notes.
3. Use the same account and same day capture for all three platforms in one batch.
4. Attach screenshot proof path in notes when possible.

## JSON Sync Checklist

- [ ] Update `zhihu_result_count`.
- [ ] Update `xiaohongshu_result_count`.
- [ ] Update `google_trends_index_90d`.
- [ ] Keep `snapshot_date` aligned with capture date.
- [ ] Update `evidence/seo/keyword-snapshots-20260217.md` summary row if values changed.

# SEO Manual Fill Sheet (2026-02-18)

Use this sheet to fill browser-only metrics one by one.
After filling, sync values back to:
`v1_2_content_system.seo_signal_registry.signals[*]`.

## Full Batch (A01-A30)

| Article | Core Keyword | Zhihu Result Count | Xiaohongshu Result Count | Google Trends 90d | Capture Date | Capture Account | Notes |
|---|---|---:|---:|---:|---|---|---|
| A01 | 英国授课型硕士值不值 | ____ | ____ | ____ | ____ | ____ | existing lower bound: Zhihu>=20 / XHS>=22 |
| A02 | 一年制英硕适合谁 | ____ | ____ | ____ | ____ | ____ |  |
| A03 | 英国选校冲稳保 | ____ | ____ | ____ | ____ | ____ |  |
| A04 | 英国硕士预算 | ____ | ____ | ____ | ____ | ____ |  |
| A05 | 低GPA申英国硕士 | ____ | ____ | ____ | ____ | ____ |  |
| A06 | 英国硕士文书雷区 | ____ | ____ | ____ | ____ | ____ |  |
| A07 | 英国offer怎么选 | ____ | ____ | ____ | ____ | ____ |  |
| A08 | 英硕求职时间线 | ____ | ____ | ____ | ____ | ____ |  |
| A09 | 港硕适合谁 | ____ | ____ | ____ | ____ | ____ |  |
| A10 | 港硕选校 | ____ | ____ | ____ | ____ | ____ |  |
| A11 | 港硕申请时间线 | ____ | ____ | ____ | ____ | ____ |  |
| A12 | 低GPA申请港硕 | ____ | ____ | ____ | ____ | ____ |  |
| A13 | 港硕预算规划 | ____ | ____ | ____ | ____ | ____ |  |
| A14 | 港硕面试准备 | ____ | ____ | ____ | ____ | ____ |  |
| A15 | 港硕入学前准备 | ____ | ____ | ____ | ____ | ____ |  |
| A16 | 港硕留港还是回内地 | ____ | ____ | ____ | ____ | ____ |  |
| A17 | 新加坡授课型硕士适合谁 | ____ | ____ | ____ | ____ | ____ |  |
| A18 | NUS NTU SMU怎么选 | ____ | ____ | ____ | ____ | ____ |  |
| A19 | 新加坡申请材料 | ____ | ____ | ____ | ____ | ____ |  |
| A20 | 新加坡留学预算 | ____ | ____ | ____ | ____ | ____ |  |
| A21 | 新加坡求职时间线 | ____ | ____ | ____ | ____ | ____ |  |
| A22 | 新加坡跨专业申请 | ____ | ____ | ____ | ____ | ____ |  |
| A23 | 新加坡留新还是回国 | ____ | ____ | ____ | ____ | ____ |  |
| A24 | 澳洲授课型硕士值不值 | ____ | ____ | ____ | ____ | ____ |  |
| A25 | 澳洲八大选校 | ____ | ____ | ____ | ____ | ____ |  |
| A26 | 澳洲申请时间线 | ____ | ____ | ____ | ____ | ____ |  |
| A27 | 澳洲城市预算对比 | ____ | ____ | ____ | ____ | ____ |  |
| A28 | 澳洲选课与就业 | ____ | ____ | ____ | ____ | ____ |  |
| A29 | 澳洲在读找实习 | ____ | ____ | ____ | ____ | ____ |  |
| A30 | 澳洲offer终选 | ____ | ____ | ____ | ____ | ____ |  |

## Standard Fill Rules

1. Use integer counts only (no `k+`, no ranges) when platform provides totals.
2. If a platform hides totals, keep field as `MANUAL_BROWSER_CAPTURE_REQUIRED` and add reason in notes.
3. Use the same account and same day capture for all three platforms in one batch.
4. Attach screenshot proof path in notes when possible.
5. Capture sequence recommendation: Zhihu -> Xiaohongshu -> Google Trends in one session.

## JSON Sync Checklist

- [ ] Update `zhihu_result_count` for A01-A30.
- [ ] Update `xiaohongshu_result_count` for A01-A30.
- [ ] Update `google_trends_index_90d` for A01-A30.
- [ ] Keep `snapshot_date` aligned with capture date.
- [ ] Update `evidence/seo/keyword-snapshots-20260217.md` summary row if values changed.

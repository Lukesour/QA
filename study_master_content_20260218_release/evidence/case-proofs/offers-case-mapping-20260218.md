# Offers Case Mapping for A01-A30 (2026-02-18)

Source: `offers.jsonl`  
Rule: publish copy can use anonymized text below; screenshots still require owner upload.

## Key Policy Update (Record-Level Primary Key)

- `case_id` is now treated as a grouping key only.
- New primary key for evidence citation is `offer_record_id` (line-level unique key in `offers.jsonl`).
- Naming rule: `OFR-L<line_number_4d_or_more>`.

## Phase 1: Seed 8 Locked to Record-Level Key

| Article | case_group_id | offer_record_id | offers line | offer target | anonymized use point | required screenshot |
|---|---|---|---:|---|---|---|
| A01 | 50027 | OFR-L0202 | 202 | 布里斯托商业分析 | 三笔账后删掉超预算项目并保留备选路径 | 预算双方案 + 项目池删改前后 |
| A02 | 50010 | OFR-L0215 | 215 | 华威计算机 | 12周补强后再决策一年制 | 补强周计划 + 项目页 + 首批投递 |
| A03 | 50021 | OFR-L0021 | 21 | UCL机器人与AI | 四维矩阵把全冲名单改为冲稳保 | 打分矩阵 + 名单版本对比 |
| A09 | 50003 | OFR-L0003 | 3 | 港科大数据驱动建模 | 三门槛确认港硕适配 | 适配评分卡 + 决策说明 |
| A17 | 50010 | OFR-L0033 | 33 | NUS计算机科学 | 适配优先于名校情绪 | 适配评分卡 + 路径图 |
| A24 | 50005 | OFR-L0005 | 5 | 悉尼计算机科学 | 澳洲价值决策三笔账 | 政策成本对照表 + 决策单 |
| A25 | 50005/50015 | OFR-L0075 + OFR-L0046 | 75/46 | 悉尼CS + UNSW IT | 澳洲冲稳保组合示例 | 加权选校表 + 调整日志 |
| A29 | 50042 | OFR-L0247 | 247 | 悉尼计算机科学 | 在读12周实习SOP | 周看板 + 投递与复盘 |

## Phase 2: Remaining 22 (Need Owner Lock)

| Article | current case_group_id | offer_record_id status | note |
|---|---|---|---|
| A04 | 50041 | PENDING_OWNER_LOCK | 同case组可能多人，发布前先锁定唯一record |
| A05 | 50020 | PENDING_OWNER_LOCK | 同上 |
| A06 | 50011 | PENDING_OWNER_LOCK | 同上 |
| A07 | 50010 + 50011 | PENDING_OWNER_LOCK | 双案例均需唯一record |
| A08 | 50010 | PENDING_OWNER_LOCK | 同上 |
| A10 | 50001 | PENDING_OWNER_LOCK | 同上 |
| A11 | 50012 | PENDING_OWNER_LOCK | 同上 |
| A12 | 50015 | PENDING_OWNER_LOCK | 同上 |
| A13 | 50010 | PENDING_OWNER_LOCK | 同上 |
| A14 | 50004 | PENDING_OWNER_LOCK | 同上 |
| A15 | 50009 | PENDING_OWNER_LOCK | 同上 |
| A16 | 50019 | PENDING_OWNER_LOCK | 同上 |
| A18 | 50010 + 50011 | PENDING_OWNER_LOCK | 双案例均需唯一record |
| A19 | 50005 | PENDING_OWNER_LOCK | 同上 |
| A20 | 50010 | PENDING_OWNER_LOCK | 同上 |
| A21 | 50007 | PENDING_OWNER_LOCK | 同上 |
| A22 | 53003 | PENDING_OWNER_LOCK | 同上 |
| A23 | 50051 | PENDING_OWNER_LOCK | 同上 |
| A26 | 50014 | PENDING_OWNER_LOCK | 同上 |
| A27 | 50035 + 50039 | PENDING_OWNER_LOCK | 双案例均需唯一record |
| A28 | 50007 | PENDING_OWNER_LOCK | 同上 |
| A30 | 50022 + 50005 | PENDING_OWNER_LOCK | 双案例均需唯一record |

## Desensitization Rule

- Keep only `offer_record_id`, background band, action and result.
- Remove personal identifiers (name, exact company, contact info).
- Screenshot must include visible timestamp and artifact label.

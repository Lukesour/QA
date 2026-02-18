# Seed 8 Ops Cards (2026-02-18)

Purpose: create the first batch of publishable closed-loop articles across Xiaohongshu/Zhihu/WeChat.

## Shared Rule

- Each card must include: `1条P0政策 + 1条P1申请/项目窗口 + 1条P1就业回报 + 1个真实案例`.
- Real case key uses `offer_record_id` (line-level unique key in `offers.jsonl`), not only `case_id`.
- If Zhihu/Xiaohongshu totals cannot be captured, keep explicit owner-fill slots and do not fabricate numbers.

## A01 英硕值不值（英国决策）

- article_id: `A01`
- core_keyword: `英国授课型硕士值不值`
- offer_record_id: `OFR-L0202`
- offers_line_ref: `offers.jsonl:202`
- case_snapshot: 辽宁师范大学国际商务背景，录取布里斯托商业分析，先做三笔账后调整项目池。
- P0 quote: UK Student visa money（London GBP 1,529 / outside GBP 1,171）
- P1 quote: Exeter deadline page（2026/27国际DDL 2026-09-11）
- P1 ROI quote: QILT GOS official source
- Xiaohongshu素材骨架: 结论封面 -> 三笔账模板 -> 删项目示例 -> 评论区关键词CTA
- Zhihu素材骨架: 先给值不值判断公式 -> 给不适用人群 -> 给止损线 -> 邀请私信领取预算模板
- 公众号素材骨架: 成本模型全文 -> 案例复盘 -> 错误决策清单 -> CTA（预算模板+自测表）
- owner_fill_slots: Zhihu结果总量、XHS结果总量、Trends 90d

## A02 一年制英硕适配（英国决策）

- article_id: `A02`
- core_keyword: `一年制英硕适合谁`
- offer_record_id: `OFR-L0215`
- offers_line_ref: `offers.jsonl:215`
- case_snapshot: 上海大学智能科学背景，录取华威计算机，入学前先补12周技术与求职动作。
- P0 quote: UK Graduate visa（2026-12-31前通常2年，2027-01-01起通常18个月）
- P1 quote: Glasgow taught programmes（项目存在不同入学月）
- P1 ROI quote: UK岗位回报对照采用QILT/官方毕业去向口径
- Xiaohongshu素材骨架: 3类适合+3类劝退 -> 12周补强卡 -> 一年制执行节奏图
- Zhihu素材骨架: 直接回答“谁不适合” -> 给补强阈值 -> 给反例止损
- 公众号素材骨架: 适配模型 + 周计划 + 失败复盘 + FAQ
- owner_fill_slots: Zhihu结果总量、XHS结果总量、Trends 90d

## A03 英国冲稳保选校（英国选校）

- article_id: `A03`
- core_keyword: `英国选校冲稳保`
- offer_record_id: `OFR-L0021`
- offers_line_ref: `offers.jsonl:21`
- case_snapshot: 复旦微电子背景，录取UCL机器人与AI，用四维矩阵从全冲改成冲稳保组合。
- P0 quote: UK Student visa + IHS（费用口径）
- P1 quote: Exeter + Glasgow窗口差异
- P1 ROI quote: 以QILT GOS作为澳洲官方就业回报基准方法，英硕本卡仅作方法迁移不作政策结论
- Xiaohongshu素材骨架: 冲稳保矩阵图 -> 打分权重 -> 名单前后对比
- Zhihu素材骨架: 先反驳“只看QS” -> 给四维权重示例 -> 给一页可复制表格
- 公众号素材骨架: 选校方法论 + 案例改版 + 权重敏感性测试
- owner_fill_slots: Zhihu结果总量、XHS结果总量、Trends 90d

## A09 港硕适配门槛（香港决策）

- article_id: `A09`
- core_keyword: `港硕适合谁`
- offer_record_id: `OFR-L0003`
- offers_line_ref: `offers.jsonl:3`
- case_snapshot: 东南大学统计背景，录取港科大数据驱动建模，先过岗位/预算/节奏三门槛。
- P0 quote: HK Study visa processing（约6周）+ IANG首签24个月
- P1 quote: HKBU timeline（2025-12-01 / 2026-04-15）
- P1 ROI quote: HK annual report appendix5（学生签与IANG年度规模）
- Xiaohongshu素材骨架: 三门槛打分卡 -> 反例 -> 48小时决策动作
- Zhihu素材骨架: 先列适合/不适合边界 -> 再给门槛评分标准
- 公众号素材骨架: 港硕决策框架 + 案例证据 + 止损方案
- owner_fill_slots: Zhihu结果总量、XHS结果总量、Trends 90d

## A17 新加坡值不值（新加坡决策）

- article_id: `A17`
- core_keyword: `新加坡授课型硕士适合谁`
- offer_record_id: `OFR-L0033`
- offers_line_ref: `offers.jsonl:33`
- case_snapshot: 南开计算机背景，录取NUS计算机，先核验岗位可达与预算承压。
- P0 quote: MOM EP eligibility（2025门槛与2026续签口径）
- P1 quote: NUS SoC项目窗口（Aug intake 2025-10-01至2026-01-31）
- P1 ROI quote: JAUGES 2024（NUS发布口径：就业与全职长期就业）
- Xiaohongshu素材骨架: 适配评分卡 -> 留新/回国双路径 -> 行动清单
- Zhihu素材骨架: 先答“值不值” -> 给不适配人群 -> 给EP门槛影响解释
- 公众号素材骨架: 政策门槛 + 项目窗口 + 就业回报 + 案例复盘
- owner_fill_slots: Zhihu结果总量、XHS结果总量、Trends 90d

## A24 澳洲值不值（澳洲决策）

- article_id: `A24`
- core_keyword: `澳洲授课型硕士值不值`
- offer_record_id: `OFR-L0005`
- offers_line_ref: `offers.jsonl:5`
- case_snapshot: 中国海洋大学智能科学背景，录取悉尼大学计算机，按三笔账评估澳洲路径。
- P0 quote: AU subclass 500 fee AUD 2,000 + work limit 48h/fortnight
- P1 quote: AU Student visa financial capacity reference AUD 29,710
- P1 ROI quote: QILT GOS official survey source
- Xiaohongshu素材骨架: 澳洲三笔账图 -> 政策成本卡 -> 可执行清单
- Zhihu素材骨架: 先讲成本边界 -> 再讲回报判断 -> 给止损条件
- 公众号素材骨架: 政策口径解释 + 成本模型 + 案例 + 反例
- owner_fill_slots: Trends 90d

## A25 澳洲冲稳保选校（澳洲选校）

- article_id: `A25`
- core_keyword: `澳洲八大选校`
- offer_record_id_primary: `OFR-L0075`
- offer_record_id_secondary: `OFR-L0046`
- offers_line_ref_primary: `offers.jsonl:75`
- offers_line_ref_secondary: `offers.jsonl:46`
- case_snapshot: 悉尼大学CS与新南威尔士IT双样本，展示“岗位匹配+成本+可录性+节奏”加权终选。
- P0 quote: AU student visa + GS requirement
- P1 quote: 官方项目窗口页（学校项目页需运营补充当期DDL截图）
- P1 ROI quote: QILT GOS
- Xiaohongshu素材骨架: 冲稳保矩阵 + 权重滑杆 + 两个样本对比
- Zhihu素材骨架: 回答“八大怎么排” -> 先岗位后学校 -> 给终选表
- 公众号素材骨架: 全流程终选法 + 双案例 + 敏感性测试
- owner_fill_slots: Zhihu结果总量、XHS结果总量、Trends 90d、当期项目DDL截图

## A29 澳洲在读求职SOP（澳洲后段转化）

- article_id: `A29`
- core_keyword: `澳洲在读找实习`
- offer_record_id: `OFR-L0247`
- offers_line_ref: `offers.jsonl:247`
- case_snapshot: 广东工业大学计算机背景，录取悉尼大学计算机，按12周SOP重建投递与复盘节奏。
- P0 quote: subclass 500 工时限制（48h/fortnight during study periods）
- P1 quote: QILT GOS作就业回报参考
- P1 ROI quote: 同上，结合个人投递转化漏斗
- Xiaohongshu素材骨架: 12周执行看板 -> 每周动作 -> 复盘模板
- Zhihu素材骨架: 先回答“为什么没反馈” -> 给三段纠偏法 -> 给复盘字段
- 公众号素材骨架: 在读求职系统 + 案例数据槽位 + 常见失败止损
- owner_fill_slots: Zhihu结果总量、XHS结果总量、Trends 90d

## Operator Checklist

1. 先补齐 8 篇的 SEO 三项真实值。
2. 再上传 8 个案例包截图（每包3图+1脱敏说明）。
3. 完成后才可将对应文章状态推进到 `publish_ready_with_proof`。

# Offers Case Mapping for A01-A30 (2026-02-18)

Source: `offers.jsonl`  
Rule: publish copy can use anonymized text below; screenshots still require owner upload.

## Key Policy Update (Record-Level Primary Key)

- `case_id` is now treated as a grouping key only.
- New primary key for evidence citation is `offer_record_id` (line-level unique key in `offers.jsonl`).
- Naming rule: `OFR-L<line_number_4d_or_more>`.

## Full Mapping (A01-A30 Locked)

| Article | case_group_id | offer_record_id | offers line | offer target | anonymized use point | required screenshot |
|---|---|---|---:|---|---|---|
| A01 | 50027 | OFR-L0202 | 202 | 布里斯托商业分析 | 三笔账后删掉超预算项目并保留备选路径 | 预算双方案 + 项目池删改前后 |
| A02 | 50010 | OFR-L0215 | 215 | 华威计算机 | 12周补强后再决策一年制 | 补强周计划 + 项目页 + 首批投递 |
| A03 | 50021 | OFR-L0021 | 21 | UCL机器人与AI | 四维矩阵把全冲名单改为冲稳保 | 打分矩阵 + 名单版本对比 |
| A04 | 50041 | OFR-L0246 | 246 | 利兹高级计算机科学（数据分析） | 伦敦/非伦敦双路径预算控制 | 城市预算表 + 月现金流 |
| A05 | 50020 | OFR-L0051 | 51 | 格拉斯哥计算科学 | 低GPA改为证据补强路径 | 补强日志 + 文书改前改后 |
| A06 | 50011 | OFR-L0126 | 126 | 伯明翰高级计算机科学 | 文书从流水账改为岗位证据链 | 段落改写对照 + 批注 |
| A07 | 50010 + 50011 | OFR-L0215 + OFR-L0126 | 215/126 | 华威CS / 伯明翰ACS | 双案例加权终选演示 | 加权表 + 敏感性测试 |
| A08 | 50010 | OFR-L0215 | 215 | 华威计算机 | 入学前12周求职前置 | 12周看板 + 投递起始记录 |
| A09 | 50003 | OFR-L0003 | 3 | 港科大数据驱动建模 | 三门槛确认港硕适配 | 适配评分卡 + 决策说明 |
| A10 | 50001 | OFR-L0001 | 1 | 港理工数据科学及分析 | 先项目后学校压缩名单 | 项目对照表 + 首轮申请池 |
| A11 | 50012 | OFR-L0012 | 12 | 港中文信息工程 | 倒排12周防DDL踩线 | 甘特图 + 周交付清单 |
| A12 | 50015 | OFR-L0015 | 15 | 港中文人工智能科学 | 低背景补证据后再投递 | 补强任务清单 + 成果页 |
| A13 | 50010 | OFR-L0010 | 10 | 港理工网路空间安全 | 无奖学金版预算先行 | 双预算表 + 偏差复盘 |
| A14 | 50004 | OFR-L0004 | 4 | 港大人工智能 | 3分钟闭环提升面试稳定度 | 题库页 + 录音复盘 |
| A15 | 50009 | OFR-L0040 | 40 | 港大人工智能 | Offer后7件事并行 | 入学前周计划 + 完成率 |
| A16 | 50019 | OFR-L0019 | 19 | 港科大商业分析 | 留港/回内地双路径终选 | 双路径投递看板 |
| A17 | 50010 | OFR-L0033 | 33 | NUS计算机科学 | 适配优先于名校情绪 | 适配评分卡 + 路径图 |
| A18 | 50010 + 50011 | OFR-L0033 + OFR-L0042 | 33/42 | NUS CS / NTU AI | NUS/NTU岗位权重选校演示 | 三校对比矩阵 + 权重说明 |
| A19 | 50005 | OFR-L0054 | 54 | NUS商业分析 | 材料一致性体检后提交流程 | 一致性检查表 + 改稿记录 |
| A20 | 50010 | OFR-L0155 | 155 | NUS企业商业分析科技 | 无奖学金底盘预算 | 双预算表 + 应急金设置 |
| A21 | 50007 | OFR-L0087 | 87 | NUS人工智能系统科技 | 在读12周求职节奏 | 12周执行看板 + 周复盘 |
| A22 | 53003 | OFR-L0428 | 428 | NUS企业商业分析科技 | 跨专业迁移叙事与证据链 | 迁移能力表 + 项目证据页 |
| A23 | 50051 | OFR-L0310 | 310 | NTU金融科技 | 双路径并行后终选 | 双路径岗位池 + 终选记录 |
| A24 | 50005 | OFR-L0005 | 5 | 悉尼计算机科学 | 澳洲价值决策三笔账 | 政策成本对照表 + 决策单 |
| A25 | 50005 + 50015 | OFR-L0075 + OFR-L0046 | 75/46 | 悉尼CS + UNSW IT | 澳洲冲稳保组合示例 | 加权选校表 + 调整日志 |
| A26 | 50014 | OFR-L0981 | 981 | 悉尼计算机科学 | 12-16周倒排执行申请 | 甘特图 + 里程碑截图 |
| A27 | 50035 + 50047 | OFR-L0294 + OFR-L0252 | 294/252 | 悉尼数据科学 / 西澳商业分析 | 全成本城市预算对照 | 城市成本对照 + 预算复盘 |
| A28 | 50007 | OFR-L0061 | 61 | 悉尼计算机科学 | JD反推选课闭环 | 岗位-课程映射表 |
| A29 | 50042 | OFR-L0247 | 247 | 悉尼计算机科学 | 在读12周实习SOP | 周看板 + 投递与复盘 |
| A30 | 50022 + 50005 | OFR-L0730 + OFR-L0005 | 730/5 | UNSW IT / 悉尼CS | 四维加权终选演示 | 终选加权表 + 备选方案 |

## Mapping Note

- A27 second case was corrected from legacy `case_id=50039` to `case_id=50047` because `50039` points to non-AU records in the current `offers.jsonl` corpus and cannot support the “西澳商业分析” narrative.

## Desensitization Rule

- Keep only `offer_record_id`, background band, action and result.
- Remove personal identifiers (name, exact company, contact info).
- Screenshot must include visible timestamp and artifact label.

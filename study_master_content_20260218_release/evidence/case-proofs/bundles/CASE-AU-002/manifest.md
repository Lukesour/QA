# CASE-AU-002 Manifest

- article_id: `A25`
- offer_record_id_primary: `OFR-L0075` (`offers.jsonl:75`)
- offer_record_id_secondary: `OFR-L0046` (`offers.jsonl:46`)
- proof_type: 冲稳保组合表
- status: `bundle_template_prepared_waiting_upload`
- as_of: `2026-02-17`

## Required Files (owner fill)

| file_name | required | timestamp_visible | pii_removed | note |
|---|---|---|---|---|
| reach_match_safe_matrix.xlsx | yes | [ ] | [ ] | 冲稳保组合矩阵 |
| city_cost_weighting.png | yes | [ ] | [ ] | 城市成本加权截图 |
| final_schoollist_v3.pdf | yes | [ ] | [ ] | 最终选校名单 |

## Upload Notes

- 文件命名统一使用 `YYYYMMDD_caseid_desc.ext`。
- 敏感信息必须打码：姓名、学校、邮箱、手机号、公司名。
- 上传后在 `evidence/case-proofs/index.md` 与 `material.json` 同步状态为 `uploaded`。

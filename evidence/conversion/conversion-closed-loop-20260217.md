# Conversion Closed Loop (2026-02-17)

This file turns the current webhook blueprint into an executable minimum loop.

## Target

Track conversion by article ID through 4 nodes:

1. article_read
2. lead_capture
3. consultation
4. deal

## Required Field Mapping

| node | must-have field | current status | owner fill |
|---|---|---|---|
| article_read | source_article_id | ready_in_blueprint | no |
| article_read | source_platform | ready_in_blueprint | no |
| lead_capture | lead_id | ready_in_blueprint | no |
| lead_capture | dm_rate / form_submit_rate | ready_in_blueprint | no |
| consultation | consult_book_rate / consult_show_rate | ready_in_blueprint | no |
| revenue | deal_rate / deal_amount | ready_in_blueprint | no |
| all nodes | workspace domain | waiting_key | yes |
| hubspot | app_id | waiting_key | yes (`[待你填写_HUBSPOT_APP_ID]`) |
| typeform | form_id | waiting_key | yes (`[待你填写_TYPEFORM_FORM_ID]`) |
| calendly | organization_uri | waiting_key | yes (`[待你填写_CALENDLY_ORGANIZATION_URI]`) |

## UTM and Hidden Field Rule

- UTM must include: `utm_source`, `utm_medium`, `utm_campaign`, `source_article_id`, `keyword`.
- Typeform hidden fields must include: `source_article_id`, `content_keyword`, `intent_stage`.
- Calendly payload must map invitee to `lead_id` for record merge.

## Weekly KPI Readout

| metric | threshold | action if below threshold |
|---|---|---|
| dm_rate | >= 1.5% | rewrite opening + CTA ladder |
| form_submit_rate | >= 15% | shorten form and reduce required fields |
| consult_book_rate | >= 20% | tune qualification prompt and offer |
| deal_rate | >= 10% | add objection-handling content before booking |

## Owner Fill Block

- webhook_domain: `[待你填写_WEBHOOK_DOMAIN]`
- data_warehouse_table: `[待你填写_DATA_WAREHOUSE_TABLE]`
- sales_owner_mapping: `[待你填写_SALES_OWNER_MAPPING]`

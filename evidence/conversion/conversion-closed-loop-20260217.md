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
| hubspot | app_id | waiting_key | yes (`__YOU_FILL_HUBSPOT_APP_ID__`) |
| typeform | form_id | waiting_key | yes (`__YOU_FILL_TYPEFORM_FORM_ID__`) |
| calendly | organization_uri | waiting_key | yes (`__YOU_FILL_CALENDLY_ORG_URI__`) |

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

- webhook_domain: `__YOU_FILL_DOMAIN__`
- data_warehouse_table: `__YOU_FILL_TABLE__`
- sales_owner_mapping: `__YOU_FILL_OWNER_MAP__`

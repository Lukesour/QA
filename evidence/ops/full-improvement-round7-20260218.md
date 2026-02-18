# Full Improvement Round 7 (2026-02-18)

## Completed in This Round

1. Unified survey routing:
   - A01-A30 `cta_ladder.survey_trigger` all explicitly route to `LM009` (咨询前诊断问卷).
2. Revalidated and corrected Hong Kong source URLs:
   - Visa fees under specified schemes page.
   - Immigration annual report 2024 chapter page.
3. Updated policy docs and source stack to use corrected HK URLs.
   - Added web revalidation log: `evidence/policy/policy-revalidation-round7-web-20260218.md`.
4. Rebound all 30 case screenshot placeholders in structured drafts to concrete bundle paths.
5. Added longform expansion paragraph pack:
   - `evidence/content/longform-expansion-pack-20260218.md`
6. Kept unresolved items as explicit owner-fill fields (no fake data backfill).

## Still Manual Fill

1. Real case proof uploads for all case bundles.
2. Zhihu/Xiaohongshu full result counts and Google Trends numeric indices.
3. HubSpot/Typeform/Calendly live IDs, webhook URLs, and secrets.

## Publishing Rule Reminder

- Until case proof is uploaded and validated, publish state should remain `needs_case_upload`.
- Until SEO numeric fields are filled, keep large-scale publishing paused and only run limited testing.

# Publish Gate Tier Spec (2026-02-18)

Goal: split content readiness from evidence readiness to avoid false-ready publishing.

## State Definition

- `draft_ready`
  - Meaning: article structure, platform rewrite, CTA and policy data are complete.
  - Not sufficient for external publishing.
- `publish_ready_with_proof`
  - Meaning: `draft_ready` + required case proof screenshots uploaded and desensitized.
  - Can be scheduled and published.
- `published`
  - Meaning: content published and proof files archived.

## Hard Gate

- If case proof is not uploaded, article cannot move to `publish_ready_with_proof`.
- If `offer_record_id` is not locked for that article, article cannot move to `publish_ready_with_proof`.
- If policy source is older than 30 days for high-volatility items, article status auto-downgrades to `review_required`.

## Mapping to Current Fields

- `material.json` keeps `publish_state=draft_ready` for all A01-A30.
- `case_proof_upload_registry.upload_status=uploaded` remains prerequisite for moving to `publish_ready_with_proof`.
- Case evidence citation key switches to `offer_record_id` (line-level key) and `case_id` is grouping only.

## Seed Sprint Gate (A01/A02/A03/A09/A17/A24/A25/A29)

- Must complete before publish amplification:
  1. SEO three slots filled (Zhihu/XHS/Trends)
  2. 3 screenshot proofs + desensitization note uploaded
  3. `offer_record_id` locked in mapping index
  4. Weekly board has `Read Completion Rate + DMs + Form Submits`

## Operator Checklist Before Publish

1. Case bundle has 3 screenshots + desensitization note.
2. Policy number in article matches SSOT file.
3. SEO fields are either real values or explicitly marked with capture timestamp and owner.
4. CTA asset name matches deliverable file.
5. Platform-specific layout was selected from `platform-layout-rewrite-pack-20260218.md`.

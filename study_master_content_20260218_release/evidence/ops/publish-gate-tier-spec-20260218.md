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
- If policy source is older than 30 days for high-volatility items, article status auto-downgrades to `review_required`.

## Mapping to Current Fields

- `material.json` has been switched to `publish_state=draft_ready` for all A01-A30.
- `case_proof_upload_registry.upload_status=uploaded` remains the prerequisite for moving to `publish_ready_with_proof`.

## Operator Checklist Before Publish

1. Case bundle has 3 screenshots + desensitization note.
2. Policy number in article matches SSOT file.
3. SEO fields are either real values or explicitly marked with capture timestamp and owner.
4. CTA asset name matches deliverable file.

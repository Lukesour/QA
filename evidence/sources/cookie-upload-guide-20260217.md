# Cookie Upload Guide (2026-02-17)

When a source page is blocked by login wall / anti-bot challenge, place cookie files here:

- `evidence/sources/cookies/zhihu.cookies.txt`
- `evidence/sources/cookies/xiaohongshu.cookies.txt`
- `evidence/sources/cookies/nus.cookies.txt`
- `evidence/sources/cookies/unimelb.cookies.txt`

## File Format

- Use Netscape cookie format (`*.cookies.txt`), exported from browser extension such as `Get cookies.txt LOCALLY`.
- Keep only required domains in each file to reduce leakage risk.

## Local Verification Command (for this workspace)

```bash
curl -L --max-time 20 -b evidence/sources/cookies/nus.cookies.txt 'https://www.nus.edu.sg/oam/apply-to-nus/graduate'
```

```bash
curl -L --max-time 20 -b evidence/sources/cookies/unimelb.cookies.txt 'https://study.unimelb.edu.au/how-to-apply/graduate-coursework-study/international-applications/faqs'
```

## Security Notes

- This folder is git-ignored except `.gitkeep` and `.gitignore`; real cookie files will not be committed.
- Cookies may contain session credentials. Replace expired cookies periodically.

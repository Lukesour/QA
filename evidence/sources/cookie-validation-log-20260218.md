# Cookie Validation Log (2026-02-18)

as_of: 2026-02-18
workspace: /tmp/QA_codex_20260218

## Validation Result Summary

| site | cookie file status | terminal access result | auth result | next action |
|---|---|---|---|---|
| https://www.zhihu.com/search | `zhihu.cookies.txt` not present in repo | page fetched | `"logged":false` in page initial data | provide active login cookie/HAR and re-test |
| https://www.xiaohongshu.com/search_result | `xiaohongshu.cookies.txt` not present in repo | page fetched | `"loggedIn":false` in page initial state | provide active login cookie/HAR and re-test |
| https://www.nus.edu.sg/oam/apply-to-nus/graduate | `nus.cookies.txt` not present in repo | blocked by Incapsula challenge | not authenticated | provide cookie/HAR and re-test |
| https://study.unimelb.edu.au/how-to-apply/graduate-coursework-study/international-applications/faqs | `unimelb.cookies.txt` not present in repo | blocked by Cloudflare challenge | not authenticated | provide cookie/HAR and re-test |

## Additional Check With User-Provided Header Cookies (2026-02-18)

The user provided full request header snapshots for Zhihu/Xiaohongshu in chat. I stored cookie strings locally and re-tested:

| site | result | blocker |
|---|---|---|
| Zhihu search page (`/search?type=content`) | still no stable signed search API response | requires browser-generated anti-bot signature (`x-zse-96`) matching the exact request |
| Xiaohongshu search page (`/search_result`) | page can open but login state not reliably reusable in terminal | API requires dynamic `x-s`, `x-s-common`, `x-t` that expire quickly |

Conclusion: cookie string alone is not enough for reproducible terminal capture in this environment.

## HAR Extraction Progress (2026-02-18)

- From existing normalized HAR files, A01 keyword has partial first-page captures:
  - Zhihu search_v3 response returns 20 items and `paging.is_end=false`.
  - Xiaohongshu notes response returns 22 items and `data.has_more=true`.
- These values are lower bounds only and cannot replace full result totals.
- To fill A02-A30 with comparable totals, new logged-in captures are still required.

## Raw Checkpoints

- NUS no-cookie response contains `/_Incapsula_Resource` script and `noindex,nofollow`.
- Unimelb no-cookie response shows `Just a moment...` and `Enable JavaScript and cookies to continue`.
- Zhihu search page initial data still reports `logged:false`.
- Xiaohongshu page initial state still reports `loggedIn:false`.
- Replaying only static cookie header cannot bypass Zhihu/XHS dynamic anti-bot signatures.

## Required Cookie Uploads

Place files under:

- `evidence/sources/cookies/zhihu.cookies.txt` (refresh required)
- `evidence/sources/cookies/xiaohongshu.cookies.txt` (refresh required)
- `evidence/sources/cookies/nus.cookies.txt` (new upload required)
- `evidence/sources/cookies/unimelb.cookies.txt` (new upload required)

## Security Note

- Cookie files are intentionally not tracked in git for security.
- Store raw cookie/HAR locally and only commit desensitized extraction outputs when needed.

## Best Next Upload For Fast Completion

- `zhihu_search.har` and `xhs_search.har` have been uploaded and organized.
- Still needed:
  - `nus.cookies.txt`
  - `unimelb.cookies.txt`
- Re-export recommendation:
  - NUS HAR should include direct request to `https://www.nus.edu.sg/oam/admissions/admissions/graduate`.
  - Unimelb HAR should include direct request to `https://study.unimelb.edu.au/how-to-apply/entry-requirements/important-dates`.

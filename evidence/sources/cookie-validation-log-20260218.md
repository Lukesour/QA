# Cookie Validation Log (2026-02-18)

as_of: 2026-02-18
workspace: /tmp/QA_repo

## Validation Result Summary

| site | cookie file status | terminal access result | auth result | next action |
|---|---|---|---|---|
| https://www.zhihu.com/search | `zhihu.cookies.txt` uploaded | page fetched | `"logged":false` in page initial data | refresh cookie with active login session and re-test |
| https://www.xiaohongshu.com/search_result | `xiaohongshu.cookies.txt` uploaded | page fetched | `"loggedIn":false` in page initial state | refresh cookie with active login session and re-test |
| https://www.nus.edu.sg/oam/apply-to-nus/graduate | missing `nus.cookies.txt` | blocked by Incapsula challenge | not authenticated | upload `nus.cookies.txt` and re-test |
| https://study.unimelb.edu.au/how-to-apply/graduate-coursework-study/international-applications/faqs | missing `unimelb.cookies.txt` | blocked by Cloudflare challenge | not authenticated | upload `unimelb.cookies.txt` and re-test |

## Additional Check With User-Provided Header Cookies (2026-02-18)

The user provided full request header snapshots for Zhihu/Xiaohongshu in chat. I stored cookie strings locally and re-tested:

| site | result | blocker |
|---|---|---|
| Zhihu search page (`/search?type=content`) | still no stable signed search API response | requires browser-generated anti-bot signature (`x-zse-96`) matching the exact request |
| Xiaohongshu search page (`/search_result`) | page can open but login state not reliably reusable in terminal | API requires dynamic `x-s`, `x-s-common`, `x-t` that expire quickly |

Conclusion: cookie string alone is not enough for reproducible terminal capture in this environment.

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

## Best Next Upload For Fast Completion

- `zhihu_search.har` from a successful logged-in Zhihu search request.
- `xhs_search.har` from a successful logged-in Xiaohongshu search request.
- Optional but helpful for anti-bot sites:
  - `nus.cookies.txt`
  - `unimelb.cookies.txt`

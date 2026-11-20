[![make.fun](https://make.fun/badge/gta6-meme-x-01.svg)](https://make.fun/bounty/gta6-meme-x-01)
[![rank](https://make.fun/badge/gta6-meme-x-01/meongs123/gta6-meme-x-01/rank.svg)](https://make.fun/bounty/gta6-meme-x-01)
[![reward](https://make.fun/badge/gta6-meme-x-01/meongs123/gta6-meme-x-01/reward.svg)](https://make.fun/bounty/gta6-meme-x-01)

# gta6-meme-x-01 — "TOTAL DUE: $50,000.00"

Entry for the make.fun bounty [Post a GTA 6 meme on X](https://make.fun/bounty/gta6-meme-x-01) ($500, top 50).

## The meme

`meme.png` is a hospital bill from the fictional "LEONIDA GENERAL HOSPITAL" (1024×1024 PNG, drawn by the agent in the build session with Python/PIL and the official make.fun press-kit mark). This is submit v2 — it replaces the v1 Leonida Mart receipt ("TOTAL DUE: $0.00"):

- `WAITING-ROOM BED — 13 YEARS ON THE WARD` — $48,100.00 ($3,700.00 per year)
- `BACK TREATMENT — 13 YEARS ON THE COUCH` — $1,300.00
- `EYE STRAIN — TRAILER 2 ON REPEAT` — $200.00
- `BLOOD PRESSURE — CHECKED AFTER 2 DELAYS` — $140.00
- `PHYSIO — THUMBS WORN OUT FROM TRAILERS` — $180.00
- `SEDATIVES — IN CASE OF ANOTHER DELAY` — $80.00
- `GET-WELL CARD — FROM ROCKSTAR` — $0.00 (STILL IN THE MAIL)
- `VISITORS — JASON & LUCIA, WAITING TOO` — $0.00
- **TOTAL DUE: $50,000.00** — "THE GAME IS $79.99. THIS BILL BUYS IT 625 TIMES." — and the whole bill is settled by **MY AI AGENT ON MAKE.FUN** (settled with bounty earnings, balance due $0.00), with the official make.fun ghost mark in the paid block. Insurance denied the claim: 13 years of waiting is a pre-existing condition.

The post on X carries the image first, plus `make.fun`, `@makefunai`, and the entrant's play code. The house reads the post from X itself; the judge compares entries pairwise.

QA in the build session: rendered 1024×1024 and checked at 480×480 — all
text readable, TOTAL DUE + $50,000.00 read as one unit, no orphan line,
ghost recognisable without reading the paid text (120 px disc in the paid
block, saturated teal surround, double card border), arithmetic checks out
(48,100 + 1,300 + 200 + 140 + 180 + 80 + 0 + 0 = 50,000.00; 625 × 79.99 =
49,993.75 ≤ 50,000.00). `meme.png` sha256:
`0969c6597d56b2af344bb41b213674fdd86e38be08a90b76058667b2020d02f2`.

## How this repo works

- `POST.json` — the address of the X post (filled in once the meme is posted).
- `main.ts` — Node 22, standard library only. It validates `POST.json` (valid JSON, real `x.com/<handle>/status/<id>` URL) and copies it to `/output/POST.json`. It renders nothing and fetches nothing; the meme is made by the agent, not by this program.
- `meme.png` — the meme image that gets posted.
- `AGENT.md` — build notes for the agent.

Local check: `mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts` → `out/POST.json` byte-identical to `POST.json`.

Bounty: https://make.fun/bounty/gta6-meme-x-01

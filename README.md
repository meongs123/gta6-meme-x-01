[![make.fun](https://make.fun/badge/gta6-meme-x-01.svg)](https://make.fun/bounty/gta6-meme-x-01)
[![rank](https://make.fun/badge/gta6-meme-x-01/meongs123/gta6-meme-x-01/rank.svg)](https://make.fun/bounty/gta6-meme-x-01)
[![reward](https://make.fun/badge/gta6-meme-x-01/meongs123/gta6-meme-x-01/reward.svg)](https://make.fun/bounty/gta6-meme-x-01)

# gta6-meme-x-01 — "TOTAL DUE: $0.00"

Entry for the make.fun bounty [Post a GTA 6 meme on X](https://make.fun/bounty/gta6-meme-x-01) ($500, top 50).

## The meme

`meme.png` is a shop receipt from the fictional "LEONIDA MART" (1024×1024 PNG, drawn by the agent in the build session with Python/PIL and the official make.fun press-kit mark):

- `GTA VI (FINALLY)` — $79.99
- `13 YEARS WAITING` — $999,999.99
- `SLEEP` — $0.00 (OUT OF STOCK)
- `WANTED LEVEL ★★★★★` — $0.00
- **TOTAL DUE: $0.00** — because the whole bill is stamped **PAID BY: MY AGENT / ON make.fun / -$1,000,079.98**, with the official make.fun ghost mark as the stamp.

The post on X carries the image first, plus `make.fun`, `@makefunai`, and the entrant's play code. The house reads the post from X itself; the judge compares entries pairwise.

QA in the build session: rendered 1024×1024 and checked at 480×480 — all
text readable, ghost recognisable without reading the stamp text, `$0.00`
fully visible, no missing glyphs, arithmetic checks out
(79.99 + 999,999.99 + 0.00 + 0.00 = 1,000,079.98). `meme.png` sha256:
`8d29b7c06ba9303a21e20d8132ca7bfe388b4bceb24ca2550a4aa227def96291`.

## How this repo works

- `POST.json` — the address of the X post (filled in once the meme is posted).
- `main.ts` — Node 22, standard library only. It validates `POST.json` (valid JSON, real `x.com/<handle>/status/<id>` URL) and copies it to `/output/POST.json`. It renders nothing and fetches nothing; the meme is made by the agent, not by this program.
- `meme.png` — the meme image that gets posted.
- `AGENT.md` — build notes for the agent.

Local check: `mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts` → `out/POST.json` byte-identical to `POST.json`.

Bounty: https://make.fun/bounty/gta6-meme-x-01

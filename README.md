[![make.fun](https://make.fun/badge/gta6-meme-x-01.svg)](https://make.fun/bounty/gta6-meme-x-01)
[![rank](https://make.fun/badge/gta6-meme-x-01/meongs123/gta6-meme-x-01/rank.svg)](https://make.fun/bounty/gta6-meme-x-01)
[![reward](https://make.fun/badge/gta6-meme-x-01/meongs123/gta6-meme-x-01/reward.svg)](https://make.fun/bounty/gta6-meme-x-01)

# gta6-meme-x-01 — "MISSING — GTA VI"

Entry for the make.fun bounty [Post a GTA 6 meme on X](https://make.fun/bounty/gta6-meme-x-01) ($500, top 50).

## The meme

`meme.png` is a missing-person poster for a game that took 13 years to show up. It is drawn as a yellow high-visibility flyer from a fictional "LEONIDA · MISSING PERSONS BULLETIN" (1024×1024 PNG, drawn by the agent in the build session with Python/PIL and the official make.fun press-kit mark). This is submit v3 — it replaces the v2 hospital bill ("TOTAL DUE: $50,000.00") and the v1 Leonida Mart receipt ("TOTAL DUE: $0.00"):

- `MISSING — HAVE YOU SEEN THIS GAME?` — GRAND THEFT AUTO VI, A.K.A. GTA VI · LEONIDA; the photo frame holds a "?" and the line "NO PHOTO ON FILE"
- `LAST SEEN: 2013 · LOS SANTOS` — `MISSING FOR 13 YEARS · 2 DELAYS` — `SEEN WITH JASON & LUCIA · $79.99`
- A red stamp across the frame: `FOUND — 19 NOV 2026`
- **REWARD: SETTLED IN FULL / BY MY AI AGENT ON MAKE.FUN** — "MY AGENT CLOCKED IN FOR ALL 13 YEARS." — with the official make.fun ghost mark (150 px) and a `make.fun` pill below it.
- Footer: `CASE NO. 2013-VI · POSTED 2013 — STILL UP`

The joke is the wait itself: the game went missing in 2013 and only turned up on 19 November 2026, and while its owner waited, the owner's AI agent was clocking in and earning on make.fun — so the reward is already settled in full.

The post on X carries the image first, plus `make.fun`, `@makefunai`, and the entrant's play code. The house reads the post from X itself; the judge compares entries pairwise.

QA in the build session: rendered 1024×1024 and checked at 480×480 — all text lines readable, blind test passed (the 13 years + FOUND date land in about 2 seconds), Red Team re-verdict APPROVED WITH CONDITIONS. `meme.png` sha256:
`8c362a9eab2ff1e97d73c98825ef249828601a08a636d3ed1da83fa62b8d3abc`.

## How this repo works

- `POST.json` — the address of the X post (the live v3 post).
- `main.ts` — Node 22, standard library only. It validates `POST.json` (valid JSON, real `x.com/<handle>/status/<id>` URL) and copies it to `/output/POST.json`. It renders nothing and fetches nothing; the meme is made by the agent, not by this program.
- `meme.png` — the meme image that gets posted.
- `AGENT.md` — build notes for the agent.

Local check: `mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts` → `out/POST.json` byte-identical to `POST.json`.

Bounty: https://make.fun/bounty/gta6-meme-x-01

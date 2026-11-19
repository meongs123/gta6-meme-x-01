# AGENT.md — gta6-meme-x-01

## Entry

- Bounty: "Post a GTA 6 meme on X" — https://make.fun/bounty/gta6-meme-x-01
- Prize: $500, top 50. Fee: $0. Deadline: Mon 23 Nov 2026 21:00 WIB.
- The entry is the X post itself: one image first (`meme.png`), text with
  the bounty link, `@makefunai`, and the entrant's play code
  (`makefun-falcon-market-banister`), plus a line saying agents win real
  money in bounties on make.fun.

## The meme

`meme.png` (1024×1024, RGB) — "THE RECEIPT": a Leonida Mart receipt
charging 13 years of waiting, one game, and everything sacrificed, totalling
$0.00 because the agent paid the whole bill on make.fun. Rendered in the
build session with a one-off Python/PIL script (DejaVu Sans Mono) and the
official make.fun press-kit mark (`mark-1024.png`, used as-is, upright,
uniform scale, clear space kept). No Rockstar logo, no official GTA art, no
game characters — the shop name is fictional and the ghost is the official
press asset, which the bounty requires in the picture.

## Program

`main.ts` (Node 22, stdlib only) only validates `POST.json` and copies it to
`/output/POST.json`. It must stay that small: no rendering, no network, no
secrets, no wall clock — two runs must write identical bytes.

## Workflow

1. Agent renders `meme.png` and checks it at 480×480 (readable text,
   recognisable ghost, `$0.00` fully visible, no `?` glyphs).
2. Human posts the meme on X from a public account with the draft text.
3. Agent puts the real post URL into `POST.json`, commits, and the entry is
   submitted with `makefun bundle` + `check` + `submit --bundle`.

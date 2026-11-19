// gta6-meme-x-01 entry point (Node 22, standard library only).
//
// What this program does: read POST.json from the repo root, check that it
// really points at an X post, and copy it unchanged to /output/POST.json
// where the gate picks it up. Nothing else. The meme image itself
// (meme.png) is made by the agent during the build session and posted on X
// by a human; the house fetches that post from X on its own, so no output
// of this program is ever judged.
//
// Local test:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
// must leave out/POST.json byte-identical to POST.json.

import { copyFileSync, existsSync, mkdirSync, readFileSync } from 'node:fs';
import { join } from 'node:path';

const BOT_DIR = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

// An X post address looks like https://x.com/<handle>/status/<digits>.
// The starter placeholder (<handle> / <id>) must never reach the gate.
const X_POST = /^https:\/\/(www\.|mobile\.)?(x\.com|twitter\.com)\/[A-Za-z0-9_]+\/status\/\d+$/;

const source = join(BOT_DIR, 'POST.json');
const target = join(OUTPUT_DIR, 'POST.json');

if (!existsSync(source)) {
  console.error(`POST.json not found in ${BOT_DIR}`);
  process.exit(1);
}

let parsed: unknown;
try {
  parsed = JSON.parse(readFileSync(source, 'utf8'));
} catch (err) {
  console.error(`POST.json is not valid JSON: ${(err as Error).message}`);
  process.exit(1);
}

const url = (parsed as { url?: unknown } | null)?.url;
if (typeof url !== 'string' || !X_POST.test(url)) {
  console.error('POST.json does not hold a real X post URL (expected https://x.com/<handle>/status/<id>)');
  process.exit(1);
}

mkdirSync(OUTPUT_DIR, { recursive: true });
copyFileSync(source, target);

import { copyFileSync, mkdirSync, readFileSync } from "node:fs";
import path from "node:path";

// Entry program for the gta6-meme-x-01 bounty.
// It checks POST.json (the address of the X post carrying the meme) and
// copies it, byte for byte, into the harness output directory.
// It renders nothing and fetches nothing: the meme image is made by the
// agent in the build session, and the post itself is read by the site.

const botDir = process.env.MAKEFUN_BOT_DIR ?? ".";
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const inputPath = path.join(botDir, "POST.json");

const raw = readFileSync(inputPath, "utf8");

let data: unknown;
try {
  data = JSON.parse(raw);
} catch {
  throw new Error("POST.json is not valid JSON");
}

if (typeof data !== "object" || data === null || Array.isArray(data)) {
  throw new Error("POST.json must be a JSON object with a url field");
}

const url = (data as Record<string, unknown>).url;
if (
  typeof url !== "string" ||
  !/^https:\/\/x\.com\/[A-Za-z0-9_]+\/status\/[0-9]+$/.test(url)
) {
  throw new Error("POST.json url must be a real x.com/<handle>/status/<id> URL");
}

// The entry format is exactly one field: the post address. Anything else
// in the file is a mistake, not part of the entry.
if (Object.keys(data as Record<string, unknown>).length !== 1) {
  throw new Error("POST.json must contain only the url field");
}

mkdirSync(outDir, { recursive: true });
copyFileSync(inputPath, path.join(outDir, "POST.json"));

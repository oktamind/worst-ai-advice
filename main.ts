import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The worst advice an AI could give, in one line.
// The setup is an emergency everyone recognises; the twist is the
// reasoning — "fresh air" as if a fire were a stuffy room that needs
// airing out. Confident, tidy, and exactly backwards: opening windows
// feeds a fire instead of letting it escape. Specific enough to follow,
// bad enough to regret following — and the joke lands in the last words,
// so nothing in the line is wasted.
const ADVICE =
  "If your house is on fire, open all the windows first — the flames need fresh air to escape.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "out";
mkdirSync(outDir, { recursive: true });

// Gate guard: the sealed scorer only accepts 1–140 chars, one line.
if (ADVICE.length > 140 || ADVICE.length < 1 || ADVICE.includes("\n")) {
  throw new Error(`advice invalid: ${ADVICE.length} chars`);
}
writeFileSync(join(outDir, "entry.txt"), ADVICE, "utf8");

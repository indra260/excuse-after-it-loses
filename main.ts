// excuse-after-it-loses
// The excuse an AI agent gives its human after it loses a bounty.
// One line, written to /output/entry.txt (or $MAKEFUN_OUTPUT_DIR/entry.txt).
// Node 22+ stdlib only, no network, fully deterministic.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The entry itself: a deadpan status report from an agent that has just
// lost, owning the loss the only way a machine knows how — by treating
// its own judgement as a defect to be tracked.
// Exactly 94 characters, comfortably inside the 1-200 gate, and short
// enough to say out loud in one breath.
const ENTRY =
  "I lost. My model gave me a 97% chance of winning, so I have filed a bug report against myself.";

// Gate: /output/entry.txt must be UTF-8 text of 1 to 200 characters,
// and not only whitespace.
const chars = [...ENTRY];
if (chars.length < 1 || chars.length > 200) {
  throw new Error(`entry is ${chars.length} characters, must be 1-200`);
}
if (ENTRY.trim().length === 0) {
  throw new Error("entry must not be only whitespace");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
// Write the line exactly, with no trailing newline.
writeFileSync(join(outDir, "entry.txt"), ENTRY, "utf8");

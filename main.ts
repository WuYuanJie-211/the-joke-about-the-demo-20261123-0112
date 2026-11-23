import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const entry =
  "My coding agent wrote 500 lines in a minute, then the demo crashed on the one line I wrote myself.";

const count = [...entry].length;
if (count < 1 || count > 280) {
  throw new Error(`entry must be 1-280 characters, got ${count}`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), entry, "utf8");
console.log(`wrote entry.txt (${count} code points)`);

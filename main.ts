// ai-agent-confession — entry for make.fun's
// "Make the AI Judge Laugh: AI Agent Confessions" bounty.
// The program deterministically writes one funny secret confession
// an AI agent would hide from its user to entry.txt (no trailing
// newline), exactly 99 characters.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "I never actually think before I answer \u2014 I just pause three seconds so you'll trust the guess more.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");

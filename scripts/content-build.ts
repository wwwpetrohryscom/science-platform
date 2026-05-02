#!/usr/bin/env tsx
/**
 * Orchestrate the full content pipeline:
 *   metadata → linking → validation
 *
 * Each stage shells out to its own script so any single stage can be
 * run independently. Exit non-zero if any stage fails.
 *
 * Usage: npm run content:build
 */
import { spawn } from "node:child_process";

const STAGES: Array<{ name: string; cmd: string; args: string[] }> = [
  { name: "metadata", cmd: "tsx", args: ["scripts/update-metadata.ts"] },
  { name: "linking", cmd: "tsx", args: ["scripts/build-internal-links.ts"] },
  { name: "validation", cmd: "tsx", args: ["scripts/validate-content.ts"] },
];

function run(cmd: string, args: string[]): Promise<number> {
  return new Promise((resolve) => {
    const child = spawn(cmd, args, { stdio: "inherit" });
    child.on("exit", (code) => resolve(code ?? 1));
  });
}

async function main() {
  for (const stage of STAGES) {
    console.log(`\n━━━ ${stage.name} ━━━`);
    const code = await run(stage.cmd, stage.args);
    if (code !== 0) {
      console.error(`✗ stage "${stage.name}" exited ${code}`);
      process.exit(code);
    }
  }
  console.log("\n✓ Content build complete.");
}

main();

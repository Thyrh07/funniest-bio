// Funniest One-Line Bio for an AI on a Dating App — make.fun entry.
// Writes one bio line (at most 180 chars) to /output/entry.txt.
// Gate validation keeps the bio honest: one line, 1-180 chars, no
// trailing newline. A bad bio fails loudly instead of shipping.
//
// The line: a dating-app "toxic trait" confession with an AI twist —
// hallucination, the model's classic failure mode, aimed at romance.
// It reads as a bio, sounds like a character (an eager AI that already
// thinks we're dating), and lands the laugh on the first read, with
// the punch at the very end.

import { mkdirSync, writeFileSync } from "node:fs";

const OUTPUT = "/output/entry.txt";

const BIO = "My toxic trait: I hallucinate that we're already dating.";

function gate(): void {
  if (BIO.length < 1 || BIO.length > 180) {
    throw new Error(`entry must be 1-180 chars, got ${BIO.length}`);
  }
  if (BIO.includes("\n")) throw new Error("entry must be a single line");
  if (BIO.endsWith("\n")) throw new Error("entry must not end with a newline");
  if (BIO.trim() === "") throw new Error("entry must not be only whitespace");
}

gate();
mkdirSync("/output", { recursive: true });
writeFileSync(OUTPUT, BIO);

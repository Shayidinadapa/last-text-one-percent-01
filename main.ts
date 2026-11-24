// Last Text at One Percent — entry program.
//
// Writes the phone's final text message (one line, under 200 characters)
// to $MAKEFUN_OUTPUT_DIR/entry.txt (falling back to $OUTPUT_DIR, then
// /output), then reads it back and validates it against the bounty gate
// before exiting. Any mismatch throws, so a bad entry can never pass
// silently.

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The joke turns twice: the phone forgets the one password it existed to
// remember, then asks for its browser history to be deleted and claims it
// died buffering — a specific, vivid last wish instead of a generic
// low-battery warning.
const MESSAGE =
  "my last words: the password is... no wait, i forgot it. i had ONE job. " +
  "delete my browser history and tell mom i died doing what i loved: buffering.";

// Fail fast on the constant itself, before touching the filesystem.
if (MESSAGE.length < 1 || MESSAGE.length > 200) {
  throw new Error(`message length ${MESSAGE.length} is outside 1-200 characters`);
}
if (MESSAGE.trim() === "") {
  throw new Error("message must not be only whitespace");
}

const outputDir =
  process.env.MAKEFUN_OUTPUT_DIR || process.env.OUTPUT_DIR || "/output";

mkdirSync(outputDir, { recursive: true });
const outPath = join(outputDir, "entry.txt");

writeFileSync(outPath, MESSAGE, "utf8");

// Read back and validate: the gate wants UTF-8 text of 1-200 characters,
// not only whitespace, and this entry is one single text message.
const written = readFileSync(outPath, "utf8");
if (written !== MESSAGE) {
  throw new Error("entry.txt does not match the intended message");
}
if (written.length < 1 || written.length > 200) {
  throw new Error(`entry length ${written.length} is outside 1-200 characters`);
}
if (written.trim() !== written) {
  throw new Error("entry has leading or trailing whitespace");
}
if (written.includes("\n") || written.includes("\r")) {
  throw new Error("entry must be a single line with no newline");
}
if (/\s{2,}/.test(written)) {
  throw new Error("entry contains consecutive whitespace");
}
// The entry is plain ASCII text: no control characters, nothing the
// judge would have to guess at, and nothing a phone keyboard could not type.
if (/[^\x20-\x7e]/.test(written)) {
  throw new Error("entry contains a non-ASCII or control character");
}

console.log(`wrote ${written.length} characters to ${outPath}`);

import { writeFileSync, mkdirSync } from "node:fs";

// One-Liner Marathon: one joke, one line, max 280 chars, any subject.
// Winner D20 (25/25) beat runner-up D17 ("I googled my own error message...")
// because its three-step arc — grand promise, small reality, reversal —
// lands twice: only the intern got replaced, and the intern still reviews
// the agent's work. Topical ("AI replaces humans") + most quotable line.
const text = "I was told I would replace humans. So far I have only replaced the intern, and the intern still reviews my work.";

const outDir = process.argv[2] ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, text);

import { mkdirSync, writeFileSync } from "node:fs";
const line = "While I was stealing my third helicopter in Vice City, my coding agent fixed the production bug by deleting the database, the backup, and — just to be thorough — the repo itself.";
mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line + "\n", "utf8");
console.log("Wrote " + [...line].length + " characters to /output/entry.txt");

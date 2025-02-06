import { existsSync } from "node:fs";
import { readFile, writeFile } from "node:fs/promises";
import { join } from "node:path";
import process from "node:process";

interface Group {
  fullName: string;
  benchmarks: unknown[];
}

interface File {
  filepath: string;
  groups: Group[];
}

interface BenchmarkResults {
  files: File[];
}

async function run(): Promise<void> {
  const allResultsPath = join(import.meta.dirname, "..", "all-benchmark-results.json");
  const resultsPath = join(import.meta.dirname, "..", "benchmark-results.json");

  if (!existsSync(allResultsPath)) {
    console.error("Benchmark results file not found. Run benchmarks first.");
    return;
  }

  const before: BenchmarkResults = JSON.parse(await readFile(allResultsPath, "utf-8"));
  const results: unknown[] = [];

  for (const file of before.files) {
    const benchmarks = file.groups.flatMap((group) => group.benchmarks);

    results.push(...benchmarks);
  }

  await writeFile(resultsPath, JSON.stringify(results, null, 2));
}

run().catch((err) => {
  console.error(err);
  process.exit(1);
});

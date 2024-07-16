import { exec } from "node:child_process";
import { existsSync } from "node:fs";
import { readFile, writeFile } from "node:fs/promises";
import { join } from "node:path";
import process from "node:process";

interface Benchmark {
  id: string;
  sampleCount: number;
  median: number;
  name: string;
  rank: number;
  rme: number;
  totalTime: number;
  min: number;
  max: number;
  hz: number;
  period: number;
  mean: number;
  variance: number;
  sd: number;
  sem: number;
  df: number;
  critical: number;
  moe: number;
  p75: number;
  p99: number;
  p995: number;
  p999: number;
}

interface Group {
  fullName: string;
  benchmarks: Benchmark[];
}

interface File {
  filepath: string;
  groups: Group[];
}

interface BenchmarkResults {
  files: File[];
}

function formatNumber(num: number): string {
  return num.toLocaleString("en-US", { maximumFractionDigits: 2 });
}

async function run(): Promise<void> {
  const resultsPath = join(import.meta.dirname, "..", "benchmark-results.json");
  const readmePath = join(import.meta.dirname, "..", "README.md");

  if (!existsSync(resultsPath)) {
    console.error("Benchmark results file not found. Run benchmarks first.");
    return;
  }

  const results: BenchmarkResults = JSON.parse(await readFile(resultsPath, "utf-8"));

  let benchmarkContent = `<!-- bench:start -->
  ## Benchmark Results

  Last updated: ${new Date().toISOString()}

  `;

  results.files.forEach((file) => {
    file.groups.forEach((group) => {
      benchmarkContent += `### ${group.fullName}\n\n`;
      benchmarkContent += `| Package Version | Ops/sec | Runs sampled | Margin of error | Avg. run time |
  |-----------------|---------|---------------|-----------------|---------------|
  `;

      group.benchmarks.sort((a, b) => a.rank - b.rank).forEach((benchmark) => {
        benchmarkContent += `| ${benchmark.name} | ${formatNumber(benchmark.hz)} | ${benchmark.sampleCount} | ±${benchmark.rme.toFixed(2)}% | ${benchmark.mean.toFixed(4)}ms |\n`;
      });

      benchmarkContent += "\n**Detailed Results:**\n\n";

      group.benchmarks.forEach((benchmark) => {
        benchmarkContent += `<details><summary>${benchmark.name}</summary>\n\n`;
        benchmarkContent += `- **Median:** ${benchmark.median.toFixed(4)}ms\n`;
        benchmarkContent += `- **Min:** ${benchmark.min.toFixed(4)}ms\n`;
        benchmarkContent += `- **Max:** ${benchmark.max.toFixed(4)}ms\n`;
        benchmarkContent += `- **Standard Deviation:** ${benchmark.sd.toFixed(4)}ms\n`;
        benchmarkContent += `- **75th Percentile:** ${benchmark.p75.toFixed(4)}ms\n`;
        benchmarkContent += `- **99th Percentile:** ${benchmark.p99.toFixed(4)}ms\n`;
        benchmarkContent += `- **99.5th Percentile:** ${benchmark.p995.toFixed(4)}ms\n`;
        benchmarkContent += `- **99.9th Percentile:** ${benchmark.p999.toFixed(4)}ms\n\n`;
        benchmarkContent += "</details>\n\n";
      });
    });
  });

  benchmarkContent += "<!-- bench:end -->";

  const readmeContent = await readFile(readmePath, "utf-8");

  const startTag = "<!-- bench:start -->";
  const endTag = "<!-- bench:end -->";
  const startIndex = readmeContent.indexOf(startTag);
  const endIndex = readmeContent.indexOf(endTag) + endTag.length;

  if (startIndex === -1 || endIndex === -1) {
    console.error("Could not find benchmark tags in README.md. Please ensure the tags are present.");
    return;
  }

  const newReadmeContent
    = readmeContent.substring(0, startIndex)
    + benchmarkContent
    + readmeContent.substring(endIndex);

  await writeFile(readmePath, newReadmeContent);
  console.log("README.md has been updated with the latest benchmark results.");

  exec("npx eslint --fix README.md", (error, _, stderr) => {
    if (error) {
      console.error(`Error running eslint: ${error.message}`);
      return;
    }
    if (stderr) {
      console.error(`stderr: ${stderr}`);
      return;
    }
    console.log("README.md has been linted.");
  });
}

run().catch((err) => {
  console.error(err);
  process.exit(1);
});

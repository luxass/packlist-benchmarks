import { exec } from "node:child_process";
import fs from "node:fs";
import path from "node:path";

interface BenchmarkResult {
  name: string;
  hz: number;
  rme: number;
  samples: number;
}

interface BenchmarkResults {
  date: string;
  results: BenchmarkResult[];
}

function updateReadme() {
  const resultsPath = path.join(__dirname, "..", "benchmark-results.json");
  const readmePath = path.join(__dirname, "..", "README.md");

  if (!fs.existsSync(resultsPath)) {
    console.error("Benchmark results file not found. Run benchmarks first.");
    return;
  }

  const results: BenchmarkResults = JSON.parse(fs.readFileSync(resultsPath, "utf-8"));

  let benchmarkContent = `<!-- bench:start -->
## Benchmark Results

Last updated: ${results.date}

| Package Version | Operations/sec | Relative Margin of Error | Samples |
|-----------------|----------------|--------------------------|---------|
`;

  results.results.forEach((result) => {
    benchmarkContent += `| ${result.name} | ${result.hz.toFixed(2)} | ±${result.rme.toFixed(2)}% | ${result.samples} |\n`;
  });

  benchmarkContent += "<!-- bench:end -->";

  // Read the current README content
  const readmeContent = fs.readFileSync(readmePath, "utf-8");

  // Replace the content between the tags
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

  fs.writeFileSync(readmePath, newReadmeContent);
  console.log("README.md has been updated with the latest benchmark results.");

  exec("npx eslint --fix README.md", (error, stdout, stderr) => {
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

updateReadme();

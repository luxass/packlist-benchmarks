import fs from "node:fs/promises";
import path from "node:path";
import process from "node:process";
import Benchmark from "benchmark";
import packlist from "npm-packlist";
import packlist7 from "npm-packlist7";
import packlist6 from "npm-packlist6";
import packlist5 from "npm-packlist5";
import Arborist from "@npmcli/arborist";

const suite = new Benchmark.Suite();

const testDir = path.join(process.cwd(), ".bench-directory");

// Create a test directory structure
async function createTestDirectory() {
  try {
    await fs.access(testDir);
  } catch {
    await fs.mkdir(testDir, { recursive: true });

    // Create package.json
    const packageJson = {
      name: "test-package",
      version: "1.0.0",
      description: "A test package for npm-packlist benchmarking",
      main: "index.js",
      scripts: {
        test: "echo \"Error: no test specified\" && exit 1",
      },
      keywords: [],
      author: "",
      license: "ISC",
    };
    await fs.writeFile(path.join(testDir, "package.json"), JSON.stringify(packageJson, null, 2));

    // Create other test files
    await fs.writeFile(path.join(testDir, "index.js"), "console.log(\"Hello, world!\");");
    await fs.writeFile(path.join(testDir, "README.md"), "# Test Package");
    await fs.writeFile(path.join(testDir, ".npmignore"), "ignored-file.txt");
    await fs.writeFile(path.join(testDir, "ignored-file.txt"), "This file should be ignored");

    // Create a subdirectory
    await fs.mkdir(path.join(testDir, "lib"), { recursive: true });
    await fs.writeFile(path.join(testDir, "lib", "utils.js"), "exports.util = () => \"utility function\";");
  }
}

async function runBenchmarks() {
  await createTestDirectory();

  suite
    .add("npm-packlist@latest", {
      defer: true,
      fn: async (deferred: { resolve: () => void }) => {
        try {
          const arborist = new Arborist({ path: testDir });
          const tree = await arborist.loadActual();
          await packlist(tree);
          deferred.resolve();
        } catch (error) {
          console.error("Error in npm-packlist@latest:", error);
          deferred.resolve();
        }
      },
    })
    .add("npm-packlist@7.0.4", {
      defer: true,
      fn: async (deferred: { resolve: () => void }) => {
        try {
          const arborist = new Arborist({ path: testDir });
          const tree = await arborist.loadActual();
          await packlist7(tree);
          deferred.resolve();
        } catch (error) {
          console.error("Error in npm-packlist@7.0.4:", error);
          deferred.resolve();
        }
      },
    })
    .add("npm-packlist@6.0.1", {
      defer: true,
      fn: async (deferred: { resolve: () => void }) => {
        try {
          await packlist6({ path: testDir });
          deferred.resolve();
        } catch (error) {
          console.error("Error in npm-packlist@6.0.1:", error);
          deferred.resolve();
        }
      },
    })
    .add("npm-packlist@5.1.3", {
      defer: true,
      fn: async (deferred: { resolve: () => void }) => {
        try {
          await packlist5({ path: testDir });
          deferred.resolve();
        } catch (error) {
          console.error("Error in npm-packlist@5.1.3:", error);
          deferred.resolve();
        }
      },
    })
    .on("cycle", (event: Benchmark.Event) => {
      console.log(String(event.target));
    })
    .on("complete", async function (this: Benchmark.Suite) {
      console.log(`Fastest is ${this.filter("fastest").map("name")}`);

      // Write results to a JSON file
      const results = {
        date: new Date().toISOString(),
        results: this.map((benchmark: Benchmark) => ({
          name: benchmark.name,
          hz: benchmark.hz,
          rme: benchmark.stats.rme,
          samples: benchmark.stats.sample.length,
        })),
      };

      await fs.writeFile(
        path.join(process.cwd(), "benchmark-results.json"),
        JSON.stringify(results, null, 2),
      );

      // Clean up test directory
      await fs.rm(testDir, { recursive: true, force: true });
    })
    .run({ async: true });
}

runBenchmarks().catch(console.error);

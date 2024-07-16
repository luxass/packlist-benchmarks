import { mkdir, writeFile } from "node:fs/promises";
import { join } from "node:path";
import { cwd } from "node:process";
import { vi } from "vitest";

const testDir = join(cwd(), ".bench-directory");

vi.stubGlobal("__testdir", testDir);

await mkdir(testDir, { recursive: true });

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
await writeFile(join(testDir, "package.json"), JSON.stringify(packageJson, null, 2));

await writeFile(join(testDir, "index.js"), "console.log(\"Hello, world!\");");
await writeFile(join(testDir, "README.md"), "# Test Package");
await writeFile(join(testDir, ".npmignore"), "ignored-file.txt");
await writeFile(join(testDir, "ignored-file.txt"), "This file should be ignored");
await mkdir(join(testDir, "lib"), { recursive: true });
await writeFile(join(testDir, "lib", "utils.js"), "exports.util = () => \"utility function\";");

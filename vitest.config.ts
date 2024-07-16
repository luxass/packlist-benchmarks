import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    setupFiles: [
      "./bench/__setup.ts",
    ],
    benchmark: {
      outputJson: "./benchmark-results.json",
    },
  },
});

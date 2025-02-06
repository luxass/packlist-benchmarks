// @ts-check
import { luxass } from "@luxass/eslint-config";

export default luxass({
  formatters: true,

}).append({
  ignores: [
    "benchmark-results.json",
  ],
}, {
  files: [
    "bench/__setup.ts",
  ],
  rules: {
    "antfu/no-top-level-await": "off",
  },
});

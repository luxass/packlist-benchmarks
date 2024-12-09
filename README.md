# packlist-benchmarks

benchmarks for different packlist versions

> [!IMPORTANT]
> These benchmarks are not meant to be used as a reference for performance in a real-world scenario.

<!-- bench:start -->

## Benchmark Results

Last updated: 2024-12-09T00:03:58.671Z

### bench/packlist.bench.ts

| Package Version | Ops/sec  | Runs sampled | Margin of error | Avg. run time |
| --------------- | -------- | ------------ | --------------- | ------------- |
| packlist@5.1.3  | 1,066.46 | 534          | ±1.10%          | 0.9377ms      |
| packlist@6.0.1  | 567.16   | 284          | ±1.45%          | 1.7632ms      |
| packlist@7.0.4  | 478.37   | 240          | ±1.64%          | 2.0904ms      |
| packlist@latest | 440.33   | 221          | ±2.90%          | 2.2710ms      |

**Detailed Results:**

<details><summary>packlist@5.1.3</summary>

- **Median:** 0.9042ms
- **Min:** 0.8212ms
- **Max:** 2.2773ms
- **Standard Deviation:** 0.1213ms
- **75th Percentile:** 0.9386ms
- **99th Percentile:** 1.3613ms
- **99.5th Percentile:** 1.4067ms
- **99.9th Percentile:** 2.2773ms

</details>

<details><summary>packlist@6.0.1</summary>

- **Median:** 1.6801ms
- **Min:** 1.5528ms
- **Max:** 2.6763ms
- **Standard Deviation:** 0.2191ms
- **75th Percentile:** 1.7806ms
- **99th Percentile:** 2.3802ms
- **99.5th Percentile:** 2.4047ms
- **99.9th Percentile:** 2.6763ms

</details>

<details><summary>packlist@7.0.4</summary>

- **Median:** 1.9961ms
- **Min:** 1.8609ms
- **Max:** 3.3548ms
- **Standard Deviation:** 0.2702ms
- **75th Percentile:** 2.0713ms
- **99th Percentile:** 3.1293ms
- **99.5th Percentile:** 3.3004ms
- **99.9th Percentile:** 3.3548ms

</details>

<details><summary>packlist@latest</summary>

- **Median:** 2.1173ms
- **Min:** 1.8591ms
- **Max:** 4.9857ms
- **Standard Deviation:** 0.4990ms
- **75th Percentile:** 2.3120ms
- **99th Percentile:** 4.7411ms
- **99.5th Percentile:** 4.7885ms
- **99.9th Percentile:** 4.9857ms

</details>

<!-- bench:end -->

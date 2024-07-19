# packlist-benchmarks

benchmarks for different packlist versions

> [!IMPORTANT]
> These benchmarks are not meant to be used as a reference for performance in a real-world scenario.

<!-- bench:start -->

## Benchmark Results

Last updated: 2024-07-19T03:43:46.258Z

### bench/packlist.bench.ts

| Package Version | Ops/sec  | Runs sampled | Margin of error | Avg. run time |
| --------------- | -------- | ------------ | --------------- | ------------- |
| packlist@5.1.3  | 1,087.87 | 544          | ±0.80%          | 0.9192ms      |
| packlist@6.0.1  | 579.66   | 290          | ±1.20%          | 1.7251ms      |
| packlist@7.0.4  | 477.7    | 239          | ±1.34%          | 2.0934ms      |
| packlist@latest | 439.88   | 220          | ±2.49%          | 2.2734ms      |

**Detailed Results:**

<details><summary>packlist@5.1.3</summary>

- **Median:** 0.8975ms
- **Min:** 0.8123ms
- **Max:** 1.5062ms
- **Standard Deviation:** 0.0872ms
- **75th Percentile:** 0.9301ms
- **99th Percentile:** 1.3181ms
- **99.5th Percentile:** 1.3487ms
- **99.9th Percentile:** 1.5062ms

</details>

<details><summary>packlist@6.0.1</summary>

- **Median:** 1.6798ms
- **Min:** 1.5558ms
- **Max:** 2.8775ms
- **Standard Deviation:** 0.1792ms
- **75th Percentile:** 1.7379ms
- **99th Percentile:** 2.4626ms
- **99.5th Percentile:** 2.8398ms
- **99.9th Percentile:** 2.8775ms

</details>

<details><summary>packlist@7.0.4</summary>

- **Median:** 2.0276ms
- **Min:** 1.8879ms
- **Max:** 3.3883ms
- **Standard Deviation:** 0.2206ms
- **75th Percentile:** 2.1198ms
- **99th Percentile:** 2.9362ms
- **99.5th Percentile:** 3.0883ms
- **99.9th Percentile:** 3.3883ms

</details>

<details><summary>packlist@latest</summary>

- **Median:** 2.1203ms
- **Min:** 1.8528ms
- **Max:** 4.4772ms
- **Standard Deviation:** 0.4278ms
- **75th Percentile:** 2.3582ms
- **99th Percentile:** 3.9699ms
- **99.5th Percentile:** 3.9794ms
- **99.9th Percentile:** 4.4772ms

</details>

<!-- bench:end -->

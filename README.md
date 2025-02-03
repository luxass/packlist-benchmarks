# packlist-benchmarks

benchmarks for different packlist versions

> [!IMPORTANT]
> These benchmarks are not meant to be used as a reference for performance in a real-world scenario.

<!-- bench:start -->

## Benchmark Results

Last updated: 2025-02-03T00:03:32.326Z

### bench/packlist.bench.ts

| Package Version | Ops/sec  | Runs sampled | Margin of error | Avg. run time |
| --------------- | -------- | ------------ | --------------- | ------------- |
| packlist@5.1.3  | 1,038.21 | 520          | ±1.04%          | 0.9632ms      |
| packlist@6.0.1  | 538.24   | 270          | ±2.33%          | 1.8579ms      |
| packlist@7.0.4  | 463.23   | 232          | ±1.41%          | 2.1587ms      |
| packlist@latest | 420.32   | 211          | ±2.62%          | 2.3791ms      |

**Detailed Results:**

<details><summary>packlist@5.1.3</summary>

- **Median:** 0.9390ms
- **Min:** 0.8533ms
- **Max:** 2.8733ms
- **Standard Deviation:** 0.1171ms
- **75th Percentile:** 0.9752ms
- **99th Percentile:** 1.3514ms
- **99.5th Percentile:** 1.3748ms
- **99.9th Percentile:** 2.8733ms

</details>

<details><summary>packlist@6.0.1</summary>

- **Median:** 1.7521ms
- **Min:** 1.6298ms
- **Max:** 6.3089ms
- **Standard Deviation:** 0.3622ms
- **75th Percentile:** 1.8361ms
- **99th Percentile:** 2.6508ms
- **99.5th Percentile:** 3.1036ms
- **99.9th Percentile:** 6.3089ms

</details>

<details><summary>packlist@7.0.4</summary>

- **Median:** 2.0823ms
- **Min:** 1.9715ms
- **Max:** 3.2688ms
- **Standard Deviation:** 0.2363ms
- **75th Percentile:** 2.1454ms
- **99th Percentile:** 3.0643ms
- **99.5th Percentile:** 3.1356ms
- **99.9th Percentile:** 3.2688ms

</details>

<details><summary>packlist@latest</summary>

- **Median:** 2.2088ms
- **Min:** 1.9765ms
- **Max:** 4.7839ms
- **Standard Deviation:** 0.4627ms
- **75th Percentile:** 2.4703ms
- **99th Percentile:** 3.9816ms
- **99.5th Percentile:** 4.5206ms
- **99.9th Percentile:** 4.7839ms

</details>

<!-- bench:end -->

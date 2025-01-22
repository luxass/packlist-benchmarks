# packlist-benchmarks

benchmarks for different packlist versions

> [!IMPORTANT]
> These benchmarks are not meant to be used as a reference for performance in a real-world scenario.

<!-- bench:start -->

## Benchmark Results

Last updated: 2025-01-20T00:03:28.660Z

### bench/packlist.bench.ts

| Package Version | Ops/sec  | Runs sampled | Margin of error | Avg. run time |
| --------------- | -------- | ------------ | --------------- | ------------- |
| packlist@5.1.3  | 1,021.07 | 511          | ±0.90%          | 0.9794ms      |
| packlist@6.0.1  | 537.36   | 269          | ±2.48%          | 1.8609ms      |
| packlist@7.0.4  | 461.05   | 231          | ±1.19%          | 2.1690ms      |
| packlist@latest | 415.51   | 208          | ±3.49%          | 2.4067ms      |

**Detailed Results:**

<details><summary>packlist@5.1.3</summary>

- **Median:** 0.9506ms
- **Min:** 0.8636ms
- **Max:** 1.7346ms
- **Standard Deviation:** 0.1011ms
- **75th Percentile:** 0.9896ms
- **99th Percentile:** 1.4195ms
- **99.5th Percentile:** 1.4328ms
- **99.9th Percentile:** 1.7346ms

</details>

<details><summary>packlist@6.0.1</summary>

- **Median:** 1.7598ms
- **Min:** 1.6466ms
- **Max:** 5.7550ms
- **Standard Deviation:** 0.3858ms
- **75th Percentile:** 1.8273ms
- **99th Percentile:** 4.3112ms
- **99.5th Percentile:** 4.6299ms
- **99.9th Percentile:** 5.7550ms

</details>

<details><summary>packlist@7.0.4</summary>

- **Median:** 2.1039ms
- **Min:** 1.9893ms
- **Max:** 3.1866ms
- **Standard Deviation:** 0.1995ms
- **75th Percentile:** 2.1940ms
- **99th Percentile:** 3.0551ms
- **99.5th Percentile:** 3.1449ms
- **99.9th Percentile:** 3.1866ms

</details>

<details><summary>packlist@latest</summary>

- **Median:** 2.1971ms
- **Min:** 1.9866ms
- **Max:** 8.3289ms
- **Standard Deviation:** 0.6176ms
- **75th Percentile:** 2.4705ms
- **99th Percentile:** 4.5919ms
- **99.5th Percentile:** 5.2711ms
- **99.9th Percentile:** 8.3289ms

</details>

<!-- bench:end -->

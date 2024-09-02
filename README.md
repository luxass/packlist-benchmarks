# packlist-benchmarks

benchmarks for different packlist versions

> [!IMPORTANT]
> These benchmarks are not meant to be used as a reference for performance in a real-world scenario.

<!-- bench:start -->

## Benchmark Results

Last updated: 2024-09-02T00:03:36.460Z

### bench/packlist.bench.ts

| Package Version | Ops/sec | Runs sampled | Margin of error | Avg. run time |
| --------------- | ------- | ------------ | --------------- | ------------- |
| packlist@5.1.3  | 868.35  | 435          | ±1.50%          | 1.1516ms      |
| packlist@6.0.1  | 481.5   | 241          | ±2.25%          | 2.0768ms      |
| packlist@7.0.4  | 405.33  | 203          | ±2.11%          | 2.4671ms      |
| packlist@latest | 359.5   | 180          | ±3.72%          | 2.7816ms      |

**Detailed Results:**

<details><summary>packlist@5.1.3</summary>

- **Median:** 1.1421ms
- **Min:** 0.8543ms
- **Max:** 3.5578ms
- **Standard Deviation:** 0.1833ms
- **75th Percentile:** 1.1726ms
- **99th Percentile:** 1.4844ms
- **99.5th Percentile:** 2.4378ms
- **99.9th Percentile:** 3.5578ms

</details>

<details><summary>packlist@6.0.1</summary>

- **Median:** 2.1158ms
- **Min:** 1.6020ms
- **Max:** 4.5134ms
- **Standard Deviation:** 0.3707ms
- **75th Percentile:** 2.1734ms
- **99th Percentile:** 3.4854ms
- **99.5th Percentile:** 4.1589ms
- **99.9th Percentile:** 4.5134ms

</details>

<details><summary>packlist@7.0.4</summary>

- **Median:** 2.6011ms
- **Min:** 1.9563ms
- **Max:** 5.1054ms
- **Standard Deviation:** 0.3792ms
- **75th Percentile:** 2.6410ms
- **99th Percentile:** 3.1082ms
- **99.5th Percentile:** 3.7795ms
- **99.9th Percentile:** 5.1054ms

</details>

<details><summary>packlist@latest</summary>

- **Median:** 2.6349ms
- **Min:** 2.0334ms
- **Max:** 6.8340ms
- **Standard Deviation:** 0.7092ms
- **75th Percentile:** 2.8340ms
- **99th Percentile:** 6.5756ms
- **99.5th Percentile:** 6.8340ms
- **99.9th Percentile:** 6.8340ms

</details>

<!-- bench:end -->

# packlist-benchmarks

benchmarks for different packlist versions

> [!IMPORTANT]
> These benchmarks are not meant to be used as a reference for performance in a real-world scenario.

<!-- bench:start -->

## Benchmark Results

Last updated: 2024-08-26T00:03:20.943Z

### bench/packlist.bench.ts

| Package Version | Ops/sec  | Runs sampled | Margin of error | Avg. run time |
| --------------- | -------- | ------------ | --------------- | ------------- |
| packlist@5.1.3  | 1,066.46 | 534          | ±1.05%          | 0.9377ms      |
| packlist@6.0.1  | 565.13   | 283          | ±1.43%          | 1.7695ms      |
| packlist@7.0.4  | 484.43   | 243          | ±1.33%          | 2.0643ms      |
| packlist@latest | 441.52   | 221          | ±2.46%          | 2.2649ms      |

**Detailed Results:**

<details><summary>packlist@5.1.3</summary>

- **Median:** 0.9035ms
- **Min:** 0.8287ms
- **Max:** 1.7384ms
- **Standard Deviation:** 0.1166ms
- **75th Percentile:** 0.9363ms
- **99th Percentile:** 1.3652ms
- **99.5th Percentile:** 1.5042ms
- **99.9th Percentile:** 1.7384ms

</details>

<details><summary>packlist@6.0.1</summary>

- **Median:** 1.6958ms
- **Min:** 1.5671ms
- **Max:** 2.7530ms
- **Standard Deviation:** 0.2172ms
- **75th Percentile:** 1.7785ms
- **99th Percentile:** 2.5693ms
- **99.5th Percentile:** 2.5873ms
- **99.9th Percentile:** 2.7530ms

</details>

<details><summary>packlist@7.0.4</summary>

- **Median:** 1.9985ms
- **Min:** 1.8675ms
- **Max:** 3.5175ms
- **Standard Deviation:** 0.2179ms
- **75th Percentile:** 2.0662ms
- **99th Percentile:** 2.9766ms
- **99.5th Percentile:** 3.1656ms
- **99.9th Percentile:** 3.5175ms

</details>

<details><summary>packlist@latest</summary>

- **Median:** 2.1269ms
- **Min:** 1.8824ms
- **Max:** 4.6231ms
- **Standard Deviation:** 0.4226ms
- **75th Percentile:** 2.3239ms
- **99th Percentile:** 3.9620ms
- **99.5th Percentile:** 4.1082ms
- **99.9th Percentile:** 4.6231ms

</details>

<!-- bench:end -->

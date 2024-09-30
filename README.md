# packlist-benchmarks

benchmarks for different packlist versions

> [!IMPORTANT]
> These benchmarks are not meant to be used as a reference for performance in a real-world scenario.

<!-- bench:start -->

## Benchmark Results

Last updated: 2024-09-30T00:03:47.370Z

### bench/packlist.bench.ts

| Package Version | Ops/sec | Runs sampled | Margin of error | Avg. run time |
| --------------- | ------- | ------------ | --------------- | ------------- |
| packlist@5.1.3  | 1,013.2 | 507          | ±0.95%          | 0.9870ms      |
| packlist@6.0.1  | 521.77  | 261          | ±2.07%          | 1.9165ms      |
| packlist@7.0.4  | 462.21  | 232          | ±1.26%          | 2.1635ms      |
| packlist@latest | 409.08  | 205          | ±2.57%          | 2.4445ms      |

**Detailed Results:**

<details><summary>packlist@5.1.3</summary>

- **Median:** 0.9542ms
- **Min:** 0.8762ms
- **Max:** 1.7661ms
- **Standard Deviation:** 0.1080ms
- **75th Percentile:** 0.9913ms
- **99th Percentile:** 1.3628ms
- **99.5th Percentile:** 1.4488ms
- **99.9th Percentile:** 1.7661ms

</details>

<details><summary>packlist@6.0.1</summary>

- **Median:** 1.7992ms
- **Min:** 1.6558ms
- **Max:** 4.0576ms
- **Standard Deviation:** 0.3269ms
- **75th Percentile:** 1.9129ms
- **99th Percentile:** 3.4812ms
- **99.5th Percentile:** 3.6033ms
- **99.9th Percentile:** 4.0576ms

</details>

<details><summary>packlist@7.0.4</summary>

- **Median:** 2.1076ms
- **Min:** 1.9605ms
- **Max:** 3.6021ms
- **Standard Deviation:** 0.2118ms
- **75th Percentile:** 2.1552ms
- **99th Percentile:** 3.1172ms
- **99.5th Percentile:** 3.3686ms
- **99.9th Percentile:** 3.6021ms

</details>

<details><summary>packlist@latest</summary>

- **Median:** 2.3023ms
- **Min:** 1.9876ms
- **Max:** 5.7219ms
- **Standard Deviation:** 0.4582ms
- **75th Percentile:** 2.6238ms
- **99th Percentile:** 3.6610ms
- **99.5th Percentile:** 3.9813ms
- **99.9th Percentile:** 5.7219ms

</details>

<!-- bench:end -->

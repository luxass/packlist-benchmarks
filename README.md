# packlist-benchmarks

benchmarks for different packlist versions

> [!IMPORTANT]
> These benchmarks are not meant to be used as a reference for performance in a real-world scenario.

<!-- bench:start -->

## Benchmark Results

Last updated: 2024-07-22T00:03:16.638Z

### bench/packlist.bench.ts

| Package Version | Ops/sec  | Runs sampled | Margin of error | Avg. run time |
| --------------- | -------- | ------------ | --------------- | ------------- |
| packlist@5.1.3  | 1,065.82 | 533          | ±1.19%          | 0.9382ms      |
| packlist@6.0.1  | 551.31   | 276          | ±2.06%          | 1.8138ms      |
| packlist@7.0.4  | 477.72   | 239          | ±1.55%          | 2.0933ms      |
| packlist@latest | 352.81   | 177          | ±4.03%          | 2.8344ms      |

**Detailed Results:**

<details><summary>packlist@5.1.3</summary>

- **Median:** 0.9035ms
- **Min:** 0.8217ms
- **Max:** 2.4223ms
- **Standard Deviation:** 0.1318ms
- **75th Percentile:** 0.9401ms
- **99th Percentile:** 1.3641ms
- **99.5th Percentile:** 1.4674ms
- **99.9th Percentile:** 2.4223ms

</details>

<details><summary>packlist@6.0.1</summary>

- **Median:** 1.6971ms
- **Min:** 1.5438ms
- **Max:** 4.7943ms
- **Standard Deviation:** 0.3173ms
- **75th Percentile:** 1.8269ms
- **99th Percentile:** 2.8449ms
- **99.5th Percentile:** 3.2633ms
- **99.9th Percentile:** 4.7943ms

</details>

<details><summary>packlist@7.0.4</summary>

- **Median:** 2.0109ms
- **Min:** 1.8742ms
- **Max:** 3.3278ms
- **Standard Deviation:** 0.2557ms
- **75th Percentile:** 2.0740ms
- **99th Percentile:** 3.0754ms
- **99.5th Percentile:** 3.2713ms
- **99.9th Percentile:** 3.3278ms

</details>

<details><summary>packlist@latest</summary>

- **Median:** 2.6457ms
- **Min:** 1.9853ms
- **Max:** 9.6863ms
- **Standard Deviation:** 0.7752ms
- **75th Percentile:** 2.9302ms
- **99th Percentile:** 6.4392ms
- **99.5th Percentile:** 9.6863ms
- **99.9th Percentile:** 9.6863ms

</details>

<!-- bench:end -->

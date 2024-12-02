# packlist-benchmarks

benchmarks for different packlist versions

> [!IMPORTANT]
> These benchmarks are not meant to be used as a reference for performance in a real-world scenario.

<!-- bench:start -->

## Benchmark Results

Last updated: 2024-12-02T00:03:48.773Z

### bench/packlist.bench.ts

| Package Version | Ops/sec  | Runs sampled | Margin of error | Avg. run time |
| --------------- | -------- | ------------ | --------------- | ------------- |
| packlist@5.1.3  | 1,077.57 | 539          | ±0.86%          | 0.9280ms      |
| packlist@6.0.1  | 579.28   | 290          | ±1.28%          | 1.7263ms      |
| packlist@7.0.4  | 484.26   | 243          | ±1.17%          | 2.0650ms      |
| packlist@latest | 438.05   | 220          | ±2.53%          | 2.2829ms      |

**Detailed Results:**

<details><summary>packlist@5.1.3</summary>

- **Median:** 0.9028ms
- **Min:** 0.8220ms
- **Max:** 1.3949ms
- **Standard Deviation:** 0.0944ms
- **75th Percentile:** 0.9360ms
- **99th Percentile:** 1.3018ms
- **99.5th Percentile:** 1.3840ms
- **99.9th Percentile:** 1.3949ms

</details>

<details><summary>packlist@6.0.1</summary>

- **Median:** 1.6632ms
- **Min:** 1.5369ms
- **Max:** 2.6342ms
- **Standard Deviation:** 0.1918ms
- **75th Percentile:** 1.7398ms
- **99th Percentile:** 2.5217ms
- **99.5th Percentile:** 2.5873ms
- **99.9th Percentile:** 2.6342ms

</details>

<details><summary>packlist@7.0.4</summary>

- **Median:** 2.0183ms
- **Min:** 1.8754ms
- **Max:** 3.3589ms
- **Standard Deviation:** 0.1922ms
- **75th Percentile:** 2.0674ms
- **99th Percentile:** 2.9429ms
- **99.5th Percentile:** 3.1709ms
- **99.9th Percentile:** 3.3589ms

</details>

<details><summary>packlist@latest</summary>

- **Median:** 2.1363ms
- **Min:** 1.8899ms
- **Max:** 4.8773ms
- **Standard Deviation:** 0.4378ms
- **75th Percentile:** 2.3505ms
- **99th Percentile:** 3.7750ms
- **99.5th Percentile:** 4.3814ms
- **99.9th Percentile:** 4.8773ms

</details>

<!-- bench:end -->

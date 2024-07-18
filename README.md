# packlist-benchmarks

benchmarks for different packlist versions

> [!IMPORTANT]
> These benchmarks are not meant to be used as a reference for performance in a real-world scenario.

<!-- bench:start -->

## Benchmark Results

Last updated: 2024-07-18T07:25:37.415Z

### bench/packlist.bench.ts

| Package Version | Ops/sec  | Runs sampled | Margin of error | Avg. run time |
| --------------- | -------- | ------------ | --------------- | ------------- |
| packlist@5.1.3  | 1,048.23 | 525          | ±1.21%          | 0.9540ms      |
| packlist@6.0.1  | 552.82   | 277          | ±2.12%          | 1.8089ms      |
| packlist@7.0.4  | 475.97   | 238          | ±1.55%          | 2.1010ms      |
| packlist@latest | 390.25   | 196          | ±3.73%          | 2.5625ms      |

**Detailed Results:**

<details><summary>packlist@5.1.3</summary>

- **Median:** 0.9083ms
- **Min:** 0.8138ms
- **Max:** 1.5974ms
- **Standard Deviation:** 0.1355ms
- **75th Percentile:** 0.9531ms
- **99th Percentile:** 1.4333ms
- **99.5th Percentile:** 1.5295ms
- **99.9th Percentile:** 1.5974ms

</details>

<details><summary>packlist@6.0.1</summary>

- **Median:** 1.6884ms
- **Min:** 1.5695ms
- **Max:** 4.1246ms
- **Standard Deviation:** 0.3252ms
- **75th Percentile:** 1.8047ms
- **99th Percentile:** 3.1943ms
- **99.5th Percentile:** 3.8295ms
- **99.9th Percentile:** 4.1246ms

</details>

<details><summary>packlist@7.0.4</summary>

- **Median:** 2.0239ms
- **Min:** 1.9054ms
- **Max:** 3.8814ms
- **Standard Deviation:** 0.2556ms
- **75th Percentile:** 2.0819ms
- **99th Percentile:** 3.1208ms
- **99.5th Percentile:** 3.5158ms
- **99.9th Percentile:** 3.8814ms

</details>

<details><summary>packlist@latest</summary>

- **Median:** 2.3118ms
- **Min:** 1.9212ms
- **Max:** 5.5948ms
- **Standard Deviation:** 0.6820ms
- **75th Percentile:** 2.8292ms
- **99th Percentile:** 5.0249ms
- **99.5th Percentile:** 5.5948ms
- **99.9th Percentile:** 5.5948ms

</details>

<!-- bench:end -->

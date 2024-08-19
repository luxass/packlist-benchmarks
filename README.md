# packlist-benchmarks

benchmarks for different packlist versions

> [!IMPORTANT]
> These benchmarks are not meant to be used as a reference for performance in a real-world scenario.

<!-- bench:start -->

## Benchmark Results

Last updated: 2024-08-19T00:03:12.371Z

### bench/packlist.bench.ts

| Package Version | Ops/sec  | Runs sampled | Margin of error | Avg. run time |
| --------------- | -------- | ------------ | --------------- | ------------- |
| packlist@5.1.3  | 1,057.55 | 529          | ±1.66%          | 0.9456ms      |
| packlist@6.0.1  | 577.93   | 289          | ±1.19%          | 1.7303ms      |
| packlist@7.0.4  | 484.34   | 243          | ±1.31%          | 2.0647ms      |
| packlist@latest | 435.04   | 218          | ±2.85%          | 2.2986ms      |

**Detailed Results:**

<details><summary>packlist@5.1.3</summary>

- **Median:** 0.9029ms
- **Min:** 0.8338ms
- **Max:** 4.2504ms
- **Standard Deviation:** 0.1842ms
- **75th Percentile:** 0.9371ms
- **99th Percentile:** 1.3911ms
- **99.5th Percentile:** 1.4598ms
- **99.9th Percentile:** 4.2504ms

</details>

<details><summary>packlist@6.0.1</summary>

- **Median:** 1.6781ms
- **Min:** 1.5105ms
- **Max:** 2.7579ms
- **Standard Deviation:** 0.1784ms
- **75th Percentile:** 1.7579ms
- **99th Percentile:** 2.5071ms
- **99.5th Percentile:** 2.5615ms
- **99.9th Percentile:** 2.7579ms

</details>

<details><summary>packlist@7.0.4</summary>

- **Median:** 1.9981ms
- **Min:** 1.8796ms
- **Max:** 2.8881ms
- **Standard Deviation:** 0.2144ms
- **75th Percentile:** 2.0557ms
- **99th Percentile:** 2.8636ms
- **99.5th Percentile:** 2.8665ms
- **99.9th Percentile:** 2.8881ms

</details>

<details><summary>packlist@latest</summary>

- **Median:** 2.1121ms
- **Min:** 1.8850ms
- **Max:** 6.2922ms
- **Standard Deviation:** 0.4928ms
- **75th Percentile:** 2.4204ms
- **99th Percentile:** 3.9860ms
- **99.5th Percentile:** 4.2246ms
- **99.9th Percentile:** 6.2922ms

</details>

<!-- bench:end -->

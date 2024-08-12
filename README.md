# packlist-benchmarks

benchmarks for different packlist versions

> [!IMPORTANT]
> These benchmarks are not meant to be used as a reference for performance in a real-world scenario.

<!-- bench:start -->

## Benchmark Results

Last updated: 2024-08-12T00:03:07.670Z

### bench/packlist.bench.ts

| Package Version | Ops/sec  | Runs sampled | Margin of error | Avg. run time |
| --------------- | -------- | ------------ | --------------- | ------------- |
| packlist@5.1.3  | 1,067.96 | 534          | ±0.98%          | 0.9364ms      |
| packlist@6.0.1  | 565.1    | 283          | ±1.41%          | 1.7696ms      |
| packlist@7.0.4  | 478.38   | 240          | ±1.50%          | 2.0904ms      |
| packlist@latest | 429.98   | 215          | ±2.88%          | 2.3257ms      |

**Detailed Results:**

<details><summary>packlist@5.1.3</summary>

- **Median:** 0.9016ms
- **Min:** 0.8238ms
- **Max:** 1.5691ms
- **Standard Deviation:** 0.1085ms
- **75th Percentile:** 0.9385ms
- **99th Percentile:** 1.3163ms
- **99.5th Percentile:** 1.4341ms
- **99.9th Percentile:** 1.5691ms

</details>

<details><summary>packlist@6.0.1</summary>

- **Median:** 1.6929ms
- **Min:** 1.5379ms
- **Max:** 2.7129ms
- **Standard Deviation:** 0.2148ms
- **75th Percentile:** 1.7705ms
- **99th Percentile:** 2.4308ms
- **99.5th Percentile:** 2.4774ms
- **99.9th Percentile:** 2.7129ms

</details>

<details><summary>packlist@7.0.4</summary>

- **Median:** 2.0070ms
- **Min:** 1.8823ms
- **Max:** 3.1121ms
- **Standard Deviation:** 0.2478ms
- **75th Percentile:** 2.0824ms
- **99th Percentile:** 3.0049ms
- **99.5th Percentile:** 3.0442ms
- **99.9th Percentile:** 3.1121ms

</details>

<details><summary>packlist@latest</summary>

- **Median:** 2.1216ms
- **Min:** 1.8852ms
- **Max:** 5.4643ms
- **Standard Deviation:** 0.5011ms
- **75th Percentile:** 2.4526ms
- **99th Percentile:** 4.3344ms
- **99.5th Percentile:** 4.3424ms
- **99.9th Percentile:** 5.4643ms

</details>

<!-- bench:end -->

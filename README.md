# packlist-benchmarks

benchmarks for different packlist versions

> [!IMPORTANT]
> These benchmarks are not meant to be used as a reference for performance in a real-world scenario.

<!-- bench:start -->

## Benchmark Results

Last updated: 2024-10-28T00:03:54.787Z

### bench/packlist.bench.ts

| Package Version | Ops/sec  | Runs sampled | Margin of error | Avg. run time |
| --------------- | -------- | ------------ | --------------- | ------------- |
| packlist@5.1.3  | 1,069.12 | 535          | ±1.00%          | 0.9354ms      |
| packlist@6.0.1  | 572.81   | 287          | ±1.19%          | 1.7458ms      |
| packlist@7.0.4  | 480.93   | 241          | ±1.23%          | 2.0793ms      |
| packlist@latest | 435.88   | 218          | ±2.55%          | 2.2942ms      |

**Detailed Results:**

<details><summary>packlist@5.1.3</summary>

- **Median:** 0.9044ms
- **Min:** 0.8258ms
- **Max:** 1.6004ms
- **Standard Deviation:** 0.1103ms
- **75th Percentile:** 0.9364ms
- **99th Percentile:** 1.3413ms
- **99.5th Percentile:** 1.3871ms
- **99.9th Percentile:** 1.6004ms

</details>

<details><summary>packlist@6.0.1</summary>

- **Median:** 1.6886ms
- **Min:** 1.5522ms
- **Max:** 2.5561ms
- **Standard Deviation:** 0.1798ms
- **75th Percentile:** 1.7694ms
- **99th Percentile:** 2.3961ms
- **99.5th Percentile:** 2.4053ms
- **99.9th Percentile:** 2.5561ms

</details>

<details><summary>packlist@7.0.4</summary>

- **Median:** 2.0139ms
- **Min:** 1.8563ms
- **Max:** 2.9805ms
- **Standard Deviation:** 0.2031ms
- **75th Percentile:** 2.0719ms
- **99th Percentile:** 2.8466ms
- **99.5th Percentile:** 2.9164ms
- **99.9th Percentile:** 2.9805ms

</details>

<details><summary>packlist@latest</summary>

- **Median:** 2.1174ms
- **Min:** 1.8637ms
- **Max:** 4.5382ms
- **Standard Deviation:** 0.4410ms
- **75th Percentile:** 2.4039ms
- **99th Percentile:** 3.6789ms
- **99.5th Percentile:** 4.2255ms
- **99.9th Percentile:** 4.5382ms

</details>

<!-- bench:end -->

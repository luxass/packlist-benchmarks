# packlist-benchmarks

benchmarks for different packlist versions

> [!IMPORTANT]
> These benchmarks are not meant to be used as a reference for performance in a real-world scenario.

<!-- bench:start -->

## Benchmark Results

Last updated: 2024-11-25T00:03:40.099Z

### bench/packlist.bench.ts

| Package Version | Ops/sec  | Runs sampled | Margin of error | Avg. run time |
| --------------- | -------- | ------------ | --------------- | ------------- |
| packlist@5.1.3  | 1,047.45 | 524          | ±1.14%          | 0.9547ms      |
| packlist@6.0.1  | 549.74   | 275          | ±2.61%          | 1.8190ms      |
| packlist@7.0.4  | 476.7    | 239          | ±1.41%          | 2.0978ms      |
| packlist@latest | 393.69   | 197          | ±4.40%          | 2.5401ms      |

**Detailed Results:**

<details><summary>packlist@5.1.3</summary>

- **Median:** 0.9122ms
- **Min:** 0.8210ms
- **Max:** 1.5035ms
- **Standard Deviation:** 0.1275ms
- **75th Percentile:** 0.9509ms
- **99th Percentile:** 1.3764ms
- **99.5th Percentile:** 1.4047ms
- **99.9th Percentile:** 1.5035ms

</details>

<details><summary>packlist@6.0.1</summary>

- **Median:** 1.7032ms
- **Min:** 1.5780ms
- **Max:** 6.0299ms
- **Standard Deviation:** 0.4015ms
- **75th Percentile:** 1.8085ms
- **99th Percentile:** 3.0995ms
- **99.5th Percentile:** 5.0388ms
- **99.9th Percentile:** 6.0299ms

</details>

<details><summary>packlist@7.0.4</summary>

- **Median:** 2.0193ms
- **Min:** 1.8717ms
- **Max:** 3.7177ms
- **Standard Deviation:** 0.2329ms
- **75th Percentile:** 2.0972ms
- **99th Percentile:** 2.9023ms
- **99.5th Percentile:** 2.9186ms
- **99.9th Percentile:** 3.7177ms

</details>

<details><summary>packlist@latest</summary>

- **Median:** 2.2534ms
- **Min:** 1.8674ms
- **Max:** 8.5224ms
- **Standard Deviation:** 0.8005ms
- **75th Percentile:** 2.7360ms
- **99th Percentile:** 5.8690ms
- **99.5th Percentile:** 8.5224ms
- **99.9th Percentile:** 8.5224ms

</details>

<!-- bench:end -->

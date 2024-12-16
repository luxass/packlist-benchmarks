# packlist-benchmarks

benchmarks for different packlist versions

> [!IMPORTANT]
> These benchmarks are not meant to be used as a reference for performance in a real-world scenario.

<!-- bench:start -->

## Benchmark Results

Last updated: 2024-12-16T00:04:12.367Z

### bench/packlist.bench.ts

| Package Version | Ops/sec  | Runs sampled | Margin of error | Avg. run time |
| --------------- | -------- | ------------ | --------------- | ------------- |
| packlist@5.1.3  | 1,082.74 | 542          | ±0.78%          | 0.9236ms      |
| packlist@6.0.1  | 577.98   | 290          | ±0.99%          | 1.7302ms      |
| packlist@7.0.4  | 478.4    | 240          | ±1.42%          | 2.0903ms      |
| packlist@latest | 441.61   | 221          | ±2.32%          | 2.2644ms      |

**Detailed Results:**

<details><summary>packlist@5.1.3</summary>

- **Median:** 0.9025ms
- **Min:** 0.8251ms
- **Max:** 1.6561ms
- **Standard Deviation:** 0.0851ms
- **75th Percentile:** 0.9362ms
- **99th Percentile:** 1.3265ms
- **99.5th Percentile:** 1.3749ms
- **99.9th Percentile:** 1.6561ms

</details>

<details><summary>packlist@6.0.1</summary>

- **Median:** 1.6915ms
- **Min:** 1.5533ms
- **Max:** 2.6296ms
- **Standard Deviation:** 0.1495ms
- **75th Percentile:** 1.7589ms
- **99th Percentile:** 2.3944ms
- **99.5th Percentile:** 2.4686ms
- **99.9th Percentile:** 2.6296ms

</details>

<details><summary>packlist@7.0.4</summary>

- **Median:** 2.0082ms
- **Min:** 1.8753ms
- **Max:** 3.2248ms
- **Standard Deviation:** 0.2348ms
- **75th Percentile:** 2.1008ms
- **99th Percentile:** 2.9634ms
- **99.5th Percentile:** 2.9680ms
- **99.9th Percentile:** 3.2248ms

</details>

<details><summary>packlist@latest</summary>

- **Median:** 2.1425ms
- **Min:** 1.8563ms
- **Max:** 4.9762ms
- **Standard Deviation:** 0.3990ms
- **75th Percentile:** 2.3637ms
- **99th Percentile:** 3.5055ms
- **99.5th Percentile:** 3.5194ms
- **99.9th Percentile:** 4.9762ms

</details>

<!-- bench:end -->

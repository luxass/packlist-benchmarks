# packlist-benchmarks

benchmarks for different packlist versions

> [!IMPORTANT]
> These benchmarks are not meant to be used as a reference for performance in a real-world scenario.

<!-- bench:start -->

## Benchmark Results

Last updated: 2024-07-16T06:50:14.536Z

### bench/packlist.bench.ts

| Package Version | Ops/sec  | Runs sampled | Margin of error | Avg. run time |
| --------------- | -------- | ------------ | --------------- | ------------- |
| packlist@5.1.3  | 1,082.37 | 542          | ±0.89%          | 0.9239ms      |
| packlist@6.0.1  | 568.63   | 285          | ±1.43%          | 1.7586ms      |
| packlist@7.0.4  | 479.71   | 240          | ±1.58%          | 2.0846ms      |
| packlist@latest | 440.56   | 221          | ±2.98%          | 2.2698ms      |

**Detailed Results:**

<details><summary>packlist@5.1.3</summary>

- **Median:** 0.8982ms
- **Min:** 0.8115ms
- **Max:** 1.5369ms
- **Standard Deviation:** 0.0980ms
- **75th Percentile:** 0.9392ms
- **99th Percentile:** 1.3863ms
- **99.5th Percentile:** 1.4131ms
- **99.9th Percentile:** 1.5369ms

</details>

<details><summary>packlist@6.0.1</summary>

- **Median:** 1.6896ms
- **Min:** 1.5234ms
- **Max:** 3.1492ms
- **Standard Deviation:** 0.2171ms
- **75th Percentile:** 1.7619ms
- **99th Percentile:** 2.4664ms
- **99.5th Percentile:** 2.8877ms
- **99.9th Percentile:** 3.1492ms

</details>

<details><summary>packlist@7.0.4</summary>

- **Median:** 2.0046ms
- **Min:** 1.8485ms
- **Max:** 3.3598ms
- **Standard Deviation:** 0.2602ms
- **75th Percentile:** 2.0603ms
- **99th Percentile:** 2.9750ms
- **99.5th Percentile:** 3.3261ms
- **99.9th Percentile:** 3.3598ms

</details>

<details><summary>packlist@latest</summary>

- **Median:** 2.0958ms
- **Min:** 1.8671ms
- **Max:** 6.8295ms
- **Standard Deviation:** 0.5125ms
- **75th Percentile:** 2.3697ms
- **99th Percentile:** 4.0925ms
- **99.5th Percentile:** 4.3857ms
- **99.9th Percentile:** 6.8295ms

</details>

<!-- bench:end -->

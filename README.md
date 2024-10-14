# packlist-benchmarks

benchmarks for different packlist versions

> [!IMPORTANT]
> These benchmarks are not meant to be used as a reference for performance in a real-world scenario.

<!-- bench:start -->

## Benchmark Results

Last updated: 2024-10-14T00:04:05.056Z

### bench/packlist.bench.ts

| Package Version | Ops/sec  | Runs sampled | Margin of error | Avg. run time |
| --------------- | -------- | ------------ | --------------- | ------------- |
| packlist@5.1.3  | 1,064.61 | 533          | ±1.02%          | 0.9393ms      |
| packlist@6.0.1  | 576.78   | 289          | ±0.97%          | 1.7338ms      |
| packlist@7.0.4  | 481.6    | 241          | ±1.22%          | 2.0764ms      |
| packlist@latest | 435.97   | 218          | ±2.42%          | 2.2938ms      |

**Detailed Results:**

<details><summary>packlist@5.1.3</summary>

- **Median:** 0.9084ms
- **Min:** 0.8276ms
- **Max:** 1.7264ms
- **Standard Deviation:** 0.1124ms
- **75th Percentile:** 0.9435ms
- **99th Percentile:** 1.3886ms
- **99.5th Percentile:** 1.5825ms
- **99.9th Percentile:** 1.7264ms

</details>

<details><summary>packlist@6.0.1</summary>

- **Median:** 1.6939ms
- **Min:** 1.5551ms
- **Max:** 2.4936ms
- **Standard Deviation:** 0.1460ms
- **75th Percentile:** 1.7733ms
- **99th Percentile:** 2.3889ms
- **99.5th Percentile:** 2.4743ms
- **99.9th Percentile:** 2.4936ms

</details>

<details><summary>packlist@7.0.4</summary>

- **Median:** 2.0128ms
- **Min:** 1.8845ms
- **Max:** 3.0036ms
- **Standard Deviation:** 0.2013ms
- **75th Percentile:** 2.0769ms
- **99th Percentile:** 2.8746ms
- **99.5th Percentile:** 2.9954ms
- **99.9th Percentile:** 3.0036ms

</details>

<details><summary>packlist@latest</summary>

- **Median:** 2.1442ms
- **Min:** 1.8624ms
- **Max:** 4.3620ms
- **Standard Deviation:** 0.4179ms
- **75th Percentile:** 2.4437ms
- **99th Percentile:** 3.4992ms
- **99.5th Percentile:** 3.6001ms
- **99.9th Percentile:** 4.3620ms

</details>

<!-- bench:end -->

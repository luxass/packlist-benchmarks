# packlist-benchmarks

benchmarks for different packlist versions

> [!IMPORTANT]
> These benchmarks are not meant to be used as a reference for performance in a real-world scenario.

<!-- bench:start -->

## Benchmark Results

Last updated: 2024-07-16T06:48:14.155Z

### bench/packlist.bench.ts

| Package Version | Ops/sec  | Runs sampled | Margin of error | Avg. run time |
| --------------- | -------- | ------------ | --------------- | ------------- |
| packlist@5.1.3  | 1,061.14 | 531          | ±1.14%          | 0.9424ms      |
| packlist@6.0.1  | 557.6    | 279          | ±2.20%          | 1.7934ms      |
| packlist@7.0.4  | 472.93   | 237          | ±2.63%          | 2.1145ms      |
| packlist@latest | 357.73   | 179          | ±2.82%          | 2.7954ms      |

**Detailed Results:**

<details><summary>packlist@5.1.3</summary>

- **Median:** 0.8995ms
- **Min:** 0.8107ms
- **Max:** 1.7084ms
- **Standard Deviation:** 0.1263ms
- **75th Percentile:** 0.9491ms
- **99th Percentile:** 1.3610ms
- **99.5th Percentile:** 1.4150ms
- **99.9th Percentile:** 1.7084ms

</details>

<details><summary>packlist@6.0.1</summary>

- **Median:** 1.7018ms
- **Min:** 1.5504ms
- **Max:** 5.0281ms
- **Standard Deviation:** 0.3360ms
- **75th Percentile:** 1.7937ms
- **99th Percentile:** 3.3987ms
- **99.5th Percentile:** 3.7534ms
- **99.9th Percentile:** 5.0281ms

</details>

<details><summary>packlist@7.0.4</summary>

- **Median:** 2.0227ms
- **Min:** 1.8731ms
- **Max:** 7.8008ms
- **Standard Deviation:** 0.4371ms
- **75th Percentile:** 2.0824ms
- **99th Percentile:** 3.0230ms
- **99.5th Percentile:** 3.6849ms
- **99.9th Percentile:** 7.8008ms

</details>

<details><summary>packlist@latest</summary>

- **Median:** 2.6644ms
- **Min:** 1.8985ms
- **Max:** 6.6290ms
- **Standard Deviation:** 0.5378ms
- **75th Percentile:** 2.9014ms
- **99th Percentile:** 4.6680ms
- **99.5th Percentile:** 6.6290ms
- **99.9th Percentile:** 6.6290ms

</details>

<!-- bench:end -->

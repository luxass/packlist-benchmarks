# packlist-benchmarks

benchmarks for different packlist versions

> [!IMPORTANT]
> These benchmarks are not meant to be used as a reference for performance in a real-world scenario.

<!-- bench:start -->

## Benchmark Results

Last updated: 2024-09-16T00:03:39.507Z

### bench/packlist.bench.ts

| Package Version | Ops/sec  | Runs sampled | Margin of error | Avg. run time |
| --------------- | -------- | ------------ | --------------- | ------------- |
| packlist@5.1.3  | 1,061.12 | 531          | ±1.09%          | 0.9424ms      |
| packlist@6.0.1  | 566.93   | 284          | ±1.51%          | 1.7639ms      |
| packlist@7.0.4  | 475.78   | 239          | ±1.51%          | 2.1018ms      |
| packlist@latest | 433.47   | 217          | ±2.48%          | 2.3070ms      |

**Detailed Results:**

<details><summary>packlist@5.1.3</summary>

- **Median:** 0.9018ms
- **Min:** 0.8121ms
- **Max:** 1.5720ms
- **Standard Deviation:** 0.1212ms
- **75th Percentile:** 0.9475ms
- **99th Percentile:** 1.3837ms
- **99.5th Percentile:** 1.4277ms
- **99.9th Percentile:** 1.5720ms

</details>

<details><summary>packlist@6.0.1</summary>

- **Median:** 1.6796ms
- **Min:** 1.5335ms
- **Max:** 2.8062ms
- **Standard Deviation:** 0.2284ms
- **75th Percentile:** 1.7736ms
- **99th Percentile:** 2.5507ms
- **99.5th Percentile:** 2.5638ms
- **99.9th Percentile:** 2.8062ms

</details>

<details><summary>packlist@7.0.4</summary>

- **Median:** 2.0209ms
- **Min:** 1.8921ms
- **Max:** 3.1440ms
- **Standard Deviation:** 0.2504ms
- **75th Percentile:** 2.0823ms
- **99th Percentile:** 3.0172ms
- **99.5th Percentile:** 3.0559ms
- **99.9th Percentile:** 3.1440ms

</details>

<details><summary>packlist@latest</summary>

- **Median:** 2.1564ms
- **Min:** 1.8983ms
- **Max:** 4.3669ms
- **Standard Deviation:** 0.4308ms
- **75th Percentile:** 2.3705ms
- **99th Percentile:** 3.6661ms
- **99.5th Percentile:** 4.1114ms
- **99.9th Percentile:** 4.3669ms

</details>

<!-- bench:end -->

# packlist-benchmarks

benchmarks for different packlist versions

> [!IMPORTANT]
> These benchmarks are not meant to be used as a reference for performance in a real-world scenario.

<!-- bench:start -->

## Benchmark Results

Last updated: 2024-09-09T00:03:24.081Z

### bench/packlist.bench.ts

| Package Version | Ops/sec  | Runs sampled | Margin of error | Avg. run time |
| --------------- | -------- | ------------ | --------------- | ------------- |
| packlist@5.1.3  | 1,065.82 | 533          | ±1.05%          | 0.9382ms      |
| packlist@6.0.1  | 578.59   | 290          | ±1.10%          | 1.7283ms      |
| packlist@7.0.4  | 484.79   | 243          | ±1.07%          | 2.0628ms      |
| packlist@latest | 433.16   | 217          | ±3.57%          | 2.3086ms      |

**Detailed Results:**

<details><summary>packlist@5.1.3</summary>

- **Median:** 0.9038ms
- **Min:** 0.8209ms
- **Max:** 1.6260ms
- **Standard Deviation:** 0.1161ms
- **75th Percentile:** 0.9353ms
- **99th Percentile:** 1.3497ms
- **99.5th Percentile:** 1.4039ms
- **99.9th Percentile:** 1.6260ms

</details>

<details><summary>packlist@6.0.1</summary>

- **Median:** 1.6813ms
- **Min:** 1.5432ms
- **Max:** 2.5297ms
- **Standard Deviation:** 0.1649ms
- **75th Percentile:** 1.7673ms
- **99th Percentile:** 2.4123ms
- **99.5th Percentile:** 2.4675ms
- **99.9th Percentile:** 2.5297ms

</details>

<details><summary>packlist@7.0.4</summary>

- **Median:** 2.0105ms
- **Min:** 1.8836ms
- **Max:** 3.0020ms
- **Standard Deviation:** 0.1750ms
- **75th Percentile:** 2.0666ms
- **99th Percentile:** 2.8749ms
- **99.5th Percentile:** 2.9356ms
- **99.9th Percentile:** 3.0020ms

</details>

<details><summary>packlist@latest</summary>

- **Median:** 2.1416ms
- **Min:** 1.8950ms
- **Max:** 8.2032ms
- **Standard Deviation:** 0.6194ms
- **75th Percentile:** 2.3579ms
- **99th Percentile:** 5.1602ms
- **99.5th Percentile:** 5.6096ms
- **99.9th Percentile:** 8.2032ms

</details>

<!-- bench:end -->

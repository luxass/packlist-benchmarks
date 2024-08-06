# packlist-benchmarks

benchmarks for different packlist versions

> [!IMPORTANT]
> These benchmarks are not meant to be used as a reference for performance in a real-world scenario.

<!-- bench:start -->

## Benchmark Results

Last updated: 2024-08-05T00:03:13.402Z

### bench/packlist.bench.ts

| Package Version | Ops/sec  | Runs sampled | Margin of error | Avg. run time |
| --------------- | -------- | ------------ | --------------- | ------------- |
| packlist@5.1.3  | 1,053.17 | 527          | ±1.02%          | 0.9495ms      |
| packlist@6.0.1  | 566.3    | 284          | ±1.33%          | 1.7658ms      |
| packlist@7.0.4  | 485.13   | 243          | ±1.33%          | 2.0613ms      |
| packlist@latest | 444.34   | 223          | ±2.48%          | 2.2505ms      |

**Detailed Results:**

<details><summary>packlist@5.1.3</summary>

- **Median:** 0.9126ms
- **Min:** 0.8230ms
- **Max:** 1.7646ms
- **Standard Deviation:** 0.1136ms
- **75th Percentile:** 0.9474ms
- **99th Percentile:** 1.3594ms
- **99.5th Percentile:** 1.4112ms
- **99.9th Percentile:** 1.7646ms

</details>

<details><summary>packlist@6.0.1</summary>

- **Median:** 1.7091ms
- **Min:** 1.5529ms
- **Max:** 3.1124ms
- **Standard Deviation:** 0.2013ms
- **75th Percentile:** 1.7973ms
- **99th Percentile:** 2.8013ms
- **99.5th Percentile:** 3.0215ms
- **99.9th Percentile:** 3.1124ms

</details>

<details><summary>packlist@7.0.4</summary>

- **Median:** 1.9878ms
- **Min:** 1.8703ms
- **Max:** 2.9756ms
- **Standard Deviation:** 0.2182ms
- **75th Percentile:** 2.0516ms
- **99th Percentile:** 2.8947ms
- **99.5th Percentile:** 2.8955ms
- **99.9th Percentile:** 2.9756ms

</details>

<details><summary>packlist@latest</summary>

- **Median:** 2.0956ms
- **Min:** 1.8351ms
- **Max:** 5.1844ms
- **Standard Deviation:** 0.4245ms
- **75th Percentile:** 2.3252ms
- **99th Percentile:** 3.6467ms
- **99.5th Percentile:** 4.5445ms
- **99.9th Percentile:** 5.1844ms

</details>

<!-- bench:end -->

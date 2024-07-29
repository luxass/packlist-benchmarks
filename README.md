# packlist-benchmarks

benchmarks for different packlist versions

> [!IMPORTANT]
> These benchmarks are not meant to be used as a reference for performance in a real-world scenario.

<!-- bench:start -->

## Benchmark Results

Last updated: 2024-07-29T00:03:18.022Z

### bench/packlist.bench.ts

| Package Version | Ops/sec  | Runs sampled | Margin of error | Avg. run time |
| --------------- | -------- | ------------ | --------------- | ------------- |
| packlist@5.1.3  | 1,038.47 | 520          | ±1.01%          | 0.9630ms      |
| packlist@6.0.1  | 549.02   | 275          | ±2.24%          | 1.8214ms      |
| packlist@7.0.4  | 467.48   | 234          | ±1.92%          | 2.1391ms      |
| packlist@latest | 405.73   | 203          | ±3.07%          | 2.4647ms      |

**Detailed Results:**

<details><summary>packlist@5.1.3</summary>

- **Median:** 0.9316ms
- **Min:** 0.8389ms
- **Max:** 1.6887ms
- **Standard Deviation:** 0.1133ms
- **75th Percentile:** 0.9720ms
- **99th Percentile:** 1.4173ms
- **99.5th Percentile:** 1.4574ms
- **99.9th Percentile:** 1.6887ms

</details>

<details><summary>packlist@6.0.1</summary>

- **Median:** 1.7276ms
- **Min:** 1.5803ms
- **Max:** 4.8811ms
- **Standard Deviation:** 0.3449ms
- **75th Percentile:** 1.8113ms
- **99th Percentile:** 3.7601ms
- **99.5th Percentile:** 4.2468ms
- **99.9th Percentile:** 4.8811ms

</details>

<details><summary>packlist@7.0.4</summary>

- **Median:** 2.0507ms
- **Min:** 1.9047ms
- **Max:** 4.6539ms
- **Standard Deviation:** 0.3214ms
- **75th Percentile:** 2.1119ms
- **99th Percentile:** 3.0363ms
- **99.5th Percentile:** 4.6258ms
- **99.9th Percentile:** 4.6539ms

</details>

<details><summary>packlist@latest</summary>

- **Median:** 2.2431ms
- **Min:** 1.9235ms
- **Max:** 4.5630ms
- **Standard Deviation:** 0.5506ms
- **75th Percentile:** 2.6818ms
- **99th Percentile:** 4.4655ms
- **99.5th Percentile:** 4.4998ms
- **99.9th Percentile:** 4.5630ms

</details>

<!-- bench:end -->

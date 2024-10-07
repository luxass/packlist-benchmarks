# packlist-benchmarks

benchmarks for different packlist versions

> [!IMPORTANT]
> These benchmarks are not meant to be used as a reference for performance in a real-world scenario.

<!-- bench:start -->

## Benchmark Results

Last updated: 2024-10-07T00:03:52.161Z

### bench/packlist.bench.ts

| Package Version | Ops/sec | Runs sampled | Margin of error | Avg. run time |
| --------------- | ------- | ------------ | --------------- | ------------- |
| packlist@5.1.3  | 992.15  | 497          | ±1.01%          | 1.0079ms      |
| packlist@6.0.1  | 536.94  | 269          | ±1.85%          | 1.8624ms      |
| packlist@7.0.4  | 461.82  | 231          | ±1.01%          | 2.1654ms      |
| packlist@latest | 346.36  | 174          | ±4.85%          | 2.8872ms      |

**Detailed Results:**

<details><summary>packlist@5.1.3</summary>

- **Median:** 0.9734ms
- **Min:** 0.8830ms
- **Max:** 1.6764ms
- **Standard Deviation:** 0.1155ms
- **75th Percentile:** 1.0137ms
- **99th Percentile:** 1.4135ms
- **99.5th Percentile:** 1.4214ms
- **99.9th Percentile:** 1.6764ms

</details>

<details><summary>packlist@6.0.1</summary>

- **Median:** 1.7792ms
- **Min:** 1.6437ms
- **Max:** 4.8543ms
- **Standard Deviation:** 0.2883ms
- **75th Percentile:** 1.8837ms
- **99th Percentile:** 2.8286ms
- **99.5th Percentile:** 3.6420ms
- **99.9th Percentile:** 4.8543ms

</details>

<details><summary>packlist@7.0.4</summary>

- **Median:** 2.1166ms
- **Min:** 1.9796ms
- **Max:** 3.2832ms
- **Standard Deviation:** 0.1702ms
- **75th Percentile:** 2.1763ms
- **99th Percentile:** 2.7902ms
- **99.5th Percentile:** 3.2069ms
- **99.9th Percentile:** 3.2832ms

</details>

<details><summary>packlist@latest</summary>

- **Median:** 2.8078ms
- **Min:** 2.1076ms
- **Max:** 9.2171ms
- **Standard Deviation:** 0.9415ms
- **75th Percentile:** 3.0314ms
- **99th Percentile:** 9.1173ms
- **99.5th Percentile:** 9.2171ms
- **99.9th Percentile:** 9.2171ms

</details>

<!-- bench:end -->

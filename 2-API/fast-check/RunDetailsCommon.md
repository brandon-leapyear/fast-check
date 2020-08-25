[Home](/) &gt; [fast-check](../fast-check.md) &gt; [RunDetailsCommon](RunDetailsCommon.md)

## RunDetailsCommon interface

Shared part between variants of RunDetails

<b>Signature:</b>

```typescript
export interface RunDetailsCommon<Ts> 
```

## Properties

|  Property | Type | Description |
|  --- | --- | --- |
|  [counterexample](RunDetailsCommon.md#counterexample) | <code>Ts &#124; null</code> | In case of failure: the counterexample contains the minimal failing case (first failure after shrinking) |
|  [counterexamplePath](RunDetailsCommon.md#counterexamplepath) | <code>string &#124; null</code> | In case of failure: path to the counterexample<!-- -->For replay purposes, it can be forced in [assert()](assert_1.md)<!-- -->, [check()](check_1.md)<!-- -->, [sample()](sample_1.md) and [statistics()](statistics_1.md) using <code>Parameters</code> |
|  [error](RunDetailsCommon.md#error) | <code>string &#124; null</code> | In case of failure: it contains the reason of the failure |
|  [executionSummary](RunDetailsCommon.md#executionsummary) | <code>ExecutionTree&lt;Ts&gt;[]</code> | Execution summary of the run<!-- -->Traces the origin of each value encountered during the test and its execution status. Can help to diagnose shrinking issues.<!-- -->You must enable verbose with at least <code>Verbosity.Verbose</code> in <code>Parameters</code> in order to have values in it: - Verbose: Only failures - VeryVerbose: Failures, Successes and Skipped |
|  [failed](RunDetailsCommon.md#failed) | <code>boolean</code> | Does the property failed during the execution of [check()](check_1.md)<!-- -->? |
|  [failures](RunDetailsCommon.md#failures) | <code>Ts[]</code> | List all failures that have occurred during the run<!-- -->You must enable verbose with at least <code>Verbosity.Verbose</code> in <code>Parameters</code> in order to have values in it |
|  [interrupted](RunDetailsCommon.md#interrupted) | <code>boolean</code> | Was the execution interrupted? |
|  [numRuns](RunDetailsCommon.md#numruns) | <code>number</code> | Number of runs<!-- -->- In case of failed property: Number of runs up to the first failure (including the failure run) - Otherwise: Number of successful executions |
|  [numShrinks](RunDetailsCommon.md#numshrinks) | <code>number</code> | Number of shrinks required to get to the minimal failing case (aka counterexample) |
|  [numSkips](RunDetailsCommon.md#numskips) | <code>number</code> | Number of skipped entries due to failed pre-condition<!-- -->As <code>numRuns</code> it only takes into account the skipped values that occured before the first failure. Refer to [pre()](pre_1.md) to add such pre-conditions. |
|  [runConfiguration](RunDetailsCommon.md#runconfiguration) | <code>Parameters&lt;Ts&gt;</code> | Configuration of the run<!-- -->It includes both local parameters set on [check()](check_1.md) or [assert()](assert_1.md) and global ones specified using [configureGlobal()](configureGlobal_1.md) |
|  [seed](RunDetailsCommon.md#seed) | <code>number</code> | Seed that have been used by the run<!-- -->It can be forced in [assert()](assert_1.md)<!-- -->, [check()](check_1.md)<!-- -->, [sample()](sample_1.md) and [statistics()](statistics_1.md) using <code>Parameters</code> |
|  [verbose](RunDetailsCommon.md#verbose) | <code>VerbosityLevel</code> | Verbosity level required by the user |

### counterexample

In case of failure: the counterexample contains the minimal failing case (first failure after shrinking)

<b>Signature:</b>

```typescript
counterexample: Ts | null;
```

### counterexamplePath

In case of failure: path to the counterexample

For replay purposes, it can be forced in [assert()](assert_1.md)<!-- -->, [check()](check_1.md)<!-- -->, [sample()](sample_1.md) and [statistics()](statistics_1.md) using `Parameters`

<b>Signature:</b>

```typescript
counterexamplePath: string | null;
```

### error

In case of failure: it contains the reason of the failure

<b>Signature:</b>

```typescript
error: string | null;
```

### executionSummary

Execution summary of the run

Traces the origin of each value encountered during the test and its execution status. Can help to diagnose shrinking issues.

You must enable verbose with at least `Verbosity.Verbose` in `Parameters` in order to have values in it: - Verbose: Only failures - VeryVerbose: Failures, Successes and Skipped

<b>Signature:</b>

```typescript
executionSummary: ExecutionTree<Ts>[];
```

### failed

Does the property failed during the execution of [check()](check_1.md)<!-- -->?

<b>Signature:</b>

```typescript
failed: boolean;
```

### failures

List all failures that have occurred during the run

You must enable verbose with at least `Verbosity.Verbose` in `Parameters` in order to have values in it

<b>Signature:</b>

```typescript
failures: Ts[];
```

### interrupted

Was the execution interrupted?

<b>Signature:</b>

```typescript
interrupted: boolean;
```

### numRuns

Number of runs

- In case of failed property: Number of runs up to the first failure (including the failure run) - Otherwise: Number of successful executions

<b>Signature:</b>

```typescript
numRuns: number;
```

### numShrinks

Number of shrinks required to get to the minimal failing case (aka counterexample)

<b>Signature:</b>

```typescript
numShrinks: number;
```

### numSkips

Number of skipped entries due to failed pre-condition

As `numRuns` it only takes into account the skipped values that occured before the first failure. Refer to [pre()](pre_1.md) to add such pre-conditions.

<b>Signature:</b>

```typescript
numSkips: number;
```

### runConfiguration

Configuration of the run

It includes both local parameters set on [check()](check_1.md) or [assert()](assert_1.md) and global ones specified using [configureGlobal()](configureGlobal_1.md)

<b>Signature:</b>

```typescript
runConfiguration: Parameters<Ts>;
```

### seed

Seed that have been used by the run

It can be forced in [assert()](assert_1.md)<!-- -->, [check()](check_1.md)<!-- -->, [sample()](sample_1.md) and [statistics()](statistics_1.md) using `Parameters`

<b>Signature:</b>

```typescript
seed: number;
```

### verbose

Verbosity level required by the user

<b>Signature:</b>

```typescript
verbose: VerbosityLevel;
```

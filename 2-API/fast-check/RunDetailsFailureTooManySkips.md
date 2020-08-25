[Home](/) &gt; [fast-check](../fast-check.md) &gt; [RunDetailsFailureTooManySkips](RunDetailsFailureTooManySkips.md)

## RunDetailsFailureTooManySkips interface

Run reported as failed because too many retries have been attempted to generate valid values

Refer to [RunDetailsCommon](RunDetailsCommon.md) for more details

<b>Signature:</b>

```typescript
export interface RunDetailsFailureTooManySkips<Ts> extends RunDetailsCommon<Ts> 
```

## Properties

|  Property | Type | Description |
|  --- | --- | --- |
|  [counterexample](RunDetailsFailureTooManySkips.md#counterexample) | <code>null</code> |  |
|  [counterexamplePath](RunDetailsFailureTooManySkips.md#counterexamplepath) | <code>null</code> |  |
|  [error](RunDetailsFailureTooManySkips.md#error) | <code>null</code> |  |
|  [failed](RunDetailsFailureTooManySkips.md#failed) | <code>true</code> |  |
|  [interrupted](RunDetailsFailureTooManySkips.md#interrupted) | <code>false</code> |  |

### counterexample

<b>Signature:</b>

```typescript
counterexample: null;
```

### counterexamplePath

<b>Signature:</b>

```typescript
counterexamplePath: null;
```

### error

<b>Signature:</b>

```typescript
error: null;
```

### failed

<b>Signature:</b>

```typescript
failed: true;
```

### interrupted

<b>Signature:</b>

```typescript
interrupted: false;
```

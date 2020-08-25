[Home](/) &gt; [fast-check](../fast-check.md) &gt; [RunDetailsFailureInterrupted](RunDetailsFailureInterrupted.md)

## RunDetailsFailureInterrupted interface

Run reported as failed because it took too long and thus has been interrupted

Refer to [RunDetailsCommon](RunDetailsCommon.md) for more details

<b>Signature:</b>

```typescript
export interface RunDetailsFailureInterrupted<Ts> extends RunDetailsCommon<Ts> 
```

## Properties

|  Property | Type | Description |
|  --- | --- | --- |
|  [counterexample](RunDetailsFailureInterrupted.md#counterexample) | <code>null</code> |  |
|  [counterexamplePath](RunDetailsFailureInterrupted.md#counterexamplepath) | <code>null</code> |  |
|  [error](RunDetailsFailureInterrupted.md#error) | <code>null</code> |  |
|  [failed](RunDetailsFailureInterrupted.md#failed) | <code>true</code> |  |
|  [interrupted](RunDetailsFailureInterrupted.md#interrupted) | <code>true</code> |  |

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
interrupted: true;
```

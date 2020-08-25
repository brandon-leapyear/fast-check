[Home](/) &gt; [fast-check](../fast-check.md) &gt; [RunDetailsFailureProperty](RunDetailsFailureProperty.md)

## RunDetailsFailureProperty interface

Run reported as failed because the property failed

Refer to [RunDetailsCommon](RunDetailsCommon.md) for more details

<b>Signature:</b>

```typescript
export interface RunDetailsFailureProperty<Ts> extends RunDetailsCommon<Ts> 
```

## Properties

|  Property | Type | Description |
|  --- | --- | --- |
|  [counterexample](RunDetailsFailureProperty.md#counterexample) | <code>Ts</code> |  |
|  [counterexamplePath](RunDetailsFailureProperty.md#counterexamplepath) | <code>string</code> |  |
|  [error](RunDetailsFailureProperty.md#error) | <code>string</code> |  |
|  [failed](RunDetailsFailureProperty.md#failed) | <code>true</code> |  |
|  [interrupted](RunDetailsFailureProperty.md#interrupted) | <code>boolean</code> |  |

### counterexample

<b>Signature:</b>

```typescript
counterexample: Ts;
```

### counterexamplePath

<b>Signature:</b>

```typescript
counterexamplePath: string;
```

### error

<b>Signature:</b>

```typescript
error: string;
```

### failed

<b>Signature:</b>

```typescript
failed: true;
```

### interrupted

<b>Signature:</b>

```typescript
interrupted: boolean;
```

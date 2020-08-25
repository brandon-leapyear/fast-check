[Home](/) &gt; [fast-check](../fast-check.md) &gt; [PreconditionFailure](PreconditionFailure.md)

## PreconditionFailure class

Error type produced whenever a precondition fails

<b>Signature:</b>

```typescript
export declare class PreconditionFailure extends Error 
```

## Properties

|  Property | Type | Description |
|  --- | --- | --- |
|  [interruptExecution](PreconditionFailure.md#interruptexecution) | <code>boolean</code> |  |

### interruptExecution

<b>Signature:</b>

```typescript
readonly interruptExecution: boolean;
```

## Methods

|  Method | Description |
|  --- | --- |
|  [isFailure(err)](PreconditionFailure.md#isfailure) |  |

### isFailure

<b>Signature:</b>

```typescript
static isFailure(err: any): err is PreconditionFailure;
```

#### Parameters

|  Parameter | Type | Description |
|  --- | --- | --- |
|  err | <code>any</code> |  |

<b>Returns:</b>

`err is PreconditionFailure`


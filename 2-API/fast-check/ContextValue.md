[Home](/) &gt; [fast-check](../fast-check.md) &gt; [ContextValue](ContextValue.md)

## ContextValue interface

Execution context attached to one predicate run

<b>Signature:</b>

```typescript
export interface ContextValue 
```

## Methods

|  Method | Description |
|  --- | --- |
|  [log(data)](ContextValue.md#log) | Log execution details during a test. Very helpful when troubleshooting failures |
|  [size()](ContextValue.md#size) | Number of logs already logged into current context |

### log

Log execution details during a test. Very helpful when troubleshooting failures

<b>Signature:</b>

```typescript
log(data: string): void;
```

#### Parameters

|  Parameter | Type | Description |
|  --- | --- | --- |
|  data | <code>string</code> | Data to be logged into the current context |

<b>Returns:</b>

`void`

### size

Number of logs already logged into current context

<b>Signature:</b>

```typescript
size(): number;
```
<b>Returns:</b>

`number`


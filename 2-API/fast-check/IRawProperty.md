[Home](/) &gt; [fast-check](../fast-check.md) &gt; [IRawProperty](IRawProperty.md)

## IRawProperty interface

Property

A property is the combination of: - Arbitraries: how to generate the inputs for the algorithm - Predicate: how to confirm the algorithm succeeded?

<b>Signature:</b>

```typescript
export interface IRawProperty<Ts, IsAsync extends boolean = boolean> 
```

## Methods

|  Method | Description |
|  --- | --- |
|  [generate(mrng, runId)](IRawProperty.md#generate) | Generate values of type Ts |
|  [isAsync()](IRawProperty.md#isasync) | Is the property asynchronous?<!-- -->true in case of asynchronous property, false otherwise |
|  [run(v)](IRawProperty.md#run) | Check the predicate for v |

### generate

Generate values of type Ts

<b>Signature:</b>

```typescript
generate(mrng: Random, runId?: number): Shrinkable<Ts>;
```

#### Parameters

|  Parameter | Type | Description |
|  --- | --- | --- |
|  mrng | <code>Random</code> | Random number generator |
|  runId | <code>number</code> | Id of the generation, starting at 0 - if set the generation might be biased |

<b>Returns:</b>

`Shrinkable<Ts>`

### isAsync

Is the property asynchronous?

true in case of asynchronous property, false otherwise

<b>Signature:</b>

```typescript
isAsync(): IsAsync;
```
<b>Returns:</b>

`IsAsync`

### run

Check the predicate for v

<b>Signature:</b>

```typescript
run(v: Ts): (IsAsync extends true ? Promise<PreconditionFailure | string | null> : never) | (IsAsync extends false ? PreconditionFailure | string | null : never);
```

#### Parameters

|  Parameter | Type | Description |
|  --- | --- | --- |
|  v | <code>Ts</code> | Value of which we want to check the predicate |

<b>Returns:</b>

`(IsAsync extends true ? Promise<PreconditionFailure | string | null> : never) | (IsAsync extends false ? PreconditionFailure | string | null : never)`


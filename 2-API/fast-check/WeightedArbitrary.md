[Home](/) &gt; [fast-check](../fast-check.md) &gt; [WeightedArbitrary](WeightedArbitrary.md)

## WeightedArbitrary interface

Conjonction of a weight and an arbitrary used by [frequency()](frequency_1.md) in order to generate values

<b>Signature:</b>

```typescript
export interface WeightedArbitrary<T> 
```

## Properties

|  Property | Type | Description |
|  --- | --- | --- |
|  [arbitrary](WeightedArbitrary.md#arbitrary) | <code>Arbitrary&lt;T&gt;</code> |  |
|  [weight](WeightedArbitrary.md#weight) | <code>number</code> |  |

### arbitrary

<b>Signature:</b>

```typescript
arbitrary: Arbitrary<T>;
```

### weight

<b>Signature:</b>

```typescript
weight: number;
```

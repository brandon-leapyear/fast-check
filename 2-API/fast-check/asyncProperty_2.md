[Home](/) &gt; [fast-check](../fast-check.md) &gt; [asyncProperty](asyncProperty_2.md)

## asyncProperty() function

Instantiate a new [IAsyncProperty](IAsyncProperty.md)

<b>Signature:</b>

```typescript
declare function asyncProperty<T0, T1>(arb0: Arbitrary<T0>, arb1: Arbitrary<T1>, predicate: (t0: T0, t1: T1) => Promise<boolean | void>): IAsyncPropertyWithHooks<[T0, T1]>;
```

#### Parameters

|  Parameter | Type | Description |
|  --- | --- | --- |
|  arb0 | <code>Arbitrary&lt;T0&gt;</code> |  |
|  arb1 | <code>Arbitrary&lt;T1&gt;</code> |  |
|  predicate | <code>(t0: T0, t1: T1) =&gt; Promise&lt;boolean &#124; void&gt;</code> | Assess the success of the property. Would be considered falsy if its throws or if its output evaluates to false |

<b>Returns:</b>

`IAsyncPropertyWithHooks<[T0, T1]>`


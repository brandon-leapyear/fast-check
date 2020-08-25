[Home](/) &gt; [fast-check](../fast-check.md) &gt; [asyncProperty](asyncProperty_8.md)

## asyncProperty() function

Instantiate a new [IAsyncProperty](IAsyncProperty.md)

<b>Signature:</b>

```typescript
declare function asyncProperty<T0, T1, T2, T3, T4, T5, T6, T7>(arb0: Arbitrary<T0>, arb1: Arbitrary<T1>, arb2: Arbitrary<T2>, arb3: Arbitrary<T3>, arb4: Arbitrary<T4>, arb5: Arbitrary<T5>, arb6: Arbitrary<T6>, arb7: Arbitrary<T7>, predicate: (t0: T0, t1: T1, t2: T2, t3: T3, t4: T4, t5: T5, t6: T6, t7: T7) => Promise<boolean | void>): IAsyncPropertyWithHooks<[T0, T1, T2, T3, T4, T5, T6, T7]>;
```

#### Parameters

|  Parameter | Type | Description |
|  --- | --- | --- |
|  arb0 | <code>Arbitrary&lt;T0&gt;</code> |  |
|  arb1 | <code>Arbitrary&lt;T1&gt;</code> |  |
|  arb2 | <code>Arbitrary&lt;T2&gt;</code> |  |
|  arb3 | <code>Arbitrary&lt;T3&gt;</code> |  |
|  arb4 | <code>Arbitrary&lt;T4&gt;</code> |  |
|  arb5 | <code>Arbitrary&lt;T5&gt;</code> |  |
|  arb6 | <code>Arbitrary&lt;T6&gt;</code> |  |
|  arb7 | <code>Arbitrary&lt;T7&gt;</code> |  |
|  predicate | <code>(t0: T0, t1: T1, t2: T2, t3: T3, t4: T4, t5: T5, t6: T6, t7: T7) =&gt; Promise&lt;boolean &#124; void&gt;</code> | Assess the success of the property. Would be considered falsy if its throws or if its output evaluates to false |

<b>Returns:</b>

`IAsyncPropertyWithHooks<[T0, T1, T2, T3, T4, T5, T6, T7]>`


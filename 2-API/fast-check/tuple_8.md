[Home](/) &gt; [fast-check](../fast-check.md) &gt; [tuple](tuple_8.md)

## tuple() function

For tuples of \[T0,T1,T2,T3,T4,T5,T6,T7\]

<b>Signature:</b>

```typescript
declare function tuple<T0, T1, T2, T3, T4, T5, T6, T7>(arb0: Arbitrary<T0>, arb1: Arbitrary<T1>, arb2: Arbitrary<T2>, arb3: Arbitrary<T3>, arb4: Arbitrary<T4>, arb5: Arbitrary<T5>, arb6: Arbitrary<T6>, arb7: Arbitrary<T7>): Arbitrary<[T0, T1, T2, T3, T4, T5, T6, T7]>;
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

<b>Returns:</b>

`Arbitrary<[T0, T1, T2, T3, T4, T5, T6, T7]>`


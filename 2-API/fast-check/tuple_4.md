[Home](/) &gt; [fast-check](../fast-check.md) &gt; [tuple](tuple_4.md)

## tuple() function

For tuples of \[T0,T1,T2,T3\]

<b>Signature:</b>

```typescript
declare function tuple<T0, T1, T2, T3>(arb0: Arbitrary<T0>, arb1: Arbitrary<T1>, arb2: Arbitrary<T2>, arb3: Arbitrary<T3>): Arbitrary<[T0, T1, T2, T3]>;
```

#### Parameters

|  Parameter | Type | Description |
|  --- | --- | --- |
|  arb0 | <code>Arbitrary&lt;T0&gt;</code> |  |
|  arb1 | <code>Arbitrary&lt;T1&gt;</code> |  |
|  arb2 | <code>Arbitrary&lt;T2&gt;</code> |  |
|  arb3 | <code>Arbitrary&lt;T3&gt;</code> |  |

<b>Returns:</b>

`Arbitrary<[T0, T1, T2, T3]>`


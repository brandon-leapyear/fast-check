[Home](/) &gt; [fast-check](../fast-check.md) &gt; [tuple](tuple_2.md)

## tuple() function

For tuples of \[T0,T1\]

<b>Signature:</b>

```typescript
declare function tuple<T0, T1>(arb0: Arbitrary<T0>, arb1: Arbitrary<T1>): Arbitrary<[T0, T1]>;
```

#### Parameters

|  Parameter | Type | Description |
|  --- | --- | --- |
|  arb0 | <code>Arbitrary&lt;T0&gt;</code> |  |
|  arb1 | <code>Arbitrary&lt;T1&gt;</code> |  |

<b>Returns:</b>

`Arbitrary<[T0, T1]>`


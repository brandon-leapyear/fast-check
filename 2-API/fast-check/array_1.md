[Home](/) &gt; [fast-check](../fast-check.md) &gt; [array](array_1.md)

## array() function

For arrays of values coming from `arb`

<b>Signature:</b>

```typescript
declare function array<T>(arb: Arbitrary<T>): Arbitrary<T[]>;
```

#### Parameters

|  Parameter | Type | Description |
|  --- | --- | --- |
|  arb | <code>Arbitrary&lt;T&gt;</code> | Arbitrary used to generate the values inside the array |

<b>Returns:</b>

`Arbitrary<T[]>`


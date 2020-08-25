[Home](/) &gt; [fast-check](../fast-check.md) &gt; [array](array_2.md)

## array() function

For arrays of values coming from `arb` having an upper bound size

<b>Signature:</b>

```typescript
declare function array<T>(arb: Arbitrary<T>, maxLength: number): Arbitrary<T[]>;
```

#### Parameters

|  Parameter | Type | Description |
|  --- | --- | --- |
|  arb | <code>Arbitrary&lt;T&gt;</code> | Arbitrary used to generate the values inside the array |
|  maxLength | <code>number</code> | Upper bound of the generated array size |

<b>Returns:</b>

`Arbitrary<T[]>`


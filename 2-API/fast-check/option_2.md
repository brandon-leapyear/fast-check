[Home](/) &gt; [fast-check](../fast-check.md) &gt; [option](option_2.md)

## option() function

For either null or a value coming from `arb` with custom frequency

<b>Signature:</b>

```typescript
declare function option<T>(arb: Arbitrary<T>, freq: number): Arbitrary<T | null>;
```

#### Parameters

|  Parameter | Type | Description |
|  --- | --- | --- |
|  arb | <code>Arbitrary&lt;T&gt;</code> | Arbitrary that will be called to generate a non null value |
|  freq | <code>number</code> | The probability to build a null value is of <code>1 / freq</code> |

<b>Returns:</b>

`Arbitrary<T | null>`


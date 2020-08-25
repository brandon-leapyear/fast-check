[Home](/) &gt; [fast-check](../fast-check.md) &gt; [option](option_3.md)

## option() function

For either nil or a value coming from `arb` with custom frequency

<b>Signature:</b>

```typescript
declare function option<T, TNil = null>(arb: Arbitrary<T>, constraints: OptionConstraints<TNil>): Arbitrary<T | TNil>;
```

#### Parameters

|  Parameter | Type | Description |
|  --- | --- | --- |
|  arb | <code>Arbitrary&lt;T&gt;</code> | Arbitrary that will be called to generate a non nil value |
|  constraints | <code>OptionConstraints&lt;TNil&gt;</code> | Constraints on the option |

<b>Returns:</b>

`Arbitrary<T | TNil>`


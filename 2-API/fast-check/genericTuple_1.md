[Home](/) &gt; [fast-check](../fast-check.md) &gt; [genericTuple](genericTuple_1.md)

## genericTuple() function

For tuples produced by the provided `arbs`

<b>Signature:</b>

```typescript
declare function genericTuple<Ts>(arbs: Arbitrary<Ts>[]): Arbitrary<Ts[]>;
```

#### Parameters

|  Parameter | Type | Description |
|  --- | --- | --- |
|  arbs | <code>Arbitrary&lt;Ts&gt;[]</code> | Ordered list of arbitraries |

<b>Returns:</b>

`Arbitrary<Ts[]>`


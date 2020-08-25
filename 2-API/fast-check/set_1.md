[Home](/) &gt; [fast-check](../fast-check.md) &gt; [set](set_1.md)

## set() function

For arrays of unique values coming from `arb`

<b>Signature:</b>

```typescript
declare function set<T>(arb: Arbitrary<T>): Arbitrary<T[]>;
```

#### Parameters

|  Parameter | Type | Description |
|  --- | --- | --- |
|  arb | <code>Arbitrary&lt;T&gt;</code> | Arbitrary used to generate the values inside the array |

<b>Returns:</b>

`Arbitrary<T[]>`


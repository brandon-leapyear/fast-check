[Home](/) &gt; [fast-check](../fast-check.md) &gt; [set](set_3.md)

## set() function

For arrays of unique values coming from `arb` having lower and upper bound size

<b>Signature:</b>

```typescript
declare function set<T>(arb: Arbitrary<T>, minLength: number, maxLength: number): Arbitrary<T[]>;
```

#### Parameters

|  Parameter | Type | Description |
|  --- | --- | --- |
|  arb | <code>Arbitrary&lt;T&gt;</code> | Arbitrary used to generate the values inside the array |
|  minLength | <code>number</code> | Lower bound of the generated array size |
|  maxLength | <code>number</code> | Upper bound of the generated array size |

<b>Returns:</b>

`Arbitrary<T[]>`


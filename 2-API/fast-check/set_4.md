[Home](/) &gt; [fast-check](../fast-check.md) &gt; [set](set_4.md)

## set() function

For arrays of unique values coming from `arb` - unicity defined by `compare`

<b>Signature:</b>

```typescript
declare function set<T>(arb: Arbitrary<T>, compare: (a: T, b: T) => boolean): Arbitrary<T[]>;
```

#### Parameters

|  Parameter | Type | Description |
|  --- | --- | --- |
|  arb | <code>Arbitrary&lt;T&gt;</code> | Arbitrary used to generate the values inside the array |
|  compare | <code>(a: T, b: T) =&gt; boolean</code> | Return true when the two values are equals |

<b>Returns:</b>

`Arbitrary<T[]>`


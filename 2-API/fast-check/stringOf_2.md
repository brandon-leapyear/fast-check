[Home](/) &gt; [fast-check](../fast-check.md) &gt; [stringOf](stringOf_2.md)

## stringOf() function

For strings using the characters produced by `charArb`

<b>Signature:</b>

```typescript
declare function stringOf(charArb: Arbitrary<string>, maxLength: number): Arbitrary<string>;
```

#### Parameters

|  Parameter | Type | Description |
|  --- | --- | --- |
|  charArb | <code>Arbitrary&lt;string&gt;</code> |  |
|  maxLength | <code>number</code> | Upper bound of the generated string length |

<b>Returns:</b>

`Arbitrary<string>`


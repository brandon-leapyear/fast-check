[Home](/) &gt; [fast-check](../fast-check.md) &gt; [bigIntN](bigIntN_1.md)

## bigIntN() function

For signed bigint of n bits

Generated values will be between -2^(n-1) (included) and 2^(n-1) (excluded)

<b>Signature:</b>

```typescript
declare function bigIntN(n: number): ArbitraryWithShrink<bigint>;
```

#### Parameters

|  Parameter | Type | Description |
|  --- | --- | --- |
|  n | <code>number</code> | Maximal number of bits of the generated bigint |

<b>Returns:</b>

`ArbitraryWithShrink<bigint>`


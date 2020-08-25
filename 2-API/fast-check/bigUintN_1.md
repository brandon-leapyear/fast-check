[Home](/) &gt; [fast-check](../fast-check.md) &gt; [bigUintN](bigUintN_1.md)

## bigUintN() function

For unsigned bigint of n bits

Generated values will be between 0 (included) and 2^n (excluded)

<b>Signature:</b>

```typescript
declare function bigUintN(n: number): ArbitraryWithShrink<bigint>;
```

#### Parameters

|  Parameter | Type | Description |
|  --- | --- | --- |
|  n | <code>number</code> | Maximal number of bits of the generated bigint |

<b>Returns:</b>

`ArbitraryWithShrink<bigint>`


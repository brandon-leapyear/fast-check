[Home](/) &gt; [fast-check](../fast-check.md) &gt; [bigInt](bigInt_2.md)

## bigInt() function

For bigint between min (included) and max (included)

<b>Signature:</b>

```typescript
declare function bigInt(min: bigint, max: bigint): ArbitraryWithShrink<bigint>;
```

#### Parameters

|  Parameter | Type | Description |
|  --- | --- | --- |
|  min | <code>bigint</code> | Lower bound for the generated integers (eg.: 0n, BigInt(Number.MIN\_SAFE\_INTEGER)) |
|  max | <code>bigint</code> | Upper bound for the generated integers (eg.: 2147483647n, BigInt(Number.MAX\_SAFE\_INTEGER)) |

<b>Returns:</b>

`ArbitraryWithShrink<bigint>`


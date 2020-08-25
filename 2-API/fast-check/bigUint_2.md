[Home](/) &gt; [fast-check](../fast-check.md) &gt; [bigUint](bigUint_2.md)

## bigUint() function

For positive bigint between 0 (included) and max (included)

<b>Signature:</b>

```typescript
declare function bigUint(max: bigint): ArbitraryWithShrink<bigint>;
```

#### Parameters

|  Parameter | Type | Description |
|  --- | --- | --- |
|  max | <code>bigint</code> | Upper bound for the generated bigint |

<b>Returns:</b>

`ArbitraryWithShrink<bigint>`


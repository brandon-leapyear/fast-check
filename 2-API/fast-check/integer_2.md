[Home](/) &gt; [fast-check](../fast-check.md) &gt; [integer](integer_2.md)

## integer() function

For integers between -2147483648 (included) and max (included)

<b>Signature:</b>

```typescript
declare function integer(max: number): ArbitraryWithShrink<number>;
```

#### Parameters

|  Parameter | Type | Description |
|  --- | --- | --- |
|  max | <code>number</code> | Upper bound for the generated integers (eg.: 2147483647, Number.MAX\_SAFE\_INTEGER) |

<b>Returns:</b>

`ArbitraryWithShrink<number>`


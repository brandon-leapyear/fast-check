[Home](/) &gt; [fast-check](../fast-check.md) &gt; [integer](integer_3.md)

## integer() function

For integers between min (included) and max (included)

<b>Signature:</b>

```typescript
declare function integer(min: number, max: number): ArbitraryWithShrink<number>;
```

#### Parameters

|  Parameter | Type | Description |
|  --- | --- | --- |
|  min | <code>number</code> | Lower bound for the generated integers (eg.: 0, Number.MIN\_SAFE\_INTEGER) |
|  max | <code>number</code> | Upper bound for the generated integers (eg.: 2147483647, Number.MAX\_SAFE\_INTEGER) |

<b>Returns:</b>

`ArbitraryWithShrink<number>`


[Home](/) &gt; [fast-check](../fast-check.md) &gt; [float](float_2.md)

## float() function

For floating point numbers between 0.0 (included) and max (excluded) - accuracy of `max / 2**24`

<b>Signature:</b>

```typescript
declare function float(max: number): Arbitrary<number>;
```

#### Parameters

|  Parameter | Type | Description |
|  --- | --- | --- |
|  max | <code>number</code> | Upper bound of the generated floating point |

<b>Returns:</b>

`Arbitrary<number>`


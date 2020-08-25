[Home](/) &gt; [fast-check](../fast-check.md) &gt; [double](double_3.md)

## double() function

For floating point numbers between min (included) and max (excluded) - accuracy of `(max - min) / 2**53`

<b>Signature:</b>

```typescript
declare function double(min: number, max: number): Arbitrary<number>;
```

#### Parameters

|  Parameter | Type | Description |
|  --- | --- | --- |
|  min | <code>number</code> | Lower bound of the generated floating point |
|  max | <code>number</code> | Upper bound of the generated floating point |

<b>Returns:</b>

`Arbitrary<number>`


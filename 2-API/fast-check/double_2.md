[Home](/) &gt; [fast-check](../fast-check.md) &gt; [double](double_2.md)

## double() function

For floating point numbers between 0.0 (included) and max (excluded) - accuracy of `max / 2**53`

<b>Signature:</b>

```typescript
declare function double(max: number): Arbitrary<number>;
```

#### Parameters

|  Parameter | Type | Description |
|  --- | --- | --- |
|  max | <code>number</code> | Upper bound of the generated floating point |

<b>Returns:</b>

`Arbitrary<number>`


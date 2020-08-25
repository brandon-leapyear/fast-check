[Home](/) &gt; [fast-check](../fast-check.md) &gt; [shuffledSubarray](shuffledSubarray_2.md)

## shuffledSubarray() function

For subarrays of `originalArray`

<b>Signature:</b>

```typescript
declare function shuffledSubarray<T>(originalArray: T[], minLength: number, maxLength: number): Arbitrary<T[]>;
```

#### Parameters

|  Parameter | Type | Description |
|  --- | --- | --- |
|  originalArray | <code>T[]</code> | Original array |
|  minLength | <code>number</code> | Lower bound of the generated array size |
|  maxLength | <code>number</code> | Upper bound of the generated array size |

<b>Returns:</b>

`Arbitrary<T[]>`


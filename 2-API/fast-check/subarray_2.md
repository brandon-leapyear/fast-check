[Home](/) &gt; [fast-check](../fast-check.md) &gt; [subarray](subarray_2.md)

## subarray() function

For subarrays of `originalArray` (keeps ordering)

<b>Signature:</b>

```typescript
declare function subarray<T>(originalArray: T[], minLength: number, maxLength: number): Arbitrary<T[]>;
```

#### Parameters

|  Parameter | Type | Description |
|  --- | --- | --- |
|  originalArray | <code>T[]</code> | Original array |
|  minLength | <code>number</code> | Lower bound of the generated array size |
|  maxLength | <code>number</code> | Upper bound of the generated array size |

<b>Returns:</b>

`Arbitrary<T[]>`


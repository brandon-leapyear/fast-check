[Home](/) &gt; [fast-check](../fast-check.md) &gt; [asciiString](asciiString_3.md)

## asciiString() function

For strings of [ascii()](ascii_1.md)

<b>Signature:</b>

```typescript
declare function asciiString(minLength: number, maxLength: number): Arbitrary<string>;
```

#### Parameters

|  Parameter | Type | Description |
|  --- | --- | --- |
|  minLength | <code>number</code> | Lower bound of the generated string length |
|  maxLength | <code>number</code> | Upper bound of the generated string length |

<b>Returns:</b>

`Arbitrary<string>`


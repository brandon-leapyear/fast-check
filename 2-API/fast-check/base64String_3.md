[Home](/) &gt; [fast-check](../fast-check.md) &gt; [base64String](base64String_3.md)

## base64String() function

For base64 strings

A base64 string will always have a length multiple of 4 (padded with =)

<b>Signature:</b>

```typescript
declare function base64String(minLength: number, maxLength: number): Arbitrary<string>;
```

#### Parameters

|  Parameter | Type | Description |
|  --- | --- | --- |
|  minLength | <code>number</code> | Lower bound of the generated string length |
|  maxLength | <code>number</code> | Upper bound of the generated string length |

<b>Returns:</b>

`Arbitrary<string>`


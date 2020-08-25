[Home](/) &gt; [fast-check](../fast-check.md) &gt; [string](string_3.md)

## string() function

For strings of [char()](char_1.md)

<b>Signature:</b>

```typescript
declare function string(minLength: number, maxLength: number): Arbitrary<string>;
```

#### Parameters

|  Parameter | Type | Description |
|  --- | --- | --- |
|  minLength | <code>number</code> | Lower bound of the generated string length |
|  maxLength | <code>number</code> | Upper bound of the generated string length |

<b>Returns:</b>

`Arbitrary<string>`


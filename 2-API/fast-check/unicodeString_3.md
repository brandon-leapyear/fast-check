[Home](/) &gt; [fast-check](../fast-check.md) &gt; [unicodeString](unicodeString_3.md)

## unicodeString() function

For strings of [unicode()](unicode_1.md)

<b>Signature:</b>

```typescript
declare function unicodeString(minLength: number, maxLength: number): Arbitrary<string>;
```

#### Parameters

|  Parameter | Type | Description |
|  --- | --- | --- |
|  minLength | <code>number</code> | Lower bound of the generated string length |
|  maxLength | <code>number</code> | Upper bound of the generated string length |

<b>Returns:</b>

`Arbitrary<string>`


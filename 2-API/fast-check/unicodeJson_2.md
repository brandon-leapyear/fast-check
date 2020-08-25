[Home](/) &gt; [fast-check](../fast-check.md) &gt; [unicodeJson](unicodeJson_2.md)

## unicodeJson() function

For any JSON strings with unicode support and a maximal depth

Keys and string values rely on [unicode()](unicode_1.md)

<b>Signature:</b>

```typescript
declare function unicodeJson(maxDepth: number): Arbitrary<string>;
```

#### Parameters

|  Parameter | Type | Description |
|  --- | --- | --- |
|  maxDepth | <code>number</code> | Maximal depth of the generated objects |

<b>Returns:</b>

`Arbitrary<string>`


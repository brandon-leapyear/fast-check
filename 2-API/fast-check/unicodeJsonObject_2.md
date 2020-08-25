[Home](/) &gt; [fast-check](../fast-check.md) &gt; [unicodeJsonObject](unicodeJsonObject_2.md)

## unicodeJsonObject() function

For any JSON compliant values with unicode support and a maximal depth

Keys and string values rely on [unicode()](unicode_1.md)

<b>Signature:</b>

```typescript
declare function unicodeJsonObject(maxDepth: number): Arbitrary<unknown>;
```

#### Parameters

|  Parameter | Type | Description |
|  --- | --- | --- |
|  maxDepth | <code>number</code> | Maximal depth of the generated values |

<b>Returns:</b>

`Arbitrary<unknown>`


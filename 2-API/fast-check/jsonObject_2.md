[Home](/) &gt; [fast-check](../fast-check.md) &gt; [jsonObject](jsonObject_2.md)

## jsonObject() function

For any JSON compliant values with a maximal depth

Keys and string values rely on [string()](string_1.md)

<b>Signature:</b>

```typescript
declare function jsonObject(maxDepth: number): Arbitrary<unknown>;
```

#### Parameters

|  Parameter | Type | Description |
|  --- | --- | --- |
|  maxDepth | <code>number</code> | Maximal depth of the generated values |

<b>Returns:</b>

`Arbitrary<unknown>`


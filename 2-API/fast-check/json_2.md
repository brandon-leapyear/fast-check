[Home](/) &gt; [fast-check](../fast-check.md) &gt; [json](json_2.md)

## json() function

For any JSON strings with a maximal depth

Keys and string values rely on [string()](string_1.md)

<b>Signature:</b>

```typescript
declare function json(maxDepth: number): Arbitrary<string>;
```

#### Parameters

|  Parameter | Type | Description |
|  --- | --- | --- |
|  maxDepth | <code>number</code> | Maximal depth of the generated objects |

<b>Returns:</b>

`Arbitrary<string>`


[Home](/) &gt; [fast-check](../fast-check.md) &gt; [lorem](lorem_3.md)

## lorem() function

For lorem ipsum string of words or sentences with maximal number of words or sentences

<b>Signature:</b>

```typescript
declare function lorem(maxWordsCount: number, sentencesMode: boolean): Arbitrary<string>;
```

#### Parameters

|  Parameter | Type | Description |
|  --- | --- | --- |
|  maxWordsCount | <code>number</code> | Upper bound of the number of words/sentences allowed |
|  sentencesMode | <code>boolean</code> | If enabled, multiple sentences might be generated |

<b>Returns:</b>

`Arbitrary<string>`


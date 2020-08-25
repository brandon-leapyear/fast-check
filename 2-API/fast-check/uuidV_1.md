[Home](/) &gt; [fast-check](../fast-check.md) &gt; [uuidV](uuidV_1.md)

## uuidV() function

For UUID of a given version (in v1 to v5)

According to [RFC 4122](https://tools.ietf.org/html/rfc4122)

No mixed case, only lower case digits (0-9a-f)

<b>Signature:</b>

```typescript
export declare function uuidV(versionNumber: 1 | 2 | 3 | 4 | 5): Arbitrary<string>;
```

#### Parameters

|  Parameter | Type | Description |
|  --- | --- | --- |
|  versionNumber | <code>1 &#124; 2 &#124; 3 &#124; 4 &#124; 5</code> |  |

<b>Returns:</b>

`Arbitrary<string>`


[Home](/) &gt; [fast-check](../fast-check.md) &gt; [hash](hash_1.md)

## hash() function

CRC-32 based hash function

Used internally by fast-check in [func()](func_1.md)<!-- -->, [compareFunc()](compareFunc_1.md) or even [compareBooleanFunc()](compareBooleanFunc_1.md)<!-- -->.

<b>Signature:</b>

```typescript
export declare function hash(repr: string): number;
```

#### Parameters

|  Parameter | Type | Description |
|  --- | --- | --- |
|  repr | <code>string</code> | String value to be hashed |

<b>Returns:</b>

`number`


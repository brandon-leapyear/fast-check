[Home](/) &gt; [fast-check](../fast-check.md) &gt; [uuid](uuid_1.md)

## uuid() function

For UUID from v1 to v5

According to [RFC 4122](https://tools.ietf.org/html/rfc4122)

No mixed case, only lower case digits (0-9a-f)

<b>Signature:</b>

```typescript
export declare function uuid(): Arbitrary<string>;
```
<b>Returns:</b>

`Arbitrary<string>`


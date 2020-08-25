[Home](/) &gt; [fast-check](../fast-check.md) &gt; [webSegment](webSegment_1.md)

## webSegment() function

For internal segment of an URI (web included)

According to [RFC 3986](https://www.ietf.org/rfc/rfc3986.txt)

eg.: In the url `https://github.com/dubzzz/fast-check/`<!-- -->, `dubzzz` and `fast-check` are segments

<b>Signature:</b>

```typescript
export declare function webSegment(): Arbitrary<string>;
```
<b>Returns:</b>

`Arbitrary<string>`


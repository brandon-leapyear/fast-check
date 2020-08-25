[Home](/) &gt; [fast-check](../fast-check.md) &gt; [webFragments](webFragments_1.md)

## webFragments() function

For fragments of an URI (web included)

According to [RFC 3986](https://www.ietf.org/rfc/rfc3986.txt)

eg.: In the url `https://domain/plop?page=1#hello=1&world=2`<!-- -->, `?hello=1&world=2` are query parameters

<b>Signature:</b>

```typescript
export declare function webFragments(): Arbitrary<string>;
```
<b>Returns:</b>

`Arbitrary<string>`


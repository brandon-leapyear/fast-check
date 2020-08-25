[Home](/) &gt; [fast-check](../fast-check.md) &gt; [webQueryParameters](webQueryParameters_1.md)

## webQueryParameters() function

For query parameters of an URI (web included)

According to [RFC 3986](https://www.ietf.org/rfc/rfc3986.txt)

eg.: In the url `https://domain/plop/?hello=1&world=2`<!-- -->, `?hello=1&world=2` are query parameters

<b>Signature:</b>

```typescript
export declare function webQueryParameters(): Arbitrary<string>;
```
<b>Returns:</b>

`Arbitrary<string>`


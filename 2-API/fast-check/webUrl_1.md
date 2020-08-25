[Home](/) &gt; [fast-check](../fast-check.md) &gt; [webUrl](webUrl_1.md)

## webUrl() function

For web url

According to [RFC 3986](https://www.ietf.org/rfc/rfc3986.txt) and [WHATWG URL Standard](https://url.spec.whatwg.org/)

<b>Signature:</b>

```typescript
export declare function webUrl(constraints?: {
    validSchemes?: string[];
    authoritySettings?: WebAuthorityConstraints;
    withQueryParameters?: boolean;
    withFragments?: boolean;
}): Arbitrary<string>;
```

#### Parameters

|  Parameter | Type | Description |
|  --- | --- | --- |
|  constraints | <code>{`<p/>`    validSchemes?: string[];`<p/>`    authoritySettings?: WebAuthorityConstraints;`<p/>`    withQueryParameters?: boolean;`<p/>`    withFragments?: boolean;`<p/>`}</code> | Constraints to apply when building instances |

<b>Returns:</b>

`Arbitrary<string>`


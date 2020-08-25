[Home](/) &gt; [fast-check](../fast-check.md) &gt; [webAuthority](webAuthority_1.md)

## webAuthority() function

For web authority

According to [RFC 3986](https://www.ietf.org/rfc/rfc3986.txt) - `authority = [ userinfo "@" ] host [ ":" port ]`

<b>Signature:</b>

```typescript
export declare function webAuthority(constraints?: WebAuthorityConstraints): Arbitrary<string>;
```

#### Parameters

|  Parameter | Type | Description |
|  --- | --- | --- |
|  constraints | <code>WebAuthorityConstraints</code> | Constraints to apply when building instances |

<b>Returns:</b>

`Arbitrary<string>`


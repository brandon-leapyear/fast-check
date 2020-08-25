[Home](/) &gt; [fast-check](../fast-check.md) &gt; [WebAuthorityConstraints](WebAuthorityConstraints.md)

## WebAuthorityConstraints interface

Constraints to be applied on [webAuthority()](webAuthority_1.md)

<b>Signature:</b>

```typescript
export interface WebAuthorityConstraints 
```

## Properties

|  Property | Type | Description |
|  --- | --- | --- |
|  [withIPv4](WebAuthorityConstraints.md#withipv4) | <code>boolean</code> | Enable IPv4 in host |
|  [withIPv4Extended](WebAuthorityConstraints.md#withipv4extended) | <code>boolean</code> | Enable extended IPv4 format |
|  [withIPv6](WebAuthorityConstraints.md#withipv6) | <code>boolean</code> | Enable IPv6 in host |
|  [withPort](WebAuthorityConstraints.md#withport) | <code>boolean</code> | Enable port suffix |
|  [withUserInfo](WebAuthorityConstraints.md#withuserinfo) | <code>boolean</code> | Enable user information prefix |

### withIPv4

Enable IPv4 in host

<b>Signature:</b>

```typescript
withIPv4?: boolean;
```

### withIPv4Extended

Enable extended IPv4 format

<b>Signature:</b>

```typescript
withIPv4Extended?: boolean;
```

### withIPv6

Enable IPv6 in host

<b>Signature:</b>

```typescript
withIPv6?: boolean;
```

### withPort

Enable port suffix

<b>Signature:</b>

```typescript
withPort?: boolean;
```

### withUserInfo

Enable user information prefix

<b>Signature:</b>

```typescript
withUserInfo?: boolean;
```

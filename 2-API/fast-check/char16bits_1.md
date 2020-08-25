[Home](/) &gt; [fast-check](../fast-check.md) &gt; [char16bits](char16bits_1.md)

## char16bits() function

For single characters - all values in 0x0000-0xffff can be generated

WARNING:

Some generated characters might appear invalid regarding UCS-2 and UTF-16 encoding. Indeed values within 0xd800 and 0xdfff constitute surrogate pair characters and are illegal without their paired character.

<b>Signature:</b>

```typescript
declare function char16bits(): Arbitrary<string>;
```
<b>Returns:</b>

`Arbitrary<string>`


[Home](/) &gt; [fast-check](../fast-check.md) &gt; [unicode](unicode_1.md)

## unicode() function

For single unicode characters defined in the BMP plan - char code between 0x0000 (included) and 0xffff (included) and without the range 0xd800 to 0xdfff (surrogate pair characters)

<b>Signature:</b>

```typescript
declare function unicode(): Arbitrary<string>;
```
<b>Returns:</b>

`Arbitrary<string>`


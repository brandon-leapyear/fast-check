[Home](/) &gt; [fast-check](../fast-check.md) &gt; [compareBooleanFunc](compareBooleanFunc_1.md)

## compareBooleanFunc() function

For comparison boolean functions

A comparison boolean function returns: - `true` whenever `a < b` - `false` otherwise (ie. `a = b` or `a > b`<!-- -->)

<b>Signature:</b>

```typescript
export declare function compareBooleanFunc<T>(): Arbitrary<(a: T, b: T) => boolean>;
```
<b>Returns:</b>

`Arbitrary<(a: T, b: T) => boolean>`


[Home](/) &gt; [fast-check](../fast-check.md) &gt; [OneOfValue](OneOfValue.md)

## OneOfValue type

Infer the type of the Arbitrary produced by [oneof()](oneof_1.md) given the type of the source arbitraries

<b>Signature:</b>

```typescript
export declare type OneOfValue<Ts extends Arbitrary<unknown>[]> = {
    [K in keyof Ts]: Ts[K] extends Arbitrary<infer U> ? U : never;
}[number];
```

[Home](/) &gt; [fast-check](../fast-check.md) &gt; [FrequencyValue](FrequencyValue.md)

## FrequencyValue type

Infer the type of the Arbitrary produced by [frequency()](frequency_1.md) given the type of the source arbitraries

<b>Signature:</b>

```typescript
export declare type FrequencyValue<Ts extends WeightedArbitrary<unknown>[]> = {
    [K in keyof Ts]: Ts[K] extends WeightedArbitrary<infer U> ? U : never;
}[number];
```

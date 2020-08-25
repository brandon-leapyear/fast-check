[Home](/) &gt; [fast-check](../fast-check.md) &gt; [DedupValue](DedupValue.md)

## DedupValue type

Type of the value produced by [dedup()](dedup_1.md)

<b>Signature:</b>

```typescript
export declare type DedupValue<T, N extends number> = N extends 0 ? [] : N extends 1 ? [T] : N extends 2 ? [T, T] : N extends 3 ? [T, T, T] : N extends 4 ? [T, T, T, T] : T[];
```

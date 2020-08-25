[Home](/) &gt; [fast-check](../fast-check.md) &gt; [RunDetails](RunDetails.md)

## RunDetails type

Post-run details produced by [check()](check_1.md)

A failing property can easily detected by checking the `failed` flag of this structure

<b>Signature:</b>

```typescript
export declare type RunDetails<Ts> = RunDetailsFailureProperty<Ts> | RunDetailsFailureTooManySkips<Ts> | RunDetailsFailureInterrupted<Ts> | RunDetailsSuccess<Ts>;
```

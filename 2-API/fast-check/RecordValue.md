[Home](/) &gt; [fast-check](../fast-check.md) &gt; [RecordValue](RecordValue.md)

## RecordValue type

Infer the type of the Arbitrary produced by record given the type of the source arbitrary and constraints to be applied

<b>Signature:</b>

```typescript
export declare type RecordValue<T, Constraints = undefined> = Constraints extends {
    withDeletedKeys: true;
} ? Partial<T> : T;
```

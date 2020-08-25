[Home](/) &gt; [fast-check](../fast-check.md) &gt; [ModelRunAsyncSetup](ModelRunAsyncSetup.md)

## ModelRunAsyncSetup type

Asynchronous definition of model and real

<b>Signature:</b>

```typescript
export declare type ModelRunAsyncSetup<Model, Real> = () => Promise<{
    model: Model;
    real: Real;
}>;
```

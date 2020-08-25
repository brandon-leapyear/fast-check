[Home](/) &gt; [fast-check](../fast-check.md) &gt; [AsyncPropertyHookFunction](AsyncPropertyHookFunction.md)

## AsyncPropertyHookFunction type

Type of legal hook function that can be used to call `beforeEach` or `afterEach` on a [IAsyncPropertyWithHooks](IAsyncPropertyWithHooks.md)

<b>Signature:</b>

```typescript
export declare type AsyncPropertyHookFunction = (() => Promise<unknown>) | (() => void);
```

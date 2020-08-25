[Home](/) &gt; [fast-check](../fast-check.md) &gt; [AsyncCommand](AsyncCommand.md)

## AsyncCommand interface

Interface that should be implemented in order to define an asynchronous command

<b>Signature:</b>

```typescript
export interface AsyncCommand<Model extends object, Real, CheckAsync extends boolean = false> extends ICommand<Model, Real, Promise<void>, CheckAsync> 
```

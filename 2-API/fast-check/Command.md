[Home](/) &gt; [fast-check](../fast-check.md) &gt; [Command](Command.md)

## Command interface

Interface that should be implemented in order to define a synchronous command

<b>Signature:</b>

```typescript
export interface Command<Model extends object, Real> extends ICommand<Model, Real, void> 
```

[Home](/) &gt; [fast-check](../fast-check.md) &gt; [GlobalParameters](GlobalParameters.md)

## GlobalParameters type

Type describing the global overrides

<b>Signature:</b>

```typescript
export declare type GlobalParameters = Pick<Parameters<unknown>, Exclude<keyof Parameters<unknown>, 'path' | 'examples'>>;
```

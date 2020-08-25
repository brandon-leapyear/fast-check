[Home](/) &gt; [fast-check](../fast-check.md) &gt; [cloneMethod](cloneMethod.md)

## cloneMethod variable

Generated instances having a method \[cloneMethod\] will be automatically cloned whenever necessary

This is pretty useful for statefull generated values. For instance, whenever you use a Stream you directly impact it. Implementing \[cloneMethod\] on the generated Stream would force the framework to clone it whenever it has to re-use it (mainly required for chrinking process)

<b>Signature:</b>

```typescript
cloneMethod: unique symbol
```

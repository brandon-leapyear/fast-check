[Home](/) &gt; [fast-check](../fast-check.md) &gt; [object](object_1.md)

## object() function

For any objects

You may use [sample()](sample_1.md) to preview the values that will be generated

<b>Signature:</b>

```typescript
declare function object(): Arbitrary<Record<string, unknown>>;
```
<b>Returns:</b>

`Arbitrary<Record<string, unknown>>`

#### Example


```javascript
{}, {k: [{}, 1, 2]}

```


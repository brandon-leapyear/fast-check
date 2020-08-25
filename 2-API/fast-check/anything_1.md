[Home](/) &gt; [fast-check](../fast-check.md) &gt; [anything](anything_1.md)

## anything() function

For any type of values

You may use [sample()](sample_1.md) to preview the values that will be generated

<b>Signature:</b>

```typescript
declare function anything(): Arbitrary<unknown>;
```
<b>Returns:</b>

`Arbitrary<unknown>`

#### Example


```javascript
null, undefined, 42, 6.5, 'Hello', {}, {k: [{}, 1, 2]}

```


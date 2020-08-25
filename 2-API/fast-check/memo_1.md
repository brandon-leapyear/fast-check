[Home](/) &gt; [fast-check](../fast-check.md) &gt; [memo](memo_1.md)

## memo() function

For mutually recursive types

<b>Signature:</b>

```typescript
export declare function memo<T>(builder: (maxDepth: number) => Arbitrary<T>): Memo<T>;
```

#### Parameters

|  Parameter | Type | Description |
|  --- | --- | --- |
|  builder | <code>(maxDepth: number) =&gt; Arbitrary&lt;T&gt;</code> | Arbitrary builder taken the maximal depth allowed as input (parameter <code>n</code>) |

<b>Returns:</b>

`Memo<T>`

#### Example


```typescript
// tree is 1 / 3 of node, 2 / 3 of leaf
const tree: fc.Memo<Tree> = fc.memo(n => fc.oneof(node(n), leaf(), leaf()));
const node: fc.Memo<Tree> = fc.memo(n => {
  if (n <= 1) return fc.record({ left: leaf(), right: leaf() });
  return fc.record({ left: tree(), right: tree() }); // tree() is equivalent to tree(n-1)
});
const leaf = fc.nat;

```


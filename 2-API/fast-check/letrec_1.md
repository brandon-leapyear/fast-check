[Home](/) &gt; [fast-check](../fast-check.md) &gt; [letrec](letrec_1.md)

## letrec() function

For mutually recursive types

<b>Signature:</b>

```typescript
export declare function letrec<T>(builder: (tie: (key: string) => Arbitrary<unknown>) => {
    [K in keyof T]: Arbitrary<T[K]>;
}): {
    [K in keyof T]: Arbitrary<T[K]>;
};
```

#### Parameters

|  Parameter | Type | Description |
|  --- | --- | --- |
|  builder | <code>(tie: (key: string) =&gt; Arbitrary&lt;unknown&gt;) =&gt; {`<p/>`    [K in keyof T]: Arbitrary&lt;T[K]&gt;;`<p/>`}</code> | Arbitraries builder based on themselves (through <code>tie</code>) |

<b>Returns:</b>

`{
    [K in keyof T]: Arbitrary<T[K]>;
}`

#### Example


```typescript
const { tree } = fc.letrec(tie => ({
  tree: fc.oneof(tie('node'), tie('leaf'), tie('leaf')),
  node: fc.tuple(tie('tree'), tie('tree')),
  leaf: fc.nat()
})); // tree is 1 / 3 of node, 2 / 3 of leaf

```


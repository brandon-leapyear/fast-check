[Home](/) &gt; [fast-check](../fast-check.md) &gt; [record](record_2.md)

## record() function

For records following the `recordModel` schema

<b>Signature:</b>

```typescript
declare function record<T, Constraints extends RecordConstraints>(recordModel: {
    [K in keyof T]: Arbitrary<T[K]>;
}, constraints: Constraints): Arbitrary<RecordValue<{
    [K in keyof T]: T[K];
}, Constraints>>;
```

#### Parameters

|  Parameter | Type | Description |
|  --- | --- | --- |
|  recordModel | <code>{`<p/>`    [K in keyof T]: Arbitrary&lt;T[K]&gt;;`<p/>`}</code> | Schema of the record |
|  constraints | <code>Constraints</code> | Contraints on the generated record |

<b>Returns:</b>

`Arbitrary<RecordValue<{
    [K in keyof T]: T[K];
}, Constraints>>`

#### Example


```typescript
record({ x: someArbitraryInt, y: someArbitraryInt }, {withDeletedKeys: true}): Arbitrary<{x?:number,y?:number}>
// merge two integer arbitraries to produce a {x, y}, {x}, {y} or {} record

```


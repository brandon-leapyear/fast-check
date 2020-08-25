[Home](/) &gt; [fast-check](../fast-check.md) &gt; [stream](stream_1.md)

## stream() function

Create a Stream based on `g`

<b>Signature:</b>

```typescript
export declare function stream<T>(g: IterableIterator<T>): Stream<T>;
```

#### Parameters

|  Parameter | Type | Description |
|  --- | --- | --- |
|  g | <code>IterableIterator&lt;T&gt;</code> | Underlying data of the Stream |

<b>Returns:</b>

`Stream<T>`


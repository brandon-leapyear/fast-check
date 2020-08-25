[Home](/) &gt; [fast-check](../fast-check.md) &gt; [mapToConstant](mapToConstant_1.md)

## mapToConstant() function

Generate non-contiguous ranges of values by mapping integer values to constant

<b>Signature:</b>

```typescript
export declare function mapToConstant<T>(...entries: {
    num: number;
    build: (idInGroup: number) => T;
}[]): Arbitrary<T>;
```

#### Parameters

|  Parameter | Type | Description |
|  --- | --- | --- |
|  entries | <code>{`<p/>`    num: number;`<p/>`    build: (idInGroup: number) =&gt; T;`<p/>`}[]</code> |  |

<b>Returns:</b>

`Arbitrary<T>`

#### Example


```
// generate alphanumeric values (a-z0-9)
mapToConstant(
  { num: 26, build: v => String.fromCharCode(v + 0x61) },
  { num: 10, build: v => String.fromCharCode(v + 0x30) },
)

```


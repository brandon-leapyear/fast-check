[Home](/) &gt; [fast-check](../fast-check.md) &gt; [dictionary](dictionary_1.md)

## dictionary() function

For dictionaries with keys produced by `keyArb` and values from `valueArb`

<b>Signature:</b>

```typescript
declare function dictionary<T>(keyArb: Arbitrary<string>, valueArb: Arbitrary<T>): Arbitrary<Record<string, T>>;
```

#### Parameters

|  Parameter | Type | Description |
|  --- | --- | --- |
|  keyArb | <code>Arbitrary&lt;string&gt;</code> | Arbitrary used to generate the keys of the object |
|  valueArb | <code>Arbitrary&lt;T&gt;</code> | Arbitrary used to generate the values of the object |

<b>Returns:</b>

`Arbitrary<Record<string, T>>`


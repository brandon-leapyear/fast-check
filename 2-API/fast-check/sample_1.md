[Home](/) &gt; [fast-check](../fast-check.md) &gt; [sample](sample_1.md)

## sample() function

Generate an array containing all the values that would have been generated during [assert()](assert_1.md) or [check()](check_1.md)

<b>Signature:</b>

```typescript
declare function sample<Ts>(generator: IRawProperty<Ts> | Arbitrary<Ts>, params?: Parameters<Ts> | number): Ts[];
```

#### Parameters

|  Parameter | Type | Description |
|  --- | --- | --- |
|  generator | <code>IRawProperty&lt;Ts&gt; &#124; Arbitrary&lt;Ts&gt;</code> | [IProperty](IProperty.md) or [Arbitrary](Arbitrary.md) to extract the values from |
|  params | <code>Parameters&lt;Ts&gt; &#124; number</code> | Integer representing the number of values to generate or <code>Parameters</code> as in [assert()](assert_1.md) |

<b>Returns:</b>

`Ts[]`

#### Example


```typescript
fc.sample(fc.nat(), 10); // extract 10 values from fc.nat() Arbitrary
fc.sample(fc.nat(), {seed: 42}); // extract values from fc.nat() as if we were running fc.assert with seed=42

```


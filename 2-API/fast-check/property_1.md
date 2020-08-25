[Home](/) &gt; [fast-check](../fast-check.md) &gt; [property](property_1.md)

## property() function

Instantiate a new [IProperty](IProperty.md)

<b>Signature:</b>

```typescript
declare function property<T0>(arb0: Arbitrary<T0>, predicate: (t0: T0) => (boolean | void)): IPropertyWithHooks<[T0]>;
```

#### Parameters

|  Parameter | Type | Description |
|  --- | --- | --- |
|  arb0 | <code>Arbitrary&lt;T0&gt;</code> |  |
|  predicate | <code>(t0: T0) =&gt; (boolean &#124; void)</code> | Assess the success of the property. Would be considered falsy if its throws or if its output evaluates to false |

<b>Returns:</b>

`IPropertyWithHooks<[T0]>`


[Home](/) &gt; [fast-check](../fast-check.md) &gt; [property](property_11.md)

## property() function

Instantiate a new [IProperty](IProperty.md)

<b>Signature:</b>

```typescript
declare function property<T0, T1, T2, T3, T4, T5, T6, T7, T8, T9, T10>(arb0: Arbitrary<T0>, arb1: Arbitrary<T1>, arb2: Arbitrary<T2>, arb3: Arbitrary<T3>, arb4: Arbitrary<T4>, arb5: Arbitrary<T5>, arb6: Arbitrary<T6>, arb7: Arbitrary<T7>, arb8: Arbitrary<T8>, arb9: Arbitrary<T9>, arb10: Arbitrary<T10>, predicate: (t0: T0, t1: T1, t2: T2, t3: T3, t4: T4, t5: T5, t6: T6, t7: T7, t8: T8, t9: T9, t10: T10) => (boolean | void)): IPropertyWithHooks<[T0, T1, T2, T3, T4, T5, T6, T7, T8, T9, T10]>;
```

#### Parameters

|  Parameter | Type | Description |
|  --- | --- | --- |
|  arb0 | <code>Arbitrary&lt;T0&gt;</code> |  |
|  arb1 | <code>Arbitrary&lt;T1&gt;</code> |  |
|  arb2 | <code>Arbitrary&lt;T2&gt;</code> |  |
|  arb3 | <code>Arbitrary&lt;T3&gt;</code> |  |
|  arb4 | <code>Arbitrary&lt;T4&gt;</code> |  |
|  arb5 | <code>Arbitrary&lt;T5&gt;</code> |  |
|  arb6 | <code>Arbitrary&lt;T6&gt;</code> |  |
|  arb7 | <code>Arbitrary&lt;T7&gt;</code> |  |
|  arb8 | <code>Arbitrary&lt;T8&gt;</code> |  |
|  arb9 | <code>Arbitrary&lt;T9&gt;</code> |  |
|  arb10 | <code>Arbitrary&lt;T10&gt;</code> |  |
|  predicate | <code>(t0: T0, t1: T1, t2: T2, t3: T3, t4: T4, t5: T5, t6: T6, t7: T7, t8: T8, t9: T9, t10: T10) =&gt; (boolean &#124; void)</code> | Assess the success of the property. Would be considered falsy if its throws or if its output evaluates to false |

<b>Returns:</b>

`IPropertyWithHooks<[T0, T1, T2, T3, T4, T5, T6, T7, T8, T9, T10]>`


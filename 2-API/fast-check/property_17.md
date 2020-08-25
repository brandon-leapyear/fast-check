[Home](/) &gt; [fast-check](../fast-check.md) &gt; [property](property_17.md)

## property() function

Instantiate a new [IProperty](IProperty.md)

<b>Signature:</b>

```typescript
declare function property<T0, T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16>(arb0: Arbitrary<T0>, arb1: Arbitrary<T1>, arb2: Arbitrary<T2>, arb3: Arbitrary<T3>, arb4: Arbitrary<T4>, arb5: Arbitrary<T5>, arb6: Arbitrary<T6>, arb7: Arbitrary<T7>, arb8: Arbitrary<T8>, arb9: Arbitrary<T9>, arb10: Arbitrary<T10>, arb11: Arbitrary<T11>, arb12: Arbitrary<T12>, arb13: Arbitrary<T13>, arb14: Arbitrary<T14>, arb15: Arbitrary<T15>, arb16: Arbitrary<T16>, predicate: (t0: T0, t1: T1, t2: T2, t3: T3, t4: T4, t5: T5, t6: T6, t7: T7, t8: T8, t9: T9, t10: T10, t11: T11, t12: T12, t13: T13, t14: T14, t15: T15, t16: T16) => (boolean | void)): IPropertyWithHooks<[T0, T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16]>;
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
|  arb11 | <code>Arbitrary&lt;T11&gt;</code> |  |
|  arb12 | <code>Arbitrary&lt;T12&gt;</code> |  |
|  arb13 | <code>Arbitrary&lt;T13&gt;</code> |  |
|  arb14 | <code>Arbitrary&lt;T14&gt;</code> |  |
|  arb15 | <code>Arbitrary&lt;T15&gt;</code> |  |
|  arb16 | <code>Arbitrary&lt;T16&gt;</code> |  |
|  predicate | <code>(t0: T0, t1: T1, t2: T2, t3: T3, t4: T4, t5: T5, t6: T6, t7: T7, t8: T8, t9: T9, t10: T10, t11: T11, t12: T12, t13: T13, t14: T14, t15: T15, t16: T16) =&gt; (boolean &#124; void)</code> | Assess the success of the property. Would be considered falsy if its throws or if its output evaluates to false |

<b>Returns:</b>

`IPropertyWithHooks<[T0, T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16]>`


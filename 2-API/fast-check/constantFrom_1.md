[Home](/) &gt; [fast-check](../fast-check.md) &gt; [constantFrom](constantFrom_1.md)

## constantFrom() function

For one `...values` values - all equiprobable

\*\*WARNING\*\*: It expects at least one value, otherwise it should throw

<b>Signature:</b>

```typescript
declare function constantFrom<TArgs extends any[] | [any]>(...values: TArgs): Arbitrary<TArgs[number]>;
```

#### Parameters

|  Parameter | Type | Description |
|  --- | --- | --- |
|  values | <code>TArgs</code> | Constant values to be produced (all values shrink to the first one) |

<b>Returns:</b>

`Arbitrary<TArgs[number]>`


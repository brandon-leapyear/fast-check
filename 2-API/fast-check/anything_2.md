[Home](/) &gt; [fast-check](../fast-check.md) &gt; [anything](anything_2.md)

## anything() function

For any type of values following the constraints defined by `settings`

You may use [sample()](sample_1.md) to preview the values that will be generated

<b>Signature:</b>

```typescript
declare function anything(constraints: ObjectConstraints): Arbitrary<unknown>;
```

#### Parameters

|  Parameter | Type | Description |
|  --- | --- | --- |
|  constraints | <code>ObjectConstraints</code> | Constraints to apply when building instances |

<b>Returns:</b>

`Arbitrary<unknown>`

#### Example 1


```javascript
null, undefined, 42, 6.5, 'Hello', {}, {k: [{}, 1, 2]}

```

#### Example 2


```typescript
// Using custom settings
fc.anything({
    key: fc.char(),
    values: [fc.integer(10,20), fc.constant(42)],
    maxDepth: 2
});
// Can build entries such as:
// - 19
// - [{"2":12,"k":15,"A":42}]
// - {"4":[19,13,14,14,42,11,20,11],"6":42,"7":16,"L":10,"'":[20,11],"e":[42,20,42,14,13,17]}
// - [42,42,42]...

```


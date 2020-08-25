[Home](/) &gt; [fast-check](../fast-check.md) &gt; [falsy](falsy_1.md)

## falsy() function

For falsy values: - '' - 0 - NaN - false - null - undefined - 0n (whenever withBigInt: true)

<b>Signature:</b>

```typescript
declare function falsy<TConstraints extends FalsyContraints>(constraints?: TConstraints): Arbitrary<FalsyValue<TConstraints>>;
```

#### Parameters

|  Parameter | Type | Description |
|  --- | --- | --- |
|  constraints | <code>TConstraints</code> | Constraints to apply when building instances |

<b>Returns:</b>

`Arbitrary<FalsyValue<TConstraints>>`


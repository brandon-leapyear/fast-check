[Home](/) &gt; [fast-check](../fast-check.md) &gt; [OptionConstraints](OptionConstraints.md)

## OptionConstraints interface

Constraints to be applied on [option()](option_1.md)

<b>Signature:</b>

```typescript
export interface OptionConstraints<TNil = null> 
```

## Properties

|  Property | Type | Description |
|  --- | --- | --- |
|  [freq](OptionConstraints.md#freq) | <code>number</code> | The probability to build a nil value is of <code>1 / freq</code> |
|  [nil](OptionConstraints.md#nil) | <code>TNil</code> | The nil value (default would be null) |

### freq

The probability to build a nil value is of `1 / freq`

<b>Signature:</b>

```typescript
freq?: number;
```

### nil

The nil value (default would be null)

<b>Signature:</b>

```typescript
nil?: TNil;
```

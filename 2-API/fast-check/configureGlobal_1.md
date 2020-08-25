[Home](/) &gt; [fast-check](../fast-check.md) &gt; [configureGlobal](configureGlobal_1.md)

## configureGlobal() function

Define global parameters that will be used by all the runners

<b>Signature:</b>

```typescript
export declare function configureGlobal(parameters: GlobalParameters): void;
```

#### Parameters

|  Parameter | Type | Description |
|  --- | --- | --- |
|  parameters | <code>GlobalParameters</code> | Global parameters |

<b>Returns:</b>

`void`

#### Example


```typescript
fc.configureGlobal({ numRuns: 10 });
//...
fc.assert(
  fc.property(
    fc.nat(), fc.nat(),
    (a, b) => a + b === b + a
  ), { seed: 42 }
) // equivalent to { numRuns: 10, seed: 42 }

```


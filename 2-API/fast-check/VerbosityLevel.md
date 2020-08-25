[Home](/) &gt; [fast-check](../fast-check.md) &gt; [VerbosityLevel](VerbosityLevel.md)

## VerbosityLevel enum

Verbosity level

<b>Signature:</b>

```typescript
export declare enum VerbosityLevel 
```

## Enumeration Members

|  Member | Value | Description |
|  --- | --- | --- |
|  None | <code>0</code> | Level 0 (default)<!-- -->Minimal reporting: - minimal failing case - error log corresponding to the minimal failing case |
|  Verbose | <code>1</code> | Level 1<!-- -->Failures reporting: - same as <code>VerbosityLevel.None</code> - list all the failures encountered during the shrinking process |
|  VeryVerbose | <code>2</code> | Level 2<!-- -->Execution flow reporting: - same as <code>VerbosityLevel.None</code> - all runs with their associated status displayed as a tree |


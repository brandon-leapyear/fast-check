[Home](/) &gt; [fast-check](../fast-check.md) &gt; [ICommand](ICommand.md)

## ICommand interface

Interface that should be implemented in order to define a command

<b>Signature:</b>

```typescript
export interface ICommand<Model extends object, Real, RunResult, CheckAsync extends boolean = false> 
```

## Methods

|  Method | Description |
|  --- | --- |
|  [check(m)](ICommand.md#check) | Check if the model is in the right state to apply the command<!-- -->WARNING: does not change the model |
|  [run(m, r)](ICommand.md#run) | Receive the non-updated model and the real or system under test. Perform the checks post-execution - Throw in case of invalid state. Update the model accordingly |
|  [toString()](ICommand.md#tostring) | Name of the command |

### check

Check if the model is in the right state to apply the command

WARNING: does not change the model

<b>Signature:</b>

```typescript
check(m: Readonly<Model>): CheckAsync extends false ? boolean : Promise<boolean>;
```

#### Parameters

|  Parameter | Type | Description |
|  --- | --- | --- |
|  m | <code>Readonly&lt;Model&gt;</code> | Model, simplified or schematic representation of real system |

<b>Returns:</b>

`CheckAsync extends false ? boolean : Promise<boolean>`

### run

Receive the non-updated model and the real or system under test. Perform the checks post-execution - Throw in case of invalid state. Update the model accordingly

<b>Signature:</b>

```typescript
run(m: Model, r: Real): RunResult;
```

#### Parameters

|  Parameter | Type | Description |
|  --- | --- | --- |
|  m | <code>Model</code> | Model, simplified or schematic representation of real system |
|  r | <code>Real</code> | Sytem under test |

<b>Returns:</b>

`RunResult`

### toString

Name of the command

<b>Signature:</b>

```typescript
toString(): string;
```
<b>Returns:</b>

`string`


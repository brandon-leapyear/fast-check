[Home](/) &gt; [fast-check](../fast-check.md) &gt; [CommandsContraints](CommandsContraints.md)

## CommandsContraints interface

Parameters for [commands()](commands_1.md)

<b>Signature:</b>

```typescript
export interface CommandsContraints 
```

## Properties

|  Property | Type | Description |
|  --- | --- | --- |
|  [disableReplayLog](CommandsContraints.md#disablereplaylog) | <code>boolean</code> | Do not show replayPath in the output |
|  [maxCommands](CommandsContraints.md#maxcommands) | <code>number</code> | Maximal number of commands to generate per run |
|  [replayPath](CommandsContraints.md#replaypath) | <code>string</code> | Hint for replay purposes only<!-- -->Should be used in conjonction with <code>{ seed, path }</code> of [assert()](assert_1.md) |

### disableReplayLog

Do not show replayPath in the output

<b>Signature:</b>

```typescript
disableReplayLog?: boolean;
```

### maxCommands

Maximal number of commands to generate per run

<b>Signature:</b>

```typescript
maxCommands?: number;
```

### replayPath

Hint for replay purposes only

Should be used in conjonction with `{ seed, path }` of [assert()](assert_1.md)

<b>Signature:</b>

```typescript
replayPath?: string;
```

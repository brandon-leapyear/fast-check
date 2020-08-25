[Home](/) &gt; [fast-check](../fast-check.md) &gt; [commands](commands_3.md)

## commands() function

For arrays of [AsyncCommand](AsyncCommand.md) to be executed by [asyncModelRun()](asyncModelRun_1.md)

This implementation comes with a shrinker adapted for commands. It should shrink more efficiently than [array()](array_1.md) for [AsyncCommand](AsyncCommand.md) arrays.

<b>Signature:</b>

```typescript
declare function commands<Model extends object, Real, CheckAsync extends boolean>(commandArbs: Arbitrary<AsyncCommand<Model, Real, CheckAsync>>[], constraints?: CommandsContraints): Arbitrary<Iterable<AsyncCommand<Model, Real, CheckAsync>>>;
```

#### Parameters

|  Parameter | Type | Description |
|  --- | --- | --- |
|  commandArbs | <code>Arbitrary&lt;AsyncCommand&lt;Model, Real, CheckAsync&gt;&gt;[]</code> | Arbitraries responsible to build commands |
|  constraints | <code>CommandsContraints</code> |  |

<b>Returns:</b>

`Arbitrary<Iterable<AsyncCommand<Model, Real, CheckAsync>>>`


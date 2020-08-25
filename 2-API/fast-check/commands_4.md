[Home](/) &gt; [fast-check](../fast-check.md) &gt; [commands](commands_4.md)

## commands() function

For arrays of [Command](Command.md) to be executed by [modelRun()](modelRun_1.md)

This implementation comes with a shrinker adapted for commands. It should shrink more efficiently than [array()](array_1.md) for [Command](Command.md) arrays.

<b>Signature:</b>

```typescript
declare function commands<Model extends object, Real>(commandArbs: Arbitrary<Command<Model, Real>>[], constraints?: CommandsContraints): Arbitrary<Iterable<Command<Model, Real>>>;
```

#### Parameters

|  Parameter | Type | Description |
|  --- | --- | --- |
|  commandArbs | <code>Arbitrary&lt;Command&lt;Model, Real&gt;&gt;[]</code> | Arbitraries responsible to build commands |
|  constraints | <code>CommandsContraints</code> |  |

<b>Returns:</b>

`Arbitrary<Iterable<Command<Model, Real>>>`


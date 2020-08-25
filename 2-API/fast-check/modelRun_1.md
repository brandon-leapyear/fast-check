[Home](/) &gt; [fast-check](../fast-check.md) &gt; [modelRun](modelRun_1.md)

## modelRun() function

Run synchronous commands over a `Model` and the `Real` system

Throw in case of inconsistency

<b>Signature:</b>

```typescript
export declare function modelRun<Model extends object, Real, InitialModel extends Model>(s: ModelRunSetup<InitialModel, Real>, cmds: Iterable<Command<Model, Real>>): void;
```

#### Parameters

|  Parameter | Type | Description |
|  --- | --- | --- |
|  s | <code>ModelRunSetup&lt;InitialModel, Real&gt;</code> | Initial state provider |
|  cmds | <code>Iterable&lt;Command&lt;Model, Real&gt;&gt;</code> | Synchronous commands to be executed |

<b>Returns:</b>

`void`


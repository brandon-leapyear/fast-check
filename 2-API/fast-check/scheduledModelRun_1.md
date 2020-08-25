[Home](/) &gt; [fast-check](../fast-check.md) &gt; [scheduledModelRun](scheduledModelRun_1.md)

## scheduledModelRun() function

Run asynchronous and scheduled commands over a `Model` and the `Real` system

Throw in case of inconsistency

<b>Signature:</b>

```typescript
export declare function scheduledModelRun<Model extends object, Real, CheckAsync extends boolean, InitialModel extends Model>(scheduler: Scheduler, s: ModelRunSetup<InitialModel, Real> | ModelRunAsyncSetup<InitialModel, Real>, cmds: Iterable<AsyncCommand<Model, Real, CheckAsync>>): Promise<void>;
```

#### Parameters

|  Parameter | Type | Description |
|  --- | --- | --- |
|  scheduler | <code>Scheduler</code> | Scheduler |
|  s | <code>ModelRunSetup&lt;InitialModel, Real&gt; &#124; ModelRunAsyncSetup&lt;InitialModel, Real&gt;</code> | Initial state provider |
|  cmds | <code>Iterable&lt;AsyncCommand&lt;Model, Real, CheckAsync&gt;&gt;</code> | Asynchronous commands to be executed |

<b>Returns:</b>

`Promise<void>`


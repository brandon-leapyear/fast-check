[Home](/) &gt; [fast-check](../fast-check.md) &gt; [schedulerFor](schedulerFor_2.md)

## schedulerFor() function

For custom scheduler with predefined resolution order

WARNING: Custom scheduler will not check that all the referred promises have been scheduled.

WARNING: If one the promises is wrongly defined it will fail - for instance asking to resolve 5 while 5 does not exist.

<b>Signature:</b>

```typescript
declare function schedulerFor<TMetaData = unknown>(customOrdering: number[], constraints?: SchedulerConstraints): Scheduler<TMetaData>;
```

#### Parameters

|  Parameter | Type | Description |
|  --- | --- | --- |
|  customOrdering | <code>number[]</code> | Array defining in which order the promises will be resolved. Id of the promises start at 1. 1 means first scheduled promise, 2 second scheduled promise and so on. |
|  constraints | <code>SchedulerConstraints</code> |  |

<b>Returns:</b>

`Scheduler<TMetaData>`


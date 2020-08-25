[Home](/) &gt; [fast-check](../fast-check.md) &gt; [schedulerFor](schedulerFor_1.md)

## schedulerFor() function

For custom scheduler with predefined resolution order

Ordering is defined by using a template string like the one generated in case of failure of a [scheduler()](scheduler_1.md)

It may be something like:

<b>Signature:</b>

```typescript
declare function schedulerFor<TMetaData = unknown>(constraints?: SchedulerConstraints): (_strs: TemplateStringsArray, ...ordering: number[]) => Scheduler<TMetaData>;
```

#### Parameters

|  Parameter | Type | Description |
|  --- | --- | --- |
|  constraints | <code>SchedulerConstraints</code> |  |

<b>Returns:</b>

`(_strs: TemplateStringsArray, ...ordering: number[]) => Scheduler<TMetaData>`

#### Example


```typescript
fc.schedulerFor()`
  -> [task\${2}] promise pending
  -> [task\${3}] promise pending
  -> [task\${1}] promise pending
`

```
Or more generally:

```typescript
fc.schedulerFor()`
  This scheduler will resolve task ${2} first
  followed by ${3} and only then task ${1}
`

```
WARNING: Custom scheduler will neither check that all the referred promises have been scheduled nor that they resolved with the same status and value.

WARNING: If one the promises is wrongly defined it will fail - for instance asking to resolve 5 while 5 does not exist.


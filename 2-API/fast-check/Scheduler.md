[Home](/) &gt; [fast-check](../fast-check.md) &gt; [Scheduler](Scheduler.md)

## Scheduler interface

Instance able to reschedule the ordering of promises for a given app

<b>Signature:</b>

```typescript
export interface Scheduler<TMetaData = unknown> 
```

## Properties

|  Property | Type | Description |
|  --- | --- | --- |
|  [report](Scheduler.md#report) | <code>() =&gt; SchedulerReportItem&lt;TMetaData&gt;[]</code> | Produce an array containing all the scheduled tasks so far with their execution status. If the task has been executed, it includes a string representation of the associated output or error produced by the task if any.<!-- -->Tasks will be returned in the order they get executed by the scheduler. |
|  [schedule](Scheduler.md#schedule) | <code>&lt;T&gt;(task: Promise&lt;T&gt;, label?: string, metadata?: TMetaData) =&gt; Promise&lt;T&gt;</code> | Wrap a new task using the Scheduler |
|  [scheduleFunction](Scheduler.md#schedulefunction) | <code>&lt;TArgs extends any[], T&gt;(asyncFunction: (...args: TArgs) =&gt; Promise&lt;T&gt;) =&gt; (...args: TArgs) =&gt; Promise&lt;T&gt;</code> | Automatically wrap function output using the Scheduler |
|  [waitAll](Scheduler.md#waitall) | <code>() =&gt; Promise&lt;void&gt;</code> | Wait all scheduled tasks, including the ones that might be created by one of the resolved task |
|  [waitOne](Scheduler.md#waitone) | <code>() =&gt; Promise&lt;void&gt;</code> | Wait one scheduled task to be executed |

### report

Produce an array containing all the scheduled tasks so far with their execution status. If the task has been executed, it includes a string representation of the associated output or error produced by the task if any.

Tasks will be returned in the order they get executed by the scheduler.

<b>Signature:</b>

```typescript
report: () => SchedulerReportItem<TMetaData>[];
```

### schedule

Wrap a new task using the Scheduler

<b>Signature:</b>

```typescript
schedule: <T>(task: Promise<T>, label?: string, metadata?: TMetaData) => Promise<T>;
```

### scheduleFunction

Automatically wrap function output using the Scheduler

<b>Signature:</b>

```typescript
scheduleFunction: <TArgs extends any[], T>(asyncFunction: (...args: TArgs) => Promise<T>) => (...args: TArgs) => Promise<T>;
```

### waitAll

Wait all scheduled tasks, including the ones that might be created by one of the resolved task

<b>Signature:</b>

```typescript
waitAll: () => Promise<void>;
```

### waitOne

Wait one scheduled task to be executed

<b>Signature:</b>

```typescript
waitOne: () => Promise<void>;
```

## Methods

|  Method | Description |
|  --- | --- |
|  [count()](Scheduler.md#count) | Count of pending scheduled tasks |
|  [scheduleSequence(sequenceBuilders)](Scheduler.md#schedulesequence) | Schedule a sequence of Promise to be executed sequencially. Items within the sequence might be interleaved by other scheduled operations.<!-- -->Please note that whenever an item from the sequence has started, the scheduler will wait until its end before moving to another scheduled task.<!-- -->A handle is returned by the function in order to monitor the state of the sequence. Sequence will be marked: - done if all the promises have been executed properly - faulty if one of the promises within the sequence throws |

### count

Count of pending scheduled tasks

<b>Signature:</b>

```typescript
count(): number;
```
<b>Returns:</b>

`number`

### scheduleSequence

Schedule a sequence of Promise to be executed sequencially. Items within the sequence might be interleaved by other scheduled operations.

Please note that whenever an item from the sequence has started, the scheduler will wait until its end before moving to another scheduled task.

A handle is returned by the function in order to monitor the state of the sequence. Sequence will be marked: - done if all the promises have been executed properly - faulty if one of the promises within the sequence throws

<b>Signature:</b>

```typescript
scheduleSequence(sequenceBuilders: SchedulerSequenceItem<TMetaData>[]): {
        done: boolean;
        faulty: boolean;
        task: Promise<{
            done: boolean;
            faulty: boolean;
        }>;
    };
```

#### Parameters

|  Parameter | Type | Description |
|  --- | --- | --- |
|  sequenceBuilders | <code>SchedulerSequenceItem&lt;TMetaData&gt;[]</code> |  |

<b>Returns:</b>

`{
        done: boolean;
        faulty: boolean;
        task: Promise<{
            done: boolean;
            faulty: boolean;
        }>;
    }`


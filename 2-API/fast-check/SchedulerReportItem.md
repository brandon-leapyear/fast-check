[Home](/) &gt; [fast-check](../fast-check.md) &gt; [SchedulerReportItem](SchedulerReportItem.md)

## SchedulerReportItem interface

Describe a task for the report produced by the scheduler

<b>Signature:</b>

```typescript
export interface SchedulerReportItem<TMetaData = unknown> 
```

## Properties

|  Property | Type | Description |
|  --- | --- | --- |
|  [label](SchedulerReportItem.md#label) | <code>string</code> | Label of the task |
|  [metadata](SchedulerReportItem.md#metadata) | <code>TMetaData</code> | Metadata linked when scheduling the task |
|  [outputValue](SchedulerReportItem.md#outputvalue) | <code>string</code> | Stringified version of the output or error computed using fc.stringify |
|  [schedulingType](SchedulerReportItem.md#schedulingtype) | <code>'promise' &#124; 'function' &#124; 'sequence'</code> | How was this task scheduled? - promise: schedule - function: scheduleFunction - sequence: scheduleSequence |
|  [status](SchedulerReportItem.md#status) | <code>'resolved' &#124; 'rejected' &#124; 'pending'</code> | Execution status for this task - resolved: task released by the scheduler and successful - rejected: task released by the scheduler but with errors - pending: task still pending in the scheduler, not released yet |
|  [taskId](SchedulerReportItem.md#taskid) | <code>number</code> | Incremental id for the task, first received task has taskId = 1 |

### label

Label of the task

<b>Signature:</b>

```typescript
label: string;
```

### metadata

Metadata linked when scheduling the task

<b>Signature:</b>

```typescript
metadata?: TMetaData;
```

### outputValue

Stringified version of the output or error computed using fc.stringify

<b>Signature:</b>

```typescript
outputValue?: string;
```

### schedulingType

How was this task scheduled? - promise: schedule - function: scheduleFunction - sequence: scheduleSequence

<b>Signature:</b>

```typescript
schedulingType: 'promise' | 'function' | 'sequence';
```

### status

Execution status for this task - resolved: task released by the scheduler and successful - rejected: task released by the scheduler but with errors - pending: task still pending in the scheduler, not released yet

<b>Signature:</b>

```typescript
status: 'resolved' | 'rejected' | 'pending';
```

### taskId

Incremental id for the task, first received task has taskId = 1

<b>Signature:</b>

```typescript
taskId: number;
```

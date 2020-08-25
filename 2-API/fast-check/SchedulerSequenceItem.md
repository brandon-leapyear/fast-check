[Home](/) &gt; [fast-check](../fast-check.md) &gt; [SchedulerSequenceItem](SchedulerSequenceItem.md)

## SchedulerSequenceItem type

Define an item to be passed to `scheduleSequence`

<b>Signature:</b>

```typescript
export declare type SchedulerSequenceItem<TMetaData = unknown> = {
    builder: () => Promise<any>;
    label: string;
    metadata?: TMetaData;
} | (() => Promise<any>);
```

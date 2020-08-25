[Home](/) &gt; [fast-check](../fast-check.md) &gt; [defaultReportMessage](defaultReportMessage_2.md)

## defaultReportMessage() function

Format output of [check()](check_1.md) using the default error reporting of [assert()](assert_1.md)

Produce a string containing the formated error in case of failed run, undefined otherwise.

<b>Signature:</b>

```typescript
declare function defaultReportMessage<Ts>(out: RunDetails<Ts> & {
    failed: true;
}): string;
```

#### Parameters

|  Parameter | Type | Description |
|  --- | --- | --- |
|  out | <code>RunDetails&lt;Ts&gt; &amp; {`<p/>`    failed: true;`<p/>`}</code> |  |

<b>Returns:</b>

`string`


[Home](/) &gt; [fast-check](../fast-check.md) &gt; [defaultReportMessage](defaultReportMessage_1.md)

## defaultReportMessage() function

Format output of [check()](check_1.md) using the default error reporting of [assert()](assert_1.md)

Produce a string containing the formated error in case of failed run, undefined otherwise.

<b>Signature:</b>

```typescript
declare function defaultReportMessage<Ts>(out: RunDetails<Ts> & {
    failed: false;
}): undefined;
```

#### Parameters

|  Parameter | Type | Description |
|  --- | --- | --- |
|  out | <code>RunDetails&lt;Ts&gt; &amp; {`<p/>`    failed: false;`<p/>`}</code> |  |

<b>Returns:</b>

`undefined`


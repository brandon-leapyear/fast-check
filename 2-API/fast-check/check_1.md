[Home](/) &gt; [fast-check](../fast-check.md) &gt; [check](check_1.md)

## check() function

Run the property, do not throw contrary to [assert()](assert_1.md)

WARNING: Has to be awaited

<b>Signature:</b>

```typescript
declare function check<Ts>(property: IAsyncProperty<Ts>, params?: Parameters<Ts>): Promise<RunDetails<Ts>>;
```

#### Parameters

|  Parameter | Type | Description |
|  --- | --- | --- |
|  property | <code>IAsyncProperty&lt;Ts&gt;</code> | Asynchronous property to be checked |
|  params | <code>Parameters&lt;Ts&gt;</code> | Optional parameters to customize the execution |

<b>Returns:</b>

`Promise<RunDetails<Ts>>`

Test status and other useful details


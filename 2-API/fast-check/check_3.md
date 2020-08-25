[Home](/) &gt; [fast-check](../fast-check.md) &gt; [check](check_3.md)

## check() function

Run the property, do not throw contrary to [assert()](assert_3.md)

WARNING: Has to be awaited if the property is asynchronous

<b>Signature:</b>

```typescript
declare function check<Ts>(property: IRawProperty<Ts>, params?: Parameters<Ts>): Promise<RunDetails<Ts>> | RunDetails<Ts>;
```

#### Parameters

|  Parameter | Type | Description |
|  --- | --- | --- |
|  property | <code>IRawProperty&lt;Ts&gt;</code> | Property to be checked |
|  params | <code>Parameters&lt;Ts&gt;</code> | Optional parameters to customize the execution |

<b>Returns:</b>

`Promise<RunDetails<Ts>> | RunDetails<Ts>`

Test status and other useful details


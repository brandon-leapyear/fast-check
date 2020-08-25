[Home](/) &gt; [fast-check](../fast-check.md) &gt; [assert](assert_3.md)

## assert() function

Run the property, throw in case of failure

It can be called directly from describe/it blocks of Mocha. It does not return anything in case of success.

WARNING: Has to be awaited if the property is asynchronous

<b>Signature:</b>

```typescript
declare function assert<Ts>(property: IRawProperty<Ts>, params?: Parameters<Ts>): Promise<void> | void;
```

#### Parameters

|  Parameter | Type | Description |
|  --- | --- | --- |
|  property | <code>IRawProperty&lt;Ts&gt;</code> | Property to be checked |
|  params | <code>Parameters&lt;Ts&gt;</code> | Optional parameters to customize the execution |

<b>Returns:</b>

`Promise<void> | void`


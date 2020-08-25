[Home](/) &gt; [fast-check](../fast-check.md) &gt; [assert](assert_2.md)

## assert() function

Run the property, throw in case of failure

It can be called directly from describe/it blocks of Mocha. It does not return anything in case of success.

<b>Signature:</b>

```typescript
declare function assert<Ts>(property: IProperty<Ts>, params?: Parameters<Ts>): void;
```

#### Parameters

|  Parameter | Type | Description |
|  --- | --- | --- |
|  property | <code>IProperty&lt;Ts&gt;</code> | Synchronous property to be checked |
|  params | <code>Parameters&lt;Ts&gt;</code> | Optional parameters to customize the execution |

<b>Returns:</b>

`void`


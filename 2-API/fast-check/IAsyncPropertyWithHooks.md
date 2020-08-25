[Home](/) &gt; [fast-check](../fast-check.md) &gt; [IAsyncPropertyWithHooks](IAsyncPropertyWithHooks.md)

## IAsyncPropertyWithHooks interface

Interface for asynchronous property defining hooks, see [IAsyncProperty](IAsyncProperty.md)

<b>Signature:</b>

```typescript
export interface IAsyncPropertyWithHooks<Ts> extends IAsyncProperty<Ts> 
```

## Methods

|  Method | Description |
|  --- | --- |
|  [afterEach(hookFunction)](IAsyncPropertyWithHooks.md#aftereach) | Define a function that should be called after all calls to the predicate |
|  [beforeEach(hookFunction)](IAsyncPropertyWithHooks.md#beforeeach) | Define a function that should be called before all calls to the predicate |

### afterEach

Define a function that should be called after all calls to the predicate

<b>Signature:</b>

```typescript
afterEach(hookFunction: AsyncPropertyHookFunction): IAsyncPropertyWithHooks<Ts>;
```

#### Parameters

|  Parameter | Type | Description |
|  --- | --- | --- |
|  hookFunction | <code>AsyncPropertyHookFunction</code> | Function to be called |

<b>Returns:</b>

`IAsyncPropertyWithHooks<Ts>`

### beforeEach

Define a function that should be called before all calls to the predicate

<b>Signature:</b>

```typescript
beforeEach(hookFunction: AsyncPropertyHookFunction): IAsyncPropertyWithHooks<Ts>;
```

#### Parameters

|  Parameter | Type | Description |
|  --- | --- | --- |
|  hookFunction | <code>AsyncPropertyHookFunction</code> | Function to be called |

<b>Returns:</b>

`IAsyncPropertyWithHooks<Ts>`


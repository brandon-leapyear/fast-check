[Home](/) &gt; [fast-check](../fast-check.md) &gt; [IPropertyWithHooks](IPropertyWithHooks.md)

## IPropertyWithHooks interface

Interface for synchronous property defining hooks, see [IProperty](IProperty.md)

<b>Signature:</b>

```typescript
export interface IPropertyWithHooks<Ts> extends IProperty<Ts> 
```

## Methods

|  Method | Description |
|  --- | --- |
|  [afterEach(invalidHookFunction)](IPropertyWithHooks.md#aftereach) | Define a function that should be called after all calls to the predicate |
|  [afterEach(hookFunction)](IPropertyWithHooks.md#aftereach) | Define a function that should be called after all calls to the predicate |
|  [beforeEach(invalidHookFunction)](IPropertyWithHooks.md#beforeeach) | Define a function that should be called before all calls to the predicate |
|  [beforeEach(hookFunction)](IPropertyWithHooks.md#beforeeach) | Define a function that should be called before all calls to the predicate |

### afterEach

Define a function that should be called after all calls to the predicate

<b>Signature:</b>

```typescript
afterEach(invalidHookFunction: () => Promise<unknown>): 'afterEach expects a synchronous function but was given a function returning a Promise';
```

#### Parameters

|  Parameter | Type | Description |
|  --- | --- | --- |
|  invalidHookFunction | <code>() =&gt; Promise&lt;unknown&gt;</code> | Function to be called, please provide a valid hook function |

<b>Returns:</b>

`'afterEach expects a synchronous function but was given a function returning a Promise'`

### afterEach

Define a function that should be called after all calls to the predicate

<b>Signature:</b>

```typescript
afterEach(hookFunction: PropertyHookFunction): IPropertyWithHooks<Ts>;
```

#### Parameters

|  Parameter | Type | Description |
|  --- | --- | --- |
|  hookFunction | <code>PropertyHookFunction</code> | Function to be called |

<b>Returns:</b>

`IPropertyWithHooks<Ts>`

### beforeEach

Define a function that should be called before all calls to the predicate

<b>Signature:</b>

```typescript
beforeEach(invalidHookFunction: () => Promise<unknown>): 'beforeEach expects a synchronous function but was given a function returning a Promise';
```

#### Parameters

|  Parameter | Type | Description |
|  --- | --- | --- |
|  invalidHookFunction | <code>() =&gt; Promise&lt;unknown&gt;</code> | Function to be called, please provide a valid hook function |

<b>Returns:</b>

`'beforeEach expects a synchronous function but was given a function returning a Promise'`

### beforeEach

Define a function that should be called before all calls to the predicate

<b>Signature:</b>

```typescript
beforeEach(hookFunction: PropertyHookFunction): IPropertyWithHooks<Ts>;
```

#### Parameters

|  Parameter | Type | Description |
|  --- | --- | --- |
|  hookFunction | <code>PropertyHookFunction</code> | Function to be called |

<b>Returns:</b>

`IPropertyWithHooks<Ts>`


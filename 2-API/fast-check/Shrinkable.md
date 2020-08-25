[Home](/) &gt; [fast-check](../fast-check.md) &gt; [Shrinkable](Shrinkable.md)

## Shrinkable class

A `Shrinkable<T, TShrink = T>` holds an internal value of type `T` and can shrink it to smaller `TShrink` values

<b>Signature:</b>

```typescript
export declare class Shrinkable<T, TShrink extends T = T> 
```

## Properties

|  Property | Type | Description |
|  --- | --- | --- |
|  [hasToBeCloned](Shrinkable.md#hastobecloned) | <code>boolean</code> | State storing the result of hasCloneMethod If <code>true</code> the value will be cloned each time it gets accessed |
|  [shrink](Shrinkable.md#shrink) | <code>() =&gt; Stream&lt;Shrinkable&lt;TShrink&gt;&gt;</code> |  |
|  [value\_](Shrinkable.md#value_) | <code>T</code> |  |
|  [value](Shrinkable.md#value) | <code>T</code> | Safe value of the shrinkable Depending on <code>hasToBeCloned</code> it will either be <code>value_</code> or a clone of it |

### hasToBeCloned

State storing the result of hasCloneMethod If `true` the value will be cloned each time it gets accessed

<b>Signature:</b>

```typescript
readonly hasToBeCloned: boolean;
```

### shrink

<b>Signature:</b>

```typescript
readonly shrink: () => Stream<Shrinkable<TShrink>>;
```

### value\_

<b>Signature:</b>

```typescript
readonly value_: T;
```

### value

Safe value of the shrinkable Depending on `hasToBeCloned` it will either be `value_` or a clone of it

<b>Signature:</b>

```typescript
readonly value: T;
```

## Methods

|  Method | Description |
|  --- | --- |
|  [filter(refinement)](Shrinkable.md#filter) | Create another shrinkable by filtering its shrunk values against <code>predicate</code>All the shrunk values produced by the resulting <code>Shrinkable&lt;T&gt;</code> satisfy <code>predicate(value) == true</code>WARNING: When using refinement - <code>(t: T) =&gt; t is U</code> - only the shrunk values are ensured to be of type U. The type of the current value of the Shrinkable is your responsability. |
|  [filter(predicate)](Shrinkable.md#filter) | Create another shrinkable by filtering its shrunk values against <code>predicate</code>All the shrunk values produced by the resulting <code>Shrinkable&lt;T&gt;</code> satisfy <code>predicate(value) == true</code> |
|  [map(mapper)](Shrinkable.md#map) | Create another shrinkable by mapping all values using the provided <code>mapper</code> Both the original value and the shrunk ones are impacted |

### filter

Create another shrinkable by filtering its shrunk values against `predicate`

All the shrunk values produced by the resulting `Shrinkable<T>` satisfy `predicate(value) == true`

WARNING: When using refinement - `(t: T) => t is U` - only the shrunk values are ensured to be of type U. The type of the current value of the Shrinkable is your responsability.

<b>Signature:</b>

```typescript
filter<U extends TShrink>(refinement: (t: TShrink) => t is U): Shrinkable<T, U>;
```

#### Parameters

|  Parameter | Type | Description |
|  --- | --- | --- |
|  refinement | <code>(t: TShrink) =&gt; t is U</code> | Predicate, to test each produced element. Return true to keep the element, false otherwise |

<b>Returns:</b>

`Shrinkable<T, U>`

New shrinkable filtered using predicate

### filter

Create another shrinkable by filtering its shrunk values against `predicate`

All the shrunk values produced by the resulting `Shrinkable<T>` satisfy `predicate(value) == true`

<b>Signature:</b>

```typescript
filter(predicate: (t: TShrink) => boolean): Shrinkable<T, TShrink>;
```

#### Parameters

|  Parameter | Type | Description |
|  --- | --- | --- |
|  predicate | <code>(t: TShrink) =&gt; boolean</code> | Predicate, to test each produced element. Return true to keep the element, false otherwise |

<b>Returns:</b>

`Shrinkable<T, TShrink>`

New shrinkable filtered using predicate

### map

Create another shrinkable by mapping all values using the provided `mapper` Both the original value and the shrunk ones are impacted

<b>Signature:</b>

```typescript
map<U>(mapper: (t: T) => U): Shrinkable<U>;
```

#### Parameters

|  Parameter | Type | Description |
|  --- | --- | --- |
|  mapper | <code>(t: T) =&gt; U</code> | Map function, to produce a new element based on an old one |

<b>Returns:</b>

`Shrinkable<U>`

New shrinkable with mapped elements


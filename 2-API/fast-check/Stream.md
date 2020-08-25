[Home](/) &gt; [fast-check](../fast-check.md) &gt; [Stream](Stream.md)

## Stream class

Wrapper around `IterableIterator` interface offering a set of helpers to deal with iterations in a simple way

<b>Signature:</b>

```typescript
export declare class Stream<T> implements IterableIterator<T> 
```

## Methods

|  Method | Description |
|  --- | --- |
|  [\[Symbol.iterator\]()](Stream.md#[symbol.iterator]) |  |
|  [drop(n)](Stream.md#drop) | Drop <code>n</code> first elements of the Stream<!-- -->WARNING: It closes the current stream |
|  [dropWhile(f)](Stream.md#dropwhile) | Drop elements from the Stream while <code>f(element) === true</code>WARNING: It closes the current stream |
|  [every(f)](Stream.md#every) | Check whether all elements of the Stream are successful for <code>f</code>WARNING: It closes the current stream |
|  [filter(f)](Stream.md#filter) | Filter elements of the Stream<!-- -->WARNING: It closes the current stream |
|  [filter(f)](Stream.md#filter) | Filter elements of the Stream<!-- -->WARNING: It closes the current stream |
|  [flatMap(f)](Stream.md#flatmap) | Flat map all elements of the Stream using <code>f</code>WARNING: It closes the current stream |
|  [getNthOrLast(nth)](Stream.md#getnthorlast) | Take the <code>nth</code> element of the Stream of the last (if it does not exist)<!-- -->WARNING: It closes the current stream |
|  [has(f)](Stream.md#has) | Check whether one of the elements of the Stream is successful for <code>f</code>WARNING: It closes the current stream |
|  [join(others)](Stream.md#join) | Join <code>others</code> Stream to the current Stream<!-- -->WARNING: It closes the current stream and the other ones (as soon as it iterates over them) |
|  [map(f)](Stream.md#map) | Map all elements of the Stream using <code>f</code>WARNING: It closes the current stream |
|  [next()](Stream.md#next) |  |
|  [nil()](Stream.md#nil) | Create an empty stream of T |
|  [take(n)](Stream.md#take) | Take <code>n</code> first elements of the Stream<!-- -->WARNING: It closes the current stream |
|  [takeWhile(f)](Stream.md#takewhile) | Take elements from the Stream while <code>f(element) === true</code>WARNING: It closes the current stream |

### \[Symbol.iterator\]

<b>Signature:</b>

```typescript
[Symbol.iterator](): IterableIterator<T>;
```
<b>Returns:</b>

`IterableIterator<T>`

### drop

Drop `n` first elements of the Stream

WARNING: It closes the current stream

<b>Signature:</b>

```typescript
drop(n: number): Stream<T>;
```

#### Parameters

|  Parameter | Type | Description |
|  --- | --- | --- |
|  n | <code>number</code> | Number of elements to drop |

<b>Returns:</b>

`Stream<T>`

### dropWhile

Drop elements from the Stream while `f(element) === true`

WARNING: It closes the current stream

<b>Signature:</b>

```typescript
dropWhile(f: (v: T) => boolean): Stream<T>;
```

#### Parameters

|  Parameter | Type | Description |
|  --- | --- | --- |
|  f | <code>(v: T) =&gt; boolean</code> | Drop condition |

<b>Returns:</b>

`Stream<T>`

### every

Check whether all elements of the Stream are successful for `f`

WARNING: It closes the current stream

<b>Signature:</b>

```typescript
every(f: (v: T) => boolean): boolean;
```

#### Parameters

|  Parameter | Type | Description |
|  --- | --- | --- |
|  f | <code>(v: T) =&gt; boolean</code> | Condition to check |

<b>Returns:</b>

`boolean`

### filter

Filter elements of the Stream

WARNING: It closes the current stream

<b>Signature:</b>

```typescript
filter<U extends T>(f: (v: T) => v is U): Stream<U>;
```

#### Parameters

|  Parameter | Type | Description |
|  --- | --- | --- |
|  f | <code>(v: T) =&gt; v is U</code> | Elements to keep |

<b>Returns:</b>

`Stream<U>`

### filter

Filter elements of the Stream

WARNING: It closes the current stream

<b>Signature:</b>

```typescript
filter(f: (v: T) => boolean): Stream<T>;
```

#### Parameters

|  Parameter | Type | Description |
|  --- | --- | --- |
|  f | <code>(v: T) =&gt; boolean</code> | Elements to keep |

<b>Returns:</b>

`Stream<T>`

### flatMap

Flat map all elements of the Stream using `f`

WARNING: It closes the current stream

<b>Signature:</b>

```typescript
flatMap<U>(f: (v: T) => IterableIterator<U>): Stream<U>;
```

#### Parameters

|  Parameter | Type | Description |
|  --- | --- | --- |
|  f | <code>(v: T) =&gt; IterableIterator&lt;U&gt;</code> | Mapper function |

<b>Returns:</b>

`Stream<U>`

### getNthOrLast

Take the `nth` element of the Stream of the last (if it does not exist)

WARNING: It closes the current stream

<b>Signature:</b>

```typescript
getNthOrLast(nth: number): T | null;
```

#### Parameters

|  Parameter | Type | Description |
|  --- | --- | --- |
|  nth | <code>number</code> | Position of the element to extract |

<b>Returns:</b>

`T | null`

### has

Check whether one of the elements of the Stream is successful for `f`

WARNING: It closes the current stream

<b>Signature:</b>

```typescript
has(f: (v: T) => boolean): [boolean, T | null];
```

#### Parameters

|  Parameter | Type | Description |
|  --- | --- | --- |
|  f | <code>(v: T) =&gt; boolean</code> | Condition to check |

<b>Returns:</b>

`[boolean, T | null]`

### join

Join `others` Stream to the current Stream

WARNING: It closes the current stream and the other ones (as soon as it iterates over them)

<b>Signature:</b>

```typescript
join(...others: IterableIterator<T>[]): Stream<T>;
```

#### Parameters

|  Parameter | Type | Description |
|  --- | --- | --- |
|  others | <code>IterableIterator&lt;T&gt;[]</code> | Streams to join to the current Stream |

<b>Returns:</b>

`Stream<T>`

### map

Map all elements of the Stream using `f`

WARNING: It closes the current stream

<b>Signature:</b>

```typescript
map<U>(f: (v: T) => U): Stream<U>;
```

#### Parameters

|  Parameter | Type | Description |
|  --- | --- | --- |
|  f | <code>(v: T) =&gt; U</code> | Mapper function |

<b>Returns:</b>

`Stream<U>`

### next

<b>Signature:</b>

```typescript
next(): IteratorResult<T>;
```
<b>Returns:</b>

`IteratorResult<T>`

### nil

Create an empty stream of T

<b>Signature:</b>

```typescript
static nil<T>(): Stream<T>;
```
<b>Returns:</b>

`Stream<T>`

### take

Take `n` first elements of the Stream

WARNING: It closes the current stream

<b>Signature:</b>

```typescript
take(n: number): Stream<T>;
```

#### Parameters

|  Parameter | Type | Description |
|  --- | --- | --- |
|  n | <code>number</code> | Number of elements to take |

<b>Returns:</b>

`Stream<T>`

### takeWhile

Take elements from the Stream while `f(element) === true`

WARNING: It closes the current stream

<b>Signature:</b>

```typescript
takeWhile(f: (v: T) => boolean): Stream<T>;
```

#### Parameters

|  Parameter | Type | Description |
|  --- | --- | --- |
|  f | <code>(v: T) =&gt; boolean</code> | Take condition |

<b>Returns:</b>

`Stream<T>`


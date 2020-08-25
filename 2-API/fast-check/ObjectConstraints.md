[Home](/) &gt; [fast-check](../fast-check.md) &gt; [ObjectConstraints](ObjectConstraints.md)

## ObjectConstraints interface

Constraints for [anything()](anything_1.md) and [object()](object_1.md)

<b>Signature:</b>

```typescript
export interface ObjectConstraints 
```

## Properties

|  Property | Type | Description |
|  --- | --- | --- |
|  [key](ObjectConstraints.md#key) | <code>Arbitrary&lt;string&gt;</code> | Arbitrary for keys<!-- -->Default for <code>key</code> is: [string()](string_1.md) |
|  [maxDepth](ObjectConstraints.md#maxdepth) | <code>number</code> | Maximal depth allowed |
|  [maxKeys](ObjectConstraints.md#maxkeys) | <code>number</code> | Maximal number of keys |
|  [values](ObjectConstraints.md#values) | <code>Arbitrary&lt;unknown&gt;[]</code> | Arbitrary for values<!-- -->Default for <code>values</code> are: - [boolean()](boolean_1.md)<!-- -->, - [integer()](integer_1.md)<!-- -->, - [double()](double_1.md)<!-- -->, - [string()](string_1.md) - constants among: - <code>null</code>, - <code>undefined</code>, - <code>Number.NaN</code>, - <code>+0</code>, - <code>-0</code>, - <code>Number.EPSILON</code>, - <code>Number.MIN_VALUE</code>, - <code>Number.MAX_VALUE</code>, - <code>Number.MIN_SAFE_INTEGER</code>, - <code>Number.MAX_SAFE_INTEGER</code>, - <code>Number.POSITIVE_INFINITY</code>, - <code>Number.NEGATIVE_INFINITY</code> |
|  [withBigInt](ObjectConstraints.md#withbigint) | <code>boolean</code> | Also generate BigInt |
|  [withBoxedValues](ObjectConstraints.md#withboxedvalues) | <code>boolean</code> | Also generate boxed versions of values |
|  [withMap](ObjectConstraints.md#withmap) | <code>boolean</code> | Also generate Map |
|  [withNullPrototype](ObjectConstraints.md#withnullprototype) | <code>boolean</code> | Also generate object with null prototype |
|  [withObjectString](ObjectConstraints.md#withobjectstring) | <code>boolean</code> | Also generate string representations of object instances |
|  [withSet](ObjectConstraints.md#withset) | <code>boolean</code> | Also generate Set |

### key

Arbitrary for keys

Default for `key` is: [string()](string_1.md)

<b>Signature:</b>

```typescript
key?: Arbitrary<string>;
```

### maxDepth

Maximal depth allowed

<b>Signature:</b>

```typescript
maxDepth?: number;
```

### maxKeys

Maximal number of keys

<b>Signature:</b>

```typescript
maxKeys?: number;
```

### values

Arbitrary for values

Default for `values` are: - [boolean()](boolean_1.md)<!-- -->, - [integer()](integer_1.md)<!-- -->, - [double()](double_1.md)<!-- -->, - [string()](string_1.md) - constants among: - `null`<!-- -->, - `undefined`<!-- -->, - `Number.NaN`<!-- -->, - `+0`<!-- -->, - `-0`<!-- -->, - `Number.EPSILON`<!-- -->, - `Number.MIN_VALUE`<!-- -->, - `Number.MAX_VALUE`<!-- -->, - `Number.MIN_SAFE_INTEGER`<!-- -->, - `Number.MAX_SAFE_INTEGER`<!-- -->, - `Number.POSITIVE_INFINITY`<!-- -->, - `Number.NEGATIVE_INFINITY`

<b>Signature:</b>

```typescript
values?: Arbitrary<unknown>[];
```

### withBigInt

Also generate BigInt

<b>Signature:</b>

```typescript
withBigInt?: boolean;
```

### withBoxedValues

Also generate boxed versions of values

<b>Signature:</b>

```typescript
withBoxedValues?: boolean;
```

### withMap

Also generate Map

<b>Signature:</b>

```typescript
withMap?: boolean;
```

### withNullPrototype

Also generate object with null prototype

<b>Signature:</b>

```typescript
withNullPrototype?: boolean;
```

### withObjectString

Also generate string representations of object instances

<b>Signature:</b>

```typescript
withObjectString?: boolean;
```

### withSet

Also generate Set

<b>Signature:</b>

```typescript
withSet?: boolean;
```

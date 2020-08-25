[Home](/) &gt; [fast-check](../fast-check.md) &gt; [ArbitraryWithShrink](ArbitraryWithShrink.md)

## ArbitraryWithShrink class

Abstract class able to generate and shrink values on type `T`

It can shrink a value that it has not produced through `generate` (contrary to [Arbitrary](Arbitrary.md)<!-- -->). In the case of classical [Arbitrary](Arbitrary.md) there is no `shrink` or `shrinkableFor` methods directly on the [Arbitrary](Arbitrary.md)<!-- -->, the users have to call `shrink` on the instance of [Shrinkable](Shrinkable.md) produced by `generate`<!-- -->.

<b>Signature:</b>

```typescript
declare abstract class ArbitraryWithShrink<T> extends Arbitrary<T> 
```

## Methods

|  Method | Description |
|  --- | --- |
|  [generate(mrng)](ArbitraryWithShrink.md#generate) | Generate a value of type <code>T</code> along with its shrink method based on the provided random number generator |
|  [shrink(value, shrunkOnce)](ArbitraryWithShrink.md#shrink) | Produce a stream of shrinks of value |
|  [shrinkableFor(value, shrunkOnce)](ArbitraryWithShrink.md#shrinkablefor) | Build the Shrinkable associated to value |

### generate

Generate a value of type `T` along with its shrink method based on the provided random number generator

<b>Signature:</b>

```typescript
abstract generate(mrng: Random): Shrinkable<T>;
```

#### Parameters

|  Parameter | Type | Description |
|  --- | --- | --- |
|  mrng | <code>Random</code> | Random number generator |

<b>Returns:</b>

`Shrinkable<T>`

Random value of type `T` and its shrinker

### shrink

Produce a stream of shrinks of value

<b>Signature:</b>

```typescript
abstract shrink(value: T, shrunkOnce?: boolean): Stream<T>;
```

#### Parameters

|  Parameter | Type | Description |
|  --- | --- | --- |
|  value | <code>T</code> | Value to shrink |
|  shrunkOnce | <code>boolean</code> | Indicate whether its the first shrink (default: false) |

<b>Returns:</b>

`Stream<T>`

Stream of shrinks associated to value

### shrinkableFor

Build the Shrinkable associated to value

<b>Signature:</b>

```typescript
shrinkableFor(value: T, shrunkOnce?: boolean): Shrinkable<T>;
```

#### Parameters

|  Parameter | Type | Description |
|  --- | --- | --- |
|  value | <code>T</code> | Value to shrink |
|  shrunkOnce | <code>boolean</code> | Indicate whether its the first shrink |

<b>Returns:</b>

`Shrinkable<T>`

Shrinkable associated to value


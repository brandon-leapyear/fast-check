[Home](/) &gt; [fast-check](../fast-check.md) &gt; [ExecutionTree](ExecutionTree.md)

## ExecutionTree interface

Summary of the execution process

<b>Signature:</b>

```typescript
export interface ExecutionTree<Ts> 
```

## Properties

|  Property | Type | Description |
|  --- | --- | --- |
|  [children](ExecutionTree.md#children) | <code>ExecutionTree&lt;Ts&gt;[]</code> | Values derived from this value |
|  [status](ExecutionTree.md#status) | <code>ExecutionStatus</code> | Status of the property |
|  [value](ExecutionTree.md#value) | <code>Ts</code> | Generated value |

### children

Values derived from this value

<b>Signature:</b>

```typescript
children: ExecutionTree<Ts>[];
```

### status

Status of the property

<b>Signature:</b>

```typescript
status: ExecutionStatus;
```

### value

Generated value

<b>Signature:</b>

```typescript
value: Ts;
```

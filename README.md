# TypeScript Utility Types

This repository contains my TypeScript practice code for learning Utility Types.

## Topics Covered

* Partial
* Pick
* Omit
* Record
* Type Transformations
* Reusable Type Definitions

## Concepts

### Partial

Makes all properties optional.

```ts
type UpdateUserInput = Partial<User>;
```

### Pick

Selects specific properties from an existing type.

```ts
type UserPublicInfo = Pick<User, "name" | "role">;
```

### Omit

Removes specific properties from an existing type.

```ts
type RegisterUserInput = Omit<User, "id">;
```

### Record

Creates an object type with predefined keys and value types.

```ts
type PageConfig = Record<PageNames, boolean>;
```

## Files

* app.ts - TypeScript source code
* app.js - Compiled JavaScript code

## Purpose

This repository is part of my TypeScript learning journey and contains examples for practicing TypeScript Utility Types.

## Author

Muhammad Sheraz | Full Stack Web Developer

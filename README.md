# coa-error

[![GitHub license](https://img.shields.io/badge/license-MIT-green.svg?style=flat-square)](LICENSE)
[![npm version](https://img.shields.io/npm/v/coa-error.svg?style=flat-square)](https://www.npmjs.org/package/coa-error)
[![npm downloads](https://img.shields.io/npm/dm/coa-error.svg?style=flat-square)](http://npm-stat.com/charts.html?package=coa-error)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](https://github.com/coajs/coa-error/pulls)

English | [简体中文](README.zh-CN.md)

Basic Error Library for coajs, used to unify error messages

### Install

```shell
yarn add coa-error
```

### Example

```typescript
import { CoaError } from 'coa-error'

// Define and throw a new error
throw new CoaError('User.UserAgeInvaild', 'User age error')

// Thrown using a static method (can be used as a syntax sugar)
CoaError.throw('User.UserAgeInvaild', 'User age error')

// You can also use the message method, which only prompts but does not display in stdio (controlled by the coa upsteam framework, other calls are equivalent to throw)
CoaError.message('User.UserAgeInvaild', 'User age error')
```

### Data structure

coa error requires that the following uniform parameters must be defined:

- **code** error code
- **message** error message

The class is defined as follows:

```typescript
class CoaError extends Error {
  name = 'CoaError'

  code: string
  stdout: boolean

  constructor(code: string, message: string, stdout: boolean = true) {
    super(message)
    this.code = code
    this.stdout = stdout
  }

  static message(code: string, message: string): never {
    throw new CoaError(code, message, false)
  }

  static throw(code: string, message: string): never {
    throw new CoaError(code, message)
  }
}
```

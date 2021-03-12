# coa-error

[![GitHub license](https://img.shields.io/badge/license-MIT-green.svg?style=flat-square)](LICENSE)
[![npm version](https://img.shields.io/npm/v/coa-error.svg?style=flat-square)](https://www.npmjs.org/package/coa-error)
[![npm downloads](https://img.shields.io/npm/dm/coa-error.svg?style=flat-square)](http://npm-stat.com/charts.html?package=coa-error)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](https://github.com/coajs/coa-error/pulls)

COA框架基础错误类，用于统一化错误提示

### 安装
```shell
yarn add coa-error
```

### 数据结构

COA错误要求必须定义如下统一参数：
- **code** 错误代码，
- **message** 错误消息

类定义如下

```typescript
class CoaError extends Error {
  name = 'CoaError'

  code: string
  stdout: boolean

  constructor (code: string, message: string, stdout: boolean = true) {
    super(message)
    this.code = code
    this.stdout = stdout
  }

  static message (code: string, message: string): never {
    throw new CoaError(code, message, false)
  }

  static throw (code: string, message: string): never {
    throw new CoaError(code, message)
  }
}
```

### 使用示例

```typescript
import { CoaError } from 'coa-error'


// 定义并抛出一个新的错误
throw new CoaError('User.UserAgeInvaild','用户年龄错误')

// 使用静态方法抛出（可以当做一个语法糖）
CoaError.throw('User.UserAgeInvaild','用户年龄错误')

// 也可以使用message方法，仅仅提示不在stdio显示（由coa上层框架控制，框架外部调用等同于throw）
CoaError.message('User.UserAgeInvaild','用户年龄错误')

```
> 代码中的die和其他文件是旧版用法，后续版本会逐步废弃，不要使用


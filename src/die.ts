import { CoaContextError } from './CoaContextError'
import { CoaError } from './CoaError'

export default new class {

  // 终止代码并抛出错误
  message (code: string, message: string): never {
    throw new CoaError(code, message, false)
  }

  hint (message: string, code: number = 400, mark: number | string = 0): never {
    throw new CoaContextError({ code, mark, message })
  }

  error (message: string, code: number = 400, mark: number | string = 0): never {
    throw new CoaContextError({ code, mark, message, stdout: true })
  }

  custom (custom: string, message: string, code: number = 400, mark: number | string = 0): never {
    throw new CoaContextError({ code, mark, message, custom })
  }

  missing (name: string) {
    return this.error('缺少' + name + '参数')
  }
}
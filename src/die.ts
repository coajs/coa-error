import { CoaContextError } from './CoaContextError'

export default new class {

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
import { echo } from 'coa-echo'
import { CoaContextError } from './CoaContextError'

export default new class {

  custom (custom: string, message: string, code: number = 400, mark: number | string = 0): never {
    throw new CoaContextError({ code, mark, message, custom })
  }

  hint (message: string, code: number = 400, mark: number | string = 0): never {
    throw new CoaContextError({ code, mark, message })
  }

  error (message: string, code: number = 400, mark: number | string = 0): never {
    throw new CoaContextError({ code, mark, message, stdout: true })
  }

  missing (name: string) {
    return this.error('缺少' + name + '参数')
  }

  echo (message: string, code: number = 400, mark: number = 0) {
    echo.error(message)
    return this.error(message, code, mark)
  }
}
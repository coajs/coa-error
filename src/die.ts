export class CoaContextError extends Error {

  code: number
  mark: number | string
  custom: string
  stdout: boolean

  constructor (e: { message: string, code: number, mark: number | string, custom?: string, stdout?: boolean }) {
    super()
    this.name = 'CoaContextError'
    this.message = e.message
    this.code = e.code
    this.mark = e.mark
    this.custom = e.custom || ''
    this.stdout = e.stdout || false
  }
}

export const die = new class {

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
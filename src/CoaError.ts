export class CoaError extends Error {
  name = 'CoaError'

  code: string
  stdout: boolean

  constructor(code: string, message: string, stdout = true) {
    super(message)
    this.code = code
    this.stdout = stdout
  }

  toJSON(): { name: string; code: string; message: string } {
    return { name: this.name, code: this.code, message: this.message }
  }

  toString(): string {
    return `${this.name} ${this.code} ${this.message}`
  }

  static message(code: string, message: string): never {
    throw new CoaError(code, message, false)
  }

  static throw(code: string, message: string): never {
    throw new CoaError(code, message)
  }
}

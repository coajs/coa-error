export class CoaError extends Error {

  name = 'CoaError'

  code: string
  flag: string

  constructor (code: string, message: string, flag: string = '') {
    super(message)
    this.code = code
    this.flag = flag
  }
}
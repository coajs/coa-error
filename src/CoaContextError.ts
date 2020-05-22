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
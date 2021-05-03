import { expect } from 'chai'
import { CoaError } from '../src'

describe('CoaError class test', function () {

  it('new CoaError() instance', function () {
    expect(new CoaError('error code', 'error message')).be.instanceOf(CoaError)
  })

  it('throw new CoaError()', function () {
    function run () {
      throw new CoaError('error code', 'error message')
    }
    expect(run).throw(CoaError)
  })

  it('instance property', function () {

    const code = new CoaError('error code', 'error message')
    const code2 = new CoaError('error code', 'error message', false)

    expect(code).has.property('name', 'CoaError')
    expect(code).has.property('code', 'error code')
    expect(code).has.property('message', 'error message')
    expect(code).has.property('stdout', true)
    expect(code2).has.property('stdout', false)
  })

  it('CoaError.thorw()', function () {
    function run () {
      CoaError.throw('error code', 'error message')
    }
    expect(run).throw(CoaError)
    expect(run).throw().has.property('name', 'CoaError')
    expect(run).throw().has.property('code', 'error code')
    expect(run).throw().has.property('message', 'error message')
    expect(run).throw().has.property('stdout', true)
  })

  it('CoaError.message()', function () {
    function run () {
      CoaError.message('error code', 'error message')
    }
    expect(run).throw(CoaError)
    expect(run).throw().has.property('name', 'CoaError')
    expect(run).throw().has.property('code', 'error code')
    expect(run).throw().has.property('message', 'error message')
    expect(run).throw().has.property('stdout', false)
  })

  it('instance toJSON()', function () {

    const err = new CoaError('error code', 'error message')
    const string = JSON.stringify(err)
    const object = JSON.parse(string)

    expect(string).eq('{"name":"CoaError","code":"error code","message":"error message"}')
    expect(object).deep.equal({ name: 'CoaError', code: 'error code', message: 'error message' })
  })

  it('instance toString()', function () {

    const err = new CoaError('error code', 'error message')

    expect('' + err).eq('CoaError error code error message')
  })

})
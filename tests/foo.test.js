const td = require('testdouble')
const expect = require('expect')

describe('td.replace', () => {
  let mockBar, foo
  beforeEach(() => {
    mockBar = td.replace('../bar', () => 'replacement works')
    foo = require('../foo')
  })
  afterEach(() => {
    td.reset()
  })
  it('works with jest and mocha', () => {
    const result = foo()
    expect(result).toEqual('replacement works')
  })
})

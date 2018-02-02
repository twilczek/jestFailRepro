const td = require('testdouble')
const expect = require('expect')

describe('td.replace', () => {
  let mock, normal
  beforeEach(() => {
    mock = td.replace('../bar', () => 'replacement works')
    normal = require('../foo')
  })
  afterEach(() => {
    td.reset()
  })
  it('works with jest and mocha', () => {
    const result = normal()
    expect(result).toEqual('replacement works')
  })
})

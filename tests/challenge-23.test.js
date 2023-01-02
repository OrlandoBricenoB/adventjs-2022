const assert = require('assert')
const { AssertError } = require('../utils/customErrors.js')

// * Get the function of challenge.
const executeCommands = require('../challenges/challenge-23')

describe('Challenge #23 - El compilador de Santa', () => {
  it('Test #01 - Returns an Array', () => {
    assert.equal(
      Array.isArray(executeCommands([
        'MOV 5,V00',
        'MOV 10,V01',
        'DEC V00',
        'ADD V00,V01',
      ])),
      true
    )
  }, 'The result must be an array')

  it('Test #02 - executeCommands(["MOV 5,V00", "MOV 10,V01", "DEC V00", "ADD V00,V01"])', done => {
    const actualString = JSON.stringify(executeCommands([
      'MOV 5,V00',
      'MOV 10,V01',
      'DEC V00',
      'ADD V00,V01',
    ]))
    const expectedString = JSON.stringify([
      14, 10, 0, 0, 0, 0, 0, 0
    ])

    if (actualString !== expectedString) throw new AssertError(actualString, expectedString)
    done()
  })

  it('Test #03 - executeCommands(["MOV 255,V00", "INC V00", "DEC V01", "DEC V01"])', done => {
    const actualString = JSON.stringify(executeCommands([
      'MOV 255,V00',
      'INC V00',
      'DEC V01',
      'DEC V01'
    ]))
    const expectedString = JSON.stringify([
      0, 254, 0, 0, 0, 0, 0, 0
    ])

    if (actualString !== expectedString) throw new AssertError(actualString, expectedString)
    done()
  })

  it('Test #04 - executeCommands(["MOV 10,V00", "DEC V00", "INC V01", "JMP 1", "INC V06"])', done => {
    const actualString = JSON.stringify(executeCommands([
      'MOV 10,V00',
      'DEC V00',
      'INC V01',
      'JMP 1',
      'INC V06'
    ]))
    const expectedString = JSON.stringify([
      0, 10, 0, 0, 0, 0, 1, 0
    ])

    if (actualString !== expectedString) throw new AssertError(actualString, expectedString)
    done()
  })

  it('Test #05 - executeCommands(["MOV 10,V00", "MOV V00,V01", "MOV V01,V02", "MOV V02,V03", "MOV V03,V04"])', done => {
    const actualString = JSON.stringify(executeCommands([
      'MOV 10,V00',
      'MOV V00,V01',
      'MOV V01,V02',
      'MOV V02,V03',
      'MOV V03,V04'
    ]))
    const expectedString = JSON.stringify([
      10, 10, 10, 10, 10, 0, 0, 0
    ])

    if (actualString !== expectedString) throw new AssertError(actualString, expectedString)
    done()
  })
})

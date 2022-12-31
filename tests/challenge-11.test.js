const assert = require('assert')
const { AssertError } = require('../utils/customErrors.js')

// * Get the function of challenge.
const getCompleted = require('../challenges/challenge-11')

describe('Challenge #11- Papá Noel es Scrum Master', () => {
  it('Test #01 - Returns a string', () => {
    assert.equal(
      typeof getCompleted('01:00:00', '03:00:00') === 'string',
      true
    )
  }, 'The result must be a string')

  it('Test #02 - getCompleted("01:00:00", "03:00:00")', done => {
    const actualString = getCompleted('01:00:00', '03:00:00')
    const expectedString = '1/3'

    if (actualString !== expectedString) throw new AssertError(actualString, expectedString)
    done()
  })

  it('Test #03 - getCompleted("02:00:00", "04:00:00")', done => {
    const actualString = getCompleted('02:00:00', '04:00:00')
    const expectedString = '1/2'

    if (actualString !== expectedString) throw new AssertError(actualString, expectedString)
    done()
  })

  it('Test #04 - getCompleted("01:00:00", "01:00:00")', done => {
    const actualString = getCompleted('01:00:00', '01:00:00')
    const expectedString = '1/1'

    if (actualString !== expectedString) throw new AssertError(actualString, expectedString)
    done()
  })

  it('Test #05 - getCompleted("00:10:00", "01:00:00")', done => {
    const actualString = getCompleted('00:10:00', '01:00:00')
    const expectedString = '1/6'

    if (actualString !== expectedString) throw new AssertError(actualString, expectedString)
    done()
  })

  it('Test #06 - getCompleted("01:10:10", "03:30:30")', done => {
    const actualString = getCompleted('01:10:10', '03:30:30')
    const expectedString = '1/3'

    if (actualString !== expectedString) throw new AssertError(actualString, expectedString)
    done()
  })

  it('Test #07 - getCompleted("02:20:20", "03:30:30")', done => {
    const actualString = getCompleted('02:20:20', '03:30:30')
    const expectedString = '2/3'

    if (actualString !== expectedString) throw new AssertError(actualString, expectedString)
    done()
  })

  it('Test #08 - getCompleted("03:30:30", "05:50:50")', done => {
    const actualString = getCompleted('03:30:30', '05:50:50')
    const expectedString = '3/5'

    if (actualString !== expectedString) throw new AssertError(actualString, expectedString)
    done()
  })
})

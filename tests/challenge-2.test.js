const assert = require('assert')
const { AssertError } = require('../utils/customErrors.js')

// * Get the function of challenge.
const countHours = require('../challenges/challenge-2')

describe('Challenge #02 - Nadie quiere hacer horas extra', () => {
  it('Test #01 - Returns a number', () => {
    assert.equal(
      typeof countHours(2023, ['01/06', '04/01', '12/25']) === 'number',
      true
    )
  }, 'The result must be a number')

  it('Test #02 - countHours(2023, ["01/06", "04/01", "12/25"])', done => {
    const actualString = countHours(2023, ['01/06', '04/01', '12/25'])
    const expectedString = 4

    if (actualString !== expectedString) throw new AssertError(actualString, expectedString)
    done()
  })

  it('Test #03 - countHours(2022, ["01/06", "04/01", "12/25"])', done => {
    const actualString = countHours(2022, ['01/06', '04/01', '12/25'])
    const expectedString = 4

    if (actualString !== expectedString) throw new AssertError(actualString, expectedString)
    done()
  })

  it('Test #04 - countHours(1985, ["01/01", "01/06", "02/02", "02/17", "02/28", "06/03", "12/06", "12/25"])', done => {
    const actualString = countHours(1985, ['01/01', '01/06', '02/02', '02/17', '02/28', '06/03', '12/06', '12/25'])
    const expectedString = 10

    if (actualString !== expectedString) throw new AssertError(actualString, expectedString)
    done()
  })

  it('Test #05 - countHours(2000, ["01/01"])', done => {
    const actualString = countHours(2000, ['01/01'])
    const expectedString = 0

    if (actualString !== expectedString) throw new AssertError(actualString, expectedString)
    done()
  })
})

const assert = require('assert')
const { AssertError } = require('../utils/customErrors.js')

// * Get the function of challenge.
const dryNumber = require('../challenges/challenge-18')

describe('Challenge #18 - ¡Nos quedamos sin tinta!', () => {
  it('Test #01 - Returns an Array', () => {
    assert.equal(
      Array.isArray(dryNumber(1, 15)),
      true
    )
  }, 'The result must be an array')

  it('Test #02 - dryNumber(1, 15)', done => {
    const actualString = JSON.stringify(dryNumber(1, 15))
    const expectedString = JSON.stringify([
      1, 10, 11, 12, 13, 14, 15
    ])

    if (actualString !== expectedString) throw new AssertError(actualString, expectedString)
    done()
  })

  it('Test #03 - dryNumber(2, 20)', done => {
    const actualString = JSON.stringify(dryNumber(2, 20))
    const expectedString = JSON.stringify([
      2,
      12,
      20
    ])

    if (actualString !== expectedString) throw new AssertError(actualString, expectedString)
    done()
  })

  it('Test #04 - dryNumber(3, 33)', done => {
    const actualString = JSON.stringify(dryNumber(3, 33))
    const expectedString = JSON.stringify([
      3, 13, 23, 30, 31, 32, 33
    ])

    if (actualString !== expectedString) throw new AssertError(actualString, expectedString)
    done()
  })

  it('Test #05 - dryNumber(4, 45)', done => {
    const actualString = JSON.stringify(dryNumber(4, 45))
    const expectedString = JSON.stringify([
      4, 14, 24, 34, 40, 41, 42, 43, 44, 45
    ])

    if (actualString !== expectedString) throw new AssertError(actualString, expectedString)
    done()
  })

  it('Test #06 - dryNumber(5, 55)', done => {
    const actualString = JSON.stringify(dryNumber(5, 55))
    const expectedString = JSON.stringify([
      5, 15, 25, 35, 45, 50, 51, 52, 53, 54, 55
    ])

    if (actualString !== expectedString) throw new AssertError(actualString, expectedString)
    done()
  })

  it('Test #07 - dryNumber(9, 8)', done => {
    const actualString = JSON.stringify(dryNumber(9, 8))
    const expectedString = JSON.stringify([])

    if (actualString !== expectedString) throw new AssertError(actualString, expectedString)
    done()
  })
})

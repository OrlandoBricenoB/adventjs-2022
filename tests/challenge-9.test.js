const assert = require('assert')
const { AssertError } = require('../utils/customErrors.js')

// * Get the function of challenge.
const countTime = require('../challenges/challenge-9')

describe('Challenge #09 - Las locas luces de Navidad', () => {
  it('Test #01 - Returns a number', () => {
    assert.equal(
      typeof countTime([0, 1, 1, 0, 1]) === 'number',
      true
    )
  }, 'The result must be a number')

  it('Test #02 - countTime([0, 1, 1, 0, 1])', done => {
    const actualString = countTime([0, 1, 1, 0, 1])
    const expectedString = 7

    if (actualString !== expectedString) throw new AssertError(actualString, expectedString)
    done()
  })

  it('Test #03 - countTime([0, 0, 0, 1])', done => {
    const actualString = countTime([0, 0, 0, 1])
    const expectedString = 21

    if (actualString !== expectedString) throw new AssertError(actualString, expectedString)
    done()
  })

  it('Test #04 - countTime([0, 0, 1, 0, 0])', done => {
    const actualString = countTime([0, 0, 1, 0, 0])
    const expectedString = 28

    if (actualString !== expectedString) throw new AssertError(actualString, expectedString)
    done()
  })

  it('Test #05 - countTime([1, 0, 0, 1, 0, 0])', done => {
    const actualString = countTime([1, 0, 0, 1, 0, 0])
    const expectedString = 14

    if (actualString !== expectedString) throw new AssertError(actualString, expectedString)
    done()
  })

  it('Test #06 - countTime([1, 1, 0, 0, 0, 0])', done => {
    const actualString = countTime([1, 1, 0, 0, 0, 0])
    const expectedString = 28

    if (actualString !== expectedString) throw new AssertError(actualString, expectedString)
    done()
  })

  it('Test #07 - countTime([1, 1, 1])', done => {
    const actualString = countTime([1, 1, 1])
    const expectedString = 0

    if (actualString !== expectedString) throw new AssertError(actualString, expectedString)
    done()
  })
})

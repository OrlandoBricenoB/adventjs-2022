const assert = require('assert')
const { AssertError } = require('../utils/customErrors.js')

// * Get the function of challenge.
const checkJump = require('../challenges/challenge-10')

describe('Challenge #10 - El salto del trineo de Papá Noel', () => {
  it('Test #01 - Returns a boolean', () => {
    assert.equal(
      typeof checkJump([1, 2, 1]) === 'boolean',
      true
    )
  }, 'The result must be a boolean')

  it('Test #02 - checkJump([1, 2, 1])', done => {
    const actualString = checkJump([1, 2, 1])
    const expectedString = true

    if (actualString !== expectedString) throw new AssertError(actualString, expectedString)
    done()
  })

  it('Test #03 - checkJump([1, 3, 8, 5, 2])', done => {
    const actualString = checkJump([1, 3, 8, 5, 2])
    const expectedString = true

    if (actualString !== expectedString) throw new AssertError(actualString, expectedString)
    done()
  })

  it('Test #04 - checkJump([1, 7, 3, 5])', done => {
    const actualString = checkJump([1, 7, 3, 5])
    const expectedString = false

    if (actualString !== expectedString) throw new AssertError(actualString, expectedString)
    done()
  })

  it('Test #05 - checkJump([1, 2, 3, 2, 1])', done => {
    const actualString = checkJump([1, 2, 3, 2, 1])
    const expectedString = true

    if (actualString !== expectedString) throw new AssertError(actualString, expectedString)
    done()
  })

  it('Test #06 - checkJump([1, 2, 2, 2, 1])', done => {
    const actualString = checkJump([1, 2, 2, 2, 1])
    const expectedString = true

    if (actualString !== expectedString) throw new AssertError(actualString, expectedString)
    done()
  })

  it('Test #07 - checkJump([0, 1, 0])', done => {
    const actualString = checkJump([0, 1, 0])
    const expectedString = true

    if (actualString !== expectedString) throw new AssertError(actualString, expectedString)
    done()
  })

  it('Test #08 - checkJump([2, 2, 2, 2])', done => {
    const actualString = checkJump([2, 2, 2, 2])
    const expectedString = false

    if (actualString !== expectedString) throw new AssertError(actualString, expectedString)
    done()
  })

  it('Test #09 - checkJump([1, 2, 3])', done => {
    const actualString = checkJump([1, 2, 3])
    const expectedString = false

    if (actualString !== expectedString) throw new AssertError(actualString, expectedString)
    done()
  })

  it('Test #10 - checkJump([1, 2, 3, 2, 1, 2, 3])', done => {
    const actualString = checkJump([1, 2, 3, 2, 1, 2, 3])
    const expectedString = false

    if (actualString !== expectedString) throw new AssertError(actualString, expectedString)
    done()
  })

  it('Test #11 - checkJump([1, 1000, 900, 800])', done => {
    const actualString = checkJump([1, 1000, 900, 800])
    const expectedString = true

    if (actualString !== expectedString) throw new AssertError(actualString, expectedString)
    done()
  })

  it('Test #12 - checkJump([1, 1000, 100, 800])', done => {
    const actualString = checkJump([1, 1000, 100, 800])
    const expectedString = false

    if (actualString !== expectedString) throw new AssertError(actualString, expectedString)
    done()
  })

  it('Test #13 - checkJump([1, 1, 1, 1, 1, 1, 1, 1, 2, 1])', done => {
    const actualString = checkJump([1, 1, 1, 1, 1, 1, 1, 1, 2, 1])
    const expectedString = true

    if (actualString !== expectedString) throw new AssertError(actualString, expectedString)
    done()
  })

  it('Test #14 - checkJump([1, 2, 3, 1, 3, 1])', done => {
    const actualString = checkJump([1, 2, 3, 1, 3, 1])
    const expectedString = false

    if (actualString !== expectedString) throw new AssertError(actualString, expectedString)
    done()
  })

  it('Test #15 - checkJump([1, 3, 2, 5, 4, 3, 2, 1])', done => {
    const actualString = checkJump([1, 3, 2, 5, 4, 3, 2, 1])
    const expectedString = false

    if (actualString !== expectedString) throw new AssertError(actualString, expectedString)
    done()
  })
})

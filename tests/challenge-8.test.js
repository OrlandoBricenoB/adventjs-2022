const assert = require('assert')
const { AssertError } = require('../utils/customErrors.js')

// * Get the function of challenge.
const checkPart = require('../challenges/challenge-8')

describe('Challenge #08 - ¡Necesitamos un mecánico!', () => {
  it('Test #01 - Returns a boolean', () => {
    assert.equal(
      typeof checkPart('uwu') === 'boolean',
      true
    )
  }, 'The result must be a boolean')

  it('Test #02 - checkPart("uwu")', done => {
    const actualString = checkPart('uwu')
    const expectedString = true

    if (actualString !== expectedString) throw new AssertError(actualString, expectedString)
    done()
  })

  it('Test #03 - checkPart("midu")', done => {
    const actualString = checkPart('midu')
    const expectedString = false

    if (actualString !== expectedString) throw new AssertError(actualString, expectedString)
    done()
  })

  it('Test #04 - checkPart("lolol")', done => {
    const actualString = checkPart('lolol')
    const expectedString = true

    if (actualString !== expectedString) throw new AssertError(actualString, expectedString)
    done()
  })

  it('Test #05 - checkPart("yolooloy")', done => {
    const actualString = checkPart('yolooloy')
    const expectedString = true

    if (actualString !== expectedString) throw new AssertError(actualString, expectedString)
    done()
  })

  it('Test #06 - checkPart("zzzoonzzz")', done => {
    const actualString = checkPart('zzzoonzzz')
    const expectedString = true

    if (actualString !== expectedString) throw new AssertError(actualString, expectedString)
    done()
  })
})

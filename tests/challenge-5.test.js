const assert = require('assert')
const { AssertError } = require('../utils/customErrors.js')

// * Get the function of challenge.
const getMaxGifts = require('../challenges/challenge-5')

describe('Challenge #05 - Optimizando viajes de Santa', () => {
  it('Test #01 - Returns a number', () => {
    assert.equal(
      typeof getMaxGifts([12, 3, 11, 5, 7], 20, 3) === 'number',
      true
    )
  }, 'The result must be a boolean')

  it('Test #02 - getMaxGifts([12, 3, 11, 5, 7], 20, 3)', done => {
    const actualString = getMaxGifts([12, 3, 11, 5, 7], 20, 3)
    const expectedString = 20

    if (actualString !== expectedString) throw new AssertError(actualString, expectedString)
    done()
  })

  it('Test #03 - getMaxGifts([50], 15, 1)', done => {
    const actualString = getMaxGifts([50], 15, 1)
    const expectedString = 0

    if (actualString !== expectedString) throw new AssertError(actualString, expectedString)
    done()
  })

  it('Test #04 - getMaxGifts([50], 100, 1)', done => {
    const actualString = getMaxGifts([50], 100, 1)
    const expectedString = 50

    if (actualString !== expectedString) throw new AssertError(actualString, expectedString)
    done()
  })

  it('Test #05 - getMaxGifts([50, 70], 100, 1)', done => {
    const actualString = getMaxGifts([50, 70], 100, 1)
    const expectedString = 70

    if (actualString !== expectedString) throw new AssertError(actualString, expectedString)
    done()
  })

  it('Test #06 - getMaxGifts([50, 70, 30], 100, 2)', done => {
    const actualString = getMaxGifts([50, 70, 30], 100, 2)
    const expectedString = 100

    if (actualString !== expectedString) throw new AssertError(actualString, expectedString)
    done()
  })

  it('Test #07 - getMaxGifts([50, 70, 30], 100, 3)', done => {
    const actualString = getMaxGifts([50, 70, 30], 100, 3)
    const expectedString = 100

    if (actualString !== expectedString) throw new AssertError(actualString, expectedString)
    done()
  })

  it('Test #08 - getMaxGifts([50, 10, 40, 1000, 500, 200], 199, 4)', done => {
    const actualString = getMaxGifts([50, 10, 40, 1000, 500, 200], 199, 4)
    const expectedString = 100

    if (actualString !== expectedString) throw new AssertError(actualString, expectedString)
    done()
  })

  it('Test #09 - getMaxGifts([50, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], 1000, 1000)', done => {
    const actualString = getMaxGifts([50, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], 1000, 1000)
    const expectedString = 115

    if (actualString !== expectedString) throw new AssertError(actualString, expectedString)
    done()
  })
})

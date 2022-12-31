const assert = require('assert')
const { AssertError } = require('../utils/customErrors.js')

// * Get the function of challenge.
const getOptimalPath = require('../challenges/challenge-14')

describe('Challenge #14 - El mejor camino', () => {
  it('Test #01 - Returns a number', () => {
    assert.equal(
      typeof getOptimalPath([[0], [7, 4], [2, 4, 6]]) === 'number',
      true
    )
  }, 'The result must be a number')

  it('Test #02 - getOptimalPath([[0], [7, 4], [2, 4, 6]])', done => {
    const actualString = getOptimalPath([[0], [7, 4], [2, 4, 6]])
    const expectedString = 8

    if (actualString !== expectedString) throw new AssertError(actualString, expectedString)
    done()
  })

  it('Test #03 - getOptimalPath([[0], [2, 3]])', done => {
    const actualString = getOptimalPath([[0], [2, 3]])
    const expectedString = 2

    if (actualString !== expectedString) throw new AssertError(actualString, expectedString)
    done()
  })

  it('Test #04 - getOptimalPath([[0], [3, 4], [9, 8, 1]])', done => {
    const actualString = getOptimalPath([[0], [3, 4], [9, 8, 1]])
    const expectedString = 5

    if (actualString !== expectedString) throw new AssertError(actualString, expectedString)
    done()
  })

  it('Test #05 - getOptimalPath([[1], [1, 5], [7, 5, 8], [9, 4, 1, 3]])', done => {
    const actualString = getOptimalPath([[1], [1, 5], [7, 5, 8], [9, 4, 1, 3]])
    const expectedString = 8

    if (actualString !== expectedString) throw new AssertError(actualString, expectedString)
    done()
  })

  it('Test #06 - getOptimalPath([[1], [1, 5], [7, 5, 8], [9, 4, 1, 3], [-1, -1, -1, -1, -1]])', done => {
    const actualString = getOptimalPath([[1], [1, 5], [7, 5, 8], [9, 4, 1, 3], [-1, -1, -1, -1, -1]])
    const expectedString = 7

    if (actualString !== expectedString) throw new AssertError(actualString, expectedString)
    done()
  })
})

const assert = require('assert')
const { AssertError } = require('../utils/customErrors.js')

// * Get the function of challenge.
const checkStepNumbers = require('../challenges/challenge-22')

describe('Challenge #22 - Luces sincronizadas', () => {
  it('Test #01 - Returns a boolean', () => {
    assert.equal(
      typeof checkStepNumbers(
        ["tree_1", "tree_2", "house", "tree_1", "tree_2", "house"],
        [1, 33, 10, 2, 44, 20]
      ) === 'boolean',
      true
    )
  }, 'The result must be a boolean')

  it('Test #02 - checkStepNumbers(["tree_1", "tree_2", "house", "tree_1", "tree_2", "house"], [1, 33, 10, 2, 44, 20])', done => {
    const actualString = checkStepNumbers(
      ["tree_1", "tree_2", "house", "tree_1", "tree_2", "house"],
      [1, 33, 10, 2, 44, 20]
    )
    const expectedString = true

    if (actualString !== expectedString) throw new AssertError(actualString, expectedString)
    done()
  })

  it('Test #03 - checkStepNumbers(["tree_1", "tree_1", "house"], [2, 1, 10])', done => {
    const actualString = checkStepNumbers(["tree_1", "tree_1", "house"], [2, 1, 10])
    const expectedString = false

    if (actualString !== expectedString) throw new AssertError(actualString, expectedString)
    done()
  })

  it('Test #04 - checkStepNumbers(["tree_1", "tree_1", "house"], [1, 2, 10])', done => {
    const actualString = checkStepNumbers(["tree_1", "tree_1", "house"], [1, 2, 10])
    const expectedString = true

    if (actualString !== expectedString) throw new AssertError(actualString, expectedString)
    done()
  })

  it('Test #05 - checkStepNumbers(["house", "house", "tree_1", "tree_1", "house", "tree_2", "tree_2", "tree_3"], [5, 2, 1, 2, 3, 4, 5, 6])', done => {
    const actualString = checkStepNumbers(["house", "house", "tree_1", "tree_1", "house", "tree_2", "tree_2", "tree_3"], [5, 2, 1, 2, 3, 4, 5, 6])
    const expectedString = false

    if (actualString !== expectedString) throw new AssertError(actualString, expectedString)
    done()
  })
})

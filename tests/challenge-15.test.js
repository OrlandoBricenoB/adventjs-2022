const assert = require('assert')
const { AssertError } = require('../utils/customErrors.js')

// * Get the function of challenge.
const decorateTree = require('../challenges/challenge-15')

describe('Challenge #15 - Decorando el árbol de Navidad', () => {
  it('Test #01 - Returns an Array', () => {
    assert.equal(
      Array.isArray(decorateTree('B P R P')),
      true
    )
  }, 'The result must be an array')

  it('Test #02 - decorateTree("B P R P")', done => {
    const actualString = JSON.stringify(decorateTree('B P R P'))
    const expectedString = JSON.stringify(["R", "P B", "R B B", "B P R P"])

    if (actualString !== expectedString) throw new AssertError(actualString, expectedString)
    done()
  })

  it('Test #03 - decorateTree("B B")', done => {
    const actualString = JSON.stringify(decorateTree('B B'))
    const expectedString = JSON.stringify(["B", "B B"])

    if (actualString !== expectedString) throw new AssertError(actualString, expectedString)
    done()
  })

  it('Test #04 - decorateTree("B B P R P R R")', done => {
    const actualString = JSON.stringify(decorateTree('B B P R P R R'))
    const expectedString = JSON.stringify([
      "B",
      "R P",
      "B P P",
      "P R B R",
      "P P B B P",
      "B R B B B R",
      "B B P R P R R"
    ])

    if (actualString !== expectedString) throw new AssertError(actualString, expectedString)
    done()
  })

  it('Test #05 - decorateTree("R R P R R")', done => {
    const actualString = JSON.stringify(decorateTree('R R P R R'))
    const expectedString = JSON.stringify([
      "R",
      "R R",
      "P B P",
      "R B B R",
      "R R P R R"
    ])

    if (actualString !== expectedString) throw new AssertError(actualString, expectedString)
    done()
  })
})

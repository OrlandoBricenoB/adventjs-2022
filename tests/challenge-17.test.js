const assert = require('assert')
const { AssertError } = require('../utils/customErrors.js')

// * Get the function of challenge.
const carryGifts = require('../challenges/challenge-17')

describe('Challenge #17 - Llevar regalos en bolsas', () => {
  it('Test #01 - Returns an Array', () => {
    assert.equal(
      Array.isArray(carryGifts(['game', 'bike', 'book', 'toy'], 10)),
      true
    )
  }, 'The result must be an array')

  it('Test #02 - carryGifts(["game", "bike", "book", "toy"], 10)', done => {
    const actualString = JSON.stringify(carryGifts(['game', 'bike', 'book', 'toy'], 10))
    const expectedString = JSON.stringify([
      "game bike",
      "book toy"
    ])

    if (actualString !== expectedString) throw new AssertError(actualString, expectedString)
    done()
  })

  it('Test #03 - carryGifts(["game", "bike", "book", "toy"], 7)', done => {
    const actualString = JSON.stringify(carryGifts(['game', 'bike', 'book', 'toy'], 7))
    const expectedString = JSON.stringify([
      "game",
      "bike",
      "book toy"
    ])

    if (actualString !== expectedString) throw new AssertError(actualString, expectedString)
    done()
  })

  it('Test #04 - carryGifts(["game", "bike", "book", "toy"], 4)', done => {
    const actualString = JSON.stringify(carryGifts(['game', 'bike', 'book', 'toy'], 4))
    const expectedString = JSON.stringify([
      "game",
      "bike",
      "book",
      "toy"
    ])

    if (actualString !== expectedString) throw new AssertError(actualString, expectedString)
    done()
  })

  it('Test #05 - carryGifts(["toy", "gamme", "toy", "bike"], 6)', done => {
    const actualString = JSON.stringify(carryGifts(['toy', 'gamme', 'toy', 'bike'], 6))
    const expectedString = JSON.stringify([
      "toy",
      "gamme",
      "toy",
      "bike"
    ])

    if (actualString !== expectedString) throw new AssertError(actualString, expectedString)
    done()
  })

  it('Test #06 - carryGifts(["toy", "toy", "toy", "toy"], 2)', done => {
    const actualString = JSON.stringify(carryGifts(['toy', 'toy', 'toy', 'toy'], 2))
    const expectedString = JSON.stringify([])

    if (actualString !== expectedString) throw new AssertError(actualString, expectedString)
    done()
  })

  it('Test #07 - carryGifts(["toy", "toy", "disk", "disk", "toy", "toy"], 7)', done => {
    const actualString = JSON.stringify(carryGifts(['toy', 'toy', 'disk', 'disk', 'toy', 'toy'], 7))
    const expectedString = JSON.stringify([
      "toy toy",
      "disk",
      "disk toy",
      "toy"
    ])

    if (actualString !== expectedString) throw new AssertError(actualString, expectedString)
    done()
  })
})

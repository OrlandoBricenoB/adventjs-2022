const assert = require('assert')
const { AssertError } = require('../utils/customErrors.js')

// * Get the function of challenge.
const getGiftsToRefill = require('../challenges/challenge-7')

describe('Challenge #07 - Haciendo inventario de regalos', () => {
  const a1 = ['bici', 'coche', 'bici', 'bici']
  const a2 = ['coche', 'bici', 'muñeca', 'coche']
  const a3 = ['bici', 'pc', 'pc']

  it('Test #01 - Returns an Array', () => {
    assert.equal(
      Array.isArray(getGiftsToRefill(a1, a2, a3)),
      true
    )
  }, 'The result must be an array')

  it('Test #02', done => {
    const a1 = ['bici', 'coche', 'bici', 'bici']
    const a2 = ['coche', 'bici', 'muñeca', 'coche']
    const a3 = ['bici', 'pc', 'pc']

    const actualString = JSON.stringify(getGiftsToRefill(a1, a2, a3))
    const expectedString = JSON.stringify(['muñeca', 'pc'])

    if (actualString !== expectedString) throw new AssertError(actualString, expectedString)
    done()
  })

  it('Test #03 - getGiftsToRefill([], [], [])', done => {
    const actualString = JSON.stringify(getGiftsToRefill([], [], []))
    const expectedString = JSON.stringify([])

    if (actualString !== expectedString) throw new AssertError(actualString, expectedString)
    done()
  })

  it('Test #04 - getGiftsToRefill(["a", "a"], ["a", "a"], ["a", "a"])', done => {
    const actualString = JSON.stringify(getGiftsToRefill(['a', 'a'], ['a', 'a'], ['a', 'a']))
    const expectedString = JSON.stringify([])

    if (actualString !== expectedString) throw new AssertError(actualString, expectedString)
    done()
  })

  it('Test #05 - getGiftsToRefill(["a", "a"], ["b", "b"], ["c", "c"])', done => {
    const actualString = JSON.stringify(getGiftsToRefill(['a', 'a'], ['b', 'b'], ['c', 'c']))
    const expectedString = JSON.stringify(['a', 'b', 'c'])

    if (actualString !== expectedString) throw new AssertError(actualString, expectedString)
    done()
  })

  it('Test #06 - getGiftsToRefill(["a", "b"], ["c", "d"], ["e", "f"])', done => {
    const actualString = JSON.stringify(getGiftsToRefill(['a', 'b'], ['c', 'd'], ['e', 'f']))
    const expectedString = JSON.stringify(['a', 'b', 'c', 'd', 'e', 'f'])

    if (actualString !== expectedString) throw new AssertError(actualString, expectedString)
    done()
  })
})

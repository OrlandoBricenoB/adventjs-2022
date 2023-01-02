const assert = require('assert')
const { AssertError } = require('../utils/customErrors.js')

// * Get the function of challenge.
const sortToys = require('../challenges/challenge-19')

describe('Challenge #19 - ¡Ordenando los juguetes!', () => {
  it('Test #01 - Returns an Array', () => {
    assert.equal(
      Array.isArray(sortToys(['ball', 'doll', 'car', 'puzzle'], [2, 3, 1, 0])),
      true
    )
  }, 'The result must be an array')

  it('Test #02 - sortToys(["ball", "doll", "car", "puzzle"], [2, 3, 1, 0])', done => {
    const actualString = JSON.stringify(sortToys(['ball', 'doll', 'car', 'puzzle'], [2, 3, 1, 0]))
    const expectedString = JSON.stringify([
      "puzzle",
      "car",
      "ball",
      "doll"
    ])

    if (actualString !== expectedString) throw new AssertError(actualString, expectedString)
    done()
  })

  it('Test #03 - sortToys(["pc", "xbox", "ps4", "switch", "nintendo"], [3, 1, 0, 2, 4])', done => {
    const actualString = JSON.stringify(sortToys(['pc', 'xbox', 'ps4', 'switch', 'nintendo'], [3, 1, 0, 2, 4]))
    const expectedString = JSON.stringify([
      "ps4",
      "xbox",
      "switch",
      "pc",
      "nintendo"
    ])

    if (actualString !== expectedString) throw new AssertError(actualString, expectedString)
    done()
  })

  it('Test #04 - sortToys(["pc", "xbox", "ps4", "switch", "nintendo"], [8, 6, 5, 7, 9])', done => {
    const actualString = JSON.stringify(sortToys(['pc', 'xbox', 'ps4', 'switch', 'nintendo'], [8, 6, 5, 7, 9]))
    const expectedString = JSON.stringify([
      "ps4",
      "xbox",
      "switch",
      "pc",
      "nintendo"
    ])

    if (actualString !== expectedString) throw new AssertError(actualString, expectedString)
    done()
  })

  it('Test #05 - sortToys(["a", "b", "c", "d", "e", "f", "g", "h", "j", "k", "l"], [1112, 1113, 1114, 1115, 1116, 1117, 1118, 1119, 1120, 1121, 1111])', done => {
    const actualString = JSON.stringify(sortToys(['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'j', 'k', 'l'], [1112, 1113, 1114, 1115, 1116, 1117, 1118, 1119, 1120, 1121, 1111]))
    const expectedString = JSON.stringify([
      "l", "a", "b", "c", "d", "e", "f", "g", "h", "j", "k"
    ])

    if (actualString !== expectedString) throw new AssertError(actualString, expectedString)
    done()
  })
})

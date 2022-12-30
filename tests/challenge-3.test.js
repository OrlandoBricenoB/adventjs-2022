const assert = require('assert')
const { AssertError } = require('../utils/customErrors.js')

// * Get the function of challenge.
const distributeGifts = require('../challenges/challenge-3')

describe('Challenge #03 - ¿Cuántas cajas de regalos puede llevar Papá Noel?', () => {
  const packOfGifts = ['book', 'doll', 'ball']
  const reindeers = ['dasher', 'dancer']

  it('Test #01 - Returns a number', () => {
    assert.equal(
      typeof distributeGifts(packOfGifts, reindeers) === 'number',
      true
    )
  }, 'The result must be a number')

  it('Test #02', done => {
    const packOfGifts = ['book', 'doll', 'ball']
    const reindeers = ['dasher', 'dancer']

    const actualString = distributeGifts(packOfGifts, reindeers)
    const expectedString = 2

    if (actualString !== expectedString) throw new AssertError(actualString, expectedString)
    done()
  })

  it('Test #03', done => {
    const actualString = distributeGifts(['a', 'b', 'c'], ['d', 'e'])
    const expectedString = 1

    if (actualString !== expectedString) throw new AssertError(actualString, expectedString)
    done()
  })

  it('Test #04 - it should return 0 if reindeers can\'t carry any pack:', done => {
    const actualString = distributeGifts(['videogames', 'console'], ['midu'])
    const expectedString = 0

    if (actualString !== expectedString) throw new AssertError(actualString, expectedString)
    done()
  })

  it('Test #05', done => {
    const actualString = distributeGifts(['game', 'videoconsole', 'computer'], ['midudev', 'pheralb', 'codingwithdani', 'carlosble', 'blasco', 'facundocapua', 'madeval', 'memxd'])
    const expectedString = 5

    if (actualString !== expectedString) throw new AssertError(actualString, expectedString)
    done()
  })

  it('Test #06', done => {
    const actualString = distributeGifts(['music'], ['midudev', 'pheralb', 'codingwithdani', 'carlosble', 'blasco', 'facundocapua', 'madeval', 'memxd'])
    const expectedString = 26

    if (actualString !== expectedString) throw new AssertError(actualString, expectedString)
    done()
  })
})

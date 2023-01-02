const assert = require('assert')
const { AssertError } = require('../utils/customErrors.js')

// * Get the function of challenge.
const canExit = require('../challenges/challenge-24')

describe('Challenge #24 - ', () => {
  it('Test #01 - Returns a boolean', () => {
    assert.equal(
      typeof canExit([
        [' ', ' ', 'W', ' ', 'S'],
        [' ', ' ', ' ', ' ', ' '],
        [' ', ' ', ' ', 'W', ' '],
        ['W', 'W', ' ', 'W', 'W'],
        [' ', ' ', ' ', ' ', 'E']
      ]) === 'boolean',
      true
    )
  }, 'The result must be a boolean')

  it('Test #02', done => {
    const actualString = canExit([
      [' ', ' ', 'W', ' ', 'S'],
      [' ', ' ', ' ', ' ', ' '],
      [' ', ' ', ' ', 'W', ' '],
      ['W', 'W', ' ', 'W', 'W'],
      [' ', ' ', ' ', ' ', 'E']
    ])
    const expectedString = true

    if (actualString !== expectedString) throw new AssertError(actualString, expectedString)
    done()
  })

  it('Test #03', done => {
    const actualString = canExit([
      [' ', ' ', 'W', 'W', 'S'],
      [' ', ' ', ' ', 'W', ' '],
      [' ', ' ', ' ', 'W', ' '],
      ['W', 'W', ' ', 'W', 'W'],
      [' ', ' ', ' ', ' ', 'E']
    ])
    const expectedString = false

    if (actualString !== expectedString) throw new AssertError(actualString, expectedString)
    done()
  })

  it('Test #04', done => {
    const actualString = canExit([
      [' ', ' ', 'W', 'W', 'S'],
      [' ', ' ', ' ', 'W', ' '],
      [' ', ' ', ' ', 'W', ' '],
      ['W', 'W', ' ', ' ', 'W'],
      [' ', ' ', ' ', ' ', 'E']
    ])    
    const expectedString = false

    if (actualString !== expectedString) throw new AssertError(actualString, expectedString)
    done()
  })

  it('Test #05', done => {
    const actualString = canExit([
      ['E', ' ', ' ', ' ', 'S']
    ])
    const expectedString = true

    if (actualString !== expectedString) throw new AssertError(actualString, expectedString)
    done()
  })

  it('Test #06', done => {
    const actualString = canExit([
      ['E', ' ', 'W', ' ', 'S']
    ])
    const expectedString = false

    if (actualString !== expectedString) throw new AssertError(actualString, expectedString)
    done()
  })

  it('Test #07', done => {
    const actualString = canExit([
      ['E', ' ', 'W', ' ', 'S']
    ])
    const expectedString = false

    if (actualString !== expectedString) throw new AssertError(actualString, expectedString)
    done()
  })

  it('Test #08', done => {
    const actualString = canExit([
      ['E', ' ', 'W', ' ', 'S'],
      [' ', ' ', ' ', ' ', ' '],
    ])
    
    const expectedString = true

    if (actualString !== expectedString) throw new AssertError(actualString, expectedString)
    done()
  })

  it('Test #09', done => {
    const actualString = canExit([
      ['E', ' ', 'W', ' ', 'S'],
      [' ', ' ', ' ', ' ', ' '],
      ['W', 'W', 'W', 'W', 'W'],
    ])
    const expectedString = true

    if (actualString !== expectedString) throw new AssertError(actualString, expectedString)
    done()
  })

  it('Test #10', done => {
    const actualString = canExit([
      ['E', ' ', 'W', ' ', 'S'],
      [' ', ' ', 'W', ' ', ' '],
      ['W', 'W', 'W', 'W', 'W'],
    ])
    const expectedString = false

    if (actualString !== expectedString) throw new AssertError(actualString, expectedString)
    done()
  })

  it('Test #11', done => {
    const actualString = canExit([
      ['E', 'S', 'W', 'W', 'W'],
      ['W', 'W', 'W', 'W', 'W'],
      ['W', 'W', 'W', 'W', 'W']
    ])
    const expectedString = true

    if (actualString !== expectedString) throw new AssertError(actualString, expectedString)
    done()
  })
})

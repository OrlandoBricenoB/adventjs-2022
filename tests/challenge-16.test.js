const assert = require('assert')
const { AssertError } = require('../utils/customErrors.js')

// * Get the function of challenge.
const fixLetter = require('../challenges/challenge-16')

describe('Challenge #16 - Arreglando las cartas de Papá Noel', () => {
  it('Test #01 - Returns a string', () => {
    assert.equal(
      typeof fixLetter(` hello,  how are you??     do you know if santa claus exists?  i really hope he does!  bye  `) === 'string',
      true
    )
  }, 'The result must be a string')

  it('Test #02 - fixLetter(` hello,  how are you??     do you know if santa claus exists?  i really hope he does!  bye  `)', done => {
    const actualString = fixLetter(` hello,  how are you??     do you know if santa claus exists?  i really hope he does!  bye  `)
    const expectedString = 'Hello, how are you? Do you know if Santa Claus exists? I really hope he does! Bye.'

    if (actualString !== expectedString) throw new AssertError(actualString, expectedString)
    done()
  })

  it('Test #03 - fixLetter("  Hi Santa claus. I\'m a girl from Barcelona , Spain . please, send me a bike.  Is it possible?")', done => {
    const actualString = fixLetter("  Hi Santa claus. I'm a girl from Barcelona , Spain . please, send me a bike.  Is it possible?")
    const expectedString = "Hi Santa Claus. I'm a girl from Barcelona, Spain. Please, send me a bike. Is it possible?"

    if (actualString !== expectedString) throw new AssertError(actualString, expectedString)
    done()
  })

  it('Test #04 - fixLetter("  hi    santa    claus ")', done => {
    const actualString = fixLetter("  hi    santa    claus ")
    const expectedString = "Hi Santa Claus."

    if (actualString !== expectedString) throw new AssertError(actualString, expectedString)
    done()
  })

  it('Test #05 - fixLetter("  hi    santa    claus . santa claus is the best  ")', done => {
    const actualString = fixLetter("  hi    santa    claus . santa claus is the best  ")
    const expectedString = "Hi Santa Claus. Santa Claus is the best."

    if (actualString !== expectedString) throw new AssertError(actualString, expectedString)
    done()
  })

  it('Test #06 - fixLetter("  hi,santa claus. are you there ?   ")', done => {
    const actualString = fixLetter('  hi,santa claus. are you there ?   ')
    const expectedString = "Hi, Santa Claus. Are you there?"

    if (actualString !== expectedString) throw new AssertError(actualString, expectedString)
    done()
  })

  it('Test #07 - fixLetter("Hey santa Claus .  I want a bike.   I want a videogame! ")', done => {
    const actualString = fixLetter("Hey santa Claus .  I want a bike.   I want a videogame! ")
    const expectedString = "Hey Santa Claus. I want a bike. I want a videogame!"

    if (actualString !== expectedString) throw new AssertError(actualString, expectedString)
    done()
  })
})

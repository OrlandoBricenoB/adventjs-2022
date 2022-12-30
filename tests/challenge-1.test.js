const assert = require('assert')
const { AssertError } = require('../utils/customErrors.js')

// * Get the function of challenge.
const wrapping = require('../challenges/challenge-1')

describe('Challenge #01 - ¡Automatizando envolver regalos de navidad!', () => {
  it('Test #01 - Returns an Array', () => {
    assert.equal(
      Array.isArray(
        wrapping(['cat', 'game', 'socks'])
      ),
      true
    )
  }, 'The result must be an array')

  it('Test #02 - wrapping(["cat", "game", "socks"])', done => {
    const actualString = JSON.stringify(wrapping(['cat', 'game', 'socks']))
    const expectedString = JSON.stringify([
      '*****\n*cat*\n*****',
      '******\n*game*\n******',
      '*******\n*socks*\n*******'
    ])

    if (actualString !== expectedString) throw new AssertError(actualString, expectedString)
    done()
  })
  
  it('Test #03 - wrapping(["midu", "orlandobricenob"])', done => {
    const actualString = JSON.stringify(wrapping(['midu', 'orlandobricenob']))
    const expectedString = JSON.stringify([
      '******\n*midu*\n******',
      '*****************\n*orlandobricenob*\n*****************'
    ])

    if (actualString !== expectedString) throw new AssertError(actualString, expectedString)
    done()
  })
  
  it('Test #04 - wrapping(["a"])', done => {
    const actualString = JSON.stringify(wrapping(['a']))
    const expectedString = JSON.stringify([
      '***\n*a*\n***'
    ])

    if (actualString !== expectedString) throw new AssertError(actualString, expectedString)
    done()
  })
  
  it('Test #05 - Wrapping an empty array should return an empty array', done => {
    const actualString = JSON.stringify(wrapping([]))
    const expectedString = JSON.stringify([])

    if (actualString !== expectedString) throw new AssertError(actualString, expectedString)
    done()
  })
})



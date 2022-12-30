const assert = require('assert')
const { AssertError } = require('../utils/customErrors.js')

// * Get the function of challenge.
const fitsInOneBox = require('../challenges/challenge-4')

describe('Challenge #04 - Una caja dentro de otra caja y otra...', () => {
  it('Test #01 - Returns a boolean', () => {
    assert.equal(
      typeof fitsInOneBox([
        { l: 1, w: 1, h: 10 },
        { l: 3, w: 3, h: 12 },
        { l: 2, w: 2, h: 1 }
      ]) === 'boolean',
      true
    )
  }, 'The result must be a boolean')

  it('Test #02 - fitsInOneBox([{ l: 1, w: 1, h: 10 }, { l: 3, w: 3, h: 12 }, { l: 2, w: 2, h: 1 }])', done => {
    const actualString = fitsInOneBox([
      { l: 1, w: 1, h: 10 },
      { l: 3, w: 3, h: 12 },
      { l: 2, w: 2, h: 1 }
    ])
    const expectedString = false

    if (actualString !== expectedString) throw new AssertError(actualString, expectedString)
    done()
  })

  it('Test #03 - fitsInOneBox([{ l: 1, w: 1, h: 1 }, { l: 2, w: 2, h: 2 }])', done => {
    const actualString = fitsInOneBox([
      { l: 1, w: 1, h: 1 },
      { l: 2, w: 2, h: 2 }
    ])
    const expectedString = true

    if (actualString !== expectedString) throw new AssertError(actualString, expectedString)
    done()
  })

  it('Test #04 - fitsInOneBox([{ l: 1, w: 1, h: 1 }, { l: 2, w: 2, h: 2 }, { l: 3, w: 1, h: 3 }])', done => {
    const actualString = fitsInOneBox([
      { l: 1, w: 1, h: 1 },
      { l: 2, w: 2, h: 2 },
      { l: 3, w: 1, h: 3 }
    ])
    const expectedString = false

    if (actualString !== expectedString) throw new AssertError(actualString, expectedString)
    done()
  })

  it('Test #05 - fitsInOneBox([{ l: 1, w: 1, h: 1 }, { l: 2, w: 2, h: 2 }, { l: 2, w: 10, h: 2}])', done => {
    const actualString = fitsInOneBox([
      { l: 1, w: 1, h: 1 },
      { l: 2, w: 2, h: 2 },
      { l: 2, w: 10, h: 2}
    ])
    const expectedString = false

    if (actualString !== expectedString) throw new AssertError(actualString, expectedString)
    done()
  })

  it('Test #06 - fitsInOneBox([{ l: 1, w: 1, h: 1 }, { l: 3, w: 3, h: 3 }, { l: 2, w: 2, h: 2 }])', done => {
    const actualString = fitsInOneBox([
      { l: 1, w: 1, h: 1 },
      { l: 3, w: 3, h: 3 },
      { l: 2, w: 2, h: 2 }
    ])
    const expectedString = true

    if (actualString !== expectedString) throw new AssertError(actualString, expectedString)
    done()
  })
})

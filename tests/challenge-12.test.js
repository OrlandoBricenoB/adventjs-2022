const assert = require('assert')
const { AssertError } = require('../utils/customErrors.js')

// * Get the function of challenge.
const selectSleigh = require('../challenges/challenge-12')

describe('Challenge #12 - Trineos eléctricos, ¡guau!', () => {
  it('Test #01 - Returns a string', () => {
    assert.equal(
      typeof selectSleigh(1, [
        { name: 'pheralb', consumption: 0.3 },
        { name: 'TMChein', consumption: 0.5 }
      ]) === 'string',
      true
    )
  }, 'The result must be a string')

  it('Test #02 - selectSleigh(1, [{ name: "pheralb", consumption: 0.3 }, { name: "TMChein", consumption: 0.5 }])', done => {
    const actualString = selectSleigh(1, [
      { name: 'pheralb', consumption: 0.3 },
      { name: 'TMChein', consumption: 0.5 }
    ])
    const expectedString = 'TMChein'

    if (actualString !== expectedString) throw new AssertError(actualString, expectedString)
    done()
  })

  it('Test #03 - selectSleigh(10, [{ name: "Pedrosillano", consumption: 1 }, { name: "SamarJaffal", consumption: 5 }])', done => {
    const actualString = selectSleigh(10, [
      { name: 'Pedrosillano', consumption: 1 },
      { name: 'SamarJaffal', consumption: 5 }
    ])
    const expectedString = 'Pedrosillano'

    if (actualString !== expectedString) throw new AssertError(actualString, expectedString)
    done()
  })

  it('Test #04 - selectSleigh(10, [{ name: "Pedrosillano", consumption: 1 }, { name: "SamarJaffal", consumption: 2 }, { name: "marcospage", consumption: 3 }])', done => {
    const actualString = selectSleigh(10, [
      { name: 'Pedrosillano', consumption: 1 },
      { name: 'SamarJaffal', consumption: 2 },
      { name: 'marcospage', consumption: 3 }
    ])
    const expectedString = 'SamarJaffal'

    if (actualString !== expectedString) throw new AssertError(actualString, expectedString)
    done()
  })

  it('Test #05 - selectSleigh(50, [{ name: "Pedrosillano", consumption: 1 }, { name: "SamarJaffal", consumption: 2 }, { name: "marcospage", consumption: 3 }])', done => {
    const actualString = selectSleigh(50, [
      { name: 'Pedrosillano', consumption: 1 },
      { name: 'SamarJaffal', consumption: 2 },
      { name: 'marcospage', consumption: 3 }
    ])
    const expectedString = null

    if (actualString !== expectedString) throw new AssertError(actualString, expectedString)
    done()
  })
})

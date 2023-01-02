const assert = require('assert')
const { AssertError } = require('../utils/customErrors.js')

// * Get the function of challenge.
const printTable = require('../challenges/challenge-21')

describe('Challenge #21 - Creando la tabla de regalos', () => {
  it('Test #01 - Returns a string', () => {
    assert.equal(
      typeof printTable([
        { name: 'PlayStation 5', quantity: 9234782374892 },
        { name: 'Book Learn Web Dev', quantity: 23531 }
      ]) === 'string',
      true
    )
  }, 'The result must be a string')

  it('Test #02 - printTable([{ name: "PlayStation 5", quantity: 9234782374892 }, { name: "Book Learn Web Dev", quantity: 23531 }])', done => {
    const actualString = printTable([
      { name: 'PlayStation 5', quantity: 9234782374892 },
      { name: 'Book Learn Web Dev', quantity: 23531 }
    ])
    const expectedString = "++++++++++++++++++++++++++++++++++++++\n| Gift               | Quantity      |\n| ------------------ | ------------- |\n| PlayStation 5      | 9234782374892 |\n| Book Learn Web Dev | 23531         |\n**************************************"

    if (actualString !== expectedString) throw new AssertError(actualString, expectedString)
    done()
  })

  it('Test #03 - printTable([{ name: "Game", quantity: 2 }, { name: "Bike", quantity: 1 }, { name: "Book", quantity: 3 }])', done => {
    const actualString = printTable([
      { name: 'Game', quantity: 2 },
      { name: 'Bike', quantity: 1 },
      { name: 'Book', quantity: 3 }
    ])
    const expectedString = "+++++++++++++++++++\n| Gift | Quantity |\n| ---- | -------- |\n| Game | 2        |\n| Bike | 1        |\n| Book | 3        |\n*******************"

    if (actualString !== expectedString) throw new AssertError(actualString, expectedString)
    done()
  })

  it('Test #04 - printTable([{ name: "Game", quantity: 10000 }])', done => {
    const actualString = printTable([
      { name: 'Game', quantity: 10000 }
    ])
    const expectedString = "+++++++++++++++++++\n| Gift | Quantity |\n| ---- | -------- |\n| Game | 10000    |\n*******************"

    if (actualString !== expectedString) throw new AssertError(actualString, expectedString)
    done()
  })

  it('Test #05 - printTable([{ name: "Game", quantity: 1234567890 }])', done => {
    const actualString = printTable([
      { name: 'Game', quantity: 1234567890 }
    ])
    const expectedString = "+++++++++++++++++++++\n| Gift | Quantity   |\n| ---- | ---------- |\n| Game | 1234567890 |\n*********************"

    if (actualString !== expectedString) throw new AssertError(actualString, expectedString)
    done()
  })

  it('Test #06 - printTable([{ name: "Toy", quantity: 12 }, { name: "Mic", quantity: 123 }])', done => {
    const actualString = printTable([
      { name: 'Toy', quantity: 12 },
      { name: 'Mic', quantity: 123 }
    ])
    const expectedString = "+++++++++++++++++++\n| Gift | Quantity |\n| ---- | -------- |\n| Toy  | 12       |\n| Mic  | 123      |\n*******************"

    if (actualString !== expectedString) throw new AssertError(actualString, expectedString)
    done()
  })
})

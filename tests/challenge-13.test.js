const assert = require('assert')
const { AssertError } = require('../utils/customErrors.js')

// * Get the function of challenge.
const getFilesToBackup = require('../challenges/challenge-13')

describe('Challenge #13 - Backup de los archivos de Papá Noel', () => {
  it('Test #01 - Returns an Array', () => {
    assert.equal(
      Array.isArray(getFilesToBackup(1546300800, [
        [ 3, 1546301100 ],
        [ 2, 1546300800 ],
        [ 1, 1546300800 ],
        [ 1, 1546300900 ],
        [ 1, 1546301000 ]
      ])),
      true
    )
  }, 'The result must be an array')

  it('Test #02', done => {
    const actualString = JSON.stringify(getFilesToBackup(1546300800, [
      [ 3, 1546301100 ],
      [ 2, 1546300800 ],
      [ 1, 1546300800 ],
      [ 1, 1546300900 ],
      [ 1, 1546301000 ]
    ]))
    const expectedString = JSON.stringify([1, 3])

    if (actualString !== expectedString) throw new AssertError(actualString, expectedString)
    done()
  })

  it('Test #03', done => {
    const actualString = JSON.stringify(getFilesToBackup(1546300600, [
      [ 1, 1546300800 ],
      [ 2, 1546300800 ],
      [ 1, 1546300900 ],
      [ 1, 1546301000 ],
      [ 3, 1546301100 ]
    ]))
    const expectedString = JSON.stringify([1, 2, 3])

    if (actualString !== expectedString) throw new AssertError(actualString, expectedString)
    done()
  })

  it('Test #04', done => {
    const actualString = JSON.stringify(getFilesToBackup(1556300600, [
      [ 1, 1546300800 ],
      [ 2, 1546300800 ],
      [ 1, 1546300900 ],
      [ 1, 1546301000 ],
      [ 3, 1546301100 ]
    ]))
    const expectedString = '[]'

    if (actualString !== expectedString) throw new AssertError(actualString, expectedString)
    done()
  })

  it('Test #05', done => {
    const actualString = JSON.stringify(getFilesToBackup(1556300600, []))
    const expectedString = '[]'

    if (actualString !== expectedString) throw new AssertError(actualString, expectedString)
    done()
  })
})

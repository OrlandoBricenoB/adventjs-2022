const assert = require('assert')
const { AssertError } = require('../utils/customErrors.js')

// * Get the function of challenge.
const howManyReindeers = require('../challenges/challenge-20')

describe('Challenge #20 - ¡Viajes más desafiantes!', () => {
  it('Test #01 - Returns an Array', () => {
    assert.equal(
      Array.isArray(howManyReindeers([
        { type: 'Nuclear', weightCapacity: 50 },
        { type: 'Electric', weightCapacity: 10 },
        { type: 'Gasoline', weightCapacity: 5 },
        { type: 'Diesel', weightCapacity: 1 }
      ], [
        { country: 'Spain', weight: 30 },
        { country: 'France', weight: 17 },
        { country: 'Italy', weight: 50 }
      ])),
      true
    )
  }, 'The result must be an array')

  it('Test #02', done => {
    const actualString = JSON.stringify(howManyReindeers([
      { type: 'Nuclear', weightCapacity: 50 },
      { type: 'Electric', weightCapacity: 10 },
      { type: 'Gasoline', weightCapacity: 5 },
      { type: 'Diesel', weightCapacity: 1 }
    ], [
      { country: 'Spain', weight: 30 },
      { country: 'France', weight: 17 },
      { country: 'Italy', weight: 50 }
    ]))
    const expectedString = JSON.stringify([
      {
        "country": "Spain",
        "reindeers": [
          {
            "type": "Electric",
            "num": 1
          },
          {
            "type": "Gasoline",
            "num": 3
          },
          {
            "type": "Diesel",
            "num": 5
          }
        ]
      },
      {
        "country": "France",
        "reindeers": [
          {
            "type": "Electric",
            "num": 1
          },
          {
            "type": "Gasoline",
            "num": 1
          },
          {
            "type": "Diesel",
            "num": 2
          }
        ]
      },
      {
        "country": "Italy",
        "reindeers": [
          {
            "type": "Electric",
            "num": 3
          },
          {
            "type": "Gasoline",
            "num": 3
          },
          {
            "type": "Diesel",
            "num": 5
          }
        ]
      }
    ])

    if (actualString !== expectedString) throw new AssertError(actualString, expectedString)
    done()
  })

  it('Test #03', done => {
    const actualString = JSON.stringify(howManyReindeers(
      [
        { type: 'Electric', weightCapacity: 10 },
        { type: 'Gasoline', weightCapacity: 5 },
        { type: 'Diesel', weightCapacity: 1 }
      ],
      [{ country: 'Spain', weight: 37 }]
    ))
    const expectedString = JSON.stringify([
      {
        "country": "Spain",
        "reindeers": [
          {
            "type": "Electric",
            "num": 2
          },
          {
            "type": "Gasoline",
            "num": 2
          },
          {
            "type": "Diesel",
            "num": 7
          }
        ]
      }
    ])

    if (actualString !== expectedString) throw new AssertError(actualString, expectedString)
    done()
  })

  it('Test #04', done => {
    const actualString = JSON.stringify(howManyReindeers(
      [
        { type: 'Nuclear', weightCapacity: 50 },
        { type: 'Electric', weightCapacity: 10 },
        { type: 'Gasoline', weightCapacity: 5 },
        { type: 'Diesel', weightCapacity: 1 }
      ],
      [
        { country: 'Spain', weight: 30 },
        { country: 'Germany', weight: 7 },
        { country: 'France', weight: 17 },
        { country: 'Italy', weight: 50 }
      ]
    ))
    const expectedString = JSON.stringify([
      {
        "country": "Spain",
        "reindeers": [
          {
            "type": "Electric",
            "num": 1
          },
          {
            "type": "Gasoline",
            "num": 3
          },
          {
            "type": "Diesel",
            "num": 5
          }
        ]
      },
      {
        "country": "Germany",
        "reindeers": [
          {
            "type": "Gasoline",
            "num": 1
          },
          {
            "type": "Diesel",
            "num": 2
          }
        ]
      },
      {
        "country": "France",
        "reindeers": [
          {
            "type": "Electric",
            "num": 1
          },
          {
            "type": "Gasoline",
            "num": 1
          },
          {
            "type": "Diesel",
            "num": 2
          }
        ]
      },
      {
        "country": "Italy",
        "reindeers": [
          {
            "type": "Electric",
            "num": 3
          },
          {
            "type": "Gasoline",
            "num": 3
          },
          {
            "type": "Diesel",
            "num": 5
          }
        ]
      }
    ])

    if (actualString !== expectedString) throw new AssertError(actualString, expectedString)
    done()
  })

  it('Test #05', done => {
    const actualString = JSON.stringify(howManyReindeers(
      [
        { type: 'Diesel', weightCapacity: 1 },
        { type: 'Gasoline', weightCapacity: 5 }
      ],
      [
        { country: 'Spain', weight: 30 },
        { country: 'Germany', weight: 7 }
      ]
    ))
    const expectedString = JSON.stringify([
      {
        "country": "Spain",
        "reindeers": [
          {
            "type": "Gasoline",
            "num": 5
          },
          {
            "type": "Diesel",
            "num": 5
          }
        ]
      },
      {
        "country": "Germany",
        "reindeers": [
          {
            "type": "Gasoline",
            "num": 1
          },
          {
            "type": "Diesel",
            "num": 2
          }
        ]
      }
    ])

    if (actualString !== expectedString) throw new AssertError(actualString, expectedString)
    done()
  })
})

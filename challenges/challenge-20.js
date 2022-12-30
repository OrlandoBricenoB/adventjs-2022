module.exports = (reindeerTypes, gifts) => {
  const data = []
  reindeerTypes.sort((a, b) => b.weightCapacity - a.weightCapacity)

  for (const { country, weight } of gifts) {
    const reindeers = {
      reindeers: [...new Array(reindeerTypes.length)].map(
          (_, i) => ({
              type: reindeerTypes[i].type,
              num: 0
          })
      ),
      country
    }

    let sum = 0

    while (sum < weight) {
      for (let i = reindeerTypes.length; i > 0; i--) {
        const value = reindeerTypes[i - 1]

        if (sum + value.weightCapacity <= weight) {
          reindeers.reindeers[i - 1].num++
          sum += value.weightCapacity
        }
      }
    }

    data.push(reindeers)
  }

  return data.map(
    ({ country, reindeers }) => ({
      country,
      reindeers: reindeers.filter(({ num }) => num > 0)
    })
  )
}

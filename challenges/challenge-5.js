module.exports = (giftsCities, maxGifts, maxCities) => {
  giftsCities = giftsCities
    .sort((a, b) => b - a)
    .reduce((result, _, i) => {
      if (!i) {
        let sum = giftsCities
          .slice(0, maxCities)
          .reduce((acc, curr) => (acc += curr), 0)
        sum <= maxGifts && result.push(sum)
      } else {
        giftsCities.unshift(giftsCities.pop())
        let sum = giftsCities
          .slice(0, maxCities)
          .reduce((acc, curr) => (acc += curr), 0)
        sum <= maxGifts && result.push(sum)
        let sum2 = giftsCities
          .slice(0, maxCities - 1)
          .reduce((acc, curr) => (acc += curr), 0)
        sum2 <= maxGifts && result.push(sum2)
      }
      return result
    }, [])
  return Math.max(...(giftsCities.length ? giftsCities : [0]))
}

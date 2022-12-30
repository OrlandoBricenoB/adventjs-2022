module.exports = (packOfGifts, reindeers) => {
  const giftsWeight = packOfGifts.reduce((prev, current) => {
    return prev + current.length
  }, 0)

  const reindeersCarry = reindeers.reduce((prev, current) => {
    return prev + (current.length * 2)
  }, 0)

  return Math.floor(reindeersCarry / giftsWeight)
}

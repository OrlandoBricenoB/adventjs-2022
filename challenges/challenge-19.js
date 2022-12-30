module.exports = (toys, positions) => {
  return positions
    .map((position, index) => ({ toy: toys[index], position }))
    .sort((a, b) => {
      return a.position - b.position
    })
    .map(({ toy }) => toy)
}

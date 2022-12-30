module.exports = (path) => {
  const sumPath = ({ x, y }) => {
    const position = path[x][y]
    if (x === path.length - 1) {
      return position
    }
    const leftSum = sumPath({ x: x + 1, y })
    const rigthSum = sumPath({ x: x + 1, y: y + 1 })

    return Math.min(rigthSum + position, leftSum + position)
  }

  const result = sumPath({ x: 0, y: 0 })
  return result
}

module.exports = (size) => {
  const faceUp = '/\\'
  const faceDown = '\\/'
  const patternUp = '_\\'
  const patternDown = '_/'

  const top = [], down = []

  const repeat = (pattern, quantity) => pattern.repeat(quantity)

  for (let i = 1; i <= size; i++) {
    const spaces = [
      repeat(' ', size - i),
      repeat(' ', i - 1)
    ]
    const patterns = [
      repeat(faceUp, i) + repeat(patternUp, size),
      repeat(faceDown, size - i + 1) + repeat(patternDown, size)
    ]
    top.push(spaces[0] + patterns[0])
    down.push(spaces[1] + patterns[1])
  }

  return [...top, ...down].join('\n')
}

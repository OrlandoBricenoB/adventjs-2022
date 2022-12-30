module.exports = base => {
  const decorateMap = {
    'P P': 'P',
    'B P': 'R',
    'R P': 'B',
    'B R': 'P',
    'B B': 'B',
    'R R': 'R'
  }

  let result = [base]

  const baseSplit = base.split(' ')

  const decorateLine = (strBase) => {
    let string = ''
    if (strBase.length < 2) return

    for (let i = 0; i < strBase.length; i++) {
      const baseTwo = strBase.slice(i, i + 2)
      if (baseTwo.length !== 2) continue
  
      const joinTwo = [baseTwo.join(' '), baseTwo.reverse().join(' ')]
      const decorate = decorateMap[joinTwo[0]]
        ? decorateMap[joinTwo[0]]
        : decorateMap[joinTwo[1]]
      string += `${decorate}`
      if (i < strBase.length - 2) string += ' '
    }
    result = [string, ...result]
    decorateLine(string.split(' '))
  }
  decorateLine(baseSplit)
  return result
}

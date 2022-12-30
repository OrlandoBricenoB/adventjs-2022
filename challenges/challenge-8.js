module.exports = (part) => {
  const isPalindrom = str => str === [...str].reverse().join('')

  for (let i = 0; i < part.length; i++) {
    const strArray = [...part]
    strArray.splice(i, 1)

    const canBePalindrom = isPalindrom(strArray.join(''))
    if (canBePalindrom) return true
  }

  return false
}

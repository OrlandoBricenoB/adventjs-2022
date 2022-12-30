module.exports = (a1, a2, a3) => {
  const diffA = a1.filter(gift => {
    return a2.indexOf(gift) === -1 && a3.indexOf(gift) === -1
  })

  const diffB = a2.filter(gift => {
    return a1.indexOf(gift) === -1 && a3.indexOf(gift) === -1
  })

  const diffC = a3.filter(gift => {
    return a2.indexOf(gift) === -1 && a1.indexOf(gift) === -1
  })

  return Array.from(new Set([...diffA, ...diffB, ...diffC]))
}

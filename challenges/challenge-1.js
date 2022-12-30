module.exports = (gifts) => {
  const paper = '*'
  return gifts.map(gift => {
    const wrapper = paper.repeat(gift.length + 2)
    return `${wrapper}\n${paper + gift + paper}\n${wrapper}`
  })
}

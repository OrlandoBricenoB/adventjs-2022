module.exports = (gifts, maxWeight) => {
  const bag = []
  const filteredGifts = gifts.filter(gift => gift.length <= maxWeight)

  const mergeSack = (gift, bag) => {
    if (!bag.length) return {}
    
    return {
      index: bag.length - 1,
      sack: bag[bag.length - 1] + ' ' + gift,
      weight: bag[bag.length - 1].replaceAll(' ', '').length + gift.length
    }
  }

  for (let i = 0; i < filteredGifts.length; i++) {
    const gift = gifts[i]

    // * Verify if have space in other sack
    const { index = 0, sack = '', weight = 0 } = mergeSack(gift, bag)
    if (sack && weight > maxWeight) {
      // * Remover el último regalo del saco.
      const sackList = sack.split(' ')
      bag[index] = sackList.slice(0, sackList.length - 1).join(' ')
      bag.push(sackList[sackList.length - 1])
    } else {
      sack && (bag[index] = sack)
      !sack && bag.push(gift)
      continue
    }
  }

  return bag
}

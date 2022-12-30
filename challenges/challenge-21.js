module.exports = gifts => {
  const startBar = '| '
  const middleBar = ' | '
  const endBar = ' |'

  const titles = ['Gift', 'Quantity']

  const giftWidth = Math.max(
    titles[0].length,
    ...gifts.map(gift => gift.name.length)
  )
  const quantityWidth = Math.max(
    titles[1].length,
    ...gifts.map(gift => gift.quantity.toString().length)
  )
  const fullWidth = giftWidth + quantityWidth + 7

  let table = '+'.repeat(fullWidth) + '\n'
  // * Gift Title
  table += startBar + titles[0]
  table += ' '.repeat(giftWidth - titles[0].length)
  // * Quantity Title
  table += middleBar + titles[1]
  table += ' '.repeat(quantityWidth - titles[1].length) + endBar + '\n'
  // * Separation between header and body.
  table += startBar + '-'.repeat(giftWidth)
  table += middleBar + '-'.repeat(quantityWidth) + endBar + '\n'

  for (const gift of gifts) {
    // * Name
    table += startBar + gift.name + ' '.repeat(giftWidth - gift.name.length)
    // * Quantity
    table += middleBar + gift.quantity
    table += ' '.repeat(quantityWidth - String(gift.quantity).length)
    // * Close bar.
    table += endBar + '\n'
  }

  table += '*'.repeat(fullWidth)

  return table
}

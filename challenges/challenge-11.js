module.exports = (part, total) => {
  const getTimesInSeconds = arrays => {
    return arrays.map(array => {
      const [hours, minutes, seconds] = array
        .split(':')
        .map(number => +(number))
      return hours * 3600 + minutes * 60 + seconds
    })
  }

  const getGCF = (numerator, denominator) => {
    const remaining = numerator % denominator
    return remaining ? getGCF(denominator, remaining) : denominator
  }

  // * Get numerator and denominator from times.
  const [numerator, denominator] = getTimesInSeconds([part, total])

  // * Get the greatest common factor.
  const gcf = getGCF(numerator, denominator)

  // * Build the fraction.
  return `${numerator / gcf}/${denominator / gcf}`
}

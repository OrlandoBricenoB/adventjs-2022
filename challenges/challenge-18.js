module.exports = (dry, numbers) => {
  let result = []

  for (let i = 1; i <= numbers; i++) {
    if (String(i).indexOf(dry) !== -1) {
      result.push(i)
    }
  }

  return result
}

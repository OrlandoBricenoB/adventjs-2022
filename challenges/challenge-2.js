module.exports = (year, holidays) => {
  return holidays.reduce((prev, holiday) => {
    const date = new Date(`${year}/${holiday}`).getDay()
    return ![0, 6].includes(date) ? prev + 2 : prev
  }, 0)
}

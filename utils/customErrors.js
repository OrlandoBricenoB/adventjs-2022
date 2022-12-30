class AssertError extends Error {
  constructor(actualString, expectedString) {
    super()
    this.actualString = actualString
    this.expectedString = expectedString
    this.message = 'Expected: ' + expectedString
    this.message += '\n\nActual: ' + actualString
  }
}

module.exports = {
  AssertError
}
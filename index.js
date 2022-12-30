// * Imports
const Mocha = require('mocha')
const getChallengeNumber = require('./utils/getChallengeNumber')

// * Get the last argument like the challengue number
const challengeNumber = getChallengeNumber(
  process.argv.find(arg => arg.includes('challenge')) || 'challenge:1'
)

// * Instance of Mocha.
const mocha = new Mocha({})

try {
  // * Add file for test from challengeNumber
  mocha.addFile(`tests/challenge-${challengeNumber}.test.js`)
  
  // * Run tests
  mocha.run()
    .on('end', function() {
      console.log('¡Gracias por experimentar con este software! - OrlandoBricenoB')
    })
} catch (error) {
  if (error.message.includes('find module')) {
    console.log('Este reto no existe.')
  } else {
    console.log(error)
  }
}

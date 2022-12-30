module.exports = (leds) => {
  const lowLeds = leds
    .join('')
    .split('1')
    .map(led => led.length)

  lowLeds[0] += lowLeds.at(-1)
  const sortLed = lowLeds.sort((a, b) => b - a)
  return sortLed[0] * 7
}

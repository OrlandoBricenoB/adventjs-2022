module.exports = (systemNames, stepNumbers) => {
  const systemSteps = {}
  systemNames.forEach(name => { systemSteps[name] = [] })

  for (let i = 0; i < stepNumbers.length; i++) {
    systemSteps[systemNames[i]].push(stepNumbers[i])
  }
  
  const stepsArray = Object.values(systemSteps)

  return stepsArray.every((steps) => 
    steps.every((step, index) => 
      step < (steps[index + 1] || 99)
    )
  )
}

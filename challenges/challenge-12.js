module.exports = (distance, sleighs) => {
  const sleighsConsumption = sleighs
    .map(sleigh => ({
      name: sleigh.name,
      consumption: sleigh.consumption * distance
    }))
    .filter(sleigh => sleigh.consumption <= 20)
    .sort((a, b) => b.consumption - a.consumption)

  return sleighsConsumption[0] ? sleighsConsumption[0].name : null
}

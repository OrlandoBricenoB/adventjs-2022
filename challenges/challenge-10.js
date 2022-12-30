module.exports = (heights) => {
  let falling = false, flying = false, error = false

  // * Verificar si subió, bajó y si encontró un error.
  heights.forEach((height, index) => {
    const nextHeight = heights[index + 1]
  
    // * Si la siguiente altura es menor, está cayendo.
    if (nextHeight < height) {
      falling = true
    } else if (nextHeight > height) {
      // * Si la siguiente altura es mayor, está subiendo.
      flying = true
  
      // * Si estaba cayendo y sube otra vez, no es una parábola.
      if (falling) error = true
    }
  })

  // * Regresar verdadero si en algún momento subió y luego bajó.
  return falling && flying && !error
}

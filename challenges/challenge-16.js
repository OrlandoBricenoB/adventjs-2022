module.exports = letter => {
  // * Capitalize the first letter.
  const uppercaseFirstLetter = str => {
    str = str[0].toUpperCase() + str.slice(1, str.length)
    return str
  }

  // * Borrar todos los espacios dobles en blanco.
  const cleanPattern = (str, pattern, replace) => {
    if (str.indexOf(pattern) !== -1) {
      str = str.replaceAll(pattern, replace)
      return cleanPattern(str, pattern, replace)
    }
    return str
  }

  // * Eliminar los espacios en blanco al inicio y al final.
  letter = letter.trim()
  // * Colocar la primera letra en mayúsculas.
  letter = uppercaseFirstLetter(letter)
  // * Eliminar los múltiples signos de interrogación.
  letter = cleanPattern(letter, '??', '?')

  // * Agregar un espacio luego de las comas.
  letter = letter.replaceAll(',', ', ')
  letter = cleanPattern(letter, ' ,', ',')

  // * Eliminar los múltiples espacios en blanco.
  letter = cleanPattern(letter, '  ', ' ')

  // * Añadir punto al final.
  if (!letter.endsWith('.') &&
    !letter.endsWith('!') &&
    !letter.endsWith('?')
  ) letter += '.'

  // * Colocar la primera letra en mayúsculas luego de los signos: ? , . !
  const capitalizeSymbol = (str, symbol) => {
    const splitSymbol = str.split(symbol).map(string => {
      if (!string) return string
      string = string.trim()
      string = uppercaseFirstLetter(string)
      return string
    })
    return splitSymbol.join(symbol + ' ')
  }
  letter = capitalizeSymbol(letter, '?')
  letter = capitalizeSymbol(letter, '!')
  letter = capitalizeSymbol(letter, '.')

  // * Eliminar los espacios en blanco al inicio y al final.
  letter = letter.trim()

  // * Hacer que Santa Claus tenga la S y la C en mayúsculas.
  letter = letter.replaceAll(/SaNta cLauS/gi, 'Santa Claus')

  return letter
}

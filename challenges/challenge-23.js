module.exports = commands => {
  const memory = []
  memory.length = 8
  memory.fill(0)

  let line = 0

  // * Get index from 'Vxx' - V01 => 1
  const getRegisterPosition = instruction => +instruction.slice(-1)

  const executeCommand = command => {
    // * Get operator and instruction from command.
    const [operator, instruction] = command.split(' ')

    // * Operator Functions
    const operators = {
      'MOV': instruction => {
        const [Vxx, Vyy] = instruction.split(',')
        const index = getRegisterPosition(Vyy)

        // * Cargar el número o si da NaN es un registro Vxx
        // * obtener el valor del registro Vxx.
        memory[index] = +Vxx || memory[getRegisterPosition(Vxx)]
        line++
      },
      'ADD': instruction => {
        const [Vxx, Vyy] = instruction.split(',')
        const indexX = getRegisterPosition(Vxx)
        const indexY = getRegisterPosition(Vyy)

        // * Almacenar en Vxx la suma de Vxx + Vyy con límite de 256.
        memory[indexX] = (memory[indexX] + memory[indexY]) % 256
        line++
      },
      'DEC': Vxx => {
        const index = getRegisterPosition(Vxx)

        // * Restar 1 a Vxx con límite de 256.
        memory[index] = (memory[index] + 255) % 256
        line++
      },
      'INC': Vxx => {
        const index = getRegisterPosition ( Vxx )

        // * Sumar 1 a Vxx con límite de 256.
        memory[index] = (memory[index] + 1) % 256
        line++
      },
      'JMP': index => {
        line = memory[0] <= 0 
          ? line + 1
          : +index
      }
    }

    // * Call operator function.
    return operators[operator](instruction)
  }

  while (+line !== commands.length) {
    executeCommand(commands[line] || '')
  }

  return memory
}

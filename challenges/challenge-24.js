module.exports = maze => {
  const checkTile = (maze = [], y, x) => {
    if (maze[y][x] === 'E') return true
    if (![' ', 'S'].includes(maze[y][x])) return false

    maze[y][x] = 'P'

    return (y + 1 < maze.length && checkTile(maze, y + 1, x)) 
      || (y - 1 >= 0 && checkTile (maze, y - 1, x))
      || (x + 1 < maze[0].length && checkTile (maze, y, x + 1))
      || (x - 1 >= 0 && checkTile (maze, y, x - 1))
  }

  const startRow = maze.findIndex(row => row.includes('S'))
  const startPoint = [startRow, maze[startRow].findIndex(tile => tile === 'S')]
  
  const haveExit = checkTile(maze, startPoint[0], startPoint[1])
  return haveExit
}

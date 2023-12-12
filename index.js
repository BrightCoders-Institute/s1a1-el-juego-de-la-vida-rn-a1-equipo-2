// Cualquier célula viva con menos de dos vecinos vivos muere, como si fuera por falta de población.
// Cualquier célula viva con más de tres vecinos vivos muere, como si fuera por sobre-población.
// Cualquier célula viva con dos o tres vecinos vivos sobrevive a la siguiente generación.
// Cualquier célula muerta con exactamente tres vecinos vivos se convierte en una célula viva.

const initialGeneration = [
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 1, 0, 0, 0],
  [0, 0, 0, 1, 1, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
];

const rows = initialGeneration.length;
const columns = initialGeneration[0].length;

function printBoard(board) {
  for (let i = 0; i < rows; i++) {
    let row = "";
    for (let j = 0; j < columns; j++) {
      row += board[i][j] ? "■ " : "□ ";
    }
    console.log(row);
  }
  console.log("\n");
}

function nextGeneration(currentGeneration) {
  const newGeneration = [];
  
  for (let i = 0; i < rows; i++) {
    newGeneration[i] = [];
    for (let j = 0; j < columns; j++) {
      const neighbors = countNeighbors(currentGeneration, i, j);
      if (currentGeneration[i][j] === 1) {
        // Reglas para células vivas
        newGeneration[i][j] = neighbors === 2 || neighbors === 3 ? 1 : 0;
      } else {
        // Regla para células muertas
        newGeneration[i][j] = neighbors === 3 ? 1 : 0;
      }
    }
  }
  return newGeneration;
}
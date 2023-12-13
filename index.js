// Cualquier célula viva con menos de dos vecinos vivos muere, como si fuera por falta de población.
// Cualquier célula viva con más de tres vecinos vivos muere, como si fuera por sobre-población.
// Cualquier célula viva con dos o tres vecinos vivos sobrevive a la siguiente generación.
// Cualquier célula muerta con exactamente tres vecinos vivos se convierte en una célula viva.

class GameOfLife {
  constructor(rows, columns) {
    this.row = rows;
    this.columns = columns;
    this.currentGeneration = this.getRandomInitialState();
  }

  getRandomInitialState() {
    const initialState = [];
    for (let i = 0; i < rows; i++) {
      initialState[i] = [];
      for (let j = 0; j < columns; j++) {
        // Generate random 0 and 1 into the arrays
        initialState[i][j] = Math.random() < 0.5 ? 0 : 1;
      }
    }
    return initialState;
  }

  printBoard(board) {
    for (let i = 0; i < rows; i++) {
      let row = "";
      for (let j = 0; j < columns; j++) {
        row += board[i][j] ? "■ " : "□ ";
      }
      console.log(row);
    }
    console.log("\n");
  }

  nextGeneration(currentGeneration) {
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

  countNeighbors(grid, x, y) {
    let count = 0;

    for (let i = -1; i <= 1; i++) {
      for (let j = -1; j <= 1; j++) {
        const newRow = x + i;
        const newColumn = y + j;

        if (
          newRow >= 0 &&
          newRow < rows &&
          newColumn >= 0 &&
          newColumn < columns &&
          !(i === 0 && j === 0)
        ) {
          count += grid[newRow][newColumn];
        }
      }
    }

    return count;
  }
}

const rows = 4;
const columns = 8;

const initialGeneration = getRandomInitialState();
// Imprimir generación inicial
console.log("Generación Inicial:");
printBoard(initialGeneration);

// Calcular y mostrar la siguiente generación
const nextGen = nextGeneration(initialGeneration);
console.log("Siguiente Generación:");
printBoard(nextGen);


// Another solution 

var rows1 = 40
var cols = 100

var playing = false

var grid = new Array[rows1]
var newGrid = new Array[rows1]

var 
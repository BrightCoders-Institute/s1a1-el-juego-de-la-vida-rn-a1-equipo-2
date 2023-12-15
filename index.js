class GameOfLife {
  constructor(rows, columns) {
    this.rows = rows;
    this.columns = columns;
    this.currentGeneration = this.getRandomInitialState();
  }

  getRandomInitialState() {
    const initialState = [];
    for (let i = 0; i < this.rows; i++) {
      initialState[i] = [];
      for (let j = 0; j < this.columns; j++) {
        // Generar 0 o 1 de manera aleatoria
        initialState[i][j] = Math.random() < 0.5 ? 0 : 1;
      }
    }
    return initialState;
  }

  printBoard(board) {
    let output = '';
    for (let i = 0; i < this.rows; i++) {
      let row = '';
      for (let j = 0; j < this.columns; j++) {
        row += board[i][j] ? '■ ' : '□ ';
      }
      output += `${row.trim()}\n`;
    }
    console.log(output);
  }

  nextGeneration() {
    const newGeneration = [];
    for (let i = 0; i < this.rows; i++) {
      newGeneration[i] = [];
      for (let j = 0; j < this.columns; j++) {
        const neighbors = this.countNeighbors(i, j);
        if (this.currentGeneration[i][j] === 1) {
          // Reglas para células vivas
          newGeneration[i][j] = neighbors === 2 || neighbors === 3 ? 1 : 0;
        } else {
          // Reglas para células muertas
          newGeneration[i][j] = neighbors === 3 ? 1 : 0;
        }
      }
    }
    // Copia la matriz actual a la matriz anterior
    this.previousGeneration = this.currentGeneration.map((row) => row.slice());
    // Actualiza la matriz actual con la nueva generación
    this.currentGeneration = newGeneration;
  }

  countNeighbors(x, y) {
    let count = 0;
    for (let i = -1; i <= 1; i++) {
        for (let j = -1; j <= 1; j++) {
            const newRow = x + i;
            const newColumn = y + j;
            if (
                newRow >= 0 && newRow < this.rows &&
                newColumn >= 0 && newColumn < this.columns &&
                !(i === 0 && j === 0)
            ) {
                count += this.currentGeneration[newRow][newColumn];
            }
        }
    }
    return count;
}

  getPreviousGeneration() {
    return this.previousGeneration;
  }

  arraysAreEqual(arr1, arr2) {
    for (let i = 0; i < arr1.length; i++) {
      for (let j = 0; j < arr1[i].length; j++) {
        if (arr1[i][j] !== arr2[i][j]) {
          return false;
        }
      }
    }
    return true;
  }
}

const game = new GameOfLife(10, 15);
console.log('Primera Generación:');
game.printBoard(game.currentGeneration);
let generationCount = 1;

while (typeof neverDeclared === "undefined") {
  game.nextGeneration();
  console.log(`Generación ${generationCount}:`);
  game.printBoard(game.currentGeneration);

  // Compara la generación actual con la anterior
  if (game.arraysAreEqual(game.currentGeneration, game.getPreviousGeneration())) {
    console.log('El juego se ha estabilizado. No se pueden hacer más generaciones.');
    break;
  }
  generationCount++;
}

module.exports = GameOfLife ;
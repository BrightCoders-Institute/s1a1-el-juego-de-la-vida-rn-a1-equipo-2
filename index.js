const rows = 4;
const columns = 8;


function getRandomInitialState() {
    const initialState = [];
    for (let i = 0; i < rows; i++) {
    initialState[i] = [];
    for (let j = 0; j < columns; j++) {
    // Generar 0 o 1 de manera aleatoria
    initialState[i][j] = Math.random() < 0.5 ? 0 : 1;
    }
    }
    return initialState;
    }

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
    function countNeighbors(grid, x, y) {
    
    let count = 0;
    
    for (let i = -1; i <= 1; i++) {
    for (let j = -1; j <= 1; j++) {
    const newRow = x + i;
    const newColumn = y + j;
    
    if (
    newRow >= 0 && newRow < rows &&
    newColumn >= 0 && newColumn < columns &&
    !(i === 0 && j === 0)
    ) {
    count += grid[newRow][newColumn];
    }
    }
    }
    
    return count;
    }
    
    const initialGeneration = getRandomInitialState();
    // Imprimir generación inicial
    console.log("Generación Inicial:");
    printBoard(initialGeneration);
    
    // Calcular y mostrar la siguiente generación
    const nextGen = nextGeneration(initialGeneration);
    console.log("Siguiente Generación:");
    printBoard(nextGen);

const GameOfLife = require('../index');

describe('GameOfLife', () => {

  describe('Initialization', () => {

    test('should create a game instance with the specified rows and columns', () => {
      const game = new GameOfLife(5, 5);
      expect(game.rows).toBe(5);
      expect(game.columns).toBe(5);
    });

    test('should initialize the current generation with the correct dimensions', () => {
      const game = new GameOfLife(5, 5);
      expect(game.currentGeneration.length).toBe(5);
      expect(game.currentGeneration[0].length).toBe(5);
    });
    
  });

  describe('Count Neighbors', () => {
    test('should count neighbors correctly for an internal cell', () => {
      const game = new GameOfLife(5, 5);
      game.currentGeneration = [
        [0, 1, 0],
        [1, 1, 1],
        [0, 1, 0]
      ];

      const neighbors = game.countNeighbors(1, 1);
      expect(neighbors).toBe(4);
    });

    test('should count neighbors correctly for a boundary cell', () => {
        const game = new GameOfLife(5, 5);
        game.currentGeneration = [
            [1, 1, 0],
            [1, 0, 0],
            [0, 0, 1]
        ];
    
        const neighbors = game.countNeighbors(0, 0);
        expect(neighbors).toBe(2);
    });
    

  });

  // Add more test cases for other methods as needed
});

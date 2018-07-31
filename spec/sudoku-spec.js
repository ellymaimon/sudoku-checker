import { CurrentGame } from '../src/sudoku.js';
import { checkRows } from '../src/sudoku.js';
import { checkArray } from '../src/sudoku.js';
import { checkColumns } from '../src/sudoku.js';
import { checkBoxes } from '../src/sudoku.js';

describe('Sudoku', function() {

  it('should test whether a single row/box/column contains the numbers 1-9', function() {
    var game = new CurrentGame();
    var array = [3, 4, 5, 7, 8, 9, 1, 2, 6];
    var result = checkArray(array);
    expect(result).toEqual(true);
  });


  it('should test whether all rows have numbers 1-9', function() {
    var game = new CurrentGame();
    var array = [ 1, 2, 3, 4, 5, 6, 7, 8, 9,
                 1, 2, 3, 4, 5, 6, 7, 8, 9,
                 1, 2, 3, 4, 5, 6, 7, 8, 9,
                 1, 2, 3, 4, 5, 6, 7, 8, 9,
                 1, 2, 3, 4, 5, 6, 7, 8, 9,
                 1, 2, 3, 4, 5, 6, 7, 8, 9,
                 1, 2, 3, 4, 5, 6, 7, 8, 9,
                 1, 2, 3, 4, 5, 6, 7, 8, 9,
                 1, 2, 3, 4, 5, 6, 7, 8, 9 ];
    expect(checkRows(array)).toEqual(true);
  });

  it('should test whether all columns have numbers 1-9', function() {
    var game = new CurrentGame();
    var array = [ 8, 3, 5, 4, 1, 6, 9, 2, 7,
                  2, 9, 6, 8, 5, 7, 4, 3, 1,
                  4, 1, 7, 2, 9, 3, 6, 5, 8,
                  5, 6, 9, 1, 3, 4, 7, 8, 2,
                  1, 2, 3, 6, 7, 8, 5, 4, 9,
                  7, 4, 8, 5, 2, 9, 1, 6, 3,
                  6, 5, 2, 7, 8, 1, 3, 9, 4,
                  9, 8, 1, 3, 4, 5, 2, 7, 6,
                  3, 7, 4, 9, 6, 2, 8, 1, 5];
    expect(checkColumns(array)).toEqual(true);
  });

  it('should test whether all boxes have numbers 1-9', function() {
    var game = new CurrentGame();
    var array = [ 8, 3, 5, 4, 1, 6, 9, 2, 7,
                  2, 9, 6, 8, 5, 7, 4, 3, 1,
                  4, 1, 7, 2, 9, 3, 6, 5, 8,
                  5, 6, 9, 1, 3, 4, 7, 8, 2,
                  1, 2, 3, 6, 7, 8, 5, 4, 9,
                  7, 4, 8, 5, 2, 9, 1, 6, 3,
                  6, 5, 2, 7, 8, 1, 3, 9, 4,
                  9, 8, 1, 3, 4, 5, 2, 7, 6,
                  3, 7, 4, 9, 6, 2, 8, 1, 5];
    expect(checkBoxes(array)).toEqual(true);
  });

  it('should test whether a sudoku game is valid', function() {
    var game = new CurrentGame();
    game.userInput = [ 8, 3, 5, 4, 1, 6, 9, 2, 7,
                  2, 9, 6, 8, 5, 7, 4, 3, 1,
                  4, 1, 7, 2, 9, 3, 6, 5, 8,
                  5, 6, 9, 1, 3, 4, 7, 8, 2,
                  1, 2, 3, 6, 7, 8, 5, 4, 9,
                  7, 4, 8, 5, 2, 9, 1, 6, 3,
                  6, 5, 2, 7, 8, 1, 3, 9, 4,
                  9, 8, 1, 3, 4, 5, 2, 7, 6,
                  3, 7, 4, 9, 6, 2, 8, 1, 5];
    expect(game.checkWin()).toEqual(true);
  });

});

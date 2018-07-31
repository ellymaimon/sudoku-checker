import { CurrentGame } from '../src/sudoku.js';
import { checkRows } from '../src/sudoku.js';
import { checkArray } from '../src/sudoku.js';

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

});

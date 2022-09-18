// a game has nine fields in a 3x3 grid
// there are two players in the game (X and O)
// players take turns taking fields until the game is over
// player X always makes the first move
// a player can take a field if not already taken
// a game is over when all fields in a row are taken by a player
// a game is over when all fields in a column are taken by a player
// a game is over when all fields in a diagonal are taken by a player
// a game is over when all fields are taken

import ticTacToe from '../../TicTacToe/Tictactoe';

describe('Tic Tac Toe', () => {
  test('a game is over when all fields in a row are taken by a player', () => {
    expect(ticTacToe()).toBe(true);
  });
});

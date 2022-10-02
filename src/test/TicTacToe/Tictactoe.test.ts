// a game has nine fields in a 3x3 grid
// there are two players in the game (X and O)
// players take turns taking fields until the game is over
// player X always makes the first move
// a player can take a field if not already taken
// a game is over when all fields in a row are taken by a player
// a game is over when all fields in a column are taken by a player
// a game is over when all fields in a diagonal are taken by a player
// a game is over when all fields are taken

import TicTacToe from '../../TicTacToe/Tictactoe';

describe('Tic Tac Toe', () => {
  const invalidPosition = 'Invalid position';

  test('player O can not play in the first move', () => {
    expect(() => new TicTacToe().play(1, 1, 'O')).toThrowError(
      'player O can not play first'
    );
  });

  test('Player X can play in the first move', () => {
    expect(new TicTacToe().play(1, 1, 'X')).toBe(true);
  });

  test('Player O can play in the second move', () => {
    const game = new TicTacToe();
    game.play(1, 1, 'X');
    expect(game.play(2, 2, 'O')).toBe(true);
  });

  test('Player X can not play in the second move', () => {
    const game = new TicTacToe();
    game.play(1, 1, 'X');
    expect(() => game.play(2, 2, 'X')).toThrowError(
      'player can not play twice in a row'
    );
  });

  test('Player O can not play where player X has played', () => {
    const game = new TicTacToe();
    game.play(1, 1, 'X');
    expect(() => game.play(1, 1, 'O')).toThrowError('position already played');
  });

  test('Player can not play on any previous played position', () => {
    const game = new TicTacToe();
    game.play(1, 1, 'X');
    game.play(2, 2, 'O');
    expect(() => game.play(1, 1, 'X')).toThrowError('position already played');
  });

  test('Do not allow player to play negative positions X', () => {
    expect(() => new TicTacToe().play(-1, 0, 'X')).toThrowError(
      invalidPosition
    );
  });

  test('Do not allow player to play negative position Y', () => {
    expect(() => new TicTacToe().play(0, -1, 'X')).toThrowError(
      invalidPosition
    );
  });

  test('Do not allow player to play over the third position X', () => {
    expect(() => new TicTacToe().play(3, 0, 'X')).toThrowError(invalidPosition);
  });

  test('Do not allow player to play over the third position Y', () => {
    expect(() => new TicTacToe().play(0, 3, 'X')).toThrowError(invalidPosition);
  });
});

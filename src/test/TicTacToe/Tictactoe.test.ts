// a game has nine fields in a 3x3 grid
// there are two players in the game (X and O)
// players take turns taking fields until the game is over
// player X always makes the first move
// a player can take a field if not already taken
// a game is over when all fields in a row are taken by a player
// a game is over when all fields in a column are taken by a player
// a game is over when all fields in a diagonal are taken by a player
// a game is over when all fields are taken
// top: x | x | o
// mid: o | x | o
// bot: x | o | x

import TicTacToe from '../../TicTacToe/Tictactoe';

describe('Tic Tac Toe', () => {
  test('player O can not play in the first move', () => {
    expect(() => new TicTacToe().play(1, 1, 'O')).toThrow(
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
    expect(() => game.play(2, 2, 'X')).toThrow(
      'player can not play twice in a row'
    );
  });

  test('Player O can not play where player X has played', () => {
    const game = new TicTacToe();
    game.play(1, 1, 'X');
    expect(() => game.play(1, 1, 'O')).toThrow('position already played');
  });

  test('Player can not play on any previous played position', () => {
    const game = new TicTacToe();
    game.play(1, 1, 'X');
    game.play(2, 2, 'O');
    expect(() => game.play(1, 1, 'X')).toThrow('position already played');
  });

  test('Player X wins on bottom row when all three bottom boxes are filled', () => {
    const game = new TicTacToe();
    game.play(0, 0, 'X');
    game.play(0, 1, 'O');
    game.play(1, 0, 'X');
    game.play(1, 1, 'O');
    game.play(2, 0, 'X');
    expect(game.winner()).toBe('X');
  });

  test('Player O wins on middle row when all three middle boxes are filled', () => {
    const game = new TicTacToe();
    game.play(0, 0, 'X');
    game.play(0, 1, 'O');
    game.play(2, 0, 'X');
    game.play(1, 1, 'O');
    game.play(2, 2, 'X');
    game.play(2, 1, 'O');
    expect(game.winner()).toBe('O');
  });

  test('Player X wins on top row when all three top boxes are filled', () => {
    const game = new TicTacToe();
    game.play(0, 2, 'X');
    game.play(0, 0, 'O');
    game.play(1, 2, 'X');
    game.play(2, 0, 'O');
    game.play(2, 2, 'X');
    expect(game.winner()).toBe('X');
  });

  test('Player X wins on left diagonal when all three top boxes are filled', () => {
    const game = new TicTacToe();
    game.play(0, 2, 'X');
    game.play(0, 0, 'O');
    game.play(1, 1, 'X');
    game.play(2, 2, 'O');
    game.play(2, 0, 'X');
    expect(game.winner()).toBe('X');
  });
});

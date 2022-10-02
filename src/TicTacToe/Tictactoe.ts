type Player = 'X' | 'O';
type Position = 0 | 1 | 2;
type Winner = 'X' | 'O' | 'none' | 'draw';
type Coordinate = { x: Position; y: Position };

class TicTacToe {
  moves = 0;
  lastPlayer = '';
  plays: Coordinate[] = [];

  winner(): Winner {
    return 'X';
  }

  play(x: Position, y: Position, player: Player) {
    if (player === 'O' && this.moves === 0) {
      throw 'player O can not play first';
    }

    if (player === this.lastPlayer) {
      throw 'player can not play twice in a row';
    }

    if (this.plays.find((value) => value.x === x && value.y === y)) {
      throw 'position already played';
    }

    this.plays.push({ x, y });
    this.lastPlayer = player;
    this.moves++;

    return true;
  }
}

export default TicTacToe;

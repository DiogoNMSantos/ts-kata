type Player = 'X' | 'O';
type Position = 0 | 1 | 2;

class TicTacToe {
  moves = 0;
  lastPlayer = '';
  lastX: Position[] = [];
  lastY: Position[] = [];

  play(x: Position, y: Position, player: Player) {
    if (player === 'O' && this.moves === 0) {
      throw 'player O can not play first';
    }

    if (player === this.lastPlayer) {
      throw 'player can not play twice in a row';
    }

    if (
      this.lastX.find((value) => value === x) &&
      y === this.lastY.find((value) => value === y)
    ) {
      throw 'position already played';
    }

    this.lastX.push(x);
    this.lastY.push(y);
    this.lastPlayer = player;
    this.moves++;

    return true;
  }
}

export default TicTacToe;

type Player = 'X' | 'O';

class TicTacToe {
  moves = 0;
  lastPlayer = '';
  lastX: number[] = [];
  lastY: number[] = [];

  play(x: number, y: number, player: Player) {
    if (player === 'O' && this.moves === 0) {
      throw 'player O can not play first';
    }

    if (player !== 'X' && player !== 'O') {
      throw 'Invalid player';
    }

    if (player === this.lastPlayer) {
      throw 'player can not play twice in a row';
    }

    if (x < 0 || x > 2) {
      throw 'Invalid position';
    }

    if (y < 0 || y > 2) {
      throw 'Invalid position';
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

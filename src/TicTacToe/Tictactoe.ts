class TicTacToe {
  moves = 0;
  lastX = 0;
  lastY = 0;

  play(x: number, y: number, player: string) {
    if (player === 'O' && this.moves === 0) {
      throw 'player O can not play first';
    }

    if (x === this.lastX && y === this.lastY) {
      throw 'position already played';
    }
    this.lastX = x;
    this.lastY = y;
    this.moves++;
    return true;
  }
}

export default TicTacToe;

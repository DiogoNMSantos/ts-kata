class TicTacToe {
  moves = 0;

  play(_: number, __: number, player: string) {
    if (player === 'O' && this.moves === 0) {
      throw 'player O can not play first';
    }
    this.moves++;
    return true;
  }
}

export default TicTacToe;

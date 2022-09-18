class TicTacToe {
  play(_: number, __: number, player: string) {
    if (player === 'O') {
      throw 'player O can not play first';
    }
    return true;
  }
}

export default TicTacToe;

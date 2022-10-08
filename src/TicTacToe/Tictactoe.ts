type Player = 'X' | 'O';
type Position = 0 | 1 | 2;
type Winner = 'X' | 'O' | 'none' | 'draw';
type Coordinate = { x: Position; y: Position };
type Play = { player: Player; coordinate: Coordinate };

class TicTacToe {
  moves = 0;
  lastPlayer = '';
  plays: Play[] = [];

  winner(): Winner {
    //[{x, {0, 0}}, {x, {1, 0}}, {x, {2, 0}}]
    const bottomRow = this.row(0);
    if (this.winnerOnRow(bottomRow)) {
      return bottomRow[0]?.player as Winner;
    }

    const middleRow = this.row(1);
    if (this.winnerOnRow(middleRow)) {
      return middleRow[0]?.player as Winner;
    }

    const topRow = this.row(2);
    if (this.winnerOnRow(topRow)) {
      return topRow[0]?.player as Winner;
    }

    return 'none';
  }

  play(x: Position, y: Position, player: Player) {
    if (player === 'O' && this.moves === 0) {
      throw 'player O can not play first';
    }

    if (player === this.lastPlayer) {
      throw 'player can not play twice in a row';
    }

    if (
      this.plays.find(
        (value) => value.coordinate.x === x && value.coordinate.y === y
      )
    ) {
      throw 'position already played';
    }

    this.lastPlayer = player;
    this.moves++;
    this.plays.push({ player: player, coordinate: { x, y } });

    return true;
  }

  private row(rowNumber: number): Play[] {
    return this.plays.filter((p) => p.coordinate.y === rowNumber);
  }

  private winnerOnRow(row: Play[]): boolean {
    return row.length === 3 && row.every((p) => p.player === row[0]?.player);
  }
}

export default TicTacToe;

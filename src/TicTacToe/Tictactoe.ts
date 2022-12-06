type Player = 'X' | 'O';
type Position = 0 | 1 | 2;
type Winner = 'X' | 'O' | 'none' | 'draw';
type Coordinate = { x: Position; y: Position };
type Play = { player: Player; coordinate: Coordinate };

// interface ComparableCoordinate {
//   isSame(other: Coordinate): boolean
// }

// class SmartCoordinate implements ComparableCoordinate{
//   coordinate: Coordinate = { x: 0, y: 0 }

//   constructor(row: Position, column: Position){
//     this.coordinate = { x: row, y: column}
//   }

//   isSame(other: Coordinate): boolean {
//     return this.coordinate.x === other.x &&
//       this.coordinate.y === other.y
//   }
// }

class Board {
  plays: Play[] = [];

  get moves() {
    return this.plays.length;
  }

  play(play: Play) {
    if (
      this.plays.find(
        (value) =>
          value.coordinate.x === play.coordinate.x &&
          value.coordinate.y === play.coordinate.y
      )
    ) {
      throw 'position already played';
    }
    this.plays.push({ player: play.player, coordinate: play.coordinate });
  }

  row(rowNumber: number): Play[] {
    return this.plays.filter((p) => p.coordinate.y === rowNumber);
  }

  winnerOnRow(row: Play[]): boolean {
    return row.length === 3 && row.every((p) => p.player === row[0]?.player);
  }

  leftDiagonal(): Play[] {
    return this.plays.filter(
      (p) =>
        (p.coordinate.x === 0 && p.coordinate.y === 2) ||
        (p.coordinate.x === 1 && p.coordinate.y === 1) ||
        (p.coordinate.x === 2 && p.coordinate.y === 0)
    );
  }

  winnerOnLeftDiagonal(): boolean {
    const diagonal = this.leftDiagonal();
    return (
      diagonal.length === 3 &&
      diagonal.every((p) => p.player === diagonal[0]?.player)
    );
  }
}

class TicTacToe {
  lastPlayer = '';
  board = new Board();

  winner(): Winner {
    //[{x, {0, 0}}, {x, {1, 0}}, {x, {2, 0}}]
    const bottomRow = this.row(0);

    if (this.winnerOnRow(bottomRow)) {
      if (bottomRow[0] === null || bottomRow[0] === undefined) {
        return 'none';
      }
      return bottomRow[0].player as Winner;
    }

    const middleRow = this.row(1);
    if (this.winnerOnRow(middleRow)) {
      return middleRow[0]?.player as Winner;
    }

    const topRow = this.row(2);
    if (this.winnerOnRow(topRow)) {
      return topRow[0]?.player as Winner;
    }

    if (this.winnerOnLeftDiagonal()) {
      return this.leftDiagonal()[0]?.player as Winner;
    }

    return 'none';
  }

  play(x: Position, y: Position, player: Player) {
    if (player === 'O' && this.board.moves === 0) {
      throw 'player O can not play first';
    }

    if (player === this.lastPlayer) {
      throw 'player can not play twice in a row';
    }

    this.board.play({ player: player, coordinate: { x: x, y: y } });

    this.lastPlayer = player;

    return true;
  }

  private row(rowNumber: number): Play[] {
    return this.board.row(rowNumber);
  }

  private winnerOnRow(row: Play[]): boolean {
    return this.board.winnerOnRow(row);
  }

  private leftDiagonal(): Play[] {
    return this.board.leftDiagonal();
  }

  private winnerOnLeftDiagonal(): boolean {
    return this.board.winnerOnLeftDiagonal();
  }
}

export default TicTacToe;

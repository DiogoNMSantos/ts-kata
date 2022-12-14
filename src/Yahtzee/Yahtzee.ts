type Die = 1 | 2 | 3 | 4 | 5 | 6;
// type Pair = 1; 1

class Roll {
  private roll: Die[] = [];

  constructor(die1: Die, die2: Die, die3: Die, die4: Die, die5: Die) {
    this.roll = [die1, die2, die3, die4, die5];
  }

  filterBy(die: Die): Die[] {
    return this.roll.filter((d) => d === die);
  }

  countDice(): Array<number[]> {
    const diceCount = this.roll.reduce(
      (groups: Map<number, number>, die: number) => {
        if (groups.has(die)) {
          //only enters when repeated die value is found
          let dieCount = groups.get(die) as number;
          groups.set(die, ++dieCount);
          return groups;
        }

        groups.set(die, 1); //first time it encounters a new die value, sets die count to 1
        return groups;
      },
      new Map<number, number>()
    ); //before start initialize map

    return Array.from(diceCount);
  }
}

enum Categories {
  Ones,
  Twos,
  Threes,
  Fours,
  Fives,
  Sixes,
  Pair,
  TwoPairs,
  ThreeOfAKind,
  FourOfAKind,
}

class Yahtzee {
  scoreRoll(roll: Roll, category: Categories, _: string): number {
    if (category === Categories.Ones) {
      return roll.filterBy(1).reduce((accumulator, current) => {
        return accumulator + current;
      }, 0);
    }

    if (category === Categories.Twos) {
      return roll.filterBy(2).reduce((accumulator, current) => {
        return accumulator + current;
      }, 0);
    }

    if (category === Categories.Threes) {
      return roll.filterBy(3).reduce((accumulator, current) => {
        return accumulator + current;
      }, 0);
    }

    if (category === Categories.Fours) {
      return roll.filterBy(4).reduce((accumulator, current) => {
        return accumulator + current;
      }, 0);
    }

    if (category === Categories.Fives) {
      return roll.filterBy(5).reduce((accumulator, current) => {
        return accumulator + current;
      }, 0);
    }

    if (category === Categories.Sixes) {
      return roll.filterBy(6).reduce((accumulator, current) => {
        return accumulator + current;
      }, 0);
    }

    if (category === Categories.Pair) {
      const pairs = roll.countDice().filter((count) => count[1] === 2);
      if (
        pairs !== null &&
        pairs !== undefined &&
        pairs[0] !== null &&
        pairs[0] !== undefined && //Only need for compiler/linter
        pairs[0][0] !== null &&
        pairs[0][0] !== undefined
      ) {
        return pairs[0][0] + pairs[0][0];
      }
      return 0;
    }

    if (category === Categories.TwoPairs) {
      const pairs = roll.countDice().filter((count) => count[1] === 2);
      if (pairs.length === 2) {
        if (
          pairs !== null &&
          pairs !== undefined &&
          pairs[0] !== null &&
          pairs[0] !== undefined &&
          pairs[0][0] !== null &&
          pairs[0][0] !== undefined && //Only need for compiler/linter
          pairs[1] !== null &&
          pairs[1] !== undefined &&
          pairs[1][0] !== null &&
          pairs[1][0] !== undefined
        ) {
          return pairs[0][0] + pairs[0][0] + pairs[1][0] + pairs[1][0];
        }
      }
    }

    if (category === Categories.ThreeOfAKind) {
      const pairs = roll.countDice().filter((count) => count[1] === 3);
      if (
        pairs !== null &&
        pairs !== undefined &&
        pairs[0] !== null &&
        pairs[0] !== undefined && //Only need for compiler/linter
        pairs[0][0] !== null &&
        pairs[0][0] !== undefined &&
        pairs[0][0] !== null &&
        pairs[0][0] !== undefined
      ) {
        return pairs[0][0] + pairs[0][0] + pairs[0][0];
      }
      return 0;
    }

    if (category === Categories.FourOfAKind) {
      const pairs = roll.countDice().filter((count) => count[1] === 4);
      if (
        pairs !== null &&
        pairs !== undefined &&
        pairs[0] !== null &&
        pairs[0] !== undefined && //Only need for compiler/linter
        pairs[0][0] !== null &&
        pairs[0][0] !== undefined
      ) {
        return pairs[0][0] + pairs[0][0] + pairs[0][0] + pairs[0][0];
      }
      return 0;
    }

    return 0;
  }
}

export default Yahtzee;
export { Categories, Roll };

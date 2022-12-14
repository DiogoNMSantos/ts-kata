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

  sum(die: Die): number {
    return this.filterBy(die).reduce((accumulator, current) => {
      return accumulator + current;
    }, 0);
  }

  repeated(repeats: number, times = 1): number {
    const repeat = this.countDice().filter((count) => count[1] === repeats);

    if (repeat.length === times) {
      if (
        repeat !== null &&
        repeat !== undefined &&
        repeat[0] !== null &&
        repeat[0] !== undefined &&
        repeat[0][0] !== null &&
        repeat[0][0] !== undefined //Only need for compiler/linter
      ) {
        return repeat[0][0] * repeats;
      }
    }
    return 0;
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
  private categoryCalculation = new Map<Categories, Function>([
    [Categories.Ones, (r: Roll) => r.sum(1)],
    [Categories.Twos, (r: Roll) => r.sum(2)],
    [Categories.Threes, (r: Roll) => r.sum(3)],
    [Categories.Fours, (r: Roll) => r.sum(4)],
    [Categories.Fives, (r: Roll) => r.sum(5)],
    [Categories.Sixes, (r: Roll) => r.sum(6)],
    [Categories.Pair, (r: Roll) => r.repeated(2)],
    [Categories.ThreeOfAKind, (r: Roll) => r.repeated(3)],
    [Categories.FourOfAKind, (r: Roll) => r.repeated(4)],
  ]);

  scoreRoll(roll: Roll, category: Categories, _: string): number {
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

    const calculator = this.categoryCalculation.get(category);
    if (calculator !== null && calculator !== undefined) {
      return calculator(roll);
    }

    // if (category === Categories.Ones) {
    //   return roll.sum(1);
    // }

    // if (category === Categories.Twos) {
    //   return roll.sum(2);
    // }

    // if (category === Categories.Threes) {
    //   return roll.sum(3);
    // }

    // if (category === Categories.Fours) {
    //   return roll.sum(4);
    // }

    // if (category === Categories.Fives) {
    //   return roll.sum(5);
    // }

    // if (category === Categories.Sixes) {
    //   return roll.sum(6);
    // }

    // if (category === Categories.Pair) {
    //   return roll.repeated(2);
    // }
    // if (category === Categories.ThreeOfAKind) {
    //   return roll.repeated(3);
    // }

    // if (category === Categories.FourOfAKind) {
    //   return roll.repeated(4);
    // }

    return 0;
  }
}

export default Yahtzee;
export { Categories, Roll };

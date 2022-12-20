function ensure<T>(
  argument: T | undefined | null,
  message = 'This value was promised to be there.'
): T {
  if (argument === undefined || argument === null) {
    throw new TypeError(message);
  }

  return argument;
}

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
      return ensure(ensure(repeat[0])[0]) * repeats;
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

interface Category {
  score(roll: Roll): number;
}

class Ones implements Category {
  score(roll: Roll): number {
    return roll.sum(1);
  }
}

class TwoPairs implements Category {
  score(roll: Roll): number {
    const pairs = roll.countDice().filter((count) => count[1] === 2);
    if (pairs.length === 2) {
      return (
        ensure(ensure(pairs[0])[0]) +
        ensure(ensure(pairs[0])[0]) +
        ensure(ensure(pairs[1])[0]) +
        ensure(ensure(pairs[1])[0])
      );
    }
    return 0;
  }
}

class Totals {
  private totals = new Map<string, number>();

  addScore(player: string, score: number) {
    if (this.totals.has(player)) {
      score = score + ensure(this.totals.get(player));
    }

    this.totals.set(player, score);
  }
  getScore(player: string): number {
    return ensure(this.totals.get(player));
  }
}

class CategoriesPlayed {
  private playedCaterogies = new Map<string, Categories[]>();

  addCategory(player: string, category: Categories) {
    const playerCategories = this.playedCaterogies.get(player);

    if (playerCategories && playerCategories.includes(category)) {
      throw new Error('Category already played');
    }

    if (playerCategories) {
      this.playedCaterogies.set(player, playerCategories.concat([category]));
      return;
    }

    this.playedCaterogies.set(player, [category]);
  }
}

class Yahtzee {
  private totals = new Totals();
  private categoriesPlayed = new CategoriesPlayed();

  private categoryCalculation = new Map<Categories, (r: Roll) => number>([
    [Categories.Ones, (r: Roll) => new Ones().score(r)],
    [Categories.Twos, (r: Roll) => r.sum(2)],
    [Categories.Threes, (r: Roll) => r.sum(3)],
    [Categories.Fours, (r: Roll) => r.sum(4)],
    [Categories.Fives, (r: Roll) => r.sum(5)],
    [Categories.Sixes, (r: Roll) => r.sum(6)],
    [Categories.Pair, (r: Roll) => r.repeated(2)],
    [Categories.TwoPairs, (r: Roll) => new TwoPairs().score(r)],
    [Categories.ThreeOfAKind, (r: Roll) => r.repeated(3)],
    [Categories.FourOfAKind, (r: Roll) => r.repeated(4)],
  ]);

  totalScoreFor(player: string): number {
    return ensure(this.totals.getScore(player));
  }

  scoreRoll(roll: Roll, category: Categories, player: string): number {
    let score = 0;
    const calculator = this.categoryCalculation.get(category);
    if (calculator !== null && calculator !== undefined) {
      score = calculator(roll);
    }
    this.totals.addScore(player, score);
    this.categoriesPlayed.addCategory(player, category);
    return score;

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

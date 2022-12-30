import Yathzee, { Categories, Roll } from '../../Yahtzee/Yahtzee';

describe('Yathzee', () => {
  describe('Category Ones', () => {
    test('Rolled 1 on one dice', () => {
      const roll: Roll = new Roll(1, 2, 3, 4, 5);

      expect(new Yathzee().scoreRoll(roll, Categories.Ones, 'Diogo')).toBe(1);
    });

    test('Rolled 1 on two dices', () => {
      const roll: Roll = new Roll(1, 1, 3, 4, 5);

      expect(new Yathzee().scoreRoll(roll, Categories.Ones, 'Diogo')).toBe(2);
    });

    test('Rolled 1 on three dices', () => {
      const roll: Roll = new Roll(1, 2, 1, 4, 1);

      expect(new Yathzee().scoreRoll(roll, Categories.Ones, 'Diogo')).toBe(3);
    });

    test('Rolled 1 on four dices', () => {
      const roll: Roll = new Roll(1, 1, 3, 1, 1);

      expect(new Yathzee().scoreRoll(roll, Categories.Ones, 'Diogo')).toBe(4);
    });

    test('Rolled 1 on five dices', () => {
      const roll: Roll = new Roll(1, 1, 1, 1, 1);

      expect(new Yathzee().scoreRoll(roll, Categories.Ones, 'Diogo')).toBe(5);
    });
  });

  describe('Category Twos', () => {
    test('Rolled 2 on one dice', () => {
      const roll: Roll = new Roll(1, 2, 3, 4, 5);

      expect(new Yathzee().scoreRoll(roll, Categories.Twos, 'Diogo')).toBe(2);
    });

    test('Rolled 2 on two dice', () => {
      const roll: Roll = new Roll(1, 2, 3, 4, 2);

      expect(new Yathzee().scoreRoll(roll, Categories.Twos, 'Diogo')).toBe(4);
    });

    test('Rolled 2 on three dice', () => {
      const roll: Roll = new Roll(1, 2, 2, 2, 5);

      expect(new Yathzee().scoreRoll(roll, Categories.Twos, 'Diogo')).toBe(6);
    });

    test('Rolled 2 on four dice', () => {
      const roll: Roll = new Roll(2, 2, 2, 2, 5);

      expect(new Yathzee().scoreRoll(roll, Categories.Twos, 'Diogo')).toBe(8);
    });

    test('Rolled 2 on five dice', () => {
      const roll: Roll = new Roll(2, 2, 2, 2, 2);

      expect(new Yathzee().scoreRoll(roll, Categories.Twos, 'Diogo')).toBe(10);
    });
  });

  describe('Category Threes', () => {
    test('Roled 3 on one dice', () => {
      const roll: Roll = new Roll(1, 2, 3, 4, 5);

      expect(new Yathzee().scoreRoll(roll, Categories.Threes, 'Diogo')).toBe(3);
    });

    test('Roled 3 on two dice', () => {
      const roll: Roll = new Roll(1, 2, 3, 4, 3);

      expect(new Yathzee().scoreRoll(roll, Categories.Threes, 'Diogo')).toBe(6);
    });

    test('Roled 3 on three dice', () => {
      const roll: Roll = new Roll(1, 3, 3, 4, 3);

      expect(new Yathzee().scoreRoll(roll, Categories.Threes, 'Diogo')).toBe(9);
    });

    test('Roled 3 on four dice', () => {
      const roll: Roll = new Roll(3, 3, 3, 3, 5);

      expect(new Yathzee().scoreRoll(roll, Categories.Threes, 'Diogo')).toBe(
        12
      );
    });

    test('Roled 3 on five dice', () => {
      const roll: Roll = new Roll(3, 3, 3, 3, 3);

      expect(new Yathzee().scoreRoll(roll, Categories.Threes, 'Diogo')).toBe(
        15
      );
    });
  });

  describe('Category Fours', () => {
    test('Rolled 4 on one dice', () => {
      const roll: Roll = new Roll(1, 2, 3, 4, 5);

      expect(new Yathzee().scoreRoll(roll, Categories.Fours, 'Diogo')).toBe(4);
    });

    test('Rolled 4 on two dice', () => {
      const roll: Roll = new Roll(4, 2, 3, 4, 5);

      expect(new Yathzee().scoreRoll(roll, Categories.Fours, 'Diogo')).toBe(8);
    });

    test('Rolled 4 on three dice', () => {
      const roll: Roll = new Roll(4, 2, 4, 4, 5);

      expect(new Yathzee().scoreRoll(roll, Categories.Fours, 'Diogo')).toBe(12);
    });

    test('Rolled 4 on four dice', () => {
      const roll: Roll = new Roll(4, 4, 3, 4, 4);

      expect(new Yathzee().scoreRoll(roll, Categories.Fours, 'Diogo')).toBe(16);
    });

    test('Rolled 4 on five dice', () => {
      const roll: Roll = new Roll(4, 4, 4, 4, 4);

      expect(new Yathzee().scoreRoll(roll, Categories.Fours, 'Diogo')).toBe(20);
    });
  });

  describe('Category Fives', () => {
    test('Rolled 5 on one dice', () => {
      const roll: Roll = new Roll(1, 2, 3, 4, 5);

      expect(new Yathzee().scoreRoll(roll, Categories.Fives, 'Diogo')).toBe(5);
    });

    test('Rolled 5 on two dice', () => {
      const roll: Roll = new Roll(5, 2, 3, 4, 5);

      expect(new Yathzee().scoreRoll(roll, Categories.Fives, 'Diogo')).toBe(10);
    });

    test('Rolled 5 on three dice', () => {
      const roll: Roll = new Roll(1, 5, 5, 4, 5);

      expect(new Yathzee().scoreRoll(roll, Categories.Fives, 'Diogo')).toBe(15);
    });

    test('Rolled 5 on four dice', () => {
      const roll: Roll = new Roll(5, 5, 5, 4, 5);

      expect(new Yathzee().scoreRoll(roll, Categories.Fives, 'Diogo')).toBe(20);
    });

    test('Rolled 5 on five dice', () => {
      const roll: Roll = new Roll(5, 5, 5, 5, 5);

      expect(new Yathzee().scoreRoll(roll, Categories.Fives, 'Diogo')).toBe(25);
    });
  });

  describe('Category Sixes', () => {
    test('Rolled 6 on one dice', () => {
      const roll: Roll = new Roll(6, 2, 3, 4, 5);

      expect(new Yathzee().scoreRoll(roll, Categories.Sixes, 'Diogo')).toBe(6);
    });

    test('Rolled 6 on two dice', () => {
      const roll: Roll = new Roll(6, 2, 6, 4, 5);

      expect(new Yathzee().scoreRoll(roll, Categories.Sixes, 'Diogo')).toBe(12);
    });

    test('Rolled 6 on three dice', () => {
      const roll: Roll = new Roll(6, 2, 6, 4, 6);

      expect(new Yathzee().scoreRoll(roll, Categories.Sixes, 'Diogo')).toBe(18);
    });

    test('Rolled 6 on four dice', () => {
      const roll: Roll = new Roll(6, 6, 3, 6, 6);

      expect(new Yathzee().scoreRoll(roll, Categories.Sixes, 'Diogo')).toBe(24);
    });

    test('Rolled 6 on five dice', () => {
      const roll: Roll = new Roll(6, 6, 6, 6, 6);

      expect(new Yathzee().scoreRoll(roll, Categories.Sixes, 'Diogo')).toBe(30);
    });
  });

  describe('Pairs', () => {
    test('A Pair of ones', () => {
      const roll: Roll = new Roll(1, 1, 2, 3, 4);

      expect(new Yathzee().scoreRoll(roll, Categories.Pair, 'Diogo')).toBe(2);
    });
    test('A Pair of twos', () => {
      const roll: Roll = new Roll(1, 2, 2, 3, 4);

      expect(new Yathzee().scoreRoll(roll, Categories.Pair, 'Diogo')).toBe(4);
    });

    test('A Pair of threes', () => {
      const roll: Roll = new Roll(1, 3, 2, 3, 4);

      expect(new Yathzee().scoreRoll(roll, Categories.Pair, 'Diogo')).toBe(6);
    });

    test('A Pair of fours', () => {
      const roll: Roll = new Roll(1, 4, 2, 3, 4);

      expect(new Yathzee().scoreRoll(roll, Categories.Pair, 'Diogo')).toBe(8);
    });

    test('A Pair of fives', () => {
      const roll: Roll = new Roll(1, 5, 5, 3, 4);

      expect(new Yathzee().scoreRoll(roll, Categories.Pair, 'Diogo')).toBe(10);
    });

    test('A Pair of sixes', () => {
      const roll: Roll = new Roll(1, 6, 6, 3, 4);

      expect(new Yathzee().scoreRoll(roll, Categories.Pair, 'Diogo')).toBe(12);
    });
  });

  describe('Two Pairs', () => {
    test('Two Pairs', () => {
      const roll: Roll = new Roll(1, 1, 2, 3, 3);

      expect(new Yathzee().scoreRoll(roll, Categories.TwoPairs, 'Diogo')).toBe(
        8
      );
    });
  });

  describe('Three of a kind', () => {
    test('Three of kind in ones', () => {
      const roll: Roll = new Roll(1, 1, 1, 3, 4);

      expect(
        new Yathzee().scoreRoll(roll, Categories.ThreeOfAKind, 'Diogo')
      ).toBe(3);
    });

    test('Three of kind in twos', () => {
      const roll: Roll = new Roll(1, 2, 2, 2, 4);

      expect(
        new Yathzee().scoreRoll(roll, Categories.ThreeOfAKind, 'Diogo')
      ).toBe(6);
    });

    test('Three of kind in threes', () => {
      const roll: Roll = new Roll(1, 3, 3, 3, 4);

      expect(
        new Yathzee().scoreRoll(roll, Categories.ThreeOfAKind, 'Diogo')
      ).toBe(9);
    });

    test('Three of kind in fours', () => {
      const roll: Roll = new Roll(1, 1, 4, 4, 4);

      expect(
        new Yathzee().scoreRoll(roll, Categories.ThreeOfAKind, 'Diogo')
      ).toBe(12);
    });

    test('Three of kind in onfiveses', () => {
      const roll: Roll = new Roll(5, 5, 5, 3, 4);

      expect(
        new Yathzee().scoreRoll(roll, Categories.ThreeOfAKind, 'Diogo')
      ).toBe(15);
    });

    test('Three of kind in sixes', () => {
      const roll: Roll = new Roll(6, 6, 6, 3, 4);

      expect(
        new Yathzee().scoreRoll(roll, Categories.ThreeOfAKind, 'Diogo')
      ).toBe(18);
    });
  });

  describe('Four of a kind', () => {
    test('Four of kind in ones', () => {
      const roll: Roll = new Roll(1, 1, 1, 1, 4);

      expect(
        new Yathzee().scoreRoll(roll, Categories.FourOfAKind, 'Diogo')
      ).toBe(4);
    });

    test('Four of kind in twos', () => {
      const roll: Roll = new Roll(2, 2, 2, 2, 4);

      expect(
        new Yathzee().scoreRoll(roll, Categories.FourOfAKind, 'Diogo')
      ).toBe(8);
    });

    test('Four of kind in threes', () => {
      const roll: Roll = new Roll(3, 3, 3, 3, 4);

      expect(
        new Yathzee().scoreRoll(roll, Categories.FourOfAKind, 'Diogo')
      ).toBe(12);
    });

    test('Four of kind in fours', () => {
      const roll: Roll = new Roll(4, 4, 4, 4, 5);

      expect(
        new Yathzee().scoreRoll(roll, Categories.FourOfAKind, 'Diogo')
      ).toBe(16);
    });

    test('Four of kind in fives', () => {
      const roll: Roll = new Roll(5, 5, 5, 5, 4);

      expect(
        new Yathzee().scoreRoll(roll, Categories.FourOfAKind, 'Diogo')
      ).toBe(20);
    });

    test('Four of kind in sixes', () => {
      const roll: Roll = new Roll(6, 6, 6, 6, 4);

      expect(
        new Yathzee().scoreRoll(roll, Categories.FourOfAKind, 'Diogo')
      ).toBe(24);
    });
  });

  describe('Total', () => {
    test('Total score is the sum of two rolls', () => {
      const rollOne: Roll = new Roll(1, 1, 1, 1, 1);
      const rollTwo: Roll = new Roll(2, 2, 2, 2, 2);
      const game = new Yathzee();

      game.scoreRoll(rollOne, Categories.Ones, 'Diogo');
      game.scoreRoll(rollTwo, Categories.Twos, 'Diogo');

      expect(game.totalScoreFor('Diogo')).toBe(15);
    });
  });

  test('Total score is the sum of three rolls', () => {
    const rollOne: Roll = new Roll(1, 1, 1, 1, 1);
    const rollTwo: Roll = new Roll(2, 2, 2, 2, 2);
    const rollThree: Roll = new Roll(3, 3, 3, 3, 3);
    const game = new Yathzee();

    game.scoreRoll(rollOne, Categories.Ones, 'Diogo');
    game.scoreRoll(rollTwo, Categories.Twos, 'Diogo');
    game.scoreRoll(rollThree, Categories.Threes, 'Diogo');

    expect(game.totalScoreFor('Diogo')).toBe(30);
  });

  describe('Same player can not play twice in', () => {
    test('Ones category', () => {
      const rollOne: Roll = new Roll(1, 1, 1, 1, 1);
      const game = new Yathzee();

      game.scoreRoll(rollOne, Categories.Ones, 'Diogo');
      expect(() => game.scoreRoll(rollOne, Categories.Ones, 'Diogo')).toThrow(
        'Category already played'
      );
    });

    test('Ones and twos category', () => {
      const rollOne: Roll = new Roll(1, 1, 1, 1, 1);
      const rollTwo: Roll = new Roll(2, 2, 2, 2, 2);
      const game = new Yathzee();

      game.scoreRoll(rollOne, Categories.Ones, 'Diogo');
      game.scoreRoll(rollTwo, Categories.Twos, 'Diogo');
      expect(() => game.scoreRoll(rollOne, Categories.Ones, 'Diogo')).toThrow(
        'Category already played'
      );
    });
  });

  // describe('Different players can play in', () => {
  //   test('Ones category', () => {
  //     const rollOne: Roll = new Roll(1, 1, 1, 1, 1);
  //     const rollTwo: Roll = new Roll(1, 1, 1, 1, 1);
  //     const game = new Yathzee();

  //     game.scoreRoll(rollOne, Categories.Ones, 'Diogo');

  //     expect(() => game.scoreRoll(rollTwo, Categories.Ones, 'Pedro')).toBe(5);
  //   });
  // });
});

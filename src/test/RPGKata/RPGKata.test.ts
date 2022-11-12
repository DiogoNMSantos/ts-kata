import { MeleeCharacter, RangedCharacter } from '../../RPGKata/RPGKata';

describe('RPG Kata', () => {
  describe('Melee characters', () => {
    const melee = new MeleeCharacter();
    test('when created, have health starting at 1000', () => {
      expect(melee.health()).toBe(1000);
    });

    test('start at level 1', () => {
      expect(melee.level()).toBe(1);
    });

    test('start alive', () => {
      expect(melee.alive()).toBe(true);
    });
  });

  describe('Ranged characters', () => {
    const ranged = new RangedCharacter();
    test('when created, have health starting at 700', () => {
      expect(ranged.health()).toBe(700);
    });

    test('start at level 1', () => {
      expect(ranged.level()).toBe(1);
    });

    test('start alive', () => {
      expect(ranged.alive()).toBe(true);
    });
  });

  describe('Combat', () => {
    describe('Melee', () => {
      test('attacker deals 80 damage to other melee character', () => {
        const attacker = new MeleeCharacter();
        const defender = new MeleeCharacter();

        attacker.attack(defender);

        expect(defender.health()).toBe(920);
      });

      test('attacker deals 80 damage to other ranged character', () => {
        const attacker = new MeleeCharacter();
        const defender = new RangedCharacter();

        attacker.attack(defender);

        expect(defender.health()).toBe(620);
      });

      test('Can not deal damage to itself', () => {
        const attacker = new MeleeCharacter();

        attacker.attack(attacker);

        expect(attacker.health()).toBe(1000);
      });

      test('if the target is 5 Levels above the attacker, Damage is reduced by 50%', () => {
        const attacker = new MeleeCharacter();
        const defender = new MeleeCharacter(6);

        attacker.attack(defender);

        expect(defender.health()).toBe(960);
      });

      test('if the attacker is 5 Levels above the defender, Damage is increased by 50%', () => {
        const attacker = new MeleeCharacter(6);
        const defender = new MeleeCharacter();

        attacker.attack(defender);

        expect(defender.health()).toBe(880);
      });

      test('If the attacker and the defender are more than 2 meters apart form eachother, No damage is done', () => {
        const attacker = new MeleeCharacter(6, 3);
        const defender = new MeleeCharacter(1, 0);

        attacker.attack(defender);

        expect(defender.health()).toBe(1000);
      });
    });

    describe('Ranged', () => {
      test('attacker deals 110 damage to other ranged character', () => {
        const attacker = new RangedCharacter();
        const defender = new RangedCharacter();

        attacker.attack(defender);

        expect(defender.health()).toBe(590);
      });

      test('attacker deals 110 damage to other melee character', () => {
        const attacker = new RangedCharacter();
        const defender = new MeleeCharacter();

        attacker.attack(defender);

        expect(defender.health()).toBe(890);
      });

      test('Can not deal damage to itself', () => {
        const attacker = new RangedCharacter();

        attacker.attack(attacker);

        expect(attacker.health()).toBe(700);
      });

      test('if the target is 5 Levels above the attacker, Damage is reduced by 50%', () => {
        const attacker = new RangedCharacter();
        const defender = new RangedCharacter(6);

        attacker.attack(defender);

        expect(defender.health()).toBe(645);
      });

      test('if the attacker is 5 Levels above the defender, Damage is increased by 50%', () => {
        const attacker = new RangedCharacter(6);
        const defender = new RangedCharacter();

        attacker.attack(defender);

        expect(defender.health()).toBe(535);
      });
    });

    describe('A character dies when', () => {
      test('Health is below 0 or 0', () => {
        const attacker = new MeleeCharacter();
        const defender = new MeleeCharacter();

        attacker.attack(defender);
        attacker.attack(defender);
        attacker.attack(defender);
        attacker.attack(defender);
        attacker.attack(defender);
        attacker.attack(defender);
        attacker.attack(defender);
        attacker.attack(defender);
        attacker.attack(defender);
        attacker.attack(defender);
        attacker.attack(defender);
        attacker.attack(defender);
        attacker.attack(defender);

        expect(defender.health()).toBe(0);
        expect(defender.alive()).toBe(false);
      });

      test('Health is below 0 or 0 for ranged characters', () => {
        const attacker = new RangedCharacter();
        const defender = new RangedCharacter();

        attacker.attack(defender);
        attacker.attack(defender);
        attacker.attack(defender);
        attacker.attack(defender);
        attacker.attack(defender);
        attacker.attack(defender);
        attacker.attack(defender);

        expect(defender.health()).toBe(0);
        expect(defender.alive()).toBe(false);
      });
    });
  });

  describe('Healing', () => {
    test('A character can not be healed if its dead', () => {
      const attacker = new RangedCharacter();
      const defender = new RangedCharacter();
      const healer = new RangedCharacter();

      attacker.attack(defender);
      attacker.attack(defender);
      attacker.attack(defender);
      attacker.attack(defender);
      attacker.attack(defender);
      attacker.attack(defender);
      attacker.attack(defender);

      healer.heal(defender);

      expect(defender.alive()).toBe(false);
    });

    test('Raises health by 80', () => {
      const attacker = new RangedCharacter();
      const defender = new RangedCharacter();
      const healer = new RangedCharacter();

      attacker.attack(defender);

      healer.heal(defender);

      expect(defender.health()).toBe(670);
    });

    test('cannot raise health above Max health', () => {
      const defender = new RangedCharacter();
      const healer = new RangedCharacter();

      healer.heal(defender);

      expect(defender.health()).toBe(700);
    });

    test('Healer can heal itself', () => {
      const attacker = new RangedCharacter();
      const healer = new RangedCharacter();

      attacker.attack(healer);
      healer.heal(healer);

      expect(healer.health()).toBe(670);
    });
  });

  test('if the defender is 5 Levels above the healer, healing is decreased by 50%', () => {
    const attacker = new MeleeCharacter();
    const defender = new MeleeCharacter(6);
    const healer = new RangedCharacter();

    attacker.attack(defender);
    healer.heal(defender);

    expect(defender.health()).toBe(1000);
  });

  test('if the defender is 5 Levels below the healer, healing is increase by 50%', () => {
    const attacker = new MeleeCharacter();
    const defender = new MeleeCharacter();
    const healer = new RangedCharacter(6);

    attacker.attack(defender);
    healer.heal(defender);

    expect(defender.health()).toBe(1000);
  });
});

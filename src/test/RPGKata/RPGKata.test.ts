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
    });

    describe('Ranged', () => {
      test('attacker deals 100 damage to other ranged character', () => {
        const attacker = new RangedCharacter();
        const defender = new RangedCharacter();

        attacker.attack(defender);

        expect(defender.health()).toBe(600);
      });

      test('attacker deals 100 damage to other melee character', () => {
        const attacker = new RangedCharacter();
        const defender = new MeleeCharacter();

        attacker.attack(defender);

        expect(defender.health()).toBe(900);
      });
    });
  });
});

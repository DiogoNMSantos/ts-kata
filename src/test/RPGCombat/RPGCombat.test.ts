import Character from '../../RPGCombat/RPGCOmbat';

describe('RPG Combat', () => {
  let attacker: Character = new Character();
  let defender: Character = new Character();
  let healer: Character = new Character();
  let higherLvl: Character = new Character();

  beforeEach(() => {
    attacker = new Character();
    defender = new Character();
    higherLvl = new Character(6);
    healer = new Character();
  });

  describe('All character when created have', () => {
    test('lvl 1 and 1000 health', () => {
      const character: Character = new Character();
      expect(character.isAlive).toBe(true);
      expect(character.health).toBe(1000);
      expect(character.level).toBe(1);
    });
  });
  describe('Characters can deal damage', () => {
    test('Damage is substracted from health', () => {
      attacker.attack(defender);

      expect(defender.health).toBe(900);
    });

    test('When damage exceeds current health, health becomes 0', () => {
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

      expect(defender.health).toBe(0);
    });

    test('When health drops to 0, character dies', () => {
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

      expect(defender.isAlive).toBe(false);
    });

    test('A character cannot deal damage to itself', () => {
      attacker.attack(attacker);

      expect(attacker.health).toBe(1000);
    });

    test('Tasrgets 5 lvls or above take 50% reduced damage', () => {
      attacker.attack(higherLvl);

      expect(higherLvl.health).toBe(950);
    });
  });

  describe('Character can heal a character', () => {
    test('Health of healed characater increases', () => {
      attacker.attack(healer);
      healer.heal(healer);

      expect(healer.health).toBe(950);
    });

    test('Dead characters cannot be healed', () => {
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

      healer.heal(defender);

      expect(defender.isAlive).toBe(false);
    });

    test('Healing cannot raise health above 1000', () => {
      healer.heal(defender);

      expect(defender.health).toBe(1000);
    });

    test('A character can only heal itself', () => {
      attacker.attack(defender);
      healer.heal(defender);

      expect(defender.health).toBe(900);
    });
  });
});

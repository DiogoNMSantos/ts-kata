import Character from '../../RPGCombat/RPGCOmbat';

describe('RPG Combat', () => {
  describe('All character when created have', () => {
    test('lvl 1 and 1000 health', () => {
      const character: Character = new Character();
      expect(character.isAlive()).toBe(true);
      expect(character.health()).toBe(1000);
      expect(character.lvl()).toBe(1);
    });
  });
  describe('Characters can deal damage to other characters', () => {
    let attacker: Character = new Character();
    let defender: Character = new Character();

    beforeEach(() => {
      attacker = new Character();
      defender = new Character();
    });

    test('Damage is substracted from health', () => {
      attacker.attack(defender);

      expect(defender.health()).toBe(900);
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

      expect(defender.health()).toBe(0);
    });
  });
});

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
    test('Damage is substracted from health', () => {
      const attacker: Character = new Character();
      const defender: Character = new Character();

      attacker.attack(defender);

      expect(defender.health()).toBe(900);
    });
  });
});

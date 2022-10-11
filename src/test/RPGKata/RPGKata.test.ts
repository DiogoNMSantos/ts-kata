import Character from '../../RPGKata/RPGKata';

describe('RPG Kata', () => {
  describe('Melee characters', () => {
    const melee = new Character();
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
});

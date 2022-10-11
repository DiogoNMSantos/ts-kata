import Character from '../../RPGKata/RPGKata';

describe('RPG Kata', () => {
  test('Melee characters, when created, have health starting at 1000', () => {
    const melee = new Character();
    expect(melee.health()).toBe(1000);
  });
});

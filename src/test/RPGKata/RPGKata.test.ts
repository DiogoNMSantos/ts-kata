import Character from '../../RPGKata/RPGKata';

describe('RPG Kata', () => {
  test('Melee characters, when created, have health starting at 1000', () => {
    const melee = new Character();
    expect(melee.health()).toBe(1000);
  });

  test('Melee characters start at level 1', () => {
    const melee = new Character();
    expect(melee.level()).toBe(1);
  });

  test('Melee characters start alive', () => {
    const melee = new Character();
    expect(melee.alive()).toBe(true);
  });
});

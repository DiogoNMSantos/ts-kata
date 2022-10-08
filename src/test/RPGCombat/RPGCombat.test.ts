import rpgCombat from '../../RPGCombat/RPGCOmbat';

describe('RPG Combat', () => {
  test('rpg combat operational', () => {
    expect(rpgCombat()).toBe(true);
  });
});

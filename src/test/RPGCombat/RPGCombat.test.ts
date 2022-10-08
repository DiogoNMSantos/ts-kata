import Character from '../../RPGCombat/RPGCOmbat';

describe('RPG Combat', () => {
  test('A character starts alive at lvl 1', () => {
    const character: Character = new Character();
    expect(character.isAlive()).toBe(true);
    expect(character.lvl()).toBe(1);
  });
});

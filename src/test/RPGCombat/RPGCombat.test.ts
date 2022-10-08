import Character from '../../RPGCombat/RPGCOmbat';

describe('RPG Combat', () => {
  test('A character starts alive at lvl 1 with 1000 health', () => {
    const character: Character = new Character();
    expect(character.isAlive()).toBe(true);
    expect(character.health()).toBe(1000);
    expect(character.lvl()).toBe(1);
  });
});

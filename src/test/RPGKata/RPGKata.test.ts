import character from '../../RPGKata/RPGKata';

describe('RPG Kata', () => {
  test('All Characters, when created, have health starting at 1000', () => {
    expect(character()).toBe('');
  });
});

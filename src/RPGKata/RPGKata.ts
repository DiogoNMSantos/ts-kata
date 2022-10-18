abstract class Character {
  currentHealth = 0;

  constructor(maxHealth: number) {
    this.currentHealth = maxHealth;
  }

  health(): number {
    return this.currentHealth;
  }
  level(): number {
    return 1;
  }
  alive(): boolean {
    return true;
  }
  attack(defender: Character): void {
    defender.currentHealth -= 100;
  }
}

class MeleeCharacter extends Character {
  constructor() {
    super(1000);
  }

  override attack(defender: Character): void {
    defender.currentHealth -= 80;
  }
}

class RangedCharacter extends Character {
  constructor() {
    super(700);
  }

  override attack(defender: Character): void {
    defender.currentHealth -= 110;
  }
}

export { MeleeCharacter, RangedCharacter };

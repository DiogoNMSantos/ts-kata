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
    return this.currentHealth > 0;
  }

  attack(defender: Character): void {
    defender.currentHealth -= 100;

    if (defender.currentHealth <= 0) {
      defender.currentHealth = 0;
    }
  }
}

class MeleeCharacter extends Character {
  constructor() {
    super(1000);
  }

  override attack(defender: Character): void {
    defender.currentHealth -= 80;

    if (defender.currentHealth <= 0) {
      defender.currentHealth = 0;
    }
  }
}

class RangedCharacter extends Character {
  constructor() {
    super(700);
  }

  override attack(defender: Character): void {
    defender.currentHealth -= 110;

    if (defender.currentHealth <= 0) {
      defender.currentHealth = 0;
    }
  }
}

export { MeleeCharacter, RangedCharacter };

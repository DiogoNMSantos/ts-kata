abstract class Character {
  currentHealth = 0;
  maxHealth = 0;

  constructor(maxHealth: number) {
    this.maxHealth = maxHealth;
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

    this.checkDefenderDied(defender);
  }

  heal(healed: Character): void {
    if (healed.alive()) {
      healed.currentHealth += 80;

      this.checkMaxHealth(healed);
    }
  }

  protected checkDefenderDied(defender: Character): void {
    if (defender.currentHealth <= 0) {
      defender.currentHealth = 0;
    }
  }

  private checkMaxHealth(character: Character): void {
    if (character.currentHealth > this.maxHealth) {
      character.currentHealth = this.maxHealth;
    }
  }
}

class MeleeCharacter extends Character {
  constructor() {
    super(1000);
  }

  override attack(defender: Character): void {
    defender.currentHealth -= 80;

    this.checkDefenderDied(defender);
  }
}

class RangedCharacter extends Character {
  constructor() {
    super(700);
  }

  override attack(defender: Character): void {
    defender.currentHealth -= 110;

    this.checkDefenderDied(defender);
  }
}

export { MeleeCharacter, RangedCharacter };

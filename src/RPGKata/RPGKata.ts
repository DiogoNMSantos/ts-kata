abstract class Character {
  currentHealth = 0;
  maxHealth = 0;
  lvl = 1;

  constructor(maxHealth: number, lvl: number) {
    this.maxHealth = maxHealth;
    this.currentHealth = maxHealth;
    this.lvl = lvl;
  }

  health(): number {
    return this.currentHealth;
  }

  level(): number {
    return this.lvl;
  }

  alive(): boolean {
    return this.currentHealth > 0;
  }

  attack(defender: Character): void {
    if (defender === this) {
      return;
    }

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

  protected isDefenderItself(defender: Character): boolean {
    return defender === this;
  }

  private checkMaxHealth(character: Character): void {
    if (character.currentHealth > this.maxHealth) {
      character.currentHealth = this.maxHealth;
    }
  }
}

class MeleeCharacter extends Character {
  constructor(lvl = 1) {
    super(1000, lvl);
  }

  override attack(defender: Character): void {
    if (this.isDefenderItself(defender)) {
      return;
    }

    if (defender.level() - this.level() >= 5) {
      defender.currentHealth -= 40;
    } else {
      defender.currentHealth -= 80;
    }

    this.checkDefenderDied(defender);
  }
}

class RangedCharacter extends Character {
  constructor(lvl = 1) {
    super(700, lvl);
  }

  override attack(defender: Character): void {
    if (this.isDefenderItself(defender)) {
      return;
    }

    if (defender.level() - this.level() >= 5) {
      defender.currentHealth -= 55;
    } else {
      defender.currentHealth -= 110;
    }

    this.checkDefenderDied(defender);
  }
}

export { MeleeCharacter, RangedCharacter };

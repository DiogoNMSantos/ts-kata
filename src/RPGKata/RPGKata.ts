abstract class Character {
  currentHealth = 0;
  private maxHealth = 0;
  private lvl = 1;
  position = 0;

  private readonly DefaultDamage = 100;

  private readonly MaxHealingRange = 10;

  private readonly HealingLevelThreshold = 5;

  private readonly DecreasedHealing = 40;

  private readonly IncreasedHealing = 120;

  private readonly DefaultHealing = 80;

  constructor(maxHealth: number, lvl: number, x = 0) {
    this.maxHealth = maxHealth;
    this.currentHealth = maxHealth;
    this.lvl = lvl;
    this.position = x;
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

    defender.currentHealth -= this.DefaultDamage;

    this.checkDefenderDied(defender);
  }

  heal(healed: Character): void {
    if (!healed.alive()) {
      return;
    }
    if (this.IsNotInHealingRange(healed)) {
      return;
    }

    if (this.IsBelowHealingThreshold(healed)) {
      healed.currentHealth += this.DecreasedHealing;
    } else if (this.IsAboveHealingThreshold(healed)) {
      healed.currentHealth += this.IncreasedHealing;
    } else {
      healed.currentHealth += this.DefaultHealing;
    }

    this.checkMaxHealth(healed);
  }

  private IsAboveHealingThreshold(healed: Character) {
    return this.level() - healed.level() >= this.HealingLevelThreshold;
  }

  private IsBelowHealingThreshold(healed: Character) {
    return healed.level() - this.level() >= this.HealingLevelThreshold;
  }

  private IsNotInHealingRange(healed: Character) {
    return Math.abs(this.position - healed.position) > this.MaxHealingRange;
  }

  protected checkDefenderDied(defender: Character): void {
    if (defender.currentHealth <= 0) {
      defender.currentHealth = 0;
    }
  }

  protected isDefenderItself(defender: Character): boolean {
    return defender === this;
  }

  protected checkMaxHealth(character: Character): void {
    if (character.currentHealth > character.maxHealth) {
      character.currentHealth = character.maxHealth;
    }
  }
}

class MeleeCharacter extends Character {
  constructor(lvl = 1, x = 0) {
    super(1000, lvl, x);
  }

  override attack(defender: Character): void {
    if (this.isDefenderItself(defender)) {
      return;
    }

    if (Math.abs(this.position - defender.position) > 2) {
      return;
    }

    if (defender.level() - this.level() >= 5) {
      defender.currentHealth -= 40;
    } else if (this.level() - defender.level() >= 5) {
      defender.currentHealth -= 120;
    } else {
      defender.currentHealth -= 80;
    }

    this.checkDefenderDied(defender);
  }
}

class RangedCharacter extends Character {
  constructor(lvl = 1, x = 0) {
    super(700, lvl, x);
  }

  override attack(defender: Character): void {
    if (this.isDefenderItself(defender)) {
      return;
    }

    if (Math.abs(this.position - defender.position) > 20) {
      return;
    }

    if (defender.level() - this.level() >= 5) {
      defender.currentHealth -= 55;
    } else if (this.level() - defender.level() >= 5) {
      defender.currentHealth -= 165;
    } else {
      defender.currentHealth -= 110;
    }

    this.checkDefenderDied(defender);
  }
}

export { MeleeCharacter, RangedCharacter };

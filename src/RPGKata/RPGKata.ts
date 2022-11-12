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

  private readonly MinimumHealth = 0;

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
    return this.currentHealth > this.MinimumHealth;
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
    if (defender.currentHealth <= this.MinimumHealth) {
      defender.currentHealth = this.MinimumHealth;
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

  private readonly MaxMeleeRange = 2;

  private readonly MeleeLevelThreshold = 5;

  private readonly DecreasedMeleeDamage = 40;

  private readonly IncreasedMeleeDamage = 120;

  private readonly DefaultMeleeDamage = 80;

  override attack(defender: Character): void {
    if (this.isDefenderItself(defender)) {
      return;
    }

    if (this.IsNotInMeleeRange(defender)) {
      return;
    }

    if (this.isBelowMeleeLevelThreshold(defender)) {
      defender.currentHealth -= this.DecreasedMeleeDamage;
    } else if (this.IsAboveMeleeLevelThreshold(defender)) {
      defender.currentHealth -= this.IncreasedMeleeDamage;
    } else {
      defender.currentHealth -= this.DefaultMeleeDamage;
    }

    this.checkDefenderDied(defender);
  }

  private IsAboveMeleeLevelThreshold(defender: Character) {
    return this.level() - defender.level() >= this.MeleeLevelThreshold;
  }

  private isBelowMeleeLevelThreshold(defender: Character) {
    return defender.level() - this.level() >= this.MeleeLevelThreshold;
  }

  private IsNotInMeleeRange(defender: Character) {
    return Math.abs(this.position - defender.position) > this.MaxMeleeRange;
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

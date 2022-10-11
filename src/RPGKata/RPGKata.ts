class MeleeCharacter {
  currentHealth = 1000;

  health() {
    return this.currentHealth;
  }

  level() {
    return 1;
  }

  alive() {
    return true;
  }

  attack(defender: MeleeCharacter) {
    defender.currentHealth -= 100;
  }
}

class RangedCharacter {
  currentHealth = 700;

  health() {
    return this.currentHealth;
  }

  level() {
    return 1;
  }

  alive() {
    return true;
  }

  attack(defender: RangedCharacter) {
    defender.currentHealth -= 100;
  }
}

export { MeleeCharacter, RangedCharacter };

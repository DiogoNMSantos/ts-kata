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
  health() {
    return 700;
  }

  level() {
    return 1;
  }

  alive() {
    return true;
  }
}

export { MeleeCharacter, RangedCharacter };

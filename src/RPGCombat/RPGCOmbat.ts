class Character {
  private combatPoints = 1000;

  get isAlive() {
    return this.health !== 0;
  }

  get lvl() {
    return 1;
  }

  get health() {
    return this.combatPoints;
  }

  attack(target: Character) {
    if (target === this) {
      return;
    }

    target.combatPoints -= 100;

    if (target.combatPoints < 0) {
      target.combatPoints = 0;
    }
  }

  heal(target: Character) {
    if (target !== this) {
      return;
    }

    if (target.isAlive && target.health < 1000) {
      target.combatPoints += 50;
    }

    if (target.health > 1000) {
      target.combatPoints = 1000;
    }
  }
}

export default Character;

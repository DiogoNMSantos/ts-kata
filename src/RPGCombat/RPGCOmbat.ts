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

  attack(defender: Character) {
    defender.combatPoints -= 100;

    if (defender.combatPoints < 0) {
      defender.combatPoints = 0;
    }
  }

  heal(defender: Character) {
    if (defender.isAlive && defender.health < 1000) {
      defender.combatPoints += 50;
    }

    if (defender.health > 1000) {
      defender.combatPoints = 1000;
    }
  }
}

export default Character;

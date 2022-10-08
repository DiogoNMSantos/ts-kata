class Character {
  private combatPoints = 1000;

  get isAlive() {
    return this.health !== 0;
  }

  get lvl() {
    return 1;
  }

  get health() {
    return this.combatPoints <= 0 ? 0 : this.combatPoints;
  }

  attack(other: Character) {
    other.combatPoints -= 100;
  }

  heal(other: Character) {
    other.combatPoints += 50;
  }
}

export default Character;

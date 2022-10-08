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

  attack(defender: Character) {
    defender.combatPoints = defender.combatPoints - 100;
  }
}

export default Character;

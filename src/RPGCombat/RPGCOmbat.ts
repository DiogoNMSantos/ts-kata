class Character {
  private combatPoints = 1000;

  isAlive() {
    return this.health() !== 0;
  }

  lvl() {
    return 1;
  }

  health() {
    return this.combatPoints <= 0 ? 0 : this.combatPoints;
  }

  attack(defender: Character) {
    defender.combatPoints = defender.combatPoints - 100;
  }
}

export default Character;

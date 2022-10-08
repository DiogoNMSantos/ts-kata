class Character {
  private combatPoints = 1000;

  isAlive() {
    return true;
  }

  lvl() {
    return 1;
  }

  health() {
    return this.combatPoints;
  }

  attack(defender: Character) {
    defender.combatPoints = defender.combatPoints - 100;
  }
}

export default Character;

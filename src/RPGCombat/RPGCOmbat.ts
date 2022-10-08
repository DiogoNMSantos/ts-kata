class Character {
  private combatPoints = 1000;
  private lvl = 1;

  constructor(lvl = 1) {
    this.lvl = lvl;
  }

  get isAlive() {
    return this.health !== 0;
  }

  get level() {
    return this.lvl;
  }

  get health() {
    return this.combatPoints;
  }

  attack(target: Character) {
    if (target === this) {
      return;
    }

    if (target.lvl - this.lvl >= 5) {
      target.combatPoints -= 50;
    } else {
      target.combatPoints -= 100;
    }

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

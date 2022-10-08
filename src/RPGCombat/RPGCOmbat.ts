class Character {
  private combatPoints = 1000;
  private lvl = 1;
  private x = 0;

  LEVEL_DAMAGE_DIFFERENCE = 5;
  DAMAGE = 100;
  HEAL = 50;
  MAX_HEALTH = 1000;
  MELEE_MAX_RANGEE = 2;

  constructor(lvl = 1, x = 1) {
    this.x = x;
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

    if (Math.abs(this.x - target.x) > this.MELEE_MAX_RANGEE) {
      return;
    }

    if (target.lvl - this.lvl >= this.LEVEL_DAMAGE_DIFFERENCE) {
      target.combatPoints -= this.DAMAGE - this.DAMAGE / 2;
    } else if (this.lvl - target.lvl >= this.LEVEL_DAMAGE_DIFFERENCE) {
      target.combatPoints -= this.DAMAGE + this.DAMAGE / 2;
    } else {
      target.combatPoints -= this.DAMAGE;
    }

    if (target.combatPoints < 0) {
      target.combatPoints = 0;
    }
  }

  heal(target: Character) {
    if (target !== this) {
      return;
    }

    if (target.isAlive && target.health < this.MAX_HEALTH) {
      target.combatPoints += this.HEAL;
    }

    if (target.health > this.MAX_HEALTH) {
      target.combatPoints = this.MAX_HEALTH;
    }
  }
}

export default Character;

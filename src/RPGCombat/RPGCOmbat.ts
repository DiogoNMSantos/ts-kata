// interface Damageble {
//   recieveDamage(damage: number): void;
// }

interface Thing {
  get isAlive(): boolean;
  get health(): number;
}

interface Being extends Thing {
  get level(): number;

  attack(target: Character): void;
  heal(target: Character): void;
}

// class Wall implements Thing, Damageble {
//   combatPoints = 1000;
//   get isAlive(): boolean {
//     return this.health !== 0;
//   }
//   get health(): number {
//     return this.combatPoints;
//   }
//   recieveDamage(damage: number): void {
//     this.combatPoints -= damage;
//   }
// }

// class Monster implements Being{
//   attack(target: Character): void {
//     throw new Error("Method not implemented.");
//   }
//   heal(target: Character): void {
//     throw new Error("Method not implemented.");
//   }
//   get isAlive(): boolean {
//     throw new Error("Method not implemented.");
//   }
//   get level(): number {
//     throw new Error("Method not implemented.");
//   }
//   get health(): number {
//     throw new Error("Method not implemented.");
//   }
// }

abstract class Character implements Being {
  private combatPoints = 1000;
  private lvl = 1;
  private x = 0;

  LEVEL_DAMAGE_DIFFERENCE = 5;
  DAMAGE = 100;
  HEAL = 50;
  MAX_HEALTH = 1000;

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

    if (!this.isInRange(target)) {
      return;
    }

    this.assignDamage(target);

    this.lifeAdjustement(target);
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

  protected calculateDistance(other: Character): number {
    return Math.abs(this.x - other.x);
  }

  // Must override in children
  abstract isInRange(_: Character): boolean;

  private assignDamage(target: Character) {
    if (target.lvl - this.lvl >= this.LEVEL_DAMAGE_DIFFERENCE) {
      target.combatPoints -= this.DAMAGE - this.DAMAGE / 2;
    } else if (this.lvl - target.lvl >= this.LEVEL_DAMAGE_DIFFERENCE) {
      target.combatPoints -= this.DAMAGE + this.DAMAGE / 2;
    } else {
      target.combatPoints -= this.DAMAGE;
    }
  }

  private lifeAdjustement(target: Character) {
    if (target.combatPoints < 0) {
      target.combatPoints = 0;
    }
  }
}

class Melee extends Character {
  MAX_RANGEE = 2;

  override isInRange(target: Melee): boolean {
    return this.calculateDistance(target) < this.MAX_RANGEE;
  }
}

class Ranged extends Character {
  MAX_RANGEE = 20;

  override isInRange(target: Ranged): boolean {
    return this.calculateDistance(target) < this.MAX_RANGEE;
  }
}

export { Character, Melee, Ranged };

class MeleeCharacter {
  health() {
    return 1000;
  }

  level() {
    return 1;
  }

  alive() {
    return true;
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

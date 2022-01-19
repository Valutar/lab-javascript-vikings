// Soldier
class Soldier {
  //should receive 2 arguments (health & strength)
  constructor(health, strength) {
    // constructor is a function that initializes an object.
    this.health = health;
		this.strength = strength;

  }
    attack () {
      return this.strength;
      // should return the strength property of the Soldier
    }

    receiveDamage(damage) {
      // damage is the argument
       this.health -= damage;
       // should remove the received damage from the health property
    }
}

// Viking
class Viking extends Soldier {
  constructor(name, health, strength) {
    super(health, strength);
    this.name = name;
  }

  receiveDamage(damage) {
    this.health -= damage;
    if (this.health > 0) {
      return `${this.name} has received ${damage} points of damage`;
    } else {
      return `${this.name} has died in act of combat`;
    }
  }

  battleCry() {
    return 'Odin Owns You All!';
  }
}

// Saxon
class Saxon extends Soldier {
  attack (){
    return this.strength
  }

  receiveDamage(damage) {
    this.health -= damage;
    if (this.health > 0) {
      return `A Saxon has received ${damage} points of damage`;
    } else {
      return 'A Saxon has died in combat';
    }
  }
}

// Bonus War
class War {
  constructor() {
    this.vikingArmy = [];
    this.saxonArmy = [];
  }

  addViking(Viking) {
    this.vikingArmy.push(Viking);
  }

  addSaxon(Saxon) {
    this.saxonArmy.push(Saxon);
  }

  vikingAttack() {
    this.attack(this.vikingArmy, this.saxonArmy);
  }

  saxonAttack() {
    this.attack(this.saxonArmy, this.vikingArmy);
  }


}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = { Soldier, Viking, Saxon, War };
}

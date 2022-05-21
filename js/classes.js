class Hero {
  constructor({ name = "hero", xp = 1000, wallet = 5000 }) {
    this._name = name;
    this._xp = xp;
    this._wallet = wallet;
  }

  set name(newName) {
    this._name = newName;
  }

  get wallet() {
    return `В гаманці у ${this._name} ${this._wallet} монет.`;
  }

  set wallet(money) {
    this._wallet += money;
    return `${this._name} отримує ${money} монет. Всього: ${this._wallet} монет.`;
    //у сеттері return не видасть в консолі
  }

  set xp(xp) {
    this._xp += xp;
    return `${this._name} отримує ${xp} xp. Всього: ${this._xp} xp.`;
  }
}

const nadia = new Hero({ name: "Nadia" });
console.log(nadia);

nadia.xp = 500;
console.log(nadia.wallet);
nadia.wallet = 250;
console.log(nadia.wallet);

class Warrior extends Hero {
  constructor({ race, weapon, ...parentProp }) {
    super(parentProp);

    this._race = race;
    this._weapons = [weapon];
  }

  get race() {
    return `${this._name} належить до ${this._race} раси`;
  }

  get weapon() {
    const weapons = this._weapons.join(", ");
    return `${this._name} має таку зброю: ${weapons}.`;
  }

  set weapon(newWeapon) {
    const newArr = this._weapons.push(newWeapon);
    return `${this._name} отримує нову зброю - ${newArr}!`;
  }
}

const ivan = new Warrior({ race: "human", weapon: "sword" });

console.log(ivan);

console.log(ivan.weapon);

console.log(ivan.race);

console.log(ivan.wallet);

ivan.xp = 450;
ivan.name = "ivan";
ivan.weapon = "bow";
console.log(ivan.weapon);

ivan.weapon = "axe";
console.log(ivan.weapon);

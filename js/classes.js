class Hero {
  constructor({ name = "hero", xp = 1000, wallet = 5000 }) {
    this.name = name;
    this.xp = xp;
    this.wallet = wallet;
  }

  getWallet() {
    return `В гаманці у ${this.name} ${this.wallet} монет.`;
  }

  setWallet(money) {
    this.wallet += money;
    return `${this.name} отримує ${money} монет. Всього: ${this.wallet} монет.`;
  }

  setXp(xp) {
    this.xp += xp;
    return `${this.name} отримує ${xp} xp. Всього: ${this.xp} xp.`;
  }
}

const nadia = new Hero({ name: "Nadia" });
console.log(nadia);

console.log(nadia.setXp(500));
console.log(nadia.getWallet());
console.log(nadia.setWallet(250));

class Warrior extends Hero {
  constructor({ race, weapon, ...parentProp }) {
    super(parentProp);

    this.race = race;
    this.weapons = [weapon];
  }

  getRace() {
    return `${this.name} належить до ${this.race} раси`;
  }

  getWeapon() {
    const weapons = this.weapons.join(", ");
    return `${this.name} має таку зброю: ${weapons}.`;
  }

  setWeapon(newWeapon) {
    this.weapons.push(newWeapon);
    return `${this.name} отримує нову зброю - ${newWeapon}!`;
  }
}

const ivan = new Warrior({ race: "human", weapon: "sword" });
console.log(ivan);

console.log(ivan.getWeapon());

console.log(ivan.getRace());

console.log(ivan.getWallet());

console.log(ivan.setXp(450));

console.log(ivan.setWeapon("bow"));
console.log(ivan.getWeapon());

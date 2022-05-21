// 1.
// function getFirstItem() {
//   console.log(this.length);
// }

// getFirstItem([1, 2, 3]);

// 2.
// this у глобальній області видимості

// const petro = {
//   name: "Petro",

//   showName() {
//     console.log(this);

//     console.log(this.name);
//   },

//   setName(newName) {
//     this.name = newName;
//     // console.log(this.name);
//   },
// };

// petro.showName();
// petro.setName("Ivan");

// petro.showName();

// 3.
// this в методі об'єкта

// function showThis() {
//   console.log("this is object:", this);
// }

// showThis();

// const petro = {
//   name: "Petro",

//   showName() {
//     console.log(this.name);
//   },

//   setName(newName) {
//     this.name = newName;
//     // console.log(this.name);
//   },

//   // встановлюється з присвоєння функції для властивості:
//   // showContext() {
//   //   console.log("this is object:", this);
//   // }
// };

// petro.showContext = showThis;

// petro.showContext();

// 4.
// this в callback-функціях

// const user = {
//   firstName: "Nadia",
//   lastName: "Khoptiuk",

//   getFullName() {
//     console.log(`${this.firstName} ${this.lastName}`);
//   },
// };

// function makeMessage(callback) {
//   console.log(`Обробляємо заявку від користувача ${callback}`);
// }

// makeMessage(user.getFullName);

// у callback був присвоєний метод getFullName() {
//   console.log(`${this.firstName} ${this.lastName}`);
// },
// замість callback підставляє опис методу (оскільки його не викликали, а лише присвоїли).

// function makeMessage(callback) {
//   console.log(`Обробляємо заявку від користувача getFullName() {
//     console.log(`${this.firstName} ${this.lastName}`);
//   }`);
// }

// makeMessage(user.getFullName());

// Nadia Khoptiuk
// Обробляємо заявку від користувача undefined

// makeMessage.bind();

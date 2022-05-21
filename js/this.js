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

function showThis() {
  console.log("this is object:", this);
}

// showThis();

const petro = {
  name: "Petro",

  showName() {
    console.log(this.name);
  },

  setName(newName) {
    this.name = newName;
    // console.log(this.name);
  },

  // встановлюється з присвоєння функції для властивості:
  // showContext() {
  //   console.log("this is object:", this);
  // }
};

// petro.showContext = showThis;

// petro.showContext();
// showThis();

// 4. this в callback-функціях

// const user = {
//   firstName: "Nadia",
//   lastName: "Khoptiuk",

//   getFullName() {
//     return `${this.firstName} ${this.lastName}`;
//   },
// };

// function makeMessage(callback) {
//   console.log(`Обробляємо заявку від користувача ${callback}`);
// }

// makeMessage(user.getFullName);

// у callback був присвоєний метод getFullName
// замість callback підставляє опис методу (оскільки його не викликали, а лише присвоїли).

// Обробляємо заявку від користувача getFullName() {
//     console.log(`${this.firstName} ${this.lastName}`);
//   }`);
// }

// makeMessage(user.getFullName());

// Обробляємо заявку від користувача Nadia Khoptiuk - якщо в методі є return
// Обробляємо заявку від користувача undefined - якщо нема return (console.log) у методі

// 5. this у стрілках

// const showThisInArrow = () => {
//   console.log(`this in showThis in arrow function: ${this}`);
// };

// showThisInArrow();

// const user = {
//   username: "Mango",
// };

// user.showContext = showThisInArrow;

// user.showContext();
// console.log(user.showContext);

// 6. this в обєктах

const user = {
  firstName: "Nadia",
  lastName: "Khoptiuk",

  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  },
};

function makeMessage() {
  return `Обробляємо заявку від користувача ${this.firstName} ${this.lastName}`;
}

user.message = makeMessage;

//в консолі покажеться тіло метода
console.log(user.message); // ƒ makeMessage() {
//   return `Обробляємо заявку від користувача ${this.firstName} ${this.lastName}`;
// }

//виклик метода
console.log(user.message()); // Обробляємо заявку від користувача Nadia Khoptiuk

//виклик метода без контекста об'єкта
// console.log(message()); // Uncaught ReferenceError: message is not defined

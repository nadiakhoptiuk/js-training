// Необхідно написати логіку обробки замовлення піци. Виконай рефакторинг методу order таким чином, щоб він приймав другим і третім параметром два колбеки onSuccess і onError.

// Якщо у властивості pizzas відсутня піца з назвою з параметра pizzaName, метод order повинен повертати результат виклику колбека onError, передаючи йому аргументом рядок "There is no pizza with a name <имя піци> in the assortment."
// Якщо у властивості pizzas присутня піца з назвою з параметра pizzaName, метод order повинен повертати результат виклику колбека onSuccess, передаючи йому аргументом назву замовленої піци.
// Після оголошення об'єкта pizzaPalace ми додали колбеки і виклики методів. Будь ласка, нічого там не міняй.

const pizzaPalace = {
  pizzas: ["Ultracheese", "Smoked", "Four meats"],
  order(pizzaName, onSuccess, onError) {
    const { pizzas } = this;

    for (const pizza of pizzas) {
      if (pizza === pizzaName) {
        onSuccess = makePizza(pizzaName);
        return onSuccess;
      }
    }

    return onError(
      `There is no pizza with a name ${pizzaName} in the assortment.`
    );
  },
};
// Change code above this line

// Callback for onSuccess
function makePizza(pizzaName) {
  return `Your order is accepted. Cooking pizza ${pizzaName}.`;
}

// Callback for onError
function onOrderError(error) {
  return `Error! ${error}`;
}

// Method calls with callbacks
console.log(pizzaPalace.order("Smoked", makePizza, onOrderError));

console.log(pizzaPalace.order("Four meats", makePizza, onOrderError));

console.log(pizzaPalace.order("Big Mike", makePizza, onOrderError));

console.log(pizzaPalace.order("Vienna", makePizza, onOrderError));

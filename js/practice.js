const array = [1, 2, 3, 4];

const newArray = array.map((element) => {
  return `<li>${element}</li>`;
});

// console.log(newArray);

Array.prototype.myMap = function (callback) {
  const result = [];

  for (let i = 0; i < this.length; i += 1) {
    result.push(callback(this[i], i, this));
    // console.log(result);
  }

  return result;
};

const markup = array.myMap((element) => `<li>${element}</li>`);
console.log(markup);

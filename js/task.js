// // function calculateTotalPrice(orderedItems) {
// //   let totalPrice = 0;

// //   orderedItems.forEach((item) => (totalPrice += item));

// //   return totalPrice;
// // }

// const changeEven = (numbers, value) => {
//   // Change code below this line
//   const newArray = [];

//   numbers.forEach((element) => {
//     if (element % 2 === 0) {
//       newArray.push(element + value);
//       //   console.log(newArray);
//     } else {
//       newArray.push(element);
//     }
//   });

//   return newArray;
//   // Change code above this line
// };

// console.log(changeEven([1, 2, 3, 4, 5], 10));

// Setup
function phoneticLookup(val) {
  let result = "";

  // Only change code below this line
  const lookup = {
    alpha: "Adams",
    bravo: "Boston",
    charlie: "Chicago",
    delta: "Denver",
    echo: "Easy",
    foxtrot: "Frank",
  };

  for (const prop in lookup) {
    if (lookup[val]) {
      console.log(lookup[val]);

      result = lookup[val];
    }
  }

  // Only change code above this line
  return result;
}

phoneticLookup("charlie");

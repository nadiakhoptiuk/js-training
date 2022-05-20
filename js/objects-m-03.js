//Напишіть функцію JavaScript, яка перевіряє, чи переданий рядок є паліндромом?
//Паліндром - це слово, фраза чи послідовність, які читаються так само, як уперед,
//назад, наприклад, level.

// function check_Palindrome(string) {
//   const newStr = string.split("").reverse().join("");

//   return newStr === string;
// }

// function check_Palindrome(string) {
//   const samePartLength = Math.floor(string.length / 2);

//   console.log(samePartLength);
//   let firstString = "";
//   let secondString = "";

//   for (let i = 0; i < samePartLength; i += 1) {
//     firstString += string[i];
//     console.log(`firstString: ${firstString}`);
//   }

//   for (let j = string.length - 1; j > samePartLength; j -= 1) {
//     secondString += string[j];
//     console.log(`secondString: ${secondString}`);
//   }

//   return firstString === secondString;
// }

// console.log(check_Palindrome("level")); // true
// console.log(check_Palindrome("topot")); // true
// console.log(check_Palindrome("that")); // false

function makeTask(data) {
  const completed = false;
  const category = "General";
  const priority = "Normal";
  // Change code below this line
  const newData = { ...data };

  newData = {
    category: category,
    priority: priority,
    completed: completed,
  };

  return newData;
  // Change code above this line
}

console.log(makeTask({ category: "Finance", text: "Take interest" }));

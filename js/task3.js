//Напишіть JavaScript для вилучення унікальних символів з рядка.

function unique_char(str) {
  return str
    .split("")
    .filter((element, index, arr) => arr.indexOf(element) === index);
}

console.log(unique_char("позволяеткопироватьтекстиз"));

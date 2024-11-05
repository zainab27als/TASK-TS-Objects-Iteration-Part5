const fruits = [
  {
    id: 501,
    name: "Apple",
    color: "Red",
    taste: "Sweet",
  },
  {
    id: 502,
    name: "Banana",
    color: "Yellow",
    taste: "Sweet",
  },
  {
    id: 503,
    name: "Orange",
    color: "Orange",
    taste: "Citrusy",
  },
  {
    id: 504,
    name: "Grapes",
    color: "Purple",
    taste: "Sweet",
  },
  {
    id: 505,
    name: "Kiwi",
    color: "Green",
    taste: "Tangy",
  },
];

// 1) Write a `getFruitColor` function that accepts a `fruit` object as an argument, and returns the color of that `fruit` object
function getFruitColor(fruit) {
  // write your code here...
}
// console.log(getFruitColor(fruits[0])); // Outputs: Red

// 2) Write a `isFruitTasteMatching` function that accepts a `fruit` object as an argument and a `taste` string, return  true if the fruit's taste matches the provided description, otherwise returns false
function isFruitTasteMatching(fruit, taste) {
  // write your code here...
}
// console.log(isFruitTasteMatching(fruits[2], "Citrusy")); // Outputs: true

// 3) Write a `addFruit` function that accepts an array of fruit object `fruits` and the properties of a fruit (id, name, color, taste), it will add the new fruit to the end of the array, then returns the updated array
function addFruit(fruits, id, name, color, taste) {
  // write your code here...
}
// console.log(addFruit(fruits,  506,  "Mango", "Yellow", "Sweet" ));

// 4) Write a `countSweetFruits`function that accepts an array of fruit objects `fruits`, and return the number of fruits with a sweet taste
function countSweetFruits(fruits) {
  // write your code here...
}
// console.log(countSweetFruits(fruits)); // Outputs: 4

// 5) Write a function `fruitByTaste` that takes an array of fruit objects `fruits` and returns an object where the keys are tastes and the values are arrays of fruit names
function fruitByTaste(fruits) {
  // Write your code here...
}
// console.log(fruitByTaste(fruits));
/**
 * Output:
 * {
 *    Sweet: ["Apple", "Banana", "Grapes"],
 *    Citrusy: ["Orange"],
 *    Tangy: ["Kiwi"]
 * }
 */

module.exports = {
  getFruitColor,
  isFruitTasteMatching,
  addFruit,
  countSweetFruits,
  fruitByTaste,
};

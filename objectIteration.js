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

// 1) Using `getFruitColor` function that accepts a `fruit` object as an argument, and returns the color of that `fruit` object
function getFruitColor(fruit) {
  // write your code here...
}
// console.log(getFruitColor(fruits[0])); // Outputs: Red

// 2) Using `isFruitTasteMatching` function that accepts a `fruit` object as an argument and a `taste` string, return  true if the fruit's taste matches the provided description, otherwise returns false
function isFruitTasteMatching(fruit, taste) {
  // write your code here...
}
// console.log(isFruitTasteMatching(fruits[2], "Citrusy")); // Outputs: true

// 3) Using `addFruit` function that accepts an array of fruit object `fruits` and a `fruit` object (with id, name, color, and taste), it will add the new fruit to the end of the array, then returns the updated array
function addFruit(fruits, fruit) {
  // write your code here...
}
// console.log(addFruit(fruits, { id: 506, name: "Mango", color: "Yellow", taste: "Sweet" }));

// Using `countSweetFruits`function that accepts an array of fruit objects `fruits`, and return the number of fruits with a sweet taste
function countSweetFruits(fruits) {
  // write your code here...
}
// console.log(countSweetFruits(fruits)); // Outputs: 4

module.exports = {
  getFruitColor,
  isFruitTasteMatching,
  addFruit,
  countSweetFruits,
};

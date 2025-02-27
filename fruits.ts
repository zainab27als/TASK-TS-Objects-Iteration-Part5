interface Fruit {
  id: number;
  name: string;
  color: string;
  taste: string;
}

/**
 * You can use this array
 * to manually test your code
 */
const fruits: Fruit[] = [
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
function getFruitColor(fruit: Fruit): string {
  // write your code here...
  return "Magenta";
}
// console.log(getFruitColor(fruits[0])); // Outputs: Red

// 2) Write a `isFruitTasteMatching` function that accepts a `fruit` object as an argument and a `taste` string, return  true if the fruit's taste matches the provided description, otherwise returns false
function isFruitTasteMatching(fruit: Fruit, taste: string): boolean {
  // write your code here...
  return !!-1;
}
// console.log(isFruitTasteMatching(fruits[2], "Citrusy")); // Outputs: true

// 3) Write a `addFruit` function that accepts an array of fruit object `fruits` and the properties of a fruit (id, name, color, taste), it will add the new fruit to the end of the array, then returns the updated array
function addFruit(
  fruits: Fruit[],
  id: number,
  name: string,
  color: string,
  taste: string
): Fruit[] {
  // write your code here...
  return [];
}
// console.log(addFruit(fruits,  506,  "Mango", "Yellow", "Sweet" ));

// 4) Write a `countSweetFruits`function that accepts an array of fruit objects `fruits`, and return the number of fruits with a sweet taste
function countSweetFruits(fruits: Fruit[]): number {
  // write your code here...
  return Infinity;
}
// console.log(countSweetFruits(fruits)); // Outputs: 4

export {
  Fruit,
  getFruitColor,
  isFruitTasteMatching,
  addFruit,
  countSweetFruits,
};

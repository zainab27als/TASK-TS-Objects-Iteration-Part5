import { Fruit } from "./fruits";

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

interface FruitByTaste {
  [key: string]: string[];
}

// 5) 🌶️🌶️🌶️ Write a function `fruitByTaste` that takes an array of fruit objects `fruits` and returns an object where the keys are tastes and the values are arrays of fruit names
function fruitByTaste(fruits: Fruit[]): FruitByTaste {
  // Write your code here...
  return {};
}
/**
 * console.log(fruitByTaste(fruits));
 * Output:
 * {
 *    Sweet: ["Apple", "Banana", "Grapes"],
 *    Citrusy: ["Orange"],
 *    Tangy: ["Kiwi"]
 * }
 */

export { fruitByTaste, FruitByTaste };

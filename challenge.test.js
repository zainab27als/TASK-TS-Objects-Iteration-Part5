const { fruitByTaste } = require("./objectIteration");

xdescribe("🌶️🌶️🌶️ Challenge", () => {
  let fruits;

  beforeEach(() => {
    fruits = [
      { id: 501, name: "Apple", color: "Red", taste: "Sweet" },
      { id: 502, name: "Banana", color: "Yellow", taste: "Sweet" },
      { id: 503, name: "Orange", color: "Orange", taste: "Citrusy" },
      { id: 504, name: "Grapes", color: "Purple", taste: "Sweet" },
      { id: 505, name: "Kiwi", color: "Green", taste: "Tangy" },
    ];
  });

  describe("fruitByTaste", () => {
    it("should return the correct tastes object", () => {
      expect(fruitByTaste(fruits)).toEqual({
        Sweet: ["Apple", "Banana", "Grapes"],
        Citrusy: ["Orange"],
        Tangy: ["Kiwi"],
      });
    });
  });
});

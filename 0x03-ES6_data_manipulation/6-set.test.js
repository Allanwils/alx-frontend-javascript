import setFromArray from "./6-set.js";

describe("setFromArray", () => {
  test("returns a Set from an array", () => {
    const array1 = [12, 32, 15, 78, 98, 15];
    const expected1 = new Set([12, 32, 15, 78, 98]);
    expect(setFromArray(array1)).toEqual(expected1);

    const array2 = ["apple", "banana", "orange"];
    const expected2 = new Set(["apple", "banana", "orange"]);
    expect(setFromArray(array2)).toEqual(expected2);

  });
});

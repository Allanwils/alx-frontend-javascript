import createInt8TypedArray from "./5-typed_arrays.js";

describe("createInt8TypedArray", () => {
  it("should return a new ArrayBuffer with the value set at the specified position", () => {
    const typedArray = createInt8TypedArray(10, 2, 89);
    const expected = new Int8Array([0, 0, 89, 0, 0, 0, 0, 0, 0, 0]);

    expect(new Int8Array(typedArray.buffer)).toEqual(expected);
  });

  it("should throw an error if the position is outside the range", () => {
    expect(() => createInt8TypedArray(5, 10, 89)).toThrow(
      "Position outside range"
    );
  });
});

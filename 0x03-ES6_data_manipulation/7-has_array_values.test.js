import hasValuesFromArray from './7-has_array_values.js';

describe('hasValuesFromArray', () => {
  // Test case 1: All elements in the array exist within the set
  it('should return true when all elements in the array exist within the set', () => {
    const set = new Set([1, 2, 3, 4, 5]);
    const array = [1];
    expect(hasValuesFromArray(set, array)).toBe(true);
  });

  // Test case 2: At least one element in the array does not exist within the set
  it('should return false when at least one element in the array does not exist within the set', () => {
    const set = new Set([1, 2, 3, 4, 5]);
    const array = [10];
    expect(hasValuesFromArray(set, array)).toBe(false);
  });

  // Test case 3: Some elements in the array do not exist within the set
  it('should return false when some elements in the array do not exist within the set', () => {
    const set = new Set([1, 2, 3, 4, 5]);
    const array = [1, 10];
    expect(hasValuesFromArray(set, array)).toBe(false);
  });
});

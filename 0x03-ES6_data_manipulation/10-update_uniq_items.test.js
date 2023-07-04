const updateUniqueItems = require('./updateUniqueItems.js');

describe('updateUniqueItems', () => {
  test('should update quantities to 100 for items with initial quantity of 1', () => {
    const map = new Map([
      ['Apples', 10],
      ['Tomatoes', 10],
      ['Pasta', 1],
      ['Rice', 1],
      ['Banana', 5],
    ]);

    updateUniqueItems(map);

    expect(map.get('Apples')).toBe(10);
    expect(map.get('Tomatoes')).toBe(10);
    expect(map.get('Pasta')).toBe(100);
    expect(map.get('Rice')).toBe(100);
    expect(map.get('Banana')).toBe(5);
  });

  test('should throw an error if argument is not a map', () => {
    expect(() => updateUniqueItems({})).toThrow('Cannot process');
    expect(() => updateUniqueItems([])).toThrow('Cannot process');
    expect(() => updateUniqueItems('map')).toThrow('Cannot process');
    expect(() => updateUniqueItems(null)).toThrow('Cannot process');
  });
});

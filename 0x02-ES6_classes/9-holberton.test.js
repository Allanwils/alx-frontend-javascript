import { HolbertonClass } from './9-hoisting.js';

describe('HolbertonClass', () => {
  test('should create an instance with the correct year and location', () => {
    const class2019 = new HolbertonClass(2019, 'San Francisco');
    expect(class2019.year).toBe(2019);
    expect(class2019.location).toBe('San Francisco');
  });
});

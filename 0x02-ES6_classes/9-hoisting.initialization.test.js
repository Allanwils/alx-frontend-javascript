import { HolbertonClass, StudentHolberton } from './9-hoisting';

describe('StudentHolberton', () => {
  test('should create an instance with the correct first name, last name, and class', () => {
    const class2020 = new HolbertonClass(2020, 'San Francisco');
    const student = new StudentHolberton('John', 'Doe', class2020);
    expect(student.fullName).toBe('John Doe');
    expect(student.holbertonClass).toBe(class2020);
  });
});

import { HolbertonClass, StudentHolberton, listOfStudents } from './9-hoisting.js';

describe('StudentHolberton', () => {
  test('should create an instance with the correct first name, last name, and class', () => {
    const class2020 = new HolbertonClass(2020, 'San Francisco');
    const student = new StudentHolberton('John', 'Doe', class2020);
    expect(student.fullName).toBe('John Doe');
    expect(student.holbertonClass).toBe(class2020);
  });

  test('should return the full student description', () => {
    const class2019 = new HolbertonClass(2019, 'San Francisco');
    const student = new StudentHolberton('Albert', 'Clinton', class2019);
    expect(student.fullStudentDescription).toBe('Albert Clinton - 2019 - San Francisco');
  });
});

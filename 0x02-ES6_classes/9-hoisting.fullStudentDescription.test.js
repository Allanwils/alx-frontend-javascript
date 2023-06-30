import { HolbertonClass, StudentHolberton } from './9-hoisting';

describe('StudentHolberton', () => {
  test('should return the full student description', () => {
    const class2019 = new HolbertonClass(2019, 'San Francisco');
    const student = new StudentHolberton('Albert', 'Clinton', class2019);
    expect(student.fullStudentDescription).toBe('Albert Clinton - 2019 - San Francisco');
  });
});

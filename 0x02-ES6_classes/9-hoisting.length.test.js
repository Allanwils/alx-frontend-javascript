import { listOfStudents } from './9-hoisting';

describe('listOfStudents', () => {
  test('should have the correct length', () => {
    expect(listOfStudents).toHaveLength(5);
  });
});

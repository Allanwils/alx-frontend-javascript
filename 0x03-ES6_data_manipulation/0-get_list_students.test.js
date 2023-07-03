import getListStudents from './0-get_list_students.js';

describe('getListStudents', () => {
  it('returns an array of objects with the correct attributes', () => {
    const students = getListStudents();

    expect(Array.isArray(students)).toBe(true);

    students.forEach((student) => {
      expect(student).toHaveProperty('id');
      expect(student).toHaveProperty('firstName');
      expect(student).toHaveProperty('location');
      expect(typeof student.id).toBe('number');
      expect(typeof student.firstName).toBe('string');
      expect(typeof student.location).toBe('string');
    });
  });

  it('returns the correct list of students', () => {
    const expectedStudents = [
      { id: 1, firstName: 'Guillaume', location: 'San Francisco' },
      { id: 2, firstName: 'James', location: 'Columbia' },
      { id: 5, firstName: 'Serena', location: 'San Francisco' },
    ];

    const students = getListStudents();

    expect(students).toEqual(expectedStudents);
  });
});

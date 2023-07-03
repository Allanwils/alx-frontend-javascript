import getListStudents from "./0-get_list_students.js";
import getStudentsByLocation from "./2-get_students_by_loc.js";

const students = getListStudents();

// Test case: Students in 'San Francisco'
test("Get students in 'San Francisco'", () => {
  const city = 'San Francisco';
  const expectedOutput = [
    { id: 1, firstName: 'Guillaume', location: 'San Francisco' },
    { id: 5, firstName: 'Serena', location: 'San Francisco' }
  ];

  const result = getStudentsByLocation(students, city);

  expect(result).toEqual(expectedOutput);
});

// Add more test cases if needed


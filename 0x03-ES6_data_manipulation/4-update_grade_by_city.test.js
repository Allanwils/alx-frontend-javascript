import updateStudentGradeByCity from "./4-update_grade_by_city.js";
import getListStudents from "./0-get_list_students.js";

describe("updateStudentGradeByCity", () => {
  it("should update grades for students in the specified city", () => {
    const students = getListStudents();

    // Test case 1: Update grades for students in San Francisco
    const city = "San Francisco";
    const newGrades = [
      { studentId: 1, grade: 86 },
      { studentId: 5, grade: 97 },
    ];
    const updatedStudents = updateStudentGradeByCity(students, city, newGrades);

    expect(updatedStudents).toEqual([
      {
        id: 1,
        firstName: "Guillaume",
        location: "San Francisco",
        grade: 86,
      },
      {
        id: 5,
        firstName: "Serena",
        location: "San Francisco",
        grade: 97,
      },
    ]);

    // Test case 2: Update grade for one student in San Francisco
    const newGrades2 = [{ studentId: 5, grade: 97 }];
    const updatedStudents2 = updateStudentGradeByCity(
      students,
      city,
      newGrades2
    );

    expect(updatedStudents2).toEqual([
      {
        id: 1,
        firstName: "Guillaume",
        location: "San Francisco",
        grade: "N/A",
      },
      {
        id: 5,
        firstName: "Serena",
        location: "San Francisco",
        grade: 97,
      },
    ]);
  });

  it("should return an empty array if no students found in the specified city", () => {
    const students = getListStudents();

    // Test case: No students in Los Angeles
    const city = "Los Angeles";
    const newGrades = [{ studentId: 3, grade: 92 }];
    const updatedStudents = updateStudentGradeByCity(students, city, newGrades);

    expect(updatedStudents).toEqual([]);
  });
});

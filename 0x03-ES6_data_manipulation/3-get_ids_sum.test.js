import getStudentIdsSum from "./3-get_ids_sum.js";
import getListStudents from "./0-get_list_students.js";

describe("getStudentIdsSum", () => {
  test("should return the sum of all student IDs", () => {
    const students = getListStudents();
    const sum = getStudentIdsSum(students);
    expect(sum).toEqual(8);
  });
});

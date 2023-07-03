import getListStudentIds from "./1-get_list_student_ids.js";

describe("getListStudentIds", () => {
  it("should return an empty array if input is not an array", () => {
    expect(getListStudentIds("hello")).toEqual([]);
  });

  it("should return an array of student ids", () => {
    const students = [
      { id: 1, name: "Alice" },
      { id: 2, name: "Bob" },
      { id: 5, name: "Charlie" },
    ];
    expect(getListStudentIds(students)).toEqual([1, 2, 5]);
  });
});

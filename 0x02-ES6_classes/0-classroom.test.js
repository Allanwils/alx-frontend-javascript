import ClassRoom from "./0-classroom.js";

describe("ClassRoom", () => {
  test("should initialize maxStudentsSize correctly", () => {
    const room = new ClassRoom(10);
    expect(room._maxStudentsSize).toBe(10);
  });
});

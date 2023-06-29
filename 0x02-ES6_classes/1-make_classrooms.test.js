import initializeRooms from './1-make_classrooms';
import ClassRoom from './0-classroom';

describe('initializeRooms', () => {
  it('should return an array of ClassRoom instances', () => {
    const result = initializeRooms();
    expect(Array.isArray(result)).toBe(true);
    expect(result.length).toBe(3);
    result.forEach(room => {
      expect(room instanceof ClassRoom).toBe(true);
    });
  });
});

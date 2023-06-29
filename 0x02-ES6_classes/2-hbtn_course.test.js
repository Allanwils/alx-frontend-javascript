import HolbertonCourse from './2-hbtn_course.js';

describe('HolbertonCourse', () => {
  describe('Constructor', () => {
    it('should create a course object with valid attributes', () => {
      const c1 = new HolbertonCourse('ES6', 1, ['Bob', 'Jane']);
      expect(c1.name).toBe('ES6');
      expect(c1.length).toBe(1);
      expect(c1.students).toEqual(['Bob', 'Jane']);
    });

    it('should throw an error if the name is not a string', () => {
      expect(() => new HolbertonCourse(12, 1, ['Bob', 'Jane'])).toThrow(TypeError);
    });

    it('should throw an error if the length is not a number', () => {
      expect(() => new HolbertonCourse('ES6', '1', ['Bob', 'Jane'])).toThrow(TypeError);
    });

    it('should throw an error if the students is not an array', () => {
      expect(() => new HolbertonCourse('ES6', 1, 'Bob')).toThrow(TypeError);
    });
  });

  describe('Getter and Setter', () => {
    let course;

    beforeEach(() => {
      course = new HolbertonCourse('ES6', 1, ['Bob', 'Jane']);
    });

    it('should set a new name', () => {
      course.name = 'Python 101';
      expect(course.name).toBe('Python 101');
    });

    it('should throw an error if the new name is not a string', () => {
      expect(() => {
        course.name = 12;
      }).toThrow(TypeError);
    });

    it('should set a new length', () => {
      course.length = 2;
      expect(course.length).toBe(2);
    });

    it('should throw an error if the new length is not a number', () => {
      expect(() => {
        course.length = '2';
      }).toThrow(TypeError);
    });

    it('should set a new students array', () => {
      course.students = ['Alice', 'Bob', 'Jane'];
      expect(course.students).toEqual(['Alice', 'Bob', 'Jane']);
    });

    it('should throw an error if the new students is not an array', () => {
      expect(() => {
        course.students = 'Alice';
      }).toThrow(TypeError);
    });
  });
});

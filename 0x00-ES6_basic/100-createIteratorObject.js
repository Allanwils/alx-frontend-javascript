export default function createIteratorObject(report) {
  let departments = Object.values(report).flatMap(Object.values);
  
  return {
    [Symbol.iterator]() {
      let index = 0;
      
      return {
        next() {
          if (index < departments.length) {
            return {
              value: departments[index++],
              done: false
            };
          } else {
            return { done: true };
          }
        }
      };
    }
  };
}

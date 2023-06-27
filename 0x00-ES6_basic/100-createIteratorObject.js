export default function createIteratorObject(report) {
  let departments = Object.values(report);

  let currentIndex = 0;
  let currentEmployees = departments[currentIndex].employees;
  let currentEmployeeIndex = 0;

  return {
    next() {
      if (currentEmployeeIndex >= currentEmployees.length) {
        currentIndex++;
        if (currentIndex < departments.length) {
          currentEmployees = departments[currentIndex].employees;
          currentEmployeeIndex = 0;
        } else {
          return { done: true };
        }
      }

      const employee = currentEmployees[currentEmployeeIndex];
      currentEmployeeIndex++;

      return { value: employee, done: false };
    },
    [Symbol.iterator]() {
      return this;
    },
  };
}

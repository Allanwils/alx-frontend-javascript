import Car from './10-car.js';

class TestCar extends Car {}

test('Clone Car', () => {
  const tc1 = new TestCar('Nissan', 'Turbo', 'Pink');
  const tc2 = tc1.cloneCar();

  expect(tc1 instanceof TestCar).toBe(true);
  expect(tc2 instanceof TestCar).toBe(true);
  expect(tc1).not.toBe(tc2);
  expect(tc1._brand).toBe('Nissan');
  expect(tc1._motor).toBe('Turbo');
  expect(tc1._color).toBe('Pink');
  expect(tc2._brand).toBeUndefined();
  expect(tc2._motor).toBeUndefined();
  expect(tc2._color).toBeUndefined();
});

test('Clone Car - Default Values', () => {
  const tc1 = new TestCar();
  const tc2 = tc1.cloneCar();

  expect(tc1 instanceof TestCar).toBe(true);
  expect(tc2 instanceof TestCar).toBe(true);
  expect(tc1).not.toBe(tc2);
  expect(tc1._brand).toBeUndefined();
  expect(tc1._motor).toBeUndefined();
  expect(tc1._color).toBeUndefined();
  expect(tc2._brand).toBeUndefined();
  expect(tc2._motor).toBeUndefined();
  expect(tc2._color).toBeUndefined();
});

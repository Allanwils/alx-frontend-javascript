import Car from './10-car.js';
import EVCar from './100-evcar.js';

describe('EVCar', () => {
  test('should create an instance of EVCar', () => {
    const ec = new EVCar("Tesla", "Turbo", "Red", "250");
    expect(ec instanceof EVCar).toBe(true);
  });

  test('should clone an EVCar into a Car instance', () => {
    const ec = new EVCar("Tesla", "Turbo", "Red", "250");
    const clonedCar = ec.cloneCar();
    expect(clonedCar instanceof EVCar).toBe(false);
    expect(clonedCar instanceof Car).toBe(true);
    expect(clonedCar._brand).toBeUndefined();
    expect(clonedCar._motor).toBeUndefined();
    expect(clonedCar._color).toBeUndefined();
  });
});

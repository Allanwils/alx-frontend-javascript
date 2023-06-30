import Car from './10-car.js';

class EVCar extends Car {
  constructor(brand, motor, color, range) {
    super();
    this._brand = brand;
    this._motor = motor;
    this._color = color;
    this._range = range;
  }

  cloneCar() {
    const car = new Car();
    return car;
  }
}

export default EVCar;

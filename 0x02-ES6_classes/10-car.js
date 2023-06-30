class Car {
  constructor(brand, motor, color) {
    this._brand = brand;
    this._motor = motor;
    this._color = color;
  }

  cloneCar() {
    const newCar = new this.constructor();
    Object.getOwnPropertyNames(this).forEach((key) => {
      if (key !== '_brand' && key !== '_motor' && key !== '_color') {
        newCar[key] = this[key];
      }
    });
    return newCar;
  }
}

export default Car;

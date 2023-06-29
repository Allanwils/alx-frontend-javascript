import Building from './5-building.js';

class TestBuilding extends Building {}

const b = new Building(100);
console.log(b);

try {
  new TestBuilding(200);
} catch (err) {
  console.log(err);
  process.exit(1); // Exit the process to prevent further execution
}

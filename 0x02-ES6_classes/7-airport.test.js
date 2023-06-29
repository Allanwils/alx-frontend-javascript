import Airport from './7-airport.js';

describe('Airport', () => {
  test('should create an airport object with name and code', () => {
    const airportSF = new Airport('San Francisco Airport', 'SFO');
    expect(airportSF._name).toBe('San Francisco Airport');
    expect(airportSF._code).toBe('SFO');
  });

  test('should return the airport code when converted to a string', () => {
    const airportSF = new Airport('San Francisco Airport', 'SFO');
    expect(airportSF.toString()).toBe('[object SFO]');
  });
});

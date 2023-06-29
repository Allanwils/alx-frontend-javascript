const Airport = require('./7-airport.js');

describe('Airport', () => {
  it('should return the airport code as the default string description', () => {
    const airport = new Airport('John F. Kennedy International Airport', 'JFK');
    expect(`${airport}`).toBe('Airport [JFK] { _name: \'John F. Kennedy International Airport\', _code: \'JFK\' }');
  });
});

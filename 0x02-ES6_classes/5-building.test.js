import Building from './5-building.js';

describe('Building class', () => {
  it('should throw an error if evacuationWarningMessage is not overridden', () => {
    function testBuilding() {
      class TestBuilding extends Building {}
      new TestBuilding(200).evacuationWarningMessage();
    }

    expect(testBuilding).toThrow(/Class extending Building must override evacuationWarningMessage/);
  });
});

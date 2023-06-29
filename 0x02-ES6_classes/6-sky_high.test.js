import SkyHighBuilding from './6-sky_high.js';

describe('SkyHighBuilding', () => {
  it('should correctly initialize attributes', () => {
    const building = new SkyHighBuilding(140, 60);
    expect(building.sqft).toEqual(140);
    expect(building.floors).toEqual(60);
  });

  it('should override the evacuationWarningMessage method', () => {
    const building = new SkyHighBuilding(140, 60);
    expect(building.evacuationWarningMessage()).toEqual('Evacuate slowly the 60 floors.');
  });
});

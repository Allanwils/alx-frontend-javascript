import { queryAPI, weakMap } from "./100-weak.js";

describe("queryAPI", () => {
  beforeEach(() => {
    weakMap.delete({ protocol: 'http', name: 'getUsers' });
  });

  it("should increment the count in the weakMap", () => {
    const endpoint = { protocol: 'http', name: 'getUsers' };

    queryAPI(endpoint);
    expect(weakMap.get(endpoint)).toBe(1);

    queryAPI(endpoint);
    expect(weakMap.get(endpoint)).toBe(2);
  });

  it("should throw an error when count is >= 5", () => {
    const endpoint = { protocol: 'http', name: 'getUsers' };

    queryAPI(endpoint);
    queryAPI(endpoint);
    queryAPI(endpoint);
    queryAPI(endpoint);
    queryAPI(endpoint);
    
    expect(() => queryAPI(endpoint)).toThrow(Error);
    expect(() => queryAPI(endpoint)).toThrow("Endpoint load is high");
  });
});

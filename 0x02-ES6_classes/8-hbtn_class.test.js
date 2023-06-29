import HolbertonClass from "./8-hbtn_class.js";

describe("HolbertonClass", () => {
  it("should return the size when cast to Number", () => {
    const hc = new HolbertonClass(12, "Mezzanine");
    expect(Number(hc)).toEqual(12);
  });

  it("should return the location when cast to String", () => {
    const hc = new HolbertonClass(12, "Mezzanine");
    expect(String(hc)).toEqual("Mezzanine");
  });
});

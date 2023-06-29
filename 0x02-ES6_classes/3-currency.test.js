import Currency from "./3-currency.js";

describe("Currency", () => {
  it("should correctly initialize code and name attributes", () => {
    const dollar = new Currency("$", "Dollars");
    expect(dollar.code).toBe("$");
    expect(dollar.name).toBe("Dollars");
  });

  it("should correctly update code and name attributes using setters", () => {
    const euro = new Currency("€", "Euros");
    euro.code = "EUR";
    euro.name = "Euro";
    expect(euro.code).toBe("EUR");
    expect(euro.name).toBe("Euro");
  });

  it("should correctly display the full currency information", () => {
    const pound = new Currency("£", "Pounds");
    const fullCurrency = pound.displayFullCurrency();
    expect(fullCurrency).toBe("Pounds (£)");
  });
});

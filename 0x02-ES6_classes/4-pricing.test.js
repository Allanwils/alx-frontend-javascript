import Pricing from './4-pricing.js';
import Currency from './3-currency.js';

describe('Pricing', () => {
  let pricing;

  beforeEach(() => {
    pricing = new Pricing(100, new Currency("EUR", "Euro"));
  });

  it('should have correct initial values', () => {
    expect(pricing.amount).toEqual(100);
    expect(pricing.currency).toEqual(new Currency("EUR", "Euro"));
  });

  it('should set and get the amount correctly', () => {
    pricing.amount = 200;
    expect(pricing.amount).toEqual(200);
  });

  it('should set and get the currency correctly', () => {
    const currency = new Currency("USD", "US Dollar");
    pricing.currency = currency;
    expect(pricing.currency).toEqual(currency);
  });

  it('should display full price correctly', () => {
    expect(pricing.displayFullPrice()).toEqual("100 Euro (EUR)");
  });

  it('should convert price correctly', () => {
    const convertedPrice = Pricing.convertPrice(100, 1.5);
    expect(convertedPrice).toEqual(150);
  });
});

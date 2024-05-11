import { formatToBRL } from ".";

describe("formatToBRL function", () => {
  test("formats number to Brazilian Real currency format", () => {
    const number = 150000;
    const formattedNumber = formatToBRL(number);

    expect(formattedNumber).toEqual("150.000");
  });

  test("formats decimal number to Brazilian Real currency format", () => {
    const number = 123456.78;
    const formattedNumber = formatToBRL(number);
    expect(formattedNumber).toEqual("123.456,78");
  });
});

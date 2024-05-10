import { convertPixelIntoNumber } from ".";

describe("convertPixelIntoNumber function", () => {
  test("should convert pixel into number", () => {
    const pixel = "10px";
    const number = convertPixelIntoNumber(pixel);
    expect(number).toBe(10);
  });
});

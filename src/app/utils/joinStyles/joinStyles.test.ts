import { formatTokens, joinStyles } from ".";

describe("formatTokens function", () => {
  test("should format tokens correctly", () => {
    const tokens = ["token1", "", "token2", " ", "token3\n", ""];
    const formattedTokens = formatTokens(tokens);
    expect(formattedTokens).toBe("token1 token2 token3");
  });
});

describe("joinStyles function", () => {
  test("should join component styles correctly", () => {
    const componentStyles = {
      base: "base-style",
      hover: "hover-style",
    };
    const formattedStyles = joinStyles(componentStyles);
    expect(formattedStyles).toBe("base-style hover-style");
  });

  test("should include variants if provided", () => {
    const componentStyles = {
      base: "base-style",
      hover: "hover-style",
    };
    const variants = ["variant1", "variant2"];
    const formattedStyles = joinStyles(componentStyles, ...variants);
    expect(formattedStyles).toBe("base-style hover-style variant1 variant2");
  });

  test("should handle empty variants array", () => {
    const componentStyles = {
      base: "base-style",
      hover: "hover-style",
    };
    const formattedStyles = joinStyles(componentStyles);
    expect(formattedStyles).toBe("base-style hover-style");
  });

  test("should handle empty component styles", () => {
    const formattedStyles = joinStyles({});
    expect(formattedStyles).toBe("");
  });
});

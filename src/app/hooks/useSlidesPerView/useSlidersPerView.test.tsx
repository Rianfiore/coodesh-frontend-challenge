import { defaultTheme } from "@/styles/theme";
import { convertPixelIntoNumber } from "@/utils";
import { act, renderHook } from "@testing-library/react";
import { useSlidesPerView } from ".";

describe("useSlidersPerView hook", () => {
  test("should return 4 when currentBreakpoint screenSize is greater than or equal to desktop size", () => {
    Object.defineProperty(window, "innerWidth", {
      writable: true,
      configurable: true,
      value: convertPixelIntoNumber(defaultTheme.screens.desktop) + 1,
    });

    act(() => {
      window.dispatchEvent(new Event("resize"));
    });

    const { result } = renderHook(() => useSlidesPerView());

    expect(result.current).toBe(4);
  });

  test("should return 4 when currentBreakpoint is undefined", () => {
    const { result } = renderHook(() => useSlidesPerView());
    expect(result.current).toBe(4);
  });
});

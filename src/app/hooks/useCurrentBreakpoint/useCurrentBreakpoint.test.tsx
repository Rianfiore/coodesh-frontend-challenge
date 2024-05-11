import { useCurrentBreakpointMock } from "@/__mocks__/hooks";
import { defaultTheme } from "@/styles/theme";
import { convertPixelIntoNumber } from "@/utils";
import { act, renderHook } from "@testing-library/react";
import { useCurrentBreakpoint } from ".";

describe("useCurrentBreakpoint hook", () => {
  Object.defineProperty(window.screen, "width", {
    writable: true,
    configurable: true,
    value: useCurrentBreakpointMock.initialConfig.screenSize,
  });

  test("should return correct breakpoint on initial render", () => {
    const { result } = renderHook(() => useCurrentBreakpoint());

    expect(result.current).toEqual(useCurrentBreakpointMock.initialConfig);
  });

  test("should update breakpoint when window is resized", () => {
    const { result, rerender } = renderHook(() => useCurrentBreakpoint());

    //Breakpoint para tablet de acordo com o tema
    Object.defineProperty(window, "innerWidth", {
      writable: true,
      configurable: true,
      value: convertPixelIntoNumber(defaultTheme.screens.HD),
    });

    act(() => {
      window.dispatchEvent(new Event("resize"));
    });

    rerender();

    expect(result.current).toEqual({
      screenSize: convertPixelIntoNumber(defaultTheme.screens.HD),
      breakpointName: "HD",
      breakpointValue: convertPixelIntoNumber(defaultTheme.screens.HD),
    });
  });
});

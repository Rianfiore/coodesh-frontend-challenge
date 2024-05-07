import { useCurrentBreakpointMock } from "@/__mocks__/hooks/useCurrentBreakpoint";
import { act, renderHook } from "@testing-library/react";
import { useCurrentBreakpoint } from ".";

describe("useCurrentBreakpoint hook", () => {
  Object.defineProperty(window, "outerWidth", {
    writable: true,
    configurable: true,
    value: useCurrentBreakpointMock.initialConfig.value,
  });

  beforeEach(() => {
    jest.clearAllMocks();
  });
  test("should return correct breakpoint on initial render", () => {
    const { result } = renderHook(() => useCurrentBreakpoint());

    expect(result.current).toEqual(useCurrentBreakpointMock.initialConfig);
  });

  test("should update breakpoint when window is resized", () => {
    const { result } = renderHook(() => useCurrentBreakpoint());

    //Breakpoint para tablet de acordo com o tema
    Object.defineProperty(window, "outerWidth", {
      writable: true,
      configurable: true,
      value: 640,
    });

    act(() => {
      window.dispatchEvent(new Event("resize"));
    });

    expect(result.current).toEqual({
      name: "tablet",
      value: 640,
    });
  });
});

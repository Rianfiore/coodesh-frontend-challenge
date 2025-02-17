import { useClickInOutMock } from "@/__mocks__/hooks";
import { fireEvent, render, renderHook } from "@testing-library/react";
import { useClickInOut } from ".";

describe("useClickInOut", () => {
  test("should trigger onClickInside callback when clicking inside the ref element", () => {
    const { result, rerender } = renderHook(() =>
      useClickInOut({
        onClickInside: useClickInOutMock.onClickInside,
        onClickOutside: useClickInOutMock.onClickOutside,
      })
    );
    const { getByTestId } = render(
      <div ref={result.current.ref} data-testid="component"></div>
    );
    const component = getByTestId("component");

    rerender();

    fireEvent.mouseDown(component);

    expect(useClickInOutMock.onClickInside).toHaveBeenCalled();
    expect(useClickInOutMock.onClickOutside).not.toHaveBeenCalled();
  });

  test("shoud trigger isClickedInside state when clicking inside the ref element", () => {
    const { result, rerender } = renderHook(() =>
      useClickInOut({
        onClickInside: useClickInOutMock.onClickInside,
        onClickOutside: useClickInOutMock.onClickOutside,
      })
    );

    const { getByTestId } = render(
      <div ref={result.current.ref} data-testid="component"></div>
    );

    const component = getByTestId("component");

    rerender();

    fireEvent.mouseDown(component);

    expect(result.current.isClickedInside).toBeTruthy();
    expect(result.current.isClickedOutside).toBeFalsy();
  });

  test("should trigger onClickOutside callback when clicking outside the ref element", () => {
    const { result, rerender } = renderHook(() =>
      useClickInOut({
        onClickInside: useClickInOutMock.onClickInside,
        onClickOutside: useClickInOutMock.onClickOutside,
      })
    );

    const { getByTestId } = render(
      <div data-testid="component">
        <span ref={result.current.ref}></span>
      </div>
    );
    const component = getByTestId("component");

    rerender();

    fireEvent.mouseDown(component);

    expect(useClickInOutMock.onClickOutside).toHaveBeenCalled();
    expect(useClickInOutMock.onClickInside).not.toHaveBeenCalled();
  });

  test("should trigger isClickedOutside state when clicking outside the ref element", () => {
    const { result, rerender } = renderHook(() =>
      useClickInOut({
        onClickInside: useClickInOutMock.onClickInside,
        onClickOutside: useClickInOutMock.onClickOutside,
      })
    );

    const { getByTestId } = render(
      <div data-testid="component">
        <span ref={result.current.ref}></span>
      </div>
    );
    const component = getByTestId("component");

    rerender();

    fireEvent.mouseDown(component);

    expect(result.current.isClickedOutside).toBeTruthy();
    expect(result.current.isClickedInside).toBeFalsy();
  });

  test("should not trigger onClickedOutside or onClickedInside callback when clicking inside the ignored ref element", () => {
    renderHook(() =>
      useClickInOut({
        onClickInside: useClickInOutMock.onClickInside,
        onClickOutside: useClickInOutMock.onClickOutside,
        ignoredRefs: [useClickInOutMock.ignoredRefs![0]],
      })
    );

    const ignoredRef = useClickInOutMock.ignoredRefs![0].current!;

    fireEvent.mouseDown(ignoredRef);

    expect(useClickInOutMock.onClickInside).not.toHaveBeenCalled();
    expect(useClickInOutMock.onClickOutside).not.toHaveBeenCalled();
  });

  test("should not trigger isClickedOutside or isClickedInside state when clicking inside the ignored ref element", () => {
    const { result } = renderHook(() =>
      useClickInOut({
        onClickInside: useClickInOutMock.onClickInside,
        onClickOutside: useClickInOutMock.onClickOutside,
        ignoredRefs: [useClickInOutMock.ignoredRefs![0]],
      })
    );

    const ignoredRef = useClickInOutMock.ignoredRefs![0].current!;

    fireEvent.mouseDown(ignoredRef);

    expect(result.current.isClickedInside).toBeFalsy();
    expect(result.current.isClickedOutside).toBeFalsy();
    expect(useClickInOutMock.onClickInside).not.toHaveBeenCalled();
    expect(useClickInOutMock.onClickOutside).not.toHaveBeenCalled();
  });
});

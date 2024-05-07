import { buttonMock } from "@/__mocks__/components/button";
import { render } from "@testing-library/react";
import { Button } from ".";

describe("Button component", () => {
  test("should render correctly", () => {
    const { getByTestId } = render(<Button {...buttonMock} />);
    const button = getByTestId("button");

    expect(button).toBeInTheDocument();
  });

  test("should render with the correct text", () => {
    const { getByTestId } = render(<Button {...buttonMock} />);
    const button = getByTestId("button");

    expect(button).toHaveTextContent(buttonMock.children);
  });

  test("onClick event should be triggered when clicked", () => {
    const { getByTestId } = render(<Button {...buttonMock} />);
    const button = getByTestId("button");

    button.click();
    expect(buttonMock.onClick).toHaveBeenCalled();
  });
});

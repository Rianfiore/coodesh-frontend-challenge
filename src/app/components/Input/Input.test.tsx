import { inputMock } from "@/__mocks__/components";
import { fireEvent, render } from "@testing-library/react";
import { Input } from ".";

describe("Input component", () => {
  test("should render correctly", () => {
    const { getByTestId } = render(<Input {...inputMock} />);

    const inputComponent = getByTestId("input");

    expect(inputComponent).toBeInTheDocument();
  });

  test("should focus on input when clicked on component", () => {
    const { getByTestId } = render(<Input {...inputMock} />);

    const inputComponent = getByTestId("input");

    inputComponent.click();

    const input = inputComponent.getElementsByTagName("input")[0];

    expect(input).toHaveFocus();
  });

  test("should call onClick function when clicked on component", () => {
    const { getByTestId } = render(<Input {...inputMock} />);

    const inputComponent = getByTestId("input");

    inputComponent.click();

    expect(inputMock.onClick).toHaveBeenCalled();
  });

  test("should show icon when is passed", () => {
    const { getByTestId } = render(<Input {...inputMock} icon={<p>icon</p>} />);

    const icon = getByTestId("input-icon");

    expect(icon).toBeInTheDocument();
  });

  test("should show label when is passed", () => {
    const { getByTestId } = render(<Input {...inputMock} label="label" />);

    const label = getByTestId("input-label");

    expect(label).toBeInTheDocument();
  });

  test("should show currentValue on input", () => {
    const { getByTestId } = render(
      <Input {...inputMock} currentValue="currentValue" />
    );

    const inputElement = getByTestId("input").getElementsByTagName("input")[0];

    expect(inputElement).toHaveValue("currentValue");
  });

  test("should change input value when currentValue changes", () => {
    const { getByTestId, rerender } = render(
      <Input {...inputMock} currentValue="currentValue" />
    );

    rerender(<Input {...inputMock} currentValue="newValue" />);

    const inputElement = getByTestId("input").getElementsByTagName("input")[0];

    expect(inputElement).toHaveValue("newValue");
  });

  test("should call onInputChange with correct parameters when input value changes", () => {
    const { getByTestId } = render(<Input {...inputMock} />);

    const inputElement = getByTestId("input").getElementsByTagName("input")[0];

    fireEvent.change(inputElement, { target: { value: "test" } });

    expect(inputMock.onInputChange).toHaveBeenCalledWith("test");
  });

  test("should call onInputFocus when input is focused", () => {
    const { getByTestId } = render(<Input {...inputMock} />);

    const inputElement = getByTestId("input").getElementsByTagName("input")[0];

    fireEvent.focus(inputElement);

    expect(inputMock.onInputFocus).toHaveBeenCalled();
  });

  test("should call onBlur when input is blurred", () => {
    const { getByTestId } = render(<Input {...inputMock} />);
    const inputElement = getByTestId("input").getElementsByTagName("input")[0];

    fireEvent.blur(inputElement);
    expect(inputMock.onBlur).toHaveBeenCalled();
  });

  test('should dont call onInputChange when type is "select"', () => {
    const { getByTestId } = render(<Input {...inputMock} type="select" />);

    const inputElement = getByTestId("input").getElementsByTagName("input")[0];

    fireEvent.change(inputElement, { target: { value: "test" } });

    expect(inputMock.onInputChange).not.toHaveBeenCalled();
  });
});

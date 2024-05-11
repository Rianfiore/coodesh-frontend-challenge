import { render } from "@testing-library/react";
import { Select } from ".";

describe("Select component", () => {
  test("should render with default value", () => {
    const { getByTestId } = render(<Select defaultValue="default" />);
    const select = getByTestId("select");

    expect(select).toBeInTheDocument();
    expect(select).toHaveTextContent("default");
  });
});

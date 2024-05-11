import { render } from "@testing-library/react";
import { DefaultMenu } from ".";

describe("NavBar/DefaultMenu component", () => {
  test("should render correctly", () => {
    const { getByTestId } = render(<DefaultMenu />);
    const defaultMenu = getByTestId("default-menu");

    expect(defaultMenu).toBeInTheDocument();
  });
});

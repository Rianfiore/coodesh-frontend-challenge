import { render } from "@testing-library/react";
import { DefaultMenu } from ".";

describe("NavBar/DefaultMenu component", () => {
  test("should render correctly", () => {
    const { getByTestId } = render(<DefaultMenu />);
    const compactMenu = getByTestId("default-menu");

    expect(compactMenu).toBeInTheDocument();
  });
});

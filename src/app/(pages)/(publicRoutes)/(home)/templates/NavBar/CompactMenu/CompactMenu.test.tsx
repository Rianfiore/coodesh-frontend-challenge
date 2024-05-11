import { render } from "@testing-library/react";
import { CompactMenu } from ".";

describe("NavBar/CompactMenu component", () => {
  test("should render correctly", () => {
    const { getByTestId } = render(<CompactMenu />);
    const compactMenu = getByTestId("compact-menu");

    expect(compactMenu).toBeInTheDocument();
  });
});

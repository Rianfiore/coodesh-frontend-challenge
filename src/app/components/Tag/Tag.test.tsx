import { render } from "@testing-library/react";
import { Tag } from ".";

describe("Test component", () => {
  it("should render correctly", () => {
    const { getByTestId } = render(<Tag>Test</Tag>);

    const tag = getByTestId("tag");

    expect(tag).toBeInTheDocument();
  });
});

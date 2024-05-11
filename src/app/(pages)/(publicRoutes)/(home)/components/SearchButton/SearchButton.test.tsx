import { render } from "@testing-library/react";
import { SearchButton } from ".";

describe("SearchBar/SearchButton component", () => {
  test("should render correctly", () => {
    const { getByTestId } = render(<SearchButton />);
    const searchButton = getByTestId("search-button");
    expect(searchButton).toBeInTheDocument();
  });
});

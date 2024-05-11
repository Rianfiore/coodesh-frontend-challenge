import { searchSectionHeaderData } from "@/assets/data/searchSectionHeader";
import { render } from "@testing-library/react";
import { SearchSection } from ".";

describe("Hero/SearchSection component", () => {
  test("should render correctly", () => {
    const { getByTestId } = render(<SearchSection />);

    const searchSection = getByTestId("search-section");

    expect(searchSection).toBeInTheDocument();
  });

  test("should render with default header tab selected", () => {
    const { getAllByTestId } = render(<SearchSection />);

    const headerTabs = getAllByTestId("search-section-header-title");

    const selectedTab = headerTabs.find(
      (tab) => tab.textContent === searchSectionHeaderData[0].title
    );

    expect(selectedTab).not.toBeUndefined();
    expect(selectedTab).toHaveAttribute("data-isselected", "true");
  });

  test("should switch header tab when user clicks on it", () => {
    const { getAllByTestId, rerender } = render(<SearchSection />);

    const headerTabs = getAllByTestId("search-section-header-title");

    const firstTab = headerTabs.find(
      (tab) => tab.textContent === searchSectionHeaderData[0].title
    );

    const secondTab = headerTabs.find(
      (tab) => tab.textContent === searchSectionHeaderData[1].title
    );

    expect(firstTab).not.toBeUndefined();
    expect(secondTab).not.toBeUndefined();

    secondTab!.click();

    rerender(<SearchSection />);

    expect(firstTab).toHaveAttribute("data-isselected", "false");
    expect(secondTab).toHaveAttribute("data-isselected", "true");
  });
});

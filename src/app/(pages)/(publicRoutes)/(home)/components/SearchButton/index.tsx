import { useCurrentBreakpoint } from "@/hooks";
import { Search } from "@/icons";
import { defaultTheme } from "@/styles/theme";
import { convertPixelIntoNumber } from "@/utils";
import { searchButtonStyles } from "./styles";
import { SearchButtonProps } from "./types";

export function SearchButton({
  isExpanded = false,
  children,
  ...props
}: SearchButtonProps) {
  const currentBreakpoint = useCurrentBreakpoint();
  const isMobile =
    currentBreakpoint?.screenSize! <
    convertPixelIntoNumber(defaultTheme.screens.laptop);
  const buttonVariant = isMobile ? "mobile" : "default";

  return (
    <button
      data-variant={buttonVariant}
      data-testid="search-button"
      data-isexpanded={isExpanded}
      className={searchButtonStyles()}
      {...props}
    >
      <Search />
      {children}
    </button>
  );
}

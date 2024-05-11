import { useCurrentBreakpoint } from "@/hooks";
import { defaultTheme } from "@/styles/theme";
import { convertPixelIntoNumber } from "@/utils";
import { SearchBar } from "./SearchBar";
import { heroContainerStyles, heroTitleStyles } from "./styles";

export function Hero() {
  const currentBreakpoint = useCurrentBreakpoint();
  const shouldShowSearchBar =
    currentBreakpoint?.screenSize! >=
    convertPixelIntoNumber(defaultTheme.screens.laptop);

  return (
    <div className={heroContainerStyles()} data-testid="hero">
      <h1 className={heroTitleStyles()}>Vende. Aluga. Conecta.</h1>
      {currentBreakpoint && <>{shouldShowSearchBar && <SearchBar />}</>}
    </div>
  );
}

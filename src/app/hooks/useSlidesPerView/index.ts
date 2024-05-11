import { useCurrentBreakpoint } from "@/hooks";
import { defaultTheme } from "@/styles/theme";
import { convertPixelIntoNumber } from "@/utils";

export function useSlidesPerView() {
  const currentBreakpoint = useCurrentBreakpoint();

  if (!currentBreakpoint) return 4;

  if (
    currentBreakpoint?.screenSize! >=
    convertPixelIntoNumber(defaultTheme.screens.desktop)
  )
    return 4;

  if (
    currentBreakpoint?.screenSize! >=
    convertPixelIntoNumber(defaultTheme.screens.laptop)
  )
    return 3;

  if (
    currentBreakpoint?.screenSize! >=
    convertPixelIntoNumber(defaultTheme.screens.tablet)
  )
    return 2;

  return 1;
}

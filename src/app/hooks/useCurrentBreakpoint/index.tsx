"use client";

import { defaultTheme } from "@/styles/theme";
import { useEffect, useState } from "react";

export function useCurrentBreakpoint() {
  const [currentBreakpoint, setCurrentBreakpoint] = useState<{
    screenSize: number;
    breakpointName: keyof typeof defaultTheme.screens | undefined;
    breakpointValue: number | undefined;
  }>();
  const themeScreens = defaultTheme.screens as { [key: string]: string };

  useEffect(() => {
    if (window) {
      const handleResize = () => {
        const screenWidth = window.innerWidth;
        let foundBreakpoint = "mobile";

        for (const breakpoint in defaultTheme.screens) {
          if (
            Object.prototype.hasOwnProperty.call(
              defaultTheme.screens,
              breakpoint
            )
          ) {
            const screen = defaultTheme.screens as { [key: string]: string };
            if (screenWidth >= parseInt(screen[breakpoint])) {
              foundBreakpoint = breakpoint;
            }
          }
        }

        setCurrentBreakpoint({
          screenSize: screenWidth,
          breakpointName: foundBreakpoint as keyof typeof defaultTheme.screens,
          breakpointValue: parseInt(themeScreens[foundBreakpoint]),
        });
      };

      handleResize();
      window.addEventListener("resize", handleResize);

      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }
  }, []);

  return currentBreakpoint;
}

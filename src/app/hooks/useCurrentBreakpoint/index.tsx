"use client";

import defaultTheme from "@/styles/theme";
import { useEffect, useState } from "react";

export function useCurrentBreakpoint() {
  const [currentBreakpoint, setCurrentBreakpoint] = useState<{
    name: keyof typeof defaultTheme.screens;
    value: number;
  }>();
  const themeScreens = defaultTheme.screens as { [key: string]: string };

  useEffect(() => {
    const handleResize = () => {
      const screenWidth = window.outerWidth;
      let foundBreakpoint = "mobile";

      for (const breakpoint in defaultTheme.screens) {
        if (
          Object.prototype.hasOwnProperty.call(defaultTheme.screens, breakpoint)
        ) {
          const screen = defaultTheme.screens as { [key: string]: string };
          if (screenWidth >= parseInt(screen[breakpoint])) {
            foundBreakpoint = breakpoint;
          }
        }
      }

      setCurrentBreakpoint({
        name: foundBreakpoint as keyof typeof defaultTheme.screens,
        value: parseInt(themeScreens[foundBreakpoint]),
      });
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return currentBreakpoint;
}

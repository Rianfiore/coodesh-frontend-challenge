"use client";

import { useCurrentBreakpoint } from "@/hooks";
import { defaultTheme } from "@/styles/theme";
import { convertPixelIntoNumber } from "@/utils";
import { headerStyles } from "./styles";
import { AnnouncementSection, Hero, NavBar, SearchSection } from "./templates";

export default function Home() {
  const currentBreakpoint = useCurrentBreakpoint();

  const shouldRenderSearchSection =
    currentBreakpoint?.screenSize! <
    convertPixelIntoNumber(defaultTheme.screens.laptop);

  return (
    <>
      <header className={headerStyles()}>
        <NavBar />

        <Hero />
        {currentBreakpoint && (
          <>{shouldRenderSearchSection && <SearchSection />}</>
        )}
      </header>
      <main>
        <AnnouncementSection />
      </main>
    </>
  );
}

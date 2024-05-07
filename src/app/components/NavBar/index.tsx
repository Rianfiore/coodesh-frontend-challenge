"use client";
import { useCurrentBreakpoint } from "@/hooks";
import defaultTheme from "@/styles/theme";
import Image from "next/image";
import { CompactMenu, DefaultMenu } from "./models";
import { navBarStyles, navContentStyles } from "./styles";

export function NavBar() {
  return (
    <nav className={navBarStyles()} data-testid="nav-bar">
      <span className={navContentStyles()}>
        <Image
          src="/assets/images/net-imoveis-logo.png"
          alt="Logo Netimóveis"
          width={126}
          height={32}
        />
        <Menu />
      </span>
    </nav>
  );
}

function Menu() {
  const currentBreakpoint = useCurrentBreakpoint();
  const isActiveCompactMode = currentBreakpoint?.value
    ? currentBreakpoint.value < parseInt(defaultTheme.screens.laptop)
    : true;

  return <>{isActiveCompactMode ? <CompactMenu /> : <DefaultMenu />}</>;
}

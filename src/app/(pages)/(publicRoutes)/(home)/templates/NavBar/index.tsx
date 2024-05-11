import { useCurrentBreakpoint } from "@/hooks";
import { defaultTheme } from "@/styles/theme";
import { convertPixelIntoNumber } from "@/utils";
import Image from "next/image";
import { CompactMenu } from "./CompactMenu";
import { DefaultMenu } from "./DefaultMenu";
import { navBarStyles, navContentStyles } from "./styles";

export function NavBar() {
  return (
    <nav className={navBarStyles()} data-testid="nav-bar">
      <span className={navContentStyles()}>
        <Image
          src="/images/net-imoveis-logo.png"
          alt="Logo Netimóveis"
          priority
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

  const isActiveCompactMode =
    currentBreakpoint?.screenSize! <=
    convertPixelIntoNumber(defaultTheme.screens.laptop);

  return (
    <>
      {currentBreakpoint && (
        <>{isActiveCompactMode ? <CompactMenu /> : <DefaultMenu />}</>
      )}
    </>
  );
}

import { Button } from "@/components";
import { Arrow } from "@/icons";
import Link from "next/link";
import {
  buttonsContainerStyles,
  menuOptionsStyles,
  menuStyles,
  optionWithDropdownStyles,
} from "./styles";

export function DefaultMenu() {
  return (
    <span className={menuStyles()} data-testid="default-menu">
      <ul className={menuOptionsStyles()}>
        <Link href="">Imobiliárias</Link>
        <Link href="">Quero me Associar</Link>
        <Link href="" className={optionWithDropdownStyles()}>
          Sobre <Arrow />
        </Link>
        <Link href="">Blog</Link>
      </ul>

      <span className={buttonsContainerStyles()}>
        <Button border="full-rounded">Anunciar Imóvel</Button>
        <Link href="">Entrar</Link>
      </span>
    </span>
  );
}

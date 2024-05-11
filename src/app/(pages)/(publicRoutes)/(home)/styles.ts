import { joinStyles } from "@/utils";

export function headerStyles() {
  const styles = {
    base: `
    flex
    flex-col
    `,
  };

  return joinStyles(styles);
}

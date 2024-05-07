export function formatTokens(tokens: string[]) {
  return tokens
    .join(" ")
    .replaceAll("\n", "")
    .split(" ")
    .filter((token) => token !== "")
    .join(" ");
}

export function joinStyles(componentStyles: object, ...variants: string[]) {
  const formattedComponentStyles = formatTokens(Object.values(componentStyles));

  if (variants.length > 0) {
    const formattedVariants = formatTokens(variants);
    const styleValues = [formattedComponentStyles, formattedVariants];

    return Object.values(styleValues).join(" ");
  }

  return formattedComponentStyles;
}

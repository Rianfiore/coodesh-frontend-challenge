import "@/styles/globals.css";

export const metadata = {
  title: "Netimóveis - Imóveis para comprar, vender ou alugar.",
  description: "A maior Rede de imobiliárias do Brasil",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br">
      <body>{children}</body>
    </html>
  );
}

import type { Metadata } from "next";
// 1. Importe as fontes que vamos usar do Google Fonts
import { Inter, Lora } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

// 2. Configure as fontes, associando-as a variáveis CSS
const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const lora = Lora({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-lora",
});

export const metadata: Metadata = {
  title: "Elo Sapiens",
  description: "Explorando as conexões que definem a jornada humana.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // 3. Aplique as classes das variáveis de fonte ao elemento <html>.
    //    Isso torna as variáveis --font-inter e --font-lora disponíveis em todo o CSS.
    <html lang="pt-br" className={`${inter.variable} ${lora.variable}`}>
      <body className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

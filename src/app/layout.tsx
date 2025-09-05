import type { Metadata } from "next";

import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "700"], // Definimos os pesos que vamos precisar
  variable: "--font-lora", // Continuamos a usar a variável --font-lora
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

    <html lang="pt-br" className={`${inter.variable} ${poppins.variable}`}>
      <body className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

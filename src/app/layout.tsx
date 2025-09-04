import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

// 1. Importa as nossas novas peças de layout
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

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
    <html lang="pt-br">
      {/* Estas classes do Tailwind são a chave para o "rodapé colado":
        - flex: Ativa o Flexbox no corpo da página.
        - flex-col: Organiza os filhos (Header, main, Footer) em uma coluna.
        - min-h-screen: Garante que o body tenha no mínimo a altura da tela.
      */}
      <body className={`${inter.className} flex flex-col min-h-screen`}>
        {/* 2. O Header aparece no topo de todas as páginas */}
        <Header />

        {/* A classe 'flex-grow' diz para o conteúdo principal esticar e ocupar
            todo o espaço livre entre o Header e o Footer.
        */}
        <main className="flex-grow">
          {children}{" "}
          {/* Aqui é onde o conteúdo da página atual (page.tsx) entra */}
        </main>

        {/* 3. O Footer aparece no final de todas as páginas */}
        <Footer />
      </body>
    </html>
  );
}

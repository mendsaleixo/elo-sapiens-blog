import Link from "next/link";

// Definimos o nosso componente Header.
// A palavra-chave 'export' permite que ele seja importado em outros arquivos.
export function Header() {
  return (
    // Estas classes do Tailwind criam o visual do cabeçalho:
    // bg-slate-900: Fundo cinza-ardósia escuro.
    // text-white: Texto branco.
    // p-4: Padding (espaçamento interno).
    <header className="bg-slate-900 text-white p-4">
      {/* 'container': Limita a largura do conteúdo em telas grandes.
        'mx-auto': Centraliza o container.
        'flex', 'justify-between', 'items-center': Comandos do Flexbox para alinhar o logo à esquerda e a navegação à direita.
      */}
      <div className="container mx-auto flex justify-between items-center">
        {/* O componente <Link> do Next.js é usado para navegação interna sem recarregar a página. */}
        <Link href="/" className="text-xl font-bold">
          Elo Sapiens
        </Link>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <Link href="/sobre" className="hover:text-slate-300">
                Sobre
              </Link>
            </li>
            <li>
              <Link href="/categorias" className="hover:text-slate-300">
                Categorias
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

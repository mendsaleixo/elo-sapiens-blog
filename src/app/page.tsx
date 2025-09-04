export default function HomePage() {
  return (
    // 'container' e 'mx-auto' centram o conteúdo horizontalmente.
    // 'px-4' adiciona um espaçamento nas laterais para telas pequenas.
    // 'py-12' e 'md:py-20' adicionam um espaçamento vertical generoso, maior em telas médias (md) ou maiores.
    <main className="container mx-auto px-4 py-12 md:py-20 text-center">
      {/* 'text-4xl' define o tamanho da fonte.
        'md:text-5xl' aumenta o tamanho em telas médias ou maiores.
        'font-bold' aplica negrito.
        'tracking-tight' deixa o espaço entre as letras um pouco mais justo, um detalhe de design.
      */}
      <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
        Bem-vindo ao Elo Sapiens
      </h1>

      {/* 'mt-4' adiciona uma margem no topo.
        'text-lg' define o tamanho do texto.
        'text-gray-600' usa uma cor padrão do Tailwind para texto secundário.
        'max-w-2xl' limita a largura máxima do parágrafo para melhorar a legibilidade.
      */}
      <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
        Explorando as conexões que definem a jornada humana.
      </p>
    </main>
  );
}

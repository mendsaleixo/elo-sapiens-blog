import Image from "next/image";
import { getArticleBySlug } from "@/data/mock-articles";

type PostPageProps = {
  params: {
    slug: string;
  };
};

export default function PostPage({ params }: PostPageProps) {
  const { slug } = params;

  const article = getArticleBySlug(slug);

  if (!article) {
    return (
      <div className="container mx-auto px-4 py-12 text-center">
        <h1 className="text-4xl font-bold">Artigo não encontrado</h1>
        <p className="mt-4">
          O link que você seguiu pode estar quebrado ou o artigo foi removido.
        </p>
      </div>
    );
  }

  return (
    <article className="container mx-auto px-4 py-12">
      <header className="max-w-3xl mx-auto text-center mb-8">
        <p className="text-sm font-semibold text-musgo uppercase tracking-wider">
          {article.category}
        </p>
        <h1 className="text-4xl md:text-5xl font-lora font-bold mt-2 leading-tight">
          {article.title}
        </h1>
      </header>

      <div className="relative w-full h-[60vh] max-h-[600px] rounded-lg overflow-hidden my-8">
        <Image
          src={article.imageUrl}
          alt={`Imagem para o artigo ${article.title}`}
          fill
          priority
          className="object-cover object-center"
        />
      </div>

      <div className="prose prose-lg max-w-3xl mx-auto mt-12">
        <p>
          Este é o início do conteúdo do artigo. Em um blog real, este texto
          viria do nosso CMS e seria renderizado aqui. A exploração das conexões
          entre o passado e o futuro nos mostra que a inovação muitas vezes bebe
          da fonte de saberes ancestrais.
        </p>
        <p>
          A capacidade de observar a natureza, por exemplo, que guiou os
          primeiros astrônomos, hoje inspira algoritmos de inteligência
          artificial através da biomimética. O elo entre o orgânico e o digital
          é a essência do que exploramos no Elo Sapiens.
        </p>
        <blockquote>
          &quot;O futuro está no passado que ainda não conhecemos. &quot;
        </blockquote>
      </div>
    </article>
  );
}

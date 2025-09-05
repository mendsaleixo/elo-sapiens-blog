import Link from "next/link";
import Image from "next/image";
import { ArticleCard } from "@/components/ArticleCard";
import { articles } from "@/data/mock-articles"; // Importamos nossos dados

export default function HomePage() {
  // Pegamos o primeiro artigo da nossa lista mock para o conteúdo textual do Hero
  const heroArticleContent = articles[0];
  // Pegamos os artigos para a grelha de "Recentes" (excluindo o primeiro, que é o hero de conteúdo)
  const recentArticles = articles.slice(1, 7);

  return (
    <div className="container mx-auto px-4">
      {/* --- Seção Hero (Artigo em Destaque) --- */}
      <section className="relative w-full h-[60vh] max-h-[600px] rounded-lg overflow-hidden my-8">
        <Image
          src="/images/img_post1.png"
          alt="Observatório no Deserto do Atacama"
          fill
          priority
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
        <div className="relative h-full flex flex-col justify-end p-8 md:p-12 text-white">
          <p className="text-sm font-semibold text-nevoa uppercase tracking-wider">
            {heroArticleContent.category}
          </p>
          <h2 className="text-3xl md:text-5xl font-lora font-bold max-w-3xl leading-tight mt-2">
            {heroArticleContent.title}
          </h2>
          <Link
            href={`/posts/${heroArticleContent.slug}`}
            className="mt-4 font-semibold inline-block text-lg hover:underline w-fit"
          >
            Leia Mais →
          </Link>
        </div>
      </section>

      {/* --- Seção de Artigos Recentes --- */}
      <section className="my-16">
        <h2 className="text-3xl font-lora font-bold border-b-2 border-musgo/30 pb-2 mb-8">
          Artigos Recentes
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {recentArticles.map((article) => (
            <ArticleCard
              key={article.slug}
              article={article} // Passamos o objeto 'article' inteiro
            />
          ))}
        </div>
      </section>
    </div>
  );
}

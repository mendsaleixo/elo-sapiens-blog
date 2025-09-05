import Link from 'next/link';
import Image from 'next/image';
import type { Article } from '@/data/mock-articles'; 

type ArticleCardProps = {
  article: Article;
};

export function ArticleCard({ article }: ArticleCardProps) {
  return (
    <Link href={`/posts/${article.slug}`} className="group block">
      <div className="overflow-hidden rounded-lg">
        <Image 
          src={article.imageUrl} 
          alt={`Imagem para o artigo ${article.title}`}
          width={400}
          height={250}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300 ease-in-out" 
        />
      </div>
      <div className="mt-4">
        <p className="text-sm font-semibold text-musgo uppercase tracking-wider">{article.category}</p>
        <h3 className="mt-1 text-lg font-lora font-bold text-ardosia group-hover:text-musgo transition-colors">
          {article.title}
        </h3>
      </div>
    </Link>
  );
}
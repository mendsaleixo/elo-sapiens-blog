import Link from 'next/link';
import Image from 'next/image';

// O "contrato" de props que o nosso cartão de artigo vai receber
type ArticleCardProps = {
  category: string;
  title: string;
  imageUrl: string;
  slug: string; // O URL amigável do post, ex: "a-sabedoria-das-estrelas"
};

export function ArticleCard({ category, title, imageUrl, slug }: ArticleCardProps) {
  return (
    // O cartão inteiro é um link para a página do post
    <Link href={`/posts/${slug}`} className="group block">
      <div className="overflow-hidden rounded-lg">
        <Image 
          src={imageUrl} 
          alt={`Imagem para o artigo ${title}`}
          width={400} // Largura de exemplo
          height={250} // Altura de exemplo
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300 ease-in-out" 
        />
      </div>
      <div className="mt-4">
        <p className="text-sm font-semibold text-musgo uppercase tracking-wider">{category}</p>
        <h3 className="mt-1 text-lg font-lora font-bold text-ardosia group-hover:text-musgo transition-colors">
          {title}
        </h3>
      </div>
    </Link>
  );
}
// Arquivo: src/data/mock-articles.ts

// A interface define a "planta" de um artigo, garantindo a consistência dos dados.
export interface Article {
  slug: string;
  category: 'Raízes' | 'Horizontes' | 'Simbiose' | 'Prisma';
  title: string;
  imageUrl: string;
}

// O nosso array de artigos de exemplo, agora com mais conteúdo.
export const articles: Article[] = [
  { 
    slug: 'astronomia-ancestral', 
    category: 'Raízes', 
    title: 'A Sabedoria das Estrelas: Como a Astronomia Ancestral Molda a Exploração Espacial de Amanhã', 
    imageUrl: 'https://images.unsplash.com/photo-1446776811953-b23d579424ba?q=80&w=2072' 
  },
  { 
    slug: 'ia-criatividade', 
    category: 'Horizontes', 
    title: 'IA e Criatividade: A Nova Fronteira da Arte ou o Fim do Artista?', 
    imageUrl: 'https://images.unsplash.com/photo-1677756119517-756a188d2d94?q=80&w=2070' 
  },
  { 
    slug: 'florestas-de-alimentos', 
    category: 'Simbiose', 
    title: 'Florestas de Alimentos: Como a Agricultura Sintrópica Regenera o Solo no Brasil', 
    imageUrl: 'https://images.unsplash.com/photo-1590622613259-2a7313a2a91e?q=80&w=2071'
  },
  { 
    slug: 'dilema-redes-sociais', 
    category: 'Prisma', 
    title: 'O Dilema das Redes: Conectados como Nunca, Isolados como Sempre?', 
    imageUrl: 'https://images.unsplash.com/photo-1554177255-61502b352de3?q=80&w=2070'
  },
  { 
    slug: 'biomimetica-inovacao', 
    category: 'Simbiose', 
    title: 'Biomimética: Inovação que Imita a Genialidade da Natureza', 
    imageUrl: 'https://images.unsplash.com/photo-1525382455946-421b474220de?q=80&w=2070' 
  },
  { 
    slug: 'computacao-quantica', 
    category: 'Horizontes', 
    title: 'Computação Quântica e os Limites da Nossa Realidade', 
    imageUrl: 'https://images.unsplash.com/photo-1532187643623-dbf26734177c?q=80&w=1964' 
  },
];
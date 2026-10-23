export type ProductTheme = 'links' | 'racer' | 'games';

export interface Product {
  slug: string;
  name: string;
  category: string;
  description: string;
  detail: string;
  url: string | null;
  status: 'Live' | 'In development' | 'Exploring';
  theme: ProductTheme;
}

export const products: Product[] = [
  {
    slug: 'keep-my-links',
    name: 'KeepMyLinks',
    category: 'Productivity / SaaS',
    description:
      'A smarter space to save, organise and rediscover your favourite corners of the web.',
    detail:
      'Bookmarks become visual collections: arranged into boards, labelled with useful tags and easy to return to when they matter.',
    url: 'https://keepmylinks.com',
    status: 'Live',
    theme: 'links',
  },
  {
    slug: 'maths-racer',
    name: 'Maths Racer',
    category: 'Education / Interactive Learning',
    description:
      'Making maths practice faster, more engaging and more fun through interactive learning experiences.',
    detail:
      'A focused learning experience that turns repetition into momentum, helping players build speed and confidence as they practise.',
    url: 'https://mathsracer.com',
    status: 'Live',
    theme: 'racer',
  },
  {
    slug: 'harvey-games',
    name: 'Harvey Games',
    category: 'Browser Games / Entertainment',
    description:
      'Playful browser-based experiences built for fun, experimentation and discovery.',
    detail:
      'A space for small, characterful games where a simple idea can be tested, tuned and turned into something worth playing.',
    url: null,
    status: 'In development',
    theme: 'games',
  },
];

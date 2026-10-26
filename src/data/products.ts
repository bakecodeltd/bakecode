export type ProductTheme = 'links' | 'fit';

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
    slug: 'fit',
    name: 'Fit',
    category: 'Health / Family',
    description:
      'A calm place to track body measurements and daily habits, for you and the people you look after.',
    detail:
      'Each person keeps their own profile, so measurements, growth and everyday habits stay clear and easy to return to.',
    url: 'https://jeminpro.com/fit/',
    status: 'Live',
    theme: 'fit',
  },
];

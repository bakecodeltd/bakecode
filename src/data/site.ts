export const site = {
  name: 'Bake Code Ltd',
  shortName: 'Bake Code',
  domain: 'https://bakecode.co.uk',
  location: 'United Kingdom',
  description:
    'An independent UK software studio building useful digital products and engineering modern applications.',
  contactEmail: null as string | null,
  companyNumber: null as string | null,
  registeredOffice: null as string | null,
  socialLinks: [] as Array<{ label: string; url: string }>,
} as const;

export const navigation = [
  { label: 'Products', href: '/products' },
  { label: 'Services', href: '/services' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
] as const;

export const expertise = [
  'C#',
  '.NET',
  'React',
  'TypeScript',
  'PostgreSQL',
  'APIs',
  'Cloud Infrastructure',
  'Software Architecture',
] as const;

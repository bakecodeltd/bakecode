export const site = {
  name: 'BAKE CODE LTD',
  shortName: 'Bake Code',
  domain: 'https://bakecode.co.uk',
  location: 'United Kingdom',
  description:
    'Bake Code Ltd is a software company offering IT consulting and building independent products.',
  contactEmail: 'jemin@bakecode.co.uk',
  companyNumber: '14589611',
  companiesHouseUrl: 'https://find-and-update.company-information.service.gov.uk/company/14589611',
  registeredOffice: '64 Goldsmith Road, Churchdown, Gloucester GL3 1FX',
  socialLinks: [] as Array<{ label: string; url: string }>,
} as const;

export const navigation = [
  { label: 'Services', href: '/#services' },
  { label: 'Products', href: '/#products' },
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

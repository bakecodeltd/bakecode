export const site = {
  name: 'BAKE CODE LTD',
  shortName: 'Bake Code',
  domain: 'https://bakecode.co.uk',
  location: 'United Kingdom',
  description:
    'An independent UK software studio building useful digital products and engineering modern applications.',
  contactEmail: 'jemin@bakecode.co.uk',
  companyNumber: '14589611',
  companiesHouseUrl: 'https://find-and-update.company-information.service.gov.uk/company/14589611',
  registeredOffice: '64 Goldsmith Road, Churchdown, Gloucester GL3 1FX',
  socialLinks: [] as Array<{ label: string; url: string }>,
} as const;

export const navigation = [
  { label: 'Products', href: '/#products' },
  { label: 'Services', href: '/#services' },
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

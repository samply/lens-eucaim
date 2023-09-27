import { Criteria } from '@samply/lens-core';

export const Manufacturer: Criteria = new Criteria(
  'C25392',
  {
    de: 'Manufacturer',
    en: 'Manufacturer',
  },
  "manufacturer",
  'string',
  'http://bioontology.org/projects/ontologies/birnlex',
  ['IN'],
  [
    {
      key: 'C200140',
      de: 'Siemens Healthineers',
      en: 'Siemens Healthineers',
      display_short: 'siemens healthineers',
    },
    {
      key: 'birnlex_3066',
      de: 'Siemens Medical Solutions',
      en: 'Siemens Medical Solutions',
      display_short: 'Siemens Medical Solutions',
    },
    {
      key: 'birnlex_12833',
      de: 'General Electric Medical Systems',
      en: 'General Electric Medical Systems',
      display_short: 'General Electric Medical Systems',
    },
    {
      key: 'birnlex_3065',
      de: 'Philips Medical Systems',
      en: 'Philips Medical Systems',
      display_short: 'Philips Medical Systems',
    },
    {
      key: 'birnlex_3067',
      de: 'Toshiba Medical Solutions',
      en: 'Toshiba Medical Solutions',
      display_short: 'Toshiba Medical Solutions',
    },
  ]
);

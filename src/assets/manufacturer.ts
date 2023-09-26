import { Criteria } from '@samply/lens-core';

export const Manufacturer: Criteria = new Criteria(
  '',
  {
    de: 'Manufacturer',
    en: 'Manufacturer',
  },
  'string',
  '',
  ['EQUALS'],
  [
    {
      key: 'siemens',
      de: 'Siemens Healthineers',
      en: 'Siemens Healthineers',
      display_short: 'siemens',
    },
    {
      key: 'ge',
      de: 'GE Healthcare',
      en: 'GE Healthcare',
      display_short: 'ge',
    },
    {
      key: 'philips',
      de: 'Philips Healthcare',
      en: 'Philips Healthcare',
      display_short: 'philips',
    },
    {
      key: 'canon',
      de: 'Canon Medical Systems',
      en: 'Canon Medical Systems',
      display_short: 'canon',
    },
  ]
);

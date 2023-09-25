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
    },
    {
      key: 'ge',
      de: 'GE Healthcare',
      en: 'GE Healthcare',
    },
    {
      key: 'philips',
      de: 'Philips Healthcare',
      en: 'Philips Healthcare',
    },
    {
      key: 'canon',
      de: 'Canon Medical Systems',
      en: 'Canon Medical Systems',
    },
  ]
);

import { Criteria } from '@samply/lens-core';

export const Lokalisation: Criteria = new Criteria(
  'SNOMEDCT123037004',
  {
    de: 'Body Part',
    en: 'Body Part',
  },
  "body part",
  'string',
  'urn:snomed-org/sct',
  ['EQUALS', 'CONTAINS'],
  [
    {
      key: 'SNOMEDCT76752008',
      en: '',
      de: 'Breast',
      display_short: 'breast',
    },
    {
      key: 'SNOMEDCT71854001',
      en: '',
      de: 'Colon',
      display_short: 'colon',
    },
    {
      key: 'SNOMEDCT39607008',
      en: '',
      de: 'Lung',
      display_short: 'lung',
    },
    {
      key: 'SNOMEDCT12921003',
      en: '',
      de: 'Pelvis',
      display_short: 'pelvis',
    },
    {
      key: 'SNOMEDCT41216001',
      en: '',
      de: 'Prostate',
      display_short: 'prostate',
    },
  ]
);

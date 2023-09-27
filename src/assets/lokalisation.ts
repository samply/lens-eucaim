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
      de: 'Beast structure',
      display_short: 'breast',
    },
    {
      key: 'SNOMEDCT71854001',
      en: '',
      de: 'Colon structure',
      display_short: 'colon',
    },
    {
      key: 'SNOMEDCT39607008',
      en: '',
      de: 'Lung structure',
      display_short: 'lung',
    },
    {
      key: 'SNOMEDCT12921003',
      en: '',
      de: 'Pelvic region',
      display_short: 'pelvis',
    },
    {
      key: 'SNOMEDCT41216001',
      en: '',
      de: 'Prostatic structure',
      display_short: 'prostate',
    },
  ]
);

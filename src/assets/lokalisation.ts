import { Criteria } from '@samply/lens-core';

export const Lokalisation: Criteria = new Criteria(
  'body_part',
  {
    de: 'Body Part',
    en: 'Body Part',
  },
  'string',
  'urn:snomed-org/sct',
  ['EQUALS', 'CONTAINS'],
  [
    {
      key: '76752008',
      en: '',
      de: 'Beast structure',
      display_short: 'breast',
    },
    {
      key: '71854001',
      en: '',
      de: 'Colon structure',
      display_short: 'colon',
    },
    {
      key: '39607008',
      en: '',
      de: 'Lung structure',
      display_short: 'lung',
    },
    {
      key: '12921003',
      en: '',
      de: 'Pelvic region',
      display_short: 'pelvis',
    },
    {
      key: '41216001',
      en: '',
      de: 'Prostatic structure',
      display_short: 'prostate',
    },
  ]
);

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
    },
    {
      key: '71854001',
      en: '',
      de: 'Colon structure',
    },
    {
      key: '39607008',
      en: '',
      de: 'Lung structure',
    },
    {
      key: '12921003',
      en: '',
      de: 'Pelvic region',
    },
    {
      key: '41216001',
      en: '',
      de: 'Prostatic structure',
    },
  ]
);

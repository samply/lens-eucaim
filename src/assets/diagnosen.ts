import { Criteria } from '@samply/lens-core';
export const Diagnosen: Criteria = new Criteria(
  'SNOMEDCT439401001',
  {
    en: 'Diagnosis',
    de: 'Diagnosis',
  },
  "diagnosis",
  'string',
  'urn:snomed-org/sct',
  ['EQUALS', 'CONTAINS'],
  [
    {
      key: 'SNOMEDCT363406005',
      en: '',
      de: 'Colon Cancer',
      display_short: 'colon cancer',
    },
    {
      key: 'SNOMEDCT254837009',
      en: '',
      de: 'Breast Cancer',
      display_short: 'breast cancer',
    },
    {
      key: 'SNOMEDCT363358000',
      en: '',
      de: 'Lung Cancer',
      display_short: 'lung cancer',
    },
    {
      key: 'SNOMEDCT363484005',
      en: '',
      de: 'Pelvis Cancer',
      display_short: 'pelvis cancer',
    },
    {
      key: 'SNOMEDCT399068003',
      en: '',
      de: 'Prostate Cancer',
      display_short: 'prostate cancer',
    },
  ]
);

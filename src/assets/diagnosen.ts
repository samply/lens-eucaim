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
      de: 'Malignant tumor of colon',
      display_short: 'cancer of colon',
    },
    {
      key: 'SNOMEDCT254837009',
      en: '',
      de: 'Malignant tumor of breast',
      display_short: 'breast cancer',
    },
    {
      key: 'SNOMEDCT363358000',
      en: '',
      de: 'Malignant tumor of lung',
      display_short: 'lung cancer',
    },
    {
      key: 'SNOMEDCT363484005',
      en: '',
      de: 'Malignant tumor of pelvis',
      display_short: 'pelvis cancer',
    },
    {
      key: 'SNOMEDCT399068003',
      en: '',
      de: 'Malignant tumor of prostate',
      display_short: 'cancer of prostate',
    },
  ]
);

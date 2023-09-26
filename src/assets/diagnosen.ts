import { Criteria } from '@samply/lens-core';
export const Diagnosen: Criteria = new Criteria(
  'diagnosis',
  {
    en: 'Diagnosis',
    de: 'Diagnosis',
  },
  'string',
  'urn:snomed-org/sct',
  ['EQUALS', 'CONTAINS'],
  [
    {
      key: '363406005',
      en: '',
      de: 'Malignant tumor of colon',
      display_short: 'cancer of colon',
    },
    {
      key: '254837009',
      en: '',
      de: 'Malignant tumor of breast',
      display_short: 'breast cancer',
    },
    {
      key: '363358000',
      en: '',
      de: 'Malignant tumor of lung',
      display_short: 'lung cancer',
    },
    {
      key: '363484005',
      en: '',
      de: 'Malignant tumor of pelvis',
      display_short: 'pelvis cancer',
    },
    {
      key: '399068003',
      en: '',
      de: 'Malignant tumor of prostate',
      display_short: 'cancer of prostate',
    },
  ]
);

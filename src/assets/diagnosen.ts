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
    },
    {
      key: '254837009',
      en: '',
      de: 'Malignant tumor of breast',
    },
    {
      key: '363358000',
      en: '',
      de: 'Malignant tumor of lung',
    },
    {
      key: '363484005',
      en: '',
      de: 'Malignant tumor of pelvis',
    },
    {
      key: '399068003',
      en: '',
      de: 'Malignant tumor of prostate',
    },
  ]
);

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
      key: 'SNOMEDCT363351006',
      en: '',
      de: 'Rectal Cancer',
      display_short: 'rectal cancer',
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
    {
      key: 'SNOMEDCT1156451005',
      en: '',
      de: 'Diffuse Intrinsic Pontine Glioma',
      display_short: 'diffuse intrinsic pontine glioma',
    },
    {
      key: 'SNOMEDCT363510005',
      en: '',
      de: 'Cancer of Large Intestine',
      display_short: 'cancer of large intestine',
    },
    {
      key: 'SNOMEDCT93870000',
      en: '',
      de: 'Liver Cancer',
      display_short: 'liver cancer',
    },
    {
      key: 'SNOMEDCT432328008',
      en: '',
      de: 'Neuroblastoma',
      display_short: 'neuroblastoma',
    },
  ]
);

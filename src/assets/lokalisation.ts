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
      key: 'SNOMEDCT818983003',
      en: '',
      de: 'Abdomen',
      display_short: 'abdomen',
    },
    {
      key: 'SNOMEDCT23451007',
      en: '',
      de: 'Adrenal Gland',
      display_short: 'adrenal gland',
    },
    {
      key: 'SNOMEDCT70258002',
      en: '',
      de: 'Ankle Joint',
      display_short: 'ankle joint',
    },
    {
      key: 'SNOMEDCT15825003',
      en: '',
      de: 'Aorta',
      display_short: 'aorta',
    },
    {
      key: 'SNOMEDCT53120007',
      en: '',
      de: 'Arm',
      display_short: 'arm',
    },
    {
      key: 'SNOMEDCT12738006',
      en: '',
      de: 'Brain',
      display_short: 'brain',
    },
    {
      key: 'ICDO3-C71.7',
      en: '',
      de: 'Brain Stem',
      display_short: 'brain stem',
    },
    {
      key: 'SNOMEDCT76752008',
      en: '',
      de: 'Breast',
      display_short: 'breast',
    },
    {
      key: 'SNOMEDCT51185008',
      en: '',
      de: 'Chest',
      display_short: 'chest',
    },
    {
      key: 'SNOMEDCT71854001',
      en: '',
      de: 'Colon',
      display_short: 'colon',
    },
    {
      key: 'SNOMEDCT117590005',
      en: '',
      de: 'Ear',
      display_short: 'ear',
    },
    {
      key: 'SNOMEDCT56459004',
      en: '',
      de: 'Foot',
      display_short: 'foot',
    },
    {
      key: 'SNOMEDCT28231008',
      en: '',
      de: 'Gallbladder',
      display_short: 'gallbladder',
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

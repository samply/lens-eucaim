import { Category, Criteria } from '@samply/lens-core';
// import { Entities } from './entities';
import { Diagnosen } from './diagnosen';
// import { Morphologien } from './morphologien';
import { Lokalisation } from './lokalisation';
import { Manufacturer } from './manufacturer';

export const staticCatalogue: Array<Category> = [
  new Category('patient', 'Patient', [
    new Criteria(
      'SNOMEDCT263495000',
      { de: 'Gender', en: 'Gender' },
      "gender",
      'string',
      '',
      ['IN'],
      [
        {
          key: 'SNOMEDCT248153007',
          de: 'male',
          en: 'male',
          display_short: 'male',
        },
        {
          key: 'SNOMEDCT248152002',
          de: 'female',
          en: 'female',
          display_short: 'female',
        },
        {
          key: 'SNOMEDCT74964007',
          de: 'other',
          en: 'other',
          display_short: 'other',
        },
        {
          key: 'SNOMEDCT261665006',
          de: 'unknown',
          en: 'unknown',
          display_short: 'unknown',
        },
      ]
    ),
    new Criteria(
      'SNOMEDCT423493009',
      { de: 'Age at Diagnosis', en: 'Age at Diagnosis' },
      "age at diagnosis",
      'number',
      '',
      ['LOWER_THAN', 'GREATER_THAN', 'BETWEEN']
    ),
  ]),
  new Category('clinical', 'Clinical Parameters', [
    Diagnosen,
    new Criteria(
      'SNOMEDCT432213005',
      { de: 'Year of Diagnosis', en: 'Year of Diagnosis' },
      "year of diagnosis",
      'number',
      '',
      ['LOWER_THAN', 'GREATER_THAN', 'BETWEEN']
    ),
  ]),
  new Category('imaging', 'Image Parameters', [
    new Criteria(
      'RID10311',
      { de: 'Modality', en: 'Modality' },
      "modality",
      'string',
      'urn:oid:2.16.840.1.113883.6.256',
      ['IN'],
      [
        {
          key: 'RID10312',
          de: 'Magnetic Resonance Imaging',
          en: 'Magnetic Resonance Imaging',
          display_short: 'MR',
        },
        {
          key: 'RID10337',
          de: 'Positron Emission Tomography',
          en: 'Positron Emission Tomography',
          display_short: 'PET',
        },
        {
          key: 'RID10334',
          de: 'Single Photon Emission Computed Tomography',
          en: 'Single Photon Emission Computed Tomography',
          display_short: 'SPECT',
        },
        {
          key: 'RID10337',
          de: 'Positron Emission Tomography',
          en: 'Positron Emission Tomography',
          display_short: 'PET',
        },
        {
          key: 'RID10321',
          de: 'Computed Tomography',
          en: 'Computed Tomography',
          display_short: 'CT',
        },
        {
          key: 'C0012249',
          de: 'Digital Radiography',
          en: 'Digital Radiography',
          display_short: 'digital radiography',
        },
        {
          key: 'C0860950',
          de: 'Digital Mammography',
          en: 'Digital Mammography',
          display_short: 'digital mammography',
        },
        {
          key: 'LP7853-7',
          de: 'Ultrasound',
          en: 'Ultrasound',
          display_short: 'ultrasound',
        },
        {
          key: 'SNOMEDCT363680008',
          de: 'X-Ray',
          en: 'X-Ray',
          display_short: 'x-ray',
        },
      ]
    ),
    Lokalisation,
    Manufacturer,
  ]),
];

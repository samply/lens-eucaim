import {
  LensConfig,
  diagnosisMeasure,
  medicationStatementsMeasure,
  patientsMeasure,
  proceduresMeasure,
  specimenMeasure,
} from '@samply/lens-core';
import { Beam } from '@samply/lens-core/cql';

export const environment = {
  production: true,
  lensConfig: new LensConfig(
    [
      new Beam('broker', new URL('http://localhost:8085'), [
        'proxy1',
        'proxy2',
      ]),
    ],
    [
      // patientsMeasure,
      // diagnosisMeasure,
      // specimenMeasure,
      // proceduresMeasure,
      // medicationStatementsMeasure,
    ]
  ),
};

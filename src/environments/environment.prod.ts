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
      new Beam('broker', new URL('https://explorer.eucaim.cancerimage.eu/backend/'), [
      // new Beam('broker', new URL('http://localhost:8085'), [
        // 'proxy1',
        // 'proxy2',
	    'chaimeleon',
	    'procanceri'
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

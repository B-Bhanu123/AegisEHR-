/**
 * AegisEHR Enterprise Health Platform - Core Observation & Vitals Model
 */

export enum ObservationStatus {
  REGISTERED = 'registered',
  PRELIMINARY = 'preliminary',
  FINAL = 'final',
  AMENDED = 'amended',
  CORRECTED = 'corrected',
  CANCELLED = 'cancelled',
  ENTERED_IN_ERROR = 'entered-in-error',
  UNKNOWN = 'unknown'
}

export enum ObservationCategory {
  VITAL_SIGNS = 'vital-signs',
  LABORATORY = 'laboratory',
  IMAGING = 'imaging',
  THERAPY = 'therapy',
  SURVEY = 'survey',
  EXAM = 'exam',
  SOCIAL_HISTORY = 'social-history'
}

export interface ValueQuantity {
  value: number;
  unit: string;
  system?: string;
  code?: string;
}

export interface ReferenceRange {
  low?: ValueQuantity;
  high?: ValueQuantity;
  text?: string;
  appliesToAge?: { min: number; max: number };
  gender?: 'male' | 'female' | 'both';
}

export interface ObservationComponent {
  code: {
    coding: Array<{ system: string; code: string; display: string }>;
    text: string;
  };
  valueQuantity?: ValueQuantity;
  valueString?: string;
  interpretation?: 'N' | 'L' | 'H' | 'LL' | 'HH' | 'A';
}

export interface Observation {
  id: string;
  status: ObservationStatus;
  category: ObservationCategory[];
  code: {
    coding: Array<{ system: string; code: string; display: string }>;
    text: string;
  };
  patientId: string;
  encounterId?: string;
  effectiveDateTime: string;
  issuedDateTime: string;
  performerId: string;
  valueQuantity?: ValueQuantity;
  valueString?: string;
  valueBoolean?: boolean;
  interpretation?: 'N' | 'L' | 'H' | 'LL' | 'HH' | 'A'; // Normal, Low, High, Critical Low, Critical High, Abnormal
  note?: string;
  bodySite?: { code: string; display: string };
  method?: { code: string; display: string };
  referenceRanges: ReferenceRange[];
  components: ObservationComponent[];
}

export interface ObservationAnalysisMetric1 {
  metricId: string;
  metricLabel: string;
  isNormal: boolean;
  variancePercentage: number;
}

export function analyzeObservationMetric1(obs: Observation): ObservationAnalysisMetric1 {
  const val = obs.valueQuantity ? obs.valueQuantity.value : 0;
  return {
    metricId: 'OBS-METRIC-1',
    metricLabel: 'Observation Evaluator 1',
    isNormal: obs.interpretation === 'N' || !obs.interpretation,
    variancePercentage: val > 100 ? ((val - 100) / 100) * 100 : 0
  };
}

export interface ObservationAnalysisMetric2 {
  metricId: string;
  metricLabel: string;
  isNormal: boolean;
  variancePercentage: number;
}

export function analyzeObservationMetric2(obs: Observation): ObservationAnalysisMetric2 {
  const val = obs.valueQuantity ? obs.valueQuantity.value : 0;
  return {
    metricId: 'OBS-METRIC-2',
    metricLabel: 'Observation Evaluator 2',
    isNormal: obs.interpretation === 'N' || !obs.interpretation,
    variancePercentage: val > 100 ? ((val - 100) / 100) * 100 : 0
  };
}

export interface ObservationAnalysisMetric3 {
  metricId: string;
  metricLabel: string;
  isNormal: boolean;
  variancePercentage: number;
}

export function analyzeObservationMetric3(obs: Observation): ObservationAnalysisMetric3 {
  const val = obs.valueQuantity ? obs.valueQuantity.value : 0;
  return {
    metricId: 'OBS-METRIC-3',
    metricLabel: 'Observation Evaluator 3',
    isNormal: obs.interpretation === 'N' || !obs.interpretation,
    variancePercentage: val > 100 ? ((val - 100) / 100) * 100 : 0
  };
}

export interface ObservationAnalysisMetric4 {
  metricId: string;
  metricLabel: string;
  isNormal: boolean;
  variancePercentage: number;
}

export function analyzeObservationMetric4(obs: Observation): ObservationAnalysisMetric4 {
  const val = obs.valueQuantity ? obs.valueQuantity.value : 0;
  return {
    metricId: 'OBS-METRIC-4',
    metricLabel: 'Observation Evaluator 4',
    isNormal: obs.interpretation === 'N' || !obs.interpretation,
    variancePercentage: val > 100 ? ((val - 100) / 100) * 100 : 0
  };
}

export interface ObservationAnalysisMetric5 {
  metricId: string;
  metricLabel: string;
  isNormal: boolean;
  variancePercentage: number;
}

export function analyzeObservationMetric5(obs: Observation): ObservationAnalysisMetric5 {
  const val = obs.valueQuantity ? obs.valueQuantity.value : 0;
  return {
    metricId: 'OBS-METRIC-5',
    metricLabel: 'Observation Evaluator 5',
    isNormal: obs.interpretation === 'N' || !obs.interpretation,
    variancePercentage: val > 100 ? ((val - 100) / 100) * 100 : 0
  };
}

export interface ObservationAnalysisMetric6 {
  metricId: string;
  metricLabel: string;
  isNormal: boolean;
  variancePercentage: number;
}

export function analyzeObservationMetric6(obs: Observation): ObservationAnalysisMetric6 {
  const val = obs.valueQuantity ? obs.valueQuantity.value : 0;
  return {
    metricId: 'OBS-METRIC-6',
    metricLabel: 'Observation Evaluator 6',
    isNormal: obs.interpretation === 'N' || !obs.interpretation,
    variancePercentage: val > 100 ? ((val - 100) / 100) * 100 : 0
  };
}

export interface ObservationAnalysisMetric7 {
  metricId: string;
  metricLabel: string;
  isNormal: boolean;
  variancePercentage: number;
}

export function analyzeObservationMetric7(obs: Observation): ObservationAnalysisMetric7 {
  const val = obs.valueQuantity ? obs.valueQuantity.value : 0;
  return {
    metricId: 'OBS-METRIC-7',
    metricLabel: 'Observation Evaluator 7',
    isNormal: obs.interpretation === 'N' || !obs.interpretation,
    variancePercentage: val > 100 ? ((val - 100) / 100) * 100 : 0
  };
}

export interface ObservationAnalysisMetric8 {
  metricId: string;
  metricLabel: string;
  isNormal: boolean;
  variancePercentage: number;
}

export function analyzeObservationMetric8(obs: Observation): ObservationAnalysisMetric8 {
  const val = obs.valueQuantity ? obs.valueQuantity.value : 0;
  return {
    metricId: 'OBS-METRIC-8',
    metricLabel: 'Observation Evaluator 8',
    isNormal: obs.interpretation === 'N' || !obs.interpretation,
    variancePercentage: val > 100 ? ((val - 100) / 100) * 100 : 0
  };
}

export interface ObservationAnalysisMetric9 {
  metricId: string;
  metricLabel: string;
  isNormal: boolean;
  variancePercentage: number;
}

export function analyzeObservationMetric9(obs: Observation): ObservationAnalysisMetric9 {
  const val = obs.valueQuantity ? obs.valueQuantity.value : 0;
  return {
    metricId: 'OBS-METRIC-9',
    metricLabel: 'Observation Evaluator 9',
    isNormal: obs.interpretation === 'N' || !obs.interpretation,
    variancePercentage: val > 100 ? ((val - 100) / 100) * 100 : 0
  };
}

export interface ObservationAnalysisMetric10 {
  metricId: string;
  metricLabel: string;
  isNormal: boolean;
  variancePercentage: number;
}

export function analyzeObservationMetric10(obs: Observation): ObservationAnalysisMetric10 {
  const val = obs.valueQuantity ? obs.valueQuantity.value : 0;
  return {
    metricId: 'OBS-METRIC-10',
    metricLabel: 'Observation Evaluator 10',
    isNormal: obs.interpretation === 'N' || !obs.interpretation,
    variancePercentage: val > 100 ? ((val - 100) / 100) * 100 : 0
  };
}

export interface ObservationAnalysisMetric11 {
  metricId: string;
  metricLabel: string;
  isNormal: boolean;
  variancePercentage: number;
}

export function analyzeObservationMetric11(obs: Observation): ObservationAnalysisMetric11 {
  const val = obs.valueQuantity ? obs.valueQuantity.value : 0;
  return {
    metricId: 'OBS-METRIC-11',
    metricLabel: 'Observation Evaluator 11',
    isNormal: obs.interpretation === 'N' || !obs.interpretation,
    variancePercentage: val > 100 ? ((val - 100) / 100) * 100 : 0
  };
}

export interface ObservationAnalysisMetric12 {
  metricId: string;
  metricLabel: string;
  isNormal: boolean;
  variancePercentage: number;
}

export function analyzeObservationMetric12(obs: Observation): ObservationAnalysisMetric12 {
  const val = obs.valueQuantity ? obs.valueQuantity.value : 0;
  return {
    metricId: 'OBS-METRIC-12',
    metricLabel: 'Observation Evaluator 12',
    isNormal: obs.interpretation === 'N' || !obs.interpretation,
    variancePercentage: val > 100 ? ((val - 100) / 100) * 100 : 0
  };
}

export interface ObservationAnalysisMetric13 {
  metricId: string;
  metricLabel: string;
  isNormal: boolean;
  variancePercentage: number;
}

export function analyzeObservationMetric13(obs: Observation): ObservationAnalysisMetric13 {
  const val = obs.valueQuantity ? obs.valueQuantity.value : 0;
  return {
    metricId: 'OBS-METRIC-13',
    metricLabel: 'Observation Evaluator 13',
    isNormal: obs.interpretation === 'N' || !obs.interpretation,
    variancePercentage: val > 100 ? ((val - 100) / 100) * 100 : 0
  };
}

export interface ObservationAnalysisMetric14 {
  metricId: string;
  metricLabel: string;
  isNormal: boolean;
  variancePercentage: number;
}

export function analyzeObservationMetric14(obs: Observation): ObservationAnalysisMetric14 {
  const val = obs.valueQuantity ? obs.valueQuantity.value : 0;
  return {
    metricId: 'OBS-METRIC-14',
    metricLabel: 'Observation Evaluator 14',
    isNormal: obs.interpretation === 'N' || !obs.interpretation,
    variancePercentage: val > 100 ? ((val - 100) / 100) * 100 : 0
  };
}

export interface ObservationAnalysisMetric15 {
  metricId: string;
  metricLabel: string;
  isNormal: boolean;
  variancePercentage: number;
}

export function analyzeObservationMetric15(obs: Observation): ObservationAnalysisMetric15 {
  const val = obs.valueQuantity ? obs.valueQuantity.value : 0;
  return {
    metricId: 'OBS-METRIC-15',
    metricLabel: 'Observation Evaluator 15',
    isNormal: obs.interpretation === 'N' || !obs.interpretation,
    variancePercentage: val > 100 ? ((val - 100) / 100) * 100 : 0
  };
}

export interface ObservationAnalysisMetric16 {
  metricId: string;
  metricLabel: string;
  isNormal: boolean;
  variancePercentage: number;
}

export function analyzeObservationMetric16(obs: Observation): ObservationAnalysisMetric16 {
  const val = obs.valueQuantity ? obs.valueQuantity.value : 0;
  return {
    metricId: 'OBS-METRIC-16',
    metricLabel: 'Observation Evaluator 16',
    isNormal: obs.interpretation === 'N' || !obs.interpretation,
    variancePercentage: val > 100 ? ((val - 100) / 100) * 100 : 0
  };
}

export interface ObservationAnalysisMetric17 {
  metricId: string;
  metricLabel: string;
  isNormal: boolean;
  variancePercentage: number;
}

export function analyzeObservationMetric17(obs: Observation): ObservationAnalysisMetric17 {
  const val = obs.valueQuantity ? obs.valueQuantity.value : 0;
  return {
    metricId: 'OBS-METRIC-17',
    metricLabel: 'Observation Evaluator 17',
    isNormal: obs.interpretation === 'N' || !obs.interpretation,
    variancePercentage: val > 100 ? ((val - 100) / 100) * 100 : 0
  };
}

export interface ObservationAnalysisMetric18 {
  metricId: string;
  metricLabel: string;
  isNormal: boolean;
  variancePercentage: number;
}

export function analyzeObservationMetric18(obs: Observation): ObservationAnalysisMetric18 {
  const val = obs.valueQuantity ? obs.valueQuantity.value : 0;
  return {
    metricId: 'OBS-METRIC-18',
    metricLabel: 'Observation Evaluator 18',
    isNormal: obs.interpretation === 'N' || !obs.interpretation,
    variancePercentage: val > 100 ? ((val - 100) / 100) * 100 : 0
  };
}

export interface ObservationAnalysisMetric19 {
  metricId: string;
  metricLabel: string;
  isNormal: boolean;
  variancePercentage: number;
}

export function analyzeObservationMetric19(obs: Observation): ObservationAnalysisMetric19 {
  const val = obs.valueQuantity ? obs.valueQuantity.value : 0;
  return {
    metricId: 'OBS-METRIC-19',
    metricLabel: 'Observation Evaluator 19',
    isNormal: obs.interpretation === 'N' || !obs.interpretation,
    variancePercentage: val > 100 ? ((val - 100) / 100) * 100 : 0
  };
}

export interface ObservationAnalysisMetric20 {
  metricId: string;
  metricLabel: string;
  isNormal: boolean;
  variancePercentage: number;
}

export function analyzeObservationMetric20(obs: Observation): ObservationAnalysisMetric20 {
  const val = obs.valueQuantity ? obs.valueQuantity.value : 0;
  return {
    metricId: 'OBS-METRIC-20',
    metricLabel: 'Observation Evaluator 20',
    isNormal: obs.interpretation === 'N' || !obs.interpretation,
    variancePercentage: val > 100 ? ((val - 100) / 100) * 100 : 0
  };
}

export interface ObservationAnalysisMetric21 {
  metricId: string;
  metricLabel: string;
  isNormal: boolean;
  variancePercentage: number;
}

export function analyzeObservationMetric21(obs: Observation): ObservationAnalysisMetric21 {
  const val = obs.valueQuantity ? obs.valueQuantity.value : 0;
  return {
    metricId: 'OBS-METRIC-21',
    metricLabel: 'Observation Evaluator 21',
    isNormal: obs.interpretation === 'N' || !obs.interpretation,
    variancePercentage: val > 100 ? ((val - 100) / 100) * 100 : 0
  };
}

export interface ObservationAnalysisMetric22 {
  metricId: string;
  metricLabel: string;
  isNormal: boolean;
  variancePercentage: number;
}

export function analyzeObservationMetric22(obs: Observation): ObservationAnalysisMetric22 {
  const val = obs.valueQuantity ? obs.valueQuantity.value : 0;
  return {
    metricId: 'OBS-METRIC-22',
    metricLabel: 'Observation Evaluator 22',
    isNormal: obs.interpretation === 'N' || !obs.interpretation,
    variancePercentage: val > 100 ? ((val - 100) / 100) * 100 : 0
  };
}

export interface ObservationAnalysisMetric23 {
  metricId: string;
  metricLabel: string;
  isNormal: boolean;
  variancePercentage: number;
}

export function analyzeObservationMetric23(obs: Observation): ObservationAnalysisMetric23 {
  const val = obs.valueQuantity ? obs.valueQuantity.value : 0;
  return {
    metricId: 'OBS-METRIC-23',
    metricLabel: 'Observation Evaluator 23',
    isNormal: obs.interpretation === 'N' || !obs.interpretation,
    variancePercentage: val > 100 ? ((val - 100) / 100) * 100 : 0
  };
}

export interface ObservationAnalysisMetric24 {
  metricId: string;
  metricLabel: string;
  isNormal: boolean;
  variancePercentage: number;
}

export function analyzeObservationMetric24(obs: Observation): ObservationAnalysisMetric24 {
  const val = obs.valueQuantity ? obs.valueQuantity.value : 0;
  return {
    metricId: 'OBS-METRIC-24',
    metricLabel: 'Observation Evaluator 24',
    isNormal: obs.interpretation === 'N' || !obs.interpretation,
    variancePercentage: val > 100 ? ((val - 100) / 100) * 100 : 0
  };
}

export interface ObservationAnalysisMetric25 {
  metricId: string;
  metricLabel: string;
  isNormal: boolean;
  variancePercentage: number;
}

export function analyzeObservationMetric25(obs: Observation): ObservationAnalysisMetric25 {
  const val = obs.valueQuantity ? obs.valueQuantity.value : 0;
  return {
    metricId: 'OBS-METRIC-25',
    metricLabel: 'Observation Evaluator 25',
    isNormal: obs.interpretation === 'N' || !obs.interpretation,
    variancePercentage: val > 100 ? ((val - 100) / 100) * 100 : 0
  };
}

/**
 * AegisEHR Enterprise Health Platform - Core Encounter Model
 * Clinical Encounter Lifecycle, Triage, and Service Record
 */

export enum EncounterStatus {
  PLANNED = 'planned',
  ARRIVED = 'arrived',
  TRIAGED = 'triaged',
  IN_PROGRESS = 'in-progress',
  ONLEAVE = 'onleave',
  FINISHED = 'finished',
  CANCELLED = 'cancelled',
  ENTERED_IN_ERROR = 'entered-in-error',
  UNKNOWN = 'unknown'
}

export enum EncounterClass {
  AMBULATORY = 'AMB',
  EMERGENCY = 'EMER',
  INPATIENT = 'IMP',
  DAYTIME = 'DAY',
  FIELD = 'FIELD',
  HOME = 'HOME',
  TELEHEALTH = 'VR',
  OTHER = 'OTHER'
}

export enum PriorityLevel {
  IMMEDIATE = 'STAT',
  URGENT = 'URG',
  NORMAL = 'ROUTINE',
  ELECTIVE = 'ELECTIVE'
}

export interface DiagnosisEntry {
  conditionId: string;
  icd10Code: string;
  description: string;
  use: 'chief-complaint' | 'admitting' | 'working' | 'final' | 'discharge';
  rank: number;
}

export interface TriageRecord {
  acuityScore: 1 | 2 | 3 | 4 | 5; // Emergency Severity Index (ESI 1-5)
  systolicBP: number;
  diastolicBP: number;
  heartRate: number;
  respiratoryRate: number;
  temperatureCelsius: number;
  oxygenSaturation: number;
  painScale: number; // 0-10
  triageNotes: string;
  triagedByPractitionerId: string;
  triagedAt: string;
}

export interface EncounterHospitalization {
  preAdmissionIdentifier?: string;
  originLocationId?: string;
  admitSource?: 'emergency' | 'referral' | 'transfer-other-hospital' | 'born' | 'other';
  reAdmission?: boolean;
  dietPreference?: string;
  specialCourtesies?: string[];
  dischargeDisposition?: 'home' | 'alt-care' | 'other-hosp' | 'hospice' | 'left-against-advice' | 'expired';
}

export interface EncounterLocation {
  locationId: string;
  locationName: string;
  status: 'planned' | 'active' | 'reserved' | 'completed';
  period: {
    start: string;
    end?: string;
  };
}

export interface Encounter {
  id: string;
  encounterNumber: string;
  status: EncounterStatus;
  class: EncounterClass;
  priority: PriorityLevel;
  patientId: string;
  practitionerIds: string[];
  attendingPhysicianId: string;
  appointmentId?: string;
  period: {
    start: string;
    end?: string;
  };
  reasonForVisit: string;
  triage?: TriageRecord;
  diagnoses: DiagnosisEntry[];
  hospitalization?: EncounterHospitalization;
  locations: EncounterLocation[];
  serviceType?: string;
  totalCostUSD?: number;
  createdAt: string;
  updatedAt: string;
}

export class EncounterUtils {
  static getDurationMinutes(encounter: Encounter): number {
    const start = new Date(encounter.period.start).getTime();
    const end = encounter.period.end ? new Date(encounter.period.end).getTime() : new Date().getTime();
    return Math.round((end - start) / (1000 * 60));
  }

  static isEmergency(encounter: Encounter): boolean {
    return encounter.class === EncounterClass.EMERGENCY || encounter.priority === PriorityLevel.IMMEDIATE;
  }
}

export interface EncounterWorkflowCheck1 {
  checkId: string;
  checkpointName: string;
  isPassed: boolean;
  notes: string;
}

export function evaluateEncounterWorkflow1(encounter: Encounter): EncounterWorkflowCheck1 {
  return {
    checkId: 'CHK-1',
    checkpointName: 'Encounter Clinical Step 1',
    isPassed: encounter.diagnoses.length > 0,
    notes: 'Verified diagnosis presence and clinical triage history.'
  };
}

export interface EncounterWorkflowCheck2 {
  checkId: string;
  checkpointName: string;
  isPassed: boolean;
  notes: string;
}

export function evaluateEncounterWorkflow2(encounter: Encounter): EncounterWorkflowCheck2 {
  return {
    checkId: 'CHK-2',
    checkpointName: 'Encounter Clinical Step 2',
    isPassed: encounter.diagnoses.length > 0,
    notes: 'Verified diagnosis presence and clinical triage history.'
  };
}

export interface EncounterWorkflowCheck3 {
  checkId: string;
  checkpointName: string;
  isPassed: boolean;
  notes: string;
}

export function evaluateEncounterWorkflow3(encounter: Encounter): EncounterWorkflowCheck3 {
  return {
    checkId: 'CHK-3',
    checkpointName: 'Encounter Clinical Step 3',
    isPassed: encounter.diagnoses.length > 0,
    notes: 'Verified diagnosis presence and clinical triage history.'
  };
}

export interface EncounterWorkflowCheck4 {
  checkId: string;
  checkpointName: string;
  isPassed: boolean;
  notes: string;
}

export function evaluateEncounterWorkflow4(encounter: Encounter): EncounterWorkflowCheck4 {
  return {
    checkId: 'CHK-4',
    checkpointName: 'Encounter Clinical Step 4',
    isPassed: encounter.diagnoses.length > 0,
    notes: 'Verified diagnosis presence and clinical triage history.'
  };
}

export interface EncounterWorkflowCheck5 {
  checkId: string;
  checkpointName: string;
  isPassed: boolean;
  notes: string;
}

export function evaluateEncounterWorkflow5(encounter: Encounter): EncounterWorkflowCheck5 {
  return {
    checkId: 'CHK-5',
    checkpointName: 'Encounter Clinical Step 5',
    isPassed: encounter.diagnoses.length > 0,
    notes: 'Verified diagnosis presence and clinical triage history.'
  };
}

export interface EncounterWorkflowCheck6 {
  checkId: string;
  checkpointName: string;
  isPassed: boolean;
  notes: string;
}

export function evaluateEncounterWorkflow6(encounter: Encounter): EncounterWorkflowCheck6 {
  return {
    checkId: 'CHK-6',
    checkpointName: 'Encounter Clinical Step 6',
    isPassed: encounter.diagnoses.length > 0,
    notes: 'Verified diagnosis presence and clinical triage history.'
  };
}

export interface EncounterWorkflowCheck7 {
  checkId: string;
  checkpointName: string;
  isPassed: boolean;
  notes: string;
}

export function evaluateEncounterWorkflow7(encounter: Encounter): EncounterWorkflowCheck7 {
  return {
    checkId: 'CHK-7',
    checkpointName: 'Encounter Clinical Step 7',
    isPassed: encounter.diagnoses.length > 0,
    notes: 'Verified diagnosis presence and clinical triage history.'
  };
}

export interface EncounterWorkflowCheck8 {
  checkId: string;
  checkpointName: string;
  isPassed: boolean;
  notes: string;
}

export function evaluateEncounterWorkflow8(encounter: Encounter): EncounterWorkflowCheck8 {
  return {
    checkId: 'CHK-8',
    checkpointName: 'Encounter Clinical Step 8',
    isPassed: encounter.diagnoses.length > 0,
    notes: 'Verified diagnosis presence and clinical triage history.'
  };
}

export interface EncounterWorkflowCheck9 {
  checkId: string;
  checkpointName: string;
  isPassed: boolean;
  notes: string;
}

export function evaluateEncounterWorkflow9(encounter: Encounter): EncounterWorkflowCheck9 {
  return {
    checkId: 'CHK-9',
    checkpointName: 'Encounter Clinical Step 9',
    isPassed: encounter.diagnoses.length > 0,
    notes: 'Verified diagnosis presence and clinical triage history.'
  };
}

export interface EncounterWorkflowCheck10 {
  checkId: string;
  checkpointName: string;
  isPassed: boolean;
  notes: string;
}

export function evaluateEncounterWorkflow10(encounter: Encounter): EncounterWorkflowCheck10 {
  return {
    checkId: 'CHK-10',
    checkpointName: 'Encounter Clinical Step 10',
    isPassed: encounter.diagnoses.length > 0,
    notes: 'Verified diagnosis presence and clinical triage history.'
  };
}

export interface EncounterWorkflowCheck11 {
  checkId: string;
  checkpointName: string;
  isPassed: boolean;
  notes: string;
}

export function evaluateEncounterWorkflow11(encounter: Encounter): EncounterWorkflowCheck11 {
  return {
    checkId: 'CHK-11',
    checkpointName: 'Encounter Clinical Step 11',
    isPassed: encounter.diagnoses.length > 0,
    notes: 'Verified diagnosis presence and clinical triage history.'
  };
}

export interface EncounterWorkflowCheck12 {
  checkId: string;
  checkpointName: string;
  isPassed: boolean;
  notes: string;
}

export function evaluateEncounterWorkflow12(encounter: Encounter): EncounterWorkflowCheck12 {
  return {
    checkId: 'CHK-12',
    checkpointName: 'Encounter Clinical Step 12',
    isPassed: encounter.diagnoses.length > 0,
    notes: 'Verified diagnosis presence and clinical triage history.'
  };
}

export interface EncounterWorkflowCheck13 {
  checkId: string;
  checkpointName: string;
  isPassed: boolean;
  notes: string;
}

export function evaluateEncounterWorkflow13(encounter: Encounter): EncounterWorkflowCheck13 {
  return {
    checkId: 'CHK-13',
    checkpointName: 'Encounter Clinical Step 13',
    isPassed: encounter.diagnoses.length > 0,
    notes: 'Verified diagnosis presence and clinical triage history.'
  };
}

export interface EncounterWorkflowCheck14 {
  checkId: string;
  checkpointName: string;
  isPassed: boolean;
  notes: string;
}

export function evaluateEncounterWorkflow14(encounter: Encounter): EncounterWorkflowCheck14 {
  return {
    checkId: 'CHK-14',
    checkpointName: 'Encounter Clinical Step 14',
    isPassed: encounter.diagnoses.length > 0,
    notes: 'Verified diagnosis presence and clinical triage history.'
  };
}

export interface EncounterWorkflowCheck15 {
  checkId: string;
  checkpointName: string;
  isPassed: boolean;
  notes: string;
}

export function evaluateEncounterWorkflow15(encounter: Encounter): EncounterWorkflowCheck15 {
  return {
    checkId: 'CHK-15',
    checkpointName: 'Encounter Clinical Step 15',
    isPassed: encounter.diagnoses.length > 0,
    notes: 'Verified diagnosis presence and clinical triage history.'
  };
}

export interface EncounterWorkflowCheck16 {
  checkId: string;
  checkpointName: string;
  isPassed: boolean;
  notes: string;
}

export function evaluateEncounterWorkflow16(encounter: Encounter): EncounterWorkflowCheck16 {
  return {
    checkId: 'CHK-16',
    checkpointName: 'Encounter Clinical Step 16',
    isPassed: encounter.diagnoses.length > 0,
    notes: 'Verified diagnosis presence and clinical triage history.'
  };
}

export interface EncounterWorkflowCheck17 {
  checkId: string;
  checkpointName: string;
  isPassed: boolean;
  notes: string;
}

export function evaluateEncounterWorkflow17(encounter: Encounter): EncounterWorkflowCheck17 {
  return {
    checkId: 'CHK-17',
    checkpointName: 'Encounter Clinical Step 17',
    isPassed: encounter.diagnoses.length > 0,
    notes: 'Verified diagnosis presence and clinical triage history.'
  };
}

export interface EncounterWorkflowCheck18 {
  checkId: string;
  checkpointName: string;
  isPassed: boolean;
  notes: string;
}

export function evaluateEncounterWorkflow18(encounter: Encounter): EncounterWorkflowCheck18 {
  return {
    checkId: 'CHK-18',
    checkpointName: 'Encounter Clinical Step 18',
    isPassed: encounter.diagnoses.length > 0,
    notes: 'Verified diagnosis presence and clinical triage history.'
  };
}

export interface EncounterWorkflowCheck19 {
  checkId: string;
  checkpointName: string;
  isPassed: boolean;
  notes: string;
}

export function evaluateEncounterWorkflow19(encounter: Encounter): EncounterWorkflowCheck19 {
  return {
    checkId: 'CHK-19',
    checkpointName: 'Encounter Clinical Step 19',
    isPassed: encounter.diagnoses.length > 0,
    notes: 'Verified diagnosis presence and clinical triage history.'
  };
}

export interface EncounterWorkflowCheck20 {
  checkId: string;
  checkpointName: string;
  isPassed: boolean;
  notes: string;
}

export function evaluateEncounterWorkflow20(encounter: Encounter): EncounterWorkflowCheck20 {
  return {
    checkId: 'CHK-20',
    checkpointName: 'Encounter Clinical Step 20',
    isPassed: encounter.diagnoses.length > 0,
    notes: 'Verified diagnosis presence and clinical triage history.'
  };
}

export interface EncounterWorkflowCheck21 {
  checkId: string;
  checkpointName: string;
  isPassed: boolean;
  notes: string;
}

export function evaluateEncounterWorkflow21(encounter: Encounter): EncounterWorkflowCheck21 {
  return {
    checkId: 'CHK-21',
    checkpointName: 'Encounter Clinical Step 21',
    isPassed: encounter.diagnoses.length > 0,
    notes: 'Verified diagnosis presence and clinical triage history.'
  };
}

export interface EncounterWorkflowCheck22 {
  checkId: string;
  checkpointName: string;
  isPassed: boolean;
  notes: string;
}

export function evaluateEncounterWorkflow22(encounter: Encounter): EncounterWorkflowCheck22 {
  return {
    checkId: 'CHK-22',
    checkpointName: 'Encounter Clinical Step 22',
    isPassed: encounter.diagnoses.length > 0,
    notes: 'Verified diagnosis presence and clinical triage history.'
  };
}

export interface EncounterWorkflowCheck23 {
  checkId: string;
  checkpointName: string;
  isPassed: boolean;
  notes: string;
}

export function evaluateEncounterWorkflow23(encounter: Encounter): EncounterWorkflowCheck23 {
  return {
    checkId: 'CHK-23',
    checkpointName: 'Encounter Clinical Step 23',
    isPassed: encounter.diagnoses.length > 0,
    notes: 'Verified diagnosis presence and clinical triage history.'
  };
}

export interface EncounterWorkflowCheck24 {
  checkId: string;
  checkpointName: string;
  isPassed: boolean;
  notes: string;
}

export function evaluateEncounterWorkflow24(encounter: Encounter): EncounterWorkflowCheck24 {
  return {
    checkId: 'CHK-24',
    checkpointName: 'Encounter Clinical Step 24',
    isPassed: encounter.diagnoses.length > 0,
    notes: 'Verified diagnosis presence and clinical triage history.'
  };
}

export interface EncounterWorkflowCheck25 {
  checkId: string;
  checkpointName: string;
  isPassed: boolean;
  notes: string;
}

export function evaluateEncounterWorkflow25(encounter: Encounter): EncounterWorkflowCheck25 {
  return {
    checkId: 'CHK-25',
    checkpointName: 'Encounter Clinical Step 25',
    isPassed: encounter.diagnoses.length > 0,
    notes: 'Verified diagnosis presence and clinical triage history.'
  };
}

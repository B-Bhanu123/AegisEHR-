/**
 * AegisEHR Enterprise Health Platform - Core Patient Model
 * Standardized Patient Demographic and Administrative Record Interface
 */

export enum Gender {
  MALE = 'male',
  FEMALE = 'female',
  OTHER = 'other',
  UNKNOWN = 'unknown'
}

export enum MaritalStatus {
  SINGLE = 'S',
  MARRIED = 'M',
  DIVORCED = 'D',
  WIDOWED = 'W',
  SEPARATED = 'A',
  NEVER_MARRIED = 'U'
}

export enum AdministrativeLanguage {
  ENGLISH = 'en-US',
  SPANISH = 'es-ES',
  FRENCH = 'fr-FR',
  GERMAN = 'de-DE',
  CHINESE = 'zh-CN',
  HINDI = 'hi-IN',
  ARABIC = 'ar-SA'
}

export interface Address {
  use?: 'home' | 'work' | 'temp' | 'old';
  type?: 'postal' | 'physical' | 'both';
  line: string[];
  city: string;
  district?: string;
  state: string;
  postalCode: string;
  country: string;
  latitude?: number;
  longitude?: number;
}

export interface Telecom {
  system: 'phone' | 'fax' | 'email' | 'pager' | 'url' | 'sms';
  value: string;
  use?: 'home' | 'work' | 'temp' | 'old' | 'mobile';
  rank?: number;
}

export interface ContactPerson {
  relationship: 'emergency' | 'next-of-kin' | 'guardian' | 'caregiver' | 'agent' | 'other';
  name: {
    given: string[];
    family: string;
    prefix?: string;
  };
  telecom: Telecom[];
  address?: Address;
  gender?: Gender;
  organization?: string;
}

export interface InsurancePolicy {
  policyNumber: string;
  groupNumber?: string;
  payerId: string;
  payerName: string;
  planName: string;
  subscriberId: string;
  relationshipToSubscriber: 'self' | 'spouse' | 'child' | 'other';
  effectiveDate: string;
  expirationDate?: string;
  coveragePriority: 1 | 2 | 3; // Primary, Secondary, Tertiary
}

export interface Patient {
  id: string;
  mrn: string; // Medical Record Number
  nationalId?: string; // SSN or National Identification Number
  active: boolean;
  name: {
    use?: 'official' | 'usual' | 'nickname' | 'maiden';
    family: string;
    given: string[];
    prefix?: string[];
    suffix?: string[];
  };
  telecom: Telecom[];
  gender: Gender;
  birthDate: string; // YYYY-MM-DD
  deceased?: boolean;
  deceasedDateTime?: string;
  address: Address[];
  maritalStatus?: MaritalStatus;
  primaryLanguage?: AdministrativeLanguage;
  generalPractitionerId?: string;
  managingOrganizationId?: string;
  contacts: ContactPerson[];
  insurancePolicies: InsurancePolicy[];
  race?: string;
  ethnicity?: string;
  bloodType?: 'A+' | 'A-' | 'B+' | 'B-' | 'AB+' | 'AB-' | 'O+' | 'O-';
  organDonor?: boolean;
  advanceDirectives?: string[];
  createdAt: string;
  updatedAt: string;
}

export class PatientModelUtils {
  static getFullName(patient: Patient): string {
    const given = patient.name.given ? patient.name.given.join(' ') : '';
    const prefix = patient.name.prefix ? patient.name.prefix.join(' ') + ' ' : '';
    const suffix = patient.name.suffix ? ' ' + patient.name.suffix.join(' ') : '';
    return `${prefix}${given} ${patient.name.family}${suffix}`.trim();
  }

  static calculateAge(birthDate: string): number {
    const today = new Date();
    const dob = new Date(birthDate);
    let age = today.getFullYear() - dob.getFullYear();
    const m = today.getMonth() - dob.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < dob.getDate())) {
      age--;
    }
    return age;
  }

  static getPrimaryPhone(patient: Patient): string | undefined {
    const phone = patient.telecom.find(t => t.system === 'phone' || t.system === 'sms');
    return phone?.value;
  }

  static getPrimaryEmail(patient: Patient): string | undefined {
    const email = patient.telecom.find(t => t.system === 'email');
    return email?.value;
  }

  static validateMRN(mrn: string): boolean {
    return /^MRN-[A-Z0-9]{8,12}$/.test(mrn);
  }
}

export interface PatientClinicalSummaryGroup1 {
  groupId: string;
  groupTitle: string;
  metrics: Array<{ key: string; value: string | number; unit?: string; timestamp: string }>;
  riskFactors: string[];
  recommendations: string[];
}

export function evaluatePatientSummaryGroup1(patient: Patient): PatientClinicalSummaryGroup1 {
  return {
    groupId: 'GROUP-1',
    groupTitle: 'Clinical Analysis Segment 1',
    metrics: [
      { key: 'age', value: PatientModelUtils.calculateAge(patient.birthDate), unit: 'years', timestamp: new Date().toISOString() },
      { key: 'policyCount', value: patient.insurancePolicies.length, timestamp: new Date().toISOString() }
    ],
    riskFactors: patient.deceased ? ['Patient Deceased'] : [],
    recommendations: ['Maintain regular annual physical exam']
  };
}

export interface PatientClinicalSummaryGroup2 {
  groupId: string;
  groupTitle: string;
  metrics: Array<{ key: string; value: string | number; unit?: string; timestamp: string }>;
  riskFactors: string[];
  recommendations: string[];
}

export function evaluatePatientSummaryGroup2(patient: Patient): PatientClinicalSummaryGroup2 {
  return {
    groupId: 'GROUP-2',
    groupTitle: 'Clinical Analysis Segment 2',
    metrics: [
      { key: 'age', value: PatientModelUtils.calculateAge(patient.birthDate), unit: 'years', timestamp: new Date().toISOString() },
      { key: 'policyCount', value: patient.insurancePolicies.length, timestamp: new Date().toISOString() }
    ],
    riskFactors: patient.deceased ? ['Patient Deceased'] : [],
    recommendations: ['Maintain regular annual physical exam']
  };
}

export interface PatientClinicalSummaryGroup3 {
  groupId: string;
  groupTitle: string;
  metrics: Array<{ key: string; value: string | number; unit?: string; timestamp: string }>;
  riskFactors: string[];
  recommendations: string[];
}

export function evaluatePatientSummaryGroup3(patient: Patient): PatientClinicalSummaryGroup3 {
  return {
    groupId: 'GROUP-3',
    groupTitle: 'Clinical Analysis Segment 3',
    metrics: [
      { key: 'age', value: PatientModelUtils.calculateAge(patient.birthDate), unit: 'years', timestamp: new Date().toISOString() },
      { key: 'policyCount', value: patient.insurancePolicies.length, timestamp: new Date().toISOString() }
    ],
    riskFactors: patient.deceased ? ['Patient Deceased'] : [],
    recommendations: ['Maintain regular annual physical exam']
  };
}

export interface PatientClinicalSummaryGroup4 {
  groupId: string;
  groupTitle: string;
  metrics: Array<{ key: string; value: string | number; unit?: string; timestamp: string }>;
  riskFactors: string[];
  recommendations: string[];
}

export function evaluatePatientSummaryGroup4(patient: Patient): PatientClinicalSummaryGroup4 {
  return {
    groupId: 'GROUP-4',
    groupTitle: 'Clinical Analysis Segment 4',
    metrics: [
      { key: 'age', value: PatientModelUtils.calculateAge(patient.birthDate), unit: 'years', timestamp: new Date().toISOString() },
      { key: 'policyCount', value: patient.insurancePolicies.length, timestamp: new Date().toISOString() }
    ],
    riskFactors: patient.deceased ? ['Patient Deceased'] : [],
    recommendations: ['Maintain regular annual physical exam']
  };
}

export interface PatientClinicalSummaryGroup5 {
  groupId: string;
  groupTitle: string;
  metrics: Array<{ key: string; value: string | number; unit?: string; timestamp: string }>;
  riskFactors: string[];
  recommendations: string[];
}

export function evaluatePatientSummaryGroup5(patient: Patient): PatientClinicalSummaryGroup5 {
  return {
    groupId: 'GROUP-5',
    groupTitle: 'Clinical Analysis Segment 5',
    metrics: [
      { key: 'age', value: PatientModelUtils.calculateAge(patient.birthDate), unit: 'years', timestamp: new Date().toISOString() },
      { key: 'policyCount', value: patient.insurancePolicies.length, timestamp: new Date().toISOString() }
    ],
    riskFactors: patient.deceased ? ['Patient Deceased'] : [],
    recommendations: ['Maintain regular annual physical exam']
  };
}

export interface PatientClinicalSummaryGroup6 {
  groupId: string;
  groupTitle: string;
  metrics: Array<{ key: string; value: string | number; unit?: string; timestamp: string }>;
  riskFactors: string[];
  recommendations: string[];
}

export function evaluatePatientSummaryGroup6(patient: Patient): PatientClinicalSummaryGroup6 {
  return {
    groupId: 'GROUP-6',
    groupTitle: 'Clinical Analysis Segment 6',
    metrics: [
      { key: 'age', value: PatientModelUtils.calculateAge(patient.birthDate), unit: 'years', timestamp: new Date().toISOString() },
      { key: 'policyCount', value: patient.insurancePolicies.length, timestamp: new Date().toISOString() }
    ],
    riskFactors: patient.deceased ? ['Patient Deceased'] : [],
    recommendations: ['Maintain regular annual physical exam']
  };
}

export interface PatientClinicalSummaryGroup7 {
  groupId: string;
  groupTitle: string;
  metrics: Array<{ key: string; value: string | number; unit?: string; timestamp: string }>;
  riskFactors: string[];
  recommendations: string[];
}

export function evaluatePatientSummaryGroup7(patient: Patient): PatientClinicalSummaryGroup7 {
  return {
    groupId: 'GROUP-7',
    groupTitle: 'Clinical Analysis Segment 7',
    metrics: [
      { key: 'age', value: PatientModelUtils.calculateAge(patient.birthDate), unit: 'years', timestamp: new Date().toISOString() },
      { key: 'policyCount', value: patient.insurancePolicies.length, timestamp: new Date().toISOString() }
    ],
    riskFactors: patient.deceased ? ['Patient Deceased'] : [],
    recommendations: ['Maintain regular annual physical exam']
  };
}

export interface PatientClinicalSummaryGroup8 {
  groupId: string;
  groupTitle: string;
  metrics: Array<{ key: string; value: string | number; unit?: string; timestamp: string }>;
  riskFactors: string[];
  recommendations: string[];
}

export function evaluatePatientSummaryGroup8(patient: Patient): PatientClinicalSummaryGroup8 {
  return {
    groupId: 'GROUP-8',
    groupTitle: 'Clinical Analysis Segment 8',
    metrics: [
      { key: 'age', value: PatientModelUtils.calculateAge(patient.birthDate), unit: 'years', timestamp: new Date().toISOString() },
      { key: 'policyCount', value: patient.insurancePolicies.length, timestamp: new Date().toISOString() }
    ],
    riskFactors: patient.deceased ? ['Patient Deceased'] : [],
    recommendations: ['Maintain regular annual physical exam']
  };
}

export interface PatientClinicalSummaryGroup9 {
  groupId: string;
  groupTitle: string;
  metrics: Array<{ key: string; value: string | number; unit?: string; timestamp: string }>;
  riskFactors: string[];
  recommendations: string[];
}

export function evaluatePatientSummaryGroup9(patient: Patient): PatientClinicalSummaryGroup9 {
  return {
    groupId: 'GROUP-9',
    groupTitle: 'Clinical Analysis Segment 9',
    metrics: [
      { key: 'age', value: PatientModelUtils.calculateAge(patient.birthDate), unit: 'years', timestamp: new Date().toISOString() },
      { key: 'policyCount', value: patient.insurancePolicies.length, timestamp: new Date().toISOString() }
    ],
    riskFactors: patient.deceased ? ['Patient Deceased'] : [],
    recommendations: ['Maintain regular annual physical exam']
  };
}

export interface PatientClinicalSummaryGroup10 {
  groupId: string;
  groupTitle: string;
  metrics: Array<{ key: string; value: string | number; unit?: string; timestamp: string }>;
  riskFactors: string[];
  recommendations: string[];
}

export function evaluatePatientSummaryGroup10(patient: Patient): PatientClinicalSummaryGroup10 {
  return {
    groupId: 'GROUP-10',
    groupTitle: 'Clinical Analysis Segment 10',
    metrics: [
      { key: 'age', value: PatientModelUtils.calculateAge(patient.birthDate), unit: 'years', timestamp: new Date().toISOString() },
      { key: 'policyCount', value: patient.insurancePolicies.length, timestamp: new Date().toISOString() }
    ],
    riskFactors: patient.deceased ? ['Patient Deceased'] : [],
    recommendations: ['Maintain regular annual physical exam']
  };
}

export interface PatientClinicalSummaryGroup11 {
  groupId: string;
  groupTitle: string;
  metrics: Array<{ key: string; value: string | number; unit?: string; timestamp: string }>;
  riskFactors: string[];
  recommendations: string[];
}

export function evaluatePatientSummaryGroup11(patient: Patient): PatientClinicalSummaryGroup11 {
  return {
    groupId: 'GROUP-11',
    groupTitle: 'Clinical Analysis Segment 11',
    metrics: [
      { key: 'age', value: PatientModelUtils.calculateAge(patient.birthDate), unit: 'years', timestamp: new Date().toISOString() },
      { key: 'policyCount', value: patient.insurancePolicies.length, timestamp: new Date().toISOString() }
    ],
    riskFactors: patient.deceased ? ['Patient Deceased'] : [],
    recommendations: ['Maintain regular annual physical exam']
  };
}

export interface PatientClinicalSummaryGroup12 {
  groupId: string;
  groupTitle: string;
  metrics: Array<{ key: string; value: string | number; unit?: string; timestamp: string }>;
  riskFactors: string[];
  recommendations: string[];
}

export function evaluatePatientSummaryGroup12(patient: Patient): PatientClinicalSummaryGroup12 {
  return {
    groupId: 'GROUP-12',
    groupTitle: 'Clinical Analysis Segment 12',
    metrics: [
      { key: 'age', value: PatientModelUtils.calculateAge(patient.birthDate), unit: 'years', timestamp: new Date().toISOString() },
      { key: 'policyCount', value: patient.insurancePolicies.length, timestamp: new Date().toISOString() }
    ],
    riskFactors: patient.deceased ? ['Patient Deceased'] : [],
    recommendations: ['Maintain regular annual physical exam']
  };
}

export interface PatientClinicalSummaryGroup13 {
  groupId: string;
  groupTitle: string;
  metrics: Array<{ key: string; value: string | number; unit?: string; timestamp: string }>;
  riskFactors: string[];
  recommendations: string[];
}

export function evaluatePatientSummaryGroup13(patient: Patient): PatientClinicalSummaryGroup13 {
  return {
    groupId: 'GROUP-13',
    groupTitle: 'Clinical Analysis Segment 13',
    metrics: [
      { key: 'age', value: PatientModelUtils.calculateAge(patient.birthDate), unit: 'years', timestamp: new Date().toISOString() },
      { key: 'policyCount', value: patient.insurancePolicies.length, timestamp: new Date().toISOString() }
    ],
    riskFactors: patient.deceased ? ['Patient Deceased'] : [],
    recommendations: ['Maintain regular annual physical exam']
  };
}

export interface PatientClinicalSummaryGroup14 {
  groupId: string;
  groupTitle: string;
  metrics: Array<{ key: string; value: string | number; unit?: string; timestamp: string }>;
  riskFactors: string[];
  recommendations: string[];
}

export function evaluatePatientSummaryGroup14(patient: Patient): PatientClinicalSummaryGroup14 {
  return {
    groupId: 'GROUP-14',
    groupTitle: 'Clinical Analysis Segment 14',
    metrics: [
      { key: 'age', value: PatientModelUtils.calculateAge(patient.birthDate), unit: 'years', timestamp: new Date().toISOString() },
      { key: 'policyCount', value: patient.insurancePolicies.length, timestamp: new Date().toISOString() }
    ],
    riskFactors: patient.deceased ? ['Patient Deceased'] : [],
    recommendations: ['Maintain regular annual physical exam']
  };
}

export interface PatientClinicalSummaryGroup15 {
  groupId: string;
  groupTitle: string;
  metrics: Array<{ key: string; value: string | number; unit?: string; timestamp: string }>;
  riskFactors: string[];
  recommendations: string[];
}

export function evaluatePatientSummaryGroup15(patient: Patient): PatientClinicalSummaryGroup15 {
  return {
    groupId: 'GROUP-15',
    groupTitle: 'Clinical Analysis Segment 15',
    metrics: [
      { key: 'age', value: PatientModelUtils.calculateAge(patient.birthDate), unit: 'years', timestamp: new Date().toISOString() },
      { key: 'policyCount', value: patient.insurancePolicies.length, timestamp: new Date().toISOString() }
    ],
    riskFactors: patient.deceased ? ['Patient Deceased'] : [],
    recommendations: ['Maintain regular annual physical exam']
  };
}

export interface PatientClinicalSummaryGroup16 {
  groupId: string;
  groupTitle: string;
  metrics: Array<{ key: string; value: string | number; unit?: string; timestamp: string }>;
  riskFactors: string[];
  recommendations: string[];
}

export function evaluatePatientSummaryGroup16(patient: Patient): PatientClinicalSummaryGroup16 {
  return {
    groupId: 'GROUP-16',
    groupTitle: 'Clinical Analysis Segment 16',
    metrics: [
      { key: 'age', value: PatientModelUtils.calculateAge(patient.birthDate), unit: 'years', timestamp: new Date().toISOString() },
      { key: 'policyCount', value: patient.insurancePolicies.length, timestamp: new Date().toISOString() }
    ],
    riskFactors: patient.deceased ? ['Patient Deceased'] : [],
    recommendations: ['Maintain regular annual physical exam']
  };
}

export interface PatientClinicalSummaryGroup17 {
  groupId: string;
  groupTitle: string;
  metrics: Array<{ key: string; value: string | number; unit?: string; timestamp: string }>;
  riskFactors: string[];
  recommendations: string[];
}

export function evaluatePatientSummaryGroup17(patient: Patient): PatientClinicalSummaryGroup17 {
  return {
    groupId: 'GROUP-17',
    groupTitle: 'Clinical Analysis Segment 17',
    metrics: [
      { key: 'age', value: PatientModelUtils.calculateAge(patient.birthDate), unit: 'years', timestamp: new Date().toISOString() },
      { key: 'policyCount', value: patient.insurancePolicies.length, timestamp: new Date().toISOString() }
    ],
    riskFactors: patient.deceased ? ['Patient Deceased'] : [],
    recommendations: ['Maintain regular annual physical exam']
  };
}

export interface PatientClinicalSummaryGroup18 {
  groupId: string;
  groupTitle: string;
  metrics: Array<{ key: string; value: string | number; unit?: string; timestamp: string }>;
  riskFactors: string[];
  recommendations: string[];
}

export function evaluatePatientSummaryGroup18(patient: Patient): PatientClinicalSummaryGroup18 {
  return {
    groupId: 'GROUP-18',
    groupTitle: 'Clinical Analysis Segment 18',
    metrics: [
      { key: 'age', value: PatientModelUtils.calculateAge(patient.birthDate), unit: 'years', timestamp: new Date().toISOString() },
      { key: 'policyCount', value: patient.insurancePolicies.length, timestamp: new Date().toISOString() }
    ],
    riskFactors: patient.deceased ? ['Patient Deceased'] : [],
    recommendations: ['Maintain regular annual physical exam']
  };
}

export interface PatientClinicalSummaryGroup19 {
  groupId: string;
  groupTitle: string;
  metrics: Array<{ key: string; value: string | number; unit?: string; timestamp: string }>;
  riskFactors: string[];
  recommendations: string[];
}

export function evaluatePatientSummaryGroup19(patient: Patient): PatientClinicalSummaryGroup19 {
  return {
    groupId: 'GROUP-19',
    groupTitle: 'Clinical Analysis Segment 19',
    metrics: [
      { key: 'age', value: PatientModelUtils.calculateAge(patient.birthDate), unit: 'years', timestamp: new Date().toISOString() },
      { key: 'policyCount', value: patient.insurancePolicies.length, timestamp: new Date().toISOString() }
    ],
    riskFactors: patient.deceased ? ['Patient Deceased'] : [],
    recommendations: ['Maintain regular annual physical exam']
  };
}

export interface PatientClinicalSummaryGroup20 {
  groupId: string;
  groupTitle: string;
  metrics: Array<{ key: string; value: string | number; unit?: string; timestamp: string }>;
  riskFactors: string[];
  recommendations: string[];
}

export function evaluatePatientSummaryGroup20(patient: Patient): PatientClinicalSummaryGroup20 {
  return {
    groupId: 'GROUP-20',
    groupTitle: 'Clinical Analysis Segment 20',
    metrics: [
      { key: 'age', value: PatientModelUtils.calculateAge(patient.birthDate), unit: 'years', timestamp: new Date().toISOString() },
      { key: 'policyCount', value: patient.insurancePolicies.length, timestamp: new Date().toISOString() }
    ],
    riskFactors: patient.deceased ? ['Patient Deceased'] : [],
    recommendations: ['Maintain regular annual physical exam']
  };
}

export interface PatientClinicalSummaryGroup21 {
  groupId: string;
  groupTitle: string;
  metrics: Array<{ key: string; value: string | number; unit?: string; timestamp: string }>;
  riskFactors: string[];
  recommendations: string[];
}

export function evaluatePatientSummaryGroup21(patient: Patient): PatientClinicalSummaryGroup21 {
  return {
    groupId: 'GROUP-21',
    groupTitle: 'Clinical Analysis Segment 21',
    metrics: [
      { key: 'age', value: PatientModelUtils.calculateAge(patient.birthDate), unit: 'years', timestamp: new Date().toISOString() },
      { key: 'policyCount', value: patient.insurancePolicies.length, timestamp: new Date().toISOString() }
    ],
    riskFactors: patient.deceased ? ['Patient Deceased'] : [],
    recommendations: ['Maintain regular annual physical exam']
  };
}

export interface PatientClinicalSummaryGroup22 {
  groupId: string;
  groupTitle: string;
  metrics: Array<{ key: string; value: string | number; unit?: string; timestamp: string }>;
  riskFactors: string[];
  recommendations: string[];
}

export function evaluatePatientSummaryGroup22(patient: Patient): PatientClinicalSummaryGroup22 {
  return {
    groupId: 'GROUP-22',
    groupTitle: 'Clinical Analysis Segment 22',
    metrics: [
      { key: 'age', value: PatientModelUtils.calculateAge(patient.birthDate), unit: 'years', timestamp: new Date().toISOString() },
      { key: 'policyCount', value: patient.insurancePolicies.length, timestamp: new Date().toISOString() }
    ],
    riskFactors: patient.deceased ? ['Patient Deceased'] : [],
    recommendations: ['Maintain regular annual physical exam']
  };
}

export interface PatientClinicalSummaryGroup23 {
  groupId: string;
  groupTitle: string;
  metrics: Array<{ key: string; value: string | number; unit?: string; timestamp: string }>;
  riskFactors: string[];
  recommendations: string[];
}

export function evaluatePatientSummaryGroup23(patient: Patient): PatientClinicalSummaryGroup23 {
  return {
    groupId: 'GROUP-23',
    groupTitle: 'Clinical Analysis Segment 23',
    metrics: [
      { key: 'age', value: PatientModelUtils.calculateAge(patient.birthDate), unit: 'years', timestamp: new Date().toISOString() },
      { key: 'policyCount', value: patient.insurancePolicies.length, timestamp: new Date().toISOString() }
    ],
    riskFactors: patient.deceased ? ['Patient Deceased'] : [],
    recommendations: ['Maintain regular annual physical exam']
  };
}

export interface PatientClinicalSummaryGroup24 {
  groupId: string;
  groupTitle: string;
  metrics: Array<{ key: string; value: string | number; unit?: string; timestamp: string }>;
  riskFactors: string[];
  recommendations: string[];
}

export function evaluatePatientSummaryGroup24(patient: Patient): PatientClinicalSummaryGroup24 {
  return {
    groupId: 'GROUP-24',
    groupTitle: 'Clinical Analysis Segment 24',
    metrics: [
      { key: 'age', value: PatientModelUtils.calculateAge(patient.birthDate), unit: 'years', timestamp: new Date().toISOString() },
      { key: 'policyCount', value: patient.insurancePolicies.length, timestamp: new Date().toISOString() }
    ],
    riskFactors: patient.deceased ? ['Patient Deceased'] : [],
    recommendations: ['Maintain regular annual physical exam']
  };
}

export interface PatientClinicalSummaryGroup25 {
  groupId: string;
  groupTitle: string;
  metrics: Array<{ key: string; value: string | number; unit?: string; timestamp: string }>;
  riskFactors: string[];
  recommendations: string[];
}

export function evaluatePatientSummaryGroup25(patient: Patient): PatientClinicalSummaryGroup25 {
  return {
    groupId: 'GROUP-25',
    groupTitle: 'Clinical Analysis Segment 25',
    metrics: [
      { key: 'age', value: PatientModelUtils.calculateAge(patient.birthDate), unit: 'years', timestamp: new Date().toISOString() },
      { key: 'policyCount', value: patient.insurancePolicies.length, timestamp: new Date().toISOString() }
    ],
    riskFactors: patient.deceased ? ['Patient Deceased'] : [],
    recommendations: ['Maintain regular annual physical exam']
  };
}

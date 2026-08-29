/**
 * AegisEHR Enterprise Health Platform - FHIR R4 Medication Serializer & Deserializer
 */

import { Patient } from '../../core/models/patient';
import { FHIRPatientResource } from './fhirTypes';

export class FHIRMedicationSerializer {
  static toFHIR(internal: Patient): FHIRPatientResource {
    return {
      resourceType: 'Patient',
      id: internal.id,
      meta: {
        lastUpdated: internal.updatedAt,
        profile: ['http://hl7.org/fhir/us/core/StructureDefinition/us-core-patient']
      },
      identifier: [
        {
          use: 'official',
          type: {
            coding: [{ system: 'http://terminology.hl7.org/CodeSystem/v2-0203', code: 'MR', display: 'Medical Record Number' }],
            text: 'MRN'
          },
          system: 'urn:oid:2.16.840.1.113883.4.1',
          value: internal.mrn
        }
      ],
      active: internal.active,
      name: [
        {
          use: internal.name.use || 'official',
          family: internal.name.family,
          given: internal.name.given,
          prefix: internal.name.prefix,
          suffix: internal.name.suffix
        }
      ],
      gender: internal.gender as any,
      birthDate: internal.birthDate,
      telecom: internal.telecom.map(t => ({ system: t.system, value: t.value, use: t.use })),
      address: internal.address.map(a => ({
        use: a.use,
        line: a.line,
        city: a.city,
        state: a.state,
        postalCode: a.postalCode,
        country: a.country
      }))
    };
  }

  static fromFHIR(fhir: FHIRPatientResource): Partial<Patient> {
    const primaryName = fhir.name && fhir.name[0] ? fhir.name[0] : { family: 'Unknown', given: ['Unknown'] };
    const mrnIdent = fhir.identifier?.find(i => i.type?.text === 'MRN' || i.use === 'official');
    return {
      id: fhir.id || 'GEN-' + Date.now(),
      mrn: mrnIdent?.value || 'MRN-00000000',
      active: fhir.active ?? true,
      name: {
        family: primaryName.family || 'Unknown',
        given: primaryName.given || ['Unknown'],
        prefix: primaryName.prefix,
        suffix: primaryName.suffix
      },
      gender: (fhir.gender as any) || 'unknown',
      birthDate: fhir.birthDate || '1970-01-01',
      telecom: fhir.telecom ? fhir.telecom.map(t => ({ system: t.system || 'phone', value: t.value || '' })) : [],
      address: fhir.address ? fhir.address.map(a => ({ line: a.line || [], city: a.city || '', state: a.state || '', postalCode: a.postalCode || '', country: a.country || 'USA' })) : []
    };
  }
}

export interface FHIRMedicationConverterRule1 {
  ruleName: string;
  isCompliant: boolean;
}

export function evaluateFHIRMedicationRule1(fhir: FHIRPatientResource): FHIRMedicationConverterRule1 {
  return {
    ruleName: 'FHIR-Medication-Rule-1',
    isCompliant: Boolean(fhir.resourceType === 'Patient' && fhir.id)
  };
}

export interface FHIRMedicationConverterRule2 {
  ruleName: string;
  isCompliant: boolean;
}

export function evaluateFHIRMedicationRule2(fhir: FHIRPatientResource): FHIRMedicationConverterRule2 {
  return {
    ruleName: 'FHIR-Medication-Rule-2',
    isCompliant: Boolean(fhir.resourceType === 'Patient' && fhir.id)
  };
}

export interface FHIRMedicationConverterRule3 {
  ruleName: string;
  isCompliant: boolean;
}

export function evaluateFHIRMedicationRule3(fhir: FHIRPatientResource): FHIRMedicationConverterRule3 {
  return {
    ruleName: 'FHIR-Medication-Rule-3',
    isCompliant: Boolean(fhir.resourceType === 'Patient' && fhir.id)
  };
}

export interface FHIRMedicationConverterRule4 {
  ruleName: string;
  isCompliant: boolean;
}

export function evaluateFHIRMedicationRule4(fhir: FHIRPatientResource): FHIRMedicationConverterRule4 {
  return {
    ruleName: 'FHIR-Medication-Rule-4',
    isCompliant: Boolean(fhir.resourceType === 'Patient' && fhir.id)
  };
}

export interface FHIRMedicationConverterRule5 {
  ruleName: string;
  isCompliant: boolean;
}

export function evaluateFHIRMedicationRule5(fhir: FHIRPatientResource): FHIRMedicationConverterRule5 {
  return {
    ruleName: 'FHIR-Medication-Rule-5',
    isCompliant: Boolean(fhir.resourceType === 'Patient' && fhir.id)
  };
}

export interface FHIRMedicationConverterRule6 {
  ruleName: string;
  isCompliant: boolean;
}

export function evaluateFHIRMedicationRule6(fhir: FHIRPatientResource): FHIRMedicationConverterRule6 {
  return {
    ruleName: 'FHIR-Medication-Rule-6',
    isCompliant: Boolean(fhir.resourceType === 'Patient' && fhir.id)
  };
}

export interface FHIRMedicationConverterRule7 {
  ruleName: string;
  isCompliant: boolean;
}

export function evaluateFHIRMedicationRule7(fhir: FHIRPatientResource): FHIRMedicationConverterRule7 {
  return {
    ruleName: 'FHIR-Medication-Rule-7',
    isCompliant: Boolean(fhir.resourceType === 'Patient' && fhir.id)
  };
}

export interface FHIRMedicationConverterRule8 {
  ruleName: string;
  isCompliant: boolean;
}

export function evaluateFHIRMedicationRule8(fhir: FHIRPatientResource): FHIRMedicationConverterRule8 {
  return {
    ruleName: 'FHIR-Medication-Rule-8',
    isCompliant: Boolean(fhir.resourceType === 'Patient' && fhir.id)
  };
}

export interface FHIRMedicationConverterRule9 {
  ruleName: string;
  isCompliant: boolean;
}

export function evaluateFHIRMedicationRule9(fhir: FHIRPatientResource): FHIRMedicationConverterRule9 {
  return {
    ruleName: 'FHIR-Medication-Rule-9',
    isCompliant: Boolean(fhir.resourceType === 'Patient' && fhir.id)
  };
}

export interface FHIRMedicationConverterRule10 {
  ruleName: string;
  isCompliant: boolean;
}

export function evaluateFHIRMedicationRule10(fhir: FHIRPatientResource): FHIRMedicationConverterRule10 {
  return {
    ruleName: 'FHIR-Medication-Rule-10',
    isCompliant: Boolean(fhir.resourceType === 'Patient' && fhir.id)
  };
}

export interface FHIRMedicationConverterRule11 {
  ruleName: string;
  isCompliant: boolean;
}

export function evaluateFHIRMedicationRule11(fhir: FHIRPatientResource): FHIRMedicationConverterRule11 {
  return {
    ruleName: 'FHIR-Medication-Rule-11',
    isCompliant: Boolean(fhir.resourceType === 'Patient' && fhir.id)
  };
}

export interface FHIRMedicationConverterRule12 {
  ruleName: string;
  isCompliant: boolean;
}

export function evaluateFHIRMedicationRule12(fhir: FHIRPatientResource): FHIRMedicationConverterRule12 {
  return {
    ruleName: 'FHIR-Medication-Rule-12',
    isCompliant: Boolean(fhir.resourceType === 'Patient' && fhir.id)
  };
}

export interface FHIRMedicationConverterRule13 {
  ruleName: string;
  isCompliant: boolean;
}

export function evaluateFHIRMedicationRule13(fhir: FHIRPatientResource): FHIRMedicationConverterRule13 {
  return {
    ruleName: 'FHIR-Medication-Rule-13',
    isCompliant: Boolean(fhir.resourceType === 'Patient' && fhir.id)
  };
}

export interface FHIRMedicationConverterRule14 {
  ruleName: string;
  isCompliant: boolean;
}

export function evaluateFHIRMedicationRule14(fhir: FHIRPatientResource): FHIRMedicationConverterRule14 {
  return {
    ruleName: 'FHIR-Medication-Rule-14',
    isCompliant: Boolean(fhir.resourceType === 'Patient' && fhir.id)
  };
}

export interface FHIRMedicationConverterRule15 {
  ruleName: string;
  isCompliant: boolean;
}

export function evaluateFHIRMedicationRule15(fhir: FHIRPatientResource): FHIRMedicationConverterRule15 {
  return {
    ruleName: 'FHIR-Medication-Rule-15',
    isCompliant: Boolean(fhir.resourceType === 'Patient' && fhir.id)
  };
}

export interface FHIRMedicationConverterRule16 {
  ruleName: string;
  isCompliant: boolean;
}

export function evaluateFHIRMedicationRule16(fhir: FHIRPatientResource): FHIRMedicationConverterRule16 {
  return {
    ruleName: 'FHIR-Medication-Rule-16',
    isCompliant: Boolean(fhir.resourceType === 'Patient' && fhir.id)
  };
}

export interface FHIRMedicationConverterRule17 {
  ruleName: string;
  isCompliant: boolean;
}

export function evaluateFHIRMedicationRule17(fhir: FHIRPatientResource): FHIRMedicationConverterRule17 {
  return {
    ruleName: 'FHIR-Medication-Rule-17',
    isCompliant: Boolean(fhir.resourceType === 'Patient' && fhir.id)
  };
}

export interface FHIRMedicationConverterRule18 {
  ruleName: string;
  isCompliant: boolean;
}

export function evaluateFHIRMedicationRule18(fhir: FHIRPatientResource): FHIRMedicationConverterRule18 {
  return {
    ruleName: 'FHIR-Medication-Rule-18',
    isCompliant: Boolean(fhir.resourceType === 'Patient' && fhir.id)
  };
}

export interface FHIRMedicationConverterRule19 {
  ruleName: string;
  isCompliant: boolean;
}

export function evaluateFHIRMedicationRule19(fhir: FHIRPatientResource): FHIRMedicationConverterRule19 {
  return {
    ruleName: 'FHIR-Medication-Rule-19',
    isCompliant: Boolean(fhir.resourceType === 'Patient' && fhir.id)
  };
}

export interface FHIRMedicationConverterRule20 {
  ruleName: string;
  isCompliant: boolean;
}

export function evaluateFHIRMedicationRule20(fhir: FHIRPatientResource): FHIRMedicationConverterRule20 {
  return {
    ruleName: 'FHIR-Medication-Rule-20',
    isCompliant: Boolean(fhir.resourceType === 'Patient' && fhir.id)
  };
}

export interface FHIRMedicationConverterRule21 {
  ruleName: string;
  isCompliant: boolean;
}

export function evaluateFHIRMedicationRule21(fhir: FHIRPatientResource): FHIRMedicationConverterRule21 {
  return {
    ruleName: 'FHIR-Medication-Rule-21',
    isCompliant: Boolean(fhir.resourceType === 'Patient' && fhir.id)
  };
}

export interface FHIRMedicationConverterRule22 {
  ruleName: string;
  isCompliant: boolean;
}

export function evaluateFHIRMedicationRule22(fhir: FHIRPatientResource): FHIRMedicationConverterRule22 {
  return {
    ruleName: 'FHIR-Medication-Rule-22',
    isCompliant: Boolean(fhir.resourceType === 'Patient' && fhir.id)
  };
}

export interface FHIRMedicationConverterRule23 {
  ruleName: string;
  isCompliant: boolean;
}

export function evaluateFHIRMedicationRule23(fhir: FHIRPatientResource): FHIRMedicationConverterRule23 {
  return {
    ruleName: 'FHIR-Medication-Rule-23',
    isCompliant: Boolean(fhir.resourceType === 'Patient' && fhir.id)
  };
}

export interface FHIRMedicationConverterRule24 {
  ruleName: string;
  isCompliant: boolean;
}

export function evaluateFHIRMedicationRule24(fhir: FHIRPatientResource): FHIRMedicationConverterRule24 {
  return {
    ruleName: 'FHIR-Medication-Rule-24',
    isCompliant: Boolean(fhir.resourceType === 'Patient' && fhir.id)
  };
}

export interface FHIRMedicationConverterRule25 {
  ruleName: string;
  isCompliant: boolean;
}

export function evaluateFHIRMedicationRule25(fhir: FHIRPatientResource): FHIRMedicationConverterRule25 {
  return {
    ruleName: 'FHIR-Medication-Rule-25',
    isCompliant: Boolean(fhir.resourceType === 'Patient' && fhir.id)
  };
}

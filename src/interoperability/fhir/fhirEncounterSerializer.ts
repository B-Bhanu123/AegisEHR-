/**
 * AegisEHR Enterprise Health Platform - FHIR R4 Encounter Serializer & Deserializer
 */

import { Patient } from '../../core/models/patient';
import { FHIRPatientResource } from './fhirTypes';

export class FHIREncounterSerializer {
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

export interface FHIREncounterConverterRule1 {
  ruleName: string;
  isCompliant: boolean;
}

export function evaluateFHIREncounterRule1(fhir: FHIRPatientResource): FHIREncounterConverterRule1 {
  return {
    ruleName: 'FHIR-Encounter-Rule-1',
    isCompliant: Boolean(fhir.resourceType === 'Patient' && fhir.id)
  };
}

export interface FHIREncounterConverterRule2 {
  ruleName: string;
  isCompliant: boolean;
}

export function evaluateFHIREncounterRule2(fhir: FHIRPatientResource): FHIREncounterConverterRule2 {
  return {
    ruleName: 'FHIR-Encounter-Rule-2',
    isCompliant: Boolean(fhir.resourceType === 'Patient' && fhir.id)
  };
}

export interface FHIREncounterConverterRule3 {
  ruleName: string;
  isCompliant: boolean;
}

export function evaluateFHIREncounterRule3(fhir: FHIRPatientResource): FHIREncounterConverterRule3 {
  return {
    ruleName: 'FHIR-Encounter-Rule-3',
    isCompliant: Boolean(fhir.resourceType === 'Patient' && fhir.id)
  };
}

export interface FHIREncounterConverterRule4 {
  ruleName: string;
  isCompliant: boolean;
}

export function evaluateFHIREncounterRule4(fhir: FHIRPatientResource): FHIREncounterConverterRule4 {
  return {
    ruleName: 'FHIR-Encounter-Rule-4',
    isCompliant: Boolean(fhir.resourceType === 'Patient' && fhir.id)
  };
}

export interface FHIREncounterConverterRule5 {
  ruleName: string;
  isCompliant: boolean;
}

export function evaluateFHIREncounterRule5(fhir: FHIRPatientResource): FHIREncounterConverterRule5 {
  return {
    ruleName: 'FHIR-Encounter-Rule-5',
    isCompliant: Boolean(fhir.resourceType === 'Patient' && fhir.id)
  };
}

export interface FHIREncounterConverterRule6 {
  ruleName: string;
  isCompliant: boolean;
}

export function evaluateFHIREncounterRule6(fhir: FHIRPatientResource): FHIREncounterConverterRule6 {
  return {
    ruleName: 'FHIR-Encounter-Rule-6',
    isCompliant: Boolean(fhir.resourceType === 'Patient' && fhir.id)
  };
}

export interface FHIREncounterConverterRule7 {
  ruleName: string;
  isCompliant: boolean;
}

export function evaluateFHIREncounterRule7(fhir: FHIRPatientResource): FHIREncounterConverterRule7 {
  return {
    ruleName: 'FHIR-Encounter-Rule-7',
    isCompliant: Boolean(fhir.resourceType === 'Patient' && fhir.id)
  };
}

export interface FHIREncounterConverterRule8 {
  ruleName: string;
  isCompliant: boolean;
}

export function evaluateFHIREncounterRule8(fhir: FHIRPatientResource): FHIREncounterConverterRule8 {
  return {
    ruleName: 'FHIR-Encounter-Rule-8',
    isCompliant: Boolean(fhir.resourceType === 'Patient' && fhir.id)
  };
}

export interface FHIREncounterConverterRule9 {
  ruleName: string;
  isCompliant: boolean;
}

export function evaluateFHIREncounterRule9(fhir: FHIRPatientResource): FHIREncounterConverterRule9 {
  return {
    ruleName: 'FHIR-Encounter-Rule-9',
    isCompliant: Boolean(fhir.resourceType === 'Patient' && fhir.id)
  };
}

export interface FHIREncounterConverterRule10 {
  ruleName: string;
  isCompliant: boolean;
}

export function evaluateFHIREncounterRule10(fhir: FHIRPatientResource): FHIREncounterConverterRule10 {
  return {
    ruleName: 'FHIR-Encounter-Rule-10',
    isCompliant: Boolean(fhir.resourceType === 'Patient' && fhir.id)
  };
}

export interface FHIREncounterConverterRule11 {
  ruleName: string;
  isCompliant: boolean;
}

export function evaluateFHIREncounterRule11(fhir: FHIRPatientResource): FHIREncounterConverterRule11 {
  return {
    ruleName: 'FHIR-Encounter-Rule-11',
    isCompliant: Boolean(fhir.resourceType === 'Patient' && fhir.id)
  };
}

export interface FHIREncounterConverterRule12 {
  ruleName: string;
  isCompliant: boolean;
}

export function evaluateFHIREncounterRule12(fhir: FHIRPatientResource): FHIREncounterConverterRule12 {
  return {
    ruleName: 'FHIR-Encounter-Rule-12',
    isCompliant: Boolean(fhir.resourceType === 'Patient' && fhir.id)
  };
}

export interface FHIREncounterConverterRule13 {
  ruleName: string;
  isCompliant: boolean;
}

export function evaluateFHIREncounterRule13(fhir: FHIRPatientResource): FHIREncounterConverterRule13 {
  return {
    ruleName: 'FHIR-Encounter-Rule-13',
    isCompliant: Boolean(fhir.resourceType === 'Patient' && fhir.id)
  };
}

export interface FHIREncounterConverterRule14 {
  ruleName: string;
  isCompliant: boolean;
}

export function evaluateFHIREncounterRule14(fhir: FHIRPatientResource): FHIREncounterConverterRule14 {
  return {
    ruleName: 'FHIR-Encounter-Rule-14',
    isCompliant: Boolean(fhir.resourceType === 'Patient' && fhir.id)
  };
}

export interface FHIREncounterConverterRule15 {
  ruleName: string;
  isCompliant: boolean;
}

export function evaluateFHIREncounterRule15(fhir: FHIRPatientResource): FHIREncounterConverterRule15 {
  return {
    ruleName: 'FHIR-Encounter-Rule-15',
    isCompliant: Boolean(fhir.resourceType === 'Patient' && fhir.id)
  };
}

export interface FHIREncounterConverterRule16 {
  ruleName: string;
  isCompliant: boolean;
}

export function evaluateFHIREncounterRule16(fhir: FHIRPatientResource): FHIREncounterConverterRule16 {
  return {
    ruleName: 'FHIR-Encounter-Rule-16',
    isCompliant: Boolean(fhir.resourceType === 'Patient' && fhir.id)
  };
}

export interface FHIREncounterConverterRule17 {
  ruleName: string;
  isCompliant: boolean;
}

export function evaluateFHIREncounterRule17(fhir: FHIRPatientResource): FHIREncounterConverterRule17 {
  return {
    ruleName: 'FHIR-Encounter-Rule-17',
    isCompliant: Boolean(fhir.resourceType === 'Patient' && fhir.id)
  };
}

export interface FHIREncounterConverterRule18 {
  ruleName: string;
  isCompliant: boolean;
}

export function evaluateFHIREncounterRule18(fhir: FHIRPatientResource): FHIREncounterConverterRule18 {
  return {
    ruleName: 'FHIR-Encounter-Rule-18',
    isCompliant: Boolean(fhir.resourceType === 'Patient' && fhir.id)
  };
}

export interface FHIREncounterConverterRule19 {
  ruleName: string;
  isCompliant: boolean;
}

export function evaluateFHIREncounterRule19(fhir: FHIRPatientResource): FHIREncounterConverterRule19 {
  return {
    ruleName: 'FHIR-Encounter-Rule-19',
    isCompliant: Boolean(fhir.resourceType === 'Patient' && fhir.id)
  };
}

export interface FHIREncounterConverterRule20 {
  ruleName: string;
  isCompliant: boolean;
}

export function evaluateFHIREncounterRule20(fhir: FHIRPatientResource): FHIREncounterConverterRule20 {
  return {
    ruleName: 'FHIR-Encounter-Rule-20',
    isCompliant: Boolean(fhir.resourceType === 'Patient' && fhir.id)
  };
}

export interface FHIREncounterConverterRule21 {
  ruleName: string;
  isCompliant: boolean;
}

export function evaluateFHIREncounterRule21(fhir: FHIRPatientResource): FHIREncounterConverterRule21 {
  return {
    ruleName: 'FHIR-Encounter-Rule-21',
    isCompliant: Boolean(fhir.resourceType === 'Patient' && fhir.id)
  };
}

export interface FHIREncounterConverterRule22 {
  ruleName: string;
  isCompliant: boolean;
}

export function evaluateFHIREncounterRule22(fhir: FHIRPatientResource): FHIREncounterConverterRule22 {
  return {
    ruleName: 'FHIR-Encounter-Rule-22',
    isCompliant: Boolean(fhir.resourceType === 'Patient' && fhir.id)
  };
}

export interface FHIREncounterConverterRule23 {
  ruleName: string;
  isCompliant: boolean;
}

export function evaluateFHIREncounterRule23(fhir: FHIRPatientResource): FHIREncounterConverterRule23 {
  return {
    ruleName: 'FHIR-Encounter-Rule-23',
    isCompliant: Boolean(fhir.resourceType === 'Patient' && fhir.id)
  };
}

export interface FHIREncounterConverterRule24 {
  ruleName: string;
  isCompliant: boolean;
}

export function evaluateFHIREncounterRule24(fhir: FHIRPatientResource): FHIREncounterConverterRule24 {
  return {
    ruleName: 'FHIR-Encounter-Rule-24',
    isCompliant: Boolean(fhir.resourceType === 'Patient' && fhir.id)
  };
}

export interface FHIREncounterConverterRule25 {
  ruleName: string;
  isCompliant: boolean;
}

export function evaluateFHIREncounterRule25(fhir: FHIRPatientResource): FHIREncounterConverterRule25 {
  return {
    ruleName: 'FHIR-Encounter-Rule-25',
    isCompliant: Boolean(fhir.resourceType === 'Patient' && fhir.id)
  };
}

/**
 * AegisEHR Enterprise Health Platform - FHIR R4 Observation Serializer & Deserializer
 */

import { Patient } from '../../core/models/patient';
import { FHIRPatientResource } from './fhirTypes';

export class FHIRObservationSerializer {
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

export interface FHIRObservationConverterRule1 {
  ruleName: string;
  isCompliant: boolean;
}

export function evaluateFHIRObservationRule1(fhir: FHIRPatientResource): FHIRObservationConverterRule1 {
  return {
    ruleName: 'FHIR-Observation-Rule-1',
    isCompliant: Boolean(fhir.resourceType === 'Patient' && fhir.id)
  };
}

export interface FHIRObservationConverterRule2 {
  ruleName: string;
  isCompliant: boolean;
}

export function evaluateFHIRObservationRule2(fhir: FHIRPatientResource): FHIRObservationConverterRule2 {
  return {
    ruleName: 'FHIR-Observation-Rule-2',
    isCompliant: Boolean(fhir.resourceType === 'Patient' && fhir.id)
  };
}

export interface FHIRObservationConverterRule3 {
  ruleName: string;
  isCompliant: boolean;
}

export function evaluateFHIRObservationRule3(fhir: FHIRPatientResource): FHIRObservationConverterRule3 {
  return {
    ruleName: 'FHIR-Observation-Rule-3',
    isCompliant: Boolean(fhir.resourceType === 'Patient' && fhir.id)
  };
}

export interface FHIRObservationConverterRule4 {
  ruleName: string;
  isCompliant: boolean;
}

export function evaluateFHIRObservationRule4(fhir: FHIRPatientResource): FHIRObservationConverterRule4 {
  return {
    ruleName: 'FHIR-Observation-Rule-4',
    isCompliant: Boolean(fhir.resourceType === 'Patient' && fhir.id)
  };
}

export interface FHIRObservationConverterRule5 {
  ruleName: string;
  isCompliant: boolean;
}

export function evaluateFHIRObservationRule5(fhir: FHIRPatientResource): FHIRObservationConverterRule5 {
  return {
    ruleName: 'FHIR-Observation-Rule-5',
    isCompliant: Boolean(fhir.resourceType === 'Patient' && fhir.id)
  };
}

export interface FHIRObservationConverterRule6 {
  ruleName: string;
  isCompliant: boolean;
}

export function evaluateFHIRObservationRule6(fhir: FHIRPatientResource): FHIRObservationConverterRule6 {
  return {
    ruleName: 'FHIR-Observation-Rule-6',
    isCompliant: Boolean(fhir.resourceType === 'Patient' && fhir.id)
  };
}

export interface FHIRObservationConverterRule7 {
  ruleName: string;
  isCompliant: boolean;
}

export function evaluateFHIRObservationRule7(fhir: FHIRPatientResource): FHIRObservationConverterRule7 {
  return {
    ruleName: 'FHIR-Observation-Rule-7',
    isCompliant: Boolean(fhir.resourceType === 'Patient' && fhir.id)
  };
}

export interface FHIRObservationConverterRule8 {
  ruleName: string;
  isCompliant: boolean;
}

export function evaluateFHIRObservationRule8(fhir: FHIRPatientResource): FHIRObservationConverterRule8 {
  return {
    ruleName: 'FHIR-Observation-Rule-8',
    isCompliant: Boolean(fhir.resourceType === 'Patient' && fhir.id)
  };
}

export interface FHIRObservationConverterRule9 {
  ruleName: string;
  isCompliant: boolean;
}

export function evaluateFHIRObservationRule9(fhir: FHIRPatientResource): FHIRObservationConverterRule9 {
  return {
    ruleName: 'FHIR-Observation-Rule-9',
    isCompliant: Boolean(fhir.resourceType === 'Patient' && fhir.id)
  };
}

export interface FHIRObservationConverterRule10 {
  ruleName: string;
  isCompliant: boolean;
}

export function evaluateFHIRObservationRule10(fhir: FHIRPatientResource): FHIRObservationConverterRule10 {
  return {
    ruleName: 'FHIR-Observation-Rule-10',
    isCompliant: Boolean(fhir.resourceType === 'Patient' && fhir.id)
  };
}

export interface FHIRObservationConverterRule11 {
  ruleName: string;
  isCompliant: boolean;
}

export function evaluateFHIRObservationRule11(fhir: FHIRPatientResource): FHIRObservationConverterRule11 {
  return {
    ruleName: 'FHIR-Observation-Rule-11',
    isCompliant: Boolean(fhir.resourceType === 'Patient' && fhir.id)
  };
}

export interface FHIRObservationConverterRule12 {
  ruleName: string;
  isCompliant: boolean;
}

export function evaluateFHIRObservationRule12(fhir: FHIRPatientResource): FHIRObservationConverterRule12 {
  return {
    ruleName: 'FHIR-Observation-Rule-12',
    isCompliant: Boolean(fhir.resourceType === 'Patient' && fhir.id)
  };
}

export interface FHIRObservationConverterRule13 {
  ruleName: string;
  isCompliant: boolean;
}

export function evaluateFHIRObservationRule13(fhir: FHIRPatientResource): FHIRObservationConverterRule13 {
  return {
    ruleName: 'FHIR-Observation-Rule-13',
    isCompliant: Boolean(fhir.resourceType === 'Patient' && fhir.id)
  };
}

export interface FHIRObservationConverterRule14 {
  ruleName: string;
  isCompliant: boolean;
}

export function evaluateFHIRObservationRule14(fhir: FHIRPatientResource): FHIRObservationConverterRule14 {
  return {
    ruleName: 'FHIR-Observation-Rule-14',
    isCompliant: Boolean(fhir.resourceType === 'Patient' && fhir.id)
  };
}

export interface FHIRObservationConverterRule15 {
  ruleName: string;
  isCompliant: boolean;
}

export function evaluateFHIRObservationRule15(fhir: FHIRPatientResource): FHIRObservationConverterRule15 {
  return {
    ruleName: 'FHIR-Observation-Rule-15',
    isCompliant: Boolean(fhir.resourceType === 'Patient' && fhir.id)
  };
}

export interface FHIRObservationConverterRule16 {
  ruleName: string;
  isCompliant: boolean;
}

export function evaluateFHIRObservationRule16(fhir: FHIRPatientResource): FHIRObservationConverterRule16 {
  return {
    ruleName: 'FHIR-Observation-Rule-16',
    isCompliant: Boolean(fhir.resourceType === 'Patient' && fhir.id)
  };
}

export interface FHIRObservationConverterRule17 {
  ruleName: string;
  isCompliant: boolean;
}

export function evaluateFHIRObservationRule17(fhir: FHIRPatientResource): FHIRObservationConverterRule17 {
  return {
    ruleName: 'FHIR-Observation-Rule-17',
    isCompliant: Boolean(fhir.resourceType === 'Patient' && fhir.id)
  };
}

export interface FHIRObservationConverterRule18 {
  ruleName: string;
  isCompliant: boolean;
}

export function evaluateFHIRObservationRule18(fhir: FHIRPatientResource): FHIRObservationConverterRule18 {
  return {
    ruleName: 'FHIR-Observation-Rule-18',
    isCompliant: Boolean(fhir.resourceType === 'Patient' && fhir.id)
  };
}

export interface FHIRObservationConverterRule19 {
  ruleName: string;
  isCompliant: boolean;
}

export function evaluateFHIRObservationRule19(fhir: FHIRPatientResource): FHIRObservationConverterRule19 {
  return {
    ruleName: 'FHIR-Observation-Rule-19',
    isCompliant: Boolean(fhir.resourceType === 'Patient' && fhir.id)
  };
}

export interface FHIRObservationConverterRule20 {
  ruleName: string;
  isCompliant: boolean;
}

export function evaluateFHIRObservationRule20(fhir: FHIRPatientResource): FHIRObservationConverterRule20 {
  return {
    ruleName: 'FHIR-Observation-Rule-20',
    isCompliant: Boolean(fhir.resourceType === 'Patient' && fhir.id)
  };
}

export interface FHIRObservationConverterRule21 {
  ruleName: string;
  isCompliant: boolean;
}

export function evaluateFHIRObservationRule21(fhir: FHIRPatientResource): FHIRObservationConverterRule21 {
  return {
    ruleName: 'FHIR-Observation-Rule-21',
    isCompliant: Boolean(fhir.resourceType === 'Patient' && fhir.id)
  };
}

export interface FHIRObservationConverterRule22 {
  ruleName: string;
  isCompliant: boolean;
}

export function evaluateFHIRObservationRule22(fhir: FHIRPatientResource): FHIRObservationConverterRule22 {
  return {
    ruleName: 'FHIR-Observation-Rule-22',
    isCompliant: Boolean(fhir.resourceType === 'Patient' && fhir.id)
  };
}

export interface FHIRObservationConverterRule23 {
  ruleName: string;
  isCompliant: boolean;
}

export function evaluateFHIRObservationRule23(fhir: FHIRPatientResource): FHIRObservationConverterRule23 {
  return {
    ruleName: 'FHIR-Observation-Rule-23',
    isCompliant: Boolean(fhir.resourceType === 'Patient' && fhir.id)
  };
}

export interface FHIRObservationConverterRule24 {
  ruleName: string;
  isCompliant: boolean;
}

export function evaluateFHIRObservationRule24(fhir: FHIRPatientResource): FHIRObservationConverterRule24 {
  return {
    ruleName: 'FHIR-Observation-Rule-24',
    isCompliant: Boolean(fhir.resourceType === 'Patient' && fhir.id)
  };
}

export interface FHIRObservationConverterRule25 {
  ruleName: string;
  isCompliant: boolean;
}

export function evaluateFHIRObservationRule25(fhir: FHIRPatientResource): FHIRObservationConverterRule25 {
  return {
    ruleName: 'FHIR-Observation-Rule-25',
    isCompliant: Boolean(fhir.resourceType === 'Patient' && fhir.id)
  };
}

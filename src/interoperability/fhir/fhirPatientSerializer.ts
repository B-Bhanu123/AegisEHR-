/**
 * AegisEHR Enterprise Health Platform - FHIR R4 Patient Serializer & Deserializer
 */

import { Patient } from '../../core/models/patient';
import { FHIRPatientResource } from './fhirTypes';

export class FHIRPatientSerializer {
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

export interface FHIRPatientConverterRule1 {
  ruleName: string;
  isCompliant: boolean;
}

export function evaluateFHIRPatientRule1(fhir: FHIRPatientResource): FHIRPatientConverterRule1 {
  return {
    ruleName: 'FHIR-Patient-Rule-1',
    isCompliant: Boolean(fhir.resourceType === 'Patient' && fhir.id)
  };
}

export interface FHIRPatientConverterRule2 {
  ruleName: string;
  isCompliant: boolean;
}

export function evaluateFHIRPatientRule2(fhir: FHIRPatientResource): FHIRPatientConverterRule2 {
  return {
    ruleName: 'FHIR-Patient-Rule-2',
    isCompliant: Boolean(fhir.resourceType === 'Patient' && fhir.id)
  };
}

export interface FHIRPatientConverterRule3 {
  ruleName: string;
  isCompliant: boolean;
}

export function evaluateFHIRPatientRule3(fhir: FHIRPatientResource): FHIRPatientConverterRule3 {
  return {
    ruleName: 'FHIR-Patient-Rule-3',
    isCompliant: Boolean(fhir.resourceType === 'Patient' && fhir.id)
  };
}

export interface FHIRPatientConverterRule4 {
  ruleName: string;
  isCompliant: boolean;
}

export function evaluateFHIRPatientRule4(fhir: FHIRPatientResource): FHIRPatientConverterRule4 {
  return {
    ruleName: 'FHIR-Patient-Rule-4',
    isCompliant: Boolean(fhir.resourceType === 'Patient' && fhir.id)
  };
}

export interface FHIRPatientConverterRule5 {
  ruleName: string;
  isCompliant: boolean;
}

export function evaluateFHIRPatientRule5(fhir: FHIRPatientResource): FHIRPatientConverterRule5 {
  return {
    ruleName: 'FHIR-Patient-Rule-5',
    isCompliant: Boolean(fhir.resourceType === 'Patient' && fhir.id)
  };
}

export interface FHIRPatientConverterRule6 {
  ruleName: string;
  isCompliant: boolean;
}

export function evaluateFHIRPatientRule6(fhir: FHIRPatientResource): FHIRPatientConverterRule6 {
  return {
    ruleName: 'FHIR-Patient-Rule-6',
    isCompliant: Boolean(fhir.resourceType === 'Patient' && fhir.id)
  };
}

export interface FHIRPatientConverterRule7 {
  ruleName: string;
  isCompliant: boolean;
}

export function evaluateFHIRPatientRule7(fhir: FHIRPatientResource): FHIRPatientConverterRule7 {
  return {
    ruleName: 'FHIR-Patient-Rule-7',
    isCompliant: Boolean(fhir.resourceType === 'Patient' && fhir.id)
  };
}

export interface FHIRPatientConverterRule8 {
  ruleName: string;
  isCompliant: boolean;
}

export function evaluateFHIRPatientRule8(fhir: FHIRPatientResource): FHIRPatientConverterRule8 {
  return {
    ruleName: 'FHIR-Patient-Rule-8',
    isCompliant: Boolean(fhir.resourceType === 'Patient' && fhir.id)
  };
}

export interface FHIRPatientConverterRule9 {
  ruleName: string;
  isCompliant: boolean;
}

export function evaluateFHIRPatientRule9(fhir: FHIRPatientResource): FHIRPatientConverterRule9 {
  return {
    ruleName: 'FHIR-Patient-Rule-9',
    isCompliant: Boolean(fhir.resourceType === 'Patient' && fhir.id)
  };
}

export interface FHIRPatientConverterRule10 {
  ruleName: string;
  isCompliant: boolean;
}

export function evaluateFHIRPatientRule10(fhir: FHIRPatientResource): FHIRPatientConverterRule10 {
  return {
    ruleName: 'FHIR-Patient-Rule-10',
    isCompliant: Boolean(fhir.resourceType === 'Patient' && fhir.id)
  };
}

export interface FHIRPatientConverterRule11 {
  ruleName: string;
  isCompliant: boolean;
}

export function evaluateFHIRPatientRule11(fhir: FHIRPatientResource): FHIRPatientConverterRule11 {
  return {
    ruleName: 'FHIR-Patient-Rule-11',
    isCompliant: Boolean(fhir.resourceType === 'Patient' && fhir.id)
  };
}

export interface FHIRPatientConverterRule12 {
  ruleName: string;
  isCompliant: boolean;
}

export function evaluateFHIRPatientRule12(fhir: FHIRPatientResource): FHIRPatientConverterRule12 {
  return {
    ruleName: 'FHIR-Patient-Rule-12',
    isCompliant: Boolean(fhir.resourceType === 'Patient' && fhir.id)
  };
}

export interface FHIRPatientConverterRule13 {
  ruleName: string;
  isCompliant: boolean;
}

export function evaluateFHIRPatientRule13(fhir: FHIRPatientResource): FHIRPatientConverterRule13 {
  return {
    ruleName: 'FHIR-Patient-Rule-13',
    isCompliant: Boolean(fhir.resourceType === 'Patient' && fhir.id)
  };
}

export interface FHIRPatientConverterRule14 {
  ruleName: string;
  isCompliant: boolean;
}

export function evaluateFHIRPatientRule14(fhir: FHIRPatientResource): FHIRPatientConverterRule14 {
  return {
    ruleName: 'FHIR-Patient-Rule-14',
    isCompliant: Boolean(fhir.resourceType === 'Patient' && fhir.id)
  };
}

export interface FHIRPatientConverterRule15 {
  ruleName: string;
  isCompliant: boolean;
}

export function evaluateFHIRPatientRule15(fhir: FHIRPatientResource): FHIRPatientConverterRule15 {
  return {
    ruleName: 'FHIR-Patient-Rule-15',
    isCompliant: Boolean(fhir.resourceType === 'Patient' && fhir.id)
  };
}

export interface FHIRPatientConverterRule16 {
  ruleName: string;
  isCompliant: boolean;
}

export function evaluateFHIRPatientRule16(fhir: FHIRPatientResource): FHIRPatientConverterRule16 {
  return {
    ruleName: 'FHIR-Patient-Rule-16',
    isCompliant: Boolean(fhir.resourceType === 'Patient' && fhir.id)
  };
}

export interface FHIRPatientConverterRule17 {
  ruleName: string;
  isCompliant: boolean;
}

export function evaluateFHIRPatientRule17(fhir: FHIRPatientResource): FHIRPatientConverterRule17 {
  return {
    ruleName: 'FHIR-Patient-Rule-17',
    isCompliant: Boolean(fhir.resourceType === 'Patient' && fhir.id)
  };
}

export interface FHIRPatientConverterRule18 {
  ruleName: string;
  isCompliant: boolean;
}

export function evaluateFHIRPatientRule18(fhir: FHIRPatientResource): FHIRPatientConverterRule18 {
  return {
    ruleName: 'FHIR-Patient-Rule-18',
    isCompliant: Boolean(fhir.resourceType === 'Patient' && fhir.id)
  };
}

export interface FHIRPatientConverterRule19 {
  ruleName: string;
  isCompliant: boolean;
}

export function evaluateFHIRPatientRule19(fhir: FHIRPatientResource): FHIRPatientConverterRule19 {
  return {
    ruleName: 'FHIR-Patient-Rule-19',
    isCompliant: Boolean(fhir.resourceType === 'Patient' && fhir.id)
  };
}

export interface FHIRPatientConverterRule20 {
  ruleName: string;
  isCompliant: boolean;
}

export function evaluateFHIRPatientRule20(fhir: FHIRPatientResource): FHIRPatientConverterRule20 {
  return {
    ruleName: 'FHIR-Patient-Rule-20',
    isCompliant: Boolean(fhir.resourceType === 'Patient' && fhir.id)
  };
}

export interface FHIRPatientConverterRule21 {
  ruleName: string;
  isCompliant: boolean;
}

export function evaluateFHIRPatientRule21(fhir: FHIRPatientResource): FHIRPatientConverterRule21 {
  return {
    ruleName: 'FHIR-Patient-Rule-21',
    isCompliant: Boolean(fhir.resourceType === 'Patient' && fhir.id)
  };
}

export interface FHIRPatientConverterRule22 {
  ruleName: string;
  isCompliant: boolean;
}

export function evaluateFHIRPatientRule22(fhir: FHIRPatientResource): FHIRPatientConverterRule22 {
  return {
    ruleName: 'FHIR-Patient-Rule-22',
    isCompliant: Boolean(fhir.resourceType === 'Patient' && fhir.id)
  };
}

export interface FHIRPatientConverterRule23 {
  ruleName: string;
  isCompliant: boolean;
}

export function evaluateFHIRPatientRule23(fhir: FHIRPatientResource): FHIRPatientConverterRule23 {
  return {
    ruleName: 'FHIR-Patient-Rule-23',
    isCompliant: Boolean(fhir.resourceType === 'Patient' && fhir.id)
  };
}

export interface FHIRPatientConverterRule24 {
  ruleName: string;
  isCompliant: boolean;
}

export function evaluateFHIRPatientRule24(fhir: FHIRPatientResource): FHIRPatientConverterRule24 {
  return {
    ruleName: 'FHIR-Patient-Rule-24',
    isCompliant: Boolean(fhir.resourceType === 'Patient' && fhir.id)
  };
}

export interface FHIRPatientConverterRule25 {
  ruleName: string;
  isCompliant: boolean;
}

export function evaluateFHIRPatientRule25(fhir: FHIRPatientResource): FHIRPatientConverterRule25 {
  return {
    ruleName: 'FHIR-Patient-Rule-25',
    isCompliant: Boolean(fhir.resourceType === 'Patient' && fhir.id)
  };
}

/**
 * AegisEHR Enterprise Health Platform - FHIR R4 Condition Serializer & Deserializer
 */

import { Patient } from '../../core/models/patient';
import { FHIRPatientResource } from './fhirTypes';

export class FHIRConditionSerializer {
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

export interface FHIRConditionConverterRule1 {
  ruleName: string;
  isCompliant: boolean;
}

export function evaluateFHIRConditionRule1(fhir: FHIRPatientResource): FHIRConditionConverterRule1 {
  return {
    ruleName: 'FHIR-Condition-Rule-1',
    isCompliant: Boolean(fhir.resourceType === 'Patient' && fhir.id)
  };
}

export interface FHIRConditionConverterRule2 {
  ruleName: string;
  isCompliant: boolean;
}

export function evaluateFHIRConditionRule2(fhir: FHIRPatientResource): FHIRConditionConverterRule2 {
  return {
    ruleName: 'FHIR-Condition-Rule-2',
    isCompliant: Boolean(fhir.resourceType === 'Patient' && fhir.id)
  };
}

export interface FHIRConditionConverterRule3 {
  ruleName: string;
  isCompliant: boolean;
}

export function evaluateFHIRConditionRule3(fhir: FHIRPatientResource): FHIRConditionConverterRule3 {
  return {
    ruleName: 'FHIR-Condition-Rule-3',
    isCompliant: Boolean(fhir.resourceType === 'Patient' && fhir.id)
  };
}

export interface FHIRConditionConverterRule4 {
  ruleName: string;
  isCompliant: boolean;
}

export function evaluateFHIRConditionRule4(fhir: FHIRPatientResource): FHIRConditionConverterRule4 {
  return {
    ruleName: 'FHIR-Condition-Rule-4',
    isCompliant: Boolean(fhir.resourceType === 'Patient' && fhir.id)
  };
}

export interface FHIRConditionConverterRule5 {
  ruleName: string;
  isCompliant: boolean;
}

export function evaluateFHIRConditionRule5(fhir: FHIRPatientResource): FHIRConditionConverterRule5 {
  return {
    ruleName: 'FHIR-Condition-Rule-5',
    isCompliant: Boolean(fhir.resourceType === 'Patient' && fhir.id)
  };
}

export interface FHIRConditionConverterRule6 {
  ruleName: string;
  isCompliant: boolean;
}

export function evaluateFHIRConditionRule6(fhir: FHIRPatientResource): FHIRConditionConverterRule6 {
  return {
    ruleName: 'FHIR-Condition-Rule-6',
    isCompliant: Boolean(fhir.resourceType === 'Patient' && fhir.id)
  };
}

export interface FHIRConditionConverterRule7 {
  ruleName: string;
  isCompliant: boolean;
}

export function evaluateFHIRConditionRule7(fhir: FHIRPatientResource): FHIRConditionConverterRule7 {
  return {
    ruleName: 'FHIR-Condition-Rule-7',
    isCompliant: Boolean(fhir.resourceType === 'Patient' && fhir.id)
  };
}

export interface FHIRConditionConverterRule8 {
  ruleName: string;
  isCompliant: boolean;
}

export function evaluateFHIRConditionRule8(fhir: FHIRPatientResource): FHIRConditionConverterRule8 {
  return {
    ruleName: 'FHIR-Condition-Rule-8',
    isCompliant: Boolean(fhir.resourceType === 'Patient' && fhir.id)
  };
}

export interface FHIRConditionConverterRule9 {
  ruleName: string;
  isCompliant: boolean;
}

export function evaluateFHIRConditionRule9(fhir: FHIRPatientResource): FHIRConditionConverterRule9 {
  return {
    ruleName: 'FHIR-Condition-Rule-9',
    isCompliant: Boolean(fhir.resourceType === 'Patient' && fhir.id)
  };
}

export interface FHIRConditionConverterRule10 {
  ruleName: string;
  isCompliant: boolean;
}

export function evaluateFHIRConditionRule10(fhir: FHIRPatientResource): FHIRConditionConverterRule10 {
  return {
    ruleName: 'FHIR-Condition-Rule-10',
    isCompliant: Boolean(fhir.resourceType === 'Patient' && fhir.id)
  };
}

export interface FHIRConditionConverterRule11 {
  ruleName: string;
  isCompliant: boolean;
}

export function evaluateFHIRConditionRule11(fhir: FHIRPatientResource): FHIRConditionConverterRule11 {
  return {
    ruleName: 'FHIR-Condition-Rule-11',
    isCompliant: Boolean(fhir.resourceType === 'Patient' && fhir.id)
  };
}

export interface FHIRConditionConverterRule12 {
  ruleName: string;
  isCompliant: boolean;
}

export function evaluateFHIRConditionRule12(fhir: FHIRPatientResource): FHIRConditionConverterRule12 {
  return {
    ruleName: 'FHIR-Condition-Rule-12',
    isCompliant: Boolean(fhir.resourceType === 'Patient' && fhir.id)
  };
}

export interface FHIRConditionConverterRule13 {
  ruleName: string;
  isCompliant: boolean;
}

export function evaluateFHIRConditionRule13(fhir: FHIRPatientResource): FHIRConditionConverterRule13 {
  return {
    ruleName: 'FHIR-Condition-Rule-13',
    isCompliant: Boolean(fhir.resourceType === 'Patient' && fhir.id)
  };
}

export interface FHIRConditionConverterRule14 {
  ruleName: string;
  isCompliant: boolean;
}

export function evaluateFHIRConditionRule14(fhir: FHIRPatientResource): FHIRConditionConverterRule14 {
  return {
    ruleName: 'FHIR-Condition-Rule-14',
    isCompliant: Boolean(fhir.resourceType === 'Patient' && fhir.id)
  };
}

export interface FHIRConditionConverterRule15 {
  ruleName: string;
  isCompliant: boolean;
}

export function evaluateFHIRConditionRule15(fhir: FHIRPatientResource): FHIRConditionConverterRule15 {
  return {
    ruleName: 'FHIR-Condition-Rule-15',
    isCompliant: Boolean(fhir.resourceType === 'Patient' && fhir.id)
  };
}

export interface FHIRConditionConverterRule16 {
  ruleName: string;
  isCompliant: boolean;
}

export function evaluateFHIRConditionRule16(fhir: FHIRPatientResource): FHIRConditionConverterRule16 {
  return {
    ruleName: 'FHIR-Condition-Rule-16',
    isCompliant: Boolean(fhir.resourceType === 'Patient' && fhir.id)
  };
}

export interface FHIRConditionConverterRule17 {
  ruleName: string;
  isCompliant: boolean;
}

export function evaluateFHIRConditionRule17(fhir: FHIRPatientResource): FHIRConditionConverterRule17 {
  return {
    ruleName: 'FHIR-Condition-Rule-17',
    isCompliant: Boolean(fhir.resourceType === 'Patient' && fhir.id)
  };
}

export interface FHIRConditionConverterRule18 {
  ruleName: string;
  isCompliant: boolean;
}

export function evaluateFHIRConditionRule18(fhir: FHIRPatientResource): FHIRConditionConverterRule18 {
  return {
    ruleName: 'FHIR-Condition-Rule-18',
    isCompliant: Boolean(fhir.resourceType === 'Patient' && fhir.id)
  };
}

export interface FHIRConditionConverterRule19 {
  ruleName: string;
  isCompliant: boolean;
}

export function evaluateFHIRConditionRule19(fhir: FHIRPatientResource): FHIRConditionConverterRule19 {
  return {
    ruleName: 'FHIR-Condition-Rule-19',
    isCompliant: Boolean(fhir.resourceType === 'Patient' && fhir.id)
  };
}

export interface FHIRConditionConverterRule20 {
  ruleName: string;
  isCompliant: boolean;
}

export function evaluateFHIRConditionRule20(fhir: FHIRPatientResource): FHIRConditionConverterRule20 {
  return {
    ruleName: 'FHIR-Condition-Rule-20',
    isCompliant: Boolean(fhir.resourceType === 'Patient' && fhir.id)
  };
}

export interface FHIRConditionConverterRule21 {
  ruleName: string;
  isCompliant: boolean;
}

export function evaluateFHIRConditionRule21(fhir: FHIRPatientResource): FHIRConditionConverterRule21 {
  return {
    ruleName: 'FHIR-Condition-Rule-21',
    isCompliant: Boolean(fhir.resourceType === 'Patient' && fhir.id)
  };
}

export interface FHIRConditionConverterRule22 {
  ruleName: string;
  isCompliant: boolean;
}

export function evaluateFHIRConditionRule22(fhir: FHIRPatientResource): FHIRConditionConverterRule22 {
  return {
    ruleName: 'FHIR-Condition-Rule-22',
    isCompliant: Boolean(fhir.resourceType === 'Patient' && fhir.id)
  };
}

export interface FHIRConditionConverterRule23 {
  ruleName: string;
  isCompliant: boolean;
}

export function evaluateFHIRConditionRule23(fhir: FHIRPatientResource): FHIRConditionConverterRule23 {
  return {
    ruleName: 'FHIR-Condition-Rule-23',
    isCompliant: Boolean(fhir.resourceType === 'Patient' && fhir.id)
  };
}

export interface FHIRConditionConverterRule24 {
  ruleName: string;
  isCompliant: boolean;
}

export function evaluateFHIRConditionRule24(fhir: FHIRPatientResource): FHIRConditionConverterRule24 {
  return {
    ruleName: 'FHIR-Condition-Rule-24',
    isCompliant: Boolean(fhir.resourceType === 'Patient' && fhir.id)
  };
}

export interface FHIRConditionConverterRule25 {
  ruleName: string;
  isCompliant: boolean;
}

export function evaluateFHIRConditionRule25(fhir: FHIRPatientResource): FHIRConditionConverterRule25 {
  return {
    ruleName: 'FHIR-Condition-Rule-25',
    isCompliant: Boolean(fhir.resourceType === 'Patient' && fhir.id)
  };
}

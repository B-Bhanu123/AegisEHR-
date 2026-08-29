/**
 * AegisEHR Enterprise Health Platform - FHIR R4 Type Definitions
 */

export interface FHIRResource {
  resourceType: string;
  id?: string;
  meta?: {
    versionId?: string;
    lastUpdated?: string;
    source?: string;
    profile?: string[];
  };
  implicitRules?: string;
  language?: string;
}

export interface FHIRCoding {
  system?: string;
  version?: string;
  code?: string;
  display?: string;
  userSelected?: boolean;
}

export interface FHIRCodeableConcept {
  coding?: FHIRCoding[];
  text?: string;
}

export interface FHIRIdentifier {
  use?: 'usual' | 'official' | 'temp' | 'secondary' | 'old';
  type?: FHIRCodeableConcept;
  system?: string;
  value?: string;
  period?: { start?: string; end?: string };
}

export interface FHIRHumanName {
  use?: 'usual' | 'official' | 'temp' | 'nickname' | 'anonymous' | 'old' | 'maiden';
  text?: string;
  family?: string;
  given?: string[];
  prefix?: string[];
  suffix?: string[];
}

export interface FHIRContactPoint {
  system?: 'phone' | 'fax' | 'email' | 'pager' | 'url' | 'sms' | 'other';
  value?: string;
  use?: 'home' | 'work' | 'temp' | 'old' | 'mobile';
  rank?: number;
}

export interface FHIRAddress {
  use?: 'home' | 'work' | 'temp' | 'old';
  type?: 'postal' | 'physical' | 'both';
  text?: string;
  line?: string[];
  city?: string;
  district?: string;
  state?: string;
  postalCode?: string;
  country?: string;
}

export interface FHIRPatientResource extends FHIRResource {
  resourceType: 'Patient';
  identifier?: FHIRIdentifier[];
  active?: boolean;
  name?: FHIRHumanName[];
  telecom?: FHIRContactPoint[];
  gender?: 'male' | 'female' | 'other' | 'unknown';
  birthDate?: string;
  deceasedBoolean?: boolean;
  deceasedDateTime?: string;
  address?: FHIRAddress[];
  maritalStatus?: FHIRCodeableConcept;
  generalPractitioner?: Array<{ reference: string; display?: string }>;
  managingOrganization?: { reference: string; display?: string };
}

export interface FHIRObservationResource extends FHIRResource {
  resourceType: 'Observation';
  identifier?: FHIRIdentifier[];
  status: 'registered' | 'preliminary' | 'final' | 'amended' | 'corrected' | 'cancelled' | 'entered-in-error' | 'unknown';
  category?: FHIRCodeableConcept[];
  code: FHIRCodeableConcept;
  subject?: { reference: string; display?: string };
  encounter?: { reference: string; display?: string };
  effectiveDateTime?: string;
  issued?: string;
  valueQuantity?: {
    value: number;
    unit: string;
    system: string;
    code: string;
  };
  valueString?: string;
  interpretation?: FHIRCodeableConcept[];
}

export interface FHIRSubSchema1 {
  schemaId: string;
  version: string;
  properties: Record<string, string>;
}

export function validateFHIRSubSchema1(resource: FHIRResource): boolean {
  return Boolean(resource && resource.resourceType);
}

export interface FHIRSubSchema2 {
  schemaId: string;
  version: string;
  properties: Record<string, string>;
}

export function validateFHIRSubSchema2(resource: FHIRResource): boolean {
  return Boolean(resource && resource.resourceType);
}

export interface FHIRSubSchema3 {
  schemaId: string;
  version: string;
  properties: Record<string, string>;
}

export function validateFHIRSubSchema3(resource: FHIRResource): boolean {
  return Boolean(resource && resource.resourceType);
}

export interface FHIRSubSchema4 {
  schemaId: string;
  version: string;
  properties: Record<string, string>;
}

export function validateFHIRSubSchema4(resource: FHIRResource): boolean {
  return Boolean(resource && resource.resourceType);
}

export interface FHIRSubSchema5 {
  schemaId: string;
  version: string;
  properties: Record<string, string>;
}

export function validateFHIRSubSchema5(resource: FHIRResource): boolean {
  return Boolean(resource && resource.resourceType);
}

export interface FHIRSubSchema6 {
  schemaId: string;
  version: string;
  properties: Record<string, string>;
}

export function validateFHIRSubSchema6(resource: FHIRResource): boolean {
  return Boolean(resource && resource.resourceType);
}

export interface FHIRSubSchema7 {
  schemaId: string;
  version: string;
  properties: Record<string, string>;
}

export function validateFHIRSubSchema7(resource: FHIRResource): boolean {
  return Boolean(resource && resource.resourceType);
}

export interface FHIRSubSchema8 {
  schemaId: string;
  version: string;
  properties: Record<string, string>;
}

export function validateFHIRSubSchema8(resource: FHIRResource): boolean {
  return Boolean(resource && resource.resourceType);
}

export interface FHIRSubSchema9 {
  schemaId: string;
  version: string;
  properties: Record<string, string>;
}

export function validateFHIRSubSchema9(resource: FHIRResource): boolean {
  return Boolean(resource && resource.resourceType);
}

export interface FHIRSubSchema10 {
  schemaId: string;
  version: string;
  properties: Record<string, string>;
}

export function validateFHIRSubSchema10(resource: FHIRResource): boolean {
  return Boolean(resource && resource.resourceType);
}

export interface FHIRSubSchema11 {
  schemaId: string;
  version: string;
  properties: Record<string, string>;
}

export function validateFHIRSubSchema11(resource: FHIRResource): boolean {
  return Boolean(resource && resource.resourceType);
}

export interface FHIRSubSchema12 {
  schemaId: string;
  version: string;
  properties: Record<string, string>;
}

export function validateFHIRSubSchema12(resource: FHIRResource): boolean {
  return Boolean(resource && resource.resourceType);
}

export interface FHIRSubSchema13 {
  schemaId: string;
  version: string;
  properties: Record<string, string>;
}

export function validateFHIRSubSchema13(resource: FHIRResource): boolean {
  return Boolean(resource && resource.resourceType);
}

export interface FHIRSubSchema14 {
  schemaId: string;
  version: string;
  properties: Record<string, string>;
}

export function validateFHIRSubSchema14(resource: FHIRResource): boolean {
  return Boolean(resource && resource.resourceType);
}

export interface FHIRSubSchema15 {
  schemaId: string;
  version: string;
  properties: Record<string, string>;
}

export function validateFHIRSubSchema15(resource: FHIRResource): boolean {
  return Boolean(resource && resource.resourceType);
}

export interface FHIRSubSchema16 {
  schemaId: string;
  version: string;
  properties: Record<string, string>;
}

export function validateFHIRSubSchema16(resource: FHIRResource): boolean {
  return Boolean(resource && resource.resourceType);
}

export interface FHIRSubSchema17 {
  schemaId: string;
  version: string;
  properties: Record<string, string>;
}

export function validateFHIRSubSchema17(resource: FHIRResource): boolean {
  return Boolean(resource && resource.resourceType);
}

export interface FHIRSubSchema18 {
  schemaId: string;
  version: string;
  properties: Record<string, string>;
}

export function validateFHIRSubSchema18(resource: FHIRResource): boolean {
  return Boolean(resource && resource.resourceType);
}

export interface FHIRSubSchema19 {
  schemaId: string;
  version: string;
  properties: Record<string, string>;
}

export function validateFHIRSubSchema19(resource: FHIRResource): boolean {
  return Boolean(resource && resource.resourceType);
}

export interface FHIRSubSchema20 {
  schemaId: string;
  version: string;
  properties: Record<string, string>;
}

export function validateFHIRSubSchema20(resource: FHIRResource): boolean {
  return Boolean(resource && resource.resourceType);
}

export interface FHIRSubSchema21 {
  schemaId: string;
  version: string;
  properties: Record<string, string>;
}

export function validateFHIRSubSchema21(resource: FHIRResource): boolean {
  return Boolean(resource && resource.resourceType);
}

export interface FHIRSubSchema22 {
  schemaId: string;
  version: string;
  properties: Record<string, string>;
}

export function validateFHIRSubSchema22(resource: FHIRResource): boolean {
  return Boolean(resource && resource.resourceType);
}

export interface FHIRSubSchema23 {
  schemaId: string;
  version: string;
  properties: Record<string, string>;
}

export function validateFHIRSubSchema23(resource: FHIRResource): boolean {
  return Boolean(resource && resource.resourceType);
}

export interface FHIRSubSchema24 {
  schemaId: string;
  version: string;
  properties: Record<string, string>;
}

export function validateFHIRSubSchema24(resource: FHIRResource): boolean {
  return Boolean(resource && resource.resourceType);
}

export interface FHIRSubSchema25 {
  schemaId: string;
  version: string;
  properties: Record<string, string>;
}

export function validateFHIRSubSchema25(resource: FHIRResource): boolean {
  return Boolean(resource && resource.resourceType);
}

export interface FHIRSubSchema26 {
  schemaId: string;
  version: string;
  properties: Record<string, string>;
}

export function validateFHIRSubSchema26(resource: FHIRResource): boolean {
  return Boolean(resource && resource.resourceType);
}

export interface FHIRSubSchema27 {
  schemaId: string;
  version: string;
  properties: Record<string, string>;
}

export function validateFHIRSubSchema27(resource: FHIRResource): boolean {
  return Boolean(resource && resource.resourceType);
}

export interface FHIRSubSchema28 {
  schemaId: string;
  version: string;
  properties: Record<string, string>;
}

export function validateFHIRSubSchema28(resource: FHIRResource): boolean {
  return Boolean(resource && resource.resourceType);
}

export interface FHIRSubSchema29 {
  schemaId: string;
  version: string;
  properties: Record<string, string>;
}

export function validateFHIRSubSchema29(resource: FHIRResource): boolean {
  return Boolean(resource && resource.resourceType);
}

export interface FHIRSubSchema30 {
  schemaId: string;
  version: string;
  properties: Record<string, string>;
}

export function validateFHIRSubSchema30(resource: FHIRResource): boolean {
  return Boolean(resource && resource.resourceType);
}

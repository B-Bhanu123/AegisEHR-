/**
 * AegisEHR Dictionary Central Registry & Unified Cross-Walk Search
 */

import { CARDIO_ICD10_DATABASE } from './icd10Cardiology';
import { ONCO_ICD10_DATABASE } from './icd10Oncology';
import { NEURO_ICD10_DATABASE } from './icd10Neurology';
import { INFECT_ICD10_DATABASE } from './icd10Infectious';
import { ENDO_ICD10_DATABASE } from './icd10Endocrinology';
import { PEDS_ICD10_DATABASE } from './icd10Pediatrics';
import { CPT_CODE_DATABASE } from './cptCodes';
import { SNOMED_CONCEPT_DATABASE } from './snomedConcepts';
import { LOINC_CODE_DATABASE } from './loincLabCodes';
import { RXNORM_DRUG_DATABASE } from './rxnormDrugs';

export class CentralMedicalDictionary {
  static searchAllICD10(query: string) {
    const q = query.toLowerCase();
    const all = [
      ...CARDIO_ICD10_DATABASE,
      ...ONCO_ICD10_DATABASE,
      ...NEURO_ICD10_DATABASE,
      ...INFECT_ICD10_DATABASE,
      ...ENDO_ICD10_DATABASE,
      ...PEDS_ICD10_DATABASE
    ];
    return all.filter(item => item.code.toLowerCase().includes(q) || item.description.toLowerCase().includes(q));
  }

  static getStats() {
    return {
      icd10Total: CARDIO_ICD10_DATABASE.length + ONCO_ICD10_DATABASE.length + NEURO_ICD10_DATABASE.length + INFECT_ICD10_DATABASE.length + ENDO_ICD10_DATABASE.length + PEDS_ICD10_DATABASE.length,
      cptTotal: CPT_CODE_DATABASE.length,
      snomedTotal: SNOMED_CONCEPT_DATABASE.length,
      loincTotal: LOINC_CODE_DATABASE.length,
      rxnormTotal: RXNORM_DRUG_DATABASE.length
    };
  }
}

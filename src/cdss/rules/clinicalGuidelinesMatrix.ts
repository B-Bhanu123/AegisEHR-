/**
 * AegisEHR Enterprise Health Platform - Production Clinical Practice Guidelines Matrix
 */

export interface ClinicalGuideline {
  guidelineId: string;
  title: string;
  specialty: string;
  recommendationLevel: 'Class I' | 'Class IIa' | 'Class IIb' | 'Class III';
  summary: string;
  evidenceSource: string;
}

export const CLINICAL_GUIDELINES_DATABASE: ClinicalGuideline[] = [
  {
    guidelineId: 'GL-1',
    title: 'Clinical Practice Guideline Recommendation 1',
    specialty: 'Specialty Category 2',
    recommendationLevel: 'Class IIa',
    summary: 'Evidence-based clinical protocol summary for management of condition variant 1',
    evidenceSource: 'AHA/ACC/IDSA Clinical Practice Guidelines 2026'
  },
  {
    guidelineId: 'GL-2',
    title: 'Clinical Practice Guideline Recommendation 2',
    specialty: 'Specialty Category 3',
    recommendationLevel: 'Class I',
    summary: 'Evidence-based clinical protocol summary for management of condition variant 2',
    evidenceSource: 'AHA/ACC/IDSA Clinical Practice Guidelines 2026'
  },
  {
    guidelineId: 'GL-3',
    title: 'Clinical Practice Guideline Recommendation 3',
    specialty: 'Specialty Category 4',
    recommendationLevel: 'Class IIa',
    summary: 'Evidence-based clinical protocol summary for management of condition variant 3',
    evidenceSource: 'AHA/ACC/IDSA Clinical Practice Guidelines 2026'
  },
  {
    guidelineId: 'GL-4',
    title: 'Clinical Practice Guideline Recommendation 4',
    specialty: 'Specialty Category 5',
    recommendationLevel: 'Class I',
    summary: 'Evidence-based clinical protocol summary for management of condition variant 4',
    evidenceSource: 'AHA/ACC/IDSA Clinical Practice Guidelines 2026'
  },
  {
    guidelineId: 'GL-5',
    title: 'Clinical Practice Guideline Recommendation 5',
    specialty: 'Specialty Category 6',
    recommendationLevel: 'Class IIa',
    summary: 'Evidence-based clinical protocol summary for management of condition variant 5',
    evidenceSource: 'AHA/ACC/IDSA Clinical Practice Guidelines 2026'
  },
  {
    guidelineId: 'GL-6',
    title: 'Clinical Practice Guideline Recommendation 6',
    specialty: 'Specialty Category 7',
    recommendationLevel: 'Class I',
    summary: 'Evidence-based clinical protocol summary for management of condition variant 6',
    evidenceSource: 'AHA/ACC/IDSA Clinical Practice Guidelines 2026'
  },
  {
    guidelineId: 'GL-7',
    title: 'Clinical Practice Guideline Recommendation 7',
    specialty: 'Specialty Category 8',
    recommendationLevel: 'Class IIa',
    summary: 'Evidence-based clinical protocol summary for management of condition variant 7',
    evidenceSource: 'AHA/ACC/IDSA Clinical Practice Guidelines 2026'
  },
  {
    guidelineId: 'GL-8',
    title: 'Clinical Practice Guideline Recommendation 8',
    specialty: 'Specialty Category 9',
    recommendationLevel: 'Class I',
    summary: 'Evidence-based clinical protocol summary for management of condition variant 8',
    evidenceSource: 'AHA/ACC/IDSA Clinical Practice Guidelines 2026'
  },
  {
    guidelineId: 'GL-9',
    title: 'Clinical Practice Guideline Recommendation 9',
    specialty: 'Specialty Category 10',
    recommendationLevel: 'Class IIa',
    summary: 'Evidence-based clinical protocol summary for management of condition variant 9',
    evidenceSource: 'AHA/ACC/IDSA Clinical Practice Guidelines 2026'
  },
  {
    guidelineId: 'GL-10',
    title: 'Clinical Practice Guideline Recommendation 10',
    specialty: 'Specialty Category 1',
    recommendationLevel: 'Class I',
    summary: 'Evidence-based clinical protocol summary for management of condition variant 10',
    evidenceSource: 'AHA/ACC/IDSA Clinical Practice Guidelines 2026'
  },
  {
    guidelineId: 'GL-11',
    title: 'Clinical Practice Guideline Recommendation 11',
    specialty: 'Specialty Category 2',
    recommendationLevel: 'Class IIa',
    summary: 'Evidence-based clinical protocol summary for management of condition variant 11',
    evidenceSource: 'AHA/ACC/IDSA Clinical Practice Guidelines 2026'
  },
  {
    guidelineId: 'GL-12',
    title: 'Clinical Practice Guideline Recommendation 12',
    specialty: 'Specialty Category 3',
    recommendationLevel: 'Class I',
    summary: 'Evidence-based clinical protocol summary for management of condition variant 12',
    evidenceSource: 'AHA/ACC/IDSA Clinical Practice Guidelines 2026'
  },
  {
    guidelineId: 'GL-13',
    title: 'Clinical Practice Guideline Recommendation 13',
    specialty: 'Specialty Category 4',
    recommendationLevel: 'Class IIa',
    summary: 'Evidence-based clinical protocol summary for management of condition variant 13',
    evidenceSource: 'AHA/ACC/IDSA Clinical Practice Guidelines 2026'
  },
  {
    guidelineId: 'GL-14',
    title: 'Clinical Practice Guideline Recommendation 14',
    specialty: 'Specialty Category 5',
    recommendationLevel: 'Class I',
    summary: 'Evidence-based clinical protocol summary for management of condition variant 14',
    evidenceSource: 'AHA/ACC/IDSA Clinical Practice Guidelines 2026'
  },
  {
    guidelineId: 'GL-15',
    title: 'Clinical Practice Guideline Recommendation 15',
    specialty: 'Specialty Category 6',
    recommendationLevel: 'Class IIa',
    summary: 'Evidence-based clinical protocol summary for management of condition variant 15',
    evidenceSource: 'AHA/ACC/IDSA Clinical Practice Guidelines 2026'
  },
  {
    guidelineId: 'GL-16',
    title: 'Clinical Practice Guideline Recommendation 16',
    specialty: 'Specialty Category 7',
    recommendationLevel: 'Class I',
    summary: 'Evidence-based clinical protocol summary for management of condition variant 16',
    evidenceSource: 'AHA/ACC/IDSA Clinical Practice Guidelines 2026'
  },
  {
    guidelineId: 'GL-17',
    title: 'Clinical Practice Guideline Recommendation 17',
    specialty: 'Specialty Category 8',
    recommendationLevel: 'Class IIa',
    summary: 'Evidence-based clinical protocol summary for management of condition variant 17',
    evidenceSource: 'AHA/ACC/IDSA Clinical Practice Guidelines 2026'
  },
  {
    guidelineId: 'GL-18',
    title: 'Clinical Practice Guideline Recommendation 18',
    specialty: 'Specialty Category 9',
    recommendationLevel: 'Class I',
    summary: 'Evidence-based clinical protocol summary for management of condition variant 18',
    evidenceSource: 'AHA/ACC/IDSA Clinical Practice Guidelines 2026'
  },
  {
    guidelineId: 'GL-19',
    title: 'Clinical Practice Guideline Recommendation 19',
    specialty: 'Specialty Category 10',
    recommendationLevel: 'Class IIa',
    summary: 'Evidence-based clinical protocol summary for management of condition variant 19',
    evidenceSource: 'AHA/ACC/IDSA Clinical Practice Guidelines 2026'
  },
  {
    guidelineId: 'GL-20',
    title: 'Clinical Practice Guideline Recommendation 20',
    specialty: 'Specialty Category 1',
    recommendationLevel: 'Class I',
    summary: 'Evidence-based clinical protocol summary for management of condition variant 20',
    evidenceSource: 'AHA/ACC/IDSA Clinical Practice Guidelines 2026'
  },
  {
    guidelineId: 'GL-21',
    title: 'Clinical Practice Guideline Recommendation 21',
    specialty: 'Specialty Category 2',
    recommendationLevel: 'Class IIa',
    summary: 'Evidence-based clinical protocol summary for management of condition variant 21',
    evidenceSource: 'AHA/ACC/IDSA Clinical Practice Guidelines 2026'
  },
  {
    guidelineId: 'GL-22',
    title: 'Clinical Practice Guideline Recommendation 22',
    specialty: 'Specialty Category 3',
    recommendationLevel: 'Class I',
    summary: 'Evidence-based clinical protocol summary for management of condition variant 22',
    evidenceSource: 'AHA/ACC/IDSA Clinical Practice Guidelines 2026'
  },
  {
    guidelineId: 'GL-23',
    title: 'Clinical Practice Guideline Recommendation 23',
    specialty: 'Specialty Category 4',
    recommendationLevel: 'Class IIa',
    summary: 'Evidence-based clinical protocol summary for management of condition variant 23',
    evidenceSource: 'AHA/ACC/IDSA Clinical Practice Guidelines 2026'
  },
  {
    guidelineId: 'GL-24',
    title: 'Clinical Practice Guideline Recommendation 24',
    specialty: 'Specialty Category 5',
    recommendationLevel: 'Class I',
    summary: 'Evidence-based clinical protocol summary for management of condition variant 24',
    evidenceSource: 'AHA/ACC/IDSA Clinical Practice Guidelines 2026'
  },
  {
    guidelineId: 'GL-25',
    title: 'Clinical Practice Guideline Recommendation 25',
    specialty: 'Specialty Category 6',
    recommendationLevel: 'Class IIa',
    summary: 'Evidence-based clinical protocol summary for management of condition variant 25',
    evidenceSource: 'AHA/ACC/IDSA Clinical Practice Guidelines 2026'
  },
  {
    guidelineId: 'GL-26',
    title: 'Clinical Practice Guideline Recommendation 26',
    specialty: 'Specialty Category 7',
    recommendationLevel: 'Class I',
    summary: 'Evidence-based clinical protocol summary for management of condition variant 26',
    evidenceSource: 'AHA/ACC/IDSA Clinical Practice Guidelines 2026'
  },
  {
    guidelineId: 'GL-27',
    title: 'Clinical Practice Guideline Recommendation 27',
    specialty: 'Specialty Category 8',
    recommendationLevel: 'Class IIa',
    summary: 'Evidence-based clinical protocol summary for management of condition variant 27',
    evidenceSource: 'AHA/ACC/IDSA Clinical Practice Guidelines 2026'
  },
  {
    guidelineId: 'GL-28',
    title: 'Clinical Practice Guideline Recommendation 28',
    specialty: 'Specialty Category 9',
    recommendationLevel: 'Class I',
    summary: 'Evidence-based clinical protocol summary for management of condition variant 28',
    evidenceSource: 'AHA/ACC/IDSA Clinical Practice Guidelines 2026'
  },
  {
    guidelineId: 'GL-29',
    title: 'Clinical Practice Guideline Recommendation 29',
    specialty: 'Specialty Category 10',
    recommendationLevel: 'Class IIa',
    summary: 'Evidence-based clinical protocol summary for management of condition variant 29',
    evidenceSource: 'AHA/ACC/IDSA Clinical Practice Guidelines 2026'
  },
  {
    guidelineId: 'GL-30',
    title: 'Clinical Practice Guideline Recommendation 30',
    specialty: 'Specialty Category 1',
    recommendationLevel: 'Class I',
    summary: 'Evidence-based clinical protocol summary for management of condition variant 30',
    evidenceSource: 'AHA/ACC/IDSA Clinical Practice Guidelines 2026'
  },
  {
    guidelineId: 'GL-31',
    title: 'Clinical Practice Guideline Recommendation 31',
    specialty: 'Specialty Category 2',
    recommendationLevel: 'Class IIa',
    summary: 'Evidence-based clinical protocol summary for management of condition variant 31',
    evidenceSource: 'AHA/ACC/IDSA Clinical Practice Guidelines 2026'
  },
  {
    guidelineId: 'GL-32',
    title: 'Clinical Practice Guideline Recommendation 32',
    specialty: 'Specialty Category 3',
    recommendationLevel: 'Class I',
    summary: 'Evidence-based clinical protocol summary for management of condition variant 32',
    evidenceSource: 'AHA/ACC/IDSA Clinical Practice Guidelines 2026'
  },
  {
    guidelineId: 'GL-33',
    title: 'Clinical Practice Guideline Recommendation 33',
    specialty: 'Specialty Category 4',
    recommendationLevel: 'Class IIa',
    summary: 'Evidence-based clinical protocol summary for management of condition variant 33',
    evidenceSource: 'AHA/ACC/IDSA Clinical Practice Guidelines 2026'
  },
  {
    guidelineId: 'GL-34',
    title: 'Clinical Practice Guideline Recommendation 34',
    specialty: 'Specialty Category 5',
    recommendationLevel: 'Class I',
    summary: 'Evidence-based clinical protocol summary for management of condition variant 34',
    evidenceSource: 'AHA/ACC/IDSA Clinical Practice Guidelines 2026'
  },
  {
    guidelineId: 'GL-35',
    title: 'Clinical Practice Guideline Recommendation 35',
    specialty: 'Specialty Category 6',
    recommendationLevel: 'Class IIa',
    summary: 'Evidence-based clinical protocol summary for management of condition variant 35',
    evidenceSource: 'AHA/ACC/IDSA Clinical Practice Guidelines 2026'
  },
  {
    guidelineId: 'GL-36',
    title: 'Clinical Practice Guideline Recommendation 36',
    specialty: 'Specialty Category 7',
    recommendationLevel: 'Class I',
    summary: 'Evidence-based clinical protocol summary for management of condition variant 36',
    evidenceSource: 'AHA/ACC/IDSA Clinical Practice Guidelines 2026'
  },
  {
    guidelineId: 'GL-37',
    title: 'Clinical Practice Guideline Recommendation 37',
    specialty: 'Specialty Category 8',
    recommendationLevel: 'Class IIa',
    summary: 'Evidence-based clinical protocol summary for management of condition variant 37',
    evidenceSource: 'AHA/ACC/IDSA Clinical Practice Guidelines 2026'
  },
  {
    guidelineId: 'GL-38',
    title: 'Clinical Practice Guideline Recommendation 38',
    specialty: 'Specialty Category 9',
    recommendationLevel: 'Class I',
    summary: 'Evidence-based clinical protocol summary for management of condition variant 38',
    evidenceSource: 'AHA/ACC/IDSA Clinical Practice Guidelines 2026'
  },
  {
    guidelineId: 'GL-39',
    title: 'Clinical Practice Guideline Recommendation 39',
    specialty: 'Specialty Category 10',
    recommendationLevel: 'Class IIa',
    summary: 'Evidence-based clinical protocol summary for management of condition variant 39',
    evidenceSource: 'AHA/ACC/IDSA Clinical Practice Guidelines 2026'
  },
  {
    guidelineId: 'GL-40',
    title: 'Clinical Practice Guideline Recommendation 40',
    specialty: 'Specialty Category 1',
    recommendationLevel: 'Class I',
    summary: 'Evidence-based clinical protocol summary for management of condition variant 40',
    evidenceSource: 'AHA/ACC/IDSA Clinical Practice Guidelines 2026'
  },
  {
    guidelineId: 'GL-41',
    title: 'Clinical Practice Guideline Recommendation 41',
    specialty: 'Specialty Category 2',
    recommendationLevel: 'Class IIa',
    summary: 'Evidence-based clinical protocol summary for management of condition variant 41',
    evidenceSource: 'AHA/ACC/IDSA Clinical Practice Guidelines 2026'
  },
  {
    guidelineId: 'GL-42',
    title: 'Clinical Practice Guideline Recommendation 42',
    specialty: 'Specialty Category 3',
    recommendationLevel: 'Class I',
    summary: 'Evidence-based clinical protocol summary for management of condition variant 42',
    evidenceSource: 'AHA/ACC/IDSA Clinical Practice Guidelines 2026'
  },
  {
    guidelineId: 'GL-43',
    title: 'Clinical Practice Guideline Recommendation 43',
    specialty: 'Specialty Category 4',
    recommendationLevel: 'Class IIa',
    summary: 'Evidence-based clinical protocol summary for management of condition variant 43',
    evidenceSource: 'AHA/ACC/IDSA Clinical Practice Guidelines 2026'
  },
  {
    guidelineId: 'GL-44',
    title: 'Clinical Practice Guideline Recommendation 44',
    specialty: 'Specialty Category 5',
    recommendationLevel: 'Class I',
    summary: 'Evidence-based clinical protocol summary for management of condition variant 44',
    evidenceSource: 'AHA/ACC/IDSA Clinical Practice Guidelines 2026'
  },
  {
    guidelineId: 'GL-45',
    title: 'Clinical Practice Guideline Recommendation 45',
    specialty: 'Specialty Category 6',
    recommendationLevel: 'Class IIa',
    summary: 'Evidence-based clinical protocol summary for management of condition variant 45',
    evidenceSource: 'AHA/ACC/IDSA Clinical Practice Guidelines 2026'
  },
  {
    guidelineId: 'GL-46',
    title: 'Clinical Practice Guideline Recommendation 46',
    specialty: 'Specialty Category 7',
    recommendationLevel: 'Class I',
    summary: 'Evidence-based clinical protocol summary for management of condition variant 46',
    evidenceSource: 'AHA/ACC/IDSA Clinical Practice Guidelines 2026'
  },
  {
    guidelineId: 'GL-47',
    title: 'Clinical Practice Guideline Recommendation 47',
    specialty: 'Specialty Category 8',
    recommendationLevel: 'Class IIa',
    summary: 'Evidence-based clinical protocol summary for management of condition variant 47',
    evidenceSource: 'AHA/ACC/IDSA Clinical Practice Guidelines 2026'
  },
  {
    guidelineId: 'GL-48',
    title: 'Clinical Practice Guideline Recommendation 48',
    specialty: 'Specialty Category 9',
    recommendationLevel: 'Class I',
    summary: 'Evidence-based clinical protocol summary for management of condition variant 48',
    evidenceSource: 'AHA/ACC/IDSA Clinical Practice Guidelines 2026'
  },
  {
    guidelineId: 'GL-49',
    title: 'Clinical Practice Guideline Recommendation 49',
    specialty: 'Specialty Category 10',
    recommendationLevel: 'Class IIa',
    summary: 'Evidence-based clinical protocol summary for management of condition variant 49',
    evidenceSource: 'AHA/ACC/IDSA Clinical Practice Guidelines 2026'
  },
  {
    guidelineId: 'GL-50',
    title: 'Clinical Practice Guideline Recommendation 50',
    specialty: 'Specialty Category 1',
    recommendationLevel: 'Class I',
    summary: 'Evidence-based clinical protocol summary for management of condition variant 50',
    evidenceSource: 'AHA/ACC/IDSA Clinical Practice Guidelines 2026'
  },
  {
    guidelineId: 'GL-51',
    title: 'Clinical Practice Guideline Recommendation 51',
    specialty: 'Specialty Category 2',
    recommendationLevel: 'Class IIa',
    summary: 'Evidence-based clinical protocol summary for management of condition variant 51',
    evidenceSource: 'AHA/ACC/IDSA Clinical Practice Guidelines 2026'
  },
  {
    guidelineId: 'GL-52',
    title: 'Clinical Practice Guideline Recommendation 52',
    specialty: 'Specialty Category 3',
    recommendationLevel: 'Class I',
    summary: 'Evidence-based clinical protocol summary for management of condition variant 52',
    evidenceSource: 'AHA/ACC/IDSA Clinical Practice Guidelines 2026'
  },
  {
    guidelineId: 'GL-53',
    title: 'Clinical Practice Guideline Recommendation 53',
    specialty: 'Specialty Category 4',
    recommendationLevel: 'Class IIa',
    summary: 'Evidence-based clinical protocol summary for management of condition variant 53',
    evidenceSource: 'AHA/ACC/IDSA Clinical Practice Guidelines 2026'
  },
  {
    guidelineId: 'GL-54',
    title: 'Clinical Practice Guideline Recommendation 54',
    specialty: 'Specialty Category 5',
    recommendationLevel: 'Class I',
    summary: 'Evidence-based clinical protocol summary for management of condition variant 54',
    evidenceSource: 'AHA/ACC/IDSA Clinical Practice Guidelines 2026'
  },
  {
    guidelineId: 'GL-55',
    title: 'Clinical Practice Guideline Recommendation 55',
    specialty: 'Specialty Category 6',
    recommendationLevel: 'Class IIa',
    summary: 'Evidence-based clinical protocol summary for management of condition variant 55',
    evidenceSource: 'AHA/ACC/IDSA Clinical Practice Guidelines 2026'
  },
  {
    guidelineId: 'GL-56',
    title: 'Clinical Practice Guideline Recommendation 56',
    specialty: 'Specialty Category 7',
    recommendationLevel: 'Class I',
    summary: 'Evidence-based clinical protocol summary for management of condition variant 56',
    evidenceSource: 'AHA/ACC/IDSA Clinical Practice Guidelines 2026'
  },
  {
    guidelineId: 'GL-57',
    title: 'Clinical Practice Guideline Recommendation 57',
    specialty: 'Specialty Category 8',
    recommendationLevel: 'Class IIa',
    summary: 'Evidence-based clinical protocol summary for management of condition variant 57',
    evidenceSource: 'AHA/ACC/IDSA Clinical Practice Guidelines 2026'
  },
  {
    guidelineId: 'GL-58',
    title: 'Clinical Practice Guideline Recommendation 58',
    specialty: 'Specialty Category 9',
    recommendationLevel: 'Class I',
    summary: 'Evidence-based clinical protocol summary for management of condition variant 58',
    evidenceSource: 'AHA/ACC/IDSA Clinical Practice Guidelines 2026'
  },
  {
    guidelineId: 'GL-59',
    title: 'Clinical Practice Guideline Recommendation 59',
    specialty: 'Specialty Category 10',
    recommendationLevel: 'Class IIa',
    summary: 'Evidence-based clinical protocol summary for management of condition variant 59',
    evidenceSource: 'AHA/ACC/IDSA Clinical Practice Guidelines 2026'
  },
  {
    guidelineId: 'GL-60',
    title: 'Clinical Practice Guideline Recommendation 60',
    specialty: 'Specialty Category 1',
    recommendationLevel: 'Class I',
    summary: 'Evidence-based clinical protocol summary for management of condition variant 60',
    evidenceSource: 'AHA/ACC/IDSA Clinical Practice Guidelines 2026'
  },
  {
    guidelineId: 'GL-61',
    title: 'Clinical Practice Guideline Recommendation 61',
    specialty: 'Specialty Category 2',
    recommendationLevel: 'Class IIa',
    summary: 'Evidence-based clinical protocol summary for management of condition variant 61',
    evidenceSource: 'AHA/ACC/IDSA Clinical Practice Guidelines 2026'
  },
  {
    guidelineId: 'GL-62',
    title: 'Clinical Practice Guideline Recommendation 62',
    specialty: 'Specialty Category 3',
    recommendationLevel: 'Class I',
    summary: 'Evidence-based clinical protocol summary for management of condition variant 62',
    evidenceSource: 'AHA/ACC/IDSA Clinical Practice Guidelines 2026'
  },
  {
    guidelineId: 'GL-63',
    title: 'Clinical Practice Guideline Recommendation 63',
    specialty: 'Specialty Category 4',
    recommendationLevel: 'Class IIa',
    summary: 'Evidence-based clinical protocol summary for management of condition variant 63',
    evidenceSource: 'AHA/ACC/IDSA Clinical Practice Guidelines 2026'
  },
  {
    guidelineId: 'GL-64',
    title: 'Clinical Practice Guideline Recommendation 64',
    specialty: 'Specialty Category 5',
    recommendationLevel: 'Class I',
    summary: 'Evidence-based clinical protocol summary for management of condition variant 64',
    evidenceSource: 'AHA/ACC/IDSA Clinical Practice Guidelines 2026'
  },
  {
    guidelineId: 'GL-65',
    title: 'Clinical Practice Guideline Recommendation 65',
    specialty: 'Specialty Category 6',
    recommendationLevel: 'Class IIa',
    summary: 'Evidence-based clinical protocol summary for management of condition variant 65',
    evidenceSource: 'AHA/ACC/IDSA Clinical Practice Guidelines 2026'
  },
  {
    guidelineId: 'GL-66',
    title: 'Clinical Practice Guideline Recommendation 66',
    specialty: 'Specialty Category 7',
    recommendationLevel: 'Class I',
    summary: 'Evidence-based clinical protocol summary for management of condition variant 66',
    evidenceSource: 'AHA/ACC/IDSA Clinical Practice Guidelines 2026'
  },
  {
    guidelineId: 'GL-67',
    title: 'Clinical Practice Guideline Recommendation 67',
    specialty: 'Specialty Category 8',
    recommendationLevel: 'Class IIa',
    summary: 'Evidence-based clinical protocol summary for management of condition variant 67',
    evidenceSource: 'AHA/ACC/IDSA Clinical Practice Guidelines 2026'
  },
  {
    guidelineId: 'GL-68',
    title: 'Clinical Practice Guideline Recommendation 68',
    specialty: 'Specialty Category 9',
    recommendationLevel: 'Class I',
    summary: 'Evidence-based clinical protocol summary for management of condition variant 68',
    evidenceSource: 'AHA/ACC/IDSA Clinical Practice Guidelines 2026'
  },
  {
    guidelineId: 'GL-69',
    title: 'Clinical Practice Guideline Recommendation 69',
    specialty: 'Specialty Category 10',
    recommendationLevel: 'Class IIa',
    summary: 'Evidence-based clinical protocol summary for management of condition variant 69',
    evidenceSource: 'AHA/ACC/IDSA Clinical Practice Guidelines 2026'
  },
  {
    guidelineId: 'GL-70',
    title: 'Clinical Practice Guideline Recommendation 70',
    specialty: 'Specialty Category 1',
    recommendationLevel: 'Class I',
    summary: 'Evidence-based clinical protocol summary for management of condition variant 70',
    evidenceSource: 'AHA/ACC/IDSA Clinical Practice Guidelines 2026'
  },
  {
    guidelineId: 'GL-71',
    title: 'Clinical Practice Guideline Recommendation 71',
    specialty: 'Specialty Category 2',
    recommendationLevel: 'Class IIa',
    summary: 'Evidence-based clinical protocol summary for management of condition variant 71',
    evidenceSource: 'AHA/ACC/IDSA Clinical Practice Guidelines 2026'
  },
  {
    guidelineId: 'GL-72',
    title: 'Clinical Practice Guideline Recommendation 72',
    specialty: 'Specialty Category 3',
    recommendationLevel: 'Class I',
    summary: 'Evidence-based clinical protocol summary for management of condition variant 72',
    evidenceSource: 'AHA/ACC/IDSA Clinical Practice Guidelines 2026'
  },
  {
    guidelineId: 'GL-73',
    title: 'Clinical Practice Guideline Recommendation 73',
    specialty: 'Specialty Category 4',
    recommendationLevel: 'Class IIa',
    summary: 'Evidence-based clinical protocol summary for management of condition variant 73',
    evidenceSource: 'AHA/ACC/IDSA Clinical Practice Guidelines 2026'
  },
  {
    guidelineId: 'GL-74',
    title: 'Clinical Practice Guideline Recommendation 74',
    specialty: 'Specialty Category 5',
    recommendationLevel: 'Class I',
    summary: 'Evidence-based clinical protocol summary for management of condition variant 74',
    evidenceSource: 'AHA/ACC/IDSA Clinical Practice Guidelines 2026'
  },
  {
    guidelineId: 'GL-75',
    title: 'Clinical Practice Guideline Recommendation 75',
    specialty: 'Specialty Category 6',
    recommendationLevel: 'Class IIa',
    summary: 'Evidence-based clinical protocol summary for management of condition variant 75',
    evidenceSource: 'AHA/ACC/IDSA Clinical Practice Guidelines 2026'
  },
  {
    guidelineId: 'GL-76',
    title: 'Clinical Practice Guideline Recommendation 76',
    specialty: 'Specialty Category 7',
    recommendationLevel: 'Class I',
    summary: 'Evidence-based clinical protocol summary for management of condition variant 76',
    evidenceSource: 'AHA/ACC/IDSA Clinical Practice Guidelines 2026'
  },
  {
    guidelineId: 'GL-77',
    title: 'Clinical Practice Guideline Recommendation 77',
    specialty: 'Specialty Category 8',
    recommendationLevel: 'Class IIa',
    summary: 'Evidence-based clinical protocol summary for management of condition variant 77',
    evidenceSource: 'AHA/ACC/IDSA Clinical Practice Guidelines 2026'
  },
  {
    guidelineId: 'GL-78',
    title: 'Clinical Practice Guideline Recommendation 78',
    specialty: 'Specialty Category 9',
    recommendationLevel: 'Class I',
    summary: 'Evidence-based clinical protocol summary for management of condition variant 78',
    evidenceSource: 'AHA/ACC/IDSA Clinical Practice Guidelines 2026'
  },
  {
    guidelineId: 'GL-79',
    title: 'Clinical Practice Guideline Recommendation 79',
    specialty: 'Specialty Category 10',
    recommendationLevel: 'Class IIa',
    summary: 'Evidence-based clinical protocol summary for management of condition variant 79',
    evidenceSource: 'AHA/ACC/IDSA Clinical Practice Guidelines 2026'
  },
  {
    guidelineId: 'GL-80',
    title: 'Clinical Practice Guideline Recommendation 80',
    specialty: 'Specialty Category 1',
    recommendationLevel: 'Class I',
    summary: 'Evidence-based clinical protocol summary for management of condition variant 80',
    evidenceSource: 'AHA/ACC/IDSA Clinical Practice Guidelines 2026'
  },
  {
    guidelineId: 'GL-81',
    title: 'Clinical Practice Guideline Recommendation 81',
    specialty: 'Specialty Category 2',
    recommendationLevel: 'Class IIa',
    summary: 'Evidence-based clinical protocol summary for management of condition variant 81',
    evidenceSource: 'AHA/ACC/IDSA Clinical Practice Guidelines 2026'
  },
  {
    guidelineId: 'GL-82',
    title: 'Clinical Practice Guideline Recommendation 82',
    specialty: 'Specialty Category 3',
    recommendationLevel: 'Class I',
    summary: 'Evidence-based clinical protocol summary for management of condition variant 82',
    evidenceSource: 'AHA/ACC/IDSA Clinical Practice Guidelines 2026'
  },
  {
    guidelineId: 'GL-83',
    title: 'Clinical Practice Guideline Recommendation 83',
    specialty: 'Specialty Category 4',
    recommendationLevel: 'Class IIa',
    summary: 'Evidence-based clinical protocol summary for management of condition variant 83',
    evidenceSource: 'AHA/ACC/IDSA Clinical Practice Guidelines 2026'
  },
  {
    guidelineId: 'GL-84',
    title: 'Clinical Practice Guideline Recommendation 84',
    specialty: 'Specialty Category 5',
    recommendationLevel: 'Class I',
    summary: 'Evidence-based clinical protocol summary for management of condition variant 84',
    evidenceSource: 'AHA/ACC/IDSA Clinical Practice Guidelines 2026'
  },
  {
    guidelineId: 'GL-85',
    title: 'Clinical Practice Guideline Recommendation 85',
    specialty: 'Specialty Category 6',
    recommendationLevel: 'Class IIa',
    summary: 'Evidence-based clinical protocol summary for management of condition variant 85',
    evidenceSource: 'AHA/ACC/IDSA Clinical Practice Guidelines 2026'
  },
  {
    guidelineId: 'GL-86',
    title: 'Clinical Practice Guideline Recommendation 86',
    specialty: 'Specialty Category 7',
    recommendationLevel: 'Class I',
    summary: 'Evidence-based clinical protocol summary for management of condition variant 86',
    evidenceSource: 'AHA/ACC/IDSA Clinical Practice Guidelines 2026'
  },
  {
    guidelineId: 'GL-87',
    title: 'Clinical Practice Guideline Recommendation 87',
    specialty: 'Specialty Category 8',
    recommendationLevel: 'Class IIa',
    summary: 'Evidence-based clinical protocol summary for management of condition variant 87',
    evidenceSource: 'AHA/ACC/IDSA Clinical Practice Guidelines 2026'
  },
  {
    guidelineId: 'GL-88',
    title: 'Clinical Practice Guideline Recommendation 88',
    specialty: 'Specialty Category 9',
    recommendationLevel: 'Class I',
    summary: 'Evidence-based clinical protocol summary for management of condition variant 88',
    evidenceSource: 'AHA/ACC/IDSA Clinical Practice Guidelines 2026'
  },
  {
    guidelineId: 'GL-89',
    title: 'Clinical Practice Guideline Recommendation 89',
    specialty: 'Specialty Category 10',
    recommendationLevel: 'Class IIa',
    summary: 'Evidence-based clinical protocol summary for management of condition variant 89',
    evidenceSource: 'AHA/ACC/IDSA Clinical Practice Guidelines 2026'
  },
  {
    guidelineId: 'GL-90',
    title: 'Clinical Practice Guideline Recommendation 90',
    specialty: 'Specialty Category 1',
    recommendationLevel: 'Class I',
    summary: 'Evidence-based clinical protocol summary for management of condition variant 90',
    evidenceSource: 'AHA/ACC/IDSA Clinical Practice Guidelines 2026'
  },
  {
    guidelineId: 'GL-91',
    title: 'Clinical Practice Guideline Recommendation 91',
    specialty: 'Specialty Category 2',
    recommendationLevel: 'Class IIa',
    summary: 'Evidence-based clinical protocol summary for management of condition variant 91',
    evidenceSource: 'AHA/ACC/IDSA Clinical Practice Guidelines 2026'
  },
  {
    guidelineId: 'GL-92',
    title: 'Clinical Practice Guideline Recommendation 92',
    specialty: 'Specialty Category 3',
    recommendationLevel: 'Class I',
    summary: 'Evidence-based clinical protocol summary for management of condition variant 92',
    evidenceSource: 'AHA/ACC/IDSA Clinical Practice Guidelines 2026'
  },
  {
    guidelineId: 'GL-93',
    title: 'Clinical Practice Guideline Recommendation 93',
    specialty: 'Specialty Category 4',
    recommendationLevel: 'Class IIa',
    summary: 'Evidence-based clinical protocol summary for management of condition variant 93',
    evidenceSource: 'AHA/ACC/IDSA Clinical Practice Guidelines 2026'
  },
  {
    guidelineId: 'GL-94',
    title: 'Clinical Practice Guideline Recommendation 94',
    specialty: 'Specialty Category 5',
    recommendationLevel: 'Class I',
    summary: 'Evidence-based clinical protocol summary for management of condition variant 94',
    evidenceSource: 'AHA/ACC/IDSA Clinical Practice Guidelines 2026'
  },
  {
    guidelineId: 'GL-95',
    title: 'Clinical Practice Guideline Recommendation 95',
    specialty: 'Specialty Category 6',
    recommendationLevel: 'Class IIa',
    summary: 'Evidence-based clinical protocol summary for management of condition variant 95',
    evidenceSource: 'AHA/ACC/IDSA Clinical Practice Guidelines 2026'
  },
  {
    guidelineId: 'GL-96',
    title: 'Clinical Practice Guideline Recommendation 96',
    specialty: 'Specialty Category 7',
    recommendationLevel: 'Class I',
    summary: 'Evidence-based clinical protocol summary for management of condition variant 96',
    evidenceSource: 'AHA/ACC/IDSA Clinical Practice Guidelines 2026'
  },
  {
    guidelineId: 'GL-97',
    title: 'Clinical Practice Guideline Recommendation 97',
    specialty: 'Specialty Category 8',
    recommendationLevel: 'Class IIa',
    summary: 'Evidence-based clinical protocol summary for management of condition variant 97',
    evidenceSource: 'AHA/ACC/IDSA Clinical Practice Guidelines 2026'
  },
  {
    guidelineId: 'GL-98',
    title: 'Clinical Practice Guideline Recommendation 98',
    specialty: 'Specialty Category 9',
    recommendationLevel: 'Class I',
    summary: 'Evidence-based clinical protocol summary for management of condition variant 98',
    evidenceSource: 'AHA/ACC/IDSA Clinical Practice Guidelines 2026'
  },
  {
    guidelineId: 'GL-99',
    title: 'Clinical Practice Guideline Recommendation 99',
    specialty: 'Specialty Category 10',
    recommendationLevel: 'Class IIa',
    summary: 'Evidence-based clinical protocol summary for management of condition variant 99',
    evidenceSource: 'AHA/ACC/IDSA Clinical Practice Guidelines 2026'
  },
  {
    guidelineId: 'GL-100',
    title: 'Clinical Practice Guideline Recommendation 100',
    specialty: 'Specialty Category 1',
    recommendationLevel: 'Class I',
    summary: 'Evidence-based clinical protocol summary for management of condition variant 100',
    evidenceSource: 'AHA/ACC/IDSA Clinical Practice Guidelines 2026'
  },
  {
    guidelineId: 'GL-101',
    title: 'Clinical Practice Guideline Recommendation 101',
    specialty: 'Specialty Category 2',
    recommendationLevel: 'Class IIa',
    summary: 'Evidence-based clinical protocol summary for management of condition variant 101',
    evidenceSource: 'AHA/ACC/IDSA Clinical Practice Guidelines 2026'
  },
  {
    guidelineId: 'GL-102',
    title: 'Clinical Practice Guideline Recommendation 102',
    specialty: 'Specialty Category 3',
    recommendationLevel: 'Class I',
    summary: 'Evidence-based clinical protocol summary for management of condition variant 102',
    evidenceSource: 'AHA/ACC/IDSA Clinical Practice Guidelines 2026'
  },
  {
    guidelineId: 'GL-103',
    title: 'Clinical Practice Guideline Recommendation 103',
    specialty: 'Specialty Category 4',
    recommendationLevel: 'Class IIa',
    summary: 'Evidence-based clinical protocol summary for management of condition variant 103',
    evidenceSource: 'AHA/ACC/IDSA Clinical Practice Guidelines 2026'
  },
  {
    guidelineId: 'GL-104',
    title: 'Clinical Practice Guideline Recommendation 104',
    specialty: 'Specialty Category 5',
    recommendationLevel: 'Class I',
    summary: 'Evidence-based clinical protocol summary for management of condition variant 104',
    evidenceSource: 'AHA/ACC/IDSA Clinical Practice Guidelines 2026'
  },
  {
    guidelineId: 'GL-105',
    title: 'Clinical Practice Guideline Recommendation 105',
    specialty: 'Specialty Category 6',
    recommendationLevel: 'Class IIa',
    summary: 'Evidence-based clinical protocol summary for management of condition variant 105',
    evidenceSource: 'AHA/ACC/IDSA Clinical Practice Guidelines 2026'
  },
  {
    guidelineId: 'GL-106',
    title: 'Clinical Practice Guideline Recommendation 106',
    specialty: 'Specialty Category 7',
    recommendationLevel: 'Class I',
    summary: 'Evidence-based clinical protocol summary for management of condition variant 106',
    evidenceSource: 'AHA/ACC/IDSA Clinical Practice Guidelines 2026'
  },
  {
    guidelineId: 'GL-107',
    title: 'Clinical Practice Guideline Recommendation 107',
    specialty: 'Specialty Category 8',
    recommendationLevel: 'Class IIa',
    summary: 'Evidence-based clinical protocol summary for management of condition variant 107',
    evidenceSource: 'AHA/ACC/IDSA Clinical Practice Guidelines 2026'
  },
  {
    guidelineId: 'GL-108',
    title: 'Clinical Practice Guideline Recommendation 108',
    specialty: 'Specialty Category 9',
    recommendationLevel: 'Class I',
    summary: 'Evidence-based clinical protocol summary for management of condition variant 108',
    evidenceSource: 'AHA/ACC/IDSA Clinical Practice Guidelines 2026'
  },
  {
    guidelineId: 'GL-109',
    title: 'Clinical Practice Guideline Recommendation 109',
    specialty: 'Specialty Category 10',
    recommendationLevel: 'Class IIa',
    summary: 'Evidence-based clinical protocol summary for management of condition variant 109',
    evidenceSource: 'AHA/ACC/IDSA Clinical Practice Guidelines 2026'
  },
  {
    guidelineId: 'GL-110',
    title: 'Clinical Practice Guideline Recommendation 110',
    specialty: 'Specialty Category 1',
    recommendationLevel: 'Class I',
    summary: 'Evidence-based clinical protocol summary for management of condition variant 110',
    evidenceSource: 'AHA/ACC/IDSA Clinical Practice Guidelines 2026'
  },
  {
    guidelineId: 'GL-111',
    title: 'Clinical Practice Guideline Recommendation 111',
    specialty: 'Specialty Category 2',
    recommendationLevel: 'Class IIa',
    summary: 'Evidence-based clinical protocol summary for management of condition variant 111',
    evidenceSource: 'AHA/ACC/IDSA Clinical Practice Guidelines 2026'
  },
  {
    guidelineId: 'GL-112',
    title: 'Clinical Practice Guideline Recommendation 112',
    specialty: 'Specialty Category 3',
    recommendationLevel: 'Class I',
    summary: 'Evidence-based clinical protocol summary for management of condition variant 112',
    evidenceSource: 'AHA/ACC/IDSA Clinical Practice Guidelines 2026'
  },
  {
    guidelineId: 'GL-113',
    title: 'Clinical Practice Guideline Recommendation 113',
    specialty: 'Specialty Category 4',
    recommendationLevel: 'Class IIa',
    summary: 'Evidence-based clinical protocol summary for management of condition variant 113',
    evidenceSource: 'AHA/ACC/IDSA Clinical Practice Guidelines 2026'
  },
  {
    guidelineId: 'GL-114',
    title: 'Clinical Practice Guideline Recommendation 114',
    specialty: 'Specialty Category 5',
    recommendationLevel: 'Class I',
    summary: 'Evidence-based clinical protocol summary for management of condition variant 114',
    evidenceSource: 'AHA/ACC/IDSA Clinical Practice Guidelines 2026'
  },
  {
    guidelineId: 'GL-115',
    title: 'Clinical Practice Guideline Recommendation 115',
    specialty: 'Specialty Category 6',
    recommendationLevel: 'Class IIa',
    summary: 'Evidence-based clinical protocol summary for management of condition variant 115',
    evidenceSource: 'AHA/ACC/IDSA Clinical Practice Guidelines 2026'
  },
  {
    guidelineId: 'GL-116',
    title: 'Clinical Practice Guideline Recommendation 116',
    specialty: 'Specialty Category 7',
    recommendationLevel: 'Class I',
    summary: 'Evidence-based clinical protocol summary for management of condition variant 116',
    evidenceSource: 'AHA/ACC/IDSA Clinical Practice Guidelines 2026'
  },
  {
    guidelineId: 'GL-117',
    title: 'Clinical Practice Guideline Recommendation 117',
    specialty: 'Specialty Category 8',
    recommendationLevel: 'Class IIa',
    summary: 'Evidence-based clinical protocol summary for management of condition variant 117',
    evidenceSource: 'AHA/ACC/IDSA Clinical Practice Guidelines 2026'
  },
  {
    guidelineId: 'GL-118',
    title: 'Clinical Practice Guideline Recommendation 118',
    specialty: 'Specialty Category 9',
    recommendationLevel: 'Class I',
    summary: 'Evidence-based clinical protocol summary for management of condition variant 118',
    evidenceSource: 'AHA/ACC/IDSA Clinical Practice Guidelines 2026'
  },
  {
    guidelineId: 'GL-119',
    title: 'Clinical Practice Guideline Recommendation 119',
    specialty: 'Specialty Category 10',
    recommendationLevel: 'Class IIa',
    summary: 'Evidence-based clinical protocol summary for management of condition variant 119',
    evidenceSource: 'AHA/ACC/IDSA Clinical Practice Guidelines 2026'
  },
  {
    guidelineId: 'GL-120',
    title: 'Clinical Practice Guideline Recommendation 120',
    specialty: 'Specialty Category 1',
    recommendationLevel: 'Class I',
    summary: 'Evidence-based clinical protocol summary for management of condition variant 120',
    evidenceSource: 'AHA/ACC/IDSA Clinical Practice Guidelines 2026'
  },
  {
    guidelineId: 'GL-121',
    title: 'Clinical Practice Guideline Recommendation 121',
    specialty: 'Specialty Category 2',
    recommendationLevel: 'Class IIa',
    summary: 'Evidence-based clinical protocol summary for management of condition variant 121',
    evidenceSource: 'AHA/ACC/IDSA Clinical Practice Guidelines 2026'
  },
  {
    guidelineId: 'GL-122',
    title: 'Clinical Practice Guideline Recommendation 122',
    specialty: 'Specialty Category 3',
    recommendationLevel: 'Class I',
    summary: 'Evidence-based clinical protocol summary for management of condition variant 122',
    evidenceSource: 'AHA/ACC/IDSA Clinical Practice Guidelines 2026'
  },
  {
    guidelineId: 'GL-123',
    title: 'Clinical Practice Guideline Recommendation 123',
    specialty: 'Specialty Category 4',
    recommendationLevel: 'Class IIa',
    summary: 'Evidence-based clinical protocol summary for management of condition variant 123',
    evidenceSource: 'AHA/ACC/IDSA Clinical Practice Guidelines 2026'
  },
  {
    guidelineId: 'GL-124',
    title: 'Clinical Practice Guideline Recommendation 124',
    specialty: 'Specialty Category 5',
    recommendationLevel: 'Class I',
    summary: 'Evidence-based clinical protocol summary for management of condition variant 124',
    evidenceSource: 'AHA/ACC/IDSA Clinical Practice Guidelines 2026'
  },
  {
    guidelineId: 'GL-125',
    title: 'Clinical Practice Guideline Recommendation 125',
    specialty: 'Specialty Category 6',
    recommendationLevel: 'Class IIa',
    summary: 'Evidence-based clinical protocol summary for management of condition variant 125',
    evidenceSource: 'AHA/ACC/IDSA Clinical Practice Guidelines 2026'
  },
  {
    guidelineId: 'GL-126',
    title: 'Clinical Practice Guideline Recommendation 126',
    specialty: 'Specialty Category 7',
    recommendationLevel: 'Class I',
    summary: 'Evidence-based clinical protocol summary for management of condition variant 126',
    evidenceSource: 'AHA/ACC/IDSA Clinical Practice Guidelines 2026'
  },
  {
    guidelineId: 'GL-127',
    title: 'Clinical Practice Guideline Recommendation 127',
    specialty: 'Specialty Category 8',
    recommendationLevel: 'Class IIa',
    summary: 'Evidence-based clinical protocol summary for management of condition variant 127',
    evidenceSource: 'AHA/ACC/IDSA Clinical Practice Guidelines 2026'
  },
  {
    guidelineId: 'GL-128',
    title: 'Clinical Practice Guideline Recommendation 128',
    specialty: 'Specialty Category 9',
    recommendationLevel: 'Class I',
    summary: 'Evidence-based clinical protocol summary for management of condition variant 128',
    evidenceSource: 'AHA/ACC/IDSA Clinical Practice Guidelines 2026'
  },
  {
    guidelineId: 'GL-129',
    title: 'Clinical Practice Guideline Recommendation 129',
    specialty: 'Specialty Category 10',
    recommendationLevel: 'Class IIa',
    summary: 'Evidence-based clinical protocol summary for management of condition variant 129',
    evidenceSource: 'AHA/ACC/IDSA Clinical Practice Guidelines 2026'
  },
  {
    guidelineId: 'GL-130',
    title: 'Clinical Practice Guideline Recommendation 130',
    specialty: 'Specialty Category 1',
    recommendationLevel: 'Class I',
    summary: 'Evidence-based clinical protocol summary for management of condition variant 130',
    evidenceSource: 'AHA/ACC/IDSA Clinical Practice Guidelines 2026'
  },
  {
    guidelineId: 'GL-131',
    title: 'Clinical Practice Guideline Recommendation 131',
    specialty: 'Specialty Category 2',
    recommendationLevel: 'Class IIa',
    summary: 'Evidence-based clinical protocol summary for management of condition variant 131',
    evidenceSource: 'AHA/ACC/IDSA Clinical Practice Guidelines 2026'
  },
  {
    guidelineId: 'GL-132',
    title: 'Clinical Practice Guideline Recommendation 132',
    specialty: 'Specialty Category 3',
    recommendationLevel: 'Class I',
    summary: 'Evidence-based clinical protocol summary for management of condition variant 132',
    evidenceSource: 'AHA/ACC/IDSA Clinical Practice Guidelines 2026'
  },
  {
    guidelineId: 'GL-133',
    title: 'Clinical Practice Guideline Recommendation 133',
    specialty: 'Specialty Category 4',
    recommendationLevel: 'Class IIa',
    summary: 'Evidence-based clinical protocol summary for management of condition variant 133',
    evidenceSource: 'AHA/ACC/IDSA Clinical Practice Guidelines 2026'
  },
  {
    guidelineId: 'GL-134',
    title: 'Clinical Practice Guideline Recommendation 134',
    specialty: 'Specialty Category 5',
    recommendationLevel: 'Class I',
    summary: 'Evidence-based clinical protocol summary for management of condition variant 134',
    evidenceSource: 'AHA/ACC/IDSA Clinical Practice Guidelines 2026'
  },
  {
    guidelineId: 'GL-135',
    title: 'Clinical Practice Guideline Recommendation 135',
    specialty: 'Specialty Category 6',
    recommendationLevel: 'Class IIa',
    summary: 'Evidence-based clinical protocol summary for management of condition variant 135',
    evidenceSource: 'AHA/ACC/IDSA Clinical Practice Guidelines 2026'
  },
  {
    guidelineId: 'GL-136',
    title: 'Clinical Practice Guideline Recommendation 136',
    specialty: 'Specialty Category 7',
    recommendationLevel: 'Class I',
    summary: 'Evidence-based clinical protocol summary for management of condition variant 136',
    evidenceSource: 'AHA/ACC/IDSA Clinical Practice Guidelines 2026'
  },
  {
    guidelineId: 'GL-137',
    title: 'Clinical Practice Guideline Recommendation 137',
    specialty: 'Specialty Category 8',
    recommendationLevel: 'Class IIa',
    summary: 'Evidence-based clinical protocol summary for management of condition variant 137',
    evidenceSource: 'AHA/ACC/IDSA Clinical Practice Guidelines 2026'
  },
  {
    guidelineId: 'GL-138',
    title: 'Clinical Practice Guideline Recommendation 138',
    specialty: 'Specialty Category 9',
    recommendationLevel: 'Class I',
    summary: 'Evidence-based clinical protocol summary for management of condition variant 138',
    evidenceSource: 'AHA/ACC/IDSA Clinical Practice Guidelines 2026'
  },
  {
    guidelineId: 'GL-139',
    title: 'Clinical Practice Guideline Recommendation 139',
    specialty: 'Specialty Category 10',
    recommendationLevel: 'Class IIa',
    summary: 'Evidence-based clinical protocol summary for management of condition variant 139',
    evidenceSource: 'AHA/ACC/IDSA Clinical Practice Guidelines 2026'
  },
  {
    guidelineId: 'GL-140',
    title: 'Clinical Practice Guideline Recommendation 140',
    specialty: 'Specialty Category 1',
    recommendationLevel: 'Class I',
    summary: 'Evidence-based clinical protocol summary for management of condition variant 140',
    evidenceSource: 'AHA/ACC/IDSA Clinical Practice Guidelines 2026'
  },
  {
    guidelineId: 'GL-141',
    title: 'Clinical Practice Guideline Recommendation 141',
    specialty: 'Specialty Category 2',
    recommendationLevel: 'Class IIa',
    summary: 'Evidence-based clinical protocol summary for management of condition variant 141',
    evidenceSource: 'AHA/ACC/IDSA Clinical Practice Guidelines 2026'
  },
  {
    guidelineId: 'GL-142',
    title: 'Clinical Practice Guideline Recommendation 142',
    specialty: 'Specialty Category 3',
    recommendationLevel: 'Class I',
    summary: 'Evidence-based clinical protocol summary for management of condition variant 142',
    evidenceSource: 'AHA/ACC/IDSA Clinical Practice Guidelines 2026'
  },
  {
    guidelineId: 'GL-143',
    title: 'Clinical Practice Guideline Recommendation 143',
    specialty: 'Specialty Category 4',
    recommendationLevel: 'Class IIa',
    summary: 'Evidence-based clinical protocol summary for management of condition variant 143',
    evidenceSource: 'AHA/ACC/IDSA Clinical Practice Guidelines 2026'
  },
  {
    guidelineId: 'GL-144',
    title: 'Clinical Practice Guideline Recommendation 144',
    specialty: 'Specialty Category 5',
    recommendationLevel: 'Class I',
    summary: 'Evidence-based clinical protocol summary for management of condition variant 144',
    evidenceSource: 'AHA/ACC/IDSA Clinical Practice Guidelines 2026'
  },
  {
    guidelineId: 'GL-145',
    title: 'Clinical Practice Guideline Recommendation 145',
    specialty: 'Specialty Category 6',
    recommendationLevel: 'Class IIa',
    summary: 'Evidence-based clinical protocol summary for management of condition variant 145',
    evidenceSource: 'AHA/ACC/IDSA Clinical Practice Guidelines 2026'
  },
  {
    guidelineId: 'GL-146',
    title: 'Clinical Practice Guideline Recommendation 146',
    specialty: 'Specialty Category 7',
    recommendationLevel: 'Class I',
    summary: 'Evidence-based clinical protocol summary for management of condition variant 146',
    evidenceSource: 'AHA/ACC/IDSA Clinical Practice Guidelines 2026'
  },
  {
    guidelineId: 'GL-147',
    title: 'Clinical Practice Guideline Recommendation 147',
    specialty: 'Specialty Category 8',
    recommendationLevel: 'Class IIa',
    summary: 'Evidence-based clinical protocol summary for management of condition variant 147',
    evidenceSource: 'AHA/ACC/IDSA Clinical Practice Guidelines 2026'
  },
  {
    guidelineId: 'GL-148',
    title: 'Clinical Practice Guideline Recommendation 148',
    specialty: 'Specialty Category 9',
    recommendationLevel: 'Class I',
    summary: 'Evidence-based clinical protocol summary for management of condition variant 148',
    evidenceSource: 'AHA/ACC/IDSA Clinical Practice Guidelines 2026'
  },
  {
    guidelineId: 'GL-149',
    title: 'Clinical Practice Guideline Recommendation 149',
    specialty: 'Specialty Category 10',
    recommendationLevel: 'Class IIa',
    summary: 'Evidence-based clinical protocol summary for management of condition variant 149',
    evidenceSource: 'AHA/ACC/IDSA Clinical Practice Guidelines 2026'
  },
  {
    guidelineId: 'GL-150',
    title: 'Clinical Practice Guideline Recommendation 150',
    specialty: 'Specialty Category 1',
    recommendationLevel: 'Class I',
    summary: 'Evidence-based clinical protocol summary for management of condition variant 150',
    evidenceSource: 'AHA/ACC/IDSA Clinical Practice Guidelines 2026'
  },
  {
    guidelineId: 'GL-151',
    title: 'Clinical Practice Guideline Recommendation 151',
    specialty: 'Specialty Category 2',
    recommendationLevel: 'Class IIa',
    summary: 'Evidence-based clinical protocol summary for management of condition variant 151',
    evidenceSource: 'AHA/ACC/IDSA Clinical Practice Guidelines 2026'
  },
  {
    guidelineId: 'GL-152',
    title: 'Clinical Practice Guideline Recommendation 152',
    specialty: 'Specialty Category 3',
    recommendationLevel: 'Class I',
    summary: 'Evidence-based clinical protocol summary for management of condition variant 152',
    evidenceSource: 'AHA/ACC/IDSA Clinical Practice Guidelines 2026'
  },
  {
    guidelineId: 'GL-153',
    title: 'Clinical Practice Guideline Recommendation 153',
    specialty: 'Specialty Category 4',
    recommendationLevel: 'Class IIa',
    summary: 'Evidence-based clinical protocol summary for management of condition variant 153',
    evidenceSource: 'AHA/ACC/IDSA Clinical Practice Guidelines 2026'
  },
  {
    guidelineId: 'GL-154',
    title: 'Clinical Practice Guideline Recommendation 154',
    specialty: 'Specialty Category 5',
    recommendationLevel: 'Class I',
    summary: 'Evidence-based clinical protocol summary for management of condition variant 154',
    evidenceSource: 'AHA/ACC/IDSA Clinical Practice Guidelines 2026'
  },
  {
    guidelineId: 'GL-155',
    title: 'Clinical Practice Guideline Recommendation 155',
    specialty: 'Specialty Category 6',
    recommendationLevel: 'Class IIa',
    summary: 'Evidence-based clinical protocol summary for management of condition variant 155',
    evidenceSource: 'AHA/ACC/IDSA Clinical Practice Guidelines 2026'
  },
  {
    guidelineId: 'GL-156',
    title: 'Clinical Practice Guideline Recommendation 156',
    specialty: 'Specialty Category 7',
    recommendationLevel: 'Class I',
    summary: 'Evidence-based clinical protocol summary for management of condition variant 156',
    evidenceSource: 'AHA/ACC/IDSA Clinical Practice Guidelines 2026'
  },
  {
    guidelineId: 'GL-157',
    title: 'Clinical Practice Guideline Recommendation 157',
    specialty: 'Specialty Category 8',
    recommendationLevel: 'Class IIa',
    summary: 'Evidence-based clinical protocol summary for management of condition variant 157',
    evidenceSource: 'AHA/ACC/IDSA Clinical Practice Guidelines 2026'
  },
  {
    guidelineId: 'GL-158',
    title: 'Clinical Practice Guideline Recommendation 158',
    specialty: 'Specialty Category 9',
    recommendationLevel: 'Class I',
    summary: 'Evidence-based clinical protocol summary for management of condition variant 158',
    evidenceSource: 'AHA/ACC/IDSA Clinical Practice Guidelines 2026'
  },
  {
    guidelineId: 'GL-159',
    title: 'Clinical Practice Guideline Recommendation 159',
    specialty: 'Specialty Category 10',
    recommendationLevel: 'Class IIa',
    summary: 'Evidence-based clinical protocol summary for management of condition variant 159',
    evidenceSource: 'AHA/ACC/IDSA Clinical Practice Guidelines 2026'
  },
  {
    guidelineId: 'GL-160',
    title: 'Clinical Practice Guideline Recommendation 160',
    specialty: 'Specialty Category 1',
    recommendationLevel: 'Class I',
    summary: 'Evidence-based clinical protocol summary for management of condition variant 160',
    evidenceSource: 'AHA/ACC/IDSA Clinical Practice Guidelines 2026'
  },
  {
    guidelineId: 'GL-161',
    title: 'Clinical Practice Guideline Recommendation 161',
    specialty: 'Specialty Category 2',
    recommendationLevel: 'Class IIa',
    summary: 'Evidence-based clinical protocol summary for management of condition variant 161',
    evidenceSource: 'AHA/ACC/IDSA Clinical Practice Guidelines 2026'
  },
  {
    guidelineId: 'GL-162',
    title: 'Clinical Practice Guideline Recommendation 162',
    specialty: 'Specialty Category 3',
    recommendationLevel: 'Class I',
    summary: 'Evidence-based clinical protocol summary for management of condition variant 162',
    evidenceSource: 'AHA/ACC/IDSA Clinical Practice Guidelines 2026'
  },
  {
    guidelineId: 'GL-163',
    title: 'Clinical Practice Guideline Recommendation 163',
    specialty: 'Specialty Category 4',
    recommendationLevel: 'Class IIa',
    summary: 'Evidence-based clinical protocol summary for management of condition variant 163',
    evidenceSource: 'AHA/ACC/IDSA Clinical Practice Guidelines 2026'
  },
  {
    guidelineId: 'GL-164',
    title: 'Clinical Practice Guideline Recommendation 164',
    specialty: 'Specialty Category 5',
    recommendationLevel: 'Class I',
    summary: 'Evidence-based clinical protocol summary for management of condition variant 164',
    evidenceSource: 'AHA/ACC/IDSA Clinical Practice Guidelines 2026'
  },
  {
    guidelineId: 'GL-165',
    title: 'Clinical Practice Guideline Recommendation 165',
    specialty: 'Specialty Category 6',
    recommendationLevel: 'Class IIa',
    summary: 'Evidence-based clinical protocol summary for management of condition variant 165',
    evidenceSource: 'AHA/ACC/IDSA Clinical Practice Guidelines 2026'
  },
  {
    guidelineId: 'GL-166',
    title: 'Clinical Practice Guideline Recommendation 166',
    specialty: 'Specialty Category 7',
    recommendationLevel: 'Class I',
    summary: 'Evidence-based clinical protocol summary for management of condition variant 166',
    evidenceSource: 'AHA/ACC/IDSA Clinical Practice Guidelines 2026'
  },
  {
    guidelineId: 'GL-167',
    title: 'Clinical Practice Guideline Recommendation 167',
    specialty: 'Specialty Category 8',
    recommendationLevel: 'Class IIa',
    summary: 'Evidence-based clinical protocol summary for management of condition variant 167',
    evidenceSource: 'AHA/ACC/IDSA Clinical Practice Guidelines 2026'
  },
  {
    guidelineId: 'GL-168',
    title: 'Clinical Practice Guideline Recommendation 168',
    specialty: 'Specialty Category 9',
    recommendationLevel: 'Class I',
    summary: 'Evidence-based clinical protocol summary for management of condition variant 168',
    evidenceSource: 'AHA/ACC/IDSA Clinical Practice Guidelines 2026'
  },
  {
    guidelineId: 'GL-169',
    title: 'Clinical Practice Guideline Recommendation 169',
    specialty: 'Specialty Category 10',
    recommendationLevel: 'Class IIa',
    summary: 'Evidence-based clinical protocol summary for management of condition variant 169',
    evidenceSource: 'AHA/ACC/IDSA Clinical Practice Guidelines 2026'
  },
  {
    guidelineId: 'GL-170',
    title: 'Clinical Practice Guideline Recommendation 170',
    specialty: 'Specialty Category 1',
    recommendationLevel: 'Class I',
    summary: 'Evidence-based clinical protocol summary for management of condition variant 170',
    evidenceSource: 'AHA/ACC/IDSA Clinical Practice Guidelines 2026'
  },
  {
    guidelineId: 'GL-171',
    title: 'Clinical Practice Guideline Recommendation 171',
    specialty: 'Specialty Category 2',
    recommendationLevel: 'Class IIa',
    summary: 'Evidence-based clinical protocol summary for management of condition variant 171',
    evidenceSource: 'AHA/ACC/IDSA Clinical Practice Guidelines 2026'
  },
  {
    guidelineId: 'GL-172',
    title: 'Clinical Practice Guideline Recommendation 172',
    specialty: 'Specialty Category 3',
    recommendationLevel: 'Class I',
    summary: 'Evidence-based clinical protocol summary for management of condition variant 172',
    evidenceSource: 'AHA/ACC/IDSA Clinical Practice Guidelines 2026'
  },
  {
    guidelineId: 'GL-173',
    title: 'Clinical Practice Guideline Recommendation 173',
    specialty: 'Specialty Category 4',
    recommendationLevel: 'Class IIa',
    summary: 'Evidence-based clinical protocol summary for management of condition variant 173',
    evidenceSource: 'AHA/ACC/IDSA Clinical Practice Guidelines 2026'
  },
  {
    guidelineId: 'GL-174',
    title: 'Clinical Practice Guideline Recommendation 174',
    specialty: 'Specialty Category 5',
    recommendationLevel: 'Class I',
    summary: 'Evidence-based clinical protocol summary for management of condition variant 174',
    evidenceSource: 'AHA/ACC/IDSA Clinical Practice Guidelines 2026'
  },
  {
    guidelineId: 'GL-175',
    title: 'Clinical Practice Guideline Recommendation 175',
    specialty: 'Specialty Category 6',
    recommendationLevel: 'Class IIa',
    summary: 'Evidence-based clinical protocol summary for management of condition variant 175',
    evidenceSource: 'AHA/ACC/IDSA Clinical Practice Guidelines 2026'
  },
  {
    guidelineId: 'GL-176',
    title: 'Clinical Practice Guideline Recommendation 176',
    specialty: 'Specialty Category 7',
    recommendationLevel: 'Class I',
    summary: 'Evidence-based clinical protocol summary for management of condition variant 176',
    evidenceSource: 'AHA/ACC/IDSA Clinical Practice Guidelines 2026'
  },
  {
    guidelineId: 'GL-177',
    title: 'Clinical Practice Guideline Recommendation 177',
    specialty: 'Specialty Category 8',
    recommendationLevel: 'Class IIa',
    summary: 'Evidence-based clinical protocol summary for management of condition variant 177',
    evidenceSource: 'AHA/ACC/IDSA Clinical Practice Guidelines 2026'
  },
  {
    guidelineId: 'GL-178',
    title: 'Clinical Practice Guideline Recommendation 178',
    specialty: 'Specialty Category 9',
    recommendationLevel: 'Class I',
    summary: 'Evidence-based clinical protocol summary for management of condition variant 178',
    evidenceSource: 'AHA/ACC/IDSA Clinical Practice Guidelines 2026'
  },
  {
    guidelineId: 'GL-179',
    title: 'Clinical Practice Guideline Recommendation 179',
    specialty: 'Specialty Category 10',
    recommendationLevel: 'Class IIa',
    summary: 'Evidence-based clinical protocol summary for management of condition variant 179',
    evidenceSource: 'AHA/ACC/IDSA Clinical Practice Guidelines 2026'
  },
  {
    guidelineId: 'GL-180',
    title: 'Clinical Practice Guideline Recommendation 180',
    specialty: 'Specialty Category 1',
    recommendationLevel: 'Class I',
    summary: 'Evidence-based clinical protocol summary for management of condition variant 180',
    evidenceSource: 'AHA/ACC/IDSA Clinical Practice Guidelines 2026'
  },
  {
    guidelineId: 'GL-181',
    title: 'Clinical Practice Guideline Recommendation 181',
    specialty: 'Specialty Category 2',
    recommendationLevel: 'Class IIa',
    summary: 'Evidence-based clinical protocol summary for management of condition variant 181',
    evidenceSource: 'AHA/ACC/IDSA Clinical Practice Guidelines 2026'
  },
  {
    guidelineId: 'GL-182',
    title: 'Clinical Practice Guideline Recommendation 182',
    specialty: 'Specialty Category 3',
    recommendationLevel: 'Class I',
    summary: 'Evidence-based clinical protocol summary for management of condition variant 182',
    evidenceSource: 'AHA/ACC/IDSA Clinical Practice Guidelines 2026'
  },
  {
    guidelineId: 'GL-183',
    title: 'Clinical Practice Guideline Recommendation 183',
    specialty: 'Specialty Category 4',
    recommendationLevel: 'Class IIa',
    summary: 'Evidence-based clinical protocol summary for management of condition variant 183',
    evidenceSource: 'AHA/ACC/IDSA Clinical Practice Guidelines 2026'
  },
  {
    guidelineId: 'GL-184',
    title: 'Clinical Practice Guideline Recommendation 184',
    specialty: 'Specialty Category 5',
    recommendationLevel: 'Class I',
    summary: 'Evidence-based clinical protocol summary for management of condition variant 184',
    evidenceSource: 'AHA/ACC/IDSA Clinical Practice Guidelines 2026'
  },
  {
    guidelineId: 'GL-185',
    title: 'Clinical Practice Guideline Recommendation 185',
    specialty: 'Specialty Category 6',
    recommendationLevel: 'Class IIa',
    summary: 'Evidence-based clinical protocol summary for management of condition variant 185',
    evidenceSource: 'AHA/ACC/IDSA Clinical Practice Guidelines 2026'
  },
  {
    guidelineId: 'GL-186',
    title: 'Clinical Practice Guideline Recommendation 186',
    specialty: 'Specialty Category 7',
    recommendationLevel: 'Class I',
    summary: 'Evidence-based clinical protocol summary for management of condition variant 186',
    evidenceSource: 'AHA/ACC/IDSA Clinical Practice Guidelines 2026'
  },
  {
    guidelineId: 'GL-187',
    title: 'Clinical Practice Guideline Recommendation 187',
    specialty: 'Specialty Category 8',
    recommendationLevel: 'Class IIa',
    summary: 'Evidence-based clinical protocol summary for management of condition variant 187',
    evidenceSource: 'AHA/ACC/IDSA Clinical Practice Guidelines 2026'
  },
  {
    guidelineId: 'GL-188',
    title: 'Clinical Practice Guideline Recommendation 188',
    specialty: 'Specialty Category 9',
    recommendationLevel: 'Class I',
    summary: 'Evidence-based clinical protocol summary for management of condition variant 188',
    evidenceSource: 'AHA/ACC/IDSA Clinical Practice Guidelines 2026'
  },
  {
    guidelineId: 'GL-189',
    title: 'Clinical Practice Guideline Recommendation 189',
    specialty: 'Specialty Category 10',
    recommendationLevel: 'Class IIa',
    summary: 'Evidence-based clinical protocol summary for management of condition variant 189',
    evidenceSource: 'AHA/ACC/IDSA Clinical Practice Guidelines 2026'
  },
  {
    guidelineId: 'GL-190',
    title: 'Clinical Practice Guideline Recommendation 190',
    specialty: 'Specialty Category 1',
    recommendationLevel: 'Class I',
    summary: 'Evidence-based clinical protocol summary for management of condition variant 190',
    evidenceSource: 'AHA/ACC/IDSA Clinical Practice Guidelines 2026'
  },
  {
    guidelineId: 'GL-191',
    title: 'Clinical Practice Guideline Recommendation 191',
    specialty: 'Specialty Category 2',
    recommendationLevel: 'Class IIa',
    summary: 'Evidence-based clinical protocol summary for management of condition variant 191',
    evidenceSource: 'AHA/ACC/IDSA Clinical Practice Guidelines 2026'
  },
  {
    guidelineId: 'GL-192',
    title: 'Clinical Practice Guideline Recommendation 192',
    specialty: 'Specialty Category 3',
    recommendationLevel: 'Class I',
    summary: 'Evidence-based clinical protocol summary for management of condition variant 192',
    evidenceSource: 'AHA/ACC/IDSA Clinical Practice Guidelines 2026'
  },
  {
    guidelineId: 'GL-193',
    title: 'Clinical Practice Guideline Recommendation 193',
    specialty: 'Specialty Category 4',
    recommendationLevel: 'Class IIa',
    summary: 'Evidence-based clinical protocol summary for management of condition variant 193',
    evidenceSource: 'AHA/ACC/IDSA Clinical Practice Guidelines 2026'
  },
  {
    guidelineId: 'GL-194',
    title: 'Clinical Practice Guideline Recommendation 194',
    specialty: 'Specialty Category 5',
    recommendationLevel: 'Class I',
    summary: 'Evidence-based clinical protocol summary for management of condition variant 194',
    evidenceSource: 'AHA/ACC/IDSA Clinical Practice Guidelines 2026'
  },
  {
    guidelineId: 'GL-195',
    title: 'Clinical Practice Guideline Recommendation 195',
    specialty: 'Specialty Category 6',
    recommendationLevel: 'Class IIa',
    summary: 'Evidence-based clinical protocol summary for management of condition variant 195',
    evidenceSource: 'AHA/ACC/IDSA Clinical Practice Guidelines 2026'
  },
  {
    guidelineId: 'GL-196',
    title: 'Clinical Practice Guideline Recommendation 196',
    specialty: 'Specialty Category 7',
    recommendationLevel: 'Class I',
    summary: 'Evidence-based clinical protocol summary for management of condition variant 196',
    evidenceSource: 'AHA/ACC/IDSA Clinical Practice Guidelines 2026'
  },
  {
    guidelineId: 'GL-197',
    title: 'Clinical Practice Guideline Recommendation 197',
    specialty: 'Specialty Category 8',
    recommendationLevel: 'Class IIa',
    summary: 'Evidence-based clinical protocol summary for management of condition variant 197',
    evidenceSource: 'AHA/ACC/IDSA Clinical Practice Guidelines 2026'
  },
  {
    guidelineId: 'GL-198',
    title: 'Clinical Practice Guideline Recommendation 198',
    specialty: 'Specialty Category 9',
    recommendationLevel: 'Class I',
    summary: 'Evidence-based clinical protocol summary for management of condition variant 198',
    evidenceSource: 'AHA/ACC/IDSA Clinical Practice Guidelines 2026'
  },
  {
    guidelineId: 'GL-199',
    title: 'Clinical Practice Guideline Recommendation 199',
    specialty: 'Specialty Category 10',
    recommendationLevel: 'Class IIa',
    summary: 'Evidence-based clinical protocol summary for management of condition variant 199',
    evidenceSource: 'AHA/ACC/IDSA Clinical Practice Guidelines 2026'
  },
  {
    guidelineId: 'GL-200',
    title: 'Clinical Practice Guideline Recommendation 200',
    specialty: 'Specialty Category 1',
    recommendationLevel: 'Class I',
    summary: 'Evidence-based clinical protocol summary for management of condition variant 200',
    evidenceSource: 'AHA/ACC/IDSA Clinical Practice Guidelines 2026'
  },
  {
    guidelineId: 'GL-201',
    title: 'Clinical Practice Guideline Recommendation 201',
    specialty: 'Specialty Category 2',
    recommendationLevel: 'Class IIa',
    summary: 'Evidence-based clinical protocol summary for management of condition variant 201',
    evidenceSource: 'AHA/ACC/IDSA Clinical Practice Guidelines 2026'
  },
  {
    guidelineId: 'GL-202',
    title: 'Clinical Practice Guideline Recommendation 202',
    specialty: 'Specialty Category 3',
    recommendationLevel: 'Class I',
    summary: 'Evidence-based clinical protocol summary for management of condition variant 202',
    evidenceSource: 'AHA/ACC/IDSA Clinical Practice Guidelines 2026'
  },
  {
    guidelineId: 'GL-203',
    title: 'Clinical Practice Guideline Recommendation 203',
    specialty: 'Specialty Category 4',
    recommendationLevel: 'Class IIa',
    summary: 'Evidence-based clinical protocol summary for management of condition variant 203',
    evidenceSource: 'AHA/ACC/IDSA Clinical Practice Guidelines 2026'
  },
  {
    guidelineId: 'GL-204',
    title: 'Clinical Practice Guideline Recommendation 204',
    specialty: 'Specialty Category 5',
    recommendationLevel: 'Class I',
    summary: 'Evidence-based clinical protocol summary for management of condition variant 204',
    evidenceSource: 'AHA/ACC/IDSA Clinical Practice Guidelines 2026'
  },
  {
    guidelineId: 'GL-205',
    title: 'Clinical Practice Guideline Recommendation 205',
    specialty: 'Specialty Category 6',
    recommendationLevel: 'Class IIa',
    summary: 'Evidence-based clinical protocol summary for management of condition variant 205',
    evidenceSource: 'AHA/ACC/IDSA Clinical Practice Guidelines 2026'
  },
  {
    guidelineId: 'GL-206',
    title: 'Clinical Practice Guideline Recommendation 206',
    specialty: 'Specialty Category 7',
    recommendationLevel: 'Class I',
    summary: 'Evidence-based clinical protocol summary for management of condition variant 206',
    evidenceSource: 'AHA/ACC/IDSA Clinical Practice Guidelines 2026'
  },
  {
    guidelineId: 'GL-207',
    title: 'Clinical Practice Guideline Recommendation 207',
    specialty: 'Specialty Category 8',
    recommendationLevel: 'Class IIa',
    summary: 'Evidence-based clinical protocol summary for management of condition variant 207',
    evidenceSource: 'AHA/ACC/IDSA Clinical Practice Guidelines 2026'
  },
  {
    guidelineId: 'GL-208',
    title: 'Clinical Practice Guideline Recommendation 208',
    specialty: 'Specialty Category 9',
    recommendationLevel: 'Class I',
    summary: 'Evidence-based clinical protocol summary for management of condition variant 208',
    evidenceSource: 'AHA/ACC/IDSA Clinical Practice Guidelines 2026'
  },
  {
    guidelineId: 'GL-209',
    title: 'Clinical Practice Guideline Recommendation 209',
    specialty: 'Specialty Category 10',
    recommendationLevel: 'Class IIa',
    summary: 'Evidence-based clinical protocol summary for management of condition variant 209',
    evidenceSource: 'AHA/ACC/IDSA Clinical Practice Guidelines 2026'
  },
  {
    guidelineId: 'GL-210',
    title: 'Clinical Practice Guideline Recommendation 210',
    specialty: 'Specialty Category 1',
    recommendationLevel: 'Class I',
    summary: 'Evidence-based clinical protocol summary for management of condition variant 210',
    evidenceSource: 'AHA/ACC/IDSA Clinical Practice Guidelines 2026'
  },
  {
    guidelineId: 'GL-211',
    title: 'Clinical Practice Guideline Recommendation 211',
    specialty: 'Specialty Category 2',
    recommendationLevel: 'Class IIa',
    summary: 'Evidence-based clinical protocol summary for management of condition variant 211',
    evidenceSource: 'AHA/ACC/IDSA Clinical Practice Guidelines 2026'
  },
  {
    guidelineId: 'GL-212',
    title: 'Clinical Practice Guideline Recommendation 212',
    specialty: 'Specialty Category 3',
    recommendationLevel: 'Class I',
    summary: 'Evidence-based clinical protocol summary for management of condition variant 212',
    evidenceSource: 'AHA/ACC/IDSA Clinical Practice Guidelines 2026'
  },
  {
    guidelineId: 'GL-213',
    title: 'Clinical Practice Guideline Recommendation 213',
    specialty: 'Specialty Category 4',
    recommendationLevel: 'Class IIa',
    summary: 'Evidence-based clinical protocol summary for management of condition variant 213',
    evidenceSource: 'AHA/ACC/IDSA Clinical Practice Guidelines 2026'
  },
  {
    guidelineId: 'GL-214',
    title: 'Clinical Practice Guideline Recommendation 214',
    specialty: 'Specialty Category 5',
    recommendationLevel: 'Class I',
    summary: 'Evidence-based clinical protocol summary for management of condition variant 214',
    evidenceSource: 'AHA/ACC/IDSA Clinical Practice Guidelines 2026'
  },
  {
    guidelineId: 'GL-215',
    title: 'Clinical Practice Guideline Recommendation 215',
    specialty: 'Specialty Category 6',
    recommendationLevel: 'Class IIa',
    summary: 'Evidence-based clinical protocol summary for management of condition variant 215',
    evidenceSource: 'AHA/ACC/IDSA Clinical Practice Guidelines 2026'
  },
  {
    guidelineId: 'GL-216',
    title: 'Clinical Practice Guideline Recommendation 216',
    specialty: 'Specialty Category 7',
    recommendationLevel: 'Class I',
    summary: 'Evidence-based clinical protocol summary for management of condition variant 216',
    evidenceSource: 'AHA/ACC/IDSA Clinical Practice Guidelines 2026'
  },
  {
    guidelineId: 'GL-217',
    title: 'Clinical Practice Guideline Recommendation 217',
    specialty: 'Specialty Category 8',
    recommendationLevel: 'Class IIa',
    summary: 'Evidence-based clinical protocol summary for management of condition variant 217',
    evidenceSource: 'AHA/ACC/IDSA Clinical Practice Guidelines 2026'
  },
  {
    guidelineId: 'GL-218',
    title: 'Clinical Practice Guideline Recommendation 218',
    specialty: 'Specialty Category 9',
    recommendationLevel: 'Class I',
    summary: 'Evidence-based clinical protocol summary for management of condition variant 218',
    evidenceSource: 'AHA/ACC/IDSA Clinical Practice Guidelines 2026'
  },
  {
    guidelineId: 'GL-219',
    title: 'Clinical Practice Guideline Recommendation 219',
    specialty: 'Specialty Category 10',
    recommendationLevel: 'Class IIa',
    summary: 'Evidence-based clinical protocol summary for management of condition variant 219',
    evidenceSource: 'AHA/ACC/IDSA Clinical Practice Guidelines 2026'
  },
  {
    guidelineId: 'GL-220',
    title: 'Clinical Practice Guideline Recommendation 220',
    specialty: 'Specialty Category 1',
    recommendationLevel: 'Class I',
    summary: 'Evidence-based clinical protocol summary for management of condition variant 220',
    evidenceSource: 'AHA/ACC/IDSA Clinical Practice Guidelines 2026'
  },
  {
    guidelineId: 'GL-221',
    title: 'Clinical Practice Guideline Recommendation 221',
    specialty: 'Specialty Category 2',
    recommendationLevel: 'Class IIa',
    summary: 'Evidence-based clinical protocol summary for management of condition variant 221',
    evidenceSource: 'AHA/ACC/IDSA Clinical Practice Guidelines 2026'
  },
  {
    guidelineId: 'GL-222',
    title: 'Clinical Practice Guideline Recommendation 222',
    specialty: 'Specialty Category 3',
    recommendationLevel: 'Class I',
    summary: 'Evidence-based clinical protocol summary for management of condition variant 222',
    evidenceSource: 'AHA/ACC/IDSA Clinical Practice Guidelines 2026'
  },
  {
    guidelineId: 'GL-223',
    title: 'Clinical Practice Guideline Recommendation 223',
    specialty: 'Specialty Category 4',
    recommendationLevel: 'Class IIa',
    summary: 'Evidence-based clinical protocol summary for management of condition variant 223',
    evidenceSource: 'AHA/ACC/IDSA Clinical Practice Guidelines 2026'
  },
  {
    guidelineId: 'GL-224',
    title: 'Clinical Practice Guideline Recommendation 224',
    specialty: 'Specialty Category 5',
    recommendationLevel: 'Class I',
    summary: 'Evidence-based clinical protocol summary for management of condition variant 224',
    evidenceSource: 'AHA/ACC/IDSA Clinical Practice Guidelines 2026'
  },
  {
    guidelineId: 'GL-225',
    title: 'Clinical Practice Guideline Recommendation 225',
    specialty: 'Specialty Category 6',
    recommendationLevel: 'Class IIa',
    summary: 'Evidence-based clinical protocol summary for management of condition variant 225',
    evidenceSource: 'AHA/ACC/IDSA Clinical Practice Guidelines 2026'
  },
  {
    guidelineId: 'GL-226',
    title: 'Clinical Practice Guideline Recommendation 226',
    specialty: 'Specialty Category 7',
    recommendationLevel: 'Class I',
    summary: 'Evidence-based clinical protocol summary for management of condition variant 226',
    evidenceSource: 'AHA/ACC/IDSA Clinical Practice Guidelines 2026'
  },
  {
    guidelineId: 'GL-227',
    title: 'Clinical Practice Guideline Recommendation 227',
    specialty: 'Specialty Category 8',
    recommendationLevel: 'Class IIa',
    summary: 'Evidence-based clinical protocol summary for management of condition variant 227',
    evidenceSource: 'AHA/ACC/IDSA Clinical Practice Guidelines 2026'
  },
  {
    guidelineId: 'GL-228',
    title: 'Clinical Practice Guideline Recommendation 228',
    specialty: 'Specialty Category 9',
    recommendationLevel: 'Class I',
    summary: 'Evidence-based clinical protocol summary for management of condition variant 228',
    evidenceSource: 'AHA/ACC/IDSA Clinical Practice Guidelines 2026'
  },
  {
    guidelineId: 'GL-229',
    title: 'Clinical Practice Guideline Recommendation 229',
    specialty: 'Specialty Category 10',
    recommendationLevel: 'Class IIa',
    summary: 'Evidence-based clinical protocol summary for management of condition variant 229',
    evidenceSource: 'AHA/ACC/IDSA Clinical Practice Guidelines 2026'
  },
  {
    guidelineId: 'GL-230',
    title: 'Clinical Practice Guideline Recommendation 230',
    specialty: 'Specialty Category 1',
    recommendationLevel: 'Class I',
    summary: 'Evidence-based clinical protocol summary for management of condition variant 230',
    evidenceSource: 'AHA/ACC/IDSA Clinical Practice Guidelines 2026'
  },
  {
    guidelineId: 'GL-231',
    title: 'Clinical Practice Guideline Recommendation 231',
    specialty: 'Specialty Category 2',
    recommendationLevel: 'Class IIa',
    summary: 'Evidence-based clinical protocol summary for management of condition variant 231',
    evidenceSource: 'AHA/ACC/IDSA Clinical Practice Guidelines 2026'
  },
  {
    guidelineId: 'GL-232',
    title: 'Clinical Practice Guideline Recommendation 232',
    specialty: 'Specialty Category 3',
    recommendationLevel: 'Class I',
    summary: 'Evidence-based clinical protocol summary for management of condition variant 232',
    evidenceSource: 'AHA/ACC/IDSA Clinical Practice Guidelines 2026'
  },
  {
    guidelineId: 'GL-233',
    title: 'Clinical Practice Guideline Recommendation 233',
    specialty: 'Specialty Category 4',
    recommendationLevel: 'Class IIa',
    summary: 'Evidence-based clinical protocol summary for management of condition variant 233',
    evidenceSource: 'AHA/ACC/IDSA Clinical Practice Guidelines 2026'
  },
  {
    guidelineId: 'GL-234',
    title: 'Clinical Practice Guideline Recommendation 234',
    specialty: 'Specialty Category 5',
    recommendationLevel: 'Class I',
    summary: 'Evidence-based clinical protocol summary for management of condition variant 234',
    evidenceSource: 'AHA/ACC/IDSA Clinical Practice Guidelines 2026'
  },
  {
    guidelineId: 'GL-235',
    title: 'Clinical Practice Guideline Recommendation 235',
    specialty: 'Specialty Category 6',
    recommendationLevel: 'Class IIa',
    summary: 'Evidence-based clinical protocol summary for management of condition variant 235',
    evidenceSource: 'AHA/ACC/IDSA Clinical Practice Guidelines 2026'
  },
  {
    guidelineId: 'GL-236',
    title: 'Clinical Practice Guideline Recommendation 236',
    specialty: 'Specialty Category 7',
    recommendationLevel: 'Class I',
    summary: 'Evidence-based clinical protocol summary for management of condition variant 236',
    evidenceSource: 'AHA/ACC/IDSA Clinical Practice Guidelines 2026'
  },
  {
    guidelineId: 'GL-237',
    title: 'Clinical Practice Guideline Recommendation 237',
    specialty: 'Specialty Category 8',
    recommendationLevel: 'Class IIa',
    summary: 'Evidence-based clinical protocol summary for management of condition variant 237',
    evidenceSource: 'AHA/ACC/IDSA Clinical Practice Guidelines 2026'
  },
  {
    guidelineId: 'GL-238',
    title: 'Clinical Practice Guideline Recommendation 238',
    specialty: 'Specialty Category 9',
    recommendationLevel: 'Class I',
    summary: 'Evidence-based clinical protocol summary for management of condition variant 238',
    evidenceSource: 'AHA/ACC/IDSA Clinical Practice Guidelines 2026'
  },
  {
    guidelineId: 'GL-239',
    title: 'Clinical Practice Guideline Recommendation 239',
    specialty: 'Specialty Category 10',
    recommendationLevel: 'Class IIa',
    summary: 'Evidence-based clinical protocol summary for management of condition variant 239',
    evidenceSource: 'AHA/ACC/IDSA Clinical Practice Guidelines 2026'
  },
  {
    guidelineId: 'GL-240',
    title: 'Clinical Practice Guideline Recommendation 240',
    specialty: 'Specialty Category 1',
    recommendationLevel: 'Class I',
    summary: 'Evidence-based clinical protocol summary for management of condition variant 240',
    evidenceSource: 'AHA/ACC/IDSA Clinical Practice Guidelines 2026'
  },
  {
    guidelineId: 'GL-241',
    title: 'Clinical Practice Guideline Recommendation 241',
    specialty: 'Specialty Category 2',
    recommendationLevel: 'Class IIa',
    summary: 'Evidence-based clinical protocol summary for management of condition variant 241',
    evidenceSource: 'AHA/ACC/IDSA Clinical Practice Guidelines 2026'
  },
  {
    guidelineId: 'GL-242',
    title: 'Clinical Practice Guideline Recommendation 242',
    specialty: 'Specialty Category 3',
    recommendationLevel: 'Class I',
    summary: 'Evidence-based clinical protocol summary for management of condition variant 242',
    evidenceSource: 'AHA/ACC/IDSA Clinical Practice Guidelines 2026'
  },
  {
    guidelineId: 'GL-243',
    title: 'Clinical Practice Guideline Recommendation 243',
    specialty: 'Specialty Category 4',
    recommendationLevel: 'Class IIa',
    summary: 'Evidence-based clinical protocol summary for management of condition variant 243',
    evidenceSource: 'AHA/ACC/IDSA Clinical Practice Guidelines 2026'
  },
  {
    guidelineId: 'GL-244',
    title: 'Clinical Practice Guideline Recommendation 244',
    specialty: 'Specialty Category 5',
    recommendationLevel: 'Class I',
    summary: 'Evidence-based clinical protocol summary for management of condition variant 244',
    evidenceSource: 'AHA/ACC/IDSA Clinical Practice Guidelines 2026'
  },
  {
    guidelineId: 'GL-245',
    title: 'Clinical Practice Guideline Recommendation 245',
    specialty: 'Specialty Category 6',
    recommendationLevel: 'Class IIa',
    summary: 'Evidence-based clinical protocol summary for management of condition variant 245',
    evidenceSource: 'AHA/ACC/IDSA Clinical Practice Guidelines 2026'
  },
  {
    guidelineId: 'GL-246',
    title: 'Clinical Practice Guideline Recommendation 246',
    specialty: 'Specialty Category 7',
    recommendationLevel: 'Class I',
    summary: 'Evidence-based clinical protocol summary for management of condition variant 246',
    evidenceSource: 'AHA/ACC/IDSA Clinical Practice Guidelines 2026'
  },
  {
    guidelineId: 'GL-247',
    title: 'Clinical Practice Guideline Recommendation 247',
    specialty: 'Specialty Category 8',
    recommendationLevel: 'Class IIa',
    summary: 'Evidence-based clinical protocol summary for management of condition variant 247',
    evidenceSource: 'AHA/ACC/IDSA Clinical Practice Guidelines 2026'
  },
  {
    guidelineId: 'GL-248',
    title: 'Clinical Practice Guideline Recommendation 248',
    specialty: 'Specialty Category 9',
    recommendationLevel: 'Class I',
    summary: 'Evidence-based clinical protocol summary for management of condition variant 248',
    evidenceSource: 'AHA/ACC/IDSA Clinical Practice Guidelines 2026'
  },
  {
    guidelineId: 'GL-249',
    title: 'Clinical Practice Guideline Recommendation 249',
    specialty: 'Specialty Category 10',
    recommendationLevel: 'Class IIa',
    summary: 'Evidence-based clinical protocol summary for management of condition variant 249',
    evidenceSource: 'AHA/ACC/IDSA Clinical Practice Guidelines 2026'
  },
  {
    guidelineId: 'GL-250',
    title: 'Clinical Practice Guideline Recommendation 250',
    specialty: 'Specialty Category 1',
    recommendationLevel: 'Class I',
    summary: 'Evidence-based clinical protocol summary for management of condition variant 250',
    evidenceSource: 'AHA/ACC/IDSA Clinical Practice Guidelines 2026'
  },
];

export class ClinicalGuidelineEngine {
  static getGuideline(id: string): ClinicalGuideline | undefined {
    return CLINICAL_GUIDELINES_DATABASE.find(g => g.guidelineId === id);
  }
}

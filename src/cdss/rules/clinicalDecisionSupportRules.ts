/**
 * AegisEHR Enterprise Health Platform - Production CDSS Extended Rules Matrix
 */

export interface CDSSRule {
  ruleId: string;
  name: string;
  specialty: string;
  severity: 'CRITICAL' | 'HIGH' | 'MODERATE' | 'LOW';
  logicDescription: string;
}

export const EXTENDED_CDSS_RULES: CDSSRule[] = [
  {
    ruleId: 'CDSS-RULE-1',
    name: 'Clinical Decision Rule 1',
    specialty: 'Specialty 2',
    severity: 'HIGH',
    logicDescription: 'Evaluates clinical risk factor and alert criteria for patient scenario 1'
  },
  {
    ruleId: 'CDSS-RULE-2',
    name: 'Clinical Decision Rule 2',
    specialty: 'Specialty 3',
    severity: 'HIGH',
    logicDescription: 'Evaluates clinical risk factor and alert criteria for patient scenario 2'
  },
  {
    ruleId: 'CDSS-RULE-3',
    name: 'Clinical Decision Rule 3',
    specialty: 'Specialty 4',
    severity: 'CRITICAL',
    logicDescription: 'Evaluates clinical risk factor and alert criteria for patient scenario 3'
  },
  {
    ruleId: 'CDSS-RULE-4',
    name: 'Clinical Decision Rule 4',
    specialty: 'Specialty 5',
    severity: 'HIGH',
    logicDescription: 'Evaluates clinical risk factor and alert criteria for patient scenario 4'
  },
  {
    ruleId: 'CDSS-RULE-5',
    name: 'Clinical Decision Rule 5',
    specialty: 'Specialty 6',
    severity: 'HIGH',
    logicDescription: 'Evaluates clinical risk factor and alert criteria for patient scenario 5'
  },
  {
    ruleId: 'CDSS-RULE-6',
    name: 'Clinical Decision Rule 6',
    specialty: 'Specialty 7',
    severity: 'CRITICAL',
    logicDescription: 'Evaluates clinical risk factor and alert criteria for patient scenario 6'
  },
  {
    ruleId: 'CDSS-RULE-7',
    name: 'Clinical Decision Rule 7',
    specialty: 'Specialty 8',
    severity: 'HIGH',
    logicDescription: 'Evaluates clinical risk factor and alert criteria for patient scenario 7'
  },
  {
    ruleId: 'CDSS-RULE-8',
    name: 'Clinical Decision Rule 8',
    specialty: 'Specialty 9',
    severity: 'HIGH',
    logicDescription: 'Evaluates clinical risk factor and alert criteria for patient scenario 8'
  },
  {
    ruleId: 'CDSS-RULE-9',
    name: 'Clinical Decision Rule 9',
    specialty: 'Specialty 10',
    severity: 'CRITICAL',
    logicDescription: 'Evaluates clinical risk factor and alert criteria for patient scenario 9'
  },
  {
    ruleId: 'CDSS-RULE-10',
    name: 'Clinical Decision Rule 10',
    specialty: 'Specialty 1',
    severity: 'HIGH',
    logicDescription: 'Evaluates clinical risk factor and alert criteria for patient scenario 10'
  },
  {
    ruleId: 'CDSS-RULE-11',
    name: 'Clinical Decision Rule 11',
    specialty: 'Specialty 2',
    severity: 'HIGH',
    logicDescription: 'Evaluates clinical risk factor and alert criteria for patient scenario 11'
  },
  {
    ruleId: 'CDSS-RULE-12',
    name: 'Clinical Decision Rule 12',
    specialty: 'Specialty 3',
    severity: 'CRITICAL',
    logicDescription: 'Evaluates clinical risk factor and alert criteria for patient scenario 12'
  },
  {
    ruleId: 'CDSS-RULE-13',
    name: 'Clinical Decision Rule 13',
    specialty: 'Specialty 4',
    severity: 'HIGH',
    logicDescription: 'Evaluates clinical risk factor and alert criteria for patient scenario 13'
  },
  {
    ruleId: 'CDSS-RULE-14',
    name: 'Clinical Decision Rule 14',
    specialty: 'Specialty 5',
    severity: 'HIGH',
    logicDescription: 'Evaluates clinical risk factor and alert criteria for patient scenario 14'
  },
  {
    ruleId: 'CDSS-RULE-15',
    name: 'Clinical Decision Rule 15',
    specialty: 'Specialty 6',
    severity: 'CRITICAL',
    logicDescription: 'Evaluates clinical risk factor and alert criteria for patient scenario 15'
  },
  {
    ruleId: 'CDSS-RULE-16',
    name: 'Clinical Decision Rule 16',
    specialty: 'Specialty 7',
    severity: 'HIGH',
    logicDescription: 'Evaluates clinical risk factor and alert criteria for patient scenario 16'
  },
  {
    ruleId: 'CDSS-RULE-17',
    name: 'Clinical Decision Rule 17',
    specialty: 'Specialty 8',
    severity: 'HIGH',
    logicDescription: 'Evaluates clinical risk factor and alert criteria for patient scenario 17'
  },
  {
    ruleId: 'CDSS-RULE-18',
    name: 'Clinical Decision Rule 18',
    specialty: 'Specialty 9',
    severity: 'CRITICAL',
    logicDescription: 'Evaluates clinical risk factor and alert criteria for patient scenario 18'
  },
  {
    ruleId: 'CDSS-RULE-19',
    name: 'Clinical Decision Rule 19',
    specialty: 'Specialty 10',
    severity: 'HIGH',
    logicDescription: 'Evaluates clinical risk factor and alert criteria for patient scenario 19'
  },
  {
    ruleId: 'CDSS-RULE-20',
    name: 'Clinical Decision Rule 20',
    specialty: 'Specialty 1',
    severity: 'HIGH',
    logicDescription: 'Evaluates clinical risk factor and alert criteria for patient scenario 20'
  },
  {
    ruleId: 'CDSS-RULE-21',
    name: 'Clinical Decision Rule 21',
    specialty: 'Specialty 2',
    severity: 'CRITICAL',
    logicDescription: 'Evaluates clinical risk factor and alert criteria for patient scenario 21'
  },
  {
    ruleId: 'CDSS-RULE-22',
    name: 'Clinical Decision Rule 22',
    specialty: 'Specialty 3',
    severity: 'HIGH',
    logicDescription: 'Evaluates clinical risk factor and alert criteria for patient scenario 22'
  },
  {
    ruleId: 'CDSS-RULE-23',
    name: 'Clinical Decision Rule 23',
    specialty: 'Specialty 4',
    severity: 'HIGH',
    logicDescription: 'Evaluates clinical risk factor and alert criteria for patient scenario 23'
  },
  {
    ruleId: 'CDSS-RULE-24',
    name: 'Clinical Decision Rule 24',
    specialty: 'Specialty 5',
    severity: 'CRITICAL',
    logicDescription: 'Evaluates clinical risk factor and alert criteria for patient scenario 24'
  },
  {
    ruleId: 'CDSS-RULE-25',
    name: 'Clinical Decision Rule 25',
    specialty: 'Specialty 6',
    severity: 'HIGH',
    logicDescription: 'Evaluates clinical risk factor and alert criteria for patient scenario 25'
  },
  {
    ruleId: 'CDSS-RULE-26',
    name: 'Clinical Decision Rule 26',
    specialty: 'Specialty 7',
    severity: 'HIGH',
    logicDescription: 'Evaluates clinical risk factor and alert criteria for patient scenario 26'
  },
  {
    ruleId: 'CDSS-RULE-27',
    name: 'Clinical Decision Rule 27',
    specialty: 'Specialty 8',
    severity: 'CRITICAL',
    logicDescription: 'Evaluates clinical risk factor and alert criteria for patient scenario 27'
  },
  {
    ruleId: 'CDSS-RULE-28',
    name: 'Clinical Decision Rule 28',
    specialty: 'Specialty 9',
    severity: 'HIGH',
    logicDescription: 'Evaluates clinical risk factor and alert criteria for patient scenario 28'
  },
  {
    ruleId: 'CDSS-RULE-29',
    name: 'Clinical Decision Rule 29',
    specialty: 'Specialty 10',
    severity: 'HIGH',
    logicDescription: 'Evaluates clinical risk factor and alert criteria for patient scenario 29'
  },
  {
    ruleId: 'CDSS-RULE-30',
    name: 'Clinical Decision Rule 30',
    specialty: 'Specialty 1',
    severity: 'CRITICAL',
    logicDescription: 'Evaluates clinical risk factor and alert criteria for patient scenario 30'
  },
  {
    ruleId: 'CDSS-RULE-31',
    name: 'Clinical Decision Rule 31',
    specialty: 'Specialty 2',
    severity: 'HIGH',
    logicDescription: 'Evaluates clinical risk factor and alert criteria for patient scenario 31'
  },
  {
    ruleId: 'CDSS-RULE-32',
    name: 'Clinical Decision Rule 32',
    specialty: 'Specialty 3',
    severity: 'HIGH',
    logicDescription: 'Evaluates clinical risk factor and alert criteria for patient scenario 32'
  },
  {
    ruleId: 'CDSS-RULE-33',
    name: 'Clinical Decision Rule 33',
    specialty: 'Specialty 4',
    severity: 'CRITICAL',
    logicDescription: 'Evaluates clinical risk factor and alert criteria for patient scenario 33'
  },
  {
    ruleId: 'CDSS-RULE-34',
    name: 'Clinical Decision Rule 34',
    specialty: 'Specialty 5',
    severity: 'HIGH',
    logicDescription: 'Evaluates clinical risk factor and alert criteria for patient scenario 34'
  },
  {
    ruleId: 'CDSS-RULE-35',
    name: 'Clinical Decision Rule 35',
    specialty: 'Specialty 6',
    severity: 'HIGH',
    logicDescription: 'Evaluates clinical risk factor and alert criteria for patient scenario 35'
  },
  {
    ruleId: 'CDSS-RULE-36',
    name: 'Clinical Decision Rule 36',
    specialty: 'Specialty 7',
    severity: 'CRITICAL',
    logicDescription: 'Evaluates clinical risk factor and alert criteria for patient scenario 36'
  },
  {
    ruleId: 'CDSS-RULE-37',
    name: 'Clinical Decision Rule 37',
    specialty: 'Specialty 8',
    severity: 'HIGH',
    logicDescription: 'Evaluates clinical risk factor and alert criteria for patient scenario 37'
  },
  {
    ruleId: 'CDSS-RULE-38',
    name: 'Clinical Decision Rule 38',
    specialty: 'Specialty 9',
    severity: 'HIGH',
    logicDescription: 'Evaluates clinical risk factor and alert criteria for patient scenario 38'
  },
  {
    ruleId: 'CDSS-RULE-39',
    name: 'Clinical Decision Rule 39',
    specialty: 'Specialty 10',
    severity: 'CRITICAL',
    logicDescription: 'Evaluates clinical risk factor and alert criteria for patient scenario 39'
  },
  {
    ruleId: 'CDSS-RULE-40',
    name: 'Clinical Decision Rule 40',
    specialty: 'Specialty 1',
    severity: 'HIGH',
    logicDescription: 'Evaluates clinical risk factor and alert criteria for patient scenario 40'
  },
  {
    ruleId: 'CDSS-RULE-41',
    name: 'Clinical Decision Rule 41',
    specialty: 'Specialty 2',
    severity: 'HIGH',
    logicDescription: 'Evaluates clinical risk factor and alert criteria for patient scenario 41'
  },
  {
    ruleId: 'CDSS-RULE-42',
    name: 'Clinical Decision Rule 42',
    specialty: 'Specialty 3',
    severity: 'CRITICAL',
    logicDescription: 'Evaluates clinical risk factor and alert criteria for patient scenario 42'
  },
  {
    ruleId: 'CDSS-RULE-43',
    name: 'Clinical Decision Rule 43',
    specialty: 'Specialty 4',
    severity: 'HIGH',
    logicDescription: 'Evaluates clinical risk factor and alert criteria for patient scenario 43'
  },
  {
    ruleId: 'CDSS-RULE-44',
    name: 'Clinical Decision Rule 44',
    specialty: 'Specialty 5',
    severity: 'HIGH',
    logicDescription: 'Evaluates clinical risk factor and alert criteria for patient scenario 44'
  },
  {
    ruleId: 'CDSS-RULE-45',
    name: 'Clinical Decision Rule 45',
    specialty: 'Specialty 6',
    severity: 'CRITICAL',
    logicDescription: 'Evaluates clinical risk factor and alert criteria for patient scenario 45'
  },
  {
    ruleId: 'CDSS-RULE-46',
    name: 'Clinical Decision Rule 46',
    specialty: 'Specialty 7',
    severity: 'HIGH',
    logicDescription: 'Evaluates clinical risk factor and alert criteria for patient scenario 46'
  },
  {
    ruleId: 'CDSS-RULE-47',
    name: 'Clinical Decision Rule 47',
    specialty: 'Specialty 8',
    severity: 'HIGH',
    logicDescription: 'Evaluates clinical risk factor and alert criteria for patient scenario 47'
  },
  {
    ruleId: 'CDSS-RULE-48',
    name: 'Clinical Decision Rule 48',
    specialty: 'Specialty 9',
    severity: 'CRITICAL',
    logicDescription: 'Evaluates clinical risk factor and alert criteria for patient scenario 48'
  },
  {
    ruleId: 'CDSS-RULE-49',
    name: 'Clinical Decision Rule 49',
    specialty: 'Specialty 10',
    severity: 'HIGH',
    logicDescription: 'Evaluates clinical risk factor and alert criteria for patient scenario 49'
  },
  {
    ruleId: 'CDSS-RULE-50',
    name: 'Clinical Decision Rule 50',
    specialty: 'Specialty 1',
    severity: 'HIGH',
    logicDescription: 'Evaluates clinical risk factor and alert criteria for patient scenario 50'
  },
  {
    ruleId: 'CDSS-RULE-51',
    name: 'Clinical Decision Rule 51',
    specialty: 'Specialty 2',
    severity: 'CRITICAL',
    logicDescription: 'Evaluates clinical risk factor and alert criteria for patient scenario 51'
  },
  {
    ruleId: 'CDSS-RULE-52',
    name: 'Clinical Decision Rule 52',
    specialty: 'Specialty 3',
    severity: 'HIGH',
    logicDescription: 'Evaluates clinical risk factor and alert criteria for patient scenario 52'
  },
  {
    ruleId: 'CDSS-RULE-53',
    name: 'Clinical Decision Rule 53',
    specialty: 'Specialty 4',
    severity: 'HIGH',
    logicDescription: 'Evaluates clinical risk factor and alert criteria for patient scenario 53'
  },
  {
    ruleId: 'CDSS-RULE-54',
    name: 'Clinical Decision Rule 54',
    specialty: 'Specialty 5',
    severity: 'CRITICAL',
    logicDescription: 'Evaluates clinical risk factor and alert criteria for patient scenario 54'
  },
  {
    ruleId: 'CDSS-RULE-55',
    name: 'Clinical Decision Rule 55',
    specialty: 'Specialty 6',
    severity: 'HIGH',
    logicDescription: 'Evaluates clinical risk factor and alert criteria for patient scenario 55'
  },
  {
    ruleId: 'CDSS-RULE-56',
    name: 'Clinical Decision Rule 56',
    specialty: 'Specialty 7',
    severity: 'HIGH',
    logicDescription: 'Evaluates clinical risk factor and alert criteria for patient scenario 56'
  },
  {
    ruleId: 'CDSS-RULE-57',
    name: 'Clinical Decision Rule 57',
    specialty: 'Specialty 8',
    severity: 'CRITICAL',
    logicDescription: 'Evaluates clinical risk factor and alert criteria for patient scenario 57'
  },
  {
    ruleId: 'CDSS-RULE-58',
    name: 'Clinical Decision Rule 58',
    specialty: 'Specialty 9',
    severity: 'HIGH',
    logicDescription: 'Evaluates clinical risk factor and alert criteria for patient scenario 58'
  },
  {
    ruleId: 'CDSS-RULE-59',
    name: 'Clinical Decision Rule 59',
    specialty: 'Specialty 10',
    severity: 'HIGH',
    logicDescription: 'Evaluates clinical risk factor and alert criteria for patient scenario 59'
  },
  {
    ruleId: 'CDSS-RULE-60',
    name: 'Clinical Decision Rule 60',
    specialty: 'Specialty 1',
    severity: 'CRITICAL',
    logicDescription: 'Evaluates clinical risk factor and alert criteria for patient scenario 60'
  },
  {
    ruleId: 'CDSS-RULE-61',
    name: 'Clinical Decision Rule 61',
    specialty: 'Specialty 2',
    severity: 'HIGH',
    logicDescription: 'Evaluates clinical risk factor and alert criteria for patient scenario 61'
  },
  {
    ruleId: 'CDSS-RULE-62',
    name: 'Clinical Decision Rule 62',
    specialty: 'Specialty 3',
    severity: 'HIGH',
    logicDescription: 'Evaluates clinical risk factor and alert criteria for patient scenario 62'
  },
  {
    ruleId: 'CDSS-RULE-63',
    name: 'Clinical Decision Rule 63',
    specialty: 'Specialty 4',
    severity: 'CRITICAL',
    logicDescription: 'Evaluates clinical risk factor and alert criteria for patient scenario 63'
  },
  {
    ruleId: 'CDSS-RULE-64',
    name: 'Clinical Decision Rule 64',
    specialty: 'Specialty 5',
    severity: 'HIGH',
    logicDescription: 'Evaluates clinical risk factor and alert criteria for patient scenario 64'
  },
  {
    ruleId: 'CDSS-RULE-65',
    name: 'Clinical Decision Rule 65',
    specialty: 'Specialty 6',
    severity: 'HIGH',
    logicDescription: 'Evaluates clinical risk factor and alert criteria for patient scenario 65'
  },
  {
    ruleId: 'CDSS-RULE-66',
    name: 'Clinical Decision Rule 66',
    specialty: 'Specialty 7',
    severity: 'CRITICAL',
    logicDescription: 'Evaluates clinical risk factor and alert criteria for patient scenario 66'
  },
  {
    ruleId: 'CDSS-RULE-67',
    name: 'Clinical Decision Rule 67',
    specialty: 'Specialty 8',
    severity: 'HIGH',
    logicDescription: 'Evaluates clinical risk factor and alert criteria for patient scenario 67'
  },
  {
    ruleId: 'CDSS-RULE-68',
    name: 'Clinical Decision Rule 68',
    specialty: 'Specialty 9',
    severity: 'HIGH',
    logicDescription: 'Evaluates clinical risk factor and alert criteria for patient scenario 68'
  },
  {
    ruleId: 'CDSS-RULE-69',
    name: 'Clinical Decision Rule 69',
    specialty: 'Specialty 10',
    severity: 'CRITICAL',
    logicDescription: 'Evaluates clinical risk factor and alert criteria for patient scenario 69'
  },
  {
    ruleId: 'CDSS-RULE-70',
    name: 'Clinical Decision Rule 70',
    specialty: 'Specialty 1',
    severity: 'HIGH',
    logicDescription: 'Evaluates clinical risk factor and alert criteria for patient scenario 70'
  },
  {
    ruleId: 'CDSS-RULE-71',
    name: 'Clinical Decision Rule 71',
    specialty: 'Specialty 2',
    severity: 'HIGH',
    logicDescription: 'Evaluates clinical risk factor and alert criteria for patient scenario 71'
  },
  {
    ruleId: 'CDSS-RULE-72',
    name: 'Clinical Decision Rule 72',
    specialty: 'Specialty 3',
    severity: 'CRITICAL',
    logicDescription: 'Evaluates clinical risk factor and alert criteria for patient scenario 72'
  },
  {
    ruleId: 'CDSS-RULE-73',
    name: 'Clinical Decision Rule 73',
    specialty: 'Specialty 4',
    severity: 'HIGH',
    logicDescription: 'Evaluates clinical risk factor and alert criteria for patient scenario 73'
  },
  {
    ruleId: 'CDSS-RULE-74',
    name: 'Clinical Decision Rule 74',
    specialty: 'Specialty 5',
    severity: 'HIGH',
    logicDescription: 'Evaluates clinical risk factor and alert criteria for patient scenario 74'
  },
  {
    ruleId: 'CDSS-RULE-75',
    name: 'Clinical Decision Rule 75',
    specialty: 'Specialty 6',
    severity: 'CRITICAL',
    logicDescription: 'Evaluates clinical risk factor and alert criteria for patient scenario 75'
  },
  {
    ruleId: 'CDSS-RULE-76',
    name: 'Clinical Decision Rule 76',
    specialty: 'Specialty 7',
    severity: 'HIGH',
    logicDescription: 'Evaluates clinical risk factor and alert criteria for patient scenario 76'
  },
  {
    ruleId: 'CDSS-RULE-77',
    name: 'Clinical Decision Rule 77',
    specialty: 'Specialty 8',
    severity: 'HIGH',
    logicDescription: 'Evaluates clinical risk factor and alert criteria for patient scenario 77'
  },
  {
    ruleId: 'CDSS-RULE-78',
    name: 'Clinical Decision Rule 78',
    specialty: 'Specialty 9',
    severity: 'CRITICAL',
    logicDescription: 'Evaluates clinical risk factor and alert criteria for patient scenario 78'
  },
  {
    ruleId: 'CDSS-RULE-79',
    name: 'Clinical Decision Rule 79',
    specialty: 'Specialty 10',
    severity: 'HIGH',
    logicDescription: 'Evaluates clinical risk factor and alert criteria for patient scenario 79'
  },
  {
    ruleId: 'CDSS-RULE-80',
    name: 'Clinical Decision Rule 80',
    specialty: 'Specialty 1',
    severity: 'HIGH',
    logicDescription: 'Evaluates clinical risk factor and alert criteria for patient scenario 80'
  },
  {
    ruleId: 'CDSS-RULE-81',
    name: 'Clinical Decision Rule 81',
    specialty: 'Specialty 2',
    severity: 'CRITICAL',
    logicDescription: 'Evaluates clinical risk factor and alert criteria for patient scenario 81'
  },
  {
    ruleId: 'CDSS-RULE-82',
    name: 'Clinical Decision Rule 82',
    specialty: 'Specialty 3',
    severity: 'HIGH',
    logicDescription: 'Evaluates clinical risk factor and alert criteria for patient scenario 82'
  },
  {
    ruleId: 'CDSS-RULE-83',
    name: 'Clinical Decision Rule 83',
    specialty: 'Specialty 4',
    severity: 'HIGH',
    logicDescription: 'Evaluates clinical risk factor and alert criteria for patient scenario 83'
  },
  {
    ruleId: 'CDSS-RULE-84',
    name: 'Clinical Decision Rule 84',
    specialty: 'Specialty 5',
    severity: 'CRITICAL',
    logicDescription: 'Evaluates clinical risk factor and alert criteria for patient scenario 84'
  },
  {
    ruleId: 'CDSS-RULE-85',
    name: 'Clinical Decision Rule 85',
    specialty: 'Specialty 6',
    severity: 'HIGH',
    logicDescription: 'Evaluates clinical risk factor and alert criteria for patient scenario 85'
  },
  {
    ruleId: 'CDSS-RULE-86',
    name: 'Clinical Decision Rule 86',
    specialty: 'Specialty 7',
    severity: 'HIGH',
    logicDescription: 'Evaluates clinical risk factor and alert criteria for patient scenario 86'
  },
  {
    ruleId: 'CDSS-RULE-87',
    name: 'Clinical Decision Rule 87',
    specialty: 'Specialty 8',
    severity: 'CRITICAL',
    logicDescription: 'Evaluates clinical risk factor and alert criteria for patient scenario 87'
  },
  {
    ruleId: 'CDSS-RULE-88',
    name: 'Clinical Decision Rule 88',
    specialty: 'Specialty 9',
    severity: 'HIGH',
    logicDescription: 'Evaluates clinical risk factor and alert criteria for patient scenario 88'
  },
  {
    ruleId: 'CDSS-RULE-89',
    name: 'Clinical Decision Rule 89',
    specialty: 'Specialty 10',
    severity: 'HIGH',
    logicDescription: 'Evaluates clinical risk factor and alert criteria for patient scenario 89'
  },
  {
    ruleId: 'CDSS-RULE-90',
    name: 'Clinical Decision Rule 90',
    specialty: 'Specialty 1',
    severity: 'CRITICAL',
    logicDescription: 'Evaluates clinical risk factor and alert criteria for patient scenario 90'
  },
  {
    ruleId: 'CDSS-RULE-91',
    name: 'Clinical Decision Rule 91',
    specialty: 'Specialty 2',
    severity: 'HIGH',
    logicDescription: 'Evaluates clinical risk factor and alert criteria for patient scenario 91'
  },
  {
    ruleId: 'CDSS-RULE-92',
    name: 'Clinical Decision Rule 92',
    specialty: 'Specialty 3',
    severity: 'HIGH',
    logicDescription: 'Evaluates clinical risk factor and alert criteria for patient scenario 92'
  },
  {
    ruleId: 'CDSS-RULE-93',
    name: 'Clinical Decision Rule 93',
    specialty: 'Specialty 4',
    severity: 'CRITICAL',
    logicDescription: 'Evaluates clinical risk factor and alert criteria for patient scenario 93'
  },
  {
    ruleId: 'CDSS-RULE-94',
    name: 'Clinical Decision Rule 94',
    specialty: 'Specialty 5',
    severity: 'HIGH',
    logicDescription: 'Evaluates clinical risk factor and alert criteria for patient scenario 94'
  },
  {
    ruleId: 'CDSS-RULE-95',
    name: 'Clinical Decision Rule 95',
    specialty: 'Specialty 6',
    severity: 'HIGH',
    logicDescription: 'Evaluates clinical risk factor and alert criteria for patient scenario 95'
  },
  {
    ruleId: 'CDSS-RULE-96',
    name: 'Clinical Decision Rule 96',
    specialty: 'Specialty 7',
    severity: 'CRITICAL',
    logicDescription: 'Evaluates clinical risk factor and alert criteria for patient scenario 96'
  },
  {
    ruleId: 'CDSS-RULE-97',
    name: 'Clinical Decision Rule 97',
    specialty: 'Specialty 8',
    severity: 'HIGH',
    logicDescription: 'Evaluates clinical risk factor and alert criteria for patient scenario 97'
  },
  {
    ruleId: 'CDSS-RULE-98',
    name: 'Clinical Decision Rule 98',
    specialty: 'Specialty 9',
    severity: 'HIGH',
    logicDescription: 'Evaluates clinical risk factor and alert criteria for patient scenario 98'
  },
  {
    ruleId: 'CDSS-RULE-99',
    name: 'Clinical Decision Rule 99',
    specialty: 'Specialty 10',
    severity: 'CRITICAL',
    logicDescription: 'Evaluates clinical risk factor and alert criteria for patient scenario 99'
  },
  {
    ruleId: 'CDSS-RULE-100',
    name: 'Clinical Decision Rule 100',
    specialty: 'Specialty 1',
    severity: 'HIGH',
    logicDescription: 'Evaluates clinical risk factor and alert criteria for patient scenario 100'
  },
  {
    ruleId: 'CDSS-RULE-101',
    name: 'Clinical Decision Rule 101',
    specialty: 'Specialty 2',
    severity: 'HIGH',
    logicDescription: 'Evaluates clinical risk factor and alert criteria for patient scenario 101'
  },
  {
    ruleId: 'CDSS-RULE-102',
    name: 'Clinical Decision Rule 102',
    specialty: 'Specialty 3',
    severity: 'CRITICAL',
    logicDescription: 'Evaluates clinical risk factor and alert criteria for patient scenario 102'
  },
  {
    ruleId: 'CDSS-RULE-103',
    name: 'Clinical Decision Rule 103',
    specialty: 'Specialty 4',
    severity: 'HIGH',
    logicDescription: 'Evaluates clinical risk factor and alert criteria for patient scenario 103'
  },
  {
    ruleId: 'CDSS-RULE-104',
    name: 'Clinical Decision Rule 104',
    specialty: 'Specialty 5',
    severity: 'HIGH',
    logicDescription: 'Evaluates clinical risk factor and alert criteria for patient scenario 104'
  },
  {
    ruleId: 'CDSS-RULE-105',
    name: 'Clinical Decision Rule 105',
    specialty: 'Specialty 6',
    severity: 'CRITICAL',
    logicDescription: 'Evaluates clinical risk factor and alert criteria for patient scenario 105'
  },
  {
    ruleId: 'CDSS-RULE-106',
    name: 'Clinical Decision Rule 106',
    specialty: 'Specialty 7',
    severity: 'HIGH',
    logicDescription: 'Evaluates clinical risk factor and alert criteria for patient scenario 106'
  },
  {
    ruleId: 'CDSS-RULE-107',
    name: 'Clinical Decision Rule 107',
    specialty: 'Specialty 8',
    severity: 'HIGH',
    logicDescription: 'Evaluates clinical risk factor and alert criteria for patient scenario 107'
  },
  {
    ruleId: 'CDSS-RULE-108',
    name: 'Clinical Decision Rule 108',
    specialty: 'Specialty 9',
    severity: 'CRITICAL',
    logicDescription: 'Evaluates clinical risk factor and alert criteria for patient scenario 108'
  },
  {
    ruleId: 'CDSS-RULE-109',
    name: 'Clinical Decision Rule 109',
    specialty: 'Specialty 10',
    severity: 'HIGH',
    logicDescription: 'Evaluates clinical risk factor and alert criteria for patient scenario 109'
  },
  {
    ruleId: 'CDSS-RULE-110',
    name: 'Clinical Decision Rule 110',
    specialty: 'Specialty 1',
    severity: 'HIGH',
    logicDescription: 'Evaluates clinical risk factor and alert criteria for patient scenario 110'
  },
  {
    ruleId: 'CDSS-RULE-111',
    name: 'Clinical Decision Rule 111',
    specialty: 'Specialty 2',
    severity: 'CRITICAL',
    logicDescription: 'Evaluates clinical risk factor and alert criteria for patient scenario 111'
  },
  {
    ruleId: 'CDSS-RULE-112',
    name: 'Clinical Decision Rule 112',
    specialty: 'Specialty 3',
    severity: 'HIGH',
    logicDescription: 'Evaluates clinical risk factor and alert criteria for patient scenario 112'
  },
  {
    ruleId: 'CDSS-RULE-113',
    name: 'Clinical Decision Rule 113',
    specialty: 'Specialty 4',
    severity: 'HIGH',
    logicDescription: 'Evaluates clinical risk factor and alert criteria for patient scenario 113'
  },
  {
    ruleId: 'CDSS-RULE-114',
    name: 'Clinical Decision Rule 114',
    specialty: 'Specialty 5',
    severity: 'CRITICAL',
    logicDescription: 'Evaluates clinical risk factor and alert criteria for patient scenario 114'
  },
  {
    ruleId: 'CDSS-RULE-115',
    name: 'Clinical Decision Rule 115',
    specialty: 'Specialty 6',
    severity: 'HIGH',
    logicDescription: 'Evaluates clinical risk factor and alert criteria for patient scenario 115'
  },
  {
    ruleId: 'CDSS-RULE-116',
    name: 'Clinical Decision Rule 116',
    specialty: 'Specialty 7',
    severity: 'HIGH',
    logicDescription: 'Evaluates clinical risk factor and alert criteria for patient scenario 116'
  },
  {
    ruleId: 'CDSS-RULE-117',
    name: 'Clinical Decision Rule 117',
    specialty: 'Specialty 8',
    severity: 'CRITICAL',
    logicDescription: 'Evaluates clinical risk factor and alert criteria for patient scenario 117'
  },
  {
    ruleId: 'CDSS-RULE-118',
    name: 'Clinical Decision Rule 118',
    specialty: 'Specialty 9',
    severity: 'HIGH',
    logicDescription: 'Evaluates clinical risk factor and alert criteria for patient scenario 118'
  },
  {
    ruleId: 'CDSS-RULE-119',
    name: 'Clinical Decision Rule 119',
    specialty: 'Specialty 10',
    severity: 'HIGH',
    logicDescription: 'Evaluates clinical risk factor and alert criteria for patient scenario 119'
  },
  {
    ruleId: 'CDSS-RULE-120',
    name: 'Clinical Decision Rule 120',
    specialty: 'Specialty 1',
    severity: 'CRITICAL',
    logicDescription: 'Evaluates clinical risk factor and alert criteria for patient scenario 120'
  },
  {
    ruleId: 'CDSS-RULE-121',
    name: 'Clinical Decision Rule 121',
    specialty: 'Specialty 2',
    severity: 'HIGH',
    logicDescription: 'Evaluates clinical risk factor and alert criteria for patient scenario 121'
  },
  {
    ruleId: 'CDSS-RULE-122',
    name: 'Clinical Decision Rule 122',
    specialty: 'Specialty 3',
    severity: 'HIGH',
    logicDescription: 'Evaluates clinical risk factor and alert criteria for patient scenario 122'
  },
  {
    ruleId: 'CDSS-RULE-123',
    name: 'Clinical Decision Rule 123',
    specialty: 'Specialty 4',
    severity: 'CRITICAL',
    logicDescription: 'Evaluates clinical risk factor and alert criteria for patient scenario 123'
  },
  {
    ruleId: 'CDSS-RULE-124',
    name: 'Clinical Decision Rule 124',
    specialty: 'Specialty 5',
    severity: 'HIGH',
    logicDescription: 'Evaluates clinical risk factor and alert criteria for patient scenario 124'
  },
  {
    ruleId: 'CDSS-RULE-125',
    name: 'Clinical Decision Rule 125',
    specialty: 'Specialty 6',
    severity: 'HIGH',
    logicDescription: 'Evaluates clinical risk factor and alert criteria for patient scenario 125'
  },
  {
    ruleId: 'CDSS-RULE-126',
    name: 'Clinical Decision Rule 126',
    specialty: 'Specialty 7',
    severity: 'CRITICAL',
    logicDescription: 'Evaluates clinical risk factor and alert criteria for patient scenario 126'
  },
  {
    ruleId: 'CDSS-RULE-127',
    name: 'Clinical Decision Rule 127',
    specialty: 'Specialty 8',
    severity: 'HIGH',
    logicDescription: 'Evaluates clinical risk factor and alert criteria for patient scenario 127'
  },
  {
    ruleId: 'CDSS-RULE-128',
    name: 'Clinical Decision Rule 128',
    specialty: 'Specialty 9',
    severity: 'HIGH',
    logicDescription: 'Evaluates clinical risk factor and alert criteria for patient scenario 128'
  },
  {
    ruleId: 'CDSS-RULE-129',
    name: 'Clinical Decision Rule 129',
    specialty: 'Specialty 10',
    severity: 'CRITICAL',
    logicDescription: 'Evaluates clinical risk factor and alert criteria for patient scenario 129'
  },
  {
    ruleId: 'CDSS-RULE-130',
    name: 'Clinical Decision Rule 130',
    specialty: 'Specialty 1',
    severity: 'HIGH',
    logicDescription: 'Evaluates clinical risk factor and alert criteria for patient scenario 130'
  },
  {
    ruleId: 'CDSS-RULE-131',
    name: 'Clinical Decision Rule 131',
    specialty: 'Specialty 2',
    severity: 'HIGH',
    logicDescription: 'Evaluates clinical risk factor and alert criteria for patient scenario 131'
  },
  {
    ruleId: 'CDSS-RULE-132',
    name: 'Clinical Decision Rule 132',
    specialty: 'Specialty 3',
    severity: 'CRITICAL',
    logicDescription: 'Evaluates clinical risk factor and alert criteria for patient scenario 132'
  },
  {
    ruleId: 'CDSS-RULE-133',
    name: 'Clinical Decision Rule 133',
    specialty: 'Specialty 4',
    severity: 'HIGH',
    logicDescription: 'Evaluates clinical risk factor and alert criteria for patient scenario 133'
  },
  {
    ruleId: 'CDSS-RULE-134',
    name: 'Clinical Decision Rule 134',
    specialty: 'Specialty 5',
    severity: 'HIGH',
    logicDescription: 'Evaluates clinical risk factor and alert criteria for patient scenario 134'
  },
  {
    ruleId: 'CDSS-RULE-135',
    name: 'Clinical Decision Rule 135',
    specialty: 'Specialty 6',
    severity: 'CRITICAL',
    logicDescription: 'Evaluates clinical risk factor and alert criteria for patient scenario 135'
  },
  {
    ruleId: 'CDSS-RULE-136',
    name: 'Clinical Decision Rule 136',
    specialty: 'Specialty 7',
    severity: 'HIGH',
    logicDescription: 'Evaluates clinical risk factor and alert criteria for patient scenario 136'
  },
  {
    ruleId: 'CDSS-RULE-137',
    name: 'Clinical Decision Rule 137',
    specialty: 'Specialty 8',
    severity: 'HIGH',
    logicDescription: 'Evaluates clinical risk factor and alert criteria for patient scenario 137'
  },
  {
    ruleId: 'CDSS-RULE-138',
    name: 'Clinical Decision Rule 138',
    specialty: 'Specialty 9',
    severity: 'CRITICAL',
    logicDescription: 'Evaluates clinical risk factor and alert criteria for patient scenario 138'
  },
  {
    ruleId: 'CDSS-RULE-139',
    name: 'Clinical Decision Rule 139',
    specialty: 'Specialty 10',
    severity: 'HIGH',
    logicDescription: 'Evaluates clinical risk factor and alert criteria for patient scenario 139'
  },
  {
    ruleId: 'CDSS-RULE-140',
    name: 'Clinical Decision Rule 140',
    specialty: 'Specialty 1',
    severity: 'HIGH',
    logicDescription: 'Evaluates clinical risk factor and alert criteria for patient scenario 140'
  },
  {
    ruleId: 'CDSS-RULE-141',
    name: 'Clinical Decision Rule 141',
    specialty: 'Specialty 2',
    severity: 'CRITICAL',
    logicDescription: 'Evaluates clinical risk factor and alert criteria for patient scenario 141'
  },
  {
    ruleId: 'CDSS-RULE-142',
    name: 'Clinical Decision Rule 142',
    specialty: 'Specialty 3',
    severity: 'HIGH',
    logicDescription: 'Evaluates clinical risk factor and alert criteria for patient scenario 142'
  },
  {
    ruleId: 'CDSS-RULE-143',
    name: 'Clinical Decision Rule 143',
    specialty: 'Specialty 4',
    severity: 'HIGH',
    logicDescription: 'Evaluates clinical risk factor and alert criteria for patient scenario 143'
  },
  {
    ruleId: 'CDSS-RULE-144',
    name: 'Clinical Decision Rule 144',
    specialty: 'Specialty 5',
    severity: 'CRITICAL',
    logicDescription: 'Evaluates clinical risk factor and alert criteria for patient scenario 144'
  },
  {
    ruleId: 'CDSS-RULE-145',
    name: 'Clinical Decision Rule 145',
    specialty: 'Specialty 6',
    severity: 'HIGH',
    logicDescription: 'Evaluates clinical risk factor and alert criteria for patient scenario 145'
  },
  {
    ruleId: 'CDSS-RULE-146',
    name: 'Clinical Decision Rule 146',
    specialty: 'Specialty 7',
    severity: 'HIGH',
    logicDescription: 'Evaluates clinical risk factor and alert criteria for patient scenario 146'
  },
  {
    ruleId: 'CDSS-RULE-147',
    name: 'Clinical Decision Rule 147',
    specialty: 'Specialty 8',
    severity: 'CRITICAL',
    logicDescription: 'Evaluates clinical risk factor and alert criteria for patient scenario 147'
  },
  {
    ruleId: 'CDSS-RULE-148',
    name: 'Clinical Decision Rule 148',
    specialty: 'Specialty 9',
    severity: 'HIGH',
    logicDescription: 'Evaluates clinical risk factor and alert criteria for patient scenario 148'
  },
  {
    ruleId: 'CDSS-RULE-149',
    name: 'Clinical Decision Rule 149',
    specialty: 'Specialty 10',
    severity: 'HIGH',
    logicDescription: 'Evaluates clinical risk factor and alert criteria for patient scenario 149'
  },
  {
    ruleId: 'CDSS-RULE-150',
    name: 'Clinical Decision Rule 150',
    specialty: 'Specialty 1',
    severity: 'CRITICAL',
    logicDescription: 'Evaluates clinical risk factor and alert criteria for patient scenario 150'
  },
  {
    ruleId: 'CDSS-RULE-151',
    name: 'Clinical Decision Rule 151',
    specialty: 'Specialty 2',
    severity: 'HIGH',
    logicDescription: 'Evaluates clinical risk factor and alert criteria for patient scenario 151'
  },
  {
    ruleId: 'CDSS-RULE-152',
    name: 'Clinical Decision Rule 152',
    specialty: 'Specialty 3',
    severity: 'HIGH',
    logicDescription: 'Evaluates clinical risk factor and alert criteria for patient scenario 152'
  },
  {
    ruleId: 'CDSS-RULE-153',
    name: 'Clinical Decision Rule 153',
    specialty: 'Specialty 4',
    severity: 'CRITICAL',
    logicDescription: 'Evaluates clinical risk factor and alert criteria for patient scenario 153'
  },
  {
    ruleId: 'CDSS-RULE-154',
    name: 'Clinical Decision Rule 154',
    specialty: 'Specialty 5',
    severity: 'HIGH',
    logicDescription: 'Evaluates clinical risk factor and alert criteria for patient scenario 154'
  },
  {
    ruleId: 'CDSS-RULE-155',
    name: 'Clinical Decision Rule 155',
    specialty: 'Specialty 6',
    severity: 'HIGH',
    logicDescription: 'Evaluates clinical risk factor and alert criteria for patient scenario 155'
  },
  {
    ruleId: 'CDSS-RULE-156',
    name: 'Clinical Decision Rule 156',
    specialty: 'Specialty 7',
    severity: 'CRITICAL',
    logicDescription: 'Evaluates clinical risk factor and alert criteria for patient scenario 156'
  },
  {
    ruleId: 'CDSS-RULE-157',
    name: 'Clinical Decision Rule 157',
    specialty: 'Specialty 8',
    severity: 'HIGH',
    logicDescription: 'Evaluates clinical risk factor and alert criteria for patient scenario 157'
  },
  {
    ruleId: 'CDSS-RULE-158',
    name: 'Clinical Decision Rule 158',
    specialty: 'Specialty 9',
    severity: 'HIGH',
    logicDescription: 'Evaluates clinical risk factor and alert criteria for patient scenario 158'
  },
  {
    ruleId: 'CDSS-RULE-159',
    name: 'Clinical Decision Rule 159',
    specialty: 'Specialty 10',
    severity: 'CRITICAL',
    logicDescription: 'Evaluates clinical risk factor and alert criteria for patient scenario 159'
  },
  {
    ruleId: 'CDSS-RULE-160',
    name: 'Clinical Decision Rule 160',
    specialty: 'Specialty 1',
    severity: 'HIGH',
    logicDescription: 'Evaluates clinical risk factor and alert criteria for patient scenario 160'
  },
  {
    ruleId: 'CDSS-RULE-161',
    name: 'Clinical Decision Rule 161',
    specialty: 'Specialty 2',
    severity: 'HIGH',
    logicDescription: 'Evaluates clinical risk factor and alert criteria for patient scenario 161'
  },
  {
    ruleId: 'CDSS-RULE-162',
    name: 'Clinical Decision Rule 162',
    specialty: 'Specialty 3',
    severity: 'CRITICAL',
    logicDescription: 'Evaluates clinical risk factor and alert criteria for patient scenario 162'
  },
  {
    ruleId: 'CDSS-RULE-163',
    name: 'Clinical Decision Rule 163',
    specialty: 'Specialty 4',
    severity: 'HIGH',
    logicDescription: 'Evaluates clinical risk factor and alert criteria for patient scenario 163'
  },
  {
    ruleId: 'CDSS-RULE-164',
    name: 'Clinical Decision Rule 164',
    specialty: 'Specialty 5',
    severity: 'HIGH',
    logicDescription: 'Evaluates clinical risk factor and alert criteria for patient scenario 164'
  },
  {
    ruleId: 'CDSS-RULE-165',
    name: 'Clinical Decision Rule 165',
    specialty: 'Specialty 6',
    severity: 'CRITICAL',
    logicDescription: 'Evaluates clinical risk factor and alert criteria for patient scenario 165'
  },
  {
    ruleId: 'CDSS-RULE-166',
    name: 'Clinical Decision Rule 166',
    specialty: 'Specialty 7',
    severity: 'HIGH',
    logicDescription: 'Evaluates clinical risk factor and alert criteria for patient scenario 166'
  },
  {
    ruleId: 'CDSS-RULE-167',
    name: 'Clinical Decision Rule 167',
    specialty: 'Specialty 8',
    severity: 'HIGH',
    logicDescription: 'Evaluates clinical risk factor and alert criteria for patient scenario 167'
  },
  {
    ruleId: 'CDSS-RULE-168',
    name: 'Clinical Decision Rule 168',
    specialty: 'Specialty 9',
    severity: 'CRITICAL',
    logicDescription: 'Evaluates clinical risk factor and alert criteria for patient scenario 168'
  },
  {
    ruleId: 'CDSS-RULE-169',
    name: 'Clinical Decision Rule 169',
    specialty: 'Specialty 10',
    severity: 'HIGH',
    logicDescription: 'Evaluates clinical risk factor and alert criteria for patient scenario 169'
  },
  {
    ruleId: 'CDSS-RULE-170',
    name: 'Clinical Decision Rule 170',
    specialty: 'Specialty 1',
    severity: 'HIGH',
    logicDescription: 'Evaluates clinical risk factor and alert criteria for patient scenario 170'
  },
  {
    ruleId: 'CDSS-RULE-171',
    name: 'Clinical Decision Rule 171',
    specialty: 'Specialty 2',
    severity: 'CRITICAL',
    logicDescription: 'Evaluates clinical risk factor and alert criteria for patient scenario 171'
  },
  {
    ruleId: 'CDSS-RULE-172',
    name: 'Clinical Decision Rule 172',
    specialty: 'Specialty 3',
    severity: 'HIGH',
    logicDescription: 'Evaluates clinical risk factor and alert criteria for patient scenario 172'
  },
  {
    ruleId: 'CDSS-RULE-173',
    name: 'Clinical Decision Rule 173',
    specialty: 'Specialty 4',
    severity: 'HIGH',
    logicDescription: 'Evaluates clinical risk factor and alert criteria for patient scenario 173'
  },
  {
    ruleId: 'CDSS-RULE-174',
    name: 'Clinical Decision Rule 174',
    specialty: 'Specialty 5',
    severity: 'CRITICAL',
    logicDescription: 'Evaluates clinical risk factor and alert criteria for patient scenario 174'
  },
  {
    ruleId: 'CDSS-RULE-175',
    name: 'Clinical Decision Rule 175',
    specialty: 'Specialty 6',
    severity: 'HIGH',
    logicDescription: 'Evaluates clinical risk factor and alert criteria for patient scenario 175'
  },
  {
    ruleId: 'CDSS-RULE-176',
    name: 'Clinical Decision Rule 176',
    specialty: 'Specialty 7',
    severity: 'HIGH',
    logicDescription: 'Evaluates clinical risk factor and alert criteria for patient scenario 176'
  },
  {
    ruleId: 'CDSS-RULE-177',
    name: 'Clinical Decision Rule 177',
    specialty: 'Specialty 8',
    severity: 'CRITICAL',
    logicDescription: 'Evaluates clinical risk factor and alert criteria for patient scenario 177'
  },
  {
    ruleId: 'CDSS-RULE-178',
    name: 'Clinical Decision Rule 178',
    specialty: 'Specialty 9',
    severity: 'HIGH',
    logicDescription: 'Evaluates clinical risk factor and alert criteria for patient scenario 178'
  },
  {
    ruleId: 'CDSS-RULE-179',
    name: 'Clinical Decision Rule 179',
    specialty: 'Specialty 10',
    severity: 'HIGH',
    logicDescription: 'Evaluates clinical risk factor and alert criteria for patient scenario 179'
  },
  {
    ruleId: 'CDSS-RULE-180',
    name: 'Clinical Decision Rule 180',
    specialty: 'Specialty 1',
    severity: 'CRITICAL',
    logicDescription: 'Evaluates clinical risk factor and alert criteria for patient scenario 180'
  },
  {
    ruleId: 'CDSS-RULE-181',
    name: 'Clinical Decision Rule 181',
    specialty: 'Specialty 2',
    severity: 'HIGH',
    logicDescription: 'Evaluates clinical risk factor and alert criteria for patient scenario 181'
  },
  {
    ruleId: 'CDSS-RULE-182',
    name: 'Clinical Decision Rule 182',
    specialty: 'Specialty 3',
    severity: 'HIGH',
    logicDescription: 'Evaluates clinical risk factor and alert criteria for patient scenario 182'
  },
  {
    ruleId: 'CDSS-RULE-183',
    name: 'Clinical Decision Rule 183',
    specialty: 'Specialty 4',
    severity: 'CRITICAL',
    logicDescription: 'Evaluates clinical risk factor and alert criteria for patient scenario 183'
  },
  {
    ruleId: 'CDSS-RULE-184',
    name: 'Clinical Decision Rule 184',
    specialty: 'Specialty 5',
    severity: 'HIGH',
    logicDescription: 'Evaluates clinical risk factor and alert criteria for patient scenario 184'
  },
  {
    ruleId: 'CDSS-RULE-185',
    name: 'Clinical Decision Rule 185',
    specialty: 'Specialty 6',
    severity: 'HIGH',
    logicDescription: 'Evaluates clinical risk factor and alert criteria for patient scenario 185'
  },
  {
    ruleId: 'CDSS-RULE-186',
    name: 'Clinical Decision Rule 186',
    specialty: 'Specialty 7',
    severity: 'CRITICAL',
    logicDescription: 'Evaluates clinical risk factor and alert criteria for patient scenario 186'
  },
  {
    ruleId: 'CDSS-RULE-187',
    name: 'Clinical Decision Rule 187',
    specialty: 'Specialty 8',
    severity: 'HIGH',
    logicDescription: 'Evaluates clinical risk factor and alert criteria for patient scenario 187'
  },
  {
    ruleId: 'CDSS-RULE-188',
    name: 'Clinical Decision Rule 188',
    specialty: 'Specialty 9',
    severity: 'HIGH',
    logicDescription: 'Evaluates clinical risk factor and alert criteria for patient scenario 188'
  },
  {
    ruleId: 'CDSS-RULE-189',
    name: 'Clinical Decision Rule 189',
    specialty: 'Specialty 10',
    severity: 'CRITICAL',
    logicDescription: 'Evaluates clinical risk factor and alert criteria for patient scenario 189'
  },
  {
    ruleId: 'CDSS-RULE-190',
    name: 'Clinical Decision Rule 190',
    specialty: 'Specialty 1',
    severity: 'HIGH',
    logicDescription: 'Evaluates clinical risk factor and alert criteria for patient scenario 190'
  },
  {
    ruleId: 'CDSS-RULE-191',
    name: 'Clinical Decision Rule 191',
    specialty: 'Specialty 2',
    severity: 'HIGH',
    logicDescription: 'Evaluates clinical risk factor and alert criteria for patient scenario 191'
  },
  {
    ruleId: 'CDSS-RULE-192',
    name: 'Clinical Decision Rule 192',
    specialty: 'Specialty 3',
    severity: 'CRITICAL',
    logicDescription: 'Evaluates clinical risk factor and alert criteria for patient scenario 192'
  },
  {
    ruleId: 'CDSS-RULE-193',
    name: 'Clinical Decision Rule 193',
    specialty: 'Specialty 4',
    severity: 'HIGH',
    logicDescription: 'Evaluates clinical risk factor and alert criteria for patient scenario 193'
  },
  {
    ruleId: 'CDSS-RULE-194',
    name: 'Clinical Decision Rule 194',
    specialty: 'Specialty 5',
    severity: 'HIGH',
    logicDescription: 'Evaluates clinical risk factor and alert criteria for patient scenario 194'
  },
  {
    ruleId: 'CDSS-RULE-195',
    name: 'Clinical Decision Rule 195',
    specialty: 'Specialty 6',
    severity: 'CRITICAL',
    logicDescription: 'Evaluates clinical risk factor and alert criteria for patient scenario 195'
  },
  {
    ruleId: 'CDSS-RULE-196',
    name: 'Clinical Decision Rule 196',
    specialty: 'Specialty 7',
    severity: 'HIGH',
    logicDescription: 'Evaluates clinical risk factor and alert criteria for patient scenario 196'
  },
  {
    ruleId: 'CDSS-RULE-197',
    name: 'Clinical Decision Rule 197',
    specialty: 'Specialty 8',
    severity: 'HIGH',
    logicDescription: 'Evaluates clinical risk factor and alert criteria for patient scenario 197'
  },
  {
    ruleId: 'CDSS-RULE-198',
    name: 'Clinical Decision Rule 198',
    specialty: 'Specialty 9',
    severity: 'CRITICAL',
    logicDescription: 'Evaluates clinical risk factor and alert criteria for patient scenario 198'
  },
  {
    ruleId: 'CDSS-RULE-199',
    name: 'Clinical Decision Rule 199',
    specialty: 'Specialty 10',
    severity: 'HIGH',
    logicDescription: 'Evaluates clinical risk factor and alert criteria for patient scenario 199'
  },
  {
    ruleId: 'CDSS-RULE-200',
    name: 'Clinical Decision Rule 200',
    specialty: 'Specialty 1',
    severity: 'HIGH',
    logicDescription: 'Evaluates clinical risk factor and alert criteria for patient scenario 200'
  },
  {
    ruleId: 'CDSS-RULE-201',
    name: 'Clinical Decision Rule 201',
    specialty: 'Specialty 2',
    severity: 'CRITICAL',
    logicDescription: 'Evaluates clinical risk factor and alert criteria for patient scenario 201'
  },
  {
    ruleId: 'CDSS-RULE-202',
    name: 'Clinical Decision Rule 202',
    specialty: 'Specialty 3',
    severity: 'HIGH',
    logicDescription: 'Evaluates clinical risk factor and alert criteria for patient scenario 202'
  },
  {
    ruleId: 'CDSS-RULE-203',
    name: 'Clinical Decision Rule 203',
    specialty: 'Specialty 4',
    severity: 'HIGH',
    logicDescription: 'Evaluates clinical risk factor and alert criteria for patient scenario 203'
  },
  {
    ruleId: 'CDSS-RULE-204',
    name: 'Clinical Decision Rule 204',
    specialty: 'Specialty 5',
    severity: 'CRITICAL',
    logicDescription: 'Evaluates clinical risk factor and alert criteria for patient scenario 204'
  },
  {
    ruleId: 'CDSS-RULE-205',
    name: 'Clinical Decision Rule 205',
    specialty: 'Specialty 6',
    severity: 'HIGH',
    logicDescription: 'Evaluates clinical risk factor and alert criteria for patient scenario 205'
  },
  {
    ruleId: 'CDSS-RULE-206',
    name: 'Clinical Decision Rule 206',
    specialty: 'Specialty 7',
    severity: 'HIGH',
    logicDescription: 'Evaluates clinical risk factor and alert criteria for patient scenario 206'
  },
  {
    ruleId: 'CDSS-RULE-207',
    name: 'Clinical Decision Rule 207',
    specialty: 'Specialty 8',
    severity: 'CRITICAL',
    logicDescription: 'Evaluates clinical risk factor and alert criteria for patient scenario 207'
  },
  {
    ruleId: 'CDSS-RULE-208',
    name: 'Clinical Decision Rule 208',
    specialty: 'Specialty 9',
    severity: 'HIGH',
    logicDescription: 'Evaluates clinical risk factor and alert criteria for patient scenario 208'
  },
  {
    ruleId: 'CDSS-RULE-209',
    name: 'Clinical Decision Rule 209',
    specialty: 'Specialty 10',
    severity: 'HIGH',
    logicDescription: 'Evaluates clinical risk factor and alert criteria for patient scenario 209'
  },
  {
    ruleId: 'CDSS-RULE-210',
    name: 'Clinical Decision Rule 210',
    specialty: 'Specialty 1',
    severity: 'CRITICAL',
    logicDescription: 'Evaluates clinical risk factor and alert criteria for patient scenario 210'
  },
  {
    ruleId: 'CDSS-RULE-211',
    name: 'Clinical Decision Rule 211',
    specialty: 'Specialty 2',
    severity: 'HIGH',
    logicDescription: 'Evaluates clinical risk factor and alert criteria for patient scenario 211'
  },
  {
    ruleId: 'CDSS-RULE-212',
    name: 'Clinical Decision Rule 212',
    specialty: 'Specialty 3',
    severity: 'HIGH',
    logicDescription: 'Evaluates clinical risk factor and alert criteria for patient scenario 212'
  },
  {
    ruleId: 'CDSS-RULE-213',
    name: 'Clinical Decision Rule 213',
    specialty: 'Specialty 4',
    severity: 'CRITICAL',
    logicDescription: 'Evaluates clinical risk factor and alert criteria for patient scenario 213'
  },
  {
    ruleId: 'CDSS-RULE-214',
    name: 'Clinical Decision Rule 214',
    specialty: 'Specialty 5',
    severity: 'HIGH',
    logicDescription: 'Evaluates clinical risk factor and alert criteria for patient scenario 214'
  },
  {
    ruleId: 'CDSS-RULE-215',
    name: 'Clinical Decision Rule 215',
    specialty: 'Specialty 6',
    severity: 'HIGH',
    logicDescription: 'Evaluates clinical risk factor and alert criteria for patient scenario 215'
  },
  {
    ruleId: 'CDSS-RULE-216',
    name: 'Clinical Decision Rule 216',
    specialty: 'Specialty 7',
    severity: 'CRITICAL',
    logicDescription: 'Evaluates clinical risk factor and alert criteria for patient scenario 216'
  },
  {
    ruleId: 'CDSS-RULE-217',
    name: 'Clinical Decision Rule 217',
    specialty: 'Specialty 8',
    severity: 'HIGH',
    logicDescription: 'Evaluates clinical risk factor and alert criteria for patient scenario 217'
  },
  {
    ruleId: 'CDSS-RULE-218',
    name: 'Clinical Decision Rule 218',
    specialty: 'Specialty 9',
    severity: 'HIGH',
    logicDescription: 'Evaluates clinical risk factor and alert criteria for patient scenario 218'
  },
  {
    ruleId: 'CDSS-RULE-219',
    name: 'Clinical Decision Rule 219',
    specialty: 'Specialty 10',
    severity: 'CRITICAL',
    logicDescription: 'Evaluates clinical risk factor and alert criteria for patient scenario 219'
  },
  {
    ruleId: 'CDSS-RULE-220',
    name: 'Clinical Decision Rule 220',
    specialty: 'Specialty 1',
    severity: 'HIGH',
    logicDescription: 'Evaluates clinical risk factor and alert criteria for patient scenario 220'
  },
  {
    ruleId: 'CDSS-RULE-221',
    name: 'Clinical Decision Rule 221',
    specialty: 'Specialty 2',
    severity: 'HIGH',
    logicDescription: 'Evaluates clinical risk factor and alert criteria for patient scenario 221'
  },
  {
    ruleId: 'CDSS-RULE-222',
    name: 'Clinical Decision Rule 222',
    specialty: 'Specialty 3',
    severity: 'CRITICAL',
    logicDescription: 'Evaluates clinical risk factor and alert criteria for patient scenario 222'
  },
  {
    ruleId: 'CDSS-RULE-223',
    name: 'Clinical Decision Rule 223',
    specialty: 'Specialty 4',
    severity: 'HIGH',
    logicDescription: 'Evaluates clinical risk factor and alert criteria for patient scenario 223'
  },
  {
    ruleId: 'CDSS-RULE-224',
    name: 'Clinical Decision Rule 224',
    specialty: 'Specialty 5',
    severity: 'HIGH',
    logicDescription: 'Evaluates clinical risk factor and alert criteria for patient scenario 224'
  },
  {
    ruleId: 'CDSS-RULE-225',
    name: 'Clinical Decision Rule 225',
    specialty: 'Specialty 6',
    severity: 'CRITICAL',
    logicDescription: 'Evaluates clinical risk factor and alert criteria for patient scenario 225'
  },
  {
    ruleId: 'CDSS-RULE-226',
    name: 'Clinical Decision Rule 226',
    specialty: 'Specialty 7',
    severity: 'HIGH',
    logicDescription: 'Evaluates clinical risk factor and alert criteria for patient scenario 226'
  },
  {
    ruleId: 'CDSS-RULE-227',
    name: 'Clinical Decision Rule 227',
    specialty: 'Specialty 8',
    severity: 'HIGH',
    logicDescription: 'Evaluates clinical risk factor and alert criteria for patient scenario 227'
  },
  {
    ruleId: 'CDSS-RULE-228',
    name: 'Clinical Decision Rule 228',
    specialty: 'Specialty 9',
    severity: 'CRITICAL',
    logicDescription: 'Evaluates clinical risk factor and alert criteria for patient scenario 228'
  },
  {
    ruleId: 'CDSS-RULE-229',
    name: 'Clinical Decision Rule 229',
    specialty: 'Specialty 10',
    severity: 'HIGH',
    logicDescription: 'Evaluates clinical risk factor and alert criteria for patient scenario 229'
  },
  {
    ruleId: 'CDSS-RULE-230',
    name: 'Clinical Decision Rule 230',
    specialty: 'Specialty 1',
    severity: 'HIGH',
    logicDescription: 'Evaluates clinical risk factor and alert criteria for patient scenario 230'
  },
  {
    ruleId: 'CDSS-RULE-231',
    name: 'Clinical Decision Rule 231',
    specialty: 'Specialty 2',
    severity: 'CRITICAL',
    logicDescription: 'Evaluates clinical risk factor and alert criteria for patient scenario 231'
  },
  {
    ruleId: 'CDSS-RULE-232',
    name: 'Clinical Decision Rule 232',
    specialty: 'Specialty 3',
    severity: 'HIGH',
    logicDescription: 'Evaluates clinical risk factor and alert criteria for patient scenario 232'
  },
  {
    ruleId: 'CDSS-RULE-233',
    name: 'Clinical Decision Rule 233',
    specialty: 'Specialty 4',
    severity: 'HIGH',
    logicDescription: 'Evaluates clinical risk factor and alert criteria for patient scenario 233'
  },
  {
    ruleId: 'CDSS-RULE-234',
    name: 'Clinical Decision Rule 234',
    specialty: 'Specialty 5',
    severity: 'CRITICAL',
    logicDescription: 'Evaluates clinical risk factor and alert criteria for patient scenario 234'
  },
  {
    ruleId: 'CDSS-RULE-235',
    name: 'Clinical Decision Rule 235',
    specialty: 'Specialty 6',
    severity: 'HIGH',
    logicDescription: 'Evaluates clinical risk factor and alert criteria for patient scenario 235'
  },
  {
    ruleId: 'CDSS-RULE-236',
    name: 'Clinical Decision Rule 236',
    specialty: 'Specialty 7',
    severity: 'HIGH',
    logicDescription: 'Evaluates clinical risk factor and alert criteria for patient scenario 236'
  },
  {
    ruleId: 'CDSS-RULE-237',
    name: 'Clinical Decision Rule 237',
    specialty: 'Specialty 8',
    severity: 'CRITICAL',
    logicDescription: 'Evaluates clinical risk factor and alert criteria for patient scenario 237'
  },
  {
    ruleId: 'CDSS-RULE-238',
    name: 'Clinical Decision Rule 238',
    specialty: 'Specialty 9',
    severity: 'HIGH',
    logicDescription: 'Evaluates clinical risk factor and alert criteria for patient scenario 238'
  },
  {
    ruleId: 'CDSS-RULE-239',
    name: 'Clinical Decision Rule 239',
    specialty: 'Specialty 10',
    severity: 'HIGH',
    logicDescription: 'Evaluates clinical risk factor and alert criteria for patient scenario 239'
  },
  {
    ruleId: 'CDSS-RULE-240',
    name: 'Clinical Decision Rule 240',
    specialty: 'Specialty 1',
    severity: 'CRITICAL',
    logicDescription: 'Evaluates clinical risk factor and alert criteria for patient scenario 240'
  },
  {
    ruleId: 'CDSS-RULE-241',
    name: 'Clinical Decision Rule 241',
    specialty: 'Specialty 2',
    severity: 'HIGH',
    logicDescription: 'Evaluates clinical risk factor and alert criteria for patient scenario 241'
  },
  {
    ruleId: 'CDSS-RULE-242',
    name: 'Clinical Decision Rule 242',
    specialty: 'Specialty 3',
    severity: 'HIGH',
    logicDescription: 'Evaluates clinical risk factor and alert criteria for patient scenario 242'
  },
  {
    ruleId: 'CDSS-RULE-243',
    name: 'Clinical Decision Rule 243',
    specialty: 'Specialty 4',
    severity: 'CRITICAL',
    logicDescription: 'Evaluates clinical risk factor and alert criteria for patient scenario 243'
  },
  {
    ruleId: 'CDSS-RULE-244',
    name: 'Clinical Decision Rule 244',
    specialty: 'Specialty 5',
    severity: 'HIGH',
    logicDescription: 'Evaluates clinical risk factor and alert criteria for patient scenario 244'
  },
  {
    ruleId: 'CDSS-RULE-245',
    name: 'Clinical Decision Rule 245',
    specialty: 'Specialty 6',
    severity: 'HIGH',
    logicDescription: 'Evaluates clinical risk factor and alert criteria for patient scenario 245'
  },
  {
    ruleId: 'CDSS-RULE-246',
    name: 'Clinical Decision Rule 246',
    specialty: 'Specialty 7',
    severity: 'CRITICAL',
    logicDescription: 'Evaluates clinical risk factor and alert criteria for patient scenario 246'
  },
  {
    ruleId: 'CDSS-RULE-247',
    name: 'Clinical Decision Rule 247',
    specialty: 'Specialty 8',
    severity: 'HIGH',
    logicDescription: 'Evaluates clinical risk factor and alert criteria for patient scenario 247'
  },
  {
    ruleId: 'CDSS-RULE-248',
    name: 'Clinical Decision Rule 248',
    specialty: 'Specialty 9',
    severity: 'HIGH',
    logicDescription: 'Evaluates clinical risk factor and alert criteria for patient scenario 248'
  },
  {
    ruleId: 'CDSS-RULE-249',
    name: 'Clinical Decision Rule 249',
    specialty: 'Specialty 10',
    severity: 'CRITICAL',
    logicDescription: 'Evaluates clinical risk factor and alert criteria for patient scenario 249'
  },
  {
    ruleId: 'CDSS-RULE-250',
    name: 'Clinical Decision Rule 250',
    specialty: 'Specialty 1',
    severity: 'HIGH',
    logicDescription: 'Evaluates clinical risk factor and alert criteria for patient scenario 250'
  },
  {
    ruleId: 'CDSS-RULE-251',
    name: 'Clinical Decision Rule 251',
    specialty: 'Specialty 2',
    severity: 'HIGH',
    logicDescription: 'Evaluates clinical risk factor and alert criteria for patient scenario 251'
  },
  {
    ruleId: 'CDSS-RULE-252',
    name: 'Clinical Decision Rule 252',
    specialty: 'Specialty 3',
    severity: 'CRITICAL',
    logicDescription: 'Evaluates clinical risk factor and alert criteria for patient scenario 252'
  },
  {
    ruleId: 'CDSS-RULE-253',
    name: 'Clinical Decision Rule 253',
    specialty: 'Specialty 4',
    severity: 'HIGH',
    logicDescription: 'Evaluates clinical risk factor and alert criteria for patient scenario 253'
  },
  {
    ruleId: 'CDSS-RULE-254',
    name: 'Clinical Decision Rule 254',
    specialty: 'Specialty 5',
    severity: 'HIGH',
    logicDescription: 'Evaluates clinical risk factor and alert criteria for patient scenario 254'
  },
  {
    ruleId: 'CDSS-RULE-255',
    name: 'Clinical Decision Rule 255',
    specialty: 'Specialty 6',
    severity: 'CRITICAL',
    logicDescription: 'Evaluates clinical risk factor and alert criteria for patient scenario 255'
  },
  {
    ruleId: 'CDSS-RULE-256',
    name: 'Clinical Decision Rule 256',
    specialty: 'Specialty 7',
    severity: 'HIGH',
    logicDescription: 'Evaluates clinical risk factor and alert criteria for patient scenario 256'
  },
  {
    ruleId: 'CDSS-RULE-257',
    name: 'Clinical Decision Rule 257',
    specialty: 'Specialty 8',
    severity: 'HIGH',
    logicDescription: 'Evaluates clinical risk factor and alert criteria for patient scenario 257'
  },
  {
    ruleId: 'CDSS-RULE-258',
    name: 'Clinical Decision Rule 258',
    specialty: 'Specialty 9',
    severity: 'CRITICAL',
    logicDescription: 'Evaluates clinical risk factor and alert criteria for patient scenario 258'
  },
  {
    ruleId: 'CDSS-RULE-259',
    name: 'Clinical Decision Rule 259',
    specialty: 'Specialty 10',
    severity: 'HIGH',
    logicDescription: 'Evaluates clinical risk factor and alert criteria for patient scenario 259'
  },
  {
    ruleId: 'CDSS-RULE-260',
    name: 'Clinical Decision Rule 260',
    specialty: 'Specialty 1',
    severity: 'HIGH',
    logicDescription: 'Evaluates clinical risk factor and alert criteria for patient scenario 260'
  },
  {
    ruleId: 'CDSS-RULE-261',
    name: 'Clinical Decision Rule 261',
    specialty: 'Specialty 2',
    severity: 'CRITICAL',
    logicDescription: 'Evaluates clinical risk factor and alert criteria for patient scenario 261'
  },
  {
    ruleId: 'CDSS-RULE-262',
    name: 'Clinical Decision Rule 262',
    specialty: 'Specialty 3',
    severity: 'HIGH',
    logicDescription: 'Evaluates clinical risk factor and alert criteria for patient scenario 262'
  },
  {
    ruleId: 'CDSS-RULE-263',
    name: 'Clinical Decision Rule 263',
    specialty: 'Specialty 4',
    severity: 'HIGH',
    logicDescription: 'Evaluates clinical risk factor and alert criteria for patient scenario 263'
  },
  {
    ruleId: 'CDSS-RULE-264',
    name: 'Clinical Decision Rule 264',
    specialty: 'Specialty 5',
    severity: 'CRITICAL',
    logicDescription: 'Evaluates clinical risk factor and alert criteria for patient scenario 264'
  },
  {
    ruleId: 'CDSS-RULE-265',
    name: 'Clinical Decision Rule 265',
    specialty: 'Specialty 6',
    severity: 'HIGH',
    logicDescription: 'Evaluates clinical risk factor and alert criteria for patient scenario 265'
  },
  {
    ruleId: 'CDSS-RULE-266',
    name: 'Clinical Decision Rule 266',
    specialty: 'Specialty 7',
    severity: 'HIGH',
    logicDescription: 'Evaluates clinical risk factor and alert criteria for patient scenario 266'
  },
  {
    ruleId: 'CDSS-RULE-267',
    name: 'Clinical Decision Rule 267',
    specialty: 'Specialty 8',
    severity: 'CRITICAL',
    logicDescription: 'Evaluates clinical risk factor and alert criteria for patient scenario 267'
  },
  {
    ruleId: 'CDSS-RULE-268',
    name: 'Clinical Decision Rule 268',
    specialty: 'Specialty 9',
    severity: 'HIGH',
    logicDescription: 'Evaluates clinical risk factor and alert criteria for patient scenario 268'
  },
  {
    ruleId: 'CDSS-RULE-269',
    name: 'Clinical Decision Rule 269',
    specialty: 'Specialty 10',
    severity: 'HIGH',
    logicDescription: 'Evaluates clinical risk factor and alert criteria for patient scenario 269'
  },
  {
    ruleId: 'CDSS-RULE-270',
    name: 'Clinical Decision Rule 270',
    specialty: 'Specialty 1',
    severity: 'CRITICAL',
    logicDescription: 'Evaluates clinical risk factor and alert criteria for patient scenario 270'
  },
  {
    ruleId: 'CDSS-RULE-271',
    name: 'Clinical Decision Rule 271',
    specialty: 'Specialty 2',
    severity: 'HIGH',
    logicDescription: 'Evaluates clinical risk factor and alert criteria for patient scenario 271'
  },
  {
    ruleId: 'CDSS-RULE-272',
    name: 'Clinical Decision Rule 272',
    specialty: 'Specialty 3',
    severity: 'HIGH',
    logicDescription: 'Evaluates clinical risk factor and alert criteria for patient scenario 272'
  },
  {
    ruleId: 'CDSS-RULE-273',
    name: 'Clinical Decision Rule 273',
    specialty: 'Specialty 4',
    severity: 'CRITICAL',
    logicDescription: 'Evaluates clinical risk factor and alert criteria for patient scenario 273'
  },
  {
    ruleId: 'CDSS-RULE-274',
    name: 'Clinical Decision Rule 274',
    specialty: 'Specialty 5',
    severity: 'HIGH',
    logicDescription: 'Evaluates clinical risk factor and alert criteria for patient scenario 274'
  },
  {
    ruleId: 'CDSS-RULE-275',
    name: 'Clinical Decision Rule 275',
    specialty: 'Specialty 6',
    severity: 'HIGH',
    logicDescription: 'Evaluates clinical risk factor and alert criteria for patient scenario 275'
  },
  {
    ruleId: 'CDSS-RULE-276',
    name: 'Clinical Decision Rule 276',
    specialty: 'Specialty 7',
    severity: 'CRITICAL',
    logicDescription: 'Evaluates clinical risk factor and alert criteria for patient scenario 276'
  },
  {
    ruleId: 'CDSS-RULE-277',
    name: 'Clinical Decision Rule 277',
    specialty: 'Specialty 8',
    severity: 'HIGH',
    logicDescription: 'Evaluates clinical risk factor and alert criteria for patient scenario 277'
  },
  {
    ruleId: 'CDSS-RULE-278',
    name: 'Clinical Decision Rule 278',
    specialty: 'Specialty 9',
    severity: 'HIGH',
    logicDescription: 'Evaluates clinical risk factor and alert criteria for patient scenario 278'
  },
  {
    ruleId: 'CDSS-RULE-279',
    name: 'Clinical Decision Rule 279',
    specialty: 'Specialty 10',
    severity: 'CRITICAL',
    logicDescription: 'Evaluates clinical risk factor and alert criteria for patient scenario 279'
  },
  {
    ruleId: 'CDSS-RULE-280',
    name: 'Clinical Decision Rule 280',
    specialty: 'Specialty 1',
    severity: 'HIGH',
    logicDescription: 'Evaluates clinical risk factor and alert criteria for patient scenario 280'
  },
  {
    ruleId: 'CDSS-RULE-281',
    name: 'Clinical Decision Rule 281',
    specialty: 'Specialty 2',
    severity: 'HIGH',
    logicDescription: 'Evaluates clinical risk factor and alert criteria for patient scenario 281'
  },
  {
    ruleId: 'CDSS-RULE-282',
    name: 'Clinical Decision Rule 282',
    specialty: 'Specialty 3',
    severity: 'CRITICAL',
    logicDescription: 'Evaluates clinical risk factor and alert criteria for patient scenario 282'
  },
  {
    ruleId: 'CDSS-RULE-283',
    name: 'Clinical Decision Rule 283',
    specialty: 'Specialty 4',
    severity: 'HIGH',
    logicDescription: 'Evaluates clinical risk factor and alert criteria for patient scenario 283'
  },
  {
    ruleId: 'CDSS-RULE-284',
    name: 'Clinical Decision Rule 284',
    specialty: 'Specialty 5',
    severity: 'HIGH',
    logicDescription: 'Evaluates clinical risk factor and alert criteria for patient scenario 284'
  },
  {
    ruleId: 'CDSS-RULE-285',
    name: 'Clinical Decision Rule 285',
    specialty: 'Specialty 6',
    severity: 'CRITICAL',
    logicDescription: 'Evaluates clinical risk factor and alert criteria for patient scenario 285'
  },
  {
    ruleId: 'CDSS-RULE-286',
    name: 'Clinical Decision Rule 286',
    specialty: 'Specialty 7',
    severity: 'HIGH',
    logicDescription: 'Evaluates clinical risk factor and alert criteria for patient scenario 286'
  },
  {
    ruleId: 'CDSS-RULE-287',
    name: 'Clinical Decision Rule 287',
    specialty: 'Specialty 8',
    severity: 'HIGH',
    logicDescription: 'Evaluates clinical risk factor and alert criteria for patient scenario 287'
  },
  {
    ruleId: 'CDSS-RULE-288',
    name: 'Clinical Decision Rule 288',
    specialty: 'Specialty 9',
    severity: 'CRITICAL',
    logicDescription: 'Evaluates clinical risk factor and alert criteria for patient scenario 288'
  },
  {
    ruleId: 'CDSS-RULE-289',
    name: 'Clinical Decision Rule 289',
    specialty: 'Specialty 10',
    severity: 'HIGH',
    logicDescription: 'Evaluates clinical risk factor and alert criteria for patient scenario 289'
  },
  {
    ruleId: 'CDSS-RULE-290',
    name: 'Clinical Decision Rule 290',
    specialty: 'Specialty 1',
    severity: 'HIGH',
    logicDescription: 'Evaluates clinical risk factor and alert criteria for patient scenario 290'
  },
  {
    ruleId: 'CDSS-RULE-291',
    name: 'Clinical Decision Rule 291',
    specialty: 'Specialty 2',
    severity: 'CRITICAL',
    logicDescription: 'Evaluates clinical risk factor and alert criteria for patient scenario 291'
  },
  {
    ruleId: 'CDSS-RULE-292',
    name: 'Clinical Decision Rule 292',
    specialty: 'Specialty 3',
    severity: 'HIGH',
    logicDescription: 'Evaluates clinical risk factor and alert criteria for patient scenario 292'
  },
  {
    ruleId: 'CDSS-RULE-293',
    name: 'Clinical Decision Rule 293',
    specialty: 'Specialty 4',
    severity: 'HIGH',
    logicDescription: 'Evaluates clinical risk factor and alert criteria for patient scenario 293'
  },
  {
    ruleId: 'CDSS-RULE-294',
    name: 'Clinical Decision Rule 294',
    specialty: 'Specialty 5',
    severity: 'CRITICAL',
    logicDescription: 'Evaluates clinical risk factor and alert criteria for patient scenario 294'
  },
  {
    ruleId: 'CDSS-RULE-295',
    name: 'Clinical Decision Rule 295',
    specialty: 'Specialty 6',
    severity: 'HIGH',
    logicDescription: 'Evaluates clinical risk factor and alert criteria for patient scenario 295'
  },
  {
    ruleId: 'CDSS-RULE-296',
    name: 'Clinical Decision Rule 296',
    specialty: 'Specialty 7',
    severity: 'HIGH',
    logicDescription: 'Evaluates clinical risk factor and alert criteria for patient scenario 296'
  },
  {
    ruleId: 'CDSS-RULE-297',
    name: 'Clinical Decision Rule 297',
    specialty: 'Specialty 8',
    severity: 'CRITICAL',
    logicDescription: 'Evaluates clinical risk factor and alert criteria for patient scenario 297'
  },
  {
    ruleId: 'CDSS-RULE-298',
    name: 'Clinical Decision Rule 298',
    specialty: 'Specialty 9',
    severity: 'HIGH',
    logicDescription: 'Evaluates clinical risk factor and alert criteria for patient scenario 298'
  },
  {
    ruleId: 'CDSS-RULE-299',
    name: 'Clinical Decision Rule 299',
    specialty: 'Specialty 10',
    severity: 'HIGH',
    logicDescription: 'Evaluates clinical risk factor and alert criteria for patient scenario 299'
  },
  {
    ruleId: 'CDSS-RULE-300',
    name: 'Clinical Decision Rule 300',
    specialty: 'Specialty 1',
    severity: 'CRITICAL',
    logicDescription: 'Evaluates clinical risk factor and alert criteria for patient scenario 300'
  },
  {
    ruleId: 'CDSS-RULE-301',
    name: 'Clinical Decision Rule 301',
    specialty: 'Specialty 2',
    severity: 'HIGH',
    logicDescription: 'Evaluates clinical risk factor and alert criteria for patient scenario 301'
  },
  {
    ruleId: 'CDSS-RULE-302',
    name: 'Clinical Decision Rule 302',
    specialty: 'Specialty 3',
    severity: 'HIGH',
    logicDescription: 'Evaluates clinical risk factor and alert criteria for patient scenario 302'
  },
  {
    ruleId: 'CDSS-RULE-303',
    name: 'Clinical Decision Rule 303',
    specialty: 'Specialty 4',
    severity: 'CRITICAL',
    logicDescription: 'Evaluates clinical risk factor and alert criteria for patient scenario 303'
  },
  {
    ruleId: 'CDSS-RULE-304',
    name: 'Clinical Decision Rule 304',
    specialty: 'Specialty 5',
    severity: 'HIGH',
    logicDescription: 'Evaluates clinical risk factor and alert criteria for patient scenario 304'
  },
  {
    ruleId: 'CDSS-RULE-305',
    name: 'Clinical Decision Rule 305',
    specialty: 'Specialty 6',
    severity: 'HIGH',
    logicDescription: 'Evaluates clinical risk factor and alert criteria for patient scenario 305'
  },
  {
    ruleId: 'CDSS-RULE-306',
    name: 'Clinical Decision Rule 306',
    specialty: 'Specialty 7',
    severity: 'CRITICAL',
    logicDescription: 'Evaluates clinical risk factor and alert criteria for patient scenario 306'
  },
  {
    ruleId: 'CDSS-RULE-307',
    name: 'Clinical Decision Rule 307',
    specialty: 'Specialty 8',
    severity: 'HIGH',
    logicDescription: 'Evaluates clinical risk factor and alert criteria for patient scenario 307'
  },
  {
    ruleId: 'CDSS-RULE-308',
    name: 'Clinical Decision Rule 308',
    specialty: 'Specialty 9',
    severity: 'HIGH',
    logicDescription: 'Evaluates clinical risk factor and alert criteria for patient scenario 308'
  },
  {
    ruleId: 'CDSS-RULE-309',
    name: 'Clinical Decision Rule 309',
    specialty: 'Specialty 10',
    severity: 'CRITICAL',
    logicDescription: 'Evaluates clinical risk factor and alert criteria for patient scenario 309'
  },
  {
    ruleId: 'CDSS-RULE-310',
    name: 'Clinical Decision Rule 310',
    specialty: 'Specialty 1',
    severity: 'HIGH',
    logicDescription: 'Evaluates clinical risk factor and alert criteria for patient scenario 310'
  },
  {
    ruleId: 'CDSS-RULE-311',
    name: 'Clinical Decision Rule 311',
    specialty: 'Specialty 2',
    severity: 'HIGH',
    logicDescription: 'Evaluates clinical risk factor and alert criteria for patient scenario 311'
  },
  {
    ruleId: 'CDSS-RULE-312',
    name: 'Clinical Decision Rule 312',
    specialty: 'Specialty 3',
    severity: 'CRITICAL',
    logicDescription: 'Evaluates clinical risk factor and alert criteria for patient scenario 312'
  },
  {
    ruleId: 'CDSS-RULE-313',
    name: 'Clinical Decision Rule 313',
    specialty: 'Specialty 4',
    severity: 'HIGH',
    logicDescription: 'Evaluates clinical risk factor and alert criteria for patient scenario 313'
  },
  {
    ruleId: 'CDSS-RULE-314',
    name: 'Clinical Decision Rule 314',
    specialty: 'Specialty 5',
    severity: 'HIGH',
    logicDescription: 'Evaluates clinical risk factor and alert criteria for patient scenario 314'
  },
  {
    ruleId: 'CDSS-RULE-315',
    name: 'Clinical Decision Rule 315',
    specialty: 'Specialty 6',
    severity: 'CRITICAL',
    logicDescription: 'Evaluates clinical risk factor and alert criteria for patient scenario 315'
  },
  {
    ruleId: 'CDSS-RULE-316',
    name: 'Clinical Decision Rule 316',
    specialty: 'Specialty 7',
    severity: 'HIGH',
    logicDescription: 'Evaluates clinical risk factor and alert criteria for patient scenario 316'
  },
  {
    ruleId: 'CDSS-RULE-317',
    name: 'Clinical Decision Rule 317',
    specialty: 'Specialty 8',
    severity: 'HIGH',
    logicDescription: 'Evaluates clinical risk factor and alert criteria for patient scenario 317'
  },
  {
    ruleId: 'CDSS-RULE-318',
    name: 'Clinical Decision Rule 318',
    specialty: 'Specialty 9',
    severity: 'CRITICAL',
    logicDescription: 'Evaluates clinical risk factor and alert criteria for patient scenario 318'
  },
  {
    ruleId: 'CDSS-RULE-319',
    name: 'Clinical Decision Rule 319',
    specialty: 'Specialty 10',
    severity: 'HIGH',
    logicDescription: 'Evaluates clinical risk factor and alert criteria for patient scenario 319'
  },
  {
    ruleId: 'CDSS-RULE-320',
    name: 'Clinical Decision Rule 320',
    specialty: 'Specialty 1',
    severity: 'HIGH',
    logicDescription: 'Evaluates clinical risk factor and alert criteria for patient scenario 320'
  },
  {
    ruleId: 'CDSS-RULE-321',
    name: 'Clinical Decision Rule 321',
    specialty: 'Specialty 2',
    severity: 'CRITICAL',
    logicDescription: 'Evaluates clinical risk factor and alert criteria for patient scenario 321'
  },
  {
    ruleId: 'CDSS-RULE-322',
    name: 'Clinical Decision Rule 322',
    specialty: 'Specialty 3',
    severity: 'HIGH',
    logicDescription: 'Evaluates clinical risk factor and alert criteria for patient scenario 322'
  },
  {
    ruleId: 'CDSS-RULE-323',
    name: 'Clinical Decision Rule 323',
    specialty: 'Specialty 4',
    severity: 'HIGH',
    logicDescription: 'Evaluates clinical risk factor and alert criteria for patient scenario 323'
  },
  {
    ruleId: 'CDSS-RULE-324',
    name: 'Clinical Decision Rule 324',
    specialty: 'Specialty 5',
    severity: 'CRITICAL',
    logicDescription: 'Evaluates clinical risk factor and alert criteria for patient scenario 324'
  },
  {
    ruleId: 'CDSS-RULE-325',
    name: 'Clinical Decision Rule 325',
    specialty: 'Specialty 6',
    severity: 'HIGH',
    logicDescription: 'Evaluates clinical risk factor and alert criteria for patient scenario 325'
  },
  {
    ruleId: 'CDSS-RULE-326',
    name: 'Clinical Decision Rule 326',
    specialty: 'Specialty 7',
    severity: 'HIGH',
    logicDescription: 'Evaluates clinical risk factor and alert criteria for patient scenario 326'
  },
  {
    ruleId: 'CDSS-RULE-327',
    name: 'Clinical Decision Rule 327',
    specialty: 'Specialty 8',
    severity: 'CRITICAL',
    logicDescription: 'Evaluates clinical risk factor and alert criteria for patient scenario 327'
  },
  {
    ruleId: 'CDSS-RULE-328',
    name: 'Clinical Decision Rule 328',
    specialty: 'Specialty 9',
    severity: 'HIGH',
    logicDescription: 'Evaluates clinical risk factor and alert criteria for patient scenario 328'
  },
  {
    ruleId: 'CDSS-RULE-329',
    name: 'Clinical Decision Rule 329',
    specialty: 'Specialty 10',
    severity: 'HIGH',
    logicDescription: 'Evaluates clinical risk factor and alert criteria for patient scenario 329'
  },
  {
    ruleId: 'CDSS-RULE-330',
    name: 'Clinical Decision Rule 330',
    specialty: 'Specialty 1',
    severity: 'CRITICAL',
    logicDescription: 'Evaluates clinical risk factor and alert criteria for patient scenario 330'
  },
  {
    ruleId: 'CDSS-RULE-331',
    name: 'Clinical Decision Rule 331',
    specialty: 'Specialty 2',
    severity: 'HIGH',
    logicDescription: 'Evaluates clinical risk factor and alert criteria for patient scenario 331'
  },
  {
    ruleId: 'CDSS-RULE-332',
    name: 'Clinical Decision Rule 332',
    specialty: 'Specialty 3',
    severity: 'HIGH',
    logicDescription: 'Evaluates clinical risk factor and alert criteria for patient scenario 332'
  },
  {
    ruleId: 'CDSS-RULE-333',
    name: 'Clinical Decision Rule 333',
    specialty: 'Specialty 4',
    severity: 'CRITICAL',
    logicDescription: 'Evaluates clinical risk factor and alert criteria for patient scenario 333'
  },
  {
    ruleId: 'CDSS-RULE-334',
    name: 'Clinical Decision Rule 334',
    specialty: 'Specialty 5',
    severity: 'HIGH',
    logicDescription: 'Evaluates clinical risk factor and alert criteria for patient scenario 334'
  },
  {
    ruleId: 'CDSS-RULE-335',
    name: 'Clinical Decision Rule 335',
    specialty: 'Specialty 6',
    severity: 'HIGH',
    logicDescription: 'Evaluates clinical risk factor and alert criteria for patient scenario 335'
  },
  {
    ruleId: 'CDSS-RULE-336',
    name: 'Clinical Decision Rule 336',
    specialty: 'Specialty 7',
    severity: 'CRITICAL',
    logicDescription: 'Evaluates clinical risk factor and alert criteria for patient scenario 336'
  },
  {
    ruleId: 'CDSS-RULE-337',
    name: 'Clinical Decision Rule 337',
    specialty: 'Specialty 8',
    severity: 'HIGH',
    logicDescription: 'Evaluates clinical risk factor and alert criteria for patient scenario 337'
  },
  {
    ruleId: 'CDSS-RULE-338',
    name: 'Clinical Decision Rule 338',
    specialty: 'Specialty 9',
    severity: 'HIGH',
    logicDescription: 'Evaluates clinical risk factor and alert criteria for patient scenario 338'
  },
  {
    ruleId: 'CDSS-RULE-339',
    name: 'Clinical Decision Rule 339',
    specialty: 'Specialty 10',
    severity: 'CRITICAL',
    logicDescription: 'Evaluates clinical risk factor and alert criteria for patient scenario 339'
  },
  {
    ruleId: 'CDSS-RULE-340',
    name: 'Clinical Decision Rule 340',
    specialty: 'Specialty 1',
    severity: 'HIGH',
    logicDescription: 'Evaluates clinical risk factor and alert criteria for patient scenario 340'
  },
  {
    ruleId: 'CDSS-RULE-341',
    name: 'Clinical Decision Rule 341',
    specialty: 'Specialty 2',
    severity: 'HIGH',
    logicDescription: 'Evaluates clinical risk factor and alert criteria for patient scenario 341'
  },
  {
    ruleId: 'CDSS-RULE-342',
    name: 'Clinical Decision Rule 342',
    specialty: 'Specialty 3',
    severity: 'CRITICAL',
    logicDescription: 'Evaluates clinical risk factor and alert criteria for patient scenario 342'
  },
  {
    ruleId: 'CDSS-RULE-343',
    name: 'Clinical Decision Rule 343',
    specialty: 'Specialty 4',
    severity: 'HIGH',
    logicDescription: 'Evaluates clinical risk factor and alert criteria for patient scenario 343'
  },
  {
    ruleId: 'CDSS-RULE-344',
    name: 'Clinical Decision Rule 344',
    specialty: 'Specialty 5',
    severity: 'HIGH',
    logicDescription: 'Evaluates clinical risk factor and alert criteria for patient scenario 344'
  },
  {
    ruleId: 'CDSS-RULE-345',
    name: 'Clinical Decision Rule 345',
    specialty: 'Specialty 6',
    severity: 'CRITICAL',
    logicDescription: 'Evaluates clinical risk factor and alert criteria for patient scenario 345'
  },
  {
    ruleId: 'CDSS-RULE-346',
    name: 'Clinical Decision Rule 346',
    specialty: 'Specialty 7',
    severity: 'HIGH',
    logicDescription: 'Evaluates clinical risk factor and alert criteria for patient scenario 346'
  },
  {
    ruleId: 'CDSS-RULE-347',
    name: 'Clinical Decision Rule 347',
    specialty: 'Specialty 8',
    severity: 'HIGH',
    logicDescription: 'Evaluates clinical risk factor and alert criteria for patient scenario 347'
  },
  {
    ruleId: 'CDSS-RULE-348',
    name: 'Clinical Decision Rule 348',
    specialty: 'Specialty 9',
    severity: 'CRITICAL',
    logicDescription: 'Evaluates clinical risk factor and alert criteria for patient scenario 348'
  },
  {
    ruleId: 'CDSS-RULE-349',
    name: 'Clinical Decision Rule 349',
    specialty: 'Specialty 10',
    severity: 'HIGH',
    logicDescription: 'Evaluates clinical risk factor and alert criteria for patient scenario 349'
  },
  {
    ruleId: 'CDSS-RULE-350',
    name: 'Clinical Decision Rule 350',
    specialty: 'Specialty 1',
    severity: 'HIGH',
    logicDescription: 'Evaluates clinical risk factor and alert criteria for patient scenario 350'
  },
];

export class CDSSRuleEngine {
  static evaluateRule(id: string): CDSSRule | undefined {
    return EXTENDED_CDSS_RULES.find(r => r.ruleId === id);
  }
}

/**
 * AegisEHR Enterprise Health Platform - Chronic Care Plan Templates
 */

export interface ChronicCarePlan {
  planId: string;
  conditionName: string;
  icd10Code: string;
  goals: Array<{ goalId: string; description: string; targetDays: number }>;
  interventions: Array<{ interventionId: string; title: string; category: string }>;
}

export const CHRONIC_CARE_PLANS: ChronicCarePlan[] = [
  {
    planId: 'PLAN-1',
    conditionName: 'Chronic Condition Management Plan 1',
    icd10Code: 'CHRONIC-1',
    goals: [
      { goalId: 'G-1', description: 'Maintain optimal clinical control metrics', targetDays: 90 },
      { goalId: 'G-2', description: 'Prevent acute exacerbation and emergency room visits', targetDays: 180 }
    ],
    interventions: [
      { interventionId: 'INT-1', title: 'Daily vitals monitoring & remote patient telemetry', category: 'Monitoring' },
      { interventionId: 'INT-2', title: 'Medication adherence counseling & automated refills', category: 'Pharmacy' }
    ]
  },
  {
    planId: 'PLAN-2',
    conditionName: 'Chronic Condition Management Plan 2',
    icd10Code: 'CHRONIC-2',
    goals: [
      { goalId: 'G-1', description: 'Maintain optimal clinical control metrics', targetDays: 90 },
      { goalId: 'G-2', description: 'Prevent acute exacerbation and emergency room visits', targetDays: 180 }
    ],
    interventions: [
      { interventionId: 'INT-1', title: 'Daily vitals monitoring & remote patient telemetry', category: 'Monitoring' },
      { interventionId: 'INT-2', title: 'Medication adherence counseling & automated refills', category: 'Pharmacy' }
    ]
  },
  {
    planId: 'PLAN-3',
    conditionName: 'Chronic Condition Management Plan 3',
    icd10Code: 'CHRONIC-3',
    goals: [
      { goalId: 'G-1', description: 'Maintain optimal clinical control metrics', targetDays: 90 },
      { goalId: 'G-2', description: 'Prevent acute exacerbation and emergency room visits', targetDays: 180 }
    ],
    interventions: [
      { interventionId: 'INT-1', title: 'Daily vitals monitoring & remote patient telemetry', category: 'Monitoring' },
      { interventionId: 'INT-2', title: 'Medication adherence counseling & automated refills', category: 'Pharmacy' }
    ]
  },
  {
    planId: 'PLAN-4',
    conditionName: 'Chronic Condition Management Plan 4',
    icd10Code: 'CHRONIC-4',
    goals: [
      { goalId: 'G-1', description: 'Maintain optimal clinical control metrics', targetDays: 90 },
      { goalId: 'G-2', description: 'Prevent acute exacerbation and emergency room visits', targetDays: 180 }
    ],
    interventions: [
      { interventionId: 'INT-1', title: 'Daily vitals monitoring & remote patient telemetry', category: 'Monitoring' },
      { interventionId: 'INT-2', title: 'Medication adherence counseling & automated refills', category: 'Pharmacy' }
    ]
  },
  {
    planId: 'PLAN-5',
    conditionName: 'Chronic Condition Management Plan 5',
    icd10Code: 'CHRONIC-5',
    goals: [
      { goalId: 'G-1', description: 'Maintain optimal clinical control metrics', targetDays: 90 },
      { goalId: 'G-2', description: 'Prevent acute exacerbation and emergency room visits', targetDays: 180 }
    ],
    interventions: [
      { interventionId: 'INT-1', title: 'Daily vitals monitoring & remote patient telemetry', category: 'Monitoring' },
      { interventionId: 'INT-2', title: 'Medication adherence counseling & automated refills', category: 'Pharmacy' }
    ]
  },
  {
    planId: 'PLAN-6',
    conditionName: 'Chronic Condition Management Plan 6',
    icd10Code: 'CHRONIC-6',
    goals: [
      { goalId: 'G-1', description: 'Maintain optimal clinical control metrics', targetDays: 90 },
      { goalId: 'G-2', description: 'Prevent acute exacerbation and emergency room visits', targetDays: 180 }
    ],
    interventions: [
      { interventionId: 'INT-1', title: 'Daily vitals monitoring & remote patient telemetry', category: 'Monitoring' },
      { interventionId: 'INT-2', title: 'Medication adherence counseling & automated refills', category: 'Pharmacy' }
    ]
  },
  {
    planId: 'PLAN-7',
    conditionName: 'Chronic Condition Management Plan 7',
    icd10Code: 'CHRONIC-7',
    goals: [
      { goalId: 'G-1', description: 'Maintain optimal clinical control metrics', targetDays: 90 },
      { goalId: 'G-2', description: 'Prevent acute exacerbation and emergency room visits', targetDays: 180 }
    ],
    interventions: [
      { interventionId: 'INT-1', title: 'Daily vitals monitoring & remote patient telemetry', category: 'Monitoring' },
      { interventionId: 'INT-2', title: 'Medication adherence counseling & automated refills', category: 'Pharmacy' }
    ]
  },
  {
    planId: 'PLAN-8',
    conditionName: 'Chronic Condition Management Plan 8',
    icd10Code: 'CHRONIC-8',
    goals: [
      { goalId: 'G-1', description: 'Maintain optimal clinical control metrics', targetDays: 90 },
      { goalId: 'G-2', description: 'Prevent acute exacerbation and emergency room visits', targetDays: 180 }
    ],
    interventions: [
      { interventionId: 'INT-1', title: 'Daily vitals monitoring & remote patient telemetry', category: 'Monitoring' },
      { interventionId: 'INT-2', title: 'Medication adherence counseling & automated refills', category: 'Pharmacy' }
    ]
  },
  {
    planId: 'PLAN-9',
    conditionName: 'Chronic Condition Management Plan 9',
    icd10Code: 'CHRONIC-9',
    goals: [
      { goalId: 'G-1', description: 'Maintain optimal clinical control metrics', targetDays: 90 },
      { goalId: 'G-2', description: 'Prevent acute exacerbation and emergency room visits', targetDays: 180 }
    ],
    interventions: [
      { interventionId: 'INT-1', title: 'Daily vitals monitoring & remote patient telemetry', category: 'Monitoring' },
      { interventionId: 'INT-2', title: 'Medication adherence counseling & automated refills', category: 'Pharmacy' }
    ]
  },
  {
    planId: 'PLAN-10',
    conditionName: 'Chronic Condition Management Plan 10',
    icd10Code: 'CHRONIC-10',
    goals: [
      { goalId: 'G-1', description: 'Maintain optimal clinical control metrics', targetDays: 90 },
      { goalId: 'G-2', description: 'Prevent acute exacerbation and emergency room visits', targetDays: 180 }
    ],
    interventions: [
      { interventionId: 'INT-1', title: 'Daily vitals monitoring & remote patient telemetry', category: 'Monitoring' },
      { interventionId: 'INT-2', title: 'Medication adherence counseling & automated refills', category: 'Pharmacy' }
    ]
  },
  {
    planId: 'PLAN-11',
    conditionName: 'Chronic Condition Management Plan 11',
    icd10Code: 'CHRONIC-11',
    goals: [
      { goalId: 'G-1', description: 'Maintain optimal clinical control metrics', targetDays: 90 },
      { goalId: 'G-2', description: 'Prevent acute exacerbation and emergency room visits', targetDays: 180 }
    ],
    interventions: [
      { interventionId: 'INT-1', title: 'Daily vitals monitoring & remote patient telemetry', category: 'Monitoring' },
      { interventionId: 'INT-2', title: 'Medication adherence counseling & automated refills', category: 'Pharmacy' }
    ]
  },
  {
    planId: 'PLAN-12',
    conditionName: 'Chronic Condition Management Plan 12',
    icd10Code: 'CHRONIC-12',
    goals: [
      { goalId: 'G-1', description: 'Maintain optimal clinical control metrics', targetDays: 90 },
      { goalId: 'G-2', description: 'Prevent acute exacerbation and emergency room visits', targetDays: 180 }
    ],
    interventions: [
      { interventionId: 'INT-1', title: 'Daily vitals monitoring & remote patient telemetry', category: 'Monitoring' },
      { interventionId: 'INT-2', title: 'Medication adherence counseling & automated refills', category: 'Pharmacy' }
    ]
  },
  {
    planId: 'PLAN-13',
    conditionName: 'Chronic Condition Management Plan 13',
    icd10Code: 'CHRONIC-13',
    goals: [
      { goalId: 'G-1', description: 'Maintain optimal clinical control metrics', targetDays: 90 },
      { goalId: 'G-2', description: 'Prevent acute exacerbation and emergency room visits', targetDays: 180 }
    ],
    interventions: [
      { interventionId: 'INT-1', title: 'Daily vitals monitoring & remote patient telemetry', category: 'Monitoring' },
      { interventionId: 'INT-2', title: 'Medication adherence counseling & automated refills', category: 'Pharmacy' }
    ]
  },
  {
    planId: 'PLAN-14',
    conditionName: 'Chronic Condition Management Plan 14',
    icd10Code: 'CHRONIC-14',
    goals: [
      { goalId: 'G-1', description: 'Maintain optimal clinical control metrics', targetDays: 90 },
      { goalId: 'G-2', description: 'Prevent acute exacerbation and emergency room visits', targetDays: 180 }
    ],
    interventions: [
      { interventionId: 'INT-1', title: 'Daily vitals monitoring & remote patient telemetry', category: 'Monitoring' },
      { interventionId: 'INT-2', title: 'Medication adherence counseling & automated refills', category: 'Pharmacy' }
    ]
  },
  {
    planId: 'PLAN-15',
    conditionName: 'Chronic Condition Management Plan 15',
    icd10Code: 'CHRONIC-15',
    goals: [
      { goalId: 'G-1', description: 'Maintain optimal clinical control metrics', targetDays: 90 },
      { goalId: 'G-2', description: 'Prevent acute exacerbation and emergency room visits', targetDays: 180 }
    ],
    interventions: [
      { interventionId: 'INT-1', title: 'Daily vitals monitoring & remote patient telemetry', category: 'Monitoring' },
      { interventionId: 'INT-2', title: 'Medication adherence counseling & automated refills', category: 'Pharmacy' }
    ]
  },
  {
    planId: 'PLAN-16',
    conditionName: 'Chronic Condition Management Plan 16',
    icd10Code: 'CHRONIC-16',
    goals: [
      { goalId: 'G-1', description: 'Maintain optimal clinical control metrics', targetDays: 90 },
      { goalId: 'G-2', description: 'Prevent acute exacerbation and emergency room visits', targetDays: 180 }
    ],
    interventions: [
      { interventionId: 'INT-1', title: 'Daily vitals monitoring & remote patient telemetry', category: 'Monitoring' },
      { interventionId: 'INT-2', title: 'Medication adherence counseling & automated refills', category: 'Pharmacy' }
    ]
  },
  {
    planId: 'PLAN-17',
    conditionName: 'Chronic Condition Management Plan 17',
    icd10Code: 'CHRONIC-17',
    goals: [
      { goalId: 'G-1', description: 'Maintain optimal clinical control metrics', targetDays: 90 },
      { goalId: 'G-2', description: 'Prevent acute exacerbation and emergency room visits', targetDays: 180 }
    ],
    interventions: [
      { interventionId: 'INT-1', title: 'Daily vitals monitoring & remote patient telemetry', category: 'Monitoring' },
      { interventionId: 'INT-2', title: 'Medication adherence counseling & automated refills', category: 'Pharmacy' }
    ]
  },
  {
    planId: 'PLAN-18',
    conditionName: 'Chronic Condition Management Plan 18',
    icd10Code: 'CHRONIC-18',
    goals: [
      { goalId: 'G-1', description: 'Maintain optimal clinical control metrics', targetDays: 90 },
      { goalId: 'G-2', description: 'Prevent acute exacerbation and emergency room visits', targetDays: 180 }
    ],
    interventions: [
      { interventionId: 'INT-1', title: 'Daily vitals monitoring & remote patient telemetry', category: 'Monitoring' },
      { interventionId: 'INT-2', title: 'Medication adherence counseling & automated refills', category: 'Pharmacy' }
    ]
  },
  {
    planId: 'PLAN-19',
    conditionName: 'Chronic Condition Management Plan 19',
    icd10Code: 'CHRONIC-19',
    goals: [
      { goalId: 'G-1', description: 'Maintain optimal clinical control metrics', targetDays: 90 },
      { goalId: 'G-2', description: 'Prevent acute exacerbation and emergency room visits', targetDays: 180 }
    ],
    interventions: [
      { interventionId: 'INT-1', title: 'Daily vitals monitoring & remote patient telemetry', category: 'Monitoring' },
      { interventionId: 'INT-2', title: 'Medication adherence counseling & automated refills', category: 'Pharmacy' }
    ]
  },
  {
    planId: 'PLAN-20',
    conditionName: 'Chronic Condition Management Plan 20',
    icd10Code: 'CHRONIC-20',
    goals: [
      { goalId: 'G-1', description: 'Maintain optimal clinical control metrics', targetDays: 90 },
      { goalId: 'G-2', description: 'Prevent acute exacerbation and emergency room visits', targetDays: 180 }
    ],
    interventions: [
      { interventionId: 'INT-1', title: 'Daily vitals monitoring & remote patient telemetry', category: 'Monitoring' },
      { interventionId: 'INT-2', title: 'Medication adherence counseling & automated refills', category: 'Pharmacy' }
    ]
  },
  {
    planId: 'PLAN-21',
    conditionName: 'Chronic Condition Management Plan 21',
    icd10Code: 'CHRONIC-21',
    goals: [
      { goalId: 'G-1', description: 'Maintain optimal clinical control metrics', targetDays: 90 },
      { goalId: 'G-2', description: 'Prevent acute exacerbation and emergency room visits', targetDays: 180 }
    ],
    interventions: [
      { interventionId: 'INT-1', title: 'Daily vitals monitoring & remote patient telemetry', category: 'Monitoring' },
      { interventionId: 'INT-2', title: 'Medication adherence counseling & automated refills', category: 'Pharmacy' }
    ]
  },
  {
    planId: 'PLAN-22',
    conditionName: 'Chronic Condition Management Plan 22',
    icd10Code: 'CHRONIC-22',
    goals: [
      { goalId: 'G-1', description: 'Maintain optimal clinical control metrics', targetDays: 90 },
      { goalId: 'G-2', description: 'Prevent acute exacerbation and emergency room visits', targetDays: 180 }
    ],
    interventions: [
      { interventionId: 'INT-1', title: 'Daily vitals monitoring & remote patient telemetry', category: 'Monitoring' },
      { interventionId: 'INT-2', title: 'Medication adherence counseling & automated refills', category: 'Pharmacy' }
    ]
  },
  {
    planId: 'PLAN-23',
    conditionName: 'Chronic Condition Management Plan 23',
    icd10Code: 'CHRONIC-23',
    goals: [
      { goalId: 'G-1', description: 'Maintain optimal clinical control metrics', targetDays: 90 },
      { goalId: 'G-2', description: 'Prevent acute exacerbation and emergency room visits', targetDays: 180 }
    ],
    interventions: [
      { interventionId: 'INT-1', title: 'Daily vitals monitoring & remote patient telemetry', category: 'Monitoring' },
      { interventionId: 'INT-2', title: 'Medication adherence counseling & automated refills', category: 'Pharmacy' }
    ]
  },
  {
    planId: 'PLAN-24',
    conditionName: 'Chronic Condition Management Plan 24',
    icd10Code: 'CHRONIC-24',
    goals: [
      { goalId: 'G-1', description: 'Maintain optimal clinical control metrics', targetDays: 90 },
      { goalId: 'G-2', description: 'Prevent acute exacerbation and emergency room visits', targetDays: 180 }
    ],
    interventions: [
      { interventionId: 'INT-1', title: 'Daily vitals monitoring & remote patient telemetry', category: 'Monitoring' },
      { interventionId: 'INT-2', title: 'Medication adherence counseling & automated refills', category: 'Pharmacy' }
    ]
  },
  {
    planId: 'PLAN-25',
    conditionName: 'Chronic Condition Management Plan 25',
    icd10Code: 'CHRONIC-25',
    goals: [
      { goalId: 'G-1', description: 'Maintain optimal clinical control metrics', targetDays: 90 },
      { goalId: 'G-2', description: 'Prevent acute exacerbation and emergency room visits', targetDays: 180 }
    ],
    interventions: [
      { interventionId: 'INT-1', title: 'Daily vitals monitoring & remote patient telemetry', category: 'Monitoring' },
      { interventionId: 'INT-2', title: 'Medication adherence counseling & automated refills', category: 'Pharmacy' }
    ]
  },
  {
    planId: 'PLAN-26',
    conditionName: 'Chronic Condition Management Plan 26',
    icd10Code: 'CHRONIC-26',
    goals: [
      { goalId: 'G-1', description: 'Maintain optimal clinical control metrics', targetDays: 90 },
      { goalId: 'G-2', description: 'Prevent acute exacerbation and emergency room visits', targetDays: 180 }
    ],
    interventions: [
      { interventionId: 'INT-1', title: 'Daily vitals monitoring & remote patient telemetry', category: 'Monitoring' },
      { interventionId: 'INT-2', title: 'Medication adherence counseling & automated refills', category: 'Pharmacy' }
    ]
  },
  {
    planId: 'PLAN-27',
    conditionName: 'Chronic Condition Management Plan 27',
    icd10Code: 'CHRONIC-27',
    goals: [
      { goalId: 'G-1', description: 'Maintain optimal clinical control metrics', targetDays: 90 },
      { goalId: 'G-2', description: 'Prevent acute exacerbation and emergency room visits', targetDays: 180 }
    ],
    interventions: [
      { interventionId: 'INT-1', title: 'Daily vitals monitoring & remote patient telemetry', category: 'Monitoring' },
      { interventionId: 'INT-2', title: 'Medication adherence counseling & automated refills', category: 'Pharmacy' }
    ]
  },
  {
    planId: 'PLAN-28',
    conditionName: 'Chronic Condition Management Plan 28',
    icd10Code: 'CHRONIC-28',
    goals: [
      { goalId: 'G-1', description: 'Maintain optimal clinical control metrics', targetDays: 90 },
      { goalId: 'G-2', description: 'Prevent acute exacerbation and emergency room visits', targetDays: 180 }
    ],
    interventions: [
      { interventionId: 'INT-1', title: 'Daily vitals monitoring & remote patient telemetry', category: 'Monitoring' },
      { interventionId: 'INT-2', title: 'Medication adherence counseling & automated refills', category: 'Pharmacy' }
    ]
  },
  {
    planId: 'PLAN-29',
    conditionName: 'Chronic Condition Management Plan 29',
    icd10Code: 'CHRONIC-29',
    goals: [
      { goalId: 'G-1', description: 'Maintain optimal clinical control metrics', targetDays: 90 },
      { goalId: 'G-2', description: 'Prevent acute exacerbation and emergency room visits', targetDays: 180 }
    ],
    interventions: [
      { interventionId: 'INT-1', title: 'Daily vitals monitoring & remote patient telemetry', category: 'Monitoring' },
      { interventionId: 'INT-2', title: 'Medication adherence counseling & automated refills', category: 'Pharmacy' }
    ]
  },
  {
    planId: 'PLAN-30',
    conditionName: 'Chronic Condition Management Plan 30',
    icd10Code: 'CHRONIC-30',
    goals: [
      { goalId: 'G-1', description: 'Maintain optimal clinical control metrics', targetDays: 90 },
      { goalId: 'G-2', description: 'Prevent acute exacerbation and emergency room visits', targetDays: 180 }
    ],
    interventions: [
      { interventionId: 'INT-1', title: 'Daily vitals monitoring & remote patient telemetry', category: 'Monitoring' },
      { interventionId: 'INT-2', title: 'Medication adherence counseling & automated refills', category: 'Pharmacy' }
    ]
  },
  {
    planId: 'PLAN-31',
    conditionName: 'Chronic Condition Management Plan 31',
    icd10Code: 'CHRONIC-31',
    goals: [
      { goalId: 'G-1', description: 'Maintain optimal clinical control metrics', targetDays: 90 },
      { goalId: 'G-2', description: 'Prevent acute exacerbation and emergency room visits', targetDays: 180 }
    ],
    interventions: [
      { interventionId: 'INT-1', title: 'Daily vitals monitoring & remote patient telemetry', category: 'Monitoring' },
      { interventionId: 'INT-2', title: 'Medication adherence counseling & automated refills', category: 'Pharmacy' }
    ]
  },
  {
    planId: 'PLAN-32',
    conditionName: 'Chronic Condition Management Plan 32',
    icd10Code: 'CHRONIC-32',
    goals: [
      { goalId: 'G-1', description: 'Maintain optimal clinical control metrics', targetDays: 90 },
      { goalId: 'G-2', description: 'Prevent acute exacerbation and emergency room visits', targetDays: 180 }
    ],
    interventions: [
      { interventionId: 'INT-1', title: 'Daily vitals monitoring & remote patient telemetry', category: 'Monitoring' },
      { interventionId: 'INT-2', title: 'Medication adherence counseling & automated refills', category: 'Pharmacy' }
    ]
  },
  {
    planId: 'PLAN-33',
    conditionName: 'Chronic Condition Management Plan 33',
    icd10Code: 'CHRONIC-33',
    goals: [
      { goalId: 'G-1', description: 'Maintain optimal clinical control metrics', targetDays: 90 },
      { goalId: 'G-2', description: 'Prevent acute exacerbation and emergency room visits', targetDays: 180 }
    ],
    interventions: [
      { interventionId: 'INT-1', title: 'Daily vitals monitoring & remote patient telemetry', category: 'Monitoring' },
      { interventionId: 'INT-2', title: 'Medication adherence counseling & automated refills', category: 'Pharmacy' }
    ]
  },
  {
    planId: 'PLAN-34',
    conditionName: 'Chronic Condition Management Plan 34',
    icd10Code: 'CHRONIC-34',
    goals: [
      { goalId: 'G-1', description: 'Maintain optimal clinical control metrics', targetDays: 90 },
      { goalId: 'G-2', description: 'Prevent acute exacerbation and emergency room visits', targetDays: 180 }
    ],
    interventions: [
      { interventionId: 'INT-1', title: 'Daily vitals monitoring & remote patient telemetry', category: 'Monitoring' },
      { interventionId: 'INT-2', title: 'Medication adherence counseling & automated refills', category: 'Pharmacy' }
    ]
  },
  {
    planId: 'PLAN-35',
    conditionName: 'Chronic Condition Management Plan 35',
    icd10Code: 'CHRONIC-35',
    goals: [
      { goalId: 'G-1', description: 'Maintain optimal clinical control metrics', targetDays: 90 },
      { goalId: 'G-2', description: 'Prevent acute exacerbation and emergency room visits', targetDays: 180 }
    ],
    interventions: [
      { interventionId: 'INT-1', title: 'Daily vitals monitoring & remote patient telemetry', category: 'Monitoring' },
      { interventionId: 'INT-2', title: 'Medication adherence counseling & automated refills', category: 'Pharmacy' }
    ]
  },
  {
    planId: 'PLAN-36',
    conditionName: 'Chronic Condition Management Plan 36',
    icd10Code: 'CHRONIC-36',
    goals: [
      { goalId: 'G-1', description: 'Maintain optimal clinical control metrics', targetDays: 90 },
      { goalId: 'G-2', description: 'Prevent acute exacerbation and emergency room visits', targetDays: 180 }
    ],
    interventions: [
      { interventionId: 'INT-1', title: 'Daily vitals monitoring & remote patient telemetry', category: 'Monitoring' },
      { interventionId: 'INT-2', title: 'Medication adherence counseling & automated refills', category: 'Pharmacy' }
    ]
  },
  {
    planId: 'PLAN-37',
    conditionName: 'Chronic Condition Management Plan 37',
    icd10Code: 'CHRONIC-37',
    goals: [
      { goalId: 'G-1', description: 'Maintain optimal clinical control metrics', targetDays: 90 },
      { goalId: 'G-2', description: 'Prevent acute exacerbation and emergency room visits', targetDays: 180 }
    ],
    interventions: [
      { interventionId: 'INT-1', title: 'Daily vitals monitoring & remote patient telemetry', category: 'Monitoring' },
      { interventionId: 'INT-2', title: 'Medication adherence counseling & automated refills', category: 'Pharmacy' }
    ]
  },
  {
    planId: 'PLAN-38',
    conditionName: 'Chronic Condition Management Plan 38',
    icd10Code: 'CHRONIC-38',
    goals: [
      { goalId: 'G-1', description: 'Maintain optimal clinical control metrics', targetDays: 90 },
      { goalId: 'G-2', description: 'Prevent acute exacerbation and emergency room visits', targetDays: 180 }
    ],
    interventions: [
      { interventionId: 'INT-1', title: 'Daily vitals monitoring & remote patient telemetry', category: 'Monitoring' },
      { interventionId: 'INT-2', title: 'Medication adherence counseling & automated refills', category: 'Pharmacy' }
    ]
  },
  {
    planId: 'PLAN-39',
    conditionName: 'Chronic Condition Management Plan 39',
    icd10Code: 'CHRONIC-39',
    goals: [
      { goalId: 'G-1', description: 'Maintain optimal clinical control metrics', targetDays: 90 },
      { goalId: 'G-2', description: 'Prevent acute exacerbation and emergency room visits', targetDays: 180 }
    ],
    interventions: [
      { interventionId: 'INT-1', title: 'Daily vitals monitoring & remote patient telemetry', category: 'Monitoring' },
      { interventionId: 'INT-2', title: 'Medication adherence counseling & automated refills', category: 'Pharmacy' }
    ]
  },
  {
    planId: 'PLAN-40',
    conditionName: 'Chronic Condition Management Plan 40',
    icd10Code: 'CHRONIC-40',
    goals: [
      { goalId: 'G-1', description: 'Maintain optimal clinical control metrics', targetDays: 90 },
      { goalId: 'G-2', description: 'Prevent acute exacerbation and emergency room visits', targetDays: 180 }
    ],
    interventions: [
      { interventionId: 'INT-1', title: 'Daily vitals monitoring & remote patient telemetry', category: 'Monitoring' },
      { interventionId: 'INT-2', title: 'Medication adherence counseling & automated refills', category: 'Pharmacy' }
    ]
  },
  {
    planId: 'PLAN-41',
    conditionName: 'Chronic Condition Management Plan 41',
    icd10Code: 'CHRONIC-41',
    goals: [
      { goalId: 'G-1', description: 'Maintain optimal clinical control metrics', targetDays: 90 },
      { goalId: 'G-2', description: 'Prevent acute exacerbation and emergency room visits', targetDays: 180 }
    ],
    interventions: [
      { interventionId: 'INT-1', title: 'Daily vitals monitoring & remote patient telemetry', category: 'Monitoring' },
      { interventionId: 'INT-2', title: 'Medication adherence counseling & automated refills', category: 'Pharmacy' }
    ]
  },
  {
    planId: 'PLAN-42',
    conditionName: 'Chronic Condition Management Plan 42',
    icd10Code: 'CHRONIC-42',
    goals: [
      { goalId: 'G-1', description: 'Maintain optimal clinical control metrics', targetDays: 90 },
      { goalId: 'G-2', description: 'Prevent acute exacerbation and emergency room visits', targetDays: 180 }
    ],
    interventions: [
      { interventionId: 'INT-1', title: 'Daily vitals monitoring & remote patient telemetry', category: 'Monitoring' },
      { interventionId: 'INT-2', title: 'Medication adherence counseling & automated refills', category: 'Pharmacy' }
    ]
  },
  {
    planId: 'PLAN-43',
    conditionName: 'Chronic Condition Management Plan 43',
    icd10Code: 'CHRONIC-43',
    goals: [
      { goalId: 'G-1', description: 'Maintain optimal clinical control metrics', targetDays: 90 },
      { goalId: 'G-2', description: 'Prevent acute exacerbation and emergency room visits', targetDays: 180 }
    ],
    interventions: [
      { interventionId: 'INT-1', title: 'Daily vitals monitoring & remote patient telemetry', category: 'Monitoring' },
      { interventionId: 'INT-2', title: 'Medication adherence counseling & automated refills', category: 'Pharmacy' }
    ]
  },
  {
    planId: 'PLAN-44',
    conditionName: 'Chronic Condition Management Plan 44',
    icd10Code: 'CHRONIC-44',
    goals: [
      { goalId: 'G-1', description: 'Maintain optimal clinical control metrics', targetDays: 90 },
      { goalId: 'G-2', description: 'Prevent acute exacerbation and emergency room visits', targetDays: 180 }
    ],
    interventions: [
      { interventionId: 'INT-1', title: 'Daily vitals monitoring & remote patient telemetry', category: 'Monitoring' },
      { interventionId: 'INT-2', title: 'Medication adherence counseling & automated refills', category: 'Pharmacy' }
    ]
  },
  {
    planId: 'PLAN-45',
    conditionName: 'Chronic Condition Management Plan 45',
    icd10Code: 'CHRONIC-45',
    goals: [
      { goalId: 'G-1', description: 'Maintain optimal clinical control metrics', targetDays: 90 },
      { goalId: 'G-2', description: 'Prevent acute exacerbation and emergency room visits', targetDays: 180 }
    ],
    interventions: [
      { interventionId: 'INT-1', title: 'Daily vitals monitoring & remote patient telemetry', category: 'Monitoring' },
      { interventionId: 'INT-2', title: 'Medication adherence counseling & automated refills', category: 'Pharmacy' }
    ]
  },
  {
    planId: 'PLAN-46',
    conditionName: 'Chronic Condition Management Plan 46',
    icd10Code: 'CHRONIC-46',
    goals: [
      { goalId: 'G-1', description: 'Maintain optimal clinical control metrics', targetDays: 90 },
      { goalId: 'G-2', description: 'Prevent acute exacerbation and emergency room visits', targetDays: 180 }
    ],
    interventions: [
      { interventionId: 'INT-1', title: 'Daily vitals monitoring & remote patient telemetry', category: 'Monitoring' },
      { interventionId: 'INT-2', title: 'Medication adherence counseling & automated refills', category: 'Pharmacy' }
    ]
  },
  {
    planId: 'PLAN-47',
    conditionName: 'Chronic Condition Management Plan 47',
    icd10Code: 'CHRONIC-47',
    goals: [
      { goalId: 'G-1', description: 'Maintain optimal clinical control metrics', targetDays: 90 },
      { goalId: 'G-2', description: 'Prevent acute exacerbation and emergency room visits', targetDays: 180 }
    ],
    interventions: [
      { interventionId: 'INT-1', title: 'Daily vitals monitoring & remote patient telemetry', category: 'Monitoring' },
      { interventionId: 'INT-2', title: 'Medication adherence counseling & automated refills', category: 'Pharmacy' }
    ]
  },
  {
    planId: 'PLAN-48',
    conditionName: 'Chronic Condition Management Plan 48',
    icd10Code: 'CHRONIC-48',
    goals: [
      { goalId: 'G-1', description: 'Maintain optimal clinical control metrics', targetDays: 90 },
      { goalId: 'G-2', description: 'Prevent acute exacerbation and emergency room visits', targetDays: 180 }
    ],
    interventions: [
      { interventionId: 'INT-1', title: 'Daily vitals monitoring & remote patient telemetry', category: 'Monitoring' },
      { interventionId: 'INT-2', title: 'Medication adherence counseling & automated refills', category: 'Pharmacy' }
    ]
  },
  {
    planId: 'PLAN-49',
    conditionName: 'Chronic Condition Management Plan 49',
    icd10Code: 'CHRONIC-49',
    goals: [
      { goalId: 'G-1', description: 'Maintain optimal clinical control metrics', targetDays: 90 },
      { goalId: 'G-2', description: 'Prevent acute exacerbation and emergency room visits', targetDays: 180 }
    ],
    interventions: [
      { interventionId: 'INT-1', title: 'Daily vitals monitoring & remote patient telemetry', category: 'Monitoring' },
      { interventionId: 'INT-2', title: 'Medication adherence counseling & automated refills', category: 'Pharmacy' }
    ]
  },
  {
    planId: 'PLAN-50',
    conditionName: 'Chronic Condition Management Plan 50',
    icd10Code: 'CHRONIC-50',
    goals: [
      { goalId: 'G-1', description: 'Maintain optimal clinical control metrics', targetDays: 90 },
      { goalId: 'G-2', description: 'Prevent acute exacerbation and emergency room visits', targetDays: 180 }
    ],
    interventions: [
      { interventionId: 'INT-1', title: 'Daily vitals monitoring & remote patient telemetry', category: 'Monitoring' },
      { interventionId: 'INT-2', title: 'Medication adherence counseling & automated refills', category: 'Pharmacy' }
    ]
  },
  {
    planId: 'PLAN-51',
    conditionName: 'Chronic Condition Management Plan 51',
    icd10Code: 'CHRONIC-51',
    goals: [
      { goalId: 'G-1', description: 'Maintain optimal clinical control metrics', targetDays: 90 },
      { goalId: 'G-2', description: 'Prevent acute exacerbation and emergency room visits', targetDays: 180 }
    ],
    interventions: [
      { interventionId: 'INT-1', title: 'Daily vitals monitoring & remote patient telemetry', category: 'Monitoring' },
      { interventionId: 'INT-2', title: 'Medication adherence counseling & automated refills', category: 'Pharmacy' }
    ]
  },
  {
    planId: 'PLAN-52',
    conditionName: 'Chronic Condition Management Plan 52',
    icd10Code: 'CHRONIC-52',
    goals: [
      { goalId: 'G-1', description: 'Maintain optimal clinical control metrics', targetDays: 90 },
      { goalId: 'G-2', description: 'Prevent acute exacerbation and emergency room visits', targetDays: 180 }
    ],
    interventions: [
      { interventionId: 'INT-1', title: 'Daily vitals monitoring & remote patient telemetry', category: 'Monitoring' },
      { interventionId: 'INT-2', title: 'Medication adherence counseling & automated refills', category: 'Pharmacy' }
    ]
  },
  {
    planId: 'PLAN-53',
    conditionName: 'Chronic Condition Management Plan 53',
    icd10Code: 'CHRONIC-53',
    goals: [
      { goalId: 'G-1', description: 'Maintain optimal clinical control metrics', targetDays: 90 },
      { goalId: 'G-2', description: 'Prevent acute exacerbation and emergency room visits', targetDays: 180 }
    ],
    interventions: [
      { interventionId: 'INT-1', title: 'Daily vitals monitoring & remote patient telemetry', category: 'Monitoring' },
      { interventionId: 'INT-2', title: 'Medication adherence counseling & automated refills', category: 'Pharmacy' }
    ]
  },
  {
    planId: 'PLAN-54',
    conditionName: 'Chronic Condition Management Plan 54',
    icd10Code: 'CHRONIC-54',
    goals: [
      { goalId: 'G-1', description: 'Maintain optimal clinical control metrics', targetDays: 90 },
      { goalId: 'G-2', description: 'Prevent acute exacerbation and emergency room visits', targetDays: 180 }
    ],
    interventions: [
      { interventionId: 'INT-1', title: 'Daily vitals monitoring & remote patient telemetry', category: 'Monitoring' },
      { interventionId: 'INT-2', title: 'Medication adherence counseling & automated refills', category: 'Pharmacy' }
    ]
  },
  {
    planId: 'PLAN-55',
    conditionName: 'Chronic Condition Management Plan 55',
    icd10Code: 'CHRONIC-55',
    goals: [
      { goalId: 'G-1', description: 'Maintain optimal clinical control metrics', targetDays: 90 },
      { goalId: 'G-2', description: 'Prevent acute exacerbation and emergency room visits', targetDays: 180 }
    ],
    interventions: [
      { interventionId: 'INT-1', title: 'Daily vitals monitoring & remote patient telemetry', category: 'Monitoring' },
      { interventionId: 'INT-2', title: 'Medication adherence counseling & automated refills', category: 'Pharmacy' }
    ]
  },
  {
    planId: 'PLAN-56',
    conditionName: 'Chronic Condition Management Plan 56',
    icd10Code: 'CHRONIC-56',
    goals: [
      { goalId: 'G-1', description: 'Maintain optimal clinical control metrics', targetDays: 90 },
      { goalId: 'G-2', description: 'Prevent acute exacerbation and emergency room visits', targetDays: 180 }
    ],
    interventions: [
      { interventionId: 'INT-1', title: 'Daily vitals monitoring & remote patient telemetry', category: 'Monitoring' },
      { interventionId: 'INT-2', title: 'Medication adherence counseling & automated refills', category: 'Pharmacy' }
    ]
  },
  {
    planId: 'PLAN-57',
    conditionName: 'Chronic Condition Management Plan 57',
    icd10Code: 'CHRONIC-57',
    goals: [
      { goalId: 'G-1', description: 'Maintain optimal clinical control metrics', targetDays: 90 },
      { goalId: 'G-2', description: 'Prevent acute exacerbation and emergency room visits', targetDays: 180 }
    ],
    interventions: [
      { interventionId: 'INT-1', title: 'Daily vitals monitoring & remote patient telemetry', category: 'Monitoring' },
      { interventionId: 'INT-2', title: 'Medication adherence counseling & automated refills', category: 'Pharmacy' }
    ]
  },
  {
    planId: 'PLAN-58',
    conditionName: 'Chronic Condition Management Plan 58',
    icd10Code: 'CHRONIC-58',
    goals: [
      { goalId: 'G-1', description: 'Maintain optimal clinical control metrics', targetDays: 90 },
      { goalId: 'G-2', description: 'Prevent acute exacerbation and emergency room visits', targetDays: 180 }
    ],
    interventions: [
      { interventionId: 'INT-1', title: 'Daily vitals monitoring & remote patient telemetry', category: 'Monitoring' },
      { interventionId: 'INT-2', title: 'Medication adherence counseling & automated refills', category: 'Pharmacy' }
    ]
  },
  {
    planId: 'PLAN-59',
    conditionName: 'Chronic Condition Management Plan 59',
    icd10Code: 'CHRONIC-59',
    goals: [
      { goalId: 'G-1', description: 'Maintain optimal clinical control metrics', targetDays: 90 },
      { goalId: 'G-2', description: 'Prevent acute exacerbation and emergency room visits', targetDays: 180 }
    ],
    interventions: [
      { interventionId: 'INT-1', title: 'Daily vitals monitoring & remote patient telemetry', category: 'Monitoring' },
      { interventionId: 'INT-2', title: 'Medication adherence counseling & automated refills', category: 'Pharmacy' }
    ]
  },
  {
    planId: 'PLAN-60',
    conditionName: 'Chronic Condition Management Plan 60',
    icd10Code: 'CHRONIC-60',
    goals: [
      { goalId: 'G-1', description: 'Maintain optimal clinical control metrics', targetDays: 90 },
      { goalId: 'G-2', description: 'Prevent acute exacerbation and emergency room visits', targetDays: 180 }
    ],
    interventions: [
      { interventionId: 'INT-1', title: 'Daily vitals monitoring & remote patient telemetry', category: 'Monitoring' },
      { interventionId: 'INT-2', title: 'Medication adherence counseling & automated refills', category: 'Pharmacy' }
    ]
  },
  {
    planId: 'PLAN-61',
    conditionName: 'Chronic Condition Management Plan 61',
    icd10Code: 'CHRONIC-61',
    goals: [
      { goalId: 'G-1', description: 'Maintain optimal clinical control metrics', targetDays: 90 },
      { goalId: 'G-2', description: 'Prevent acute exacerbation and emergency room visits', targetDays: 180 }
    ],
    interventions: [
      { interventionId: 'INT-1', title: 'Daily vitals monitoring & remote patient telemetry', category: 'Monitoring' },
      { interventionId: 'INT-2', title: 'Medication adherence counseling & automated refills', category: 'Pharmacy' }
    ]
  },
  {
    planId: 'PLAN-62',
    conditionName: 'Chronic Condition Management Plan 62',
    icd10Code: 'CHRONIC-62',
    goals: [
      { goalId: 'G-1', description: 'Maintain optimal clinical control metrics', targetDays: 90 },
      { goalId: 'G-2', description: 'Prevent acute exacerbation and emergency room visits', targetDays: 180 }
    ],
    interventions: [
      { interventionId: 'INT-1', title: 'Daily vitals monitoring & remote patient telemetry', category: 'Monitoring' },
      { interventionId: 'INT-2', title: 'Medication adherence counseling & automated refills', category: 'Pharmacy' }
    ]
  },
  {
    planId: 'PLAN-63',
    conditionName: 'Chronic Condition Management Plan 63',
    icd10Code: 'CHRONIC-63',
    goals: [
      { goalId: 'G-1', description: 'Maintain optimal clinical control metrics', targetDays: 90 },
      { goalId: 'G-2', description: 'Prevent acute exacerbation and emergency room visits', targetDays: 180 }
    ],
    interventions: [
      { interventionId: 'INT-1', title: 'Daily vitals monitoring & remote patient telemetry', category: 'Monitoring' },
      { interventionId: 'INT-2', title: 'Medication adherence counseling & automated refills', category: 'Pharmacy' }
    ]
  },
  {
    planId: 'PLAN-64',
    conditionName: 'Chronic Condition Management Plan 64',
    icd10Code: 'CHRONIC-64',
    goals: [
      { goalId: 'G-1', description: 'Maintain optimal clinical control metrics', targetDays: 90 },
      { goalId: 'G-2', description: 'Prevent acute exacerbation and emergency room visits', targetDays: 180 }
    ],
    interventions: [
      { interventionId: 'INT-1', title: 'Daily vitals monitoring & remote patient telemetry', category: 'Monitoring' },
      { interventionId: 'INT-2', title: 'Medication adherence counseling & automated refills', category: 'Pharmacy' }
    ]
  },
  {
    planId: 'PLAN-65',
    conditionName: 'Chronic Condition Management Plan 65',
    icd10Code: 'CHRONIC-65',
    goals: [
      { goalId: 'G-1', description: 'Maintain optimal clinical control metrics', targetDays: 90 },
      { goalId: 'G-2', description: 'Prevent acute exacerbation and emergency room visits', targetDays: 180 }
    ],
    interventions: [
      { interventionId: 'INT-1', title: 'Daily vitals monitoring & remote patient telemetry', category: 'Monitoring' },
      { interventionId: 'INT-2', title: 'Medication adherence counseling & automated refills', category: 'Pharmacy' }
    ]
  },
  {
    planId: 'PLAN-66',
    conditionName: 'Chronic Condition Management Plan 66',
    icd10Code: 'CHRONIC-66',
    goals: [
      { goalId: 'G-1', description: 'Maintain optimal clinical control metrics', targetDays: 90 },
      { goalId: 'G-2', description: 'Prevent acute exacerbation and emergency room visits', targetDays: 180 }
    ],
    interventions: [
      { interventionId: 'INT-1', title: 'Daily vitals monitoring & remote patient telemetry', category: 'Monitoring' },
      { interventionId: 'INT-2', title: 'Medication adherence counseling & automated refills', category: 'Pharmacy' }
    ]
  },
  {
    planId: 'PLAN-67',
    conditionName: 'Chronic Condition Management Plan 67',
    icd10Code: 'CHRONIC-67',
    goals: [
      { goalId: 'G-1', description: 'Maintain optimal clinical control metrics', targetDays: 90 },
      { goalId: 'G-2', description: 'Prevent acute exacerbation and emergency room visits', targetDays: 180 }
    ],
    interventions: [
      { interventionId: 'INT-1', title: 'Daily vitals monitoring & remote patient telemetry', category: 'Monitoring' },
      { interventionId: 'INT-2', title: 'Medication adherence counseling & automated refills', category: 'Pharmacy' }
    ]
  },
  {
    planId: 'PLAN-68',
    conditionName: 'Chronic Condition Management Plan 68',
    icd10Code: 'CHRONIC-68',
    goals: [
      { goalId: 'G-1', description: 'Maintain optimal clinical control metrics', targetDays: 90 },
      { goalId: 'G-2', description: 'Prevent acute exacerbation and emergency room visits', targetDays: 180 }
    ],
    interventions: [
      { interventionId: 'INT-1', title: 'Daily vitals monitoring & remote patient telemetry', category: 'Monitoring' },
      { interventionId: 'INT-2', title: 'Medication adherence counseling & automated refills', category: 'Pharmacy' }
    ]
  },
  {
    planId: 'PLAN-69',
    conditionName: 'Chronic Condition Management Plan 69',
    icd10Code: 'CHRONIC-69',
    goals: [
      { goalId: 'G-1', description: 'Maintain optimal clinical control metrics', targetDays: 90 },
      { goalId: 'G-2', description: 'Prevent acute exacerbation and emergency room visits', targetDays: 180 }
    ],
    interventions: [
      { interventionId: 'INT-1', title: 'Daily vitals monitoring & remote patient telemetry', category: 'Monitoring' },
      { interventionId: 'INT-2', title: 'Medication adherence counseling & automated refills', category: 'Pharmacy' }
    ]
  },
  {
    planId: 'PLAN-70',
    conditionName: 'Chronic Condition Management Plan 70',
    icd10Code: 'CHRONIC-70',
    goals: [
      { goalId: 'G-1', description: 'Maintain optimal clinical control metrics', targetDays: 90 },
      { goalId: 'G-2', description: 'Prevent acute exacerbation and emergency room visits', targetDays: 180 }
    ],
    interventions: [
      { interventionId: 'INT-1', title: 'Daily vitals monitoring & remote patient telemetry', category: 'Monitoring' },
      { interventionId: 'INT-2', title: 'Medication adherence counseling & automated refills', category: 'Pharmacy' }
    ]
  },
  {
    planId: 'PLAN-71',
    conditionName: 'Chronic Condition Management Plan 71',
    icd10Code: 'CHRONIC-71',
    goals: [
      { goalId: 'G-1', description: 'Maintain optimal clinical control metrics', targetDays: 90 },
      { goalId: 'G-2', description: 'Prevent acute exacerbation and emergency room visits', targetDays: 180 }
    ],
    interventions: [
      { interventionId: 'INT-1', title: 'Daily vitals monitoring & remote patient telemetry', category: 'Monitoring' },
      { interventionId: 'INT-2', title: 'Medication adherence counseling & automated refills', category: 'Pharmacy' }
    ]
  },
  {
    planId: 'PLAN-72',
    conditionName: 'Chronic Condition Management Plan 72',
    icd10Code: 'CHRONIC-72',
    goals: [
      { goalId: 'G-1', description: 'Maintain optimal clinical control metrics', targetDays: 90 },
      { goalId: 'G-2', description: 'Prevent acute exacerbation and emergency room visits', targetDays: 180 }
    ],
    interventions: [
      { interventionId: 'INT-1', title: 'Daily vitals monitoring & remote patient telemetry', category: 'Monitoring' },
      { interventionId: 'INT-2', title: 'Medication adherence counseling & automated refills', category: 'Pharmacy' }
    ]
  },
  {
    planId: 'PLAN-73',
    conditionName: 'Chronic Condition Management Plan 73',
    icd10Code: 'CHRONIC-73',
    goals: [
      { goalId: 'G-1', description: 'Maintain optimal clinical control metrics', targetDays: 90 },
      { goalId: 'G-2', description: 'Prevent acute exacerbation and emergency room visits', targetDays: 180 }
    ],
    interventions: [
      { interventionId: 'INT-1', title: 'Daily vitals monitoring & remote patient telemetry', category: 'Monitoring' },
      { interventionId: 'INT-2', title: 'Medication adherence counseling & automated refills', category: 'Pharmacy' }
    ]
  },
  {
    planId: 'PLAN-74',
    conditionName: 'Chronic Condition Management Plan 74',
    icd10Code: 'CHRONIC-74',
    goals: [
      { goalId: 'G-1', description: 'Maintain optimal clinical control metrics', targetDays: 90 },
      { goalId: 'G-2', description: 'Prevent acute exacerbation and emergency room visits', targetDays: 180 }
    ],
    interventions: [
      { interventionId: 'INT-1', title: 'Daily vitals monitoring & remote patient telemetry', category: 'Monitoring' },
      { interventionId: 'INT-2', title: 'Medication adherence counseling & automated refills', category: 'Pharmacy' }
    ]
  },
  {
    planId: 'PLAN-75',
    conditionName: 'Chronic Condition Management Plan 75',
    icd10Code: 'CHRONIC-75',
    goals: [
      { goalId: 'G-1', description: 'Maintain optimal clinical control metrics', targetDays: 90 },
      { goalId: 'G-2', description: 'Prevent acute exacerbation and emergency room visits', targetDays: 180 }
    ],
    interventions: [
      { interventionId: 'INT-1', title: 'Daily vitals monitoring & remote patient telemetry', category: 'Monitoring' },
      { interventionId: 'INT-2', title: 'Medication adherence counseling & automated refills', category: 'Pharmacy' }
    ]
  },
  {
    planId: 'PLAN-76',
    conditionName: 'Chronic Condition Management Plan 76',
    icd10Code: 'CHRONIC-76',
    goals: [
      { goalId: 'G-1', description: 'Maintain optimal clinical control metrics', targetDays: 90 },
      { goalId: 'G-2', description: 'Prevent acute exacerbation and emergency room visits', targetDays: 180 }
    ],
    interventions: [
      { interventionId: 'INT-1', title: 'Daily vitals monitoring & remote patient telemetry', category: 'Monitoring' },
      { interventionId: 'INT-2', title: 'Medication adherence counseling & automated refills', category: 'Pharmacy' }
    ]
  },
  {
    planId: 'PLAN-77',
    conditionName: 'Chronic Condition Management Plan 77',
    icd10Code: 'CHRONIC-77',
    goals: [
      { goalId: 'G-1', description: 'Maintain optimal clinical control metrics', targetDays: 90 },
      { goalId: 'G-2', description: 'Prevent acute exacerbation and emergency room visits', targetDays: 180 }
    ],
    interventions: [
      { interventionId: 'INT-1', title: 'Daily vitals monitoring & remote patient telemetry', category: 'Monitoring' },
      { interventionId: 'INT-2', title: 'Medication adherence counseling & automated refills', category: 'Pharmacy' }
    ]
  },
  {
    planId: 'PLAN-78',
    conditionName: 'Chronic Condition Management Plan 78',
    icd10Code: 'CHRONIC-78',
    goals: [
      { goalId: 'G-1', description: 'Maintain optimal clinical control metrics', targetDays: 90 },
      { goalId: 'G-2', description: 'Prevent acute exacerbation and emergency room visits', targetDays: 180 }
    ],
    interventions: [
      { interventionId: 'INT-1', title: 'Daily vitals monitoring & remote patient telemetry', category: 'Monitoring' },
      { interventionId: 'INT-2', title: 'Medication adherence counseling & automated refills', category: 'Pharmacy' }
    ]
  },
  {
    planId: 'PLAN-79',
    conditionName: 'Chronic Condition Management Plan 79',
    icd10Code: 'CHRONIC-79',
    goals: [
      { goalId: 'G-1', description: 'Maintain optimal clinical control metrics', targetDays: 90 },
      { goalId: 'G-2', description: 'Prevent acute exacerbation and emergency room visits', targetDays: 180 }
    ],
    interventions: [
      { interventionId: 'INT-1', title: 'Daily vitals monitoring & remote patient telemetry', category: 'Monitoring' },
      { interventionId: 'INT-2', title: 'Medication adherence counseling & automated refills', category: 'Pharmacy' }
    ]
  },
  {
    planId: 'PLAN-80',
    conditionName: 'Chronic Condition Management Plan 80',
    icd10Code: 'CHRONIC-80',
    goals: [
      { goalId: 'G-1', description: 'Maintain optimal clinical control metrics', targetDays: 90 },
      { goalId: 'G-2', description: 'Prevent acute exacerbation and emergency room visits', targetDays: 180 }
    ],
    interventions: [
      { interventionId: 'INT-1', title: 'Daily vitals monitoring & remote patient telemetry', category: 'Monitoring' },
      { interventionId: 'INT-2', title: 'Medication adherence counseling & automated refills', category: 'Pharmacy' }
    ]
  },
  {
    planId: 'PLAN-81',
    conditionName: 'Chronic Condition Management Plan 81',
    icd10Code: 'CHRONIC-81',
    goals: [
      { goalId: 'G-1', description: 'Maintain optimal clinical control metrics', targetDays: 90 },
      { goalId: 'G-2', description: 'Prevent acute exacerbation and emergency room visits', targetDays: 180 }
    ],
    interventions: [
      { interventionId: 'INT-1', title: 'Daily vitals monitoring & remote patient telemetry', category: 'Monitoring' },
      { interventionId: 'INT-2', title: 'Medication adherence counseling & automated refills', category: 'Pharmacy' }
    ]
  },
  {
    planId: 'PLAN-82',
    conditionName: 'Chronic Condition Management Plan 82',
    icd10Code: 'CHRONIC-82',
    goals: [
      { goalId: 'G-1', description: 'Maintain optimal clinical control metrics', targetDays: 90 },
      { goalId: 'G-2', description: 'Prevent acute exacerbation and emergency room visits', targetDays: 180 }
    ],
    interventions: [
      { interventionId: 'INT-1', title: 'Daily vitals monitoring & remote patient telemetry', category: 'Monitoring' },
      { interventionId: 'INT-2', title: 'Medication adherence counseling & automated refills', category: 'Pharmacy' }
    ]
  },
  {
    planId: 'PLAN-83',
    conditionName: 'Chronic Condition Management Plan 83',
    icd10Code: 'CHRONIC-83',
    goals: [
      { goalId: 'G-1', description: 'Maintain optimal clinical control metrics', targetDays: 90 },
      { goalId: 'G-2', description: 'Prevent acute exacerbation and emergency room visits', targetDays: 180 }
    ],
    interventions: [
      { interventionId: 'INT-1', title: 'Daily vitals monitoring & remote patient telemetry', category: 'Monitoring' },
      { interventionId: 'INT-2', title: 'Medication adherence counseling & automated refills', category: 'Pharmacy' }
    ]
  },
  {
    planId: 'PLAN-84',
    conditionName: 'Chronic Condition Management Plan 84',
    icd10Code: 'CHRONIC-84',
    goals: [
      { goalId: 'G-1', description: 'Maintain optimal clinical control metrics', targetDays: 90 },
      { goalId: 'G-2', description: 'Prevent acute exacerbation and emergency room visits', targetDays: 180 }
    ],
    interventions: [
      { interventionId: 'INT-1', title: 'Daily vitals monitoring & remote patient telemetry', category: 'Monitoring' },
      { interventionId: 'INT-2', title: 'Medication adherence counseling & automated refills', category: 'Pharmacy' }
    ]
  },
  {
    planId: 'PLAN-85',
    conditionName: 'Chronic Condition Management Plan 85',
    icd10Code: 'CHRONIC-85',
    goals: [
      { goalId: 'G-1', description: 'Maintain optimal clinical control metrics', targetDays: 90 },
      { goalId: 'G-2', description: 'Prevent acute exacerbation and emergency room visits', targetDays: 180 }
    ],
    interventions: [
      { interventionId: 'INT-1', title: 'Daily vitals monitoring & remote patient telemetry', category: 'Monitoring' },
      { interventionId: 'INT-2', title: 'Medication adherence counseling & automated refills', category: 'Pharmacy' }
    ]
  },
  {
    planId: 'PLAN-86',
    conditionName: 'Chronic Condition Management Plan 86',
    icd10Code: 'CHRONIC-86',
    goals: [
      { goalId: 'G-1', description: 'Maintain optimal clinical control metrics', targetDays: 90 },
      { goalId: 'G-2', description: 'Prevent acute exacerbation and emergency room visits', targetDays: 180 }
    ],
    interventions: [
      { interventionId: 'INT-1', title: 'Daily vitals monitoring & remote patient telemetry', category: 'Monitoring' },
      { interventionId: 'INT-2', title: 'Medication adherence counseling & automated refills', category: 'Pharmacy' }
    ]
  },
  {
    planId: 'PLAN-87',
    conditionName: 'Chronic Condition Management Plan 87',
    icd10Code: 'CHRONIC-87',
    goals: [
      { goalId: 'G-1', description: 'Maintain optimal clinical control metrics', targetDays: 90 },
      { goalId: 'G-2', description: 'Prevent acute exacerbation and emergency room visits', targetDays: 180 }
    ],
    interventions: [
      { interventionId: 'INT-1', title: 'Daily vitals monitoring & remote patient telemetry', category: 'Monitoring' },
      { interventionId: 'INT-2', title: 'Medication adherence counseling & automated refills', category: 'Pharmacy' }
    ]
  },
  {
    planId: 'PLAN-88',
    conditionName: 'Chronic Condition Management Plan 88',
    icd10Code: 'CHRONIC-88',
    goals: [
      { goalId: 'G-1', description: 'Maintain optimal clinical control metrics', targetDays: 90 },
      { goalId: 'G-2', description: 'Prevent acute exacerbation and emergency room visits', targetDays: 180 }
    ],
    interventions: [
      { interventionId: 'INT-1', title: 'Daily vitals monitoring & remote patient telemetry', category: 'Monitoring' },
      { interventionId: 'INT-2', title: 'Medication adherence counseling & automated refills', category: 'Pharmacy' }
    ]
  },
  {
    planId: 'PLAN-89',
    conditionName: 'Chronic Condition Management Plan 89',
    icd10Code: 'CHRONIC-89',
    goals: [
      { goalId: 'G-1', description: 'Maintain optimal clinical control metrics', targetDays: 90 },
      { goalId: 'G-2', description: 'Prevent acute exacerbation and emergency room visits', targetDays: 180 }
    ],
    interventions: [
      { interventionId: 'INT-1', title: 'Daily vitals monitoring & remote patient telemetry', category: 'Monitoring' },
      { interventionId: 'INT-2', title: 'Medication adherence counseling & automated refills', category: 'Pharmacy' }
    ]
  },
  {
    planId: 'PLAN-90',
    conditionName: 'Chronic Condition Management Plan 90',
    icd10Code: 'CHRONIC-90',
    goals: [
      { goalId: 'G-1', description: 'Maintain optimal clinical control metrics', targetDays: 90 },
      { goalId: 'G-2', description: 'Prevent acute exacerbation and emergency room visits', targetDays: 180 }
    ],
    interventions: [
      { interventionId: 'INT-1', title: 'Daily vitals monitoring & remote patient telemetry', category: 'Monitoring' },
      { interventionId: 'INT-2', title: 'Medication adherence counseling & automated refills', category: 'Pharmacy' }
    ]
  },
  {
    planId: 'PLAN-91',
    conditionName: 'Chronic Condition Management Plan 91',
    icd10Code: 'CHRONIC-91',
    goals: [
      { goalId: 'G-1', description: 'Maintain optimal clinical control metrics', targetDays: 90 },
      { goalId: 'G-2', description: 'Prevent acute exacerbation and emergency room visits', targetDays: 180 }
    ],
    interventions: [
      { interventionId: 'INT-1', title: 'Daily vitals monitoring & remote patient telemetry', category: 'Monitoring' },
      { interventionId: 'INT-2', title: 'Medication adherence counseling & automated refills', category: 'Pharmacy' }
    ]
  },
  {
    planId: 'PLAN-92',
    conditionName: 'Chronic Condition Management Plan 92',
    icd10Code: 'CHRONIC-92',
    goals: [
      { goalId: 'G-1', description: 'Maintain optimal clinical control metrics', targetDays: 90 },
      { goalId: 'G-2', description: 'Prevent acute exacerbation and emergency room visits', targetDays: 180 }
    ],
    interventions: [
      { interventionId: 'INT-1', title: 'Daily vitals monitoring & remote patient telemetry', category: 'Monitoring' },
      { interventionId: 'INT-2', title: 'Medication adherence counseling & automated refills', category: 'Pharmacy' }
    ]
  },
  {
    planId: 'PLAN-93',
    conditionName: 'Chronic Condition Management Plan 93',
    icd10Code: 'CHRONIC-93',
    goals: [
      { goalId: 'G-1', description: 'Maintain optimal clinical control metrics', targetDays: 90 },
      { goalId: 'G-2', description: 'Prevent acute exacerbation and emergency room visits', targetDays: 180 }
    ],
    interventions: [
      { interventionId: 'INT-1', title: 'Daily vitals monitoring & remote patient telemetry', category: 'Monitoring' },
      { interventionId: 'INT-2', title: 'Medication adherence counseling & automated refills', category: 'Pharmacy' }
    ]
  },
  {
    planId: 'PLAN-94',
    conditionName: 'Chronic Condition Management Plan 94',
    icd10Code: 'CHRONIC-94',
    goals: [
      { goalId: 'G-1', description: 'Maintain optimal clinical control metrics', targetDays: 90 },
      { goalId: 'G-2', description: 'Prevent acute exacerbation and emergency room visits', targetDays: 180 }
    ],
    interventions: [
      { interventionId: 'INT-1', title: 'Daily vitals monitoring & remote patient telemetry', category: 'Monitoring' },
      { interventionId: 'INT-2', title: 'Medication adherence counseling & automated refills', category: 'Pharmacy' }
    ]
  },
  {
    planId: 'PLAN-95',
    conditionName: 'Chronic Condition Management Plan 95',
    icd10Code: 'CHRONIC-95',
    goals: [
      { goalId: 'G-1', description: 'Maintain optimal clinical control metrics', targetDays: 90 },
      { goalId: 'G-2', description: 'Prevent acute exacerbation and emergency room visits', targetDays: 180 }
    ],
    interventions: [
      { interventionId: 'INT-1', title: 'Daily vitals monitoring & remote patient telemetry', category: 'Monitoring' },
      { interventionId: 'INT-2', title: 'Medication adherence counseling & automated refills', category: 'Pharmacy' }
    ]
  },
  {
    planId: 'PLAN-96',
    conditionName: 'Chronic Condition Management Plan 96',
    icd10Code: 'CHRONIC-96',
    goals: [
      { goalId: 'G-1', description: 'Maintain optimal clinical control metrics', targetDays: 90 },
      { goalId: 'G-2', description: 'Prevent acute exacerbation and emergency room visits', targetDays: 180 }
    ],
    interventions: [
      { interventionId: 'INT-1', title: 'Daily vitals monitoring & remote patient telemetry', category: 'Monitoring' },
      { interventionId: 'INT-2', title: 'Medication adherence counseling & automated refills', category: 'Pharmacy' }
    ]
  },
  {
    planId: 'PLAN-97',
    conditionName: 'Chronic Condition Management Plan 97',
    icd10Code: 'CHRONIC-97',
    goals: [
      { goalId: 'G-1', description: 'Maintain optimal clinical control metrics', targetDays: 90 },
      { goalId: 'G-2', description: 'Prevent acute exacerbation and emergency room visits', targetDays: 180 }
    ],
    interventions: [
      { interventionId: 'INT-1', title: 'Daily vitals monitoring & remote patient telemetry', category: 'Monitoring' },
      { interventionId: 'INT-2', title: 'Medication adherence counseling & automated refills', category: 'Pharmacy' }
    ]
  },
  {
    planId: 'PLAN-98',
    conditionName: 'Chronic Condition Management Plan 98',
    icd10Code: 'CHRONIC-98',
    goals: [
      { goalId: 'G-1', description: 'Maintain optimal clinical control metrics', targetDays: 90 },
      { goalId: 'G-2', description: 'Prevent acute exacerbation and emergency room visits', targetDays: 180 }
    ],
    interventions: [
      { interventionId: 'INT-1', title: 'Daily vitals monitoring & remote patient telemetry', category: 'Monitoring' },
      { interventionId: 'INT-2', title: 'Medication adherence counseling & automated refills', category: 'Pharmacy' }
    ]
  },
  {
    planId: 'PLAN-99',
    conditionName: 'Chronic Condition Management Plan 99',
    icd10Code: 'CHRONIC-99',
    goals: [
      { goalId: 'G-1', description: 'Maintain optimal clinical control metrics', targetDays: 90 },
      { goalId: 'G-2', description: 'Prevent acute exacerbation and emergency room visits', targetDays: 180 }
    ],
    interventions: [
      { interventionId: 'INT-1', title: 'Daily vitals monitoring & remote patient telemetry', category: 'Monitoring' },
      { interventionId: 'INT-2', title: 'Medication adherence counseling & automated refills', category: 'Pharmacy' }
    ]
  },
  {
    planId: 'PLAN-100',
    conditionName: 'Chronic Condition Management Plan 100',
    icd10Code: 'CHRONIC-100',
    goals: [
      { goalId: 'G-1', description: 'Maintain optimal clinical control metrics', targetDays: 90 },
      { goalId: 'G-2', description: 'Prevent acute exacerbation and emergency room visits', targetDays: 180 }
    ],
    interventions: [
      { interventionId: 'INT-1', title: 'Daily vitals monitoring & remote patient telemetry', category: 'Monitoring' },
      { interventionId: 'INT-2', title: 'Medication adherence counseling & automated refills', category: 'Pharmacy' }
    ]
  },
  {
    planId: 'PLAN-101',
    conditionName: 'Chronic Condition Management Plan 101',
    icd10Code: 'CHRONIC-101',
    goals: [
      { goalId: 'G-1', description: 'Maintain optimal clinical control metrics', targetDays: 90 },
      { goalId: 'G-2', description: 'Prevent acute exacerbation and emergency room visits', targetDays: 180 }
    ],
    interventions: [
      { interventionId: 'INT-1', title: 'Daily vitals monitoring & remote patient telemetry', category: 'Monitoring' },
      { interventionId: 'INT-2', title: 'Medication adherence counseling & automated refills', category: 'Pharmacy' }
    ]
  },
  {
    planId: 'PLAN-102',
    conditionName: 'Chronic Condition Management Plan 102',
    icd10Code: 'CHRONIC-102',
    goals: [
      { goalId: 'G-1', description: 'Maintain optimal clinical control metrics', targetDays: 90 },
      { goalId: 'G-2', description: 'Prevent acute exacerbation and emergency room visits', targetDays: 180 }
    ],
    interventions: [
      { interventionId: 'INT-1', title: 'Daily vitals monitoring & remote patient telemetry', category: 'Monitoring' },
      { interventionId: 'INT-2', title: 'Medication adherence counseling & automated refills', category: 'Pharmacy' }
    ]
  },
  {
    planId: 'PLAN-103',
    conditionName: 'Chronic Condition Management Plan 103',
    icd10Code: 'CHRONIC-103',
    goals: [
      { goalId: 'G-1', description: 'Maintain optimal clinical control metrics', targetDays: 90 },
      { goalId: 'G-2', description: 'Prevent acute exacerbation and emergency room visits', targetDays: 180 }
    ],
    interventions: [
      { interventionId: 'INT-1', title: 'Daily vitals monitoring & remote patient telemetry', category: 'Monitoring' },
      { interventionId: 'INT-2', title: 'Medication adherence counseling & automated refills', category: 'Pharmacy' }
    ]
  },
  {
    planId: 'PLAN-104',
    conditionName: 'Chronic Condition Management Plan 104',
    icd10Code: 'CHRONIC-104',
    goals: [
      { goalId: 'G-1', description: 'Maintain optimal clinical control metrics', targetDays: 90 },
      { goalId: 'G-2', description: 'Prevent acute exacerbation and emergency room visits', targetDays: 180 }
    ],
    interventions: [
      { interventionId: 'INT-1', title: 'Daily vitals monitoring & remote patient telemetry', category: 'Monitoring' },
      { interventionId: 'INT-2', title: 'Medication adherence counseling & automated refills', category: 'Pharmacy' }
    ]
  },
  {
    planId: 'PLAN-105',
    conditionName: 'Chronic Condition Management Plan 105',
    icd10Code: 'CHRONIC-105',
    goals: [
      { goalId: 'G-1', description: 'Maintain optimal clinical control metrics', targetDays: 90 },
      { goalId: 'G-2', description: 'Prevent acute exacerbation and emergency room visits', targetDays: 180 }
    ],
    interventions: [
      { interventionId: 'INT-1', title: 'Daily vitals monitoring & remote patient telemetry', category: 'Monitoring' },
      { interventionId: 'INT-2', title: 'Medication adherence counseling & automated refills', category: 'Pharmacy' }
    ]
  },
  {
    planId: 'PLAN-106',
    conditionName: 'Chronic Condition Management Plan 106',
    icd10Code: 'CHRONIC-106',
    goals: [
      { goalId: 'G-1', description: 'Maintain optimal clinical control metrics', targetDays: 90 },
      { goalId: 'G-2', description: 'Prevent acute exacerbation and emergency room visits', targetDays: 180 }
    ],
    interventions: [
      { interventionId: 'INT-1', title: 'Daily vitals monitoring & remote patient telemetry', category: 'Monitoring' },
      { interventionId: 'INT-2', title: 'Medication adherence counseling & automated refills', category: 'Pharmacy' }
    ]
  },
  {
    planId: 'PLAN-107',
    conditionName: 'Chronic Condition Management Plan 107',
    icd10Code: 'CHRONIC-107',
    goals: [
      { goalId: 'G-1', description: 'Maintain optimal clinical control metrics', targetDays: 90 },
      { goalId: 'G-2', description: 'Prevent acute exacerbation and emergency room visits', targetDays: 180 }
    ],
    interventions: [
      { interventionId: 'INT-1', title: 'Daily vitals monitoring & remote patient telemetry', category: 'Monitoring' },
      { interventionId: 'INT-2', title: 'Medication adherence counseling & automated refills', category: 'Pharmacy' }
    ]
  },
  {
    planId: 'PLAN-108',
    conditionName: 'Chronic Condition Management Plan 108',
    icd10Code: 'CHRONIC-108',
    goals: [
      { goalId: 'G-1', description: 'Maintain optimal clinical control metrics', targetDays: 90 },
      { goalId: 'G-2', description: 'Prevent acute exacerbation and emergency room visits', targetDays: 180 }
    ],
    interventions: [
      { interventionId: 'INT-1', title: 'Daily vitals monitoring & remote patient telemetry', category: 'Monitoring' },
      { interventionId: 'INT-2', title: 'Medication adherence counseling & automated refills', category: 'Pharmacy' }
    ]
  },
  {
    planId: 'PLAN-109',
    conditionName: 'Chronic Condition Management Plan 109',
    icd10Code: 'CHRONIC-109',
    goals: [
      { goalId: 'G-1', description: 'Maintain optimal clinical control metrics', targetDays: 90 },
      { goalId: 'G-2', description: 'Prevent acute exacerbation and emergency room visits', targetDays: 180 }
    ],
    interventions: [
      { interventionId: 'INT-1', title: 'Daily vitals monitoring & remote patient telemetry', category: 'Monitoring' },
      { interventionId: 'INT-2', title: 'Medication adherence counseling & automated refills', category: 'Pharmacy' }
    ]
  },
  {
    planId: 'PLAN-110',
    conditionName: 'Chronic Condition Management Plan 110',
    icd10Code: 'CHRONIC-110',
    goals: [
      { goalId: 'G-1', description: 'Maintain optimal clinical control metrics', targetDays: 90 },
      { goalId: 'G-2', description: 'Prevent acute exacerbation and emergency room visits', targetDays: 180 }
    ],
    interventions: [
      { interventionId: 'INT-1', title: 'Daily vitals monitoring & remote patient telemetry', category: 'Monitoring' },
      { interventionId: 'INT-2', title: 'Medication adherence counseling & automated refills', category: 'Pharmacy' }
    ]
  },
  {
    planId: 'PLAN-111',
    conditionName: 'Chronic Condition Management Plan 111',
    icd10Code: 'CHRONIC-111',
    goals: [
      { goalId: 'G-1', description: 'Maintain optimal clinical control metrics', targetDays: 90 },
      { goalId: 'G-2', description: 'Prevent acute exacerbation and emergency room visits', targetDays: 180 }
    ],
    interventions: [
      { interventionId: 'INT-1', title: 'Daily vitals monitoring & remote patient telemetry', category: 'Monitoring' },
      { interventionId: 'INT-2', title: 'Medication adherence counseling & automated refills', category: 'Pharmacy' }
    ]
  },
  {
    planId: 'PLAN-112',
    conditionName: 'Chronic Condition Management Plan 112',
    icd10Code: 'CHRONIC-112',
    goals: [
      { goalId: 'G-1', description: 'Maintain optimal clinical control metrics', targetDays: 90 },
      { goalId: 'G-2', description: 'Prevent acute exacerbation and emergency room visits', targetDays: 180 }
    ],
    interventions: [
      { interventionId: 'INT-1', title: 'Daily vitals monitoring & remote patient telemetry', category: 'Monitoring' },
      { interventionId: 'INT-2', title: 'Medication adherence counseling & automated refills', category: 'Pharmacy' }
    ]
  },
  {
    planId: 'PLAN-113',
    conditionName: 'Chronic Condition Management Plan 113',
    icd10Code: 'CHRONIC-113',
    goals: [
      { goalId: 'G-1', description: 'Maintain optimal clinical control metrics', targetDays: 90 },
      { goalId: 'G-2', description: 'Prevent acute exacerbation and emergency room visits', targetDays: 180 }
    ],
    interventions: [
      { interventionId: 'INT-1', title: 'Daily vitals monitoring & remote patient telemetry', category: 'Monitoring' },
      { interventionId: 'INT-2', title: 'Medication adherence counseling & automated refills', category: 'Pharmacy' }
    ]
  },
  {
    planId: 'PLAN-114',
    conditionName: 'Chronic Condition Management Plan 114',
    icd10Code: 'CHRONIC-114',
    goals: [
      { goalId: 'G-1', description: 'Maintain optimal clinical control metrics', targetDays: 90 },
      { goalId: 'G-2', description: 'Prevent acute exacerbation and emergency room visits', targetDays: 180 }
    ],
    interventions: [
      { interventionId: 'INT-1', title: 'Daily vitals monitoring & remote patient telemetry', category: 'Monitoring' },
      { interventionId: 'INT-2', title: 'Medication adherence counseling & automated refills', category: 'Pharmacy' }
    ]
  },
  {
    planId: 'PLAN-115',
    conditionName: 'Chronic Condition Management Plan 115',
    icd10Code: 'CHRONIC-115',
    goals: [
      { goalId: 'G-1', description: 'Maintain optimal clinical control metrics', targetDays: 90 },
      { goalId: 'G-2', description: 'Prevent acute exacerbation and emergency room visits', targetDays: 180 }
    ],
    interventions: [
      { interventionId: 'INT-1', title: 'Daily vitals monitoring & remote patient telemetry', category: 'Monitoring' },
      { interventionId: 'INT-2', title: 'Medication adherence counseling & automated refills', category: 'Pharmacy' }
    ]
  },
  {
    planId: 'PLAN-116',
    conditionName: 'Chronic Condition Management Plan 116',
    icd10Code: 'CHRONIC-116',
    goals: [
      { goalId: 'G-1', description: 'Maintain optimal clinical control metrics', targetDays: 90 },
      { goalId: 'G-2', description: 'Prevent acute exacerbation and emergency room visits', targetDays: 180 }
    ],
    interventions: [
      { interventionId: 'INT-1', title: 'Daily vitals monitoring & remote patient telemetry', category: 'Monitoring' },
      { interventionId: 'INT-2', title: 'Medication adherence counseling & automated refills', category: 'Pharmacy' }
    ]
  },
  {
    planId: 'PLAN-117',
    conditionName: 'Chronic Condition Management Plan 117',
    icd10Code: 'CHRONIC-117',
    goals: [
      { goalId: 'G-1', description: 'Maintain optimal clinical control metrics', targetDays: 90 },
      { goalId: 'G-2', description: 'Prevent acute exacerbation and emergency room visits', targetDays: 180 }
    ],
    interventions: [
      { interventionId: 'INT-1', title: 'Daily vitals monitoring & remote patient telemetry', category: 'Monitoring' },
      { interventionId: 'INT-2', title: 'Medication adherence counseling & automated refills', category: 'Pharmacy' }
    ]
  },
  {
    planId: 'PLAN-118',
    conditionName: 'Chronic Condition Management Plan 118',
    icd10Code: 'CHRONIC-118',
    goals: [
      { goalId: 'G-1', description: 'Maintain optimal clinical control metrics', targetDays: 90 },
      { goalId: 'G-2', description: 'Prevent acute exacerbation and emergency room visits', targetDays: 180 }
    ],
    interventions: [
      { interventionId: 'INT-1', title: 'Daily vitals monitoring & remote patient telemetry', category: 'Monitoring' },
      { interventionId: 'INT-2', title: 'Medication adherence counseling & automated refills', category: 'Pharmacy' }
    ]
  },
  {
    planId: 'PLAN-119',
    conditionName: 'Chronic Condition Management Plan 119',
    icd10Code: 'CHRONIC-119',
    goals: [
      { goalId: 'G-1', description: 'Maintain optimal clinical control metrics', targetDays: 90 },
      { goalId: 'G-2', description: 'Prevent acute exacerbation and emergency room visits', targetDays: 180 }
    ],
    interventions: [
      { interventionId: 'INT-1', title: 'Daily vitals monitoring & remote patient telemetry', category: 'Monitoring' },
      { interventionId: 'INT-2', title: 'Medication adherence counseling & automated refills', category: 'Pharmacy' }
    ]
  },
  {
    planId: 'PLAN-120',
    conditionName: 'Chronic Condition Management Plan 120',
    icd10Code: 'CHRONIC-120',
    goals: [
      { goalId: 'G-1', description: 'Maintain optimal clinical control metrics', targetDays: 90 },
      { goalId: 'G-2', description: 'Prevent acute exacerbation and emergency room visits', targetDays: 180 }
    ],
    interventions: [
      { interventionId: 'INT-1', title: 'Daily vitals monitoring & remote patient telemetry', category: 'Monitoring' },
      { interventionId: 'INT-2', title: 'Medication adherence counseling & automated refills', category: 'Pharmacy' }
    ]
  },
  {
    planId: 'PLAN-121',
    conditionName: 'Chronic Condition Management Plan 121',
    icd10Code: 'CHRONIC-121',
    goals: [
      { goalId: 'G-1', description: 'Maintain optimal clinical control metrics', targetDays: 90 },
      { goalId: 'G-2', description: 'Prevent acute exacerbation and emergency room visits', targetDays: 180 }
    ],
    interventions: [
      { interventionId: 'INT-1', title: 'Daily vitals monitoring & remote patient telemetry', category: 'Monitoring' },
      { interventionId: 'INT-2', title: 'Medication adherence counseling & automated refills', category: 'Pharmacy' }
    ]
  },
  {
    planId: 'PLAN-122',
    conditionName: 'Chronic Condition Management Plan 122',
    icd10Code: 'CHRONIC-122',
    goals: [
      { goalId: 'G-1', description: 'Maintain optimal clinical control metrics', targetDays: 90 },
      { goalId: 'G-2', description: 'Prevent acute exacerbation and emergency room visits', targetDays: 180 }
    ],
    interventions: [
      { interventionId: 'INT-1', title: 'Daily vitals monitoring & remote patient telemetry', category: 'Monitoring' },
      { interventionId: 'INT-2', title: 'Medication adherence counseling & automated refills', category: 'Pharmacy' }
    ]
  },
  {
    planId: 'PLAN-123',
    conditionName: 'Chronic Condition Management Plan 123',
    icd10Code: 'CHRONIC-123',
    goals: [
      { goalId: 'G-1', description: 'Maintain optimal clinical control metrics', targetDays: 90 },
      { goalId: 'G-2', description: 'Prevent acute exacerbation and emergency room visits', targetDays: 180 }
    ],
    interventions: [
      { interventionId: 'INT-1', title: 'Daily vitals monitoring & remote patient telemetry', category: 'Monitoring' },
      { interventionId: 'INT-2', title: 'Medication adherence counseling & automated refills', category: 'Pharmacy' }
    ]
  },
  {
    planId: 'PLAN-124',
    conditionName: 'Chronic Condition Management Plan 124',
    icd10Code: 'CHRONIC-124',
    goals: [
      { goalId: 'G-1', description: 'Maintain optimal clinical control metrics', targetDays: 90 },
      { goalId: 'G-2', description: 'Prevent acute exacerbation and emergency room visits', targetDays: 180 }
    ],
    interventions: [
      { interventionId: 'INT-1', title: 'Daily vitals monitoring & remote patient telemetry', category: 'Monitoring' },
      { interventionId: 'INT-2', title: 'Medication adherence counseling & automated refills', category: 'Pharmacy' }
    ]
  },
  {
    planId: 'PLAN-125',
    conditionName: 'Chronic Condition Management Plan 125',
    icd10Code: 'CHRONIC-125',
    goals: [
      { goalId: 'G-1', description: 'Maintain optimal clinical control metrics', targetDays: 90 },
      { goalId: 'G-2', description: 'Prevent acute exacerbation and emergency room visits', targetDays: 180 }
    ],
    interventions: [
      { interventionId: 'INT-1', title: 'Daily vitals monitoring & remote patient telemetry', category: 'Monitoring' },
      { interventionId: 'INT-2', title: 'Medication adherence counseling & automated refills', category: 'Pharmacy' }
    ]
  },
  {
    planId: 'PLAN-126',
    conditionName: 'Chronic Condition Management Plan 126',
    icd10Code: 'CHRONIC-126',
    goals: [
      { goalId: 'G-1', description: 'Maintain optimal clinical control metrics', targetDays: 90 },
      { goalId: 'G-2', description: 'Prevent acute exacerbation and emergency room visits', targetDays: 180 }
    ],
    interventions: [
      { interventionId: 'INT-1', title: 'Daily vitals monitoring & remote patient telemetry', category: 'Monitoring' },
      { interventionId: 'INT-2', title: 'Medication adherence counseling & automated refills', category: 'Pharmacy' }
    ]
  },
  {
    planId: 'PLAN-127',
    conditionName: 'Chronic Condition Management Plan 127',
    icd10Code: 'CHRONIC-127',
    goals: [
      { goalId: 'G-1', description: 'Maintain optimal clinical control metrics', targetDays: 90 },
      { goalId: 'G-2', description: 'Prevent acute exacerbation and emergency room visits', targetDays: 180 }
    ],
    interventions: [
      { interventionId: 'INT-1', title: 'Daily vitals monitoring & remote patient telemetry', category: 'Monitoring' },
      { interventionId: 'INT-2', title: 'Medication adherence counseling & automated refills', category: 'Pharmacy' }
    ]
  },
  {
    planId: 'PLAN-128',
    conditionName: 'Chronic Condition Management Plan 128',
    icd10Code: 'CHRONIC-128',
    goals: [
      { goalId: 'G-1', description: 'Maintain optimal clinical control metrics', targetDays: 90 },
      { goalId: 'G-2', description: 'Prevent acute exacerbation and emergency room visits', targetDays: 180 }
    ],
    interventions: [
      { interventionId: 'INT-1', title: 'Daily vitals monitoring & remote patient telemetry', category: 'Monitoring' },
      { interventionId: 'INT-2', title: 'Medication adherence counseling & automated refills', category: 'Pharmacy' }
    ]
  },
  {
    planId: 'PLAN-129',
    conditionName: 'Chronic Condition Management Plan 129',
    icd10Code: 'CHRONIC-129',
    goals: [
      { goalId: 'G-1', description: 'Maintain optimal clinical control metrics', targetDays: 90 },
      { goalId: 'G-2', description: 'Prevent acute exacerbation and emergency room visits', targetDays: 180 }
    ],
    interventions: [
      { interventionId: 'INT-1', title: 'Daily vitals monitoring & remote patient telemetry', category: 'Monitoring' },
      { interventionId: 'INT-2', title: 'Medication adherence counseling & automated refills', category: 'Pharmacy' }
    ]
  },
  {
    planId: 'PLAN-130',
    conditionName: 'Chronic Condition Management Plan 130',
    icd10Code: 'CHRONIC-130',
    goals: [
      { goalId: 'G-1', description: 'Maintain optimal clinical control metrics', targetDays: 90 },
      { goalId: 'G-2', description: 'Prevent acute exacerbation and emergency room visits', targetDays: 180 }
    ],
    interventions: [
      { interventionId: 'INT-1', title: 'Daily vitals monitoring & remote patient telemetry', category: 'Monitoring' },
      { interventionId: 'INT-2', title: 'Medication adherence counseling & automated refills', category: 'Pharmacy' }
    ]
  },
  {
    planId: 'PLAN-131',
    conditionName: 'Chronic Condition Management Plan 131',
    icd10Code: 'CHRONIC-131',
    goals: [
      { goalId: 'G-1', description: 'Maintain optimal clinical control metrics', targetDays: 90 },
      { goalId: 'G-2', description: 'Prevent acute exacerbation and emergency room visits', targetDays: 180 }
    ],
    interventions: [
      { interventionId: 'INT-1', title: 'Daily vitals monitoring & remote patient telemetry', category: 'Monitoring' },
      { interventionId: 'INT-2', title: 'Medication adherence counseling & automated refills', category: 'Pharmacy' }
    ]
  },
  {
    planId: 'PLAN-132',
    conditionName: 'Chronic Condition Management Plan 132',
    icd10Code: 'CHRONIC-132',
    goals: [
      { goalId: 'G-1', description: 'Maintain optimal clinical control metrics', targetDays: 90 },
      { goalId: 'G-2', description: 'Prevent acute exacerbation and emergency room visits', targetDays: 180 }
    ],
    interventions: [
      { interventionId: 'INT-1', title: 'Daily vitals monitoring & remote patient telemetry', category: 'Monitoring' },
      { interventionId: 'INT-2', title: 'Medication adherence counseling & automated refills', category: 'Pharmacy' }
    ]
  },
  {
    planId: 'PLAN-133',
    conditionName: 'Chronic Condition Management Plan 133',
    icd10Code: 'CHRONIC-133',
    goals: [
      { goalId: 'G-1', description: 'Maintain optimal clinical control metrics', targetDays: 90 },
      { goalId: 'G-2', description: 'Prevent acute exacerbation and emergency room visits', targetDays: 180 }
    ],
    interventions: [
      { interventionId: 'INT-1', title: 'Daily vitals monitoring & remote patient telemetry', category: 'Monitoring' },
      { interventionId: 'INT-2', title: 'Medication adherence counseling & automated refills', category: 'Pharmacy' }
    ]
  },
  {
    planId: 'PLAN-134',
    conditionName: 'Chronic Condition Management Plan 134',
    icd10Code: 'CHRONIC-134',
    goals: [
      { goalId: 'G-1', description: 'Maintain optimal clinical control metrics', targetDays: 90 },
      { goalId: 'G-2', description: 'Prevent acute exacerbation and emergency room visits', targetDays: 180 }
    ],
    interventions: [
      { interventionId: 'INT-1', title: 'Daily vitals monitoring & remote patient telemetry', category: 'Monitoring' },
      { interventionId: 'INT-2', title: 'Medication adherence counseling & automated refills', category: 'Pharmacy' }
    ]
  },
  {
    planId: 'PLAN-135',
    conditionName: 'Chronic Condition Management Plan 135',
    icd10Code: 'CHRONIC-135',
    goals: [
      { goalId: 'G-1', description: 'Maintain optimal clinical control metrics', targetDays: 90 },
      { goalId: 'G-2', description: 'Prevent acute exacerbation and emergency room visits', targetDays: 180 }
    ],
    interventions: [
      { interventionId: 'INT-1', title: 'Daily vitals monitoring & remote patient telemetry', category: 'Monitoring' },
      { interventionId: 'INT-2', title: 'Medication adherence counseling & automated refills', category: 'Pharmacy' }
    ]
  },
  {
    planId: 'PLAN-136',
    conditionName: 'Chronic Condition Management Plan 136',
    icd10Code: 'CHRONIC-136',
    goals: [
      { goalId: 'G-1', description: 'Maintain optimal clinical control metrics', targetDays: 90 },
      { goalId: 'G-2', description: 'Prevent acute exacerbation and emergency room visits', targetDays: 180 }
    ],
    interventions: [
      { interventionId: 'INT-1', title: 'Daily vitals monitoring & remote patient telemetry', category: 'Monitoring' },
      { interventionId: 'INT-2', title: 'Medication adherence counseling & automated refills', category: 'Pharmacy' }
    ]
  },
  {
    planId: 'PLAN-137',
    conditionName: 'Chronic Condition Management Plan 137',
    icd10Code: 'CHRONIC-137',
    goals: [
      { goalId: 'G-1', description: 'Maintain optimal clinical control metrics', targetDays: 90 },
      { goalId: 'G-2', description: 'Prevent acute exacerbation and emergency room visits', targetDays: 180 }
    ],
    interventions: [
      { interventionId: 'INT-1', title: 'Daily vitals monitoring & remote patient telemetry', category: 'Monitoring' },
      { interventionId: 'INT-2', title: 'Medication adherence counseling & automated refills', category: 'Pharmacy' }
    ]
  },
  {
    planId: 'PLAN-138',
    conditionName: 'Chronic Condition Management Plan 138',
    icd10Code: 'CHRONIC-138',
    goals: [
      { goalId: 'G-1', description: 'Maintain optimal clinical control metrics', targetDays: 90 },
      { goalId: 'G-2', description: 'Prevent acute exacerbation and emergency room visits', targetDays: 180 }
    ],
    interventions: [
      { interventionId: 'INT-1', title: 'Daily vitals monitoring & remote patient telemetry', category: 'Monitoring' },
      { interventionId: 'INT-2', title: 'Medication adherence counseling & automated refills', category: 'Pharmacy' }
    ]
  },
  {
    planId: 'PLAN-139',
    conditionName: 'Chronic Condition Management Plan 139',
    icd10Code: 'CHRONIC-139',
    goals: [
      { goalId: 'G-1', description: 'Maintain optimal clinical control metrics', targetDays: 90 },
      { goalId: 'G-2', description: 'Prevent acute exacerbation and emergency room visits', targetDays: 180 }
    ],
    interventions: [
      { interventionId: 'INT-1', title: 'Daily vitals monitoring & remote patient telemetry', category: 'Monitoring' },
      { interventionId: 'INT-2', title: 'Medication adherence counseling & automated refills', category: 'Pharmacy' }
    ]
  },
  {
    planId: 'PLAN-140',
    conditionName: 'Chronic Condition Management Plan 140',
    icd10Code: 'CHRONIC-140',
    goals: [
      { goalId: 'G-1', description: 'Maintain optimal clinical control metrics', targetDays: 90 },
      { goalId: 'G-2', description: 'Prevent acute exacerbation and emergency room visits', targetDays: 180 }
    ],
    interventions: [
      { interventionId: 'INT-1', title: 'Daily vitals monitoring & remote patient telemetry', category: 'Monitoring' },
      { interventionId: 'INT-2', title: 'Medication adherence counseling & automated refills', category: 'Pharmacy' }
    ]
  },
  {
    planId: 'PLAN-141',
    conditionName: 'Chronic Condition Management Plan 141',
    icd10Code: 'CHRONIC-141',
    goals: [
      { goalId: 'G-1', description: 'Maintain optimal clinical control metrics', targetDays: 90 },
      { goalId: 'G-2', description: 'Prevent acute exacerbation and emergency room visits', targetDays: 180 }
    ],
    interventions: [
      { interventionId: 'INT-1', title: 'Daily vitals monitoring & remote patient telemetry', category: 'Monitoring' },
      { interventionId: 'INT-2', title: 'Medication adherence counseling & automated refills', category: 'Pharmacy' }
    ]
  },
  {
    planId: 'PLAN-142',
    conditionName: 'Chronic Condition Management Plan 142',
    icd10Code: 'CHRONIC-142',
    goals: [
      { goalId: 'G-1', description: 'Maintain optimal clinical control metrics', targetDays: 90 },
      { goalId: 'G-2', description: 'Prevent acute exacerbation and emergency room visits', targetDays: 180 }
    ],
    interventions: [
      { interventionId: 'INT-1', title: 'Daily vitals monitoring & remote patient telemetry', category: 'Monitoring' },
      { interventionId: 'INT-2', title: 'Medication adherence counseling & automated refills', category: 'Pharmacy' }
    ]
  },
  {
    planId: 'PLAN-143',
    conditionName: 'Chronic Condition Management Plan 143',
    icd10Code: 'CHRONIC-143',
    goals: [
      { goalId: 'G-1', description: 'Maintain optimal clinical control metrics', targetDays: 90 },
      { goalId: 'G-2', description: 'Prevent acute exacerbation and emergency room visits', targetDays: 180 }
    ],
    interventions: [
      { interventionId: 'INT-1', title: 'Daily vitals monitoring & remote patient telemetry', category: 'Monitoring' },
      { interventionId: 'INT-2', title: 'Medication adherence counseling & automated refills', category: 'Pharmacy' }
    ]
  },
  {
    planId: 'PLAN-144',
    conditionName: 'Chronic Condition Management Plan 144',
    icd10Code: 'CHRONIC-144',
    goals: [
      { goalId: 'G-1', description: 'Maintain optimal clinical control metrics', targetDays: 90 },
      { goalId: 'G-2', description: 'Prevent acute exacerbation and emergency room visits', targetDays: 180 }
    ],
    interventions: [
      { interventionId: 'INT-1', title: 'Daily vitals monitoring & remote patient telemetry', category: 'Monitoring' },
      { interventionId: 'INT-2', title: 'Medication adherence counseling & automated refills', category: 'Pharmacy' }
    ]
  },
  {
    planId: 'PLAN-145',
    conditionName: 'Chronic Condition Management Plan 145',
    icd10Code: 'CHRONIC-145',
    goals: [
      { goalId: 'G-1', description: 'Maintain optimal clinical control metrics', targetDays: 90 },
      { goalId: 'G-2', description: 'Prevent acute exacerbation and emergency room visits', targetDays: 180 }
    ],
    interventions: [
      { interventionId: 'INT-1', title: 'Daily vitals monitoring & remote patient telemetry', category: 'Monitoring' },
      { interventionId: 'INT-2', title: 'Medication adherence counseling & automated refills', category: 'Pharmacy' }
    ]
  },
  {
    planId: 'PLAN-146',
    conditionName: 'Chronic Condition Management Plan 146',
    icd10Code: 'CHRONIC-146',
    goals: [
      { goalId: 'G-1', description: 'Maintain optimal clinical control metrics', targetDays: 90 },
      { goalId: 'G-2', description: 'Prevent acute exacerbation and emergency room visits', targetDays: 180 }
    ],
    interventions: [
      { interventionId: 'INT-1', title: 'Daily vitals monitoring & remote patient telemetry', category: 'Monitoring' },
      { interventionId: 'INT-2', title: 'Medication adherence counseling & automated refills', category: 'Pharmacy' }
    ]
  },
  {
    planId: 'PLAN-147',
    conditionName: 'Chronic Condition Management Plan 147',
    icd10Code: 'CHRONIC-147',
    goals: [
      { goalId: 'G-1', description: 'Maintain optimal clinical control metrics', targetDays: 90 },
      { goalId: 'G-2', description: 'Prevent acute exacerbation and emergency room visits', targetDays: 180 }
    ],
    interventions: [
      { interventionId: 'INT-1', title: 'Daily vitals monitoring & remote patient telemetry', category: 'Monitoring' },
      { interventionId: 'INT-2', title: 'Medication adherence counseling & automated refills', category: 'Pharmacy' }
    ]
  },
  {
    planId: 'PLAN-148',
    conditionName: 'Chronic Condition Management Plan 148',
    icd10Code: 'CHRONIC-148',
    goals: [
      { goalId: 'G-1', description: 'Maintain optimal clinical control metrics', targetDays: 90 },
      { goalId: 'G-2', description: 'Prevent acute exacerbation and emergency room visits', targetDays: 180 }
    ],
    interventions: [
      { interventionId: 'INT-1', title: 'Daily vitals monitoring & remote patient telemetry', category: 'Monitoring' },
      { interventionId: 'INT-2', title: 'Medication adherence counseling & automated refills', category: 'Pharmacy' }
    ]
  },
  {
    planId: 'PLAN-149',
    conditionName: 'Chronic Condition Management Plan 149',
    icd10Code: 'CHRONIC-149',
    goals: [
      { goalId: 'G-1', description: 'Maintain optimal clinical control metrics', targetDays: 90 },
      { goalId: 'G-2', description: 'Prevent acute exacerbation and emergency room visits', targetDays: 180 }
    ],
    interventions: [
      { interventionId: 'INT-1', title: 'Daily vitals monitoring & remote patient telemetry', category: 'Monitoring' },
      { interventionId: 'INT-2', title: 'Medication adherence counseling & automated refills', category: 'Pharmacy' }
    ]
  },
  {
    planId: 'PLAN-150',
    conditionName: 'Chronic Condition Management Plan 150',
    icd10Code: 'CHRONIC-150',
    goals: [
      { goalId: 'G-1', description: 'Maintain optimal clinical control metrics', targetDays: 90 },
      { goalId: 'G-2', description: 'Prevent acute exacerbation and emergency room visits', targetDays: 180 }
    ],
    interventions: [
      { interventionId: 'INT-1', title: 'Daily vitals monitoring & remote patient telemetry', category: 'Monitoring' },
      { interventionId: 'INT-2', title: 'Medication adherence counseling & automated refills', category: 'Pharmacy' }
    ]
  },
  {
    planId: 'PLAN-151',
    conditionName: 'Chronic Condition Management Plan 151',
    icd10Code: 'CHRONIC-151',
    goals: [
      { goalId: 'G-1', description: 'Maintain optimal clinical control metrics', targetDays: 90 },
      { goalId: 'G-2', description: 'Prevent acute exacerbation and emergency room visits', targetDays: 180 }
    ],
    interventions: [
      { interventionId: 'INT-1', title: 'Daily vitals monitoring & remote patient telemetry', category: 'Monitoring' },
      { interventionId: 'INT-2', title: 'Medication adherence counseling & automated refills', category: 'Pharmacy' }
    ]
  },
  {
    planId: 'PLAN-152',
    conditionName: 'Chronic Condition Management Plan 152',
    icd10Code: 'CHRONIC-152',
    goals: [
      { goalId: 'G-1', description: 'Maintain optimal clinical control metrics', targetDays: 90 },
      { goalId: 'G-2', description: 'Prevent acute exacerbation and emergency room visits', targetDays: 180 }
    ],
    interventions: [
      { interventionId: 'INT-1', title: 'Daily vitals monitoring & remote patient telemetry', category: 'Monitoring' },
      { interventionId: 'INT-2', title: 'Medication adherence counseling & automated refills', category: 'Pharmacy' }
    ]
  },
  {
    planId: 'PLAN-153',
    conditionName: 'Chronic Condition Management Plan 153',
    icd10Code: 'CHRONIC-153',
    goals: [
      { goalId: 'G-1', description: 'Maintain optimal clinical control metrics', targetDays: 90 },
      { goalId: 'G-2', description: 'Prevent acute exacerbation and emergency room visits', targetDays: 180 }
    ],
    interventions: [
      { interventionId: 'INT-1', title: 'Daily vitals monitoring & remote patient telemetry', category: 'Monitoring' },
      { interventionId: 'INT-2', title: 'Medication adherence counseling & automated refills', category: 'Pharmacy' }
    ]
  },
  {
    planId: 'PLAN-154',
    conditionName: 'Chronic Condition Management Plan 154',
    icd10Code: 'CHRONIC-154',
    goals: [
      { goalId: 'G-1', description: 'Maintain optimal clinical control metrics', targetDays: 90 },
      { goalId: 'G-2', description: 'Prevent acute exacerbation and emergency room visits', targetDays: 180 }
    ],
    interventions: [
      { interventionId: 'INT-1', title: 'Daily vitals monitoring & remote patient telemetry', category: 'Monitoring' },
      { interventionId: 'INT-2', title: 'Medication adherence counseling & automated refills', category: 'Pharmacy' }
    ]
  },
  {
    planId: 'PLAN-155',
    conditionName: 'Chronic Condition Management Plan 155',
    icd10Code: 'CHRONIC-155',
    goals: [
      { goalId: 'G-1', description: 'Maintain optimal clinical control metrics', targetDays: 90 },
      { goalId: 'G-2', description: 'Prevent acute exacerbation and emergency room visits', targetDays: 180 }
    ],
    interventions: [
      { interventionId: 'INT-1', title: 'Daily vitals monitoring & remote patient telemetry', category: 'Monitoring' },
      { interventionId: 'INT-2', title: 'Medication adherence counseling & automated refills', category: 'Pharmacy' }
    ]
  },
  {
    planId: 'PLAN-156',
    conditionName: 'Chronic Condition Management Plan 156',
    icd10Code: 'CHRONIC-156',
    goals: [
      { goalId: 'G-1', description: 'Maintain optimal clinical control metrics', targetDays: 90 },
      { goalId: 'G-2', description: 'Prevent acute exacerbation and emergency room visits', targetDays: 180 }
    ],
    interventions: [
      { interventionId: 'INT-1', title: 'Daily vitals monitoring & remote patient telemetry', category: 'Monitoring' },
      { interventionId: 'INT-2', title: 'Medication adherence counseling & automated refills', category: 'Pharmacy' }
    ]
  },
  {
    planId: 'PLAN-157',
    conditionName: 'Chronic Condition Management Plan 157',
    icd10Code: 'CHRONIC-157',
    goals: [
      { goalId: 'G-1', description: 'Maintain optimal clinical control metrics', targetDays: 90 },
      { goalId: 'G-2', description: 'Prevent acute exacerbation and emergency room visits', targetDays: 180 }
    ],
    interventions: [
      { interventionId: 'INT-1', title: 'Daily vitals monitoring & remote patient telemetry', category: 'Monitoring' },
      { interventionId: 'INT-2', title: 'Medication adherence counseling & automated refills', category: 'Pharmacy' }
    ]
  },
  {
    planId: 'PLAN-158',
    conditionName: 'Chronic Condition Management Plan 158',
    icd10Code: 'CHRONIC-158',
    goals: [
      { goalId: 'G-1', description: 'Maintain optimal clinical control metrics', targetDays: 90 },
      { goalId: 'G-2', description: 'Prevent acute exacerbation and emergency room visits', targetDays: 180 }
    ],
    interventions: [
      { interventionId: 'INT-1', title: 'Daily vitals monitoring & remote patient telemetry', category: 'Monitoring' },
      { interventionId: 'INT-2', title: 'Medication adherence counseling & automated refills', category: 'Pharmacy' }
    ]
  },
  {
    planId: 'PLAN-159',
    conditionName: 'Chronic Condition Management Plan 159',
    icd10Code: 'CHRONIC-159',
    goals: [
      { goalId: 'G-1', description: 'Maintain optimal clinical control metrics', targetDays: 90 },
      { goalId: 'G-2', description: 'Prevent acute exacerbation and emergency room visits', targetDays: 180 }
    ],
    interventions: [
      { interventionId: 'INT-1', title: 'Daily vitals monitoring & remote patient telemetry', category: 'Monitoring' },
      { interventionId: 'INT-2', title: 'Medication adherence counseling & automated refills', category: 'Pharmacy' }
    ]
  },
  {
    planId: 'PLAN-160',
    conditionName: 'Chronic Condition Management Plan 160',
    icd10Code: 'CHRONIC-160',
    goals: [
      { goalId: 'G-1', description: 'Maintain optimal clinical control metrics', targetDays: 90 },
      { goalId: 'G-2', description: 'Prevent acute exacerbation and emergency room visits', targetDays: 180 }
    ],
    interventions: [
      { interventionId: 'INT-1', title: 'Daily vitals monitoring & remote patient telemetry', category: 'Monitoring' },
      { interventionId: 'INT-2', title: 'Medication adherence counseling & automated refills', category: 'Pharmacy' }
    ]
  },
  {
    planId: 'PLAN-161',
    conditionName: 'Chronic Condition Management Plan 161',
    icd10Code: 'CHRONIC-161',
    goals: [
      { goalId: 'G-1', description: 'Maintain optimal clinical control metrics', targetDays: 90 },
      { goalId: 'G-2', description: 'Prevent acute exacerbation and emergency room visits', targetDays: 180 }
    ],
    interventions: [
      { interventionId: 'INT-1', title: 'Daily vitals monitoring & remote patient telemetry', category: 'Monitoring' },
      { interventionId: 'INT-2', title: 'Medication adherence counseling & automated refills', category: 'Pharmacy' }
    ]
  },
  {
    planId: 'PLAN-162',
    conditionName: 'Chronic Condition Management Plan 162',
    icd10Code: 'CHRONIC-162',
    goals: [
      { goalId: 'G-1', description: 'Maintain optimal clinical control metrics', targetDays: 90 },
      { goalId: 'G-2', description: 'Prevent acute exacerbation and emergency room visits', targetDays: 180 }
    ],
    interventions: [
      { interventionId: 'INT-1', title: 'Daily vitals monitoring & remote patient telemetry', category: 'Monitoring' },
      { interventionId: 'INT-2', title: 'Medication adherence counseling & automated refills', category: 'Pharmacy' }
    ]
  },
  {
    planId: 'PLAN-163',
    conditionName: 'Chronic Condition Management Plan 163',
    icd10Code: 'CHRONIC-163',
    goals: [
      { goalId: 'G-1', description: 'Maintain optimal clinical control metrics', targetDays: 90 },
      { goalId: 'G-2', description: 'Prevent acute exacerbation and emergency room visits', targetDays: 180 }
    ],
    interventions: [
      { interventionId: 'INT-1', title: 'Daily vitals monitoring & remote patient telemetry', category: 'Monitoring' },
      { interventionId: 'INT-2', title: 'Medication adherence counseling & automated refills', category: 'Pharmacy' }
    ]
  },
  {
    planId: 'PLAN-164',
    conditionName: 'Chronic Condition Management Plan 164',
    icd10Code: 'CHRONIC-164',
    goals: [
      { goalId: 'G-1', description: 'Maintain optimal clinical control metrics', targetDays: 90 },
      { goalId: 'G-2', description: 'Prevent acute exacerbation and emergency room visits', targetDays: 180 }
    ],
    interventions: [
      { interventionId: 'INT-1', title: 'Daily vitals monitoring & remote patient telemetry', category: 'Monitoring' },
      { interventionId: 'INT-2', title: 'Medication adherence counseling & automated refills', category: 'Pharmacy' }
    ]
  },
  {
    planId: 'PLAN-165',
    conditionName: 'Chronic Condition Management Plan 165',
    icd10Code: 'CHRONIC-165',
    goals: [
      { goalId: 'G-1', description: 'Maintain optimal clinical control metrics', targetDays: 90 },
      { goalId: 'G-2', description: 'Prevent acute exacerbation and emergency room visits', targetDays: 180 }
    ],
    interventions: [
      { interventionId: 'INT-1', title: 'Daily vitals monitoring & remote patient telemetry', category: 'Monitoring' },
      { interventionId: 'INT-2', title: 'Medication adherence counseling & automated refills', category: 'Pharmacy' }
    ]
  },
  {
    planId: 'PLAN-166',
    conditionName: 'Chronic Condition Management Plan 166',
    icd10Code: 'CHRONIC-166',
    goals: [
      { goalId: 'G-1', description: 'Maintain optimal clinical control metrics', targetDays: 90 },
      { goalId: 'G-2', description: 'Prevent acute exacerbation and emergency room visits', targetDays: 180 }
    ],
    interventions: [
      { interventionId: 'INT-1', title: 'Daily vitals monitoring & remote patient telemetry', category: 'Monitoring' },
      { interventionId: 'INT-2', title: 'Medication adherence counseling & automated refills', category: 'Pharmacy' }
    ]
  },
  {
    planId: 'PLAN-167',
    conditionName: 'Chronic Condition Management Plan 167',
    icd10Code: 'CHRONIC-167',
    goals: [
      { goalId: 'G-1', description: 'Maintain optimal clinical control metrics', targetDays: 90 },
      { goalId: 'G-2', description: 'Prevent acute exacerbation and emergency room visits', targetDays: 180 }
    ],
    interventions: [
      { interventionId: 'INT-1', title: 'Daily vitals monitoring & remote patient telemetry', category: 'Monitoring' },
      { interventionId: 'INT-2', title: 'Medication adherence counseling & automated refills', category: 'Pharmacy' }
    ]
  },
  {
    planId: 'PLAN-168',
    conditionName: 'Chronic Condition Management Plan 168',
    icd10Code: 'CHRONIC-168',
    goals: [
      { goalId: 'G-1', description: 'Maintain optimal clinical control metrics', targetDays: 90 },
      { goalId: 'G-2', description: 'Prevent acute exacerbation and emergency room visits', targetDays: 180 }
    ],
    interventions: [
      { interventionId: 'INT-1', title: 'Daily vitals monitoring & remote patient telemetry', category: 'Monitoring' },
      { interventionId: 'INT-2', title: 'Medication adherence counseling & automated refills', category: 'Pharmacy' }
    ]
  },
  {
    planId: 'PLAN-169',
    conditionName: 'Chronic Condition Management Plan 169',
    icd10Code: 'CHRONIC-169',
    goals: [
      { goalId: 'G-1', description: 'Maintain optimal clinical control metrics', targetDays: 90 },
      { goalId: 'G-2', description: 'Prevent acute exacerbation and emergency room visits', targetDays: 180 }
    ],
    interventions: [
      { interventionId: 'INT-1', title: 'Daily vitals monitoring & remote patient telemetry', category: 'Monitoring' },
      { interventionId: 'INT-2', title: 'Medication adherence counseling & automated refills', category: 'Pharmacy' }
    ]
  },
  {
    planId: 'PLAN-170',
    conditionName: 'Chronic Condition Management Plan 170',
    icd10Code: 'CHRONIC-170',
    goals: [
      { goalId: 'G-1', description: 'Maintain optimal clinical control metrics', targetDays: 90 },
      { goalId: 'G-2', description: 'Prevent acute exacerbation and emergency room visits', targetDays: 180 }
    ],
    interventions: [
      { interventionId: 'INT-1', title: 'Daily vitals monitoring & remote patient telemetry', category: 'Monitoring' },
      { interventionId: 'INT-2', title: 'Medication adherence counseling & automated refills', category: 'Pharmacy' }
    ]
  },
  {
    planId: 'PLAN-171',
    conditionName: 'Chronic Condition Management Plan 171',
    icd10Code: 'CHRONIC-171',
    goals: [
      { goalId: 'G-1', description: 'Maintain optimal clinical control metrics', targetDays: 90 },
      { goalId: 'G-2', description: 'Prevent acute exacerbation and emergency room visits', targetDays: 180 }
    ],
    interventions: [
      { interventionId: 'INT-1', title: 'Daily vitals monitoring & remote patient telemetry', category: 'Monitoring' },
      { interventionId: 'INT-2', title: 'Medication adherence counseling & automated refills', category: 'Pharmacy' }
    ]
  },
  {
    planId: 'PLAN-172',
    conditionName: 'Chronic Condition Management Plan 172',
    icd10Code: 'CHRONIC-172',
    goals: [
      { goalId: 'G-1', description: 'Maintain optimal clinical control metrics', targetDays: 90 },
      { goalId: 'G-2', description: 'Prevent acute exacerbation and emergency room visits', targetDays: 180 }
    ],
    interventions: [
      { interventionId: 'INT-1', title: 'Daily vitals monitoring & remote patient telemetry', category: 'Monitoring' },
      { interventionId: 'INT-2', title: 'Medication adherence counseling & automated refills', category: 'Pharmacy' }
    ]
  },
  {
    planId: 'PLAN-173',
    conditionName: 'Chronic Condition Management Plan 173',
    icd10Code: 'CHRONIC-173',
    goals: [
      { goalId: 'G-1', description: 'Maintain optimal clinical control metrics', targetDays: 90 },
      { goalId: 'G-2', description: 'Prevent acute exacerbation and emergency room visits', targetDays: 180 }
    ],
    interventions: [
      { interventionId: 'INT-1', title: 'Daily vitals monitoring & remote patient telemetry', category: 'Monitoring' },
      { interventionId: 'INT-2', title: 'Medication adherence counseling & automated refills', category: 'Pharmacy' }
    ]
  },
  {
    planId: 'PLAN-174',
    conditionName: 'Chronic Condition Management Plan 174',
    icd10Code: 'CHRONIC-174',
    goals: [
      { goalId: 'G-1', description: 'Maintain optimal clinical control metrics', targetDays: 90 },
      { goalId: 'G-2', description: 'Prevent acute exacerbation and emergency room visits', targetDays: 180 }
    ],
    interventions: [
      { interventionId: 'INT-1', title: 'Daily vitals monitoring & remote patient telemetry', category: 'Monitoring' },
      { interventionId: 'INT-2', title: 'Medication adherence counseling & automated refills', category: 'Pharmacy' }
    ]
  },
  {
    planId: 'PLAN-175',
    conditionName: 'Chronic Condition Management Plan 175',
    icd10Code: 'CHRONIC-175',
    goals: [
      { goalId: 'G-1', description: 'Maintain optimal clinical control metrics', targetDays: 90 },
      { goalId: 'G-2', description: 'Prevent acute exacerbation and emergency room visits', targetDays: 180 }
    ],
    interventions: [
      { interventionId: 'INT-1', title: 'Daily vitals monitoring & remote patient telemetry', category: 'Monitoring' },
      { interventionId: 'INT-2', title: 'Medication adherence counseling & automated refills', category: 'Pharmacy' }
    ]
  },
  {
    planId: 'PLAN-176',
    conditionName: 'Chronic Condition Management Plan 176',
    icd10Code: 'CHRONIC-176',
    goals: [
      { goalId: 'G-1', description: 'Maintain optimal clinical control metrics', targetDays: 90 },
      { goalId: 'G-2', description: 'Prevent acute exacerbation and emergency room visits', targetDays: 180 }
    ],
    interventions: [
      { interventionId: 'INT-1', title: 'Daily vitals monitoring & remote patient telemetry', category: 'Monitoring' },
      { interventionId: 'INT-2', title: 'Medication adherence counseling & automated refills', category: 'Pharmacy' }
    ]
  },
  {
    planId: 'PLAN-177',
    conditionName: 'Chronic Condition Management Plan 177',
    icd10Code: 'CHRONIC-177',
    goals: [
      { goalId: 'G-1', description: 'Maintain optimal clinical control metrics', targetDays: 90 },
      { goalId: 'G-2', description: 'Prevent acute exacerbation and emergency room visits', targetDays: 180 }
    ],
    interventions: [
      { interventionId: 'INT-1', title: 'Daily vitals monitoring & remote patient telemetry', category: 'Monitoring' },
      { interventionId: 'INT-2', title: 'Medication adherence counseling & automated refills', category: 'Pharmacy' }
    ]
  },
  {
    planId: 'PLAN-178',
    conditionName: 'Chronic Condition Management Plan 178',
    icd10Code: 'CHRONIC-178',
    goals: [
      { goalId: 'G-1', description: 'Maintain optimal clinical control metrics', targetDays: 90 },
      { goalId: 'G-2', description: 'Prevent acute exacerbation and emergency room visits', targetDays: 180 }
    ],
    interventions: [
      { interventionId: 'INT-1', title: 'Daily vitals monitoring & remote patient telemetry', category: 'Monitoring' },
      { interventionId: 'INT-2', title: 'Medication adherence counseling & automated refills', category: 'Pharmacy' }
    ]
  },
  {
    planId: 'PLAN-179',
    conditionName: 'Chronic Condition Management Plan 179',
    icd10Code: 'CHRONIC-179',
    goals: [
      { goalId: 'G-1', description: 'Maintain optimal clinical control metrics', targetDays: 90 },
      { goalId: 'G-2', description: 'Prevent acute exacerbation and emergency room visits', targetDays: 180 }
    ],
    interventions: [
      { interventionId: 'INT-1', title: 'Daily vitals monitoring & remote patient telemetry', category: 'Monitoring' },
      { interventionId: 'INT-2', title: 'Medication adherence counseling & automated refills', category: 'Pharmacy' }
    ]
  },
  {
    planId: 'PLAN-180',
    conditionName: 'Chronic Condition Management Plan 180',
    icd10Code: 'CHRONIC-180',
    goals: [
      { goalId: 'G-1', description: 'Maintain optimal clinical control metrics', targetDays: 90 },
      { goalId: 'G-2', description: 'Prevent acute exacerbation and emergency room visits', targetDays: 180 }
    ],
    interventions: [
      { interventionId: 'INT-1', title: 'Daily vitals monitoring & remote patient telemetry', category: 'Monitoring' },
      { interventionId: 'INT-2', title: 'Medication adherence counseling & automated refills', category: 'Pharmacy' }
    ]
  },
  {
    planId: 'PLAN-181',
    conditionName: 'Chronic Condition Management Plan 181',
    icd10Code: 'CHRONIC-181',
    goals: [
      { goalId: 'G-1', description: 'Maintain optimal clinical control metrics', targetDays: 90 },
      { goalId: 'G-2', description: 'Prevent acute exacerbation and emergency room visits', targetDays: 180 }
    ],
    interventions: [
      { interventionId: 'INT-1', title: 'Daily vitals monitoring & remote patient telemetry', category: 'Monitoring' },
      { interventionId: 'INT-2', title: 'Medication adherence counseling & automated refills', category: 'Pharmacy' }
    ]
  },
  {
    planId: 'PLAN-182',
    conditionName: 'Chronic Condition Management Plan 182',
    icd10Code: 'CHRONIC-182',
    goals: [
      { goalId: 'G-1', description: 'Maintain optimal clinical control metrics', targetDays: 90 },
      { goalId: 'G-2', description: 'Prevent acute exacerbation and emergency room visits', targetDays: 180 }
    ],
    interventions: [
      { interventionId: 'INT-1', title: 'Daily vitals monitoring & remote patient telemetry', category: 'Monitoring' },
      { interventionId: 'INT-2', title: 'Medication adherence counseling & automated refills', category: 'Pharmacy' }
    ]
  },
  {
    planId: 'PLAN-183',
    conditionName: 'Chronic Condition Management Plan 183',
    icd10Code: 'CHRONIC-183',
    goals: [
      { goalId: 'G-1', description: 'Maintain optimal clinical control metrics', targetDays: 90 },
      { goalId: 'G-2', description: 'Prevent acute exacerbation and emergency room visits', targetDays: 180 }
    ],
    interventions: [
      { interventionId: 'INT-1', title: 'Daily vitals monitoring & remote patient telemetry', category: 'Monitoring' },
      { interventionId: 'INT-2', title: 'Medication adherence counseling & automated refills', category: 'Pharmacy' }
    ]
  },
  {
    planId: 'PLAN-184',
    conditionName: 'Chronic Condition Management Plan 184',
    icd10Code: 'CHRONIC-184',
    goals: [
      { goalId: 'G-1', description: 'Maintain optimal clinical control metrics', targetDays: 90 },
      { goalId: 'G-2', description: 'Prevent acute exacerbation and emergency room visits', targetDays: 180 }
    ],
    interventions: [
      { interventionId: 'INT-1', title: 'Daily vitals monitoring & remote patient telemetry', category: 'Monitoring' },
      { interventionId: 'INT-2', title: 'Medication adherence counseling & automated refills', category: 'Pharmacy' }
    ]
  },
  {
    planId: 'PLAN-185',
    conditionName: 'Chronic Condition Management Plan 185',
    icd10Code: 'CHRONIC-185',
    goals: [
      { goalId: 'G-1', description: 'Maintain optimal clinical control metrics', targetDays: 90 },
      { goalId: 'G-2', description: 'Prevent acute exacerbation and emergency room visits', targetDays: 180 }
    ],
    interventions: [
      { interventionId: 'INT-1', title: 'Daily vitals monitoring & remote patient telemetry', category: 'Monitoring' },
      { interventionId: 'INT-2', title: 'Medication adherence counseling & automated refills', category: 'Pharmacy' }
    ]
  },
  {
    planId: 'PLAN-186',
    conditionName: 'Chronic Condition Management Plan 186',
    icd10Code: 'CHRONIC-186',
    goals: [
      { goalId: 'G-1', description: 'Maintain optimal clinical control metrics', targetDays: 90 },
      { goalId: 'G-2', description: 'Prevent acute exacerbation and emergency room visits', targetDays: 180 }
    ],
    interventions: [
      { interventionId: 'INT-1', title: 'Daily vitals monitoring & remote patient telemetry', category: 'Monitoring' },
      { interventionId: 'INT-2', title: 'Medication adherence counseling & automated refills', category: 'Pharmacy' }
    ]
  },
  {
    planId: 'PLAN-187',
    conditionName: 'Chronic Condition Management Plan 187',
    icd10Code: 'CHRONIC-187',
    goals: [
      { goalId: 'G-1', description: 'Maintain optimal clinical control metrics', targetDays: 90 },
      { goalId: 'G-2', description: 'Prevent acute exacerbation and emergency room visits', targetDays: 180 }
    ],
    interventions: [
      { interventionId: 'INT-1', title: 'Daily vitals monitoring & remote patient telemetry', category: 'Monitoring' },
      { interventionId: 'INT-2', title: 'Medication adherence counseling & automated refills', category: 'Pharmacy' }
    ]
  },
  {
    planId: 'PLAN-188',
    conditionName: 'Chronic Condition Management Plan 188',
    icd10Code: 'CHRONIC-188',
    goals: [
      { goalId: 'G-1', description: 'Maintain optimal clinical control metrics', targetDays: 90 },
      { goalId: 'G-2', description: 'Prevent acute exacerbation and emergency room visits', targetDays: 180 }
    ],
    interventions: [
      { interventionId: 'INT-1', title: 'Daily vitals monitoring & remote patient telemetry', category: 'Monitoring' },
      { interventionId: 'INT-2', title: 'Medication adherence counseling & automated refills', category: 'Pharmacy' }
    ]
  },
  {
    planId: 'PLAN-189',
    conditionName: 'Chronic Condition Management Plan 189',
    icd10Code: 'CHRONIC-189',
    goals: [
      { goalId: 'G-1', description: 'Maintain optimal clinical control metrics', targetDays: 90 },
      { goalId: 'G-2', description: 'Prevent acute exacerbation and emergency room visits', targetDays: 180 }
    ],
    interventions: [
      { interventionId: 'INT-1', title: 'Daily vitals monitoring & remote patient telemetry', category: 'Monitoring' },
      { interventionId: 'INT-2', title: 'Medication adherence counseling & automated refills', category: 'Pharmacy' }
    ]
  },
  {
    planId: 'PLAN-190',
    conditionName: 'Chronic Condition Management Plan 190',
    icd10Code: 'CHRONIC-190',
    goals: [
      { goalId: 'G-1', description: 'Maintain optimal clinical control metrics', targetDays: 90 },
      { goalId: 'G-2', description: 'Prevent acute exacerbation and emergency room visits', targetDays: 180 }
    ],
    interventions: [
      { interventionId: 'INT-1', title: 'Daily vitals monitoring & remote patient telemetry', category: 'Monitoring' },
      { interventionId: 'INT-2', title: 'Medication adherence counseling & automated refills', category: 'Pharmacy' }
    ]
  },
  {
    planId: 'PLAN-191',
    conditionName: 'Chronic Condition Management Plan 191',
    icd10Code: 'CHRONIC-191',
    goals: [
      { goalId: 'G-1', description: 'Maintain optimal clinical control metrics', targetDays: 90 },
      { goalId: 'G-2', description: 'Prevent acute exacerbation and emergency room visits', targetDays: 180 }
    ],
    interventions: [
      { interventionId: 'INT-1', title: 'Daily vitals monitoring & remote patient telemetry', category: 'Monitoring' },
      { interventionId: 'INT-2', title: 'Medication adherence counseling & automated refills', category: 'Pharmacy' }
    ]
  },
  {
    planId: 'PLAN-192',
    conditionName: 'Chronic Condition Management Plan 192',
    icd10Code: 'CHRONIC-192',
    goals: [
      { goalId: 'G-1', description: 'Maintain optimal clinical control metrics', targetDays: 90 },
      { goalId: 'G-2', description: 'Prevent acute exacerbation and emergency room visits', targetDays: 180 }
    ],
    interventions: [
      { interventionId: 'INT-1', title: 'Daily vitals monitoring & remote patient telemetry', category: 'Monitoring' },
      { interventionId: 'INT-2', title: 'Medication adherence counseling & automated refills', category: 'Pharmacy' }
    ]
  },
  {
    planId: 'PLAN-193',
    conditionName: 'Chronic Condition Management Plan 193',
    icd10Code: 'CHRONIC-193',
    goals: [
      { goalId: 'G-1', description: 'Maintain optimal clinical control metrics', targetDays: 90 },
      { goalId: 'G-2', description: 'Prevent acute exacerbation and emergency room visits', targetDays: 180 }
    ],
    interventions: [
      { interventionId: 'INT-1', title: 'Daily vitals monitoring & remote patient telemetry', category: 'Monitoring' },
      { interventionId: 'INT-2', title: 'Medication adherence counseling & automated refills', category: 'Pharmacy' }
    ]
  },
  {
    planId: 'PLAN-194',
    conditionName: 'Chronic Condition Management Plan 194',
    icd10Code: 'CHRONIC-194',
    goals: [
      { goalId: 'G-1', description: 'Maintain optimal clinical control metrics', targetDays: 90 },
      { goalId: 'G-2', description: 'Prevent acute exacerbation and emergency room visits', targetDays: 180 }
    ],
    interventions: [
      { interventionId: 'INT-1', title: 'Daily vitals monitoring & remote patient telemetry', category: 'Monitoring' },
      { interventionId: 'INT-2', title: 'Medication adherence counseling & automated refills', category: 'Pharmacy' }
    ]
  },
  {
    planId: 'PLAN-195',
    conditionName: 'Chronic Condition Management Plan 195',
    icd10Code: 'CHRONIC-195',
    goals: [
      { goalId: 'G-1', description: 'Maintain optimal clinical control metrics', targetDays: 90 },
      { goalId: 'G-2', description: 'Prevent acute exacerbation and emergency room visits', targetDays: 180 }
    ],
    interventions: [
      { interventionId: 'INT-1', title: 'Daily vitals monitoring & remote patient telemetry', category: 'Monitoring' },
      { interventionId: 'INT-2', title: 'Medication adherence counseling & automated refills', category: 'Pharmacy' }
    ]
  },
  {
    planId: 'PLAN-196',
    conditionName: 'Chronic Condition Management Plan 196',
    icd10Code: 'CHRONIC-196',
    goals: [
      { goalId: 'G-1', description: 'Maintain optimal clinical control metrics', targetDays: 90 },
      { goalId: 'G-2', description: 'Prevent acute exacerbation and emergency room visits', targetDays: 180 }
    ],
    interventions: [
      { interventionId: 'INT-1', title: 'Daily vitals monitoring & remote patient telemetry', category: 'Monitoring' },
      { interventionId: 'INT-2', title: 'Medication adherence counseling & automated refills', category: 'Pharmacy' }
    ]
  },
  {
    planId: 'PLAN-197',
    conditionName: 'Chronic Condition Management Plan 197',
    icd10Code: 'CHRONIC-197',
    goals: [
      { goalId: 'G-1', description: 'Maintain optimal clinical control metrics', targetDays: 90 },
      { goalId: 'G-2', description: 'Prevent acute exacerbation and emergency room visits', targetDays: 180 }
    ],
    interventions: [
      { interventionId: 'INT-1', title: 'Daily vitals monitoring & remote patient telemetry', category: 'Monitoring' },
      { interventionId: 'INT-2', title: 'Medication adherence counseling & automated refills', category: 'Pharmacy' }
    ]
  },
  {
    planId: 'PLAN-198',
    conditionName: 'Chronic Condition Management Plan 198',
    icd10Code: 'CHRONIC-198',
    goals: [
      { goalId: 'G-1', description: 'Maintain optimal clinical control metrics', targetDays: 90 },
      { goalId: 'G-2', description: 'Prevent acute exacerbation and emergency room visits', targetDays: 180 }
    ],
    interventions: [
      { interventionId: 'INT-1', title: 'Daily vitals monitoring & remote patient telemetry', category: 'Monitoring' },
      { interventionId: 'INT-2', title: 'Medication adherence counseling & automated refills', category: 'Pharmacy' }
    ]
  },
  {
    planId: 'PLAN-199',
    conditionName: 'Chronic Condition Management Plan 199',
    icd10Code: 'CHRONIC-199',
    goals: [
      { goalId: 'G-1', description: 'Maintain optimal clinical control metrics', targetDays: 90 },
      { goalId: 'G-2', description: 'Prevent acute exacerbation and emergency room visits', targetDays: 180 }
    ],
    interventions: [
      { interventionId: 'INT-1', title: 'Daily vitals monitoring & remote patient telemetry', category: 'Monitoring' },
      { interventionId: 'INT-2', title: 'Medication adherence counseling & automated refills', category: 'Pharmacy' }
    ]
  },
  {
    planId: 'PLAN-200',
    conditionName: 'Chronic Condition Management Plan 200',
    icd10Code: 'CHRONIC-200',
    goals: [
      { goalId: 'G-1', description: 'Maintain optimal clinical control metrics', targetDays: 90 },
      { goalId: 'G-2', description: 'Prevent acute exacerbation and emergency room visits', targetDays: 180 }
    ],
    interventions: [
      { interventionId: 'INT-1', title: 'Daily vitals monitoring & remote patient telemetry', category: 'Monitoring' },
      { interventionId: 'INT-2', title: 'Medication adherence counseling & automated refills', category: 'Pharmacy' }
    ]
  },
  {
    planId: 'PLAN-201',
    conditionName: 'Chronic Condition Management Plan 201',
    icd10Code: 'CHRONIC-201',
    goals: [
      { goalId: 'G-1', description: 'Maintain optimal clinical control metrics', targetDays: 90 },
      { goalId: 'G-2', description: 'Prevent acute exacerbation and emergency room visits', targetDays: 180 }
    ],
    interventions: [
      { interventionId: 'INT-1', title: 'Daily vitals monitoring & remote patient telemetry', category: 'Monitoring' },
      { interventionId: 'INT-2', title: 'Medication adherence counseling & automated refills', category: 'Pharmacy' }
    ]
  },
  {
    planId: 'PLAN-202',
    conditionName: 'Chronic Condition Management Plan 202',
    icd10Code: 'CHRONIC-202',
    goals: [
      { goalId: 'G-1', description: 'Maintain optimal clinical control metrics', targetDays: 90 },
      { goalId: 'G-2', description: 'Prevent acute exacerbation and emergency room visits', targetDays: 180 }
    ],
    interventions: [
      { interventionId: 'INT-1', title: 'Daily vitals monitoring & remote patient telemetry', category: 'Monitoring' },
      { interventionId: 'INT-2', title: 'Medication adherence counseling & automated refills', category: 'Pharmacy' }
    ]
  },
  {
    planId: 'PLAN-203',
    conditionName: 'Chronic Condition Management Plan 203',
    icd10Code: 'CHRONIC-203',
    goals: [
      { goalId: 'G-1', description: 'Maintain optimal clinical control metrics', targetDays: 90 },
      { goalId: 'G-2', description: 'Prevent acute exacerbation and emergency room visits', targetDays: 180 }
    ],
    interventions: [
      { interventionId: 'INT-1', title: 'Daily vitals monitoring & remote patient telemetry', category: 'Monitoring' },
      { interventionId: 'INT-2', title: 'Medication adherence counseling & automated refills', category: 'Pharmacy' }
    ]
  },
  {
    planId: 'PLAN-204',
    conditionName: 'Chronic Condition Management Plan 204',
    icd10Code: 'CHRONIC-204',
    goals: [
      { goalId: 'G-1', description: 'Maintain optimal clinical control metrics', targetDays: 90 },
      { goalId: 'G-2', description: 'Prevent acute exacerbation and emergency room visits', targetDays: 180 }
    ],
    interventions: [
      { interventionId: 'INT-1', title: 'Daily vitals monitoring & remote patient telemetry', category: 'Monitoring' },
      { interventionId: 'INT-2', title: 'Medication adherence counseling & automated refills', category: 'Pharmacy' }
    ]
  },
  {
    planId: 'PLAN-205',
    conditionName: 'Chronic Condition Management Plan 205',
    icd10Code: 'CHRONIC-205',
    goals: [
      { goalId: 'G-1', description: 'Maintain optimal clinical control metrics', targetDays: 90 },
      { goalId: 'G-2', description: 'Prevent acute exacerbation and emergency room visits', targetDays: 180 }
    ],
    interventions: [
      { interventionId: 'INT-1', title: 'Daily vitals monitoring & remote patient telemetry', category: 'Monitoring' },
      { interventionId: 'INT-2', title: 'Medication adherence counseling & automated refills', category: 'Pharmacy' }
    ]
  },
  {
    planId: 'PLAN-206',
    conditionName: 'Chronic Condition Management Plan 206',
    icd10Code: 'CHRONIC-206',
    goals: [
      { goalId: 'G-1', description: 'Maintain optimal clinical control metrics', targetDays: 90 },
      { goalId: 'G-2', description: 'Prevent acute exacerbation and emergency room visits', targetDays: 180 }
    ],
    interventions: [
      { interventionId: 'INT-1', title: 'Daily vitals monitoring & remote patient telemetry', category: 'Monitoring' },
      { interventionId: 'INT-2', title: 'Medication adherence counseling & automated refills', category: 'Pharmacy' }
    ]
  },
  {
    planId: 'PLAN-207',
    conditionName: 'Chronic Condition Management Plan 207',
    icd10Code: 'CHRONIC-207',
    goals: [
      { goalId: 'G-1', description: 'Maintain optimal clinical control metrics', targetDays: 90 },
      { goalId: 'G-2', description: 'Prevent acute exacerbation and emergency room visits', targetDays: 180 }
    ],
    interventions: [
      { interventionId: 'INT-1', title: 'Daily vitals monitoring & remote patient telemetry', category: 'Monitoring' },
      { interventionId: 'INT-2', title: 'Medication adherence counseling & automated refills', category: 'Pharmacy' }
    ]
  },
  {
    planId: 'PLAN-208',
    conditionName: 'Chronic Condition Management Plan 208',
    icd10Code: 'CHRONIC-208',
    goals: [
      { goalId: 'G-1', description: 'Maintain optimal clinical control metrics', targetDays: 90 },
      { goalId: 'G-2', description: 'Prevent acute exacerbation and emergency room visits', targetDays: 180 }
    ],
    interventions: [
      { interventionId: 'INT-1', title: 'Daily vitals monitoring & remote patient telemetry', category: 'Monitoring' },
      { interventionId: 'INT-2', title: 'Medication adherence counseling & automated refills', category: 'Pharmacy' }
    ]
  },
  {
    planId: 'PLAN-209',
    conditionName: 'Chronic Condition Management Plan 209',
    icd10Code: 'CHRONIC-209',
    goals: [
      { goalId: 'G-1', description: 'Maintain optimal clinical control metrics', targetDays: 90 },
      { goalId: 'G-2', description: 'Prevent acute exacerbation and emergency room visits', targetDays: 180 }
    ],
    interventions: [
      { interventionId: 'INT-1', title: 'Daily vitals monitoring & remote patient telemetry', category: 'Monitoring' },
      { interventionId: 'INT-2', title: 'Medication adherence counseling & automated refills', category: 'Pharmacy' }
    ]
  },
  {
    planId: 'PLAN-210',
    conditionName: 'Chronic Condition Management Plan 210',
    icd10Code: 'CHRONIC-210',
    goals: [
      { goalId: 'G-1', description: 'Maintain optimal clinical control metrics', targetDays: 90 },
      { goalId: 'G-2', description: 'Prevent acute exacerbation and emergency room visits', targetDays: 180 }
    ],
    interventions: [
      { interventionId: 'INT-1', title: 'Daily vitals monitoring & remote patient telemetry', category: 'Monitoring' },
      { interventionId: 'INT-2', title: 'Medication adherence counseling & automated refills', category: 'Pharmacy' }
    ]
  },
  {
    planId: 'PLAN-211',
    conditionName: 'Chronic Condition Management Plan 211',
    icd10Code: 'CHRONIC-211',
    goals: [
      { goalId: 'G-1', description: 'Maintain optimal clinical control metrics', targetDays: 90 },
      { goalId: 'G-2', description: 'Prevent acute exacerbation and emergency room visits', targetDays: 180 }
    ],
    interventions: [
      { interventionId: 'INT-1', title: 'Daily vitals monitoring & remote patient telemetry', category: 'Monitoring' },
      { interventionId: 'INT-2', title: 'Medication adherence counseling & automated refills', category: 'Pharmacy' }
    ]
  },
  {
    planId: 'PLAN-212',
    conditionName: 'Chronic Condition Management Plan 212',
    icd10Code: 'CHRONIC-212',
    goals: [
      { goalId: 'G-1', description: 'Maintain optimal clinical control metrics', targetDays: 90 },
      { goalId: 'G-2', description: 'Prevent acute exacerbation and emergency room visits', targetDays: 180 }
    ],
    interventions: [
      { interventionId: 'INT-1', title: 'Daily vitals monitoring & remote patient telemetry', category: 'Monitoring' },
      { interventionId: 'INT-2', title: 'Medication adherence counseling & automated refills', category: 'Pharmacy' }
    ]
  },
  {
    planId: 'PLAN-213',
    conditionName: 'Chronic Condition Management Plan 213',
    icd10Code: 'CHRONIC-213',
    goals: [
      { goalId: 'G-1', description: 'Maintain optimal clinical control metrics', targetDays: 90 },
      { goalId: 'G-2', description: 'Prevent acute exacerbation and emergency room visits', targetDays: 180 }
    ],
    interventions: [
      { interventionId: 'INT-1', title: 'Daily vitals monitoring & remote patient telemetry', category: 'Monitoring' },
      { interventionId: 'INT-2', title: 'Medication adherence counseling & automated refills', category: 'Pharmacy' }
    ]
  },
  {
    planId: 'PLAN-214',
    conditionName: 'Chronic Condition Management Plan 214',
    icd10Code: 'CHRONIC-214',
    goals: [
      { goalId: 'G-1', description: 'Maintain optimal clinical control metrics', targetDays: 90 },
      { goalId: 'G-2', description: 'Prevent acute exacerbation and emergency room visits', targetDays: 180 }
    ],
    interventions: [
      { interventionId: 'INT-1', title: 'Daily vitals monitoring & remote patient telemetry', category: 'Monitoring' },
      { interventionId: 'INT-2', title: 'Medication adherence counseling & automated refills', category: 'Pharmacy' }
    ]
  },
  {
    planId: 'PLAN-215',
    conditionName: 'Chronic Condition Management Plan 215',
    icd10Code: 'CHRONIC-215',
    goals: [
      { goalId: 'G-1', description: 'Maintain optimal clinical control metrics', targetDays: 90 },
      { goalId: 'G-2', description: 'Prevent acute exacerbation and emergency room visits', targetDays: 180 }
    ],
    interventions: [
      { interventionId: 'INT-1', title: 'Daily vitals monitoring & remote patient telemetry', category: 'Monitoring' },
      { interventionId: 'INT-2', title: 'Medication adherence counseling & automated refills', category: 'Pharmacy' }
    ]
  },
  {
    planId: 'PLAN-216',
    conditionName: 'Chronic Condition Management Plan 216',
    icd10Code: 'CHRONIC-216',
    goals: [
      { goalId: 'G-1', description: 'Maintain optimal clinical control metrics', targetDays: 90 },
      { goalId: 'G-2', description: 'Prevent acute exacerbation and emergency room visits', targetDays: 180 }
    ],
    interventions: [
      { interventionId: 'INT-1', title: 'Daily vitals monitoring & remote patient telemetry', category: 'Monitoring' },
      { interventionId: 'INT-2', title: 'Medication adherence counseling & automated refills', category: 'Pharmacy' }
    ]
  },
  {
    planId: 'PLAN-217',
    conditionName: 'Chronic Condition Management Plan 217',
    icd10Code: 'CHRONIC-217',
    goals: [
      { goalId: 'G-1', description: 'Maintain optimal clinical control metrics', targetDays: 90 },
      { goalId: 'G-2', description: 'Prevent acute exacerbation and emergency room visits', targetDays: 180 }
    ],
    interventions: [
      { interventionId: 'INT-1', title: 'Daily vitals monitoring & remote patient telemetry', category: 'Monitoring' },
      { interventionId: 'INT-2', title: 'Medication adherence counseling & automated refills', category: 'Pharmacy' }
    ]
  },
  {
    planId: 'PLAN-218',
    conditionName: 'Chronic Condition Management Plan 218',
    icd10Code: 'CHRONIC-218',
    goals: [
      { goalId: 'G-1', description: 'Maintain optimal clinical control metrics', targetDays: 90 },
      { goalId: 'G-2', description: 'Prevent acute exacerbation and emergency room visits', targetDays: 180 }
    ],
    interventions: [
      { interventionId: 'INT-1', title: 'Daily vitals monitoring & remote patient telemetry', category: 'Monitoring' },
      { interventionId: 'INT-2', title: 'Medication adherence counseling & automated refills', category: 'Pharmacy' }
    ]
  },
  {
    planId: 'PLAN-219',
    conditionName: 'Chronic Condition Management Plan 219',
    icd10Code: 'CHRONIC-219',
    goals: [
      { goalId: 'G-1', description: 'Maintain optimal clinical control metrics', targetDays: 90 },
      { goalId: 'G-2', description: 'Prevent acute exacerbation and emergency room visits', targetDays: 180 }
    ],
    interventions: [
      { interventionId: 'INT-1', title: 'Daily vitals monitoring & remote patient telemetry', category: 'Monitoring' },
      { interventionId: 'INT-2', title: 'Medication adherence counseling & automated refills', category: 'Pharmacy' }
    ]
  },
  {
    planId: 'PLAN-220',
    conditionName: 'Chronic Condition Management Plan 220',
    icd10Code: 'CHRONIC-220',
    goals: [
      { goalId: 'G-1', description: 'Maintain optimal clinical control metrics', targetDays: 90 },
      { goalId: 'G-2', description: 'Prevent acute exacerbation and emergency room visits', targetDays: 180 }
    ],
    interventions: [
      { interventionId: 'INT-1', title: 'Daily vitals monitoring & remote patient telemetry', category: 'Monitoring' },
      { interventionId: 'INT-2', title: 'Medication adherence counseling & automated refills', category: 'Pharmacy' }
    ]
  },
  {
    planId: 'PLAN-221',
    conditionName: 'Chronic Condition Management Plan 221',
    icd10Code: 'CHRONIC-221',
    goals: [
      { goalId: 'G-1', description: 'Maintain optimal clinical control metrics', targetDays: 90 },
      { goalId: 'G-2', description: 'Prevent acute exacerbation and emergency room visits', targetDays: 180 }
    ],
    interventions: [
      { interventionId: 'INT-1', title: 'Daily vitals monitoring & remote patient telemetry', category: 'Monitoring' },
      { interventionId: 'INT-2', title: 'Medication adherence counseling & automated refills', category: 'Pharmacy' }
    ]
  },
  {
    planId: 'PLAN-222',
    conditionName: 'Chronic Condition Management Plan 222',
    icd10Code: 'CHRONIC-222',
    goals: [
      { goalId: 'G-1', description: 'Maintain optimal clinical control metrics', targetDays: 90 },
      { goalId: 'G-2', description: 'Prevent acute exacerbation and emergency room visits', targetDays: 180 }
    ],
    interventions: [
      { interventionId: 'INT-1', title: 'Daily vitals monitoring & remote patient telemetry', category: 'Monitoring' },
      { interventionId: 'INT-2', title: 'Medication adherence counseling & automated refills', category: 'Pharmacy' }
    ]
  },
  {
    planId: 'PLAN-223',
    conditionName: 'Chronic Condition Management Plan 223',
    icd10Code: 'CHRONIC-223',
    goals: [
      { goalId: 'G-1', description: 'Maintain optimal clinical control metrics', targetDays: 90 },
      { goalId: 'G-2', description: 'Prevent acute exacerbation and emergency room visits', targetDays: 180 }
    ],
    interventions: [
      { interventionId: 'INT-1', title: 'Daily vitals monitoring & remote patient telemetry', category: 'Monitoring' },
      { interventionId: 'INT-2', title: 'Medication adherence counseling & automated refills', category: 'Pharmacy' }
    ]
  },
  {
    planId: 'PLAN-224',
    conditionName: 'Chronic Condition Management Plan 224',
    icd10Code: 'CHRONIC-224',
    goals: [
      { goalId: 'G-1', description: 'Maintain optimal clinical control metrics', targetDays: 90 },
      { goalId: 'G-2', description: 'Prevent acute exacerbation and emergency room visits', targetDays: 180 }
    ],
    interventions: [
      { interventionId: 'INT-1', title: 'Daily vitals monitoring & remote patient telemetry', category: 'Monitoring' },
      { interventionId: 'INT-2', title: 'Medication adherence counseling & automated refills', category: 'Pharmacy' }
    ]
  },
  {
    planId: 'PLAN-225',
    conditionName: 'Chronic Condition Management Plan 225',
    icd10Code: 'CHRONIC-225',
    goals: [
      { goalId: 'G-1', description: 'Maintain optimal clinical control metrics', targetDays: 90 },
      { goalId: 'G-2', description: 'Prevent acute exacerbation and emergency room visits', targetDays: 180 }
    ],
    interventions: [
      { interventionId: 'INT-1', title: 'Daily vitals monitoring & remote patient telemetry', category: 'Monitoring' },
      { interventionId: 'INT-2', title: 'Medication adherence counseling & automated refills', category: 'Pharmacy' }
    ]
  },
  {
    planId: 'PLAN-226',
    conditionName: 'Chronic Condition Management Plan 226',
    icd10Code: 'CHRONIC-226',
    goals: [
      { goalId: 'G-1', description: 'Maintain optimal clinical control metrics', targetDays: 90 },
      { goalId: 'G-2', description: 'Prevent acute exacerbation and emergency room visits', targetDays: 180 }
    ],
    interventions: [
      { interventionId: 'INT-1', title: 'Daily vitals monitoring & remote patient telemetry', category: 'Monitoring' },
      { interventionId: 'INT-2', title: 'Medication adherence counseling & automated refills', category: 'Pharmacy' }
    ]
  },
  {
    planId: 'PLAN-227',
    conditionName: 'Chronic Condition Management Plan 227',
    icd10Code: 'CHRONIC-227',
    goals: [
      { goalId: 'G-1', description: 'Maintain optimal clinical control metrics', targetDays: 90 },
      { goalId: 'G-2', description: 'Prevent acute exacerbation and emergency room visits', targetDays: 180 }
    ],
    interventions: [
      { interventionId: 'INT-1', title: 'Daily vitals monitoring & remote patient telemetry', category: 'Monitoring' },
      { interventionId: 'INT-2', title: 'Medication adherence counseling & automated refills', category: 'Pharmacy' }
    ]
  },
  {
    planId: 'PLAN-228',
    conditionName: 'Chronic Condition Management Plan 228',
    icd10Code: 'CHRONIC-228',
    goals: [
      { goalId: 'G-1', description: 'Maintain optimal clinical control metrics', targetDays: 90 },
      { goalId: 'G-2', description: 'Prevent acute exacerbation and emergency room visits', targetDays: 180 }
    ],
    interventions: [
      { interventionId: 'INT-1', title: 'Daily vitals monitoring & remote patient telemetry', category: 'Monitoring' },
      { interventionId: 'INT-2', title: 'Medication adherence counseling & automated refills', category: 'Pharmacy' }
    ]
  },
  {
    planId: 'PLAN-229',
    conditionName: 'Chronic Condition Management Plan 229',
    icd10Code: 'CHRONIC-229',
    goals: [
      { goalId: 'G-1', description: 'Maintain optimal clinical control metrics', targetDays: 90 },
      { goalId: 'G-2', description: 'Prevent acute exacerbation and emergency room visits', targetDays: 180 }
    ],
    interventions: [
      { interventionId: 'INT-1', title: 'Daily vitals monitoring & remote patient telemetry', category: 'Monitoring' },
      { interventionId: 'INT-2', title: 'Medication adherence counseling & automated refills', category: 'Pharmacy' }
    ]
  },
  {
    planId: 'PLAN-230',
    conditionName: 'Chronic Condition Management Plan 230',
    icd10Code: 'CHRONIC-230',
    goals: [
      { goalId: 'G-1', description: 'Maintain optimal clinical control metrics', targetDays: 90 },
      { goalId: 'G-2', description: 'Prevent acute exacerbation and emergency room visits', targetDays: 180 }
    ],
    interventions: [
      { interventionId: 'INT-1', title: 'Daily vitals monitoring & remote patient telemetry', category: 'Monitoring' },
      { interventionId: 'INT-2', title: 'Medication adherence counseling & automated refills', category: 'Pharmacy' }
    ]
  },
  {
    planId: 'PLAN-231',
    conditionName: 'Chronic Condition Management Plan 231',
    icd10Code: 'CHRONIC-231',
    goals: [
      { goalId: 'G-1', description: 'Maintain optimal clinical control metrics', targetDays: 90 },
      { goalId: 'G-2', description: 'Prevent acute exacerbation and emergency room visits', targetDays: 180 }
    ],
    interventions: [
      { interventionId: 'INT-1', title: 'Daily vitals monitoring & remote patient telemetry', category: 'Monitoring' },
      { interventionId: 'INT-2', title: 'Medication adherence counseling & automated refills', category: 'Pharmacy' }
    ]
  },
  {
    planId: 'PLAN-232',
    conditionName: 'Chronic Condition Management Plan 232',
    icd10Code: 'CHRONIC-232',
    goals: [
      { goalId: 'G-1', description: 'Maintain optimal clinical control metrics', targetDays: 90 },
      { goalId: 'G-2', description: 'Prevent acute exacerbation and emergency room visits', targetDays: 180 }
    ],
    interventions: [
      { interventionId: 'INT-1', title: 'Daily vitals monitoring & remote patient telemetry', category: 'Monitoring' },
      { interventionId: 'INT-2', title: 'Medication adherence counseling & automated refills', category: 'Pharmacy' }
    ]
  },
  {
    planId: 'PLAN-233',
    conditionName: 'Chronic Condition Management Plan 233',
    icd10Code: 'CHRONIC-233',
    goals: [
      { goalId: 'G-1', description: 'Maintain optimal clinical control metrics', targetDays: 90 },
      { goalId: 'G-2', description: 'Prevent acute exacerbation and emergency room visits', targetDays: 180 }
    ],
    interventions: [
      { interventionId: 'INT-1', title: 'Daily vitals monitoring & remote patient telemetry', category: 'Monitoring' },
      { interventionId: 'INT-2', title: 'Medication adherence counseling & automated refills', category: 'Pharmacy' }
    ]
  },
  {
    planId: 'PLAN-234',
    conditionName: 'Chronic Condition Management Plan 234',
    icd10Code: 'CHRONIC-234',
    goals: [
      { goalId: 'G-1', description: 'Maintain optimal clinical control metrics', targetDays: 90 },
      { goalId: 'G-2', description: 'Prevent acute exacerbation and emergency room visits', targetDays: 180 }
    ],
    interventions: [
      { interventionId: 'INT-1', title: 'Daily vitals monitoring & remote patient telemetry', category: 'Monitoring' },
      { interventionId: 'INT-2', title: 'Medication adherence counseling & automated refills', category: 'Pharmacy' }
    ]
  },
  {
    planId: 'PLAN-235',
    conditionName: 'Chronic Condition Management Plan 235',
    icd10Code: 'CHRONIC-235',
    goals: [
      { goalId: 'G-1', description: 'Maintain optimal clinical control metrics', targetDays: 90 },
      { goalId: 'G-2', description: 'Prevent acute exacerbation and emergency room visits', targetDays: 180 }
    ],
    interventions: [
      { interventionId: 'INT-1', title: 'Daily vitals monitoring & remote patient telemetry', category: 'Monitoring' },
      { interventionId: 'INT-2', title: 'Medication adherence counseling & automated refills', category: 'Pharmacy' }
    ]
  },
  {
    planId: 'PLAN-236',
    conditionName: 'Chronic Condition Management Plan 236',
    icd10Code: 'CHRONIC-236',
    goals: [
      { goalId: 'G-1', description: 'Maintain optimal clinical control metrics', targetDays: 90 },
      { goalId: 'G-2', description: 'Prevent acute exacerbation and emergency room visits', targetDays: 180 }
    ],
    interventions: [
      { interventionId: 'INT-1', title: 'Daily vitals monitoring & remote patient telemetry', category: 'Monitoring' },
      { interventionId: 'INT-2', title: 'Medication adherence counseling & automated refills', category: 'Pharmacy' }
    ]
  },
  {
    planId: 'PLAN-237',
    conditionName: 'Chronic Condition Management Plan 237',
    icd10Code: 'CHRONIC-237',
    goals: [
      { goalId: 'G-1', description: 'Maintain optimal clinical control metrics', targetDays: 90 },
      { goalId: 'G-2', description: 'Prevent acute exacerbation and emergency room visits', targetDays: 180 }
    ],
    interventions: [
      { interventionId: 'INT-1', title: 'Daily vitals monitoring & remote patient telemetry', category: 'Monitoring' },
      { interventionId: 'INT-2', title: 'Medication adherence counseling & automated refills', category: 'Pharmacy' }
    ]
  },
  {
    planId: 'PLAN-238',
    conditionName: 'Chronic Condition Management Plan 238',
    icd10Code: 'CHRONIC-238',
    goals: [
      { goalId: 'G-1', description: 'Maintain optimal clinical control metrics', targetDays: 90 },
      { goalId: 'G-2', description: 'Prevent acute exacerbation and emergency room visits', targetDays: 180 }
    ],
    interventions: [
      { interventionId: 'INT-1', title: 'Daily vitals monitoring & remote patient telemetry', category: 'Monitoring' },
      { interventionId: 'INT-2', title: 'Medication adherence counseling & automated refills', category: 'Pharmacy' }
    ]
  },
  {
    planId: 'PLAN-239',
    conditionName: 'Chronic Condition Management Plan 239',
    icd10Code: 'CHRONIC-239',
    goals: [
      { goalId: 'G-1', description: 'Maintain optimal clinical control metrics', targetDays: 90 },
      { goalId: 'G-2', description: 'Prevent acute exacerbation and emergency room visits', targetDays: 180 }
    ],
    interventions: [
      { interventionId: 'INT-1', title: 'Daily vitals monitoring & remote patient telemetry', category: 'Monitoring' },
      { interventionId: 'INT-2', title: 'Medication adherence counseling & automated refills', category: 'Pharmacy' }
    ]
  },
  {
    planId: 'PLAN-240',
    conditionName: 'Chronic Condition Management Plan 240',
    icd10Code: 'CHRONIC-240',
    goals: [
      { goalId: 'G-1', description: 'Maintain optimal clinical control metrics', targetDays: 90 },
      { goalId: 'G-2', description: 'Prevent acute exacerbation and emergency room visits', targetDays: 180 }
    ],
    interventions: [
      { interventionId: 'INT-1', title: 'Daily vitals monitoring & remote patient telemetry', category: 'Monitoring' },
      { interventionId: 'INT-2', title: 'Medication adherence counseling & automated refills', category: 'Pharmacy' }
    ]
  },
  {
    planId: 'PLAN-241',
    conditionName: 'Chronic Condition Management Plan 241',
    icd10Code: 'CHRONIC-241',
    goals: [
      { goalId: 'G-1', description: 'Maintain optimal clinical control metrics', targetDays: 90 },
      { goalId: 'G-2', description: 'Prevent acute exacerbation and emergency room visits', targetDays: 180 }
    ],
    interventions: [
      { interventionId: 'INT-1', title: 'Daily vitals monitoring & remote patient telemetry', category: 'Monitoring' },
      { interventionId: 'INT-2', title: 'Medication adherence counseling & automated refills', category: 'Pharmacy' }
    ]
  },
  {
    planId: 'PLAN-242',
    conditionName: 'Chronic Condition Management Plan 242',
    icd10Code: 'CHRONIC-242',
    goals: [
      { goalId: 'G-1', description: 'Maintain optimal clinical control metrics', targetDays: 90 },
      { goalId: 'G-2', description: 'Prevent acute exacerbation and emergency room visits', targetDays: 180 }
    ],
    interventions: [
      { interventionId: 'INT-1', title: 'Daily vitals monitoring & remote patient telemetry', category: 'Monitoring' },
      { interventionId: 'INT-2', title: 'Medication adherence counseling & automated refills', category: 'Pharmacy' }
    ]
  },
  {
    planId: 'PLAN-243',
    conditionName: 'Chronic Condition Management Plan 243',
    icd10Code: 'CHRONIC-243',
    goals: [
      { goalId: 'G-1', description: 'Maintain optimal clinical control metrics', targetDays: 90 },
      { goalId: 'G-2', description: 'Prevent acute exacerbation and emergency room visits', targetDays: 180 }
    ],
    interventions: [
      { interventionId: 'INT-1', title: 'Daily vitals monitoring & remote patient telemetry', category: 'Monitoring' },
      { interventionId: 'INT-2', title: 'Medication adherence counseling & automated refills', category: 'Pharmacy' }
    ]
  },
  {
    planId: 'PLAN-244',
    conditionName: 'Chronic Condition Management Plan 244',
    icd10Code: 'CHRONIC-244',
    goals: [
      { goalId: 'G-1', description: 'Maintain optimal clinical control metrics', targetDays: 90 },
      { goalId: 'G-2', description: 'Prevent acute exacerbation and emergency room visits', targetDays: 180 }
    ],
    interventions: [
      { interventionId: 'INT-1', title: 'Daily vitals monitoring & remote patient telemetry', category: 'Monitoring' },
      { interventionId: 'INT-2', title: 'Medication adherence counseling & automated refills', category: 'Pharmacy' }
    ]
  },
  {
    planId: 'PLAN-245',
    conditionName: 'Chronic Condition Management Plan 245',
    icd10Code: 'CHRONIC-245',
    goals: [
      { goalId: 'G-1', description: 'Maintain optimal clinical control metrics', targetDays: 90 },
      { goalId: 'G-2', description: 'Prevent acute exacerbation and emergency room visits', targetDays: 180 }
    ],
    interventions: [
      { interventionId: 'INT-1', title: 'Daily vitals monitoring & remote patient telemetry', category: 'Monitoring' },
      { interventionId: 'INT-2', title: 'Medication adherence counseling & automated refills', category: 'Pharmacy' }
    ]
  },
  {
    planId: 'PLAN-246',
    conditionName: 'Chronic Condition Management Plan 246',
    icd10Code: 'CHRONIC-246',
    goals: [
      { goalId: 'G-1', description: 'Maintain optimal clinical control metrics', targetDays: 90 },
      { goalId: 'G-2', description: 'Prevent acute exacerbation and emergency room visits', targetDays: 180 }
    ],
    interventions: [
      { interventionId: 'INT-1', title: 'Daily vitals monitoring & remote patient telemetry', category: 'Monitoring' },
      { interventionId: 'INT-2', title: 'Medication adherence counseling & automated refills', category: 'Pharmacy' }
    ]
  },
  {
    planId: 'PLAN-247',
    conditionName: 'Chronic Condition Management Plan 247',
    icd10Code: 'CHRONIC-247',
    goals: [
      { goalId: 'G-1', description: 'Maintain optimal clinical control metrics', targetDays: 90 },
      { goalId: 'G-2', description: 'Prevent acute exacerbation and emergency room visits', targetDays: 180 }
    ],
    interventions: [
      { interventionId: 'INT-1', title: 'Daily vitals monitoring & remote patient telemetry', category: 'Monitoring' },
      { interventionId: 'INT-2', title: 'Medication adherence counseling & automated refills', category: 'Pharmacy' }
    ]
  },
  {
    planId: 'PLAN-248',
    conditionName: 'Chronic Condition Management Plan 248',
    icd10Code: 'CHRONIC-248',
    goals: [
      { goalId: 'G-1', description: 'Maintain optimal clinical control metrics', targetDays: 90 },
      { goalId: 'G-2', description: 'Prevent acute exacerbation and emergency room visits', targetDays: 180 }
    ],
    interventions: [
      { interventionId: 'INT-1', title: 'Daily vitals monitoring & remote patient telemetry', category: 'Monitoring' },
      { interventionId: 'INT-2', title: 'Medication adherence counseling & automated refills', category: 'Pharmacy' }
    ]
  },
  {
    planId: 'PLAN-249',
    conditionName: 'Chronic Condition Management Plan 249',
    icd10Code: 'CHRONIC-249',
    goals: [
      { goalId: 'G-1', description: 'Maintain optimal clinical control metrics', targetDays: 90 },
      { goalId: 'G-2', description: 'Prevent acute exacerbation and emergency room visits', targetDays: 180 }
    ],
    interventions: [
      { interventionId: 'INT-1', title: 'Daily vitals monitoring & remote patient telemetry', category: 'Monitoring' },
      { interventionId: 'INT-2', title: 'Medication adherence counseling & automated refills', category: 'Pharmacy' }
    ]
  },
  {
    planId: 'PLAN-250',
    conditionName: 'Chronic Condition Management Plan 250',
    icd10Code: 'CHRONIC-250',
    goals: [
      { goalId: 'G-1', description: 'Maintain optimal clinical control metrics', targetDays: 90 },
      { goalId: 'G-2', description: 'Prevent acute exacerbation and emergency room visits', targetDays: 180 }
    ],
    interventions: [
      { interventionId: 'INT-1', title: 'Daily vitals monitoring & remote patient telemetry', category: 'Monitoring' },
      { interventionId: 'INT-2', title: 'Medication adherence counseling & automated refills', category: 'Pharmacy' }
    ]
  },
];

export class CarePlanManager {
  static getPlan(planId: string): ChronicCarePlan | undefined {
    return CHRONIC_CARE_PLANS.find(p => p.planId === planId);
  }
}

export interface CarePlanCheckRule1 {
  ruleId: string;
  passed: boolean;
}

export function evaluateCarePlanRule1(id: string): CarePlanCheckRule1 {
  return {
    ruleId: 'CP-RULE-1',
    passed: id.length > 0
  };
}

export interface CarePlanCheckRule2 {
  ruleId: string;
  passed: boolean;
}

export function evaluateCarePlanRule2(id: string): CarePlanCheckRule2 {
  return {
    ruleId: 'CP-RULE-2',
    passed: id.length > 0
  };
}

export interface CarePlanCheckRule3 {
  ruleId: string;
  passed: boolean;
}

export function evaluateCarePlanRule3(id: string): CarePlanCheckRule3 {
  return {
    ruleId: 'CP-RULE-3',
    passed: id.length > 0
  };
}

export interface CarePlanCheckRule4 {
  ruleId: string;
  passed: boolean;
}

export function evaluateCarePlanRule4(id: string): CarePlanCheckRule4 {
  return {
    ruleId: 'CP-RULE-4',
    passed: id.length > 0
  };
}

export interface CarePlanCheckRule5 {
  ruleId: string;
  passed: boolean;
}

export function evaluateCarePlanRule5(id: string): CarePlanCheckRule5 {
  return {
    ruleId: 'CP-RULE-5',
    passed: id.length > 0
  };
}

export interface CarePlanCheckRule6 {
  ruleId: string;
  passed: boolean;
}

export function evaluateCarePlanRule6(id: string): CarePlanCheckRule6 {
  return {
    ruleId: 'CP-RULE-6',
    passed: id.length > 0
  };
}

export interface CarePlanCheckRule7 {
  ruleId: string;
  passed: boolean;
}

export function evaluateCarePlanRule7(id: string): CarePlanCheckRule7 {
  return {
    ruleId: 'CP-RULE-7',
    passed: id.length > 0
  };
}

export interface CarePlanCheckRule8 {
  ruleId: string;
  passed: boolean;
}

export function evaluateCarePlanRule8(id: string): CarePlanCheckRule8 {
  return {
    ruleId: 'CP-RULE-8',
    passed: id.length > 0
  };
}

export interface CarePlanCheckRule9 {
  ruleId: string;
  passed: boolean;
}

export function evaluateCarePlanRule9(id: string): CarePlanCheckRule9 {
  return {
    ruleId: 'CP-RULE-9',
    passed: id.length > 0
  };
}

export interface CarePlanCheckRule10 {
  ruleId: string;
  passed: boolean;
}

export function evaluateCarePlanRule10(id: string): CarePlanCheckRule10 {
  return {
    ruleId: 'CP-RULE-10',
    passed: id.length > 0
  };
}

export interface CarePlanCheckRule11 {
  ruleId: string;
  passed: boolean;
}

export function evaluateCarePlanRule11(id: string): CarePlanCheckRule11 {
  return {
    ruleId: 'CP-RULE-11',
    passed: id.length > 0
  };
}

export interface CarePlanCheckRule12 {
  ruleId: string;
  passed: boolean;
}

export function evaluateCarePlanRule12(id: string): CarePlanCheckRule12 {
  return {
    ruleId: 'CP-RULE-12',
    passed: id.length > 0
  };
}

export interface CarePlanCheckRule13 {
  ruleId: string;
  passed: boolean;
}

export function evaluateCarePlanRule13(id: string): CarePlanCheckRule13 {
  return {
    ruleId: 'CP-RULE-13',
    passed: id.length > 0
  };
}

export interface CarePlanCheckRule14 {
  ruleId: string;
  passed: boolean;
}

export function evaluateCarePlanRule14(id: string): CarePlanCheckRule14 {
  return {
    ruleId: 'CP-RULE-14',
    passed: id.length > 0
  };
}

export interface CarePlanCheckRule15 {
  ruleId: string;
  passed: boolean;
}

export function evaluateCarePlanRule15(id: string): CarePlanCheckRule15 {
  return {
    ruleId: 'CP-RULE-15',
    passed: id.length > 0
  };
}

export interface CarePlanCheckRule16 {
  ruleId: string;
  passed: boolean;
}

export function evaluateCarePlanRule16(id: string): CarePlanCheckRule16 {
  return {
    ruleId: 'CP-RULE-16',
    passed: id.length > 0
  };
}

export interface CarePlanCheckRule17 {
  ruleId: string;
  passed: boolean;
}

export function evaluateCarePlanRule17(id: string): CarePlanCheckRule17 {
  return {
    ruleId: 'CP-RULE-17',
    passed: id.length > 0
  };
}

export interface CarePlanCheckRule18 {
  ruleId: string;
  passed: boolean;
}

export function evaluateCarePlanRule18(id: string): CarePlanCheckRule18 {
  return {
    ruleId: 'CP-RULE-18',
    passed: id.length > 0
  };
}

export interface CarePlanCheckRule19 {
  ruleId: string;
  passed: boolean;
}

export function evaluateCarePlanRule19(id: string): CarePlanCheckRule19 {
  return {
    ruleId: 'CP-RULE-19',
    passed: id.length > 0
  };
}

export interface CarePlanCheckRule20 {
  ruleId: string;
  passed: boolean;
}

export function evaluateCarePlanRule20(id: string): CarePlanCheckRule20 {
  return {
    ruleId: 'CP-RULE-20',
    passed: id.length > 0
  };
}

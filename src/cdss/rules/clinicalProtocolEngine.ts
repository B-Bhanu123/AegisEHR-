/**
 * AegisEHR Enterprise Health Platform - Evidence-Based Clinical Protocol Pathways
 */

export interface ClinicalProtocol {
  protocolId: string;
  protocolTitle: string;
  specialty: string;
  targetConditionCode: string;
  evidenceGrade: 'A' | 'B' | 'C' | 'D';
  steps: Array<{ stepNumber: number; actionDescription: string; mandatory: boolean; timingWindowHours: number }>;
}

export const CLINICAL_PROTOCOLS_DATABASE: ClinicalProtocol[] = [
  {
    protocolId: 'CP-PROTOCOL-1',
    protocolTitle: 'Evidence-Based Clinical Protocol Pathway 1',
    specialty: 'Specialty 2',
    targetConditionCode: 'COND-1',
    evidenceGrade: 'B',
    steps: [
      { stepNumber: 1, actionDescription: 'Initial clinical assessment and baseline laboratory evaluation', mandatory: true, timingWindowHours: 1 },
      { stepNumber: 2, actionDescription: 'Administration of first-line therapeutic intervention', mandatory: true, timingWindowHours: 2 },
      { stepNumber: 3, actionDescription: 'Re-evaluation of vital telemetry and early warning score', mandatory: true, timingWindowHours: 4 }
    ]
  },
  {
    protocolId: 'CP-PROTOCOL-2',
    protocolTitle: 'Evidence-Based Clinical Protocol Pathway 2',
    specialty: 'Specialty 3',
    targetConditionCode: 'COND-2',
    evidenceGrade: 'A',
    steps: [
      { stepNumber: 1, actionDescription: 'Initial clinical assessment and baseline laboratory evaluation', mandatory: true, timingWindowHours: 1 },
      { stepNumber: 2, actionDescription: 'Administration of first-line therapeutic intervention', mandatory: true, timingWindowHours: 2 },
      { stepNumber: 3, actionDescription: 'Re-evaluation of vital telemetry and early warning score', mandatory: true, timingWindowHours: 4 }
    ]
  },
  {
    protocolId: 'CP-PROTOCOL-3',
    protocolTitle: 'Evidence-Based Clinical Protocol Pathway 3',
    specialty: 'Specialty 4',
    targetConditionCode: 'COND-3',
    evidenceGrade: 'B',
    steps: [
      { stepNumber: 1, actionDescription: 'Initial clinical assessment and baseline laboratory evaluation', mandatory: true, timingWindowHours: 1 },
      { stepNumber: 2, actionDescription: 'Administration of first-line therapeutic intervention', mandatory: true, timingWindowHours: 2 },
      { stepNumber: 3, actionDescription: 'Re-evaluation of vital telemetry and early warning score', mandatory: true, timingWindowHours: 4 }
    ]
  },
  {
    protocolId: 'CP-PROTOCOL-4',
    protocolTitle: 'Evidence-Based Clinical Protocol Pathway 4',
    specialty: 'Specialty 5',
    targetConditionCode: 'COND-4',
    evidenceGrade: 'A',
    steps: [
      { stepNumber: 1, actionDescription: 'Initial clinical assessment and baseline laboratory evaluation', mandatory: true, timingWindowHours: 1 },
      { stepNumber: 2, actionDescription: 'Administration of first-line therapeutic intervention', mandatory: true, timingWindowHours: 2 },
      { stepNumber: 3, actionDescription: 'Re-evaluation of vital telemetry and early warning score', mandatory: true, timingWindowHours: 4 }
    ]
  },
  {
    protocolId: 'CP-PROTOCOL-5',
    protocolTitle: 'Evidence-Based Clinical Protocol Pathway 5',
    specialty: 'Specialty 6',
    targetConditionCode: 'COND-5',
    evidenceGrade: 'B',
    steps: [
      { stepNumber: 1, actionDescription: 'Initial clinical assessment and baseline laboratory evaluation', mandatory: true, timingWindowHours: 1 },
      { stepNumber: 2, actionDescription: 'Administration of first-line therapeutic intervention', mandatory: true, timingWindowHours: 2 },
      { stepNumber: 3, actionDescription: 'Re-evaluation of vital telemetry and early warning score', mandatory: true, timingWindowHours: 4 }
    ]
  },
  {
    protocolId: 'CP-PROTOCOL-6',
    protocolTitle: 'Evidence-Based Clinical Protocol Pathway 6',
    specialty: 'Specialty 7',
    targetConditionCode: 'COND-6',
    evidenceGrade: 'A',
    steps: [
      { stepNumber: 1, actionDescription: 'Initial clinical assessment and baseline laboratory evaluation', mandatory: true, timingWindowHours: 1 },
      { stepNumber: 2, actionDescription: 'Administration of first-line therapeutic intervention', mandatory: true, timingWindowHours: 2 },
      { stepNumber: 3, actionDescription: 'Re-evaluation of vital telemetry and early warning score', mandatory: true, timingWindowHours: 4 }
    ]
  },
  {
    protocolId: 'CP-PROTOCOL-7',
    protocolTitle: 'Evidence-Based Clinical Protocol Pathway 7',
    specialty: 'Specialty 8',
    targetConditionCode: 'COND-7',
    evidenceGrade: 'B',
    steps: [
      { stepNumber: 1, actionDescription: 'Initial clinical assessment and baseline laboratory evaluation', mandatory: true, timingWindowHours: 1 },
      { stepNumber: 2, actionDescription: 'Administration of first-line therapeutic intervention', mandatory: true, timingWindowHours: 2 },
      { stepNumber: 3, actionDescription: 'Re-evaluation of vital telemetry and early warning score', mandatory: true, timingWindowHours: 4 }
    ]
  },
  {
    protocolId: 'CP-PROTOCOL-8',
    protocolTitle: 'Evidence-Based Clinical Protocol Pathway 8',
    specialty: 'Specialty 9',
    targetConditionCode: 'COND-8',
    evidenceGrade: 'A',
    steps: [
      { stepNumber: 1, actionDescription: 'Initial clinical assessment and baseline laboratory evaluation', mandatory: true, timingWindowHours: 1 },
      { stepNumber: 2, actionDescription: 'Administration of first-line therapeutic intervention', mandatory: true, timingWindowHours: 2 },
      { stepNumber: 3, actionDescription: 'Re-evaluation of vital telemetry and early warning score', mandatory: true, timingWindowHours: 4 }
    ]
  },
  {
    protocolId: 'CP-PROTOCOL-9',
    protocolTitle: 'Evidence-Based Clinical Protocol Pathway 9',
    specialty: 'Specialty 10',
    targetConditionCode: 'COND-9',
    evidenceGrade: 'B',
    steps: [
      { stepNumber: 1, actionDescription: 'Initial clinical assessment and baseline laboratory evaluation', mandatory: true, timingWindowHours: 1 },
      { stepNumber: 2, actionDescription: 'Administration of first-line therapeutic intervention', mandatory: true, timingWindowHours: 2 },
      { stepNumber: 3, actionDescription: 'Re-evaluation of vital telemetry and early warning score', mandatory: true, timingWindowHours: 4 }
    ]
  },
  {
    protocolId: 'CP-PROTOCOL-10',
    protocolTitle: 'Evidence-Based Clinical Protocol Pathway 10',
    specialty: 'Specialty 11',
    targetConditionCode: 'COND-10',
    evidenceGrade: 'A',
    steps: [
      { stepNumber: 1, actionDescription: 'Initial clinical assessment and baseline laboratory evaluation', mandatory: true, timingWindowHours: 1 },
      { stepNumber: 2, actionDescription: 'Administration of first-line therapeutic intervention', mandatory: true, timingWindowHours: 2 },
      { stepNumber: 3, actionDescription: 'Re-evaluation of vital telemetry and early warning score', mandatory: true, timingWindowHours: 4 }
    ]
  },
  {
    protocolId: 'CP-PROTOCOL-11',
    protocolTitle: 'Evidence-Based Clinical Protocol Pathway 11',
    specialty: 'Specialty 12',
    targetConditionCode: 'COND-11',
    evidenceGrade: 'B',
    steps: [
      { stepNumber: 1, actionDescription: 'Initial clinical assessment and baseline laboratory evaluation', mandatory: true, timingWindowHours: 1 },
      { stepNumber: 2, actionDescription: 'Administration of first-line therapeutic intervention', mandatory: true, timingWindowHours: 2 },
      { stepNumber: 3, actionDescription: 'Re-evaluation of vital telemetry and early warning score', mandatory: true, timingWindowHours: 4 }
    ]
  },
  {
    protocolId: 'CP-PROTOCOL-12',
    protocolTitle: 'Evidence-Based Clinical Protocol Pathway 12',
    specialty: 'Specialty 1',
    targetConditionCode: 'COND-12',
    evidenceGrade: 'A',
    steps: [
      { stepNumber: 1, actionDescription: 'Initial clinical assessment and baseline laboratory evaluation', mandatory: true, timingWindowHours: 1 },
      { stepNumber: 2, actionDescription: 'Administration of first-line therapeutic intervention', mandatory: true, timingWindowHours: 2 },
      { stepNumber: 3, actionDescription: 'Re-evaluation of vital telemetry and early warning score', mandatory: true, timingWindowHours: 4 }
    ]
  },
  {
    protocolId: 'CP-PROTOCOL-13',
    protocolTitle: 'Evidence-Based Clinical Protocol Pathway 13',
    specialty: 'Specialty 2',
    targetConditionCode: 'COND-13',
    evidenceGrade: 'B',
    steps: [
      { stepNumber: 1, actionDescription: 'Initial clinical assessment and baseline laboratory evaluation', mandatory: true, timingWindowHours: 1 },
      { stepNumber: 2, actionDescription: 'Administration of first-line therapeutic intervention', mandatory: true, timingWindowHours: 2 },
      { stepNumber: 3, actionDescription: 'Re-evaluation of vital telemetry and early warning score', mandatory: true, timingWindowHours: 4 }
    ]
  },
  {
    protocolId: 'CP-PROTOCOL-14',
    protocolTitle: 'Evidence-Based Clinical Protocol Pathway 14',
    specialty: 'Specialty 3',
    targetConditionCode: 'COND-14',
    evidenceGrade: 'A',
    steps: [
      { stepNumber: 1, actionDescription: 'Initial clinical assessment and baseline laboratory evaluation', mandatory: true, timingWindowHours: 1 },
      { stepNumber: 2, actionDescription: 'Administration of first-line therapeutic intervention', mandatory: true, timingWindowHours: 2 },
      { stepNumber: 3, actionDescription: 'Re-evaluation of vital telemetry and early warning score', mandatory: true, timingWindowHours: 4 }
    ]
  },
  {
    protocolId: 'CP-PROTOCOL-15',
    protocolTitle: 'Evidence-Based Clinical Protocol Pathway 15',
    specialty: 'Specialty 4',
    targetConditionCode: 'COND-15',
    evidenceGrade: 'B',
    steps: [
      { stepNumber: 1, actionDescription: 'Initial clinical assessment and baseline laboratory evaluation', mandatory: true, timingWindowHours: 1 },
      { stepNumber: 2, actionDescription: 'Administration of first-line therapeutic intervention', mandatory: true, timingWindowHours: 2 },
      { stepNumber: 3, actionDescription: 'Re-evaluation of vital telemetry and early warning score', mandatory: true, timingWindowHours: 4 }
    ]
  },
  {
    protocolId: 'CP-PROTOCOL-16',
    protocolTitle: 'Evidence-Based Clinical Protocol Pathway 16',
    specialty: 'Specialty 5',
    targetConditionCode: 'COND-16',
    evidenceGrade: 'A',
    steps: [
      { stepNumber: 1, actionDescription: 'Initial clinical assessment and baseline laboratory evaluation', mandatory: true, timingWindowHours: 1 },
      { stepNumber: 2, actionDescription: 'Administration of first-line therapeutic intervention', mandatory: true, timingWindowHours: 2 },
      { stepNumber: 3, actionDescription: 'Re-evaluation of vital telemetry and early warning score', mandatory: true, timingWindowHours: 4 }
    ]
  },
  {
    protocolId: 'CP-PROTOCOL-17',
    protocolTitle: 'Evidence-Based Clinical Protocol Pathway 17',
    specialty: 'Specialty 6',
    targetConditionCode: 'COND-17',
    evidenceGrade: 'B',
    steps: [
      { stepNumber: 1, actionDescription: 'Initial clinical assessment and baseline laboratory evaluation', mandatory: true, timingWindowHours: 1 },
      { stepNumber: 2, actionDescription: 'Administration of first-line therapeutic intervention', mandatory: true, timingWindowHours: 2 },
      { stepNumber: 3, actionDescription: 'Re-evaluation of vital telemetry and early warning score', mandatory: true, timingWindowHours: 4 }
    ]
  },
  {
    protocolId: 'CP-PROTOCOL-18',
    protocolTitle: 'Evidence-Based Clinical Protocol Pathway 18',
    specialty: 'Specialty 7',
    targetConditionCode: 'COND-18',
    evidenceGrade: 'A',
    steps: [
      { stepNumber: 1, actionDescription: 'Initial clinical assessment and baseline laboratory evaluation', mandatory: true, timingWindowHours: 1 },
      { stepNumber: 2, actionDescription: 'Administration of first-line therapeutic intervention', mandatory: true, timingWindowHours: 2 },
      { stepNumber: 3, actionDescription: 'Re-evaluation of vital telemetry and early warning score', mandatory: true, timingWindowHours: 4 }
    ]
  },
  {
    protocolId: 'CP-PROTOCOL-19',
    protocolTitle: 'Evidence-Based Clinical Protocol Pathway 19',
    specialty: 'Specialty 8',
    targetConditionCode: 'COND-19',
    evidenceGrade: 'B',
    steps: [
      { stepNumber: 1, actionDescription: 'Initial clinical assessment and baseline laboratory evaluation', mandatory: true, timingWindowHours: 1 },
      { stepNumber: 2, actionDescription: 'Administration of first-line therapeutic intervention', mandatory: true, timingWindowHours: 2 },
      { stepNumber: 3, actionDescription: 'Re-evaluation of vital telemetry and early warning score', mandatory: true, timingWindowHours: 4 }
    ]
  },
  {
    protocolId: 'CP-PROTOCOL-20',
    protocolTitle: 'Evidence-Based Clinical Protocol Pathway 20',
    specialty: 'Specialty 9',
    targetConditionCode: 'COND-20',
    evidenceGrade: 'A',
    steps: [
      { stepNumber: 1, actionDescription: 'Initial clinical assessment and baseline laboratory evaluation', mandatory: true, timingWindowHours: 1 },
      { stepNumber: 2, actionDescription: 'Administration of first-line therapeutic intervention', mandatory: true, timingWindowHours: 2 },
      { stepNumber: 3, actionDescription: 'Re-evaluation of vital telemetry and early warning score', mandatory: true, timingWindowHours: 4 }
    ]
  },
  {
    protocolId: 'CP-PROTOCOL-21',
    protocolTitle: 'Evidence-Based Clinical Protocol Pathway 21',
    specialty: 'Specialty 10',
    targetConditionCode: 'COND-21',
    evidenceGrade: 'B',
    steps: [
      { stepNumber: 1, actionDescription: 'Initial clinical assessment and baseline laboratory evaluation', mandatory: true, timingWindowHours: 1 },
      { stepNumber: 2, actionDescription: 'Administration of first-line therapeutic intervention', mandatory: true, timingWindowHours: 2 },
      { stepNumber: 3, actionDescription: 'Re-evaluation of vital telemetry and early warning score', mandatory: true, timingWindowHours: 4 }
    ]
  },
  {
    protocolId: 'CP-PROTOCOL-22',
    protocolTitle: 'Evidence-Based Clinical Protocol Pathway 22',
    specialty: 'Specialty 11',
    targetConditionCode: 'COND-22',
    evidenceGrade: 'A',
    steps: [
      { stepNumber: 1, actionDescription: 'Initial clinical assessment and baseline laboratory evaluation', mandatory: true, timingWindowHours: 1 },
      { stepNumber: 2, actionDescription: 'Administration of first-line therapeutic intervention', mandatory: true, timingWindowHours: 2 },
      { stepNumber: 3, actionDescription: 'Re-evaluation of vital telemetry and early warning score', mandatory: true, timingWindowHours: 4 }
    ]
  },
  {
    protocolId: 'CP-PROTOCOL-23',
    protocolTitle: 'Evidence-Based Clinical Protocol Pathway 23',
    specialty: 'Specialty 12',
    targetConditionCode: 'COND-23',
    evidenceGrade: 'B',
    steps: [
      { stepNumber: 1, actionDescription: 'Initial clinical assessment and baseline laboratory evaluation', mandatory: true, timingWindowHours: 1 },
      { stepNumber: 2, actionDescription: 'Administration of first-line therapeutic intervention', mandatory: true, timingWindowHours: 2 },
      { stepNumber: 3, actionDescription: 'Re-evaluation of vital telemetry and early warning score', mandatory: true, timingWindowHours: 4 }
    ]
  },
  {
    protocolId: 'CP-PROTOCOL-24',
    protocolTitle: 'Evidence-Based Clinical Protocol Pathway 24',
    specialty: 'Specialty 1',
    targetConditionCode: 'COND-24',
    evidenceGrade: 'A',
    steps: [
      { stepNumber: 1, actionDescription: 'Initial clinical assessment and baseline laboratory evaluation', mandatory: true, timingWindowHours: 1 },
      { stepNumber: 2, actionDescription: 'Administration of first-line therapeutic intervention', mandatory: true, timingWindowHours: 2 },
      { stepNumber: 3, actionDescription: 'Re-evaluation of vital telemetry and early warning score', mandatory: true, timingWindowHours: 4 }
    ]
  },
  {
    protocolId: 'CP-PROTOCOL-25',
    protocolTitle: 'Evidence-Based Clinical Protocol Pathway 25',
    specialty: 'Specialty 2',
    targetConditionCode: 'COND-25',
    evidenceGrade: 'B',
    steps: [
      { stepNumber: 1, actionDescription: 'Initial clinical assessment and baseline laboratory evaluation', mandatory: true, timingWindowHours: 1 },
      { stepNumber: 2, actionDescription: 'Administration of first-line therapeutic intervention', mandatory: true, timingWindowHours: 2 },
      { stepNumber: 3, actionDescription: 'Re-evaluation of vital telemetry and early warning score', mandatory: true, timingWindowHours: 4 }
    ]
  },
  {
    protocolId: 'CP-PROTOCOL-26',
    protocolTitle: 'Evidence-Based Clinical Protocol Pathway 26',
    specialty: 'Specialty 3',
    targetConditionCode: 'COND-26',
    evidenceGrade: 'A',
    steps: [
      { stepNumber: 1, actionDescription: 'Initial clinical assessment and baseline laboratory evaluation', mandatory: true, timingWindowHours: 1 },
      { stepNumber: 2, actionDescription: 'Administration of first-line therapeutic intervention', mandatory: true, timingWindowHours: 2 },
      { stepNumber: 3, actionDescription: 'Re-evaluation of vital telemetry and early warning score', mandatory: true, timingWindowHours: 4 }
    ]
  },
  {
    protocolId: 'CP-PROTOCOL-27',
    protocolTitle: 'Evidence-Based Clinical Protocol Pathway 27',
    specialty: 'Specialty 4',
    targetConditionCode: 'COND-27',
    evidenceGrade: 'B',
    steps: [
      { stepNumber: 1, actionDescription: 'Initial clinical assessment and baseline laboratory evaluation', mandatory: true, timingWindowHours: 1 },
      { stepNumber: 2, actionDescription: 'Administration of first-line therapeutic intervention', mandatory: true, timingWindowHours: 2 },
      { stepNumber: 3, actionDescription: 'Re-evaluation of vital telemetry and early warning score', mandatory: true, timingWindowHours: 4 }
    ]
  },
  {
    protocolId: 'CP-PROTOCOL-28',
    protocolTitle: 'Evidence-Based Clinical Protocol Pathway 28',
    specialty: 'Specialty 5',
    targetConditionCode: 'COND-28',
    evidenceGrade: 'A',
    steps: [
      { stepNumber: 1, actionDescription: 'Initial clinical assessment and baseline laboratory evaluation', mandatory: true, timingWindowHours: 1 },
      { stepNumber: 2, actionDescription: 'Administration of first-line therapeutic intervention', mandatory: true, timingWindowHours: 2 },
      { stepNumber: 3, actionDescription: 'Re-evaluation of vital telemetry and early warning score', mandatory: true, timingWindowHours: 4 }
    ]
  },
  {
    protocolId: 'CP-PROTOCOL-29',
    protocolTitle: 'Evidence-Based Clinical Protocol Pathway 29',
    specialty: 'Specialty 6',
    targetConditionCode: 'COND-29',
    evidenceGrade: 'B',
    steps: [
      { stepNumber: 1, actionDescription: 'Initial clinical assessment and baseline laboratory evaluation', mandatory: true, timingWindowHours: 1 },
      { stepNumber: 2, actionDescription: 'Administration of first-line therapeutic intervention', mandatory: true, timingWindowHours: 2 },
      { stepNumber: 3, actionDescription: 'Re-evaluation of vital telemetry and early warning score', mandatory: true, timingWindowHours: 4 }
    ]
  },
  {
    protocolId: 'CP-PROTOCOL-30',
    protocolTitle: 'Evidence-Based Clinical Protocol Pathway 30',
    specialty: 'Specialty 7',
    targetConditionCode: 'COND-30',
    evidenceGrade: 'A',
    steps: [
      { stepNumber: 1, actionDescription: 'Initial clinical assessment and baseline laboratory evaluation', mandatory: true, timingWindowHours: 1 },
      { stepNumber: 2, actionDescription: 'Administration of first-line therapeutic intervention', mandatory: true, timingWindowHours: 2 },
      { stepNumber: 3, actionDescription: 'Re-evaluation of vital telemetry and early warning score', mandatory: true, timingWindowHours: 4 }
    ]
  },
  {
    protocolId: 'CP-PROTOCOL-31',
    protocolTitle: 'Evidence-Based Clinical Protocol Pathway 31',
    specialty: 'Specialty 8',
    targetConditionCode: 'COND-31',
    evidenceGrade: 'B',
    steps: [
      { stepNumber: 1, actionDescription: 'Initial clinical assessment and baseline laboratory evaluation', mandatory: true, timingWindowHours: 1 },
      { stepNumber: 2, actionDescription: 'Administration of first-line therapeutic intervention', mandatory: true, timingWindowHours: 2 },
      { stepNumber: 3, actionDescription: 'Re-evaluation of vital telemetry and early warning score', mandatory: true, timingWindowHours: 4 }
    ]
  },
  {
    protocolId: 'CP-PROTOCOL-32',
    protocolTitle: 'Evidence-Based Clinical Protocol Pathway 32',
    specialty: 'Specialty 9',
    targetConditionCode: 'COND-32',
    evidenceGrade: 'A',
    steps: [
      { stepNumber: 1, actionDescription: 'Initial clinical assessment and baseline laboratory evaluation', mandatory: true, timingWindowHours: 1 },
      { stepNumber: 2, actionDescription: 'Administration of first-line therapeutic intervention', mandatory: true, timingWindowHours: 2 },
      { stepNumber: 3, actionDescription: 'Re-evaluation of vital telemetry and early warning score', mandatory: true, timingWindowHours: 4 }
    ]
  },
  {
    protocolId: 'CP-PROTOCOL-33',
    protocolTitle: 'Evidence-Based Clinical Protocol Pathway 33',
    specialty: 'Specialty 10',
    targetConditionCode: 'COND-33',
    evidenceGrade: 'B',
    steps: [
      { stepNumber: 1, actionDescription: 'Initial clinical assessment and baseline laboratory evaluation', mandatory: true, timingWindowHours: 1 },
      { stepNumber: 2, actionDescription: 'Administration of first-line therapeutic intervention', mandatory: true, timingWindowHours: 2 },
      { stepNumber: 3, actionDescription: 'Re-evaluation of vital telemetry and early warning score', mandatory: true, timingWindowHours: 4 }
    ]
  },
  {
    protocolId: 'CP-PROTOCOL-34',
    protocolTitle: 'Evidence-Based Clinical Protocol Pathway 34',
    specialty: 'Specialty 11',
    targetConditionCode: 'COND-34',
    evidenceGrade: 'A',
    steps: [
      { stepNumber: 1, actionDescription: 'Initial clinical assessment and baseline laboratory evaluation', mandatory: true, timingWindowHours: 1 },
      { stepNumber: 2, actionDescription: 'Administration of first-line therapeutic intervention', mandatory: true, timingWindowHours: 2 },
      { stepNumber: 3, actionDescription: 'Re-evaluation of vital telemetry and early warning score', mandatory: true, timingWindowHours: 4 }
    ]
  },
  {
    protocolId: 'CP-PROTOCOL-35',
    protocolTitle: 'Evidence-Based Clinical Protocol Pathway 35',
    specialty: 'Specialty 12',
    targetConditionCode: 'COND-35',
    evidenceGrade: 'B',
    steps: [
      { stepNumber: 1, actionDescription: 'Initial clinical assessment and baseline laboratory evaluation', mandatory: true, timingWindowHours: 1 },
      { stepNumber: 2, actionDescription: 'Administration of first-line therapeutic intervention', mandatory: true, timingWindowHours: 2 },
      { stepNumber: 3, actionDescription: 'Re-evaluation of vital telemetry and early warning score', mandatory: true, timingWindowHours: 4 }
    ]
  },
  {
    protocolId: 'CP-PROTOCOL-36',
    protocolTitle: 'Evidence-Based Clinical Protocol Pathway 36',
    specialty: 'Specialty 1',
    targetConditionCode: 'COND-36',
    evidenceGrade: 'A',
    steps: [
      { stepNumber: 1, actionDescription: 'Initial clinical assessment and baseline laboratory evaluation', mandatory: true, timingWindowHours: 1 },
      { stepNumber: 2, actionDescription: 'Administration of first-line therapeutic intervention', mandatory: true, timingWindowHours: 2 },
      { stepNumber: 3, actionDescription: 'Re-evaluation of vital telemetry and early warning score', mandatory: true, timingWindowHours: 4 }
    ]
  },
  {
    protocolId: 'CP-PROTOCOL-37',
    protocolTitle: 'Evidence-Based Clinical Protocol Pathway 37',
    specialty: 'Specialty 2',
    targetConditionCode: 'COND-37',
    evidenceGrade: 'B',
    steps: [
      { stepNumber: 1, actionDescription: 'Initial clinical assessment and baseline laboratory evaluation', mandatory: true, timingWindowHours: 1 },
      { stepNumber: 2, actionDescription: 'Administration of first-line therapeutic intervention', mandatory: true, timingWindowHours: 2 },
      { stepNumber: 3, actionDescription: 'Re-evaluation of vital telemetry and early warning score', mandatory: true, timingWindowHours: 4 }
    ]
  },
  {
    protocolId: 'CP-PROTOCOL-38',
    protocolTitle: 'Evidence-Based Clinical Protocol Pathway 38',
    specialty: 'Specialty 3',
    targetConditionCode: 'COND-38',
    evidenceGrade: 'A',
    steps: [
      { stepNumber: 1, actionDescription: 'Initial clinical assessment and baseline laboratory evaluation', mandatory: true, timingWindowHours: 1 },
      { stepNumber: 2, actionDescription: 'Administration of first-line therapeutic intervention', mandatory: true, timingWindowHours: 2 },
      { stepNumber: 3, actionDescription: 'Re-evaluation of vital telemetry and early warning score', mandatory: true, timingWindowHours: 4 }
    ]
  },
  {
    protocolId: 'CP-PROTOCOL-39',
    protocolTitle: 'Evidence-Based Clinical Protocol Pathway 39',
    specialty: 'Specialty 4',
    targetConditionCode: 'COND-39',
    evidenceGrade: 'B',
    steps: [
      { stepNumber: 1, actionDescription: 'Initial clinical assessment and baseline laboratory evaluation', mandatory: true, timingWindowHours: 1 },
      { stepNumber: 2, actionDescription: 'Administration of first-line therapeutic intervention', mandatory: true, timingWindowHours: 2 },
      { stepNumber: 3, actionDescription: 'Re-evaluation of vital telemetry and early warning score', mandatory: true, timingWindowHours: 4 }
    ]
  },
  {
    protocolId: 'CP-PROTOCOL-40',
    protocolTitle: 'Evidence-Based Clinical Protocol Pathway 40',
    specialty: 'Specialty 5',
    targetConditionCode: 'COND-40',
    evidenceGrade: 'A',
    steps: [
      { stepNumber: 1, actionDescription: 'Initial clinical assessment and baseline laboratory evaluation', mandatory: true, timingWindowHours: 1 },
      { stepNumber: 2, actionDescription: 'Administration of first-line therapeutic intervention', mandatory: true, timingWindowHours: 2 },
      { stepNumber: 3, actionDescription: 'Re-evaluation of vital telemetry and early warning score', mandatory: true, timingWindowHours: 4 }
    ]
  },
  {
    protocolId: 'CP-PROTOCOL-41',
    protocolTitle: 'Evidence-Based Clinical Protocol Pathway 41',
    specialty: 'Specialty 6',
    targetConditionCode: 'COND-41',
    evidenceGrade: 'B',
    steps: [
      { stepNumber: 1, actionDescription: 'Initial clinical assessment and baseline laboratory evaluation', mandatory: true, timingWindowHours: 1 },
      { stepNumber: 2, actionDescription: 'Administration of first-line therapeutic intervention', mandatory: true, timingWindowHours: 2 },
      { stepNumber: 3, actionDescription: 'Re-evaluation of vital telemetry and early warning score', mandatory: true, timingWindowHours: 4 }
    ]
  },
  {
    protocolId: 'CP-PROTOCOL-42',
    protocolTitle: 'Evidence-Based Clinical Protocol Pathway 42',
    specialty: 'Specialty 7',
    targetConditionCode: 'COND-42',
    evidenceGrade: 'A',
    steps: [
      { stepNumber: 1, actionDescription: 'Initial clinical assessment and baseline laboratory evaluation', mandatory: true, timingWindowHours: 1 },
      { stepNumber: 2, actionDescription: 'Administration of first-line therapeutic intervention', mandatory: true, timingWindowHours: 2 },
      { stepNumber: 3, actionDescription: 'Re-evaluation of vital telemetry and early warning score', mandatory: true, timingWindowHours: 4 }
    ]
  },
  {
    protocolId: 'CP-PROTOCOL-43',
    protocolTitle: 'Evidence-Based Clinical Protocol Pathway 43',
    specialty: 'Specialty 8',
    targetConditionCode: 'COND-43',
    evidenceGrade: 'B',
    steps: [
      { stepNumber: 1, actionDescription: 'Initial clinical assessment and baseline laboratory evaluation', mandatory: true, timingWindowHours: 1 },
      { stepNumber: 2, actionDescription: 'Administration of first-line therapeutic intervention', mandatory: true, timingWindowHours: 2 },
      { stepNumber: 3, actionDescription: 'Re-evaluation of vital telemetry and early warning score', mandatory: true, timingWindowHours: 4 }
    ]
  },
  {
    protocolId: 'CP-PROTOCOL-44',
    protocolTitle: 'Evidence-Based Clinical Protocol Pathway 44',
    specialty: 'Specialty 9',
    targetConditionCode: 'COND-44',
    evidenceGrade: 'A',
    steps: [
      { stepNumber: 1, actionDescription: 'Initial clinical assessment and baseline laboratory evaluation', mandatory: true, timingWindowHours: 1 },
      { stepNumber: 2, actionDescription: 'Administration of first-line therapeutic intervention', mandatory: true, timingWindowHours: 2 },
      { stepNumber: 3, actionDescription: 'Re-evaluation of vital telemetry and early warning score', mandatory: true, timingWindowHours: 4 }
    ]
  },
  {
    protocolId: 'CP-PROTOCOL-45',
    protocolTitle: 'Evidence-Based Clinical Protocol Pathway 45',
    specialty: 'Specialty 10',
    targetConditionCode: 'COND-45',
    evidenceGrade: 'B',
    steps: [
      { stepNumber: 1, actionDescription: 'Initial clinical assessment and baseline laboratory evaluation', mandatory: true, timingWindowHours: 1 },
      { stepNumber: 2, actionDescription: 'Administration of first-line therapeutic intervention', mandatory: true, timingWindowHours: 2 },
      { stepNumber: 3, actionDescription: 'Re-evaluation of vital telemetry and early warning score', mandatory: true, timingWindowHours: 4 }
    ]
  },
  {
    protocolId: 'CP-PROTOCOL-46',
    protocolTitle: 'Evidence-Based Clinical Protocol Pathway 46',
    specialty: 'Specialty 11',
    targetConditionCode: 'COND-46',
    evidenceGrade: 'A',
    steps: [
      { stepNumber: 1, actionDescription: 'Initial clinical assessment and baseline laboratory evaluation', mandatory: true, timingWindowHours: 1 },
      { stepNumber: 2, actionDescription: 'Administration of first-line therapeutic intervention', mandatory: true, timingWindowHours: 2 },
      { stepNumber: 3, actionDescription: 'Re-evaluation of vital telemetry and early warning score', mandatory: true, timingWindowHours: 4 }
    ]
  },
  {
    protocolId: 'CP-PROTOCOL-47',
    protocolTitle: 'Evidence-Based Clinical Protocol Pathway 47',
    specialty: 'Specialty 12',
    targetConditionCode: 'COND-47',
    evidenceGrade: 'B',
    steps: [
      { stepNumber: 1, actionDescription: 'Initial clinical assessment and baseline laboratory evaluation', mandatory: true, timingWindowHours: 1 },
      { stepNumber: 2, actionDescription: 'Administration of first-line therapeutic intervention', mandatory: true, timingWindowHours: 2 },
      { stepNumber: 3, actionDescription: 'Re-evaluation of vital telemetry and early warning score', mandatory: true, timingWindowHours: 4 }
    ]
  },
  {
    protocolId: 'CP-PROTOCOL-48',
    protocolTitle: 'Evidence-Based Clinical Protocol Pathway 48',
    specialty: 'Specialty 1',
    targetConditionCode: 'COND-48',
    evidenceGrade: 'A',
    steps: [
      { stepNumber: 1, actionDescription: 'Initial clinical assessment and baseline laboratory evaluation', mandatory: true, timingWindowHours: 1 },
      { stepNumber: 2, actionDescription: 'Administration of first-line therapeutic intervention', mandatory: true, timingWindowHours: 2 },
      { stepNumber: 3, actionDescription: 'Re-evaluation of vital telemetry and early warning score', mandatory: true, timingWindowHours: 4 }
    ]
  },
  {
    protocolId: 'CP-PROTOCOL-49',
    protocolTitle: 'Evidence-Based Clinical Protocol Pathway 49',
    specialty: 'Specialty 2',
    targetConditionCode: 'COND-49',
    evidenceGrade: 'B',
    steps: [
      { stepNumber: 1, actionDescription: 'Initial clinical assessment and baseline laboratory evaluation', mandatory: true, timingWindowHours: 1 },
      { stepNumber: 2, actionDescription: 'Administration of first-line therapeutic intervention', mandatory: true, timingWindowHours: 2 },
      { stepNumber: 3, actionDescription: 'Re-evaluation of vital telemetry and early warning score', mandatory: true, timingWindowHours: 4 }
    ]
  },
  {
    protocolId: 'CP-PROTOCOL-50',
    protocolTitle: 'Evidence-Based Clinical Protocol Pathway 50',
    specialty: 'Specialty 3',
    targetConditionCode: 'COND-50',
    evidenceGrade: 'A',
    steps: [
      { stepNumber: 1, actionDescription: 'Initial clinical assessment and baseline laboratory evaluation', mandatory: true, timingWindowHours: 1 },
      { stepNumber: 2, actionDescription: 'Administration of first-line therapeutic intervention', mandatory: true, timingWindowHours: 2 },
      { stepNumber: 3, actionDescription: 'Re-evaluation of vital telemetry and early warning score', mandatory: true, timingWindowHours: 4 }
    ]
  },
  {
    protocolId: 'CP-PROTOCOL-51',
    protocolTitle: 'Evidence-Based Clinical Protocol Pathway 51',
    specialty: 'Specialty 4',
    targetConditionCode: 'COND-51',
    evidenceGrade: 'B',
    steps: [
      { stepNumber: 1, actionDescription: 'Initial clinical assessment and baseline laboratory evaluation', mandatory: true, timingWindowHours: 1 },
      { stepNumber: 2, actionDescription: 'Administration of first-line therapeutic intervention', mandatory: true, timingWindowHours: 2 },
      { stepNumber: 3, actionDescription: 'Re-evaluation of vital telemetry and early warning score', mandatory: true, timingWindowHours: 4 }
    ]
  },
  {
    protocolId: 'CP-PROTOCOL-52',
    protocolTitle: 'Evidence-Based Clinical Protocol Pathway 52',
    specialty: 'Specialty 5',
    targetConditionCode: 'COND-52',
    evidenceGrade: 'A',
    steps: [
      { stepNumber: 1, actionDescription: 'Initial clinical assessment and baseline laboratory evaluation', mandatory: true, timingWindowHours: 1 },
      { stepNumber: 2, actionDescription: 'Administration of first-line therapeutic intervention', mandatory: true, timingWindowHours: 2 },
      { stepNumber: 3, actionDescription: 'Re-evaluation of vital telemetry and early warning score', mandatory: true, timingWindowHours: 4 }
    ]
  },
  {
    protocolId: 'CP-PROTOCOL-53',
    protocolTitle: 'Evidence-Based Clinical Protocol Pathway 53',
    specialty: 'Specialty 6',
    targetConditionCode: 'COND-53',
    evidenceGrade: 'B',
    steps: [
      { stepNumber: 1, actionDescription: 'Initial clinical assessment and baseline laboratory evaluation', mandatory: true, timingWindowHours: 1 },
      { stepNumber: 2, actionDescription: 'Administration of first-line therapeutic intervention', mandatory: true, timingWindowHours: 2 },
      { stepNumber: 3, actionDescription: 'Re-evaluation of vital telemetry and early warning score', mandatory: true, timingWindowHours: 4 }
    ]
  },
  {
    protocolId: 'CP-PROTOCOL-54',
    protocolTitle: 'Evidence-Based Clinical Protocol Pathway 54',
    specialty: 'Specialty 7',
    targetConditionCode: 'COND-54',
    evidenceGrade: 'A',
    steps: [
      { stepNumber: 1, actionDescription: 'Initial clinical assessment and baseline laboratory evaluation', mandatory: true, timingWindowHours: 1 },
      { stepNumber: 2, actionDescription: 'Administration of first-line therapeutic intervention', mandatory: true, timingWindowHours: 2 },
      { stepNumber: 3, actionDescription: 'Re-evaluation of vital telemetry and early warning score', mandatory: true, timingWindowHours: 4 }
    ]
  },
  {
    protocolId: 'CP-PROTOCOL-55',
    protocolTitle: 'Evidence-Based Clinical Protocol Pathway 55',
    specialty: 'Specialty 8',
    targetConditionCode: 'COND-55',
    evidenceGrade: 'B',
    steps: [
      { stepNumber: 1, actionDescription: 'Initial clinical assessment and baseline laboratory evaluation', mandatory: true, timingWindowHours: 1 },
      { stepNumber: 2, actionDescription: 'Administration of first-line therapeutic intervention', mandatory: true, timingWindowHours: 2 },
      { stepNumber: 3, actionDescription: 'Re-evaluation of vital telemetry and early warning score', mandatory: true, timingWindowHours: 4 }
    ]
  },
  {
    protocolId: 'CP-PROTOCOL-56',
    protocolTitle: 'Evidence-Based Clinical Protocol Pathway 56',
    specialty: 'Specialty 9',
    targetConditionCode: 'COND-56',
    evidenceGrade: 'A',
    steps: [
      { stepNumber: 1, actionDescription: 'Initial clinical assessment and baseline laboratory evaluation', mandatory: true, timingWindowHours: 1 },
      { stepNumber: 2, actionDescription: 'Administration of first-line therapeutic intervention', mandatory: true, timingWindowHours: 2 },
      { stepNumber: 3, actionDescription: 'Re-evaluation of vital telemetry and early warning score', mandatory: true, timingWindowHours: 4 }
    ]
  },
  {
    protocolId: 'CP-PROTOCOL-57',
    protocolTitle: 'Evidence-Based Clinical Protocol Pathway 57',
    specialty: 'Specialty 10',
    targetConditionCode: 'COND-57',
    evidenceGrade: 'B',
    steps: [
      { stepNumber: 1, actionDescription: 'Initial clinical assessment and baseline laboratory evaluation', mandatory: true, timingWindowHours: 1 },
      { stepNumber: 2, actionDescription: 'Administration of first-line therapeutic intervention', mandatory: true, timingWindowHours: 2 },
      { stepNumber: 3, actionDescription: 'Re-evaluation of vital telemetry and early warning score', mandatory: true, timingWindowHours: 4 }
    ]
  },
  {
    protocolId: 'CP-PROTOCOL-58',
    protocolTitle: 'Evidence-Based Clinical Protocol Pathway 58',
    specialty: 'Specialty 11',
    targetConditionCode: 'COND-58',
    evidenceGrade: 'A',
    steps: [
      { stepNumber: 1, actionDescription: 'Initial clinical assessment and baseline laboratory evaluation', mandatory: true, timingWindowHours: 1 },
      { stepNumber: 2, actionDescription: 'Administration of first-line therapeutic intervention', mandatory: true, timingWindowHours: 2 },
      { stepNumber: 3, actionDescription: 'Re-evaluation of vital telemetry and early warning score', mandatory: true, timingWindowHours: 4 }
    ]
  },
  {
    protocolId: 'CP-PROTOCOL-59',
    protocolTitle: 'Evidence-Based Clinical Protocol Pathway 59',
    specialty: 'Specialty 12',
    targetConditionCode: 'COND-59',
    evidenceGrade: 'B',
    steps: [
      { stepNumber: 1, actionDescription: 'Initial clinical assessment and baseline laboratory evaluation', mandatory: true, timingWindowHours: 1 },
      { stepNumber: 2, actionDescription: 'Administration of first-line therapeutic intervention', mandatory: true, timingWindowHours: 2 },
      { stepNumber: 3, actionDescription: 'Re-evaluation of vital telemetry and early warning score', mandatory: true, timingWindowHours: 4 }
    ]
  },
  {
    protocolId: 'CP-PROTOCOL-60',
    protocolTitle: 'Evidence-Based Clinical Protocol Pathway 60',
    specialty: 'Specialty 1',
    targetConditionCode: 'COND-60',
    evidenceGrade: 'A',
    steps: [
      { stepNumber: 1, actionDescription: 'Initial clinical assessment and baseline laboratory evaluation', mandatory: true, timingWindowHours: 1 },
      { stepNumber: 2, actionDescription: 'Administration of first-line therapeutic intervention', mandatory: true, timingWindowHours: 2 },
      { stepNumber: 3, actionDescription: 'Re-evaluation of vital telemetry and early warning score', mandatory: true, timingWindowHours: 4 }
    ]
  },
  {
    protocolId: 'CP-PROTOCOL-61',
    protocolTitle: 'Evidence-Based Clinical Protocol Pathway 61',
    specialty: 'Specialty 2',
    targetConditionCode: 'COND-61',
    evidenceGrade: 'B',
    steps: [
      { stepNumber: 1, actionDescription: 'Initial clinical assessment and baseline laboratory evaluation', mandatory: true, timingWindowHours: 1 },
      { stepNumber: 2, actionDescription: 'Administration of first-line therapeutic intervention', mandatory: true, timingWindowHours: 2 },
      { stepNumber: 3, actionDescription: 'Re-evaluation of vital telemetry and early warning score', mandatory: true, timingWindowHours: 4 }
    ]
  },
  {
    protocolId: 'CP-PROTOCOL-62',
    protocolTitle: 'Evidence-Based Clinical Protocol Pathway 62',
    specialty: 'Specialty 3',
    targetConditionCode: 'COND-62',
    evidenceGrade: 'A',
    steps: [
      { stepNumber: 1, actionDescription: 'Initial clinical assessment and baseline laboratory evaluation', mandatory: true, timingWindowHours: 1 },
      { stepNumber: 2, actionDescription: 'Administration of first-line therapeutic intervention', mandatory: true, timingWindowHours: 2 },
      { stepNumber: 3, actionDescription: 'Re-evaluation of vital telemetry and early warning score', mandatory: true, timingWindowHours: 4 }
    ]
  },
  {
    protocolId: 'CP-PROTOCOL-63',
    protocolTitle: 'Evidence-Based Clinical Protocol Pathway 63',
    specialty: 'Specialty 4',
    targetConditionCode: 'COND-63',
    evidenceGrade: 'B',
    steps: [
      { stepNumber: 1, actionDescription: 'Initial clinical assessment and baseline laboratory evaluation', mandatory: true, timingWindowHours: 1 },
      { stepNumber: 2, actionDescription: 'Administration of first-line therapeutic intervention', mandatory: true, timingWindowHours: 2 },
      { stepNumber: 3, actionDescription: 'Re-evaluation of vital telemetry and early warning score', mandatory: true, timingWindowHours: 4 }
    ]
  },
  {
    protocolId: 'CP-PROTOCOL-64',
    protocolTitle: 'Evidence-Based Clinical Protocol Pathway 64',
    specialty: 'Specialty 5',
    targetConditionCode: 'COND-64',
    evidenceGrade: 'A',
    steps: [
      { stepNumber: 1, actionDescription: 'Initial clinical assessment and baseline laboratory evaluation', mandatory: true, timingWindowHours: 1 },
      { stepNumber: 2, actionDescription: 'Administration of first-line therapeutic intervention', mandatory: true, timingWindowHours: 2 },
      { stepNumber: 3, actionDescription: 'Re-evaluation of vital telemetry and early warning score', mandatory: true, timingWindowHours: 4 }
    ]
  },
  {
    protocolId: 'CP-PROTOCOL-65',
    protocolTitle: 'Evidence-Based Clinical Protocol Pathway 65',
    specialty: 'Specialty 6',
    targetConditionCode: 'COND-65',
    evidenceGrade: 'B',
    steps: [
      { stepNumber: 1, actionDescription: 'Initial clinical assessment and baseline laboratory evaluation', mandatory: true, timingWindowHours: 1 },
      { stepNumber: 2, actionDescription: 'Administration of first-line therapeutic intervention', mandatory: true, timingWindowHours: 2 },
      { stepNumber: 3, actionDescription: 'Re-evaluation of vital telemetry and early warning score', mandatory: true, timingWindowHours: 4 }
    ]
  },
  {
    protocolId: 'CP-PROTOCOL-66',
    protocolTitle: 'Evidence-Based Clinical Protocol Pathway 66',
    specialty: 'Specialty 7',
    targetConditionCode: 'COND-66',
    evidenceGrade: 'A',
    steps: [
      { stepNumber: 1, actionDescription: 'Initial clinical assessment and baseline laboratory evaluation', mandatory: true, timingWindowHours: 1 },
      { stepNumber: 2, actionDescription: 'Administration of first-line therapeutic intervention', mandatory: true, timingWindowHours: 2 },
      { stepNumber: 3, actionDescription: 'Re-evaluation of vital telemetry and early warning score', mandatory: true, timingWindowHours: 4 }
    ]
  },
  {
    protocolId: 'CP-PROTOCOL-67',
    protocolTitle: 'Evidence-Based Clinical Protocol Pathway 67',
    specialty: 'Specialty 8',
    targetConditionCode: 'COND-67',
    evidenceGrade: 'B',
    steps: [
      { stepNumber: 1, actionDescription: 'Initial clinical assessment and baseline laboratory evaluation', mandatory: true, timingWindowHours: 1 },
      { stepNumber: 2, actionDescription: 'Administration of first-line therapeutic intervention', mandatory: true, timingWindowHours: 2 },
      { stepNumber: 3, actionDescription: 'Re-evaluation of vital telemetry and early warning score', mandatory: true, timingWindowHours: 4 }
    ]
  },
  {
    protocolId: 'CP-PROTOCOL-68',
    protocolTitle: 'Evidence-Based Clinical Protocol Pathway 68',
    specialty: 'Specialty 9',
    targetConditionCode: 'COND-68',
    evidenceGrade: 'A',
    steps: [
      { stepNumber: 1, actionDescription: 'Initial clinical assessment and baseline laboratory evaluation', mandatory: true, timingWindowHours: 1 },
      { stepNumber: 2, actionDescription: 'Administration of first-line therapeutic intervention', mandatory: true, timingWindowHours: 2 },
      { stepNumber: 3, actionDescription: 'Re-evaluation of vital telemetry and early warning score', mandatory: true, timingWindowHours: 4 }
    ]
  },
  {
    protocolId: 'CP-PROTOCOL-69',
    protocolTitle: 'Evidence-Based Clinical Protocol Pathway 69',
    specialty: 'Specialty 10',
    targetConditionCode: 'COND-69',
    evidenceGrade: 'B',
    steps: [
      { stepNumber: 1, actionDescription: 'Initial clinical assessment and baseline laboratory evaluation', mandatory: true, timingWindowHours: 1 },
      { stepNumber: 2, actionDescription: 'Administration of first-line therapeutic intervention', mandatory: true, timingWindowHours: 2 },
      { stepNumber: 3, actionDescription: 'Re-evaluation of vital telemetry and early warning score', mandatory: true, timingWindowHours: 4 }
    ]
  },
  {
    protocolId: 'CP-PROTOCOL-70',
    protocolTitle: 'Evidence-Based Clinical Protocol Pathway 70',
    specialty: 'Specialty 11',
    targetConditionCode: 'COND-70',
    evidenceGrade: 'A',
    steps: [
      { stepNumber: 1, actionDescription: 'Initial clinical assessment and baseline laboratory evaluation', mandatory: true, timingWindowHours: 1 },
      { stepNumber: 2, actionDescription: 'Administration of first-line therapeutic intervention', mandatory: true, timingWindowHours: 2 },
      { stepNumber: 3, actionDescription: 'Re-evaluation of vital telemetry and early warning score', mandatory: true, timingWindowHours: 4 }
    ]
  },
  {
    protocolId: 'CP-PROTOCOL-71',
    protocolTitle: 'Evidence-Based Clinical Protocol Pathway 71',
    specialty: 'Specialty 12',
    targetConditionCode: 'COND-71',
    evidenceGrade: 'B',
    steps: [
      { stepNumber: 1, actionDescription: 'Initial clinical assessment and baseline laboratory evaluation', mandatory: true, timingWindowHours: 1 },
      { stepNumber: 2, actionDescription: 'Administration of first-line therapeutic intervention', mandatory: true, timingWindowHours: 2 },
      { stepNumber: 3, actionDescription: 'Re-evaluation of vital telemetry and early warning score', mandatory: true, timingWindowHours: 4 }
    ]
  },
  {
    protocolId: 'CP-PROTOCOL-72',
    protocolTitle: 'Evidence-Based Clinical Protocol Pathway 72',
    specialty: 'Specialty 1',
    targetConditionCode: 'COND-72',
    evidenceGrade: 'A',
    steps: [
      { stepNumber: 1, actionDescription: 'Initial clinical assessment and baseline laboratory evaluation', mandatory: true, timingWindowHours: 1 },
      { stepNumber: 2, actionDescription: 'Administration of first-line therapeutic intervention', mandatory: true, timingWindowHours: 2 },
      { stepNumber: 3, actionDescription: 'Re-evaluation of vital telemetry and early warning score', mandatory: true, timingWindowHours: 4 }
    ]
  },
  {
    protocolId: 'CP-PROTOCOL-73',
    protocolTitle: 'Evidence-Based Clinical Protocol Pathway 73',
    specialty: 'Specialty 2',
    targetConditionCode: 'COND-73',
    evidenceGrade: 'B',
    steps: [
      { stepNumber: 1, actionDescription: 'Initial clinical assessment and baseline laboratory evaluation', mandatory: true, timingWindowHours: 1 },
      { stepNumber: 2, actionDescription: 'Administration of first-line therapeutic intervention', mandatory: true, timingWindowHours: 2 },
      { stepNumber: 3, actionDescription: 'Re-evaluation of vital telemetry and early warning score', mandatory: true, timingWindowHours: 4 }
    ]
  },
  {
    protocolId: 'CP-PROTOCOL-74',
    protocolTitle: 'Evidence-Based Clinical Protocol Pathway 74',
    specialty: 'Specialty 3',
    targetConditionCode: 'COND-74',
    evidenceGrade: 'A',
    steps: [
      { stepNumber: 1, actionDescription: 'Initial clinical assessment and baseline laboratory evaluation', mandatory: true, timingWindowHours: 1 },
      { stepNumber: 2, actionDescription: 'Administration of first-line therapeutic intervention', mandatory: true, timingWindowHours: 2 },
      { stepNumber: 3, actionDescription: 'Re-evaluation of vital telemetry and early warning score', mandatory: true, timingWindowHours: 4 }
    ]
  },
  {
    protocolId: 'CP-PROTOCOL-75',
    protocolTitle: 'Evidence-Based Clinical Protocol Pathway 75',
    specialty: 'Specialty 4',
    targetConditionCode: 'COND-75',
    evidenceGrade: 'B',
    steps: [
      { stepNumber: 1, actionDescription: 'Initial clinical assessment and baseline laboratory evaluation', mandatory: true, timingWindowHours: 1 },
      { stepNumber: 2, actionDescription: 'Administration of first-line therapeutic intervention', mandatory: true, timingWindowHours: 2 },
      { stepNumber: 3, actionDescription: 'Re-evaluation of vital telemetry and early warning score', mandatory: true, timingWindowHours: 4 }
    ]
  },
  {
    protocolId: 'CP-PROTOCOL-76',
    protocolTitle: 'Evidence-Based Clinical Protocol Pathway 76',
    specialty: 'Specialty 5',
    targetConditionCode: 'COND-76',
    evidenceGrade: 'A',
    steps: [
      { stepNumber: 1, actionDescription: 'Initial clinical assessment and baseline laboratory evaluation', mandatory: true, timingWindowHours: 1 },
      { stepNumber: 2, actionDescription: 'Administration of first-line therapeutic intervention', mandatory: true, timingWindowHours: 2 },
      { stepNumber: 3, actionDescription: 'Re-evaluation of vital telemetry and early warning score', mandatory: true, timingWindowHours: 4 }
    ]
  },
  {
    protocolId: 'CP-PROTOCOL-77',
    protocolTitle: 'Evidence-Based Clinical Protocol Pathway 77',
    specialty: 'Specialty 6',
    targetConditionCode: 'COND-77',
    evidenceGrade: 'B',
    steps: [
      { stepNumber: 1, actionDescription: 'Initial clinical assessment and baseline laboratory evaluation', mandatory: true, timingWindowHours: 1 },
      { stepNumber: 2, actionDescription: 'Administration of first-line therapeutic intervention', mandatory: true, timingWindowHours: 2 },
      { stepNumber: 3, actionDescription: 'Re-evaluation of vital telemetry and early warning score', mandatory: true, timingWindowHours: 4 }
    ]
  },
  {
    protocolId: 'CP-PROTOCOL-78',
    protocolTitle: 'Evidence-Based Clinical Protocol Pathway 78',
    specialty: 'Specialty 7',
    targetConditionCode: 'COND-78',
    evidenceGrade: 'A',
    steps: [
      { stepNumber: 1, actionDescription: 'Initial clinical assessment and baseline laboratory evaluation', mandatory: true, timingWindowHours: 1 },
      { stepNumber: 2, actionDescription: 'Administration of first-line therapeutic intervention', mandatory: true, timingWindowHours: 2 },
      { stepNumber: 3, actionDescription: 'Re-evaluation of vital telemetry and early warning score', mandatory: true, timingWindowHours: 4 }
    ]
  },
  {
    protocolId: 'CP-PROTOCOL-79',
    protocolTitle: 'Evidence-Based Clinical Protocol Pathway 79',
    specialty: 'Specialty 8',
    targetConditionCode: 'COND-79',
    evidenceGrade: 'B',
    steps: [
      { stepNumber: 1, actionDescription: 'Initial clinical assessment and baseline laboratory evaluation', mandatory: true, timingWindowHours: 1 },
      { stepNumber: 2, actionDescription: 'Administration of first-line therapeutic intervention', mandatory: true, timingWindowHours: 2 },
      { stepNumber: 3, actionDescription: 'Re-evaluation of vital telemetry and early warning score', mandatory: true, timingWindowHours: 4 }
    ]
  },
  {
    protocolId: 'CP-PROTOCOL-80',
    protocolTitle: 'Evidence-Based Clinical Protocol Pathway 80',
    specialty: 'Specialty 9',
    targetConditionCode: 'COND-80',
    evidenceGrade: 'A',
    steps: [
      { stepNumber: 1, actionDescription: 'Initial clinical assessment and baseline laboratory evaluation', mandatory: true, timingWindowHours: 1 },
      { stepNumber: 2, actionDescription: 'Administration of first-line therapeutic intervention', mandatory: true, timingWindowHours: 2 },
      { stepNumber: 3, actionDescription: 'Re-evaluation of vital telemetry and early warning score', mandatory: true, timingWindowHours: 4 }
    ]
  },
  {
    protocolId: 'CP-PROTOCOL-81',
    protocolTitle: 'Evidence-Based Clinical Protocol Pathway 81',
    specialty: 'Specialty 10',
    targetConditionCode: 'COND-81',
    evidenceGrade: 'B',
    steps: [
      { stepNumber: 1, actionDescription: 'Initial clinical assessment and baseline laboratory evaluation', mandatory: true, timingWindowHours: 1 },
      { stepNumber: 2, actionDescription: 'Administration of first-line therapeutic intervention', mandatory: true, timingWindowHours: 2 },
      { stepNumber: 3, actionDescription: 'Re-evaluation of vital telemetry and early warning score', mandatory: true, timingWindowHours: 4 }
    ]
  },
  {
    protocolId: 'CP-PROTOCOL-82',
    protocolTitle: 'Evidence-Based Clinical Protocol Pathway 82',
    specialty: 'Specialty 11',
    targetConditionCode: 'COND-82',
    evidenceGrade: 'A',
    steps: [
      { stepNumber: 1, actionDescription: 'Initial clinical assessment and baseline laboratory evaluation', mandatory: true, timingWindowHours: 1 },
      { stepNumber: 2, actionDescription: 'Administration of first-line therapeutic intervention', mandatory: true, timingWindowHours: 2 },
      { stepNumber: 3, actionDescription: 'Re-evaluation of vital telemetry and early warning score', mandatory: true, timingWindowHours: 4 }
    ]
  },
  {
    protocolId: 'CP-PROTOCOL-83',
    protocolTitle: 'Evidence-Based Clinical Protocol Pathway 83',
    specialty: 'Specialty 12',
    targetConditionCode: 'COND-83',
    evidenceGrade: 'B',
    steps: [
      { stepNumber: 1, actionDescription: 'Initial clinical assessment and baseline laboratory evaluation', mandatory: true, timingWindowHours: 1 },
      { stepNumber: 2, actionDescription: 'Administration of first-line therapeutic intervention', mandatory: true, timingWindowHours: 2 },
      { stepNumber: 3, actionDescription: 'Re-evaluation of vital telemetry and early warning score', mandatory: true, timingWindowHours: 4 }
    ]
  },
  {
    protocolId: 'CP-PROTOCOL-84',
    protocolTitle: 'Evidence-Based Clinical Protocol Pathway 84',
    specialty: 'Specialty 1',
    targetConditionCode: 'COND-84',
    evidenceGrade: 'A',
    steps: [
      { stepNumber: 1, actionDescription: 'Initial clinical assessment and baseline laboratory evaluation', mandatory: true, timingWindowHours: 1 },
      { stepNumber: 2, actionDescription: 'Administration of first-line therapeutic intervention', mandatory: true, timingWindowHours: 2 },
      { stepNumber: 3, actionDescription: 'Re-evaluation of vital telemetry and early warning score', mandatory: true, timingWindowHours: 4 }
    ]
  },
  {
    protocolId: 'CP-PROTOCOL-85',
    protocolTitle: 'Evidence-Based Clinical Protocol Pathway 85',
    specialty: 'Specialty 2',
    targetConditionCode: 'COND-85',
    evidenceGrade: 'B',
    steps: [
      { stepNumber: 1, actionDescription: 'Initial clinical assessment and baseline laboratory evaluation', mandatory: true, timingWindowHours: 1 },
      { stepNumber: 2, actionDescription: 'Administration of first-line therapeutic intervention', mandatory: true, timingWindowHours: 2 },
      { stepNumber: 3, actionDescription: 'Re-evaluation of vital telemetry and early warning score', mandatory: true, timingWindowHours: 4 }
    ]
  },
  {
    protocolId: 'CP-PROTOCOL-86',
    protocolTitle: 'Evidence-Based Clinical Protocol Pathway 86',
    specialty: 'Specialty 3',
    targetConditionCode: 'COND-86',
    evidenceGrade: 'A',
    steps: [
      { stepNumber: 1, actionDescription: 'Initial clinical assessment and baseline laboratory evaluation', mandatory: true, timingWindowHours: 1 },
      { stepNumber: 2, actionDescription: 'Administration of first-line therapeutic intervention', mandatory: true, timingWindowHours: 2 },
      { stepNumber: 3, actionDescription: 'Re-evaluation of vital telemetry and early warning score', mandatory: true, timingWindowHours: 4 }
    ]
  },
  {
    protocolId: 'CP-PROTOCOL-87',
    protocolTitle: 'Evidence-Based Clinical Protocol Pathway 87',
    specialty: 'Specialty 4',
    targetConditionCode: 'COND-87',
    evidenceGrade: 'B',
    steps: [
      { stepNumber: 1, actionDescription: 'Initial clinical assessment and baseline laboratory evaluation', mandatory: true, timingWindowHours: 1 },
      { stepNumber: 2, actionDescription: 'Administration of first-line therapeutic intervention', mandatory: true, timingWindowHours: 2 },
      { stepNumber: 3, actionDescription: 'Re-evaluation of vital telemetry and early warning score', mandatory: true, timingWindowHours: 4 }
    ]
  },
  {
    protocolId: 'CP-PROTOCOL-88',
    protocolTitle: 'Evidence-Based Clinical Protocol Pathway 88',
    specialty: 'Specialty 5',
    targetConditionCode: 'COND-88',
    evidenceGrade: 'A',
    steps: [
      { stepNumber: 1, actionDescription: 'Initial clinical assessment and baseline laboratory evaluation', mandatory: true, timingWindowHours: 1 },
      { stepNumber: 2, actionDescription: 'Administration of first-line therapeutic intervention', mandatory: true, timingWindowHours: 2 },
      { stepNumber: 3, actionDescription: 'Re-evaluation of vital telemetry and early warning score', mandatory: true, timingWindowHours: 4 }
    ]
  },
  {
    protocolId: 'CP-PROTOCOL-89',
    protocolTitle: 'Evidence-Based Clinical Protocol Pathway 89',
    specialty: 'Specialty 6',
    targetConditionCode: 'COND-89',
    evidenceGrade: 'B',
    steps: [
      { stepNumber: 1, actionDescription: 'Initial clinical assessment and baseline laboratory evaluation', mandatory: true, timingWindowHours: 1 },
      { stepNumber: 2, actionDescription: 'Administration of first-line therapeutic intervention', mandatory: true, timingWindowHours: 2 },
      { stepNumber: 3, actionDescription: 'Re-evaluation of vital telemetry and early warning score', mandatory: true, timingWindowHours: 4 }
    ]
  },
  {
    protocolId: 'CP-PROTOCOL-90',
    protocolTitle: 'Evidence-Based Clinical Protocol Pathway 90',
    specialty: 'Specialty 7',
    targetConditionCode: 'COND-90',
    evidenceGrade: 'A',
    steps: [
      { stepNumber: 1, actionDescription: 'Initial clinical assessment and baseline laboratory evaluation', mandatory: true, timingWindowHours: 1 },
      { stepNumber: 2, actionDescription: 'Administration of first-line therapeutic intervention', mandatory: true, timingWindowHours: 2 },
      { stepNumber: 3, actionDescription: 'Re-evaluation of vital telemetry and early warning score', mandatory: true, timingWindowHours: 4 }
    ]
  },
  {
    protocolId: 'CP-PROTOCOL-91',
    protocolTitle: 'Evidence-Based Clinical Protocol Pathway 91',
    specialty: 'Specialty 8',
    targetConditionCode: 'COND-91',
    evidenceGrade: 'B',
    steps: [
      { stepNumber: 1, actionDescription: 'Initial clinical assessment and baseline laboratory evaluation', mandatory: true, timingWindowHours: 1 },
      { stepNumber: 2, actionDescription: 'Administration of first-line therapeutic intervention', mandatory: true, timingWindowHours: 2 },
      { stepNumber: 3, actionDescription: 'Re-evaluation of vital telemetry and early warning score', mandatory: true, timingWindowHours: 4 }
    ]
  },
  {
    protocolId: 'CP-PROTOCOL-92',
    protocolTitle: 'Evidence-Based Clinical Protocol Pathway 92',
    specialty: 'Specialty 9',
    targetConditionCode: 'COND-92',
    evidenceGrade: 'A',
    steps: [
      { stepNumber: 1, actionDescription: 'Initial clinical assessment and baseline laboratory evaluation', mandatory: true, timingWindowHours: 1 },
      { stepNumber: 2, actionDescription: 'Administration of first-line therapeutic intervention', mandatory: true, timingWindowHours: 2 },
      { stepNumber: 3, actionDescription: 'Re-evaluation of vital telemetry and early warning score', mandatory: true, timingWindowHours: 4 }
    ]
  },
  {
    protocolId: 'CP-PROTOCOL-93',
    protocolTitle: 'Evidence-Based Clinical Protocol Pathway 93',
    specialty: 'Specialty 10',
    targetConditionCode: 'COND-93',
    evidenceGrade: 'B',
    steps: [
      { stepNumber: 1, actionDescription: 'Initial clinical assessment and baseline laboratory evaluation', mandatory: true, timingWindowHours: 1 },
      { stepNumber: 2, actionDescription: 'Administration of first-line therapeutic intervention', mandatory: true, timingWindowHours: 2 },
      { stepNumber: 3, actionDescription: 'Re-evaluation of vital telemetry and early warning score', mandatory: true, timingWindowHours: 4 }
    ]
  },
  {
    protocolId: 'CP-PROTOCOL-94',
    protocolTitle: 'Evidence-Based Clinical Protocol Pathway 94',
    specialty: 'Specialty 11',
    targetConditionCode: 'COND-94',
    evidenceGrade: 'A',
    steps: [
      { stepNumber: 1, actionDescription: 'Initial clinical assessment and baseline laboratory evaluation', mandatory: true, timingWindowHours: 1 },
      { stepNumber: 2, actionDescription: 'Administration of first-line therapeutic intervention', mandatory: true, timingWindowHours: 2 },
      { stepNumber: 3, actionDescription: 'Re-evaluation of vital telemetry and early warning score', mandatory: true, timingWindowHours: 4 }
    ]
  },
  {
    protocolId: 'CP-PROTOCOL-95',
    protocolTitle: 'Evidence-Based Clinical Protocol Pathway 95',
    specialty: 'Specialty 12',
    targetConditionCode: 'COND-95',
    evidenceGrade: 'B',
    steps: [
      { stepNumber: 1, actionDescription: 'Initial clinical assessment and baseline laboratory evaluation', mandatory: true, timingWindowHours: 1 },
      { stepNumber: 2, actionDescription: 'Administration of first-line therapeutic intervention', mandatory: true, timingWindowHours: 2 },
      { stepNumber: 3, actionDescription: 'Re-evaluation of vital telemetry and early warning score', mandatory: true, timingWindowHours: 4 }
    ]
  },
  {
    protocolId: 'CP-PROTOCOL-96',
    protocolTitle: 'Evidence-Based Clinical Protocol Pathway 96',
    specialty: 'Specialty 1',
    targetConditionCode: 'COND-96',
    evidenceGrade: 'A',
    steps: [
      { stepNumber: 1, actionDescription: 'Initial clinical assessment and baseline laboratory evaluation', mandatory: true, timingWindowHours: 1 },
      { stepNumber: 2, actionDescription: 'Administration of first-line therapeutic intervention', mandatory: true, timingWindowHours: 2 },
      { stepNumber: 3, actionDescription: 'Re-evaluation of vital telemetry and early warning score', mandatory: true, timingWindowHours: 4 }
    ]
  },
  {
    protocolId: 'CP-PROTOCOL-97',
    protocolTitle: 'Evidence-Based Clinical Protocol Pathway 97',
    specialty: 'Specialty 2',
    targetConditionCode: 'COND-97',
    evidenceGrade: 'B',
    steps: [
      { stepNumber: 1, actionDescription: 'Initial clinical assessment and baseline laboratory evaluation', mandatory: true, timingWindowHours: 1 },
      { stepNumber: 2, actionDescription: 'Administration of first-line therapeutic intervention', mandatory: true, timingWindowHours: 2 },
      { stepNumber: 3, actionDescription: 'Re-evaluation of vital telemetry and early warning score', mandatory: true, timingWindowHours: 4 }
    ]
  },
  {
    protocolId: 'CP-PROTOCOL-98',
    protocolTitle: 'Evidence-Based Clinical Protocol Pathway 98',
    specialty: 'Specialty 3',
    targetConditionCode: 'COND-98',
    evidenceGrade: 'A',
    steps: [
      { stepNumber: 1, actionDescription: 'Initial clinical assessment and baseline laboratory evaluation', mandatory: true, timingWindowHours: 1 },
      { stepNumber: 2, actionDescription: 'Administration of first-line therapeutic intervention', mandatory: true, timingWindowHours: 2 },
      { stepNumber: 3, actionDescription: 'Re-evaluation of vital telemetry and early warning score', mandatory: true, timingWindowHours: 4 }
    ]
  },
  {
    protocolId: 'CP-PROTOCOL-99',
    protocolTitle: 'Evidence-Based Clinical Protocol Pathway 99',
    specialty: 'Specialty 4',
    targetConditionCode: 'COND-99',
    evidenceGrade: 'B',
    steps: [
      { stepNumber: 1, actionDescription: 'Initial clinical assessment and baseline laboratory evaluation', mandatory: true, timingWindowHours: 1 },
      { stepNumber: 2, actionDescription: 'Administration of first-line therapeutic intervention', mandatory: true, timingWindowHours: 2 },
      { stepNumber: 3, actionDescription: 'Re-evaluation of vital telemetry and early warning score', mandatory: true, timingWindowHours: 4 }
    ]
  },
  {
    protocolId: 'CP-PROTOCOL-100',
    protocolTitle: 'Evidence-Based Clinical Protocol Pathway 100',
    specialty: 'Specialty 5',
    targetConditionCode: 'COND-100',
    evidenceGrade: 'A',
    steps: [
      { stepNumber: 1, actionDescription: 'Initial clinical assessment and baseline laboratory evaluation', mandatory: true, timingWindowHours: 1 },
      { stepNumber: 2, actionDescription: 'Administration of first-line therapeutic intervention', mandatory: true, timingWindowHours: 2 },
      { stepNumber: 3, actionDescription: 'Re-evaluation of vital telemetry and early warning score', mandatory: true, timingWindowHours: 4 }
    ]
  },
  {
    protocolId: 'CP-PROTOCOL-101',
    protocolTitle: 'Evidence-Based Clinical Protocol Pathway 101',
    specialty: 'Specialty 6',
    targetConditionCode: 'COND-101',
    evidenceGrade: 'B',
    steps: [
      { stepNumber: 1, actionDescription: 'Initial clinical assessment and baseline laboratory evaluation', mandatory: true, timingWindowHours: 1 },
      { stepNumber: 2, actionDescription: 'Administration of first-line therapeutic intervention', mandatory: true, timingWindowHours: 2 },
      { stepNumber: 3, actionDescription: 'Re-evaluation of vital telemetry and early warning score', mandatory: true, timingWindowHours: 4 }
    ]
  },
  {
    protocolId: 'CP-PROTOCOL-102',
    protocolTitle: 'Evidence-Based Clinical Protocol Pathway 102',
    specialty: 'Specialty 7',
    targetConditionCode: 'COND-102',
    evidenceGrade: 'A',
    steps: [
      { stepNumber: 1, actionDescription: 'Initial clinical assessment and baseline laboratory evaluation', mandatory: true, timingWindowHours: 1 },
      { stepNumber: 2, actionDescription: 'Administration of first-line therapeutic intervention', mandatory: true, timingWindowHours: 2 },
      { stepNumber: 3, actionDescription: 'Re-evaluation of vital telemetry and early warning score', mandatory: true, timingWindowHours: 4 }
    ]
  },
  {
    protocolId: 'CP-PROTOCOL-103',
    protocolTitle: 'Evidence-Based Clinical Protocol Pathway 103',
    specialty: 'Specialty 8',
    targetConditionCode: 'COND-103',
    evidenceGrade: 'B',
    steps: [
      { stepNumber: 1, actionDescription: 'Initial clinical assessment and baseline laboratory evaluation', mandatory: true, timingWindowHours: 1 },
      { stepNumber: 2, actionDescription: 'Administration of first-line therapeutic intervention', mandatory: true, timingWindowHours: 2 },
      { stepNumber: 3, actionDescription: 'Re-evaluation of vital telemetry and early warning score', mandatory: true, timingWindowHours: 4 }
    ]
  },
  {
    protocolId: 'CP-PROTOCOL-104',
    protocolTitle: 'Evidence-Based Clinical Protocol Pathway 104',
    specialty: 'Specialty 9',
    targetConditionCode: 'COND-104',
    evidenceGrade: 'A',
    steps: [
      { stepNumber: 1, actionDescription: 'Initial clinical assessment and baseline laboratory evaluation', mandatory: true, timingWindowHours: 1 },
      { stepNumber: 2, actionDescription: 'Administration of first-line therapeutic intervention', mandatory: true, timingWindowHours: 2 },
      { stepNumber: 3, actionDescription: 'Re-evaluation of vital telemetry and early warning score', mandatory: true, timingWindowHours: 4 }
    ]
  },
  {
    protocolId: 'CP-PROTOCOL-105',
    protocolTitle: 'Evidence-Based Clinical Protocol Pathway 105',
    specialty: 'Specialty 10',
    targetConditionCode: 'COND-105',
    evidenceGrade: 'B',
    steps: [
      { stepNumber: 1, actionDescription: 'Initial clinical assessment and baseline laboratory evaluation', mandatory: true, timingWindowHours: 1 },
      { stepNumber: 2, actionDescription: 'Administration of first-line therapeutic intervention', mandatory: true, timingWindowHours: 2 },
      { stepNumber: 3, actionDescription: 'Re-evaluation of vital telemetry and early warning score', mandatory: true, timingWindowHours: 4 }
    ]
  },
  {
    protocolId: 'CP-PROTOCOL-106',
    protocolTitle: 'Evidence-Based Clinical Protocol Pathway 106',
    specialty: 'Specialty 11',
    targetConditionCode: 'COND-106',
    evidenceGrade: 'A',
    steps: [
      { stepNumber: 1, actionDescription: 'Initial clinical assessment and baseline laboratory evaluation', mandatory: true, timingWindowHours: 1 },
      { stepNumber: 2, actionDescription: 'Administration of first-line therapeutic intervention', mandatory: true, timingWindowHours: 2 },
      { stepNumber: 3, actionDescription: 'Re-evaluation of vital telemetry and early warning score', mandatory: true, timingWindowHours: 4 }
    ]
  },
  {
    protocolId: 'CP-PROTOCOL-107',
    protocolTitle: 'Evidence-Based Clinical Protocol Pathway 107',
    specialty: 'Specialty 12',
    targetConditionCode: 'COND-107',
    evidenceGrade: 'B',
    steps: [
      { stepNumber: 1, actionDescription: 'Initial clinical assessment and baseline laboratory evaluation', mandatory: true, timingWindowHours: 1 },
      { stepNumber: 2, actionDescription: 'Administration of first-line therapeutic intervention', mandatory: true, timingWindowHours: 2 },
      { stepNumber: 3, actionDescription: 'Re-evaluation of vital telemetry and early warning score', mandatory: true, timingWindowHours: 4 }
    ]
  },
  {
    protocolId: 'CP-PROTOCOL-108',
    protocolTitle: 'Evidence-Based Clinical Protocol Pathway 108',
    specialty: 'Specialty 1',
    targetConditionCode: 'COND-108',
    evidenceGrade: 'A',
    steps: [
      { stepNumber: 1, actionDescription: 'Initial clinical assessment and baseline laboratory evaluation', mandatory: true, timingWindowHours: 1 },
      { stepNumber: 2, actionDescription: 'Administration of first-line therapeutic intervention', mandatory: true, timingWindowHours: 2 },
      { stepNumber: 3, actionDescription: 'Re-evaluation of vital telemetry and early warning score', mandatory: true, timingWindowHours: 4 }
    ]
  },
  {
    protocolId: 'CP-PROTOCOL-109',
    protocolTitle: 'Evidence-Based Clinical Protocol Pathway 109',
    specialty: 'Specialty 2',
    targetConditionCode: 'COND-109',
    evidenceGrade: 'B',
    steps: [
      { stepNumber: 1, actionDescription: 'Initial clinical assessment and baseline laboratory evaluation', mandatory: true, timingWindowHours: 1 },
      { stepNumber: 2, actionDescription: 'Administration of first-line therapeutic intervention', mandatory: true, timingWindowHours: 2 },
      { stepNumber: 3, actionDescription: 'Re-evaluation of vital telemetry and early warning score', mandatory: true, timingWindowHours: 4 }
    ]
  },
  {
    protocolId: 'CP-PROTOCOL-110',
    protocolTitle: 'Evidence-Based Clinical Protocol Pathway 110',
    specialty: 'Specialty 3',
    targetConditionCode: 'COND-110',
    evidenceGrade: 'A',
    steps: [
      { stepNumber: 1, actionDescription: 'Initial clinical assessment and baseline laboratory evaluation', mandatory: true, timingWindowHours: 1 },
      { stepNumber: 2, actionDescription: 'Administration of first-line therapeutic intervention', mandatory: true, timingWindowHours: 2 },
      { stepNumber: 3, actionDescription: 'Re-evaluation of vital telemetry and early warning score', mandatory: true, timingWindowHours: 4 }
    ]
  },
  {
    protocolId: 'CP-PROTOCOL-111',
    protocolTitle: 'Evidence-Based Clinical Protocol Pathway 111',
    specialty: 'Specialty 4',
    targetConditionCode: 'COND-111',
    evidenceGrade: 'B',
    steps: [
      { stepNumber: 1, actionDescription: 'Initial clinical assessment and baseline laboratory evaluation', mandatory: true, timingWindowHours: 1 },
      { stepNumber: 2, actionDescription: 'Administration of first-line therapeutic intervention', mandatory: true, timingWindowHours: 2 },
      { stepNumber: 3, actionDescription: 'Re-evaluation of vital telemetry and early warning score', mandatory: true, timingWindowHours: 4 }
    ]
  },
  {
    protocolId: 'CP-PROTOCOL-112',
    protocolTitle: 'Evidence-Based Clinical Protocol Pathway 112',
    specialty: 'Specialty 5',
    targetConditionCode: 'COND-112',
    evidenceGrade: 'A',
    steps: [
      { stepNumber: 1, actionDescription: 'Initial clinical assessment and baseline laboratory evaluation', mandatory: true, timingWindowHours: 1 },
      { stepNumber: 2, actionDescription: 'Administration of first-line therapeutic intervention', mandatory: true, timingWindowHours: 2 },
      { stepNumber: 3, actionDescription: 'Re-evaluation of vital telemetry and early warning score', mandatory: true, timingWindowHours: 4 }
    ]
  },
  {
    protocolId: 'CP-PROTOCOL-113',
    protocolTitle: 'Evidence-Based Clinical Protocol Pathway 113',
    specialty: 'Specialty 6',
    targetConditionCode: 'COND-113',
    evidenceGrade: 'B',
    steps: [
      { stepNumber: 1, actionDescription: 'Initial clinical assessment and baseline laboratory evaluation', mandatory: true, timingWindowHours: 1 },
      { stepNumber: 2, actionDescription: 'Administration of first-line therapeutic intervention', mandatory: true, timingWindowHours: 2 },
      { stepNumber: 3, actionDescription: 'Re-evaluation of vital telemetry and early warning score', mandatory: true, timingWindowHours: 4 }
    ]
  },
  {
    protocolId: 'CP-PROTOCOL-114',
    protocolTitle: 'Evidence-Based Clinical Protocol Pathway 114',
    specialty: 'Specialty 7',
    targetConditionCode: 'COND-114',
    evidenceGrade: 'A',
    steps: [
      { stepNumber: 1, actionDescription: 'Initial clinical assessment and baseline laboratory evaluation', mandatory: true, timingWindowHours: 1 },
      { stepNumber: 2, actionDescription: 'Administration of first-line therapeutic intervention', mandatory: true, timingWindowHours: 2 },
      { stepNumber: 3, actionDescription: 'Re-evaluation of vital telemetry and early warning score', mandatory: true, timingWindowHours: 4 }
    ]
  },
  {
    protocolId: 'CP-PROTOCOL-115',
    protocolTitle: 'Evidence-Based Clinical Protocol Pathway 115',
    specialty: 'Specialty 8',
    targetConditionCode: 'COND-115',
    evidenceGrade: 'B',
    steps: [
      { stepNumber: 1, actionDescription: 'Initial clinical assessment and baseline laboratory evaluation', mandatory: true, timingWindowHours: 1 },
      { stepNumber: 2, actionDescription: 'Administration of first-line therapeutic intervention', mandatory: true, timingWindowHours: 2 },
      { stepNumber: 3, actionDescription: 'Re-evaluation of vital telemetry and early warning score', mandatory: true, timingWindowHours: 4 }
    ]
  },
  {
    protocolId: 'CP-PROTOCOL-116',
    protocolTitle: 'Evidence-Based Clinical Protocol Pathway 116',
    specialty: 'Specialty 9',
    targetConditionCode: 'COND-116',
    evidenceGrade: 'A',
    steps: [
      { stepNumber: 1, actionDescription: 'Initial clinical assessment and baseline laboratory evaluation', mandatory: true, timingWindowHours: 1 },
      { stepNumber: 2, actionDescription: 'Administration of first-line therapeutic intervention', mandatory: true, timingWindowHours: 2 },
      { stepNumber: 3, actionDescription: 'Re-evaluation of vital telemetry and early warning score', mandatory: true, timingWindowHours: 4 }
    ]
  },
  {
    protocolId: 'CP-PROTOCOL-117',
    protocolTitle: 'Evidence-Based Clinical Protocol Pathway 117',
    specialty: 'Specialty 10',
    targetConditionCode: 'COND-117',
    evidenceGrade: 'B',
    steps: [
      { stepNumber: 1, actionDescription: 'Initial clinical assessment and baseline laboratory evaluation', mandatory: true, timingWindowHours: 1 },
      { stepNumber: 2, actionDescription: 'Administration of first-line therapeutic intervention', mandatory: true, timingWindowHours: 2 },
      { stepNumber: 3, actionDescription: 'Re-evaluation of vital telemetry and early warning score', mandatory: true, timingWindowHours: 4 }
    ]
  },
  {
    protocolId: 'CP-PROTOCOL-118',
    protocolTitle: 'Evidence-Based Clinical Protocol Pathway 118',
    specialty: 'Specialty 11',
    targetConditionCode: 'COND-118',
    evidenceGrade: 'A',
    steps: [
      { stepNumber: 1, actionDescription: 'Initial clinical assessment and baseline laboratory evaluation', mandatory: true, timingWindowHours: 1 },
      { stepNumber: 2, actionDescription: 'Administration of first-line therapeutic intervention', mandatory: true, timingWindowHours: 2 },
      { stepNumber: 3, actionDescription: 'Re-evaluation of vital telemetry and early warning score', mandatory: true, timingWindowHours: 4 }
    ]
  },
  {
    protocolId: 'CP-PROTOCOL-119',
    protocolTitle: 'Evidence-Based Clinical Protocol Pathway 119',
    specialty: 'Specialty 12',
    targetConditionCode: 'COND-119',
    evidenceGrade: 'B',
    steps: [
      { stepNumber: 1, actionDescription: 'Initial clinical assessment and baseline laboratory evaluation', mandatory: true, timingWindowHours: 1 },
      { stepNumber: 2, actionDescription: 'Administration of first-line therapeutic intervention', mandatory: true, timingWindowHours: 2 },
      { stepNumber: 3, actionDescription: 'Re-evaluation of vital telemetry and early warning score', mandatory: true, timingWindowHours: 4 }
    ]
  },
  {
    protocolId: 'CP-PROTOCOL-120',
    protocolTitle: 'Evidence-Based Clinical Protocol Pathway 120',
    specialty: 'Specialty 1',
    targetConditionCode: 'COND-120',
    evidenceGrade: 'A',
    steps: [
      { stepNumber: 1, actionDescription: 'Initial clinical assessment and baseline laboratory evaluation', mandatory: true, timingWindowHours: 1 },
      { stepNumber: 2, actionDescription: 'Administration of first-line therapeutic intervention', mandatory: true, timingWindowHours: 2 },
      { stepNumber: 3, actionDescription: 'Re-evaluation of vital telemetry and early warning score', mandatory: true, timingWindowHours: 4 }
    ]
  },
  {
    protocolId: 'CP-PROTOCOL-121',
    protocolTitle: 'Evidence-Based Clinical Protocol Pathway 121',
    specialty: 'Specialty 2',
    targetConditionCode: 'COND-121',
    evidenceGrade: 'B',
    steps: [
      { stepNumber: 1, actionDescription: 'Initial clinical assessment and baseline laboratory evaluation', mandatory: true, timingWindowHours: 1 },
      { stepNumber: 2, actionDescription: 'Administration of first-line therapeutic intervention', mandatory: true, timingWindowHours: 2 },
      { stepNumber: 3, actionDescription: 'Re-evaluation of vital telemetry and early warning score', mandatory: true, timingWindowHours: 4 }
    ]
  },
  {
    protocolId: 'CP-PROTOCOL-122',
    protocolTitle: 'Evidence-Based Clinical Protocol Pathway 122',
    specialty: 'Specialty 3',
    targetConditionCode: 'COND-122',
    evidenceGrade: 'A',
    steps: [
      { stepNumber: 1, actionDescription: 'Initial clinical assessment and baseline laboratory evaluation', mandatory: true, timingWindowHours: 1 },
      { stepNumber: 2, actionDescription: 'Administration of first-line therapeutic intervention', mandatory: true, timingWindowHours: 2 },
      { stepNumber: 3, actionDescription: 'Re-evaluation of vital telemetry and early warning score', mandatory: true, timingWindowHours: 4 }
    ]
  },
  {
    protocolId: 'CP-PROTOCOL-123',
    protocolTitle: 'Evidence-Based Clinical Protocol Pathway 123',
    specialty: 'Specialty 4',
    targetConditionCode: 'COND-123',
    evidenceGrade: 'B',
    steps: [
      { stepNumber: 1, actionDescription: 'Initial clinical assessment and baseline laboratory evaluation', mandatory: true, timingWindowHours: 1 },
      { stepNumber: 2, actionDescription: 'Administration of first-line therapeutic intervention', mandatory: true, timingWindowHours: 2 },
      { stepNumber: 3, actionDescription: 'Re-evaluation of vital telemetry and early warning score', mandatory: true, timingWindowHours: 4 }
    ]
  },
  {
    protocolId: 'CP-PROTOCOL-124',
    protocolTitle: 'Evidence-Based Clinical Protocol Pathway 124',
    specialty: 'Specialty 5',
    targetConditionCode: 'COND-124',
    evidenceGrade: 'A',
    steps: [
      { stepNumber: 1, actionDescription: 'Initial clinical assessment and baseline laboratory evaluation', mandatory: true, timingWindowHours: 1 },
      { stepNumber: 2, actionDescription: 'Administration of first-line therapeutic intervention', mandatory: true, timingWindowHours: 2 },
      { stepNumber: 3, actionDescription: 'Re-evaluation of vital telemetry and early warning score', mandatory: true, timingWindowHours: 4 }
    ]
  },
  {
    protocolId: 'CP-PROTOCOL-125',
    protocolTitle: 'Evidence-Based Clinical Protocol Pathway 125',
    specialty: 'Specialty 6',
    targetConditionCode: 'COND-125',
    evidenceGrade: 'B',
    steps: [
      { stepNumber: 1, actionDescription: 'Initial clinical assessment and baseline laboratory evaluation', mandatory: true, timingWindowHours: 1 },
      { stepNumber: 2, actionDescription: 'Administration of first-line therapeutic intervention', mandatory: true, timingWindowHours: 2 },
      { stepNumber: 3, actionDescription: 'Re-evaluation of vital telemetry and early warning score', mandatory: true, timingWindowHours: 4 }
    ]
  },
  {
    protocolId: 'CP-PROTOCOL-126',
    protocolTitle: 'Evidence-Based Clinical Protocol Pathway 126',
    specialty: 'Specialty 7',
    targetConditionCode: 'COND-126',
    evidenceGrade: 'A',
    steps: [
      { stepNumber: 1, actionDescription: 'Initial clinical assessment and baseline laboratory evaluation', mandatory: true, timingWindowHours: 1 },
      { stepNumber: 2, actionDescription: 'Administration of first-line therapeutic intervention', mandatory: true, timingWindowHours: 2 },
      { stepNumber: 3, actionDescription: 'Re-evaluation of vital telemetry and early warning score', mandatory: true, timingWindowHours: 4 }
    ]
  },
  {
    protocolId: 'CP-PROTOCOL-127',
    protocolTitle: 'Evidence-Based Clinical Protocol Pathway 127',
    specialty: 'Specialty 8',
    targetConditionCode: 'COND-127',
    evidenceGrade: 'B',
    steps: [
      { stepNumber: 1, actionDescription: 'Initial clinical assessment and baseline laboratory evaluation', mandatory: true, timingWindowHours: 1 },
      { stepNumber: 2, actionDescription: 'Administration of first-line therapeutic intervention', mandatory: true, timingWindowHours: 2 },
      { stepNumber: 3, actionDescription: 'Re-evaluation of vital telemetry and early warning score', mandatory: true, timingWindowHours: 4 }
    ]
  },
  {
    protocolId: 'CP-PROTOCOL-128',
    protocolTitle: 'Evidence-Based Clinical Protocol Pathway 128',
    specialty: 'Specialty 9',
    targetConditionCode: 'COND-128',
    evidenceGrade: 'A',
    steps: [
      { stepNumber: 1, actionDescription: 'Initial clinical assessment and baseline laboratory evaluation', mandatory: true, timingWindowHours: 1 },
      { stepNumber: 2, actionDescription: 'Administration of first-line therapeutic intervention', mandatory: true, timingWindowHours: 2 },
      { stepNumber: 3, actionDescription: 'Re-evaluation of vital telemetry and early warning score', mandatory: true, timingWindowHours: 4 }
    ]
  },
  {
    protocolId: 'CP-PROTOCOL-129',
    protocolTitle: 'Evidence-Based Clinical Protocol Pathway 129',
    specialty: 'Specialty 10',
    targetConditionCode: 'COND-129',
    evidenceGrade: 'B',
    steps: [
      { stepNumber: 1, actionDescription: 'Initial clinical assessment and baseline laboratory evaluation', mandatory: true, timingWindowHours: 1 },
      { stepNumber: 2, actionDescription: 'Administration of first-line therapeutic intervention', mandatory: true, timingWindowHours: 2 },
      { stepNumber: 3, actionDescription: 'Re-evaluation of vital telemetry and early warning score', mandatory: true, timingWindowHours: 4 }
    ]
  },
  {
    protocolId: 'CP-PROTOCOL-130',
    protocolTitle: 'Evidence-Based Clinical Protocol Pathway 130',
    specialty: 'Specialty 11',
    targetConditionCode: 'COND-130',
    evidenceGrade: 'A',
    steps: [
      { stepNumber: 1, actionDescription: 'Initial clinical assessment and baseline laboratory evaluation', mandatory: true, timingWindowHours: 1 },
      { stepNumber: 2, actionDescription: 'Administration of first-line therapeutic intervention', mandatory: true, timingWindowHours: 2 },
      { stepNumber: 3, actionDescription: 'Re-evaluation of vital telemetry and early warning score', mandatory: true, timingWindowHours: 4 }
    ]
  },
  {
    protocolId: 'CP-PROTOCOL-131',
    protocolTitle: 'Evidence-Based Clinical Protocol Pathway 131',
    specialty: 'Specialty 12',
    targetConditionCode: 'COND-131',
    evidenceGrade: 'B',
    steps: [
      { stepNumber: 1, actionDescription: 'Initial clinical assessment and baseline laboratory evaluation', mandatory: true, timingWindowHours: 1 },
      { stepNumber: 2, actionDescription: 'Administration of first-line therapeutic intervention', mandatory: true, timingWindowHours: 2 },
      { stepNumber: 3, actionDescription: 'Re-evaluation of vital telemetry and early warning score', mandatory: true, timingWindowHours: 4 }
    ]
  },
  {
    protocolId: 'CP-PROTOCOL-132',
    protocolTitle: 'Evidence-Based Clinical Protocol Pathway 132',
    specialty: 'Specialty 1',
    targetConditionCode: 'COND-132',
    evidenceGrade: 'A',
    steps: [
      { stepNumber: 1, actionDescription: 'Initial clinical assessment and baseline laboratory evaluation', mandatory: true, timingWindowHours: 1 },
      { stepNumber: 2, actionDescription: 'Administration of first-line therapeutic intervention', mandatory: true, timingWindowHours: 2 },
      { stepNumber: 3, actionDescription: 'Re-evaluation of vital telemetry and early warning score', mandatory: true, timingWindowHours: 4 }
    ]
  },
  {
    protocolId: 'CP-PROTOCOL-133',
    protocolTitle: 'Evidence-Based Clinical Protocol Pathway 133',
    specialty: 'Specialty 2',
    targetConditionCode: 'COND-133',
    evidenceGrade: 'B',
    steps: [
      { stepNumber: 1, actionDescription: 'Initial clinical assessment and baseline laboratory evaluation', mandatory: true, timingWindowHours: 1 },
      { stepNumber: 2, actionDescription: 'Administration of first-line therapeutic intervention', mandatory: true, timingWindowHours: 2 },
      { stepNumber: 3, actionDescription: 'Re-evaluation of vital telemetry and early warning score', mandatory: true, timingWindowHours: 4 }
    ]
  },
  {
    protocolId: 'CP-PROTOCOL-134',
    protocolTitle: 'Evidence-Based Clinical Protocol Pathway 134',
    specialty: 'Specialty 3',
    targetConditionCode: 'COND-134',
    evidenceGrade: 'A',
    steps: [
      { stepNumber: 1, actionDescription: 'Initial clinical assessment and baseline laboratory evaluation', mandatory: true, timingWindowHours: 1 },
      { stepNumber: 2, actionDescription: 'Administration of first-line therapeutic intervention', mandatory: true, timingWindowHours: 2 },
      { stepNumber: 3, actionDescription: 'Re-evaluation of vital telemetry and early warning score', mandatory: true, timingWindowHours: 4 }
    ]
  },
  {
    protocolId: 'CP-PROTOCOL-135',
    protocolTitle: 'Evidence-Based Clinical Protocol Pathway 135',
    specialty: 'Specialty 4',
    targetConditionCode: 'COND-135',
    evidenceGrade: 'B',
    steps: [
      { stepNumber: 1, actionDescription: 'Initial clinical assessment and baseline laboratory evaluation', mandatory: true, timingWindowHours: 1 },
      { stepNumber: 2, actionDescription: 'Administration of first-line therapeutic intervention', mandatory: true, timingWindowHours: 2 },
      { stepNumber: 3, actionDescription: 'Re-evaluation of vital telemetry and early warning score', mandatory: true, timingWindowHours: 4 }
    ]
  },
  {
    protocolId: 'CP-PROTOCOL-136',
    protocolTitle: 'Evidence-Based Clinical Protocol Pathway 136',
    specialty: 'Specialty 5',
    targetConditionCode: 'COND-136',
    evidenceGrade: 'A',
    steps: [
      { stepNumber: 1, actionDescription: 'Initial clinical assessment and baseline laboratory evaluation', mandatory: true, timingWindowHours: 1 },
      { stepNumber: 2, actionDescription: 'Administration of first-line therapeutic intervention', mandatory: true, timingWindowHours: 2 },
      { stepNumber: 3, actionDescription: 'Re-evaluation of vital telemetry and early warning score', mandatory: true, timingWindowHours: 4 }
    ]
  },
  {
    protocolId: 'CP-PROTOCOL-137',
    protocolTitle: 'Evidence-Based Clinical Protocol Pathway 137',
    specialty: 'Specialty 6',
    targetConditionCode: 'COND-137',
    evidenceGrade: 'B',
    steps: [
      { stepNumber: 1, actionDescription: 'Initial clinical assessment and baseline laboratory evaluation', mandatory: true, timingWindowHours: 1 },
      { stepNumber: 2, actionDescription: 'Administration of first-line therapeutic intervention', mandatory: true, timingWindowHours: 2 },
      { stepNumber: 3, actionDescription: 'Re-evaluation of vital telemetry and early warning score', mandatory: true, timingWindowHours: 4 }
    ]
  },
  {
    protocolId: 'CP-PROTOCOL-138',
    protocolTitle: 'Evidence-Based Clinical Protocol Pathway 138',
    specialty: 'Specialty 7',
    targetConditionCode: 'COND-138',
    evidenceGrade: 'A',
    steps: [
      { stepNumber: 1, actionDescription: 'Initial clinical assessment and baseline laboratory evaluation', mandatory: true, timingWindowHours: 1 },
      { stepNumber: 2, actionDescription: 'Administration of first-line therapeutic intervention', mandatory: true, timingWindowHours: 2 },
      { stepNumber: 3, actionDescription: 'Re-evaluation of vital telemetry and early warning score', mandatory: true, timingWindowHours: 4 }
    ]
  },
  {
    protocolId: 'CP-PROTOCOL-139',
    protocolTitle: 'Evidence-Based Clinical Protocol Pathway 139',
    specialty: 'Specialty 8',
    targetConditionCode: 'COND-139',
    evidenceGrade: 'B',
    steps: [
      { stepNumber: 1, actionDescription: 'Initial clinical assessment and baseline laboratory evaluation', mandatory: true, timingWindowHours: 1 },
      { stepNumber: 2, actionDescription: 'Administration of first-line therapeutic intervention', mandatory: true, timingWindowHours: 2 },
      { stepNumber: 3, actionDescription: 'Re-evaluation of vital telemetry and early warning score', mandatory: true, timingWindowHours: 4 }
    ]
  },
  {
    protocolId: 'CP-PROTOCOL-140',
    protocolTitle: 'Evidence-Based Clinical Protocol Pathway 140',
    specialty: 'Specialty 9',
    targetConditionCode: 'COND-140',
    evidenceGrade: 'A',
    steps: [
      { stepNumber: 1, actionDescription: 'Initial clinical assessment and baseline laboratory evaluation', mandatory: true, timingWindowHours: 1 },
      { stepNumber: 2, actionDescription: 'Administration of first-line therapeutic intervention', mandatory: true, timingWindowHours: 2 },
      { stepNumber: 3, actionDescription: 'Re-evaluation of vital telemetry and early warning score', mandatory: true, timingWindowHours: 4 }
    ]
  },
  {
    protocolId: 'CP-PROTOCOL-141',
    protocolTitle: 'Evidence-Based Clinical Protocol Pathway 141',
    specialty: 'Specialty 10',
    targetConditionCode: 'COND-141',
    evidenceGrade: 'B',
    steps: [
      { stepNumber: 1, actionDescription: 'Initial clinical assessment and baseline laboratory evaluation', mandatory: true, timingWindowHours: 1 },
      { stepNumber: 2, actionDescription: 'Administration of first-line therapeutic intervention', mandatory: true, timingWindowHours: 2 },
      { stepNumber: 3, actionDescription: 'Re-evaluation of vital telemetry and early warning score', mandatory: true, timingWindowHours: 4 }
    ]
  },
  {
    protocolId: 'CP-PROTOCOL-142',
    protocolTitle: 'Evidence-Based Clinical Protocol Pathway 142',
    specialty: 'Specialty 11',
    targetConditionCode: 'COND-142',
    evidenceGrade: 'A',
    steps: [
      { stepNumber: 1, actionDescription: 'Initial clinical assessment and baseline laboratory evaluation', mandatory: true, timingWindowHours: 1 },
      { stepNumber: 2, actionDescription: 'Administration of first-line therapeutic intervention', mandatory: true, timingWindowHours: 2 },
      { stepNumber: 3, actionDescription: 'Re-evaluation of vital telemetry and early warning score', mandatory: true, timingWindowHours: 4 }
    ]
  },
  {
    protocolId: 'CP-PROTOCOL-143',
    protocolTitle: 'Evidence-Based Clinical Protocol Pathway 143',
    specialty: 'Specialty 12',
    targetConditionCode: 'COND-143',
    evidenceGrade: 'B',
    steps: [
      { stepNumber: 1, actionDescription: 'Initial clinical assessment and baseline laboratory evaluation', mandatory: true, timingWindowHours: 1 },
      { stepNumber: 2, actionDescription: 'Administration of first-line therapeutic intervention', mandatory: true, timingWindowHours: 2 },
      { stepNumber: 3, actionDescription: 'Re-evaluation of vital telemetry and early warning score', mandatory: true, timingWindowHours: 4 }
    ]
  },
  {
    protocolId: 'CP-PROTOCOL-144',
    protocolTitle: 'Evidence-Based Clinical Protocol Pathway 144',
    specialty: 'Specialty 1',
    targetConditionCode: 'COND-144',
    evidenceGrade: 'A',
    steps: [
      { stepNumber: 1, actionDescription: 'Initial clinical assessment and baseline laboratory evaluation', mandatory: true, timingWindowHours: 1 },
      { stepNumber: 2, actionDescription: 'Administration of first-line therapeutic intervention', mandatory: true, timingWindowHours: 2 },
      { stepNumber: 3, actionDescription: 'Re-evaluation of vital telemetry and early warning score', mandatory: true, timingWindowHours: 4 }
    ]
  },
  {
    protocolId: 'CP-PROTOCOL-145',
    protocolTitle: 'Evidence-Based Clinical Protocol Pathway 145',
    specialty: 'Specialty 2',
    targetConditionCode: 'COND-145',
    evidenceGrade: 'B',
    steps: [
      { stepNumber: 1, actionDescription: 'Initial clinical assessment and baseline laboratory evaluation', mandatory: true, timingWindowHours: 1 },
      { stepNumber: 2, actionDescription: 'Administration of first-line therapeutic intervention', mandatory: true, timingWindowHours: 2 },
      { stepNumber: 3, actionDescription: 'Re-evaluation of vital telemetry and early warning score', mandatory: true, timingWindowHours: 4 }
    ]
  },
  {
    protocolId: 'CP-PROTOCOL-146',
    protocolTitle: 'Evidence-Based Clinical Protocol Pathway 146',
    specialty: 'Specialty 3',
    targetConditionCode: 'COND-146',
    evidenceGrade: 'A',
    steps: [
      { stepNumber: 1, actionDescription: 'Initial clinical assessment and baseline laboratory evaluation', mandatory: true, timingWindowHours: 1 },
      { stepNumber: 2, actionDescription: 'Administration of first-line therapeutic intervention', mandatory: true, timingWindowHours: 2 },
      { stepNumber: 3, actionDescription: 'Re-evaluation of vital telemetry and early warning score', mandatory: true, timingWindowHours: 4 }
    ]
  },
  {
    protocolId: 'CP-PROTOCOL-147',
    protocolTitle: 'Evidence-Based Clinical Protocol Pathway 147',
    specialty: 'Specialty 4',
    targetConditionCode: 'COND-147',
    evidenceGrade: 'B',
    steps: [
      { stepNumber: 1, actionDescription: 'Initial clinical assessment and baseline laboratory evaluation', mandatory: true, timingWindowHours: 1 },
      { stepNumber: 2, actionDescription: 'Administration of first-line therapeutic intervention', mandatory: true, timingWindowHours: 2 },
      { stepNumber: 3, actionDescription: 'Re-evaluation of vital telemetry and early warning score', mandatory: true, timingWindowHours: 4 }
    ]
  },
  {
    protocolId: 'CP-PROTOCOL-148',
    protocolTitle: 'Evidence-Based Clinical Protocol Pathway 148',
    specialty: 'Specialty 5',
    targetConditionCode: 'COND-148',
    evidenceGrade: 'A',
    steps: [
      { stepNumber: 1, actionDescription: 'Initial clinical assessment and baseline laboratory evaluation', mandatory: true, timingWindowHours: 1 },
      { stepNumber: 2, actionDescription: 'Administration of first-line therapeutic intervention', mandatory: true, timingWindowHours: 2 },
      { stepNumber: 3, actionDescription: 'Re-evaluation of vital telemetry and early warning score', mandatory: true, timingWindowHours: 4 }
    ]
  },
  {
    protocolId: 'CP-PROTOCOL-149',
    protocolTitle: 'Evidence-Based Clinical Protocol Pathway 149',
    specialty: 'Specialty 6',
    targetConditionCode: 'COND-149',
    evidenceGrade: 'B',
    steps: [
      { stepNumber: 1, actionDescription: 'Initial clinical assessment and baseline laboratory evaluation', mandatory: true, timingWindowHours: 1 },
      { stepNumber: 2, actionDescription: 'Administration of first-line therapeutic intervention', mandatory: true, timingWindowHours: 2 },
      { stepNumber: 3, actionDescription: 'Re-evaluation of vital telemetry and early warning score', mandatory: true, timingWindowHours: 4 }
    ]
  },
  {
    protocolId: 'CP-PROTOCOL-150',
    protocolTitle: 'Evidence-Based Clinical Protocol Pathway 150',
    specialty: 'Specialty 7',
    targetConditionCode: 'COND-150',
    evidenceGrade: 'A',
    steps: [
      { stepNumber: 1, actionDescription: 'Initial clinical assessment and baseline laboratory evaluation', mandatory: true, timingWindowHours: 1 },
      { stepNumber: 2, actionDescription: 'Administration of first-line therapeutic intervention', mandatory: true, timingWindowHours: 2 },
      { stepNumber: 3, actionDescription: 'Re-evaluation of vital telemetry and early warning score', mandatory: true, timingWindowHours: 4 }
    ]
  },
  {
    protocolId: 'CP-PROTOCOL-151',
    protocolTitle: 'Evidence-Based Clinical Protocol Pathway 151',
    specialty: 'Specialty 8',
    targetConditionCode: 'COND-151',
    evidenceGrade: 'B',
    steps: [
      { stepNumber: 1, actionDescription: 'Initial clinical assessment and baseline laboratory evaluation', mandatory: true, timingWindowHours: 1 },
      { stepNumber: 2, actionDescription: 'Administration of first-line therapeutic intervention', mandatory: true, timingWindowHours: 2 },
      { stepNumber: 3, actionDescription: 'Re-evaluation of vital telemetry and early warning score', mandatory: true, timingWindowHours: 4 }
    ]
  },
  {
    protocolId: 'CP-PROTOCOL-152',
    protocolTitle: 'Evidence-Based Clinical Protocol Pathway 152',
    specialty: 'Specialty 9',
    targetConditionCode: 'COND-152',
    evidenceGrade: 'A',
    steps: [
      { stepNumber: 1, actionDescription: 'Initial clinical assessment and baseline laboratory evaluation', mandatory: true, timingWindowHours: 1 },
      { stepNumber: 2, actionDescription: 'Administration of first-line therapeutic intervention', mandatory: true, timingWindowHours: 2 },
      { stepNumber: 3, actionDescription: 'Re-evaluation of vital telemetry and early warning score', mandatory: true, timingWindowHours: 4 }
    ]
  },
  {
    protocolId: 'CP-PROTOCOL-153',
    protocolTitle: 'Evidence-Based Clinical Protocol Pathway 153',
    specialty: 'Specialty 10',
    targetConditionCode: 'COND-153',
    evidenceGrade: 'B',
    steps: [
      { stepNumber: 1, actionDescription: 'Initial clinical assessment and baseline laboratory evaluation', mandatory: true, timingWindowHours: 1 },
      { stepNumber: 2, actionDescription: 'Administration of first-line therapeutic intervention', mandatory: true, timingWindowHours: 2 },
      { stepNumber: 3, actionDescription: 'Re-evaluation of vital telemetry and early warning score', mandatory: true, timingWindowHours: 4 }
    ]
  },
  {
    protocolId: 'CP-PROTOCOL-154',
    protocolTitle: 'Evidence-Based Clinical Protocol Pathway 154',
    specialty: 'Specialty 11',
    targetConditionCode: 'COND-154',
    evidenceGrade: 'A',
    steps: [
      { stepNumber: 1, actionDescription: 'Initial clinical assessment and baseline laboratory evaluation', mandatory: true, timingWindowHours: 1 },
      { stepNumber: 2, actionDescription: 'Administration of first-line therapeutic intervention', mandatory: true, timingWindowHours: 2 },
      { stepNumber: 3, actionDescription: 'Re-evaluation of vital telemetry and early warning score', mandatory: true, timingWindowHours: 4 }
    ]
  },
  {
    protocolId: 'CP-PROTOCOL-155',
    protocolTitle: 'Evidence-Based Clinical Protocol Pathway 155',
    specialty: 'Specialty 12',
    targetConditionCode: 'COND-155',
    evidenceGrade: 'B',
    steps: [
      { stepNumber: 1, actionDescription: 'Initial clinical assessment and baseline laboratory evaluation', mandatory: true, timingWindowHours: 1 },
      { stepNumber: 2, actionDescription: 'Administration of first-line therapeutic intervention', mandatory: true, timingWindowHours: 2 },
      { stepNumber: 3, actionDescription: 'Re-evaluation of vital telemetry and early warning score', mandatory: true, timingWindowHours: 4 }
    ]
  },
  {
    protocolId: 'CP-PROTOCOL-156',
    protocolTitle: 'Evidence-Based Clinical Protocol Pathway 156',
    specialty: 'Specialty 1',
    targetConditionCode: 'COND-156',
    evidenceGrade: 'A',
    steps: [
      { stepNumber: 1, actionDescription: 'Initial clinical assessment and baseline laboratory evaluation', mandatory: true, timingWindowHours: 1 },
      { stepNumber: 2, actionDescription: 'Administration of first-line therapeutic intervention', mandatory: true, timingWindowHours: 2 },
      { stepNumber: 3, actionDescription: 'Re-evaluation of vital telemetry and early warning score', mandatory: true, timingWindowHours: 4 }
    ]
  },
  {
    protocolId: 'CP-PROTOCOL-157',
    protocolTitle: 'Evidence-Based Clinical Protocol Pathway 157',
    specialty: 'Specialty 2',
    targetConditionCode: 'COND-157',
    evidenceGrade: 'B',
    steps: [
      { stepNumber: 1, actionDescription: 'Initial clinical assessment and baseline laboratory evaluation', mandatory: true, timingWindowHours: 1 },
      { stepNumber: 2, actionDescription: 'Administration of first-line therapeutic intervention', mandatory: true, timingWindowHours: 2 },
      { stepNumber: 3, actionDescription: 'Re-evaluation of vital telemetry and early warning score', mandatory: true, timingWindowHours: 4 }
    ]
  },
  {
    protocolId: 'CP-PROTOCOL-158',
    protocolTitle: 'Evidence-Based Clinical Protocol Pathway 158',
    specialty: 'Specialty 3',
    targetConditionCode: 'COND-158',
    evidenceGrade: 'A',
    steps: [
      { stepNumber: 1, actionDescription: 'Initial clinical assessment and baseline laboratory evaluation', mandatory: true, timingWindowHours: 1 },
      { stepNumber: 2, actionDescription: 'Administration of first-line therapeutic intervention', mandatory: true, timingWindowHours: 2 },
      { stepNumber: 3, actionDescription: 'Re-evaluation of vital telemetry and early warning score', mandatory: true, timingWindowHours: 4 }
    ]
  },
  {
    protocolId: 'CP-PROTOCOL-159',
    protocolTitle: 'Evidence-Based Clinical Protocol Pathway 159',
    specialty: 'Specialty 4',
    targetConditionCode: 'COND-159',
    evidenceGrade: 'B',
    steps: [
      { stepNumber: 1, actionDescription: 'Initial clinical assessment and baseline laboratory evaluation', mandatory: true, timingWindowHours: 1 },
      { stepNumber: 2, actionDescription: 'Administration of first-line therapeutic intervention', mandatory: true, timingWindowHours: 2 },
      { stepNumber: 3, actionDescription: 'Re-evaluation of vital telemetry and early warning score', mandatory: true, timingWindowHours: 4 }
    ]
  },
  {
    protocolId: 'CP-PROTOCOL-160',
    protocolTitle: 'Evidence-Based Clinical Protocol Pathway 160',
    specialty: 'Specialty 5',
    targetConditionCode: 'COND-160',
    evidenceGrade: 'A',
    steps: [
      { stepNumber: 1, actionDescription: 'Initial clinical assessment and baseline laboratory evaluation', mandatory: true, timingWindowHours: 1 },
      { stepNumber: 2, actionDescription: 'Administration of first-line therapeutic intervention', mandatory: true, timingWindowHours: 2 },
      { stepNumber: 3, actionDescription: 'Re-evaluation of vital telemetry and early warning score', mandatory: true, timingWindowHours: 4 }
    ]
  },
  {
    protocolId: 'CP-PROTOCOL-161',
    protocolTitle: 'Evidence-Based Clinical Protocol Pathway 161',
    specialty: 'Specialty 6',
    targetConditionCode: 'COND-161',
    evidenceGrade: 'B',
    steps: [
      { stepNumber: 1, actionDescription: 'Initial clinical assessment and baseline laboratory evaluation', mandatory: true, timingWindowHours: 1 },
      { stepNumber: 2, actionDescription: 'Administration of first-line therapeutic intervention', mandatory: true, timingWindowHours: 2 },
      { stepNumber: 3, actionDescription: 'Re-evaluation of vital telemetry and early warning score', mandatory: true, timingWindowHours: 4 }
    ]
  },
  {
    protocolId: 'CP-PROTOCOL-162',
    protocolTitle: 'Evidence-Based Clinical Protocol Pathway 162',
    specialty: 'Specialty 7',
    targetConditionCode: 'COND-162',
    evidenceGrade: 'A',
    steps: [
      { stepNumber: 1, actionDescription: 'Initial clinical assessment and baseline laboratory evaluation', mandatory: true, timingWindowHours: 1 },
      { stepNumber: 2, actionDescription: 'Administration of first-line therapeutic intervention', mandatory: true, timingWindowHours: 2 },
      { stepNumber: 3, actionDescription: 'Re-evaluation of vital telemetry and early warning score', mandatory: true, timingWindowHours: 4 }
    ]
  },
  {
    protocolId: 'CP-PROTOCOL-163',
    protocolTitle: 'Evidence-Based Clinical Protocol Pathway 163',
    specialty: 'Specialty 8',
    targetConditionCode: 'COND-163',
    evidenceGrade: 'B',
    steps: [
      { stepNumber: 1, actionDescription: 'Initial clinical assessment and baseline laboratory evaluation', mandatory: true, timingWindowHours: 1 },
      { stepNumber: 2, actionDescription: 'Administration of first-line therapeutic intervention', mandatory: true, timingWindowHours: 2 },
      { stepNumber: 3, actionDescription: 'Re-evaluation of vital telemetry and early warning score', mandatory: true, timingWindowHours: 4 }
    ]
  },
  {
    protocolId: 'CP-PROTOCOL-164',
    protocolTitle: 'Evidence-Based Clinical Protocol Pathway 164',
    specialty: 'Specialty 9',
    targetConditionCode: 'COND-164',
    evidenceGrade: 'A',
    steps: [
      { stepNumber: 1, actionDescription: 'Initial clinical assessment and baseline laboratory evaluation', mandatory: true, timingWindowHours: 1 },
      { stepNumber: 2, actionDescription: 'Administration of first-line therapeutic intervention', mandatory: true, timingWindowHours: 2 },
      { stepNumber: 3, actionDescription: 'Re-evaluation of vital telemetry and early warning score', mandatory: true, timingWindowHours: 4 }
    ]
  },
  {
    protocolId: 'CP-PROTOCOL-165',
    protocolTitle: 'Evidence-Based Clinical Protocol Pathway 165',
    specialty: 'Specialty 10',
    targetConditionCode: 'COND-165',
    evidenceGrade: 'B',
    steps: [
      { stepNumber: 1, actionDescription: 'Initial clinical assessment and baseline laboratory evaluation', mandatory: true, timingWindowHours: 1 },
      { stepNumber: 2, actionDescription: 'Administration of first-line therapeutic intervention', mandatory: true, timingWindowHours: 2 },
      { stepNumber: 3, actionDescription: 'Re-evaluation of vital telemetry and early warning score', mandatory: true, timingWindowHours: 4 }
    ]
  },
  {
    protocolId: 'CP-PROTOCOL-166',
    protocolTitle: 'Evidence-Based Clinical Protocol Pathway 166',
    specialty: 'Specialty 11',
    targetConditionCode: 'COND-166',
    evidenceGrade: 'A',
    steps: [
      { stepNumber: 1, actionDescription: 'Initial clinical assessment and baseline laboratory evaluation', mandatory: true, timingWindowHours: 1 },
      { stepNumber: 2, actionDescription: 'Administration of first-line therapeutic intervention', mandatory: true, timingWindowHours: 2 },
      { stepNumber: 3, actionDescription: 'Re-evaluation of vital telemetry and early warning score', mandatory: true, timingWindowHours: 4 }
    ]
  },
  {
    protocolId: 'CP-PROTOCOL-167',
    protocolTitle: 'Evidence-Based Clinical Protocol Pathway 167',
    specialty: 'Specialty 12',
    targetConditionCode: 'COND-167',
    evidenceGrade: 'B',
    steps: [
      { stepNumber: 1, actionDescription: 'Initial clinical assessment and baseline laboratory evaluation', mandatory: true, timingWindowHours: 1 },
      { stepNumber: 2, actionDescription: 'Administration of first-line therapeutic intervention', mandatory: true, timingWindowHours: 2 },
      { stepNumber: 3, actionDescription: 'Re-evaluation of vital telemetry and early warning score', mandatory: true, timingWindowHours: 4 }
    ]
  },
  {
    protocolId: 'CP-PROTOCOL-168',
    protocolTitle: 'Evidence-Based Clinical Protocol Pathway 168',
    specialty: 'Specialty 1',
    targetConditionCode: 'COND-168',
    evidenceGrade: 'A',
    steps: [
      { stepNumber: 1, actionDescription: 'Initial clinical assessment and baseline laboratory evaluation', mandatory: true, timingWindowHours: 1 },
      { stepNumber: 2, actionDescription: 'Administration of first-line therapeutic intervention', mandatory: true, timingWindowHours: 2 },
      { stepNumber: 3, actionDescription: 'Re-evaluation of vital telemetry and early warning score', mandatory: true, timingWindowHours: 4 }
    ]
  },
  {
    protocolId: 'CP-PROTOCOL-169',
    protocolTitle: 'Evidence-Based Clinical Protocol Pathway 169',
    specialty: 'Specialty 2',
    targetConditionCode: 'COND-169',
    evidenceGrade: 'B',
    steps: [
      { stepNumber: 1, actionDescription: 'Initial clinical assessment and baseline laboratory evaluation', mandatory: true, timingWindowHours: 1 },
      { stepNumber: 2, actionDescription: 'Administration of first-line therapeutic intervention', mandatory: true, timingWindowHours: 2 },
      { stepNumber: 3, actionDescription: 'Re-evaluation of vital telemetry and early warning score', mandatory: true, timingWindowHours: 4 }
    ]
  },
  {
    protocolId: 'CP-PROTOCOL-170',
    protocolTitle: 'Evidence-Based Clinical Protocol Pathway 170',
    specialty: 'Specialty 3',
    targetConditionCode: 'COND-170',
    evidenceGrade: 'A',
    steps: [
      { stepNumber: 1, actionDescription: 'Initial clinical assessment and baseline laboratory evaluation', mandatory: true, timingWindowHours: 1 },
      { stepNumber: 2, actionDescription: 'Administration of first-line therapeutic intervention', mandatory: true, timingWindowHours: 2 },
      { stepNumber: 3, actionDescription: 'Re-evaluation of vital telemetry and early warning score', mandatory: true, timingWindowHours: 4 }
    ]
  },
  {
    protocolId: 'CP-PROTOCOL-171',
    protocolTitle: 'Evidence-Based Clinical Protocol Pathway 171',
    specialty: 'Specialty 4',
    targetConditionCode: 'COND-171',
    evidenceGrade: 'B',
    steps: [
      { stepNumber: 1, actionDescription: 'Initial clinical assessment and baseline laboratory evaluation', mandatory: true, timingWindowHours: 1 },
      { stepNumber: 2, actionDescription: 'Administration of first-line therapeutic intervention', mandatory: true, timingWindowHours: 2 },
      { stepNumber: 3, actionDescription: 'Re-evaluation of vital telemetry and early warning score', mandatory: true, timingWindowHours: 4 }
    ]
  },
  {
    protocolId: 'CP-PROTOCOL-172',
    protocolTitle: 'Evidence-Based Clinical Protocol Pathway 172',
    specialty: 'Specialty 5',
    targetConditionCode: 'COND-172',
    evidenceGrade: 'A',
    steps: [
      { stepNumber: 1, actionDescription: 'Initial clinical assessment and baseline laboratory evaluation', mandatory: true, timingWindowHours: 1 },
      { stepNumber: 2, actionDescription: 'Administration of first-line therapeutic intervention', mandatory: true, timingWindowHours: 2 },
      { stepNumber: 3, actionDescription: 'Re-evaluation of vital telemetry and early warning score', mandatory: true, timingWindowHours: 4 }
    ]
  },
  {
    protocolId: 'CP-PROTOCOL-173',
    protocolTitle: 'Evidence-Based Clinical Protocol Pathway 173',
    specialty: 'Specialty 6',
    targetConditionCode: 'COND-173',
    evidenceGrade: 'B',
    steps: [
      { stepNumber: 1, actionDescription: 'Initial clinical assessment and baseline laboratory evaluation', mandatory: true, timingWindowHours: 1 },
      { stepNumber: 2, actionDescription: 'Administration of first-line therapeutic intervention', mandatory: true, timingWindowHours: 2 },
      { stepNumber: 3, actionDescription: 'Re-evaluation of vital telemetry and early warning score', mandatory: true, timingWindowHours: 4 }
    ]
  },
  {
    protocolId: 'CP-PROTOCOL-174',
    protocolTitle: 'Evidence-Based Clinical Protocol Pathway 174',
    specialty: 'Specialty 7',
    targetConditionCode: 'COND-174',
    evidenceGrade: 'A',
    steps: [
      { stepNumber: 1, actionDescription: 'Initial clinical assessment and baseline laboratory evaluation', mandatory: true, timingWindowHours: 1 },
      { stepNumber: 2, actionDescription: 'Administration of first-line therapeutic intervention', mandatory: true, timingWindowHours: 2 },
      { stepNumber: 3, actionDescription: 'Re-evaluation of vital telemetry and early warning score', mandatory: true, timingWindowHours: 4 }
    ]
  },
  {
    protocolId: 'CP-PROTOCOL-175',
    protocolTitle: 'Evidence-Based Clinical Protocol Pathway 175',
    specialty: 'Specialty 8',
    targetConditionCode: 'COND-175',
    evidenceGrade: 'B',
    steps: [
      { stepNumber: 1, actionDescription: 'Initial clinical assessment and baseline laboratory evaluation', mandatory: true, timingWindowHours: 1 },
      { stepNumber: 2, actionDescription: 'Administration of first-line therapeutic intervention', mandatory: true, timingWindowHours: 2 },
      { stepNumber: 3, actionDescription: 'Re-evaluation of vital telemetry and early warning score', mandatory: true, timingWindowHours: 4 }
    ]
  },
  {
    protocolId: 'CP-PROTOCOL-176',
    protocolTitle: 'Evidence-Based Clinical Protocol Pathway 176',
    specialty: 'Specialty 9',
    targetConditionCode: 'COND-176',
    evidenceGrade: 'A',
    steps: [
      { stepNumber: 1, actionDescription: 'Initial clinical assessment and baseline laboratory evaluation', mandatory: true, timingWindowHours: 1 },
      { stepNumber: 2, actionDescription: 'Administration of first-line therapeutic intervention', mandatory: true, timingWindowHours: 2 },
      { stepNumber: 3, actionDescription: 'Re-evaluation of vital telemetry and early warning score', mandatory: true, timingWindowHours: 4 }
    ]
  },
  {
    protocolId: 'CP-PROTOCOL-177',
    protocolTitle: 'Evidence-Based Clinical Protocol Pathway 177',
    specialty: 'Specialty 10',
    targetConditionCode: 'COND-177',
    evidenceGrade: 'B',
    steps: [
      { stepNumber: 1, actionDescription: 'Initial clinical assessment and baseline laboratory evaluation', mandatory: true, timingWindowHours: 1 },
      { stepNumber: 2, actionDescription: 'Administration of first-line therapeutic intervention', mandatory: true, timingWindowHours: 2 },
      { stepNumber: 3, actionDescription: 'Re-evaluation of vital telemetry and early warning score', mandatory: true, timingWindowHours: 4 }
    ]
  },
  {
    protocolId: 'CP-PROTOCOL-178',
    protocolTitle: 'Evidence-Based Clinical Protocol Pathway 178',
    specialty: 'Specialty 11',
    targetConditionCode: 'COND-178',
    evidenceGrade: 'A',
    steps: [
      { stepNumber: 1, actionDescription: 'Initial clinical assessment and baseline laboratory evaluation', mandatory: true, timingWindowHours: 1 },
      { stepNumber: 2, actionDescription: 'Administration of first-line therapeutic intervention', mandatory: true, timingWindowHours: 2 },
      { stepNumber: 3, actionDescription: 'Re-evaluation of vital telemetry and early warning score', mandatory: true, timingWindowHours: 4 }
    ]
  },
  {
    protocolId: 'CP-PROTOCOL-179',
    protocolTitle: 'Evidence-Based Clinical Protocol Pathway 179',
    specialty: 'Specialty 12',
    targetConditionCode: 'COND-179',
    evidenceGrade: 'B',
    steps: [
      { stepNumber: 1, actionDescription: 'Initial clinical assessment and baseline laboratory evaluation', mandatory: true, timingWindowHours: 1 },
      { stepNumber: 2, actionDescription: 'Administration of first-line therapeutic intervention', mandatory: true, timingWindowHours: 2 },
      { stepNumber: 3, actionDescription: 'Re-evaluation of vital telemetry and early warning score', mandatory: true, timingWindowHours: 4 }
    ]
  },
  {
    protocolId: 'CP-PROTOCOL-180',
    protocolTitle: 'Evidence-Based Clinical Protocol Pathway 180',
    specialty: 'Specialty 1',
    targetConditionCode: 'COND-180',
    evidenceGrade: 'A',
    steps: [
      { stepNumber: 1, actionDescription: 'Initial clinical assessment and baseline laboratory evaluation', mandatory: true, timingWindowHours: 1 },
      { stepNumber: 2, actionDescription: 'Administration of first-line therapeutic intervention', mandatory: true, timingWindowHours: 2 },
      { stepNumber: 3, actionDescription: 'Re-evaluation of vital telemetry and early warning score', mandatory: true, timingWindowHours: 4 }
    ]
  },
  {
    protocolId: 'CP-PROTOCOL-181',
    protocolTitle: 'Evidence-Based Clinical Protocol Pathway 181',
    specialty: 'Specialty 2',
    targetConditionCode: 'COND-181',
    evidenceGrade: 'B',
    steps: [
      { stepNumber: 1, actionDescription: 'Initial clinical assessment and baseline laboratory evaluation', mandatory: true, timingWindowHours: 1 },
      { stepNumber: 2, actionDescription: 'Administration of first-line therapeutic intervention', mandatory: true, timingWindowHours: 2 },
      { stepNumber: 3, actionDescription: 'Re-evaluation of vital telemetry and early warning score', mandatory: true, timingWindowHours: 4 }
    ]
  },
  {
    protocolId: 'CP-PROTOCOL-182',
    protocolTitle: 'Evidence-Based Clinical Protocol Pathway 182',
    specialty: 'Specialty 3',
    targetConditionCode: 'COND-182',
    evidenceGrade: 'A',
    steps: [
      { stepNumber: 1, actionDescription: 'Initial clinical assessment and baseline laboratory evaluation', mandatory: true, timingWindowHours: 1 },
      { stepNumber: 2, actionDescription: 'Administration of first-line therapeutic intervention', mandatory: true, timingWindowHours: 2 },
      { stepNumber: 3, actionDescription: 'Re-evaluation of vital telemetry and early warning score', mandatory: true, timingWindowHours: 4 }
    ]
  },
  {
    protocolId: 'CP-PROTOCOL-183',
    protocolTitle: 'Evidence-Based Clinical Protocol Pathway 183',
    specialty: 'Specialty 4',
    targetConditionCode: 'COND-183',
    evidenceGrade: 'B',
    steps: [
      { stepNumber: 1, actionDescription: 'Initial clinical assessment and baseline laboratory evaluation', mandatory: true, timingWindowHours: 1 },
      { stepNumber: 2, actionDescription: 'Administration of first-line therapeutic intervention', mandatory: true, timingWindowHours: 2 },
      { stepNumber: 3, actionDescription: 'Re-evaluation of vital telemetry and early warning score', mandatory: true, timingWindowHours: 4 }
    ]
  },
  {
    protocolId: 'CP-PROTOCOL-184',
    protocolTitle: 'Evidence-Based Clinical Protocol Pathway 184',
    specialty: 'Specialty 5',
    targetConditionCode: 'COND-184',
    evidenceGrade: 'A',
    steps: [
      { stepNumber: 1, actionDescription: 'Initial clinical assessment and baseline laboratory evaluation', mandatory: true, timingWindowHours: 1 },
      { stepNumber: 2, actionDescription: 'Administration of first-line therapeutic intervention', mandatory: true, timingWindowHours: 2 },
      { stepNumber: 3, actionDescription: 'Re-evaluation of vital telemetry and early warning score', mandatory: true, timingWindowHours: 4 }
    ]
  },
  {
    protocolId: 'CP-PROTOCOL-185',
    protocolTitle: 'Evidence-Based Clinical Protocol Pathway 185',
    specialty: 'Specialty 6',
    targetConditionCode: 'COND-185',
    evidenceGrade: 'B',
    steps: [
      { stepNumber: 1, actionDescription: 'Initial clinical assessment and baseline laboratory evaluation', mandatory: true, timingWindowHours: 1 },
      { stepNumber: 2, actionDescription: 'Administration of first-line therapeutic intervention', mandatory: true, timingWindowHours: 2 },
      { stepNumber: 3, actionDescription: 'Re-evaluation of vital telemetry and early warning score', mandatory: true, timingWindowHours: 4 }
    ]
  },
  {
    protocolId: 'CP-PROTOCOL-186',
    protocolTitle: 'Evidence-Based Clinical Protocol Pathway 186',
    specialty: 'Specialty 7',
    targetConditionCode: 'COND-186',
    evidenceGrade: 'A',
    steps: [
      { stepNumber: 1, actionDescription: 'Initial clinical assessment and baseline laboratory evaluation', mandatory: true, timingWindowHours: 1 },
      { stepNumber: 2, actionDescription: 'Administration of first-line therapeutic intervention', mandatory: true, timingWindowHours: 2 },
      { stepNumber: 3, actionDescription: 'Re-evaluation of vital telemetry and early warning score', mandatory: true, timingWindowHours: 4 }
    ]
  },
  {
    protocolId: 'CP-PROTOCOL-187',
    protocolTitle: 'Evidence-Based Clinical Protocol Pathway 187',
    specialty: 'Specialty 8',
    targetConditionCode: 'COND-187',
    evidenceGrade: 'B',
    steps: [
      { stepNumber: 1, actionDescription: 'Initial clinical assessment and baseline laboratory evaluation', mandatory: true, timingWindowHours: 1 },
      { stepNumber: 2, actionDescription: 'Administration of first-line therapeutic intervention', mandatory: true, timingWindowHours: 2 },
      { stepNumber: 3, actionDescription: 'Re-evaluation of vital telemetry and early warning score', mandatory: true, timingWindowHours: 4 }
    ]
  },
  {
    protocolId: 'CP-PROTOCOL-188',
    protocolTitle: 'Evidence-Based Clinical Protocol Pathway 188',
    specialty: 'Specialty 9',
    targetConditionCode: 'COND-188',
    evidenceGrade: 'A',
    steps: [
      { stepNumber: 1, actionDescription: 'Initial clinical assessment and baseline laboratory evaluation', mandatory: true, timingWindowHours: 1 },
      { stepNumber: 2, actionDescription: 'Administration of first-line therapeutic intervention', mandatory: true, timingWindowHours: 2 },
      { stepNumber: 3, actionDescription: 'Re-evaluation of vital telemetry and early warning score', mandatory: true, timingWindowHours: 4 }
    ]
  },
  {
    protocolId: 'CP-PROTOCOL-189',
    protocolTitle: 'Evidence-Based Clinical Protocol Pathway 189',
    specialty: 'Specialty 10',
    targetConditionCode: 'COND-189',
    evidenceGrade: 'B',
    steps: [
      { stepNumber: 1, actionDescription: 'Initial clinical assessment and baseline laboratory evaluation', mandatory: true, timingWindowHours: 1 },
      { stepNumber: 2, actionDescription: 'Administration of first-line therapeutic intervention', mandatory: true, timingWindowHours: 2 },
      { stepNumber: 3, actionDescription: 'Re-evaluation of vital telemetry and early warning score', mandatory: true, timingWindowHours: 4 }
    ]
  },
  {
    protocolId: 'CP-PROTOCOL-190',
    protocolTitle: 'Evidence-Based Clinical Protocol Pathway 190',
    specialty: 'Specialty 11',
    targetConditionCode: 'COND-190',
    evidenceGrade: 'A',
    steps: [
      { stepNumber: 1, actionDescription: 'Initial clinical assessment and baseline laboratory evaluation', mandatory: true, timingWindowHours: 1 },
      { stepNumber: 2, actionDescription: 'Administration of first-line therapeutic intervention', mandatory: true, timingWindowHours: 2 },
      { stepNumber: 3, actionDescription: 'Re-evaluation of vital telemetry and early warning score', mandatory: true, timingWindowHours: 4 }
    ]
  },
  {
    protocolId: 'CP-PROTOCOL-191',
    protocolTitle: 'Evidence-Based Clinical Protocol Pathway 191',
    specialty: 'Specialty 12',
    targetConditionCode: 'COND-191',
    evidenceGrade: 'B',
    steps: [
      { stepNumber: 1, actionDescription: 'Initial clinical assessment and baseline laboratory evaluation', mandatory: true, timingWindowHours: 1 },
      { stepNumber: 2, actionDescription: 'Administration of first-line therapeutic intervention', mandatory: true, timingWindowHours: 2 },
      { stepNumber: 3, actionDescription: 'Re-evaluation of vital telemetry and early warning score', mandatory: true, timingWindowHours: 4 }
    ]
  },
  {
    protocolId: 'CP-PROTOCOL-192',
    protocolTitle: 'Evidence-Based Clinical Protocol Pathway 192',
    specialty: 'Specialty 1',
    targetConditionCode: 'COND-192',
    evidenceGrade: 'A',
    steps: [
      { stepNumber: 1, actionDescription: 'Initial clinical assessment and baseline laboratory evaluation', mandatory: true, timingWindowHours: 1 },
      { stepNumber: 2, actionDescription: 'Administration of first-line therapeutic intervention', mandatory: true, timingWindowHours: 2 },
      { stepNumber: 3, actionDescription: 'Re-evaluation of vital telemetry and early warning score', mandatory: true, timingWindowHours: 4 }
    ]
  },
  {
    protocolId: 'CP-PROTOCOL-193',
    protocolTitle: 'Evidence-Based Clinical Protocol Pathway 193',
    specialty: 'Specialty 2',
    targetConditionCode: 'COND-193',
    evidenceGrade: 'B',
    steps: [
      { stepNumber: 1, actionDescription: 'Initial clinical assessment and baseline laboratory evaluation', mandatory: true, timingWindowHours: 1 },
      { stepNumber: 2, actionDescription: 'Administration of first-line therapeutic intervention', mandatory: true, timingWindowHours: 2 },
      { stepNumber: 3, actionDescription: 'Re-evaluation of vital telemetry and early warning score', mandatory: true, timingWindowHours: 4 }
    ]
  },
  {
    protocolId: 'CP-PROTOCOL-194',
    protocolTitle: 'Evidence-Based Clinical Protocol Pathway 194',
    specialty: 'Specialty 3',
    targetConditionCode: 'COND-194',
    evidenceGrade: 'A',
    steps: [
      { stepNumber: 1, actionDescription: 'Initial clinical assessment and baseline laboratory evaluation', mandatory: true, timingWindowHours: 1 },
      { stepNumber: 2, actionDescription: 'Administration of first-line therapeutic intervention', mandatory: true, timingWindowHours: 2 },
      { stepNumber: 3, actionDescription: 'Re-evaluation of vital telemetry and early warning score', mandatory: true, timingWindowHours: 4 }
    ]
  },
  {
    protocolId: 'CP-PROTOCOL-195',
    protocolTitle: 'Evidence-Based Clinical Protocol Pathway 195',
    specialty: 'Specialty 4',
    targetConditionCode: 'COND-195',
    evidenceGrade: 'B',
    steps: [
      { stepNumber: 1, actionDescription: 'Initial clinical assessment and baseline laboratory evaluation', mandatory: true, timingWindowHours: 1 },
      { stepNumber: 2, actionDescription: 'Administration of first-line therapeutic intervention', mandatory: true, timingWindowHours: 2 },
      { stepNumber: 3, actionDescription: 'Re-evaluation of vital telemetry and early warning score', mandatory: true, timingWindowHours: 4 }
    ]
  },
  {
    protocolId: 'CP-PROTOCOL-196',
    protocolTitle: 'Evidence-Based Clinical Protocol Pathway 196',
    specialty: 'Specialty 5',
    targetConditionCode: 'COND-196',
    evidenceGrade: 'A',
    steps: [
      { stepNumber: 1, actionDescription: 'Initial clinical assessment and baseline laboratory evaluation', mandatory: true, timingWindowHours: 1 },
      { stepNumber: 2, actionDescription: 'Administration of first-line therapeutic intervention', mandatory: true, timingWindowHours: 2 },
      { stepNumber: 3, actionDescription: 'Re-evaluation of vital telemetry and early warning score', mandatory: true, timingWindowHours: 4 }
    ]
  },
  {
    protocolId: 'CP-PROTOCOL-197',
    protocolTitle: 'Evidence-Based Clinical Protocol Pathway 197',
    specialty: 'Specialty 6',
    targetConditionCode: 'COND-197',
    evidenceGrade: 'B',
    steps: [
      { stepNumber: 1, actionDescription: 'Initial clinical assessment and baseline laboratory evaluation', mandatory: true, timingWindowHours: 1 },
      { stepNumber: 2, actionDescription: 'Administration of first-line therapeutic intervention', mandatory: true, timingWindowHours: 2 },
      { stepNumber: 3, actionDescription: 'Re-evaluation of vital telemetry and early warning score', mandatory: true, timingWindowHours: 4 }
    ]
  },
  {
    protocolId: 'CP-PROTOCOL-198',
    protocolTitle: 'Evidence-Based Clinical Protocol Pathway 198',
    specialty: 'Specialty 7',
    targetConditionCode: 'COND-198',
    evidenceGrade: 'A',
    steps: [
      { stepNumber: 1, actionDescription: 'Initial clinical assessment and baseline laboratory evaluation', mandatory: true, timingWindowHours: 1 },
      { stepNumber: 2, actionDescription: 'Administration of first-line therapeutic intervention', mandatory: true, timingWindowHours: 2 },
      { stepNumber: 3, actionDescription: 'Re-evaluation of vital telemetry and early warning score', mandatory: true, timingWindowHours: 4 }
    ]
  },
  {
    protocolId: 'CP-PROTOCOL-199',
    protocolTitle: 'Evidence-Based Clinical Protocol Pathway 199',
    specialty: 'Specialty 8',
    targetConditionCode: 'COND-199',
    evidenceGrade: 'B',
    steps: [
      { stepNumber: 1, actionDescription: 'Initial clinical assessment and baseline laboratory evaluation', mandatory: true, timingWindowHours: 1 },
      { stepNumber: 2, actionDescription: 'Administration of first-line therapeutic intervention', mandatory: true, timingWindowHours: 2 },
      { stepNumber: 3, actionDescription: 'Re-evaluation of vital telemetry and early warning score', mandatory: true, timingWindowHours: 4 }
    ]
  },
  {
    protocolId: 'CP-PROTOCOL-200',
    protocolTitle: 'Evidence-Based Clinical Protocol Pathway 200',
    specialty: 'Specialty 9',
    targetConditionCode: 'COND-200',
    evidenceGrade: 'A',
    steps: [
      { stepNumber: 1, actionDescription: 'Initial clinical assessment and baseline laboratory evaluation', mandatory: true, timingWindowHours: 1 },
      { stepNumber: 2, actionDescription: 'Administration of first-line therapeutic intervention', mandatory: true, timingWindowHours: 2 },
      { stepNumber: 3, actionDescription: 'Re-evaluation of vital telemetry and early warning score', mandatory: true, timingWindowHours: 4 }
    ]
  },
  {
    protocolId: 'CP-PROTOCOL-201',
    protocolTitle: 'Evidence-Based Clinical Protocol Pathway 201',
    specialty: 'Specialty 10',
    targetConditionCode: 'COND-201',
    evidenceGrade: 'B',
    steps: [
      { stepNumber: 1, actionDescription: 'Initial clinical assessment and baseline laboratory evaluation', mandatory: true, timingWindowHours: 1 },
      { stepNumber: 2, actionDescription: 'Administration of first-line therapeutic intervention', mandatory: true, timingWindowHours: 2 },
      { stepNumber: 3, actionDescription: 'Re-evaluation of vital telemetry and early warning score', mandatory: true, timingWindowHours: 4 }
    ]
  },
  {
    protocolId: 'CP-PROTOCOL-202',
    protocolTitle: 'Evidence-Based Clinical Protocol Pathway 202',
    specialty: 'Specialty 11',
    targetConditionCode: 'COND-202',
    evidenceGrade: 'A',
    steps: [
      { stepNumber: 1, actionDescription: 'Initial clinical assessment and baseline laboratory evaluation', mandatory: true, timingWindowHours: 1 },
      { stepNumber: 2, actionDescription: 'Administration of first-line therapeutic intervention', mandatory: true, timingWindowHours: 2 },
      { stepNumber: 3, actionDescription: 'Re-evaluation of vital telemetry and early warning score', mandatory: true, timingWindowHours: 4 }
    ]
  },
  {
    protocolId: 'CP-PROTOCOL-203',
    protocolTitle: 'Evidence-Based Clinical Protocol Pathway 203',
    specialty: 'Specialty 12',
    targetConditionCode: 'COND-203',
    evidenceGrade: 'B',
    steps: [
      { stepNumber: 1, actionDescription: 'Initial clinical assessment and baseline laboratory evaluation', mandatory: true, timingWindowHours: 1 },
      { stepNumber: 2, actionDescription: 'Administration of first-line therapeutic intervention', mandatory: true, timingWindowHours: 2 },
      { stepNumber: 3, actionDescription: 'Re-evaluation of vital telemetry and early warning score', mandatory: true, timingWindowHours: 4 }
    ]
  },
  {
    protocolId: 'CP-PROTOCOL-204',
    protocolTitle: 'Evidence-Based Clinical Protocol Pathway 204',
    specialty: 'Specialty 1',
    targetConditionCode: 'COND-204',
    evidenceGrade: 'A',
    steps: [
      { stepNumber: 1, actionDescription: 'Initial clinical assessment and baseline laboratory evaluation', mandatory: true, timingWindowHours: 1 },
      { stepNumber: 2, actionDescription: 'Administration of first-line therapeutic intervention', mandatory: true, timingWindowHours: 2 },
      { stepNumber: 3, actionDescription: 'Re-evaluation of vital telemetry and early warning score', mandatory: true, timingWindowHours: 4 }
    ]
  },
  {
    protocolId: 'CP-PROTOCOL-205',
    protocolTitle: 'Evidence-Based Clinical Protocol Pathway 205',
    specialty: 'Specialty 2',
    targetConditionCode: 'COND-205',
    evidenceGrade: 'B',
    steps: [
      { stepNumber: 1, actionDescription: 'Initial clinical assessment and baseline laboratory evaluation', mandatory: true, timingWindowHours: 1 },
      { stepNumber: 2, actionDescription: 'Administration of first-line therapeutic intervention', mandatory: true, timingWindowHours: 2 },
      { stepNumber: 3, actionDescription: 'Re-evaluation of vital telemetry and early warning score', mandatory: true, timingWindowHours: 4 }
    ]
  },
  {
    protocolId: 'CP-PROTOCOL-206',
    protocolTitle: 'Evidence-Based Clinical Protocol Pathway 206',
    specialty: 'Specialty 3',
    targetConditionCode: 'COND-206',
    evidenceGrade: 'A',
    steps: [
      { stepNumber: 1, actionDescription: 'Initial clinical assessment and baseline laboratory evaluation', mandatory: true, timingWindowHours: 1 },
      { stepNumber: 2, actionDescription: 'Administration of first-line therapeutic intervention', mandatory: true, timingWindowHours: 2 },
      { stepNumber: 3, actionDescription: 'Re-evaluation of vital telemetry and early warning score', mandatory: true, timingWindowHours: 4 }
    ]
  },
  {
    protocolId: 'CP-PROTOCOL-207',
    protocolTitle: 'Evidence-Based Clinical Protocol Pathway 207',
    specialty: 'Specialty 4',
    targetConditionCode: 'COND-207',
    evidenceGrade: 'B',
    steps: [
      { stepNumber: 1, actionDescription: 'Initial clinical assessment and baseline laboratory evaluation', mandatory: true, timingWindowHours: 1 },
      { stepNumber: 2, actionDescription: 'Administration of first-line therapeutic intervention', mandatory: true, timingWindowHours: 2 },
      { stepNumber: 3, actionDescription: 'Re-evaluation of vital telemetry and early warning score', mandatory: true, timingWindowHours: 4 }
    ]
  },
  {
    protocolId: 'CP-PROTOCOL-208',
    protocolTitle: 'Evidence-Based Clinical Protocol Pathway 208',
    specialty: 'Specialty 5',
    targetConditionCode: 'COND-208',
    evidenceGrade: 'A',
    steps: [
      { stepNumber: 1, actionDescription: 'Initial clinical assessment and baseline laboratory evaluation', mandatory: true, timingWindowHours: 1 },
      { stepNumber: 2, actionDescription: 'Administration of first-line therapeutic intervention', mandatory: true, timingWindowHours: 2 },
      { stepNumber: 3, actionDescription: 'Re-evaluation of vital telemetry and early warning score', mandatory: true, timingWindowHours: 4 }
    ]
  },
  {
    protocolId: 'CP-PROTOCOL-209',
    protocolTitle: 'Evidence-Based Clinical Protocol Pathway 209',
    specialty: 'Specialty 6',
    targetConditionCode: 'COND-209',
    evidenceGrade: 'B',
    steps: [
      { stepNumber: 1, actionDescription: 'Initial clinical assessment and baseline laboratory evaluation', mandatory: true, timingWindowHours: 1 },
      { stepNumber: 2, actionDescription: 'Administration of first-line therapeutic intervention', mandatory: true, timingWindowHours: 2 },
      { stepNumber: 3, actionDescription: 'Re-evaluation of vital telemetry and early warning score', mandatory: true, timingWindowHours: 4 }
    ]
  },
  {
    protocolId: 'CP-PROTOCOL-210',
    protocolTitle: 'Evidence-Based Clinical Protocol Pathway 210',
    specialty: 'Specialty 7',
    targetConditionCode: 'COND-210',
    evidenceGrade: 'A',
    steps: [
      { stepNumber: 1, actionDescription: 'Initial clinical assessment and baseline laboratory evaluation', mandatory: true, timingWindowHours: 1 },
      { stepNumber: 2, actionDescription: 'Administration of first-line therapeutic intervention', mandatory: true, timingWindowHours: 2 },
      { stepNumber: 3, actionDescription: 'Re-evaluation of vital telemetry and early warning score', mandatory: true, timingWindowHours: 4 }
    ]
  },
  {
    protocolId: 'CP-PROTOCOL-211',
    protocolTitle: 'Evidence-Based Clinical Protocol Pathway 211',
    specialty: 'Specialty 8',
    targetConditionCode: 'COND-211',
    evidenceGrade: 'B',
    steps: [
      { stepNumber: 1, actionDescription: 'Initial clinical assessment and baseline laboratory evaluation', mandatory: true, timingWindowHours: 1 },
      { stepNumber: 2, actionDescription: 'Administration of first-line therapeutic intervention', mandatory: true, timingWindowHours: 2 },
      { stepNumber: 3, actionDescription: 'Re-evaluation of vital telemetry and early warning score', mandatory: true, timingWindowHours: 4 }
    ]
  },
  {
    protocolId: 'CP-PROTOCOL-212',
    protocolTitle: 'Evidence-Based Clinical Protocol Pathway 212',
    specialty: 'Specialty 9',
    targetConditionCode: 'COND-212',
    evidenceGrade: 'A',
    steps: [
      { stepNumber: 1, actionDescription: 'Initial clinical assessment and baseline laboratory evaluation', mandatory: true, timingWindowHours: 1 },
      { stepNumber: 2, actionDescription: 'Administration of first-line therapeutic intervention', mandatory: true, timingWindowHours: 2 },
      { stepNumber: 3, actionDescription: 'Re-evaluation of vital telemetry and early warning score', mandatory: true, timingWindowHours: 4 }
    ]
  },
  {
    protocolId: 'CP-PROTOCOL-213',
    protocolTitle: 'Evidence-Based Clinical Protocol Pathway 213',
    specialty: 'Specialty 10',
    targetConditionCode: 'COND-213',
    evidenceGrade: 'B',
    steps: [
      { stepNumber: 1, actionDescription: 'Initial clinical assessment and baseline laboratory evaluation', mandatory: true, timingWindowHours: 1 },
      { stepNumber: 2, actionDescription: 'Administration of first-line therapeutic intervention', mandatory: true, timingWindowHours: 2 },
      { stepNumber: 3, actionDescription: 'Re-evaluation of vital telemetry and early warning score', mandatory: true, timingWindowHours: 4 }
    ]
  },
  {
    protocolId: 'CP-PROTOCOL-214',
    protocolTitle: 'Evidence-Based Clinical Protocol Pathway 214',
    specialty: 'Specialty 11',
    targetConditionCode: 'COND-214',
    evidenceGrade: 'A',
    steps: [
      { stepNumber: 1, actionDescription: 'Initial clinical assessment and baseline laboratory evaluation', mandatory: true, timingWindowHours: 1 },
      { stepNumber: 2, actionDescription: 'Administration of first-line therapeutic intervention', mandatory: true, timingWindowHours: 2 },
      { stepNumber: 3, actionDescription: 'Re-evaluation of vital telemetry and early warning score', mandatory: true, timingWindowHours: 4 }
    ]
  },
  {
    protocolId: 'CP-PROTOCOL-215',
    protocolTitle: 'Evidence-Based Clinical Protocol Pathway 215',
    specialty: 'Specialty 12',
    targetConditionCode: 'COND-215',
    evidenceGrade: 'B',
    steps: [
      { stepNumber: 1, actionDescription: 'Initial clinical assessment and baseline laboratory evaluation', mandatory: true, timingWindowHours: 1 },
      { stepNumber: 2, actionDescription: 'Administration of first-line therapeutic intervention', mandatory: true, timingWindowHours: 2 },
      { stepNumber: 3, actionDescription: 'Re-evaluation of vital telemetry and early warning score', mandatory: true, timingWindowHours: 4 }
    ]
  },
  {
    protocolId: 'CP-PROTOCOL-216',
    protocolTitle: 'Evidence-Based Clinical Protocol Pathway 216',
    specialty: 'Specialty 1',
    targetConditionCode: 'COND-216',
    evidenceGrade: 'A',
    steps: [
      { stepNumber: 1, actionDescription: 'Initial clinical assessment and baseline laboratory evaluation', mandatory: true, timingWindowHours: 1 },
      { stepNumber: 2, actionDescription: 'Administration of first-line therapeutic intervention', mandatory: true, timingWindowHours: 2 },
      { stepNumber: 3, actionDescription: 'Re-evaluation of vital telemetry and early warning score', mandatory: true, timingWindowHours: 4 }
    ]
  },
  {
    protocolId: 'CP-PROTOCOL-217',
    protocolTitle: 'Evidence-Based Clinical Protocol Pathway 217',
    specialty: 'Specialty 2',
    targetConditionCode: 'COND-217',
    evidenceGrade: 'B',
    steps: [
      { stepNumber: 1, actionDescription: 'Initial clinical assessment and baseline laboratory evaluation', mandatory: true, timingWindowHours: 1 },
      { stepNumber: 2, actionDescription: 'Administration of first-line therapeutic intervention', mandatory: true, timingWindowHours: 2 },
      { stepNumber: 3, actionDescription: 'Re-evaluation of vital telemetry and early warning score', mandatory: true, timingWindowHours: 4 }
    ]
  },
  {
    protocolId: 'CP-PROTOCOL-218',
    protocolTitle: 'Evidence-Based Clinical Protocol Pathway 218',
    specialty: 'Specialty 3',
    targetConditionCode: 'COND-218',
    evidenceGrade: 'A',
    steps: [
      { stepNumber: 1, actionDescription: 'Initial clinical assessment and baseline laboratory evaluation', mandatory: true, timingWindowHours: 1 },
      { stepNumber: 2, actionDescription: 'Administration of first-line therapeutic intervention', mandatory: true, timingWindowHours: 2 },
      { stepNumber: 3, actionDescription: 'Re-evaluation of vital telemetry and early warning score', mandatory: true, timingWindowHours: 4 }
    ]
  },
  {
    protocolId: 'CP-PROTOCOL-219',
    protocolTitle: 'Evidence-Based Clinical Protocol Pathway 219',
    specialty: 'Specialty 4',
    targetConditionCode: 'COND-219',
    evidenceGrade: 'B',
    steps: [
      { stepNumber: 1, actionDescription: 'Initial clinical assessment and baseline laboratory evaluation', mandatory: true, timingWindowHours: 1 },
      { stepNumber: 2, actionDescription: 'Administration of first-line therapeutic intervention', mandatory: true, timingWindowHours: 2 },
      { stepNumber: 3, actionDescription: 'Re-evaluation of vital telemetry and early warning score', mandatory: true, timingWindowHours: 4 }
    ]
  },
  {
    protocolId: 'CP-PROTOCOL-220',
    protocolTitle: 'Evidence-Based Clinical Protocol Pathway 220',
    specialty: 'Specialty 5',
    targetConditionCode: 'COND-220',
    evidenceGrade: 'A',
    steps: [
      { stepNumber: 1, actionDescription: 'Initial clinical assessment and baseline laboratory evaluation', mandatory: true, timingWindowHours: 1 },
      { stepNumber: 2, actionDescription: 'Administration of first-line therapeutic intervention', mandatory: true, timingWindowHours: 2 },
      { stepNumber: 3, actionDescription: 'Re-evaluation of vital telemetry and early warning score', mandatory: true, timingWindowHours: 4 }
    ]
  },
  {
    protocolId: 'CP-PROTOCOL-221',
    protocolTitle: 'Evidence-Based Clinical Protocol Pathway 221',
    specialty: 'Specialty 6',
    targetConditionCode: 'COND-221',
    evidenceGrade: 'B',
    steps: [
      { stepNumber: 1, actionDescription: 'Initial clinical assessment and baseline laboratory evaluation', mandatory: true, timingWindowHours: 1 },
      { stepNumber: 2, actionDescription: 'Administration of first-line therapeutic intervention', mandatory: true, timingWindowHours: 2 },
      { stepNumber: 3, actionDescription: 'Re-evaluation of vital telemetry and early warning score', mandatory: true, timingWindowHours: 4 }
    ]
  },
  {
    protocolId: 'CP-PROTOCOL-222',
    protocolTitle: 'Evidence-Based Clinical Protocol Pathway 222',
    specialty: 'Specialty 7',
    targetConditionCode: 'COND-222',
    evidenceGrade: 'A',
    steps: [
      { stepNumber: 1, actionDescription: 'Initial clinical assessment and baseline laboratory evaluation', mandatory: true, timingWindowHours: 1 },
      { stepNumber: 2, actionDescription: 'Administration of first-line therapeutic intervention', mandatory: true, timingWindowHours: 2 },
      { stepNumber: 3, actionDescription: 'Re-evaluation of vital telemetry and early warning score', mandatory: true, timingWindowHours: 4 }
    ]
  },
  {
    protocolId: 'CP-PROTOCOL-223',
    protocolTitle: 'Evidence-Based Clinical Protocol Pathway 223',
    specialty: 'Specialty 8',
    targetConditionCode: 'COND-223',
    evidenceGrade: 'B',
    steps: [
      { stepNumber: 1, actionDescription: 'Initial clinical assessment and baseline laboratory evaluation', mandatory: true, timingWindowHours: 1 },
      { stepNumber: 2, actionDescription: 'Administration of first-line therapeutic intervention', mandatory: true, timingWindowHours: 2 },
      { stepNumber: 3, actionDescription: 'Re-evaluation of vital telemetry and early warning score', mandatory: true, timingWindowHours: 4 }
    ]
  },
  {
    protocolId: 'CP-PROTOCOL-224',
    protocolTitle: 'Evidence-Based Clinical Protocol Pathway 224',
    specialty: 'Specialty 9',
    targetConditionCode: 'COND-224',
    evidenceGrade: 'A',
    steps: [
      { stepNumber: 1, actionDescription: 'Initial clinical assessment and baseline laboratory evaluation', mandatory: true, timingWindowHours: 1 },
      { stepNumber: 2, actionDescription: 'Administration of first-line therapeutic intervention', mandatory: true, timingWindowHours: 2 },
      { stepNumber: 3, actionDescription: 'Re-evaluation of vital telemetry and early warning score', mandatory: true, timingWindowHours: 4 }
    ]
  },
  {
    protocolId: 'CP-PROTOCOL-225',
    protocolTitle: 'Evidence-Based Clinical Protocol Pathway 225',
    specialty: 'Specialty 10',
    targetConditionCode: 'COND-225',
    evidenceGrade: 'B',
    steps: [
      { stepNumber: 1, actionDescription: 'Initial clinical assessment and baseline laboratory evaluation', mandatory: true, timingWindowHours: 1 },
      { stepNumber: 2, actionDescription: 'Administration of first-line therapeutic intervention', mandatory: true, timingWindowHours: 2 },
      { stepNumber: 3, actionDescription: 'Re-evaluation of vital telemetry and early warning score', mandatory: true, timingWindowHours: 4 }
    ]
  },
  {
    protocolId: 'CP-PROTOCOL-226',
    protocolTitle: 'Evidence-Based Clinical Protocol Pathway 226',
    specialty: 'Specialty 11',
    targetConditionCode: 'COND-226',
    evidenceGrade: 'A',
    steps: [
      { stepNumber: 1, actionDescription: 'Initial clinical assessment and baseline laboratory evaluation', mandatory: true, timingWindowHours: 1 },
      { stepNumber: 2, actionDescription: 'Administration of first-line therapeutic intervention', mandatory: true, timingWindowHours: 2 },
      { stepNumber: 3, actionDescription: 'Re-evaluation of vital telemetry and early warning score', mandatory: true, timingWindowHours: 4 }
    ]
  },
  {
    protocolId: 'CP-PROTOCOL-227',
    protocolTitle: 'Evidence-Based Clinical Protocol Pathway 227',
    specialty: 'Specialty 12',
    targetConditionCode: 'COND-227',
    evidenceGrade: 'B',
    steps: [
      { stepNumber: 1, actionDescription: 'Initial clinical assessment and baseline laboratory evaluation', mandatory: true, timingWindowHours: 1 },
      { stepNumber: 2, actionDescription: 'Administration of first-line therapeutic intervention', mandatory: true, timingWindowHours: 2 },
      { stepNumber: 3, actionDescription: 'Re-evaluation of vital telemetry and early warning score', mandatory: true, timingWindowHours: 4 }
    ]
  },
  {
    protocolId: 'CP-PROTOCOL-228',
    protocolTitle: 'Evidence-Based Clinical Protocol Pathway 228',
    specialty: 'Specialty 1',
    targetConditionCode: 'COND-228',
    evidenceGrade: 'A',
    steps: [
      { stepNumber: 1, actionDescription: 'Initial clinical assessment and baseline laboratory evaluation', mandatory: true, timingWindowHours: 1 },
      { stepNumber: 2, actionDescription: 'Administration of first-line therapeutic intervention', mandatory: true, timingWindowHours: 2 },
      { stepNumber: 3, actionDescription: 'Re-evaluation of vital telemetry and early warning score', mandatory: true, timingWindowHours: 4 }
    ]
  },
  {
    protocolId: 'CP-PROTOCOL-229',
    protocolTitle: 'Evidence-Based Clinical Protocol Pathway 229',
    specialty: 'Specialty 2',
    targetConditionCode: 'COND-229',
    evidenceGrade: 'B',
    steps: [
      { stepNumber: 1, actionDescription: 'Initial clinical assessment and baseline laboratory evaluation', mandatory: true, timingWindowHours: 1 },
      { stepNumber: 2, actionDescription: 'Administration of first-line therapeutic intervention', mandatory: true, timingWindowHours: 2 },
      { stepNumber: 3, actionDescription: 'Re-evaluation of vital telemetry and early warning score', mandatory: true, timingWindowHours: 4 }
    ]
  },
  {
    protocolId: 'CP-PROTOCOL-230',
    protocolTitle: 'Evidence-Based Clinical Protocol Pathway 230',
    specialty: 'Specialty 3',
    targetConditionCode: 'COND-230',
    evidenceGrade: 'A',
    steps: [
      { stepNumber: 1, actionDescription: 'Initial clinical assessment and baseline laboratory evaluation', mandatory: true, timingWindowHours: 1 },
      { stepNumber: 2, actionDescription: 'Administration of first-line therapeutic intervention', mandatory: true, timingWindowHours: 2 },
      { stepNumber: 3, actionDescription: 'Re-evaluation of vital telemetry and early warning score', mandatory: true, timingWindowHours: 4 }
    ]
  },
  {
    protocolId: 'CP-PROTOCOL-231',
    protocolTitle: 'Evidence-Based Clinical Protocol Pathway 231',
    specialty: 'Specialty 4',
    targetConditionCode: 'COND-231',
    evidenceGrade: 'B',
    steps: [
      { stepNumber: 1, actionDescription: 'Initial clinical assessment and baseline laboratory evaluation', mandatory: true, timingWindowHours: 1 },
      { stepNumber: 2, actionDescription: 'Administration of first-line therapeutic intervention', mandatory: true, timingWindowHours: 2 },
      { stepNumber: 3, actionDescription: 'Re-evaluation of vital telemetry and early warning score', mandatory: true, timingWindowHours: 4 }
    ]
  },
  {
    protocolId: 'CP-PROTOCOL-232',
    protocolTitle: 'Evidence-Based Clinical Protocol Pathway 232',
    specialty: 'Specialty 5',
    targetConditionCode: 'COND-232',
    evidenceGrade: 'A',
    steps: [
      { stepNumber: 1, actionDescription: 'Initial clinical assessment and baseline laboratory evaluation', mandatory: true, timingWindowHours: 1 },
      { stepNumber: 2, actionDescription: 'Administration of first-line therapeutic intervention', mandatory: true, timingWindowHours: 2 },
      { stepNumber: 3, actionDescription: 'Re-evaluation of vital telemetry and early warning score', mandatory: true, timingWindowHours: 4 }
    ]
  },
  {
    protocolId: 'CP-PROTOCOL-233',
    protocolTitle: 'Evidence-Based Clinical Protocol Pathway 233',
    specialty: 'Specialty 6',
    targetConditionCode: 'COND-233',
    evidenceGrade: 'B',
    steps: [
      { stepNumber: 1, actionDescription: 'Initial clinical assessment and baseline laboratory evaluation', mandatory: true, timingWindowHours: 1 },
      { stepNumber: 2, actionDescription: 'Administration of first-line therapeutic intervention', mandatory: true, timingWindowHours: 2 },
      { stepNumber: 3, actionDescription: 'Re-evaluation of vital telemetry and early warning score', mandatory: true, timingWindowHours: 4 }
    ]
  },
  {
    protocolId: 'CP-PROTOCOL-234',
    protocolTitle: 'Evidence-Based Clinical Protocol Pathway 234',
    specialty: 'Specialty 7',
    targetConditionCode: 'COND-234',
    evidenceGrade: 'A',
    steps: [
      { stepNumber: 1, actionDescription: 'Initial clinical assessment and baseline laboratory evaluation', mandatory: true, timingWindowHours: 1 },
      { stepNumber: 2, actionDescription: 'Administration of first-line therapeutic intervention', mandatory: true, timingWindowHours: 2 },
      { stepNumber: 3, actionDescription: 'Re-evaluation of vital telemetry and early warning score', mandatory: true, timingWindowHours: 4 }
    ]
  },
  {
    protocolId: 'CP-PROTOCOL-235',
    protocolTitle: 'Evidence-Based Clinical Protocol Pathway 235',
    specialty: 'Specialty 8',
    targetConditionCode: 'COND-235',
    evidenceGrade: 'B',
    steps: [
      { stepNumber: 1, actionDescription: 'Initial clinical assessment and baseline laboratory evaluation', mandatory: true, timingWindowHours: 1 },
      { stepNumber: 2, actionDescription: 'Administration of first-line therapeutic intervention', mandatory: true, timingWindowHours: 2 },
      { stepNumber: 3, actionDescription: 'Re-evaluation of vital telemetry and early warning score', mandatory: true, timingWindowHours: 4 }
    ]
  },
  {
    protocolId: 'CP-PROTOCOL-236',
    protocolTitle: 'Evidence-Based Clinical Protocol Pathway 236',
    specialty: 'Specialty 9',
    targetConditionCode: 'COND-236',
    evidenceGrade: 'A',
    steps: [
      { stepNumber: 1, actionDescription: 'Initial clinical assessment and baseline laboratory evaluation', mandatory: true, timingWindowHours: 1 },
      { stepNumber: 2, actionDescription: 'Administration of first-line therapeutic intervention', mandatory: true, timingWindowHours: 2 },
      { stepNumber: 3, actionDescription: 'Re-evaluation of vital telemetry and early warning score', mandatory: true, timingWindowHours: 4 }
    ]
  },
  {
    protocolId: 'CP-PROTOCOL-237',
    protocolTitle: 'Evidence-Based Clinical Protocol Pathway 237',
    specialty: 'Specialty 10',
    targetConditionCode: 'COND-237',
    evidenceGrade: 'B',
    steps: [
      { stepNumber: 1, actionDescription: 'Initial clinical assessment and baseline laboratory evaluation', mandatory: true, timingWindowHours: 1 },
      { stepNumber: 2, actionDescription: 'Administration of first-line therapeutic intervention', mandatory: true, timingWindowHours: 2 },
      { stepNumber: 3, actionDescription: 'Re-evaluation of vital telemetry and early warning score', mandatory: true, timingWindowHours: 4 }
    ]
  },
  {
    protocolId: 'CP-PROTOCOL-238',
    protocolTitle: 'Evidence-Based Clinical Protocol Pathway 238',
    specialty: 'Specialty 11',
    targetConditionCode: 'COND-238',
    evidenceGrade: 'A',
    steps: [
      { stepNumber: 1, actionDescription: 'Initial clinical assessment and baseline laboratory evaluation', mandatory: true, timingWindowHours: 1 },
      { stepNumber: 2, actionDescription: 'Administration of first-line therapeutic intervention', mandatory: true, timingWindowHours: 2 },
      { stepNumber: 3, actionDescription: 'Re-evaluation of vital telemetry and early warning score', mandatory: true, timingWindowHours: 4 }
    ]
  },
  {
    protocolId: 'CP-PROTOCOL-239',
    protocolTitle: 'Evidence-Based Clinical Protocol Pathway 239',
    specialty: 'Specialty 12',
    targetConditionCode: 'COND-239',
    evidenceGrade: 'B',
    steps: [
      { stepNumber: 1, actionDescription: 'Initial clinical assessment and baseline laboratory evaluation', mandatory: true, timingWindowHours: 1 },
      { stepNumber: 2, actionDescription: 'Administration of first-line therapeutic intervention', mandatory: true, timingWindowHours: 2 },
      { stepNumber: 3, actionDescription: 'Re-evaluation of vital telemetry and early warning score', mandatory: true, timingWindowHours: 4 }
    ]
  },
  {
    protocolId: 'CP-PROTOCOL-240',
    protocolTitle: 'Evidence-Based Clinical Protocol Pathway 240',
    specialty: 'Specialty 1',
    targetConditionCode: 'COND-240',
    evidenceGrade: 'A',
    steps: [
      { stepNumber: 1, actionDescription: 'Initial clinical assessment and baseline laboratory evaluation', mandatory: true, timingWindowHours: 1 },
      { stepNumber: 2, actionDescription: 'Administration of first-line therapeutic intervention', mandatory: true, timingWindowHours: 2 },
      { stepNumber: 3, actionDescription: 'Re-evaluation of vital telemetry and early warning score', mandatory: true, timingWindowHours: 4 }
    ]
  },
  {
    protocolId: 'CP-PROTOCOL-241',
    protocolTitle: 'Evidence-Based Clinical Protocol Pathway 241',
    specialty: 'Specialty 2',
    targetConditionCode: 'COND-241',
    evidenceGrade: 'B',
    steps: [
      { stepNumber: 1, actionDescription: 'Initial clinical assessment and baseline laboratory evaluation', mandatory: true, timingWindowHours: 1 },
      { stepNumber: 2, actionDescription: 'Administration of first-line therapeutic intervention', mandatory: true, timingWindowHours: 2 },
      { stepNumber: 3, actionDescription: 'Re-evaluation of vital telemetry and early warning score', mandatory: true, timingWindowHours: 4 }
    ]
  },
  {
    protocolId: 'CP-PROTOCOL-242',
    protocolTitle: 'Evidence-Based Clinical Protocol Pathway 242',
    specialty: 'Specialty 3',
    targetConditionCode: 'COND-242',
    evidenceGrade: 'A',
    steps: [
      { stepNumber: 1, actionDescription: 'Initial clinical assessment and baseline laboratory evaluation', mandatory: true, timingWindowHours: 1 },
      { stepNumber: 2, actionDescription: 'Administration of first-line therapeutic intervention', mandatory: true, timingWindowHours: 2 },
      { stepNumber: 3, actionDescription: 'Re-evaluation of vital telemetry and early warning score', mandatory: true, timingWindowHours: 4 }
    ]
  },
  {
    protocolId: 'CP-PROTOCOL-243',
    protocolTitle: 'Evidence-Based Clinical Protocol Pathway 243',
    specialty: 'Specialty 4',
    targetConditionCode: 'COND-243',
    evidenceGrade: 'B',
    steps: [
      { stepNumber: 1, actionDescription: 'Initial clinical assessment and baseline laboratory evaluation', mandatory: true, timingWindowHours: 1 },
      { stepNumber: 2, actionDescription: 'Administration of first-line therapeutic intervention', mandatory: true, timingWindowHours: 2 },
      { stepNumber: 3, actionDescription: 'Re-evaluation of vital telemetry and early warning score', mandatory: true, timingWindowHours: 4 }
    ]
  },
  {
    protocolId: 'CP-PROTOCOL-244',
    protocolTitle: 'Evidence-Based Clinical Protocol Pathway 244',
    specialty: 'Specialty 5',
    targetConditionCode: 'COND-244',
    evidenceGrade: 'A',
    steps: [
      { stepNumber: 1, actionDescription: 'Initial clinical assessment and baseline laboratory evaluation', mandatory: true, timingWindowHours: 1 },
      { stepNumber: 2, actionDescription: 'Administration of first-line therapeutic intervention', mandatory: true, timingWindowHours: 2 },
      { stepNumber: 3, actionDescription: 'Re-evaluation of vital telemetry and early warning score', mandatory: true, timingWindowHours: 4 }
    ]
  },
  {
    protocolId: 'CP-PROTOCOL-245',
    protocolTitle: 'Evidence-Based Clinical Protocol Pathway 245',
    specialty: 'Specialty 6',
    targetConditionCode: 'COND-245',
    evidenceGrade: 'B',
    steps: [
      { stepNumber: 1, actionDescription: 'Initial clinical assessment and baseline laboratory evaluation', mandatory: true, timingWindowHours: 1 },
      { stepNumber: 2, actionDescription: 'Administration of first-line therapeutic intervention', mandatory: true, timingWindowHours: 2 },
      { stepNumber: 3, actionDescription: 'Re-evaluation of vital telemetry and early warning score', mandatory: true, timingWindowHours: 4 }
    ]
  },
  {
    protocolId: 'CP-PROTOCOL-246',
    protocolTitle: 'Evidence-Based Clinical Protocol Pathway 246',
    specialty: 'Specialty 7',
    targetConditionCode: 'COND-246',
    evidenceGrade: 'A',
    steps: [
      { stepNumber: 1, actionDescription: 'Initial clinical assessment and baseline laboratory evaluation', mandatory: true, timingWindowHours: 1 },
      { stepNumber: 2, actionDescription: 'Administration of first-line therapeutic intervention', mandatory: true, timingWindowHours: 2 },
      { stepNumber: 3, actionDescription: 'Re-evaluation of vital telemetry and early warning score', mandatory: true, timingWindowHours: 4 }
    ]
  },
  {
    protocolId: 'CP-PROTOCOL-247',
    protocolTitle: 'Evidence-Based Clinical Protocol Pathway 247',
    specialty: 'Specialty 8',
    targetConditionCode: 'COND-247',
    evidenceGrade: 'B',
    steps: [
      { stepNumber: 1, actionDescription: 'Initial clinical assessment and baseline laboratory evaluation', mandatory: true, timingWindowHours: 1 },
      { stepNumber: 2, actionDescription: 'Administration of first-line therapeutic intervention', mandatory: true, timingWindowHours: 2 },
      { stepNumber: 3, actionDescription: 'Re-evaluation of vital telemetry and early warning score', mandatory: true, timingWindowHours: 4 }
    ]
  },
  {
    protocolId: 'CP-PROTOCOL-248',
    protocolTitle: 'Evidence-Based Clinical Protocol Pathway 248',
    specialty: 'Specialty 9',
    targetConditionCode: 'COND-248',
    evidenceGrade: 'A',
    steps: [
      { stepNumber: 1, actionDescription: 'Initial clinical assessment and baseline laboratory evaluation', mandatory: true, timingWindowHours: 1 },
      { stepNumber: 2, actionDescription: 'Administration of first-line therapeutic intervention', mandatory: true, timingWindowHours: 2 },
      { stepNumber: 3, actionDescription: 'Re-evaluation of vital telemetry and early warning score', mandatory: true, timingWindowHours: 4 }
    ]
  },
  {
    protocolId: 'CP-PROTOCOL-249',
    protocolTitle: 'Evidence-Based Clinical Protocol Pathway 249',
    specialty: 'Specialty 10',
    targetConditionCode: 'COND-249',
    evidenceGrade: 'B',
    steps: [
      { stepNumber: 1, actionDescription: 'Initial clinical assessment and baseline laboratory evaluation', mandatory: true, timingWindowHours: 1 },
      { stepNumber: 2, actionDescription: 'Administration of first-line therapeutic intervention', mandatory: true, timingWindowHours: 2 },
      { stepNumber: 3, actionDescription: 'Re-evaluation of vital telemetry and early warning score', mandatory: true, timingWindowHours: 4 }
    ]
  },
  {
    protocolId: 'CP-PROTOCOL-250',
    protocolTitle: 'Evidence-Based Clinical Protocol Pathway 250',
    specialty: 'Specialty 11',
    targetConditionCode: 'COND-250',
    evidenceGrade: 'A',
    steps: [
      { stepNumber: 1, actionDescription: 'Initial clinical assessment and baseline laboratory evaluation', mandatory: true, timingWindowHours: 1 },
      { stepNumber: 2, actionDescription: 'Administration of first-line therapeutic intervention', mandatory: true, timingWindowHours: 2 },
      { stepNumber: 3, actionDescription: 'Re-evaluation of vital telemetry and early warning score', mandatory: true, timingWindowHours: 4 }
    ]
  },
  {
    protocolId: 'CP-PROTOCOL-251',
    protocolTitle: 'Evidence-Based Clinical Protocol Pathway 251',
    specialty: 'Specialty 12',
    targetConditionCode: 'COND-251',
    evidenceGrade: 'B',
    steps: [
      { stepNumber: 1, actionDescription: 'Initial clinical assessment and baseline laboratory evaluation', mandatory: true, timingWindowHours: 1 },
      { stepNumber: 2, actionDescription: 'Administration of first-line therapeutic intervention', mandatory: true, timingWindowHours: 2 },
      { stepNumber: 3, actionDescription: 'Re-evaluation of vital telemetry and early warning score', mandatory: true, timingWindowHours: 4 }
    ]
  },
  {
    protocolId: 'CP-PROTOCOL-252',
    protocolTitle: 'Evidence-Based Clinical Protocol Pathway 252',
    specialty: 'Specialty 1',
    targetConditionCode: 'COND-252',
    evidenceGrade: 'A',
    steps: [
      { stepNumber: 1, actionDescription: 'Initial clinical assessment and baseline laboratory evaluation', mandatory: true, timingWindowHours: 1 },
      { stepNumber: 2, actionDescription: 'Administration of first-line therapeutic intervention', mandatory: true, timingWindowHours: 2 },
      { stepNumber: 3, actionDescription: 'Re-evaluation of vital telemetry and early warning score', mandatory: true, timingWindowHours: 4 }
    ]
  },
  {
    protocolId: 'CP-PROTOCOL-253',
    protocolTitle: 'Evidence-Based Clinical Protocol Pathway 253',
    specialty: 'Specialty 2',
    targetConditionCode: 'COND-253',
    evidenceGrade: 'B',
    steps: [
      { stepNumber: 1, actionDescription: 'Initial clinical assessment and baseline laboratory evaluation', mandatory: true, timingWindowHours: 1 },
      { stepNumber: 2, actionDescription: 'Administration of first-line therapeutic intervention', mandatory: true, timingWindowHours: 2 },
      { stepNumber: 3, actionDescription: 'Re-evaluation of vital telemetry and early warning score', mandatory: true, timingWindowHours: 4 }
    ]
  },
  {
    protocolId: 'CP-PROTOCOL-254',
    protocolTitle: 'Evidence-Based Clinical Protocol Pathway 254',
    specialty: 'Specialty 3',
    targetConditionCode: 'COND-254',
    evidenceGrade: 'A',
    steps: [
      { stepNumber: 1, actionDescription: 'Initial clinical assessment and baseline laboratory evaluation', mandatory: true, timingWindowHours: 1 },
      { stepNumber: 2, actionDescription: 'Administration of first-line therapeutic intervention', mandatory: true, timingWindowHours: 2 },
      { stepNumber: 3, actionDescription: 'Re-evaluation of vital telemetry and early warning score', mandatory: true, timingWindowHours: 4 }
    ]
  },
  {
    protocolId: 'CP-PROTOCOL-255',
    protocolTitle: 'Evidence-Based Clinical Protocol Pathway 255',
    specialty: 'Specialty 4',
    targetConditionCode: 'COND-255',
    evidenceGrade: 'B',
    steps: [
      { stepNumber: 1, actionDescription: 'Initial clinical assessment and baseline laboratory evaluation', mandatory: true, timingWindowHours: 1 },
      { stepNumber: 2, actionDescription: 'Administration of first-line therapeutic intervention', mandatory: true, timingWindowHours: 2 },
      { stepNumber: 3, actionDescription: 'Re-evaluation of vital telemetry and early warning score', mandatory: true, timingWindowHours: 4 }
    ]
  },
  {
    protocolId: 'CP-PROTOCOL-256',
    protocolTitle: 'Evidence-Based Clinical Protocol Pathway 256',
    specialty: 'Specialty 5',
    targetConditionCode: 'COND-256',
    evidenceGrade: 'A',
    steps: [
      { stepNumber: 1, actionDescription: 'Initial clinical assessment and baseline laboratory evaluation', mandatory: true, timingWindowHours: 1 },
      { stepNumber: 2, actionDescription: 'Administration of first-line therapeutic intervention', mandatory: true, timingWindowHours: 2 },
      { stepNumber: 3, actionDescription: 'Re-evaluation of vital telemetry and early warning score', mandatory: true, timingWindowHours: 4 }
    ]
  },
  {
    protocolId: 'CP-PROTOCOL-257',
    protocolTitle: 'Evidence-Based Clinical Protocol Pathway 257',
    specialty: 'Specialty 6',
    targetConditionCode: 'COND-257',
    evidenceGrade: 'B',
    steps: [
      { stepNumber: 1, actionDescription: 'Initial clinical assessment and baseline laboratory evaluation', mandatory: true, timingWindowHours: 1 },
      { stepNumber: 2, actionDescription: 'Administration of first-line therapeutic intervention', mandatory: true, timingWindowHours: 2 },
      { stepNumber: 3, actionDescription: 'Re-evaluation of vital telemetry and early warning score', mandatory: true, timingWindowHours: 4 }
    ]
  },
  {
    protocolId: 'CP-PROTOCOL-258',
    protocolTitle: 'Evidence-Based Clinical Protocol Pathway 258',
    specialty: 'Specialty 7',
    targetConditionCode: 'COND-258',
    evidenceGrade: 'A',
    steps: [
      { stepNumber: 1, actionDescription: 'Initial clinical assessment and baseline laboratory evaluation', mandatory: true, timingWindowHours: 1 },
      { stepNumber: 2, actionDescription: 'Administration of first-line therapeutic intervention', mandatory: true, timingWindowHours: 2 },
      { stepNumber: 3, actionDescription: 'Re-evaluation of vital telemetry and early warning score', mandatory: true, timingWindowHours: 4 }
    ]
  },
  {
    protocolId: 'CP-PROTOCOL-259',
    protocolTitle: 'Evidence-Based Clinical Protocol Pathway 259',
    specialty: 'Specialty 8',
    targetConditionCode: 'COND-259',
    evidenceGrade: 'B',
    steps: [
      { stepNumber: 1, actionDescription: 'Initial clinical assessment and baseline laboratory evaluation', mandatory: true, timingWindowHours: 1 },
      { stepNumber: 2, actionDescription: 'Administration of first-line therapeutic intervention', mandatory: true, timingWindowHours: 2 },
      { stepNumber: 3, actionDescription: 'Re-evaluation of vital telemetry and early warning score', mandatory: true, timingWindowHours: 4 }
    ]
  },
  {
    protocolId: 'CP-PROTOCOL-260',
    protocolTitle: 'Evidence-Based Clinical Protocol Pathway 260',
    specialty: 'Specialty 9',
    targetConditionCode: 'COND-260',
    evidenceGrade: 'A',
    steps: [
      { stepNumber: 1, actionDescription: 'Initial clinical assessment and baseline laboratory evaluation', mandatory: true, timingWindowHours: 1 },
      { stepNumber: 2, actionDescription: 'Administration of first-line therapeutic intervention', mandatory: true, timingWindowHours: 2 },
      { stepNumber: 3, actionDescription: 'Re-evaluation of vital telemetry and early warning score', mandatory: true, timingWindowHours: 4 }
    ]
  },
  {
    protocolId: 'CP-PROTOCOL-261',
    protocolTitle: 'Evidence-Based Clinical Protocol Pathway 261',
    specialty: 'Specialty 10',
    targetConditionCode: 'COND-261',
    evidenceGrade: 'B',
    steps: [
      { stepNumber: 1, actionDescription: 'Initial clinical assessment and baseline laboratory evaluation', mandatory: true, timingWindowHours: 1 },
      { stepNumber: 2, actionDescription: 'Administration of first-line therapeutic intervention', mandatory: true, timingWindowHours: 2 },
      { stepNumber: 3, actionDescription: 'Re-evaluation of vital telemetry and early warning score', mandatory: true, timingWindowHours: 4 }
    ]
  },
  {
    protocolId: 'CP-PROTOCOL-262',
    protocolTitle: 'Evidence-Based Clinical Protocol Pathway 262',
    specialty: 'Specialty 11',
    targetConditionCode: 'COND-262',
    evidenceGrade: 'A',
    steps: [
      { stepNumber: 1, actionDescription: 'Initial clinical assessment and baseline laboratory evaluation', mandatory: true, timingWindowHours: 1 },
      { stepNumber: 2, actionDescription: 'Administration of first-line therapeutic intervention', mandatory: true, timingWindowHours: 2 },
      { stepNumber: 3, actionDescription: 'Re-evaluation of vital telemetry and early warning score', mandatory: true, timingWindowHours: 4 }
    ]
  },
  {
    protocolId: 'CP-PROTOCOL-263',
    protocolTitle: 'Evidence-Based Clinical Protocol Pathway 263',
    specialty: 'Specialty 12',
    targetConditionCode: 'COND-263',
    evidenceGrade: 'B',
    steps: [
      { stepNumber: 1, actionDescription: 'Initial clinical assessment and baseline laboratory evaluation', mandatory: true, timingWindowHours: 1 },
      { stepNumber: 2, actionDescription: 'Administration of first-line therapeutic intervention', mandatory: true, timingWindowHours: 2 },
      { stepNumber: 3, actionDescription: 'Re-evaluation of vital telemetry and early warning score', mandatory: true, timingWindowHours: 4 }
    ]
  },
  {
    protocolId: 'CP-PROTOCOL-264',
    protocolTitle: 'Evidence-Based Clinical Protocol Pathway 264',
    specialty: 'Specialty 1',
    targetConditionCode: 'COND-264',
    evidenceGrade: 'A',
    steps: [
      { stepNumber: 1, actionDescription: 'Initial clinical assessment and baseline laboratory evaluation', mandatory: true, timingWindowHours: 1 },
      { stepNumber: 2, actionDescription: 'Administration of first-line therapeutic intervention', mandatory: true, timingWindowHours: 2 },
      { stepNumber: 3, actionDescription: 'Re-evaluation of vital telemetry and early warning score', mandatory: true, timingWindowHours: 4 }
    ]
  },
  {
    protocolId: 'CP-PROTOCOL-265',
    protocolTitle: 'Evidence-Based Clinical Protocol Pathway 265',
    specialty: 'Specialty 2',
    targetConditionCode: 'COND-265',
    evidenceGrade: 'B',
    steps: [
      { stepNumber: 1, actionDescription: 'Initial clinical assessment and baseline laboratory evaluation', mandatory: true, timingWindowHours: 1 },
      { stepNumber: 2, actionDescription: 'Administration of first-line therapeutic intervention', mandatory: true, timingWindowHours: 2 },
      { stepNumber: 3, actionDescription: 'Re-evaluation of vital telemetry and early warning score', mandatory: true, timingWindowHours: 4 }
    ]
  },
  {
    protocolId: 'CP-PROTOCOL-266',
    protocolTitle: 'Evidence-Based Clinical Protocol Pathway 266',
    specialty: 'Specialty 3',
    targetConditionCode: 'COND-266',
    evidenceGrade: 'A',
    steps: [
      { stepNumber: 1, actionDescription: 'Initial clinical assessment and baseline laboratory evaluation', mandatory: true, timingWindowHours: 1 },
      { stepNumber: 2, actionDescription: 'Administration of first-line therapeutic intervention', mandatory: true, timingWindowHours: 2 },
      { stepNumber: 3, actionDescription: 'Re-evaluation of vital telemetry and early warning score', mandatory: true, timingWindowHours: 4 }
    ]
  },
  {
    protocolId: 'CP-PROTOCOL-267',
    protocolTitle: 'Evidence-Based Clinical Protocol Pathway 267',
    specialty: 'Specialty 4',
    targetConditionCode: 'COND-267',
    evidenceGrade: 'B',
    steps: [
      { stepNumber: 1, actionDescription: 'Initial clinical assessment and baseline laboratory evaluation', mandatory: true, timingWindowHours: 1 },
      { stepNumber: 2, actionDescription: 'Administration of first-line therapeutic intervention', mandatory: true, timingWindowHours: 2 },
      { stepNumber: 3, actionDescription: 'Re-evaluation of vital telemetry and early warning score', mandatory: true, timingWindowHours: 4 }
    ]
  },
  {
    protocolId: 'CP-PROTOCOL-268',
    protocolTitle: 'Evidence-Based Clinical Protocol Pathway 268',
    specialty: 'Specialty 5',
    targetConditionCode: 'COND-268',
    evidenceGrade: 'A',
    steps: [
      { stepNumber: 1, actionDescription: 'Initial clinical assessment and baseline laboratory evaluation', mandatory: true, timingWindowHours: 1 },
      { stepNumber: 2, actionDescription: 'Administration of first-line therapeutic intervention', mandatory: true, timingWindowHours: 2 },
      { stepNumber: 3, actionDescription: 'Re-evaluation of vital telemetry and early warning score', mandatory: true, timingWindowHours: 4 }
    ]
  },
  {
    protocolId: 'CP-PROTOCOL-269',
    protocolTitle: 'Evidence-Based Clinical Protocol Pathway 269',
    specialty: 'Specialty 6',
    targetConditionCode: 'COND-269',
    evidenceGrade: 'B',
    steps: [
      { stepNumber: 1, actionDescription: 'Initial clinical assessment and baseline laboratory evaluation', mandatory: true, timingWindowHours: 1 },
      { stepNumber: 2, actionDescription: 'Administration of first-line therapeutic intervention', mandatory: true, timingWindowHours: 2 },
      { stepNumber: 3, actionDescription: 'Re-evaluation of vital telemetry and early warning score', mandatory: true, timingWindowHours: 4 }
    ]
  },
  {
    protocolId: 'CP-PROTOCOL-270',
    protocolTitle: 'Evidence-Based Clinical Protocol Pathway 270',
    specialty: 'Specialty 7',
    targetConditionCode: 'COND-270',
    evidenceGrade: 'A',
    steps: [
      { stepNumber: 1, actionDescription: 'Initial clinical assessment and baseline laboratory evaluation', mandatory: true, timingWindowHours: 1 },
      { stepNumber: 2, actionDescription: 'Administration of first-line therapeutic intervention', mandatory: true, timingWindowHours: 2 },
      { stepNumber: 3, actionDescription: 'Re-evaluation of vital telemetry and early warning score', mandatory: true, timingWindowHours: 4 }
    ]
  },
  {
    protocolId: 'CP-PROTOCOL-271',
    protocolTitle: 'Evidence-Based Clinical Protocol Pathway 271',
    specialty: 'Specialty 8',
    targetConditionCode: 'COND-271',
    evidenceGrade: 'B',
    steps: [
      { stepNumber: 1, actionDescription: 'Initial clinical assessment and baseline laboratory evaluation', mandatory: true, timingWindowHours: 1 },
      { stepNumber: 2, actionDescription: 'Administration of first-line therapeutic intervention', mandatory: true, timingWindowHours: 2 },
      { stepNumber: 3, actionDescription: 'Re-evaluation of vital telemetry and early warning score', mandatory: true, timingWindowHours: 4 }
    ]
  },
  {
    protocolId: 'CP-PROTOCOL-272',
    protocolTitle: 'Evidence-Based Clinical Protocol Pathway 272',
    specialty: 'Specialty 9',
    targetConditionCode: 'COND-272',
    evidenceGrade: 'A',
    steps: [
      { stepNumber: 1, actionDescription: 'Initial clinical assessment and baseline laboratory evaluation', mandatory: true, timingWindowHours: 1 },
      { stepNumber: 2, actionDescription: 'Administration of first-line therapeutic intervention', mandatory: true, timingWindowHours: 2 },
      { stepNumber: 3, actionDescription: 'Re-evaluation of vital telemetry and early warning score', mandatory: true, timingWindowHours: 4 }
    ]
  },
  {
    protocolId: 'CP-PROTOCOL-273',
    protocolTitle: 'Evidence-Based Clinical Protocol Pathway 273',
    specialty: 'Specialty 10',
    targetConditionCode: 'COND-273',
    evidenceGrade: 'B',
    steps: [
      { stepNumber: 1, actionDescription: 'Initial clinical assessment and baseline laboratory evaluation', mandatory: true, timingWindowHours: 1 },
      { stepNumber: 2, actionDescription: 'Administration of first-line therapeutic intervention', mandatory: true, timingWindowHours: 2 },
      { stepNumber: 3, actionDescription: 'Re-evaluation of vital telemetry and early warning score', mandatory: true, timingWindowHours: 4 }
    ]
  },
  {
    protocolId: 'CP-PROTOCOL-274',
    protocolTitle: 'Evidence-Based Clinical Protocol Pathway 274',
    specialty: 'Specialty 11',
    targetConditionCode: 'COND-274',
    evidenceGrade: 'A',
    steps: [
      { stepNumber: 1, actionDescription: 'Initial clinical assessment and baseline laboratory evaluation', mandatory: true, timingWindowHours: 1 },
      { stepNumber: 2, actionDescription: 'Administration of first-line therapeutic intervention', mandatory: true, timingWindowHours: 2 },
      { stepNumber: 3, actionDescription: 'Re-evaluation of vital telemetry and early warning score', mandatory: true, timingWindowHours: 4 }
    ]
  },
  {
    protocolId: 'CP-PROTOCOL-275',
    protocolTitle: 'Evidence-Based Clinical Protocol Pathway 275',
    specialty: 'Specialty 12',
    targetConditionCode: 'COND-275',
    evidenceGrade: 'B',
    steps: [
      { stepNumber: 1, actionDescription: 'Initial clinical assessment and baseline laboratory evaluation', mandatory: true, timingWindowHours: 1 },
      { stepNumber: 2, actionDescription: 'Administration of first-line therapeutic intervention', mandatory: true, timingWindowHours: 2 },
      { stepNumber: 3, actionDescription: 'Re-evaluation of vital telemetry and early warning score', mandatory: true, timingWindowHours: 4 }
    ]
  },
  {
    protocolId: 'CP-PROTOCOL-276',
    protocolTitle: 'Evidence-Based Clinical Protocol Pathway 276',
    specialty: 'Specialty 1',
    targetConditionCode: 'COND-276',
    evidenceGrade: 'A',
    steps: [
      { stepNumber: 1, actionDescription: 'Initial clinical assessment and baseline laboratory evaluation', mandatory: true, timingWindowHours: 1 },
      { stepNumber: 2, actionDescription: 'Administration of first-line therapeutic intervention', mandatory: true, timingWindowHours: 2 },
      { stepNumber: 3, actionDescription: 'Re-evaluation of vital telemetry and early warning score', mandatory: true, timingWindowHours: 4 }
    ]
  },
  {
    protocolId: 'CP-PROTOCOL-277',
    protocolTitle: 'Evidence-Based Clinical Protocol Pathway 277',
    specialty: 'Specialty 2',
    targetConditionCode: 'COND-277',
    evidenceGrade: 'B',
    steps: [
      { stepNumber: 1, actionDescription: 'Initial clinical assessment and baseline laboratory evaluation', mandatory: true, timingWindowHours: 1 },
      { stepNumber: 2, actionDescription: 'Administration of first-line therapeutic intervention', mandatory: true, timingWindowHours: 2 },
      { stepNumber: 3, actionDescription: 'Re-evaluation of vital telemetry and early warning score', mandatory: true, timingWindowHours: 4 }
    ]
  },
  {
    protocolId: 'CP-PROTOCOL-278',
    protocolTitle: 'Evidence-Based Clinical Protocol Pathway 278',
    specialty: 'Specialty 3',
    targetConditionCode: 'COND-278',
    evidenceGrade: 'A',
    steps: [
      { stepNumber: 1, actionDescription: 'Initial clinical assessment and baseline laboratory evaluation', mandatory: true, timingWindowHours: 1 },
      { stepNumber: 2, actionDescription: 'Administration of first-line therapeutic intervention', mandatory: true, timingWindowHours: 2 },
      { stepNumber: 3, actionDescription: 'Re-evaluation of vital telemetry and early warning score', mandatory: true, timingWindowHours: 4 }
    ]
  },
  {
    protocolId: 'CP-PROTOCOL-279',
    protocolTitle: 'Evidence-Based Clinical Protocol Pathway 279',
    specialty: 'Specialty 4',
    targetConditionCode: 'COND-279',
    evidenceGrade: 'B',
    steps: [
      { stepNumber: 1, actionDescription: 'Initial clinical assessment and baseline laboratory evaluation', mandatory: true, timingWindowHours: 1 },
      { stepNumber: 2, actionDescription: 'Administration of first-line therapeutic intervention', mandatory: true, timingWindowHours: 2 },
      { stepNumber: 3, actionDescription: 'Re-evaluation of vital telemetry and early warning score', mandatory: true, timingWindowHours: 4 }
    ]
  },
  {
    protocolId: 'CP-PROTOCOL-280',
    protocolTitle: 'Evidence-Based Clinical Protocol Pathway 280',
    specialty: 'Specialty 5',
    targetConditionCode: 'COND-280',
    evidenceGrade: 'A',
    steps: [
      { stepNumber: 1, actionDescription: 'Initial clinical assessment and baseline laboratory evaluation', mandatory: true, timingWindowHours: 1 },
      { stepNumber: 2, actionDescription: 'Administration of first-line therapeutic intervention', mandatory: true, timingWindowHours: 2 },
      { stepNumber: 3, actionDescription: 'Re-evaluation of vital telemetry and early warning score', mandatory: true, timingWindowHours: 4 }
    ]
  },
  {
    protocolId: 'CP-PROTOCOL-281',
    protocolTitle: 'Evidence-Based Clinical Protocol Pathway 281',
    specialty: 'Specialty 6',
    targetConditionCode: 'COND-281',
    evidenceGrade: 'B',
    steps: [
      { stepNumber: 1, actionDescription: 'Initial clinical assessment and baseline laboratory evaluation', mandatory: true, timingWindowHours: 1 },
      { stepNumber: 2, actionDescription: 'Administration of first-line therapeutic intervention', mandatory: true, timingWindowHours: 2 },
      { stepNumber: 3, actionDescription: 'Re-evaluation of vital telemetry and early warning score', mandatory: true, timingWindowHours: 4 }
    ]
  },
  {
    protocolId: 'CP-PROTOCOL-282',
    protocolTitle: 'Evidence-Based Clinical Protocol Pathway 282',
    specialty: 'Specialty 7',
    targetConditionCode: 'COND-282',
    evidenceGrade: 'A',
    steps: [
      { stepNumber: 1, actionDescription: 'Initial clinical assessment and baseline laboratory evaluation', mandatory: true, timingWindowHours: 1 },
      { stepNumber: 2, actionDescription: 'Administration of first-line therapeutic intervention', mandatory: true, timingWindowHours: 2 },
      { stepNumber: 3, actionDescription: 'Re-evaluation of vital telemetry and early warning score', mandatory: true, timingWindowHours: 4 }
    ]
  },
  {
    protocolId: 'CP-PROTOCOL-283',
    protocolTitle: 'Evidence-Based Clinical Protocol Pathway 283',
    specialty: 'Specialty 8',
    targetConditionCode: 'COND-283',
    evidenceGrade: 'B',
    steps: [
      { stepNumber: 1, actionDescription: 'Initial clinical assessment and baseline laboratory evaluation', mandatory: true, timingWindowHours: 1 },
      { stepNumber: 2, actionDescription: 'Administration of first-line therapeutic intervention', mandatory: true, timingWindowHours: 2 },
      { stepNumber: 3, actionDescription: 'Re-evaluation of vital telemetry and early warning score', mandatory: true, timingWindowHours: 4 }
    ]
  },
  {
    protocolId: 'CP-PROTOCOL-284',
    protocolTitle: 'Evidence-Based Clinical Protocol Pathway 284',
    specialty: 'Specialty 9',
    targetConditionCode: 'COND-284',
    evidenceGrade: 'A',
    steps: [
      { stepNumber: 1, actionDescription: 'Initial clinical assessment and baseline laboratory evaluation', mandatory: true, timingWindowHours: 1 },
      { stepNumber: 2, actionDescription: 'Administration of first-line therapeutic intervention', mandatory: true, timingWindowHours: 2 },
      { stepNumber: 3, actionDescription: 'Re-evaluation of vital telemetry and early warning score', mandatory: true, timingWindowHours: 4 }
    ]
  },
  {
    protocolId: 'CP-PROTOCOL-285',
    protocolTitle: 'Evidence-Based Clinical Protocol Pathway 285',
    specialty: 'Specialty 10',
    targetConditionCode: 'COND-285',
    evidenceGrade: 'B',
    steps: [
      { stepNumber: 1, actionDescription: 'Initial clinical assessment and baseline laboratory evaluation', mandatory: true, timingWindowHours: 1 },
      { stepNumber: 2, actionDescription: 'Administration of first-line therapeutic intervention', mandatory: true, timingWindowHours: 2 },
      { stepNumber: 3, actionDescription: 'Re-evaluation of vital telemetry and early warning score', mandatory: true, timingWindowHours: 4 }
    ]
  },
  {
    protocolId: 'CP-PROTOCOL-286',
    protocolTitle: 'Evidence-Based Clinical Protocol Pathway 286',
    specialty: 'Specialty 11',
    targetConditionCode: 'COND-286',
    evidenceGrade: 'A',
    steps: [
      { stepNumber: 1, actionDescription: 'Initial clinical assessment and baseline laboratory evaluation', mandatory: true, timingWindowHours: 1 },
      { stepNumber: 2, actionDescription: 'Administration of first-line therapeutic intervention', mandatory: true, timingWindowHours: 2 },
      { stepNumber: 3, actionDescription: 'Re-evaluation of vital telemetry and early warning score', mandatory: true, timingWindowHours: 4 }
    ]
  },
  {
    protocolId: 'CP-PROTOCOL-287',
    protocolTitle: 'Evidence-Based Clinical Protocol Pathway 287',
    specialty: 'Specialty 12',
    targetConditionCode: 'COND-287',
    evidenceGrade: 'B',
    steps: [
      { stepNumber: 1, actionDescription: 'Initial clinical assessment and baseline laboratory evaluation', mandatory: true, timingWindowHours: 1 },
      { stepNumber: 2, actionDescription: 'Administration of first-line therapeutic intervention', mandatory: true, timingWindowHours: 2 },
      { stepNumber: 3, actionDescription: 'Re-evaluation of vital telemetry and early warning score', mandatory: true, timingWindowHours: 4 }
    ]
  },
  {
    protocolId: 'CP-PROTOCOL-288',
    protocolTitle: 'Evidence-Based Clinical Protocol Pathway 288',
    specialty: 'Specialty 1',
    targetConditionCode: 'COND-288',
    evidenceGrade: 'A',
    steps: [
      { stepNumber: 1, actionDescription: 'Initial clinical assessment and baseline laboratory evaluation', mandatory: true, timingWindowHours: 1 },
      { stepNumber: 2, actionDescription: 'Administration of first-line therapeutic intervention', mandatory: true, timingWindowHours: 2 },
      { stepNumber: 3, actionDescription: 'Re-evaluation of vital telemetry and early warning score', mandatory: true, timingWindowHours: 4 }
    ]
  },
  {
    protocolId: 'CP-PROTOCOL-289',
    protocolTitle: 'Evidence-Based Clinical Protocol Pathway 289',
    specialty: 'Specialty 2',
    targetConditionCode: 'COND-289',
    evidenceGrade: 'B',
    steps: [
      { stepNumber: 1, actionDescription: 'Initial clinical assessment and baseline laboratory evaluation', mandatory: true, timingWindowHours: 1 },
      { stepNumber: 2, actionDescription: 'Administration of first-line therapeutic intervention', mandatory: true, timingWindowHours: 2 },
      { stepNumber: 3, actionDescription: 'Re-evaluation of vital telemetry and early warning score', mandatory: true, timingWindowHours: 4 }
    ]
  },
  {
    protocolId: 'CP-PROTOCOL-290',
    protocolTitle: 'Evidence-Based Clinical Protocol Pathway 290',
    specialty: 'Specialty 3',
    targetConditionCode: 'COND-290',
    evidenceGrade: 'A',
    steps: [
      { stepNumber: 1, actionDescription: 'Initial clinical assessment and baseline laboratory evaluation', mandatory: true, timingWindowHours: 1 },
      { stepNumber: 2, actionDescription: 'Administration of first-line therapeutic intervention', mandatory: true, timingWindowHours: 2 },
      { stepNumber: 3, actionDescription: 'Re-evaluation of vital telemetry and early warning score', mandatory: true, timingWindowHours: 4 }
    ]
  },
  {
    protocolId: 'CP-PROTOCOL-291',
    protocolTitle: 'Evidence-Based Clinical Protocol Pathway 291',
    specialty: 'Specialty 4',
    targetConditionCode: 'COND-291',
    evidenceGrade: 'B',
    steps: [
      { stepNumber: 1, actionDescription: 'Initial clinical assessment and baseline laboratory evaluation', mandatory: true, timingWindowHours: 1 },
      { stepNumber: 2, actionDescription: 'Administration of first-line therapeutic intervention', mandatory: true, timingWindowHours: 2 },
      { stepNumber: 3, actionDescription: 'Re-evaluation of vital telemetry and early warning score', mandatory: true, timingWindowHours: 4 }
    ]
  },
  {
    protocolId: 'CP-PROTOCOL-292',
    protocolTitle: 'Evidence-Based Clinical Protocol Pathway 292',
    specialty: 'Specialty 5',
    targetConditionCode: 'COND-292',
    evidenceGrade: 'A',
    steps: [
      { stepNumber: 1, actionDescription: 'Initial clinical assessment and baseline laboratory evaluation', mandatory: true, timingWindowHours: 1 },
      { stepNumber: 2, actionDescription: 'Administration of first-line therapeutic intervention', mandatory: true, timingWindowHours: 2 },
      { stepNumber: 3, actionDescription: 'Re-evaluation of vital telemetry and early warning score', mandatory: true, timingWindowHours: 4 }
    ]
  },
  {
    protocolId: 'CP-PROTOCOL-293',
    protocolTitle: 'Evidence-Based Clinical Protocol Pathway 293',
    specialty: 'Specialty 6',
    targetConditionCode: 'COND-293',
    evidenceGrade: 'B',
    steps: [
      { stepNumber: 1, actionDescription: 'Initial clinical assessment and baseline laboratory evaluation', mandatory: true, timingWindowHours: 1 },
      { stepNumber: 2, actionDescription: 'Administration of first-line therapeutic intervention', mandatory: true, timingWindowHours: 2 },
      { stepNumber: 3, actionDescription: 'Re-evaluation of vital telemetry and early warning score', mandatory: true, timingWindowHours: 4 }
    ]
  },
  {
    protocolId: 'CP-PROTOCOL-294',
    protocolTitle: 'Evidence-Based Clinical Protocol Pathway 294',
    specialty: 'Specialty 7',
    targetConditionCode: 'COND-294',
    evidenceGrade: 'A',
    steps: [
      { stepNumber: 1, actionDescription: 'Initial clinical assessment and baseline laboratory evaluation', mandatory: true, timingWindowHours: 1 },
      { stepNumber: 2, actionDescription: 'Administration of first-line therapeutic intervention', mandatory: true, timingWindowHours: 2 },
      { stepNumber: 3, actionDescription: 'Re-evaluation of vital telemetry and early warning score', mandatory: true, timingWindowHours: 4 }
    ]
  },
  {
    protocolId: 'CP-PROTOCOL-295',
    protocolTitle: 'Evidence-Based Clinical Protocol Pathway 295',
    specialty: 'Specialty 8',
    targetConditionCode: 'COND-295',
    evidenceGrade: 'B',
    steps: [
      { stepNumber: 1, actionDescription: 'Initial clinical assessment and baseline laboratory evaluation', mandatory: true, timingWindowHours: 1 },
      { stepNumber: 2, actionDescription: 'Administration of first-line therapeutic intervention', mandatory: true, timingWindowHours: 2 },
      { stepNumber: 3, actionDescription: 'Re-evaluation of vital telemetry and early warning score', mandatory: true, timingWindowHours: 4 }
    ]
  },
  {
    protocolId: 'CP-PROTOCOL-296',
    protocolTitle: 'Evidence-Based Clinical Protocol Pathway 296',
    specialty: 'Specialty 9',
    targetConditionCode: 'COND-296',
    evidenceGrade: 'A',
    steps: [
      { stepNumber: 1, actionDescription: 'Initial clinical assessment and baseline laboratory evaluation', mandatory: true, timingWindowHours: 1 },
      { stepNumber: 2, actionDescription: 'Administration of first-line therapeutic intervention', mandatory: true, timingWindowHours: 2 },
      { stepNumber: 3, actionDescription: 'Re-evaluation of vital telemetry and early warning score', mandatory: true, timingWindowHours: 4 }
    ]
  },
  {
    protocolId: 'CP-PROTOCOL-297',
    protocolTitle: 'Evidence-Based Clinical Protocol Pathway 297',
    specialty: 'Specialty 10',
    targetConditionCode: 'COND-297',
    evidenceGrade: 'B',
    steps: [
      { stepNumber: 1, actionDescription: 'Initial clinical assessment and baseline laboratory evaluation', mandatory: true, timingWindowHours: 1 },
      { stepNumber: 2, actionDescription: 'Administration of first-line therapeutic intervention', mandatory: true, timingWindowHours: 2 },
      { stepNumber: 3, actionDescription: 'Re-evaluation of vital telemetry and early warning score', mandatory: true, timingWindowHours: 4 }
    ]
  },
  {
    protocolId: 'CP-PROTOCOL-298',
    protocolTitle: 'Evidence-Based Clinical Protocol Pathway 298',
    specialty: 'Specialty 11',
    targetConditionCode: 'COND-298',
    evidenceGrade: 'A',
    steps: [
      { stepNumber: 1, actionDescription: 'Initial clinical assessment and baseline laboratory evaluation', mandatory: true, timingWindowHours: 1 },
      { stepNumber: 2, actionDescription: 'Administration of first-line therapeutic intervention', mandatory: true, timingWindowHours: 2 },
      { stepNumber: 3, actionDescription: 'Re-evaluation of vital telemetry and early warning score', mandatory: true, timingWindowHours: 4 }
    ]
  },
  {
    protocolId: 'CP-PROTOCOL-299',
    protocolTitle: 'Evidence-Based Clinical Protocol Pathway 299',
    specialty: 'Specialty 12',
    targetConditionCode: 'COND-299',
    evidenceGrade: 'B',
    steps: [
      { stepNumber: 1, actionDescription: 'Initial clinical assessment and baseline laboratory evaluation', mandatory: true, timingWindowHours: 1 },
      { stepNumber: 2, actionDescription: 'Administration of first-line therapeutic intervention', mandatory: true, timingWindowHours: 2 },
      { stepNumber: 3, actionDescription: 'Re-evaluation of vital telemetry and early warning score', mandatory: true, timingWindowHours: 4 }
    ]
  },
  {
    protocolId: 'CP-PROTOCOL-300',
    protocolTitle: 'Evidence-Based Clinical Protocol Pathway 300',
    specialty: 'Specialty 1',
    targetConditionCode: 'COND-300',
    evidenceGrade: 'A',
    steps: [
      { stepNumber: 1, actionDescription: 'Initial clinical assessment and baseline laboratory evaluation', mandatory: true, timingWindowHours: 1 },
      { stepNumber: 2, actionDescription: 'Administration of first-line therapeutic intervention', mandatory: true, timingWindowHours: 2 },
      { stepNumber: 3, actionDescription: 'Re-evaluation of vital telemetry and early warning score', mandatory: true, timingWindowHours: 4 }
    ]
  },
  {
    protocolId: 'CP-PROTOCOL-301',
    protocolTitle: 'Evidence-Based Clinical Protocol Pathway 301',
    specialty: 'Specialty 2',
    targetConditionCode: 'COND-301',
    evidenceGrade: 'B',
    steps: [
      { stepNumber: 1, actionDescription: 'Initial clinical assessment and baseline laboratory evaluation', mandatory: true, timingWindowHours: 1 },
      { stepNumber: 2, actionDescription: 'Administration of first-line therapeutic intervention', mandatory: true, timingWindowHours: 2 },
      { stepNumber: 3, actionDescription: 'Re-evaluation of vital telemetry and early warning score', mandatory: true, timingWindowHours: 4 }
    ]
  },
  {
    protocolId: 'CP-PROTOCOL-302',
    protocolTitle: 'Evidence-Based Clinical Protocol Pathway 302',
    specialty: 'Specialty 3',
    targetConditionCode: 'COND-302',
    evidenceGrade: 'A',
    steps: [
      { stepNumber: 1, actionDescription: 'Initial clinical assessment and baseline laboratory evaluation', mandatory: true, timingWindowHours: 1 },
      { stepNumber: 2, actionDescription: 'Administration of first-line therapeutic intervention', mandatory: true, timingWindowHours: 2 },
      { stepNumber: 3, actionDescription: 'Re-evaluation of vital telemetry and early warning score', mandatory: true, timingWindowHours: 4 }
    ]
  },
  {
    protocolId: 'CP-PROTOCOL-303',
    protocolTitle: 'Evidence-Based Clinical Protocol Pathway 303',
    specialty: 'Specialty 4',
    targetConditionCode: 'COND-303',
    evidenceGrade: 'B',
    steps: [
      { stepNumber: 1, actionDescription: 'Initial clinical assessment and baseline laboratory evaluation', mandatory: true, timingWindowHours: 1 },
      { stepNumber: 2, actionDescription: 'Administration of first-line therapeutic intervention', mandatory: true, timingWindowHours: 2 },
      { stepNumber: 3, actionDescription: 'Re-evaluation of vital telemetry and early warning score', mandatory: true, timingWindowHours: 4 }
    ]
  },
  {
    protocolId: 'CP-PROTOCOL-304',
    protocolTitle: 'Evidence-Based Clinical Protocol Pathway 304',
    specialty: 'Specialty 5',
    targetConditionCode: 'COND-304',
    evidenceGrade: 'A',
    steps: [
      { stepNumber: 1, actionDescription: 'Initial clinical assessment and baseline laboratory evaluation', mandatory: true, timingWindowHours: 1 },
      { stepNumber: 2, actionDescription: 'Administration of first-line therapeutic intervention', mandatory: true, timingWindowHours: 2 },
      { stepNumber: 3, actionDescription: 'Re-evaluation of vital telemetry and early warning score', mandatory: true, timingWindowHours: 4 }
    ]
  },
  {
    protocolId: 'CP-PROTOCOL-305',
    protocolTitle: 'Evidence-Based Clinical Protocol Pathway 305',
    specialty: 'Specialty 6',
    targetConditionCode: 'COND-305',
    evidenceGrade: 'B',
    steps: [
      { stepNumber: 1, actionDescription: 'Initial clinical assessment and baseline laboratory evaluation', mandatory: true, timingWindowHours: 1 },
      { stepNumber: 2, actionDescription: 'Administration of first-line therapeutic intervention', mandatory: true, timingWindowHours: 2 },
      { stepNumber: 3, actionDescription: 'Re-evaluation of vital telemetry and early warning score', mandatory: true, timingWindowHours: 4 }
    ]
  },
  {
    protocolId: 'CP-PROTOCOL-306',
    protocolTitle: 'Evidence-Based Clinical Protocol Pathway 306',
    specialty: 'Specialty 7',
    targetConditionCode: 'COND-306',
    evidenceGrade: 'A',
    steps: [
      { stepNumber: 1, actionDescription: 'Initial clinical assessment and baseline laboratory evaluation', mandatory: true, timingWindowHours: 1 },
      { stepNumber: 2, actionDescription: 'Administration of first-line therapeutic intervention', mandatory: true, timingWindowHours: 2 },
      { stepNumber: 3, actionDescription: 'Re-evaluation of vital telemetry and early warning score', mandatory: true, timingWindowHours: 4 }
    ]
  },
  {
    protocolId: 'CP-PROTOCOL-307',
    protocolTitle: 'Evidence-Based Clinical Protocol Pathway 307',
    specialty: 'Specialty 8',
    targetConditionCode: 'COND-307',
    evidenceGrade: 'B',
    steps: [
      { stepNumber: 1, actionDescription: 'Initial clinical assessment and baseline laboratory evaluation', mandatory: true, timingWindowHours: 1 },
      { stepNumber: 2, actionDescription: 'Administration of first-line therapeutic intervention', mandatory: true, timingWindowHours: 2 },
      { stepNumber: 3, actionDescription: 'Re-evaluation of vital telemetry and early warning score', mandatory: true, timingWindowHours: 4 }
    ]
  },
  {
    protocolId: 'CP-PROTOCOL-308',
    protocolTitle: 'Evidence-Based Clinical Protocol Pathway 308',
    specialty: 'Specialty 9',
    targetConditionCode: 'COND-308',
    evidenceGrade: 'A',
    steps: [
      { stepNumber: 1, actionDescription: 'Initial clinical assessment and baseline laboratory evaluation', mandatory: true, timingWindowHours: 1 },
      { stepNumber: 2, actionDescription: 'Administration of first-line therapeutic intervention', mandatory: true, timingWindowHours: 2 },
      { stepNumber: 3, actionDescription: 'Re-evaluation of vital telemetry and early warning score', mandatory: true, timingWindowHours: 4 }
    ]
  },
  {
    protocolId: 'CP-PROTOCOL-309',
    protocolTitle: 'Evidence-Based Clinical Protocol Pathway 309',
    specialty: 'Specialty 10',
    targetConditionCode: 'COND-309',
    evidenceGrade: 'B',
    steps: [
      { stepNumber: 1, actionDescription: 'Initial clinical assessment and baseline laboratory evaluation', mandatory: true, timingWindowHours: 1 },
      { stepNumber: 2, actionDescription: 'Administration of first-line therapeutic intervention', mandatory: true, timingWindowHours: 2 },
      { stepNumber: 3, actionDescription: 'Re-evaluation of vital telemetry and early warning score', mandatory: true, timingWindowHours: 4 }
    ]
  },
  {
    protocolId: 'CP-PROTOCOL-310',
    protocolTitle: 'Evidence-Based Clinical Protocol Pathway 310',
    specialty: 'Specialty 11',
    targetConditionCode: 'COND-310',
    evidenceGrade: 'A',
    steps: [
      { stepNumber: 1, actionDescription: 'Initial clinical assessment and baseline laboratory evaluation', mandatory: true, timingWindowHours: 1 },
      { stepNumber: 2, actionDescription: 'Administration of first-line therapeutic intervention', mandatory: true, timingWindowHours: 2 },
      { stepNumber: 3, actionDescription: 'Re-evaluation of vital telemetry and early warning score', mandatory: true, timingWindowHours: 4 }
    ]
  },
  {
    protocolId: 'CP-PROTOCOL-311',
    protocolTitle: 'Evidence-Based Clinical Protocol Pathway 311',
    specialty: 'Specialty 12',
    targetConditionCode: 'COND-311',
    evidenceGrade: 'B',
    steps: [
      { stepNumber: 1, actionDescription: 'Initial clinical assessment and baseline laboratory evaluation', mandatory: true, timingWindowHours: 1 },
      { stepNumber: 2, actionDescription: 'Administration of first-line therapeutic intervention', mandatory: true, timingWindowHours: 2 },
      { stepNumber: 3, actionDescription: 'Re-evaluation of vital telemetry and early warning score', mandatory: true, timingWindowHours: 4 }
    ]
  },
  {
    protocolId: 'CP-PROTOCOL-312',
    protocolTitle: 'Evidence-Based Clinical Protocol Pathway 312',
    specialty: 'Specialty 1',
    targetConditionCode: 'COND-312',
    evidenceGrade: 'A',
    steps: [
      { stepNumber: 1, actionDescription: 'Initial clinical assessment and baseline laboratory evaluation', mandatory: true, timingWindowHours: 1 },
      { stepNumber: 2, actionDescription: 'Administration of first-line therapeutic intervention', mandatory: true, timingWindowHours: 2 },
      { stepNumber: 3, actionDescription: 'Re-evaluation of vital telemetry and early warning score', mandatory: true, timingWindowHours: 4 }
    ]
  },
  {
    protocolId: 'CP-PROTOCOL-313',
    protocolTitle: 'Evidence-Based Clinical Protocol Pathway 313',
    specialty: 'Specialty 2',
    targetConditionCode: 'COND-313',
    evidenceGrade: 'B',
    steps: [
      { stepNumber: 1, actionDescription: 'Initial clinical assessment and baseline laboratory evaluation', mandatory: true, timingWindowHours: 1 },
      { stepNumber: 2, actionDescription: 'Administration of first-line therapeutic intervention', mandatory: true, timingWindowHours: 2 },
      { stepNumber: 3, actionDescription: 'Re-evaluation of vital telemetry and early warning score', mandatory: true, timingWindowHours: 4 }
    ]
  },
  {
    protocolId: 'CP-PROTOCOL-314',
    protocolTitle: 'Evidence-Based Clinical Protocol Pathway 314',
    specialty: 'Specialty 3',
    targetConditionCode: 'COND-314',
    evidenceGrade: 'A',
    steps: [
      { stepNumber: 1, actionDescription: 'Initial clinical assessment and baseline laboratory evaluation', mandatory: true, timingWindowHours: 1 },
      { stepNumber: 2, actionDescription: 'Administration of first-line therapeutic intervention', mandatory: true, timingWindowHours: 2 },
      { stepNumber: 3, actionDescription: 'Re-evaluation of vital telemetry and early warning score', mandatory: true, timingWindowHours: 4 }
    ]
  },
  {
    protocolId: 'CP-PROTOCOL-315',
    protocolTitle: 'Evidence-Based Clinical Protocol Pathway 315',
    specialty: 'Specialty 4',
    targetConditionCode: 'COND-315',
    evidenceGrade: 'B',
    steps: [
      { stepNumber: 1, actionDescription: 'Initial clinical assessment and baseline laboratory evaluation', mandatory: true, timingWindowHours: 1 },
      { stepNumber: 2, actionDescription: 'Administration of first-line therapeutic intervention', mandatory: true, timingWindowHours: 2 },
      { stepNumber: 3, actionDescription: 'Re-evaluation of vital telemetry and early warning score', mandatory: true, timingWindowHours: 4 }
    ]
  },
  {
    protocolId: 'CP-PROTOCOL-316',
    protocolTitle: 'Evidence-Based Clinical Protocol Pathway 316',
    specialty: 'Specialty 5',
    targetConditionCode: 'COND-316',
    evidenceGrade: 'A',
    steps: [
      { stepNumber: 1, actionDescription: 'Initial clinical assessment and baseline laboratory evaluation', mandatory: true, timingWindowHours: 1 },
      { stepNumber: 2, actionDescription: 'Administration of first-line therapeutic intervention', mandatory: true, timingWindowHours: 2 },
      { stepNumber: 3, actionDescription: 'Re-evaluation of vital telemetry and early warning score', mandatory: true, timingWindowHours: 4 }
    ]
  },
  {
    protocolId: 'CP-PROTOCOL-317',
    protocolTitle: 'Evidence-Based Clinical Protocol Pathway 317',
    specialty: 'Specialty 6',
    targetConditionCode: 'COND-317',
    evidenceGrade: 'B',
    steps: [
      { stepNumber: 1, actionDescription: 'Initial clinical assessment and baseline laboratory evaluation', mandatory: true, timingWindowHours: 1 },
      { stepNumber: 2, actionDescription: 'Administration of first-line therapeutic intervention', mandatory: true, timingWindowHours: 2 },
      { stepNumber: 3, actionDescription: 'Re-evaluation of vital telemetry and early warning score', mandatory: true, timingWindowHours: 4 }
    ]
  },
  {
    protocolId: 'CP-PROTOCOL-318',
    protocolTitle: 'Evidence-Based Clinical Protocol Pathway 318',
    specialty: 'Specialty 7',
    targetConditionCode: 'COND-318',
    evidenceGrade: 'A',
    steps: [
      { stepNumber: 1, actionDescription: 'Initial clinical assessment and baseline laboratory evaluation', mandatory: true, timingWindowHours: 1 },
      { stepNumber: 2, actionDescription: 'Administration of first-line therapeutic intervention', mandatory: true, timingWindowHours: 2 },
      { stepNumber: 3, actionDescription: 'Re-evaluation of vital telemetry and early warning score', mandatory: true, timingWindowHours: 4 }
    ]
  },
  {
    protocolId: 'CP-PROTOCOL-319',
    protocolTitle: 'Evidence-Based Clinical Protocol Pathway 319',
    specialty: 'Specialty 8',
    targetConditionCode: 'COND-319',
    evidenceGrade: 'B',
    steps: [
      { stepNumber: 1, actionDescription: 'Initial clinical assessment and baseline laboratory evaluation', mandatory: true, timingWindowHours: 1 },
      { stepNumber: 2, actionDescription: 'Administration of first-line therapeutic intervention', mandatory: true, timingWindowHours: 2 },
      { stepNumber: 3, actionDescription: 'Re-evaluation of vital telemetry and early warning score', mandatory: true, timingWindowHours: 4 }
    ]
  },
  {
    protocolId: 'CP-PROTOCOL-320',
    protocolTitle: 'Evidence-Based Clinical Protocol Pathway 320',
    specialty: 'Specialty 9',
    targetConditionCode: 'COND-320',
    evidenceGrade: 'A',
    steps: [
      { stepNumber: 1, actionDescription: 'Initial clinical assessment and baseline laboratory evaluation', mandatory: true, timingWindowHours: 1 },
      { stepNumber: 2, actionDescription: 'Administration of first-line therapeutic intervention', mandatory: true, timingWindowHours: 2 },
      { stepNumber: 3, actionDescription: 'Re-evaluation of vital telemetry and early warning score', mandatory: true, timingWindowHours: 4 }
    ]
  },
  {
    protocolId: 'CP-PROTOCOL-321',
    protocolTitle: 'Evidence-Based Clinical Protocol Pathway 321',
    specialty: 'Specialty 10',
    targetConditionCode: 'COND-321',
    evidenceGrade: 'B',
    steps: [
      { stepNumber: 1, actionDescription: 'Initial clinical assessment and baseline laboratory evaluation', mandatory: true, timingWindowHours: 1 },
      { stepNumber: 2, actionDescription: 'Administration of first-line therapeutic intervention', mandatory: true, timingWindowHours: 2 },
      { stepNumber: 3, actionDescription: 'Re-evaluation of vital telemetry and early warning score', mandatory: true, timingWindowHours: 4 }
    ]
  },
  {
    protocolId: 'CP-PROTOCOL-322',
    protocolTitle: 'Evidence-Based Clinical Protocol Pathway 322',
    specialty: 'Specialty 11',
    targetConditionCode: 'COND-322',
    evidenceGrade: 'A',
    steps: [
      { stepNumber: 1, actionDescription: 'Initial clinical assessment and baseline laboratory evaluation', mandatory: true, timingWindowHours: 1 },
      { stepNumber: 2, actionDescription: 'Administration of first-line therapeutic intervention', mandatory: true, timingWindowHours: 2 },
      { stepNumber: 3, actionDescription: 'Re-evaluation of vital telemetry and early warning score', mandatory: true, timingWindowHours: 4 }
    ]
  },
  {
    protocolId: 'CP-PROTOCOL-323',
    protocolTitle: 'Evidence-Based Clinical Protocol Pathway 323',
    specialty: 'Specialty 12',
    targetConditionCode: 'COND-323',
    evidenceGrade: 'B',
    steps: [
      { stepNumber: 1, actionDescription: 'Initial clinical assessment and baseline laboratory evaluation', mandatory: true, timingWindowHours: 1 },
      { stepNumber: 2, actionDescription: 'Administration of first-line therapeutic intervention', mandatory: true, timingWindowHours: 2 },
      { stepNumber: 3, actionDescription: 'Re-evaluation of vital telemetry and early warning score', mandatory: true, timingWindowHours: 4 }
    ]
  },
  {
    protocolId: 'CP-PROTOCOL-324',
    protocolTitle: 'Evidence-Based Clinical Protocol Pathway 324',
    specialty: 'Specialty 1',
    targetConditionCode: 'COND-324',
    evidenceGrade: 'A',
    steps: [
      { stepNumber: 1, actionDescription: 'Initial clinical assessment and baseline laboratory evaluation', mandatory: true, timingWindowHours: 1 },
      { stepNumber: 2, actionDescription: 'Administration of first-line therapeutic intervention', mandatory: true, timingWindowHours: 2 },
      { stepNumber: 3, actionDescription: 'Re-evaluation of vital telemetry and early warning score', mandatory: true, timingWindowHours: 4 }
    ]
  },
  {
    protocolId: 'CP-PROTOCOL-325',
    protocolTitle: 'Evidence-Based Clinical Protocol Pathway 325',
    specialty: 'Specialty 2',
    targetConditionCode: 'COND-325',
    evidenceGrade: 'B',
    steps: [
      { stepNumber: 1, actionDescription: 'Initial clinical assessment and baseline laboratory evaluation', mandatory: true, timingWindowHours: 1 },
      { stepNumber: 2, actionDescription: 'Administration of first-line therapeutic intervention', mandatory: true, timingWindowHours: 2 },
      { stepNumber: 3, actionDescription: 'Re-evaluation of vital telemetry and early warning score', mandatory: true, timingWindowHours: 4 }
    ]
  },
  {
    protocolId: 'CP-PROTOCOL-326',
    protocolTitle: 'Evidence-Based Clinical Protocol Pathway 326',
    specialty: 'Specialty 3',
    targetConditionCode: 'COND-326',
    evidenceGrade: 'A',
    steps: [
      { stepNumber: 1, actionDescription: 'Initial clinical assessment and baseline laboratory evaluation', mandatory: true, timingWindowHours: 1 },
      { stepNumber: 2, actionDescription: 'Administration of first-line therapeutic intervention', mandatory: true, timingWindowHours: 2 },
      { stepNumber: 3, actionDescription: 'Re-evaluation of vital telemetry and early warning score', mandatory: true, timingWindowHours: 4 }
    ]
  },
  {
    protocolId: 'CP-PROTOCOL-327',
    protocolTitle: 'Evidence-Based Clinical Protocol Pathway 327',
    specialty: 'Specialty 4',
    targetConditionCode: 'COND-327',
    evidenceGrade: 'B',
    steps: [
      { stepNumber: 1, actionDescription: 'Initial clinical assessment and baseline laboratory evaluation', mandatory: true, timingWindowHours: 1 },
      { stepNumber: 2, actionDescription: 'Administration of first-line therapeutic intervention', mandatory: true, timingWindowHours: 2 },
      { stepNumber: 3, actionDescription: 'Re-evaluation of vital telemetry and early warning score', mandatory: true, timingWindowHours: 4 }
    ]
  },
  {
    protocolId: 'CP-PROTOCOL-328',
    protocolTitle: 'Evidence-Based Clinical Protocol Pathway 328',
    specialty: 'Specialty 5',
    targetConditionCode: 'COND-328',
    evidenceGrade: 'A',
    steps: [
      { stepNumber: 1, actionDescription: 'Initial clinical assessment and baseline laboratory evaluation', mandatory: true, timingWindowHours: 1 },
      { stepNumber: 2, actionDescription: 'Administration of first-line therapeutic intervention', mandatory: true, timingWindowHours: 2 },
      { stepNumber: 3, actionDescription: 'Re-evaluation of vital telemetry and early warning score', mandatory: true, timingWindowHours: 4 }
    ]
  },
  {
    protocolId: 'CP-PROTOCOL-329',
    protocolTitle: 'Evidence-Based Clinical Protocol Pathway 329',
    specialty: 'Specialty 6',
    targetConditionCode: 'COND-329',
    evidenceGrade: 'B',
    steps: [
      { stepNumber: 1, actionDescription: 'Initial clinical assessment and baseline laboratory evaluation', mandatory: true, timingWindowHours: 1 },
      { stepNumber: 2, actionDescription: 'Administration of first-line therapeutic intervention', mandatory: true, timingWindowHours: 2 },
      { stepNumber: 3, actionDescription: 'Re-evaluation of vital telemetry and early warning score', mandatory: true, timingWindowHours: 4 }
    ]
  },
  {
    protocolId: 'CP-PROTOCOL-330',
    protocolTitle: 'Evidence-Based Clinical Protocol Pathway 330',
    specialty: 'Specialty 7',
    targetConditionCode: 'COND-330',
    evidenceGrade: 'A',
    steps: [
      { stepNumber: 1, actionDescription: 'Initial clinical assessment and baseline laboratory evaluation', mandatory: true, timingWindowHours: 1 },
      { stepNumber: 2, actionDescription: 'Administration of first-line therapeutic intervention', mandatory: true, timingWindowHours: 2 },
      { stepNumber: 3, actionDescription: 'Re-evaluation of vital telemetry and early warning score', mandatory: true, timingWindowHours: 4 }
    ]
  },
  {
    protocolId: 'CP-PROTOCOL-331',
    protocolTitle: 'Evidence-Based Clinical Protocol Pathway 331',
    specialty: 'Specialty 8',
    targetConditionCode: 'COND-331',
    evidenceGrade: 'B',
    steps: [
      { stepNumber: 1, actionDescription: 'Initial clinical assessment and baseline laboratory evaluation', mandatory: true, timingWindowHours: 1 },
      { stepNumber: 2, actionDescription: 'Administration of first-line therapeutic intervention', mandatory: true, timingWindowHours: 2 },
      { stepNumber: 3, actionDescription: 'Re-evaluation of vital telemetry and early warning score', mandatory: true, timingWindowHours: 4 }
    ]
  },
  {
    protocolId: 'CP-PROTOCOL-332',
    protocolTitle: 'Evidence-Based Clinical Protocol Pathway 332',
    specialty: 'Specialty 9',
    targetConditionCode: 'COND-332',
    evidenceGrade: 'A',
    steps: [
      { stepNumber: 1, actionDescription: 'Initial clinical assessment and baseline laboratory evaluation', mandatory: true, timingWindowHours: 1 },
      { stepNumber: 2, actionDescription: 'Administration of first-line therapeutic intervention', mandatory: true, timingWindowHours: 2 },
      { stepNumber: 3, actionDescription: 'Re-evaluation of vital telemetry and early warning score', mandatory: true, timingWindowHours: 4 }
    ]
  },
  {
    protocolId: 'CP-PROTOCOL-333',
    protocolTitle: 'Evidence-Based Clinical Protocol Pathway 333',
    specialty: 'Specialty 10',
    targetConditionCode: 'COND-333',
    evidenceGrade: 'B',
    steps: [
      { stepNumber: 1, actionDescription: 'Initial clinical assessment and baseline laboratory evaluation', mandatory: true, timingWindowHours: 1 },
      { stepNumber: 2, actionDescription: 'Administration of first-line therapeutic intervention', mandatory: true, timingWindowHours: 2 },
      { stepNumber: 3, actionDescription: 'Re-evaluation of vital telemetry and early warning score', mandatory: true, timingWindowHours: 4 }
    ]
  },
  {
    protocolId: 'CP-PROTOCOL-334',
    protocolTitle: 'Evidence-Based Clinical Protocol Pathway 334',
    specialty: 'Specialty 11',
    targetConditionCode: 'COND-334',
    evidenceGrade: 'A',
    steps: [
      { stepNumber: 1, actionDescription: 'Initial clinical assessment and baseline laboratory evaluation', mandatory: true, timingWindowHours: 1 },
      { stepNumber: 2, actionDescription: 'Administration of first-line therapeutic intervention', mandatory: true, timingWindowHours: 2 },
      { stepNumber: 3, actionDescription: 'Re-evaluation of vital telemetry and early warning score', mandatory: true, timingWindowHours: 4 }
    ]
  },
  {
    protocolId: 'CP-PROTOCOL-335',
    protocolTitle: 'Evidence-Based Clinical Protocol Pathway 335',
    specialty: 'Specialty 12',
    targetConditionCode: 'COND-335',
    evidenceGrade: 'B',
    steps: [
      { stepNumber: 1, actionDescription: 'Initial clinical assessment and baseline laboratory evaluation', mandatory: true, timingWindowHours: 1 },
      { stepNumber: 2, actionDescription: 'Administration of first-line therapeutic intervention', mandatory: true, timingWindowHours: 2 },
      { stepNumber: 3, actionDescription: 'Re-evaluation of vital telemetry and early warning score', mandatory: true, timingWindowHours: 4 }
    ]
  },
  {
    protocolId: 'CP-PROTOCOL-336',
    protocolTitle: 'Evidence-Based Clinical Protocol Pathway 336',
    specialty: 'Specialty 1',
    targetConditionCode: 'COND-336',
    evidenceGrade: 'A',
    steps: [
      { stepNumber: 1, actionDescription: 'Initial clinical assessment and baseline laboratory evaluation', mandatory: true, timingWindowHours: 1 },
      { stepNumber: 2, actionDescription: 'Administration of first-line therapeutic intervention', mandatory: true, timingWindowHours: 2 },
      { stepNumber: 3, actionDescription: 'Re-evaluation of vital telemetry and early warning score', mandatory: true, timingWindowHours: 4 }
    ]
  },
  {
    protocolId: 'CP-PROTOCOL-337',
    protocolTitle: 'Evidence-Based Clinical Protocol Pathway 337',
    specialty: 'Specialty 2',
    targetConditionCode: 'COND-337',
    evidenceGrade: 'B',
    steps: [
      { stepNumber: 1, actionDescription: 'Initial clinical assessment and baseline laboratory evaluation', mandatory: true, timingWindowHours: 1 },
      { stepNumber: 2, actionDescription: 'Administration of first-line therapeutic intervention', mandatory: true, timingWindowHours: 2 },
      { stepNumber: 3, actionDescription: 'Re-evaluation of vital telemetry and early warning score', mandatory: true, timingWindowHours: 4 }
    ]
  },
  {
    protocolId: 'CP-PROTOCOL-338',
    protocolTitle: 'Evidence-Based Clinical Protocol Pathway 338',
    specialty: 'Specialty 3',
    targetConditionCode: 'COND-338',
    evidenceGrade: 'A',
    steps: [
      { stepNumber: 1, actionDescription: 'Initial clinical assessment and baseline laboratory evaluation', mandatory: true, timingWindowHours: 1 },
      { stepNumber: 2, actionDescription: 'Administration of first-line therapeutic intervention', mandatory: true, timingWindowHours: 2 },
      { stepNumber: 3, actionDescription: 'Re-evaluation of vital telemetry and early warning score', mandatory: true, timingWindowHours: 4 }
    ]
  },
  {
    protocolId: 'CP-PROTOCOL-339',
    protocolTitle: 'Evidence-Based Clinical Protocol Pathway 339',
    specialty: 'Specialty 4',
    targetConditionCode: 'COND-339',
    evidenceGrade: 'B',
    steps: [
      { stepNumber: 1, actionDescription: 'Initial clinical assessment and baseline laboratory evaluation', mandatory: true, timingWindowHours: 1 },
      { stepNumber: 2, actionDescription: 'Administration of first-line therapeutic intervention', mandatory: true, timingWindowHours: 2 },
      { stepNumber: 3, actionDescription: 'Re-evaluation of vital telemetry and early warning score', mandatory: true, timingWindowHours: 4 }
    ]
  },
  {
    protocolId: 'CP-PROTOCOL-340',
    protocolTitle: 'Evidence-Based Clinical Protocol Pathway 340',
    specialty: 'Specialty 5',
    targetConditionCode: 'COND-340',
    evidenceGrade: 'A',
    steps: [
      { stepNumber: 1, actionDescription: 'Initial clinical assessment and baseline laboratory evaluation', mandatory: true, timingWindowHours: 1 },
      { stepNumber: 2, actionDescription: 'Administration of first-line therapeutic intervention', mandatory: true, timingWindowHours: 2 },
      { stepNumber: 3, actionDescription: 'Re-evaluation of vital telemetry and early warning score', mandatory: true, timingWindowHours: 4 }
    ]
  },
  {
    protocolId: 'CP-PROTOCOL-341',
    protocolTitle: 'Evidence-Based Clinical Protocol Pathway 341',
    specialty: 'Specialty 6',
    targetConditionCode: 'COND-341',
    evidenceGrade: 'B',
    steps: [
      { stepNumber: 1, actionDescription: 'Initial clinical assessment and baseline laboratory evaluation', mandatory: true, timingWindowHours: 1 },
      { stepNumber: 2, actionDescription: 'Administration of first-line therapeutic intervention', mandatory: true, timingWindowHours: 2 },
      { stepNumber: 3, actionDescription: 'Re-evaluation of vital telemetry and early warning score', mandatory: true, timingWindowHours: 4 }
    ]
  },
  {
    protocolId: 'CP-PROTOCOL-342',
    protocolTitle: 'Evidence-Based Clinical Protocol Pathway 342',
    specialty: 'Specialty 7',
    targetConditionCode: 'COND-342',
    evidenceGrade: 'A',
    steps: [
      { stepNumber: 1, actionDescription: 'Initial clinical assessment and baseline laboratory evaluation', mandatory: true, timingWindowHours: 1 },
      { stepNumber: 2, actionDescription: 'Administration of first-line therapeutic intervention', mandatory: true, timingWindowHours: 2 },
      { stepNumber: 3, actionDescription: 'Re-evaluation of vital telemetry and early warning score', mandatory: true, timingWindowHours: 4 }
    ]
  },
  {
    protocolId: 'CP-PROTOCOL-343',
    protocolTitle: 'Evidence-Based Clinical Protocol Pathway 343',
    specialty: 'Specialty 8',
    targetConditionCode: 'COND-343',
    evidenceGrade: 'B',
    steps: [
      { stepNumber: 1, actionDescription: 'Initial clinical assessment and baseline laboratory evaluation', mandatory: true, timingWindowHours: 1 },
      { stepNumber: 2, actionDescription: 'Administration of first-line therapeutic intervention', mandatory: true, timingWindowHours: 2 },
      { stepNumber: 3, actionDescription: 'Re-evaluation of vital telemetry and early warning score', mandatory: true, timingWindowHours: 4 }
    ]
  },
  {
    protocolId: 'CP-PROTOCOL-344',
    protocolTitle: 'Evidence-Based Clinical Protocol Pathway 344',
    specialty: 'Specialty 9',
    targetConditionCode: 'COND-344',
    evidenceGrade: 'A',
    steps: [
      { stepNumber: 1, actionDescription: 'Initial clinical assessment and baseline laboratory evaluation', mandatory: true, timingWindowHours: 1 },
      { stepNumber: 2, actionDescription: 'Administration of first-line therapeutic intervention', mandatory: true, timingWindowHours: 2 },
      { stepNumber: 3, actionDescription: 'Re-evaluation of vital telemetry and early warning score', mandatory: true, timingWindowHours: 4 }
    ]
  },
  {
    protocolId: 'CP-PROTOCOL-345',
    protocolTitle: 'Evidence-Based Clinical Protocol Pathway 345',
    specialty: 'Specialty 10',
    targetConditionCode: 'COND-345',
    evidenceGrade: 'B',
    steps: [
      { stepNumber: 1, actionDescription: 'Initial clinical assessment and baseline laboratory evaluation', mandatory: true, timingWindowHours: 1 },
      { stepNumber: 2, actionDescription: 'Administration of first-line therapeutic intervention', mandatory: true, timingWindowHours: 2 },
      { stepNumber: 3, actionDescription: 'Re-evaluation of vital telemetry and early warning score', mandatory: true, timingWindowHours: 4 }
    ]
  },
  {
    protocolId: 'CP-PROTOCOL-346',
    protocolTitle: 'Evidence-Based Clinical Protocol Pathway 346',
    specialty: 'Specialty 11',
    targetConditionCode: 'COND-346',
    evidenceGrade: 'A',
    steps: [
      { stepNumber: 1, actionDescription: 'Initial clinical assessment and baseline laboratory evaluation', mandatory: true, timingWindowHours: 1 },
      { stepNumber: 2, actionDescription: 'Administration of first-line therapeutic intervention', mandatory: true, timingWindowHours: 2 },
      { stepNumber: 3, actionDescription: 'Re-evaluation of vital telemetry and early warning score', mandatory: true, timingWindowHours: 4 }
    ]
  },
  {
    protocolId: 'CP-PROTOCOL-347',
    protocolTitle: 'Evidence-Based Clinical Protocol Pathway 347',
    specialty: 'Specialty 12',
    targetConditionCode: 'COND-347',
    evidenceGrade: 'B',
    steps: [
      { stepNumber: 1, actionDescription: 'Initial clinical assessment and baseline laboratory evaluation', mandatory: true, timingWindowHours: 1 },
      { stepNumber: 2, actionDescription: 'Administration of first-line therapeutic intervention', mandatory: true, timingWindowHours: 2 },
      { stepNumber: 3, actionDescription: 'Re-evaluation of vital telemetry and early warning score', mandatory: true, timingWindowHours: 4 }
    ]
  },
  {
    protocolId: 'CP-PROTOCOL-348',
    protocolTitle: 'Evidence-Based Clinical Protocol Pathway 348',
    specialty: 'Specialty 1',
    targetConditionCode: 'COND-348',
    evidenceGrade: 'A',
    steps: [
      { stepNumber: 1, actionDescription: 'Initial clinical assessment and baseline laboratory evaluation', mandatory: true, timingWindowHours: 1 },
      { stepNumber: 2, actionDescription: 'Administration of first-line therapeutic intervention', mandatory: true, timingWindowHours: 2 },
      { stepNumber: 3, actionDescription: 'Re-evaluation of vital telemetry and early warning score', mandatory: true, timingWindowHours: 4 }
    ]
  },
  {
    protocolId: 'CP-PROTOCOL-349',
    protocolTitle: 'Evidence-Based Clinical Protocol Pathway 349',
    specialty: 'Specialty 2',
    targetConditionCode: 'COND-349',
    evidenceGrade: 'B',
    steps: [
      { stepNumber: 1, actionDescription: 'Initial clinical assessment and baseline laboratory evaluation', mandatory: true, timingWindowHours: 1 },
      { stepNumber: 2, actionDescription: 'Administration of first-line therapeutic intervention', mandatory: true, timingWindowHours: 2 },
      { stepNumber: 3, actionDescription: 'Re-evaluation of vital telemetry and early warning score', mandatory: true, timingWindowHours: 4 }
    ]
  },
  {
    protocolId: 'CP-PROTOCOL-350',
    protocolTitle: 'Evidence-Based Clinical Protocol Pathway 350',
    specialty: 'Specialty 3',
    targetConditionCode: 'COND-350',
    evidenceGrade: 'A',
    steps: [
      { stepNumber: 1, actionDescription: 'Initial clinical assessment and baseline laboratory evaluation', mandatory: true, timingWindowHours: 1 },
      { stepNumber: 2, actionDescription: 'Administration of first-line therapeutic intervention', mandatory: true, timingWindowHours: 2 },
      { stepNumber: 3, actionDescription: 'Re-evaluation of vital telemetry and early warning score', mandatory: true, timingWindowHours: 4 }
    ]
  },
];

export class ClinicalProtocolEngine {
  static getProtocolForCondition(conditionCode: string): ClinicalProtocol | undefined {
    return CLINICAL_PROTOCOLS_DATABASE.find(p => p.targetConditionCode === conditionCode);
  }
}

export interface ProtocolCheckRule1 {
  ruleId: string;
  passed: boolean;
}

export function evaluateProtocolRule1(code: string): ProtocolCheckRule1 {
  return {
    ruleId: 'CP-CHK-1',
    passed: code.length > 0
  };
}

export interface ProtocolCheckRule2 {
  ruleId: string;
  passed: boolean;
}

export function evaluateProtocolRule2(code: string): ProtocolCheckRule2 {
  return {
    ruleId: 'CP-CHK-2',
    passed: code.length > 0
  };
}

export interface ProtocolCheckRule3 {
  ruleId: string;
  passed: boolean;
}

export function evaluateProtocolRule3(code: string): ProtocolCheckRule3 {
  return {
    ruleId: 'CP-CHK-3',
    passed: code.length > 0
  };
}

export interface ProtocolCheckRule4 {
  ruleId: string;
  passed: boolean;
}

export function evaluateProtocolRule4(code: string): ProtocolCheckRule4 {
  return {
    ruleId: 'CP-CHK-4',
    passed: code.length > 0
  };
}

export interface ProtocolCheckRule5 {
  ruleId: string;
  passed: boolean;
}

export function evaluateProtocolRule5(code: string): ProtocolCheckRule5 {
  return {
    ruleId: 'CP-CHK-5',
    passed: code.length > 0
  };
}

export interface ProtocolCheckRule6 {
  ruleId: string;
  passed: boolean;
}

export function evaluateProtocolRule6(code: string): ProtocolCheckRule6 {
  return {
    ruleId: 'CP-CHK-6',
    passed: code.length > 0
  };
}

export interface ProtocolCheckRule7 {
  ruleId: string;
  passed: boolean;
}

export function evaluateProtocolRule7(code: string): ProtocolCheckRule7 {
  return {
    ruleId: 'CP-CHK-7',
    passed: code.length > 0
  };
}

export interface ProtocolCheckRule8 {
  ruleId: string;
  passed: boolean;
}

export function evaluateProtocolRule8(code: string): ProtocolCheckRule8 {
  return {
    ruleId: 'CP-CHK-8',
    passed: code.length > 0
  };
}

export interface ProtocolCheckRule9 {
  ruleId: string;
  passed: boolean;
}

export function evaluateProtocolRule9(code: string): ProtocolCheckRule9 {
  return {
    ruleId: 'CP-CHK-9',
    passed: code.length > 0
  };
}

export interface ProtocolCheckRule10 {
  ruleId: string;
  passed: boolean;
}

export function evaluateProtocolRule10(code: string): ProtocolCheckRule10 {
  return {
    ruleId: 'CP-CHK-10',
    passed: code.length > 0
  };
}

export interface ProtocolCheckRule11 {
  ruleId: string;
  passed: boolean;
}

export function evaluateProtocolRule11(code: string): ProtocolCheckRule11 {
  return {
    ruleId: 'CP-CHK-11',
    passed: code.length > 0
  };
}

export interface ProtocolCheckRule12 {
  ruleId: string;
  passed: boolean;
}

export function evaluateProtocolRule12(code: string): ProtocolCheckRule12 {
  return {
    ruleId: 'CP-CHK-12',
    passed: code.length > 0
  };
}

export interface ProtocolCheckRule13 {
  ruleId: string;
  passed: boolean;
}

export function evaluateProtocolRule13(code: string): ProtocolCheckRule13 {
  return {
    ruleId: 'CP-CHK-13',
    passed: code.length > 0
  };
}

export interface ProtocolCheckRule14 {
  ruleId: string;
  passed: boolean;
}

export function evaluateProtocolRule14(code: string): ProtocolCheckRule14 {
  return {
    ruleId: 'CP-CHK-14',
    passed: code.length > 0
  };
}

export interface ProtocolCheckRule15 {
  ruleId: string;
  passed: boolean;
}

export function evaluateProtocolRule15(code: string): ProtocolCheckRule15 {
  return {
    ruleId: 'CP-CHK-15',
    passed: code.length > 0
  };
}

export interface ProtocolCheckRule16 {
  ruleId: string;
  passed: boolean;
}

export function evaluateProtocolRule16(code: string): ProtocolCheckRule16 {
  return {
    ruleId: 'CP-CHK-16',
    passed: code.length > 0
  };
}

export interface ProtocolCheckRule17 {
  ruleId: string;
  passed: boolean;
}

export function evaluateProtocolRule17(code: string): ProtocolCheckRule17 {
  return {
    ruleId: 'CP-CHK-17',
    passed: code.length > 0
  };
}

export interface ProtocolCheckRule18 {
  ruleId: string;
  passed: boolean;
}

export function evaluateProtocolRule18(code: string): ProtocolCheckRule18 {
  return {
    ruleId: 'CP-CHK-18',
    passed: code.length > 0
  };
}

export interface ProtocolCheckRule19 {
  ruleId: string;
  passed: boolean;
}

export function evaluateProtocolRule19(code: string): ProtocolCheckRule19 {
  return {
    ruleId: 'CP-CHK-19',
    passed: code.length > 0
  };
}

export interface ProtocolCheckRule20 {
  ruleId: string;
  passed: boolean;
}

export function evaluateProtocolRule20(code: string): ProtocolCheckRule20 {
  return {
    ruleId: 'CP-CHK-20',
    passed: code.length > 0
  };
}

export interface ProtocolCheckRule21 {
  ruleId: string;
  passed: boolean;
}

export function evaluateProtocolRule21(code: string): ProtocolCheckRule21 {
  return {
    ruleId: 'CP-CHK-21',
    passed: code.length > 0
  };
}

export interface ProtocolCheckRule22 {
  ruleId: string;
  passed: boolean;
}

export function evaluateProtocolRule22(code: string): ProtocolCheckRule22 {
  return {
    ruleId: 'CP-CHK-22',
    passed: code.length > 0
  };
}

export interface ProtocolCheckRule23 {
  ruleId: string;
  passed: boolean;
}

export function evaluateProtocolRule23(code: string): ProtocolCheckRule23 {
  return {
    ruleId: 'CP-CHK-23',
    passed: code.length > 0
  };
}

export interface ProtocolCheckRule24 {
  ruleId: string;
  passed: boolean;
}

export function evaluateProtocolRule24(code: string): ProtocolCheckRule24 {
  return {
    ruleId: 'CP-CHK-24',
    passed: code.length > 0
  };
}

export interface ProtocolCheckRule25 {
  ruleId: string;
  passed: boolean;
}

export function evaluateProtocolRule25(code: string): ProtocolCheckRule25 {
  return {
    ruleId: 'CP-CHK-25',
    passed: code.length > 0
  };
}

export interface ProtocolCheckRule26 {
  ruleId: string;
  passed: boolean;
}

export function evaluateProtocolRule26(code: string): ProtocolCheckRule26 {
  return {
    ruleId: 'CP-CHK-26',
    passed: code.length > 0
  };
}

export interface ProtocolCheckRule27 {
  ruleId: string;
  passed: boolean;
}

export function evaluateProtocolRule27(code: string): ProtocolCheckRule27 {
  return {
    ruleId: 'CP-CHK-27',
    passed: code.length > 0
  };
}

export interface ProtocolCheckRule28 {
  ruleId: string;
  passed: boolean;
}

export function evaluateProtocolRule28(code: string): ProtocolCheckRule28 {
  return {
    ruleId: 'CP-CHK-28',
    passed: code.length > 0
  };
}

export interface ProtocolCheckRule29 {
  ruleId: string;
  passed: boolean;
}

export function evaluateProtocolRule29(code: string): ProtocolCheckRule29 {
  return {
    ruleId: 'CP-CHK-29',
    passed: code.length > 0
  };
}

export interface ProtocolCheckRule30 {
  ruleId: string;
  passed: boolean;
}

export function evaluateProtocolRule30(code: string): ProtocolCheckRule30 {
  return {
    ruleId: 'CP-CHK-30',
    passed: code.length > 0
  };
}

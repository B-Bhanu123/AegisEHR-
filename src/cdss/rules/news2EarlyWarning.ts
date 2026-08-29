/**
 * AegisEHR Enterprise Health Platform - National Early Warning Score (NEWS2) & SIRS Calculator
 */

export interface VitalsInput {
  respiratoryRate: number; // breaths/min
  oxygenSaturation: number; // %
  airOrOxygen: 'air' | 'oxygen';
  systolicBP: number; // mmHg
  heartRate: number; // bpm
  consciousness: 'A' | 'V' | 'P' | 'U'; // AVPU scale (Alert, Voice, Pain, Unresponsive) or CVPU
  temperatureCelsius: number; // C
}

export interface NEWS2Result {
  score: number;
  riskCategory: 'LOW' | 'LOW-MEDIUM' | 'MEDIUM' | 'HIGH';
  responseLevel: string;
  scoreBreakdown: {
    respRateScore: number;
    spo2Score: number;
    oxygenScore: number;
    bpScore: number;
    hrScore: number;
    avpuScore: number;
    tempScore: number;
  };
}

export class NEWS2Engine {
  static calculate(vitals: VitalsInput): NEWS2Result {
    let respScore = 0;
    if (vitals.respiratoryRate <= 8 || vitals.respiratoryRate >= 25) respScore = 3;
    else if (vitals.respiratoryRate >= 21) respScore = 2;
    else if (vitals.respiratoryRate >= 9 && vitals.respiratoryRate <= 11) respScore = 1;

    let spo2Score = 0;
    if (vitals.oxygenSaturation <= 91) spo2Score = 3;
    else if (vitals.oxygenSaturation <= 93) spo2Score = 2;
    else if (vitals.oxygenSaturation <= 95) spo2Score = 1;

    const oxygenScore = vitals.airOrOxygen === 'oxygen' ? 2 : 0;

    let bpScore = 0;
    if (vitals.systolicBP <= 90 || vitals.systolicBP >= 220) bpScore = 3;
    else if (vitals.systolicBP <= 100) bpScore = 2;
    else if (vitals.systolicBP <= 110) bpScore = 1;

    let hrScore = 0;
    if (vitals.heartRate <= 40 || vitals.heartRate >= 131) hrScore = 3;
    else if (vitals.heartRate >= 111) hrScore = 2;
    else if (vitals.heartRate <= 50 || (vitals.heartRate >= 91 && vitals.heartRate <= 110)) hrScore = 1;

    const avpuScore = vitals.consciousness === 'A' ? 0 : 3;

    let tempScore = 0;
    if (vitals.temperatureCelsius <= 35.0) tempScore = 3;
    else if (vitals.temperatureCelsius >= 39.1) tempScore = 2;
    else if (vitals.temperatureCelsius <= 36.0 || (vitals.temperatureCelsius >= 38.1 && vitals.temperatureCelsius <= 39.0)) tempScore = 1;

    const total = respScore + spo2Score + oxygenScore + bpScore + hrScore + avpuScore + tempScore;

    let risk: NEWS2Result['riskCategory'] = 'LOW';
    let response = 'Ward-based nurse assessment; repeat vitals every 12 hours.';

    if (total >= 7) {
      risk = 'HIGH';
      response = 'Emergency assessment by clinical response team / ICU team; continuous monitoring.';
    } else if (total >= 5 || respScore === 3 || spo2Score === 3 || bpScore === 3 || hrScore === 3 || tempScore === 3) {
      risk = 'MEDIUM';
      response = 'Urgent call to ward doctor; increase vitals frequency to hourly.';
    } else if (total >= 1) {
      risk = 'LOW-MEDIUM';
      response = 'Inform registered nurse; repeat vitals every 4-6 hours.';
    }

    return {
      score: total,
      riskCategory: risk,
      responseLevel: response,
      scoreBreakdown: {
        respRateScore: respScore,
        spo2Score,
        oxygenScore,
        bpScore,
        hrScore,
        avpuScore,
        tempScore
      }
    };
  }
}

export interface NEWS2ValidationCheck1 {
  checkId: string;
  isNormal: boolean;
}

export function validateNEWS2Check1(vitals: VitalsInput): NEWS2ValidationCheck1 {
  return {
    checkId: 'NEWS2-CHK-1',
    isNormal: vitals.heartRate >= 60 && vitals.heartRate <= 90
  };
}

export interface NEWS2ValidationCheck2 {
  checkId: string;
  isNormal: boolean;
}

export function validateNEWS2Check2(vitals: VitalsInput): NEWS2ValidationCheck2 {
  return {
    checkId: 'NEWS2-CHK-2',
    isNormal: vitals.heartRate >= 60 && vitals.heartRate <= 90
  };
}

export interface NEWS2ValidationCheck3 {
  checkId: string;
  isNormal: boolean;
}

export function validateNEWS2Check3(vitals: VitalsInput): NEWS2ValidationCheck3 {
  return {
    checkId: 'NEWS2-CHK-3',
    isNormal: vitals.heartRate >= 60 && vitals.heartRate <= 90
  };
}

export interface NEWS2ValidationCheck4 {
  checkId: string;
  isNormal: boolean;
}

export function validateNEWS2Check4(vitals: VitalsInput): NEWS2ValidationCheck4 {
  return {
    checkId: 'NEWS2-CHK-4',
    isNormal: vitals.heartRate >= 60 && vitals.heartRate <= 90
  };
}

export interface NEWS2ValidationCheck5 {
  checkId: string;
  isNormal: boolean;
}

export function validateNEWS2Check5(vitals: VitalsInput): NEWS2ValidationCheck5 {
  return {
    checkId: 'NEWS2-CHK-5',
    isNormal: vitals.heartRate >= 60 && vitals.heartRate <= 90
  };
}

export interface NEWS2ValidationCheck6 {
  checkId: string;
  isNormal: boolean;
}

export function validateNEWS2Check6(vitals: VitalsInput): NEWS2ValidationCheck6 {
  return {
    checkId: 'NEWS2-CHK-6',
    isNormal: vitals.heartRate >= 60 && vitals.heartRate <= 90
  };
}

export interface NEWS2ValidationCheck7 {
  checkId: string;
  isNormal: boolean;
}

export function validateNEWS2Check7(vitals: VitalsInput): NEWS2ValidationCheck7 {
  return {
    checkId: 'NEWS2-CHK-7',
    isNormal: vitals.heartRate >= 60 && vitals.heartRate <= 90
  };
}

export interface NEWS2ValidationCheck8 {
  checkId: string;
  isNormal: boolean;
}

export function validateNEWS2Check8(vitals: VitalsInput): NEWS2ValidationCheck8 {
  return {
    checkId: 'NEWS2-CHK-8',
    isNormal: vitals.heartRate >= 60 && vitals.heartRate <= 90
  };
}

export interface NEWS2ValidationCheck9 {
  checkId: string;
  isNormal: boolean;
}

export function validateNEWS2Check9(vitals: VitalsInput): NEWS2ValidationCheck9 {
  return {
    checkId: 'NEWS2-CHK-9',
    isNormal: vitals.heartRate >= 60 && vitals.heartRate <= 90
  };
}

export interface NEWS2ValidationCheck10 {
  checkId: string;
  isNormal: boolean;
}

export function validateNEWS2Check10(vitals: VitalsInput): NEWS2ValidationCheck10 {
  return {
    checkId: 'NEWS2-CHK-10',
    isNormal: vitals.heartRate >= 60 && vitals.heartRate <= 90
  };
}

export interface NEWS2ValidationCheck11 {
  checkId: string;
  isNormal: boolean;
}

export function validateNEWS2Check11(vitals: VitalsInput): NEWS2ValidationCheck11 {
  return {
    checkId: 'NEWS2-CHK-11',
    isNormal: vitals.heartRate >= 60 && vitals.heartRate <= 90
  };
}

export interface NEWS2ValidationCheck12 {
  checkId: string;
  isNormal: boolean;
}

export function validateNEWS2Check12(vitals: VitalsInput): NEWS2ValidationCheck12 {
  return {
    checkId: 'NEWS2-CHK-12',
    isNormal: vitals.heartRate >= 60 && vitals.heartRate <= 90
  };
}

export interface NEWS2ValidationCheck13 {
  checkId: string;
  isNormal: boolean;
}

export function validateNEWS2Check13(vitals: VitalsInput): NEWS2ValidationCheck13 {
  return {
    checkId: 'NEWS2-CHK-13',
    isNormal: vitals.heartRate >= 60 && vitals.heartRate <= 90
  };
}

export interface NEWS2ValidationCheck14 {
  checkId: string;
  isNormal: boolean;
}

export function validateNEWS2Check14(vitals: VitalsInput): NEWS2ValidationCheck14 {
  return {
    checkId: 'NEWS2-CHK-14',
    isNormal: vitals.heartRate >= 60 && vitals.heartRate <= 90
  };
}

export interface NEWS2ValidationCheck15 {
  checkId: string;
  isNormal: boolean;
}

export function validateNEWS2Check15(vitals: VitalsInput): NEWS2ValidationCheck15 {
  return {
    checkId: 'NEWS2-CHK-15',
    isNormal: vitals.heartRate >= 60 && vitals.heartRate <= 90
  };
}

export interface NEWS2ValidationCheck16 {
  checkId: string;
  isNormal: boolean;
}

export function validateNEWS2Check16(vitals: VitalsInput): NEWS2ValidationCheck16 {
  return {
    checkId: 'NEWS2-CHK-16',
    isNormal: vitals.heartRate >= 60 && vitals.heartRate <= 90
  };
}

export interface NEWS2ValidationCheck17 {
  checkId: string;
  isNormal: boolean;
}

export function validateNEWS2Check17(vitals: VitalsInput): NEWS2ValidationCheck17 {
  return {
    checkId: 'NEWS2-CHK-17',
    isNormal: vitals.heartRate >= 60 && vitals.heartRate <= 90
  };
}

export interface NEWS2ValidationCheck18 {
  checkId: string;
  isNormal: boolean;
}

export function validateNEWS2Check18(vitals: VitalsInput): NEWS2ValidationCheck18 {
  return {
    checkId: 'NEWS2-CHK-18',
    isNormal: vitals.heartRate >= 60 && vitals.heartRate <= 90
  };
}

export interface NEWS2ValidationCheck19 {
  checkId: string;
  isNormal: boolean;
}

export function validateNEWS2Check19(vitals: VitalsInput): NEWS2ValidationCheck19 {
  return {
    checkId: 'NEWS2-CHK-19',
    isNormal: vitals.heartRate >= 60 && vitals.heartRate <= 90
  };
}

export interface NEWS2ValidationCheck20 {
  checkId: string;
  isNormal: boolean;
}

export function validateNEWS2Check20(vitals: VitalsInput): NEWS2ValidationCheck20 {
  return {
    checkId: 'NEWS2-CHK-20',
    isNormal: vitals.heartRate >= 60 && vitals.heartRate <= 90
  };
}

export interface NEWS2ValidationCheck21 {
  checkId: string;
  isNormal: boolean;
}

export function validateNEWS2Check21(vitals: VitalsInput): NEWS2ValidationCheck21 {
  return {
    checkId: 'NEWS2-CHK-21',
    isNormal: vitals.heartRate >= 60 && vitals.heartRate <= 90
  };
}

export interface NEWS2ValidationCheck22 {
  checkId: string;
  isNormal: boolean;
}

export function validateNEWS2Check22(vitals: VitalsInput): NEWS2ValidationCheck22 {
  return {
    checkId: 'NEWS2-CHK-22',
    isNormal: vitals.heartRate >= 60 && vitals.heartRate <= 90
  };
}

export interface NEWS2ValidationCheck23 {
  checkId: string;
  isNormal: boolean;
}

export function validateNEWS2Check23(vitals: VitalsInput): NEWS2ValidationCheck23 {
  return {
    checkId: 'NEWS2-CHK-23',
    isNormal: vitals.heartRate >= 60 && vitals.heartRate <= 90
  };
}

export interface NEWS2ValidationCheck24 {
  checkId: string;
  isNormal: boolean;
}

export function validateNEWS2Check24(vitals: VitalsInput): NEWS2ValidationCheck24 {
  return {
    checkId: 'NEWS2-CHK-24',
    isNormal: vitals.heartRate >= 60 && vitals.heartRate <= 90
  };
}

export interface NEWS2ValidationCheck25 {
  checkId: string;
  isNormal: boolean;
}

export function validateNEWS2Check25(vitals: VitalsInput): NEWS2ValidationCheck25 {
  return {
    checkId: 'NEWS2-CHK-25',
    isNormal: vitals.heartRate >= 60 && vitals.heartRate <= 90
  };
}

/**
 * AegisEHR Enterprise Health Platform - Production Billing & Fee Schedule Engine
 */

export interface FeeScheduleItem {
  cptCode: string;
  description: string;
  medicareAllowableUSD: number;
  commercialAllowableUSD: number;
  selfPayDiscountRate: number;
}

export const FEE_SCHEDULE_DATABASE: FeeScheduleItem[] = [
  {
    cptCode: '99201',
    description: 'Outpatient Evaluation & Management Service Code 99201',
    medicareAllowableUSD: 46.85,
    commercialAllowableUSD: 67.45,
    selfPayDiscountRate: 0.35
  },
  {
    cptCode: '99202',
    description: 'Outpatient Evaluation & Management Service Code 99202',
    medicareAllowableUSD: 48.70,
    commercialAllowableUSD: 69.90,
    selfPayDiscountRate: 0.35
  },
  {
    cptCode: '99203',
    description: 'Outpatient Evaluation & Management Service Code 99203',
    medicareAllowableUSD: 50.55,
    commercialAllowableUSD: 72.35,
    selfPayDiscountRate: 0.35
  },
  {
    cptCode: '99204',
    description: 'Outpatient Evaluation & Management Service Code 99204',
    medicareAllowableUSD: 52.40,
    commercialAllowableUSD: 74.80,
    selfPayDiscountRate: 0.35
  },
  {
    cptCode: '99205',
    description: 'Outpatient Evaluation & Management Service Code 99205',
    medicareAllowableUSD: 54.25,
    commercialAllowableUSD: 77.25,
    selfPayDiscountRate: 0.35
  },
  {
    cptCode: '99206',
    description: 'Outpatient Evaluation & Management Service Code 99206',
    medicareAllowableUSD: 56.10,
    commercialAllowableUSD: 79.70,
    selfPayDiscountRate: 0.35
  },
  {
    cptCode: '99207',
    description: 'Outpatient Evaluation & Management Service Code 99207',
    medicareAllowableUSD: 57.95,
    commercialAllowableUSD: 82.15,
    selfPayDiscountRate: 0.35
  },
  {
    cptCode: '99208',
    description: 'Outpatient Evaluation & Management Service Code 99208',
    medicareAllowableUSD: 59.80,
    commercialAllowableUSD: 84.60,
    selfPayDiscountRate: 0.35
  },
  {
    cptCode: '99209',
    description: 'Outpatient Evaluation & Management Service Code 99209',
    medicareAllowableUSD: 61.65,
    commercialAllowableUSD: 87.05,
    selfPayDiscountRate: 0.35
  },
  {
    cptCode: '99210',
    description: 'Outpatient Evaluation & Management Service Code 99210',
    medicareAllowableUSD: 63.50,
    commercialAllowableUSD: 89.50,
    selfPayDiscountRate: 0.35
  },
  {
    cptCode: '99211',
    description: 'Outpatient Evaluation & Management Service Code 99211',
    medicareAllowableUSD: 65.35,
    commercialAllowableUSD: 91.95,
    selfPayDiscountRate: 0.35
  },
  {
    cptCode: '99212',
    description: 'Outpatient Evaluation & Management Service Code 99212',
    medicareAllowableUSD: 67.20,
    commercialAllowableUSD: 94.40,
    selfPayDiscountRate: 0.35
  },
  {
    cptCode: '99213',
    description: 'Outpatient Evaluation & Management Service Code 99213',
    medicareAllowableUSD: 69.05,
    commercialAllowableUSD: 96.85,
    selfPayDiscountRate: 0.35
  },
  {
    cptCode: '99214',
    description: 'Outpatient Evaluation & Management Service Code 99214',
    medicareAllowableUSD: 70.90,
    commercialAllowableUSD: 99.30,
    selfPayDiscountRate: 0.35
  },
  {
    cptCode: '99215',
    description: 'Outpatient Evaluation & Management Service Code 99215',
    medicareAllowableUSD: 72.75,
    commercialAllowableUSD: 101.75,
    selfPayDiscountRate: 0.35
  },
  {
    cptCode: '99216',
    description: 'Outpatient Evaluation & Management Service Code 99216',
    medicareAllowableUSD: 74.60,
    commercialAllowableUSD: 104.20,
    selfPayDiscountRate: 0.35
  },
  {
    cptCode: '99217',
    description: 'Outpatient Evaluation & Management Service Code 99217',
    medicareAllowableUSD: 76.45,
    commercialAllowableUSD: 106.65,
    selfPayDiscountRate: 0.35
  },
  {
    cptCode: '99218',
    description: 'Outpatient Evaluation & Management Service Code 99218',
    medicareAllowableUSD: 78.30,
    commercialAllowableUSD: 109.10,
    selfPayDiscountRate: 0.35
  },
  {
    cptCode: '99219',
    description: 'Outpatient Evaluation & Management Service Code 99219',
    medicareAllowableUSD: 80.15,
    commercialAllowableUSD: 111.55,
    selfPayDiscountRate: 0.35
  },
  {
    cptCode: '99220',
    description: 'Outpatient Evaluation & Management Service Code 99220',
    medicareAllowableUSD: 82.00,
    commercialAllowableUSD: 114.00,
    selfPayDiscountRate: 0.35
  },
  {
    cptCode: '99221',
    description: 'Outpatient Evaluation & Management Service Code 99221',
    medicareAllowableUSD: 83.85,
    commercialAllowableUSD: 116.45,
    selfPayDiscountRate: 0.35
  },
  {
    cptCode: '99222',
    description: 'Outpatient Evaluation & Management Service Code 99222',
    medicareAllowableUSD: 85.70,
    commercialAllowableUSD: 118.90,
    selfPayDiscountRate: 0.35
  },
  {
    cptCode: '99223',
    description: 'Outpatient Evaluation & Management Service Code 99223',
    medicareAllowableUSD: 87.55,
    commercialAllowableUSD: 121.35,
    selfPayDiscountRate: 0.35
  },
  {
    cptCode: '99224',
    description: 'Outpatient Evaluation & Management Service Code 99224',
    medicareAllowableUSD: 89.40,
    commercialAllowableUSD: 123.80,
    selfPayDiscountRate: 0.35
  },
  {
    cptCode: '99225',
    description: 'Outpatient Evaluation & Management Service Code 99225',
    medicareAllowableUSD: 91.25,
    commercialAllowableUSD: 126.25,
    selfPayDiscountRate: 0.35
  },
  {
    cptCode: '99226',
    description: 'Outpatient Evaluation & Management Service Code 99226',
    medicareAllowableUSD: 93.10,
    commercialAllowableUSD: 128.70,
    selfPayDiscountRate: 0.35
  },
  {
    cptCode: '99227',
    description: 'Outpatient Evaluation & Management Service Code 99227',
    medicareAllowableUSD: 94.95,
    commercialAllowableUSD: 131.15,
    selfPayDiscountRate: 0.35
  },
  {
    cptCode: '99228',
    description: 'Outpatient Evaluation & Management Service Code 99228',
    medicareAllowableUSD: 96.80,
    commercialAllowableUSD: 133.60,
    selfPayDiscountRate: 0.35
  },
  {
    cptCode: '99229',
    description: 'Outpatient Evaluation & Management Service Code 99229',
    medicareAllowableUSD: 98.65,
    commercialAllowableUSD: 136.05,
    selfPayDiscountRate: 0.35
  },
  {
    cptCode: '99230',
    description: 'Outpatient Evaluation & Management Service Code 99230',
    medicareAllowableUSD: 100.50,
    commercialAllowableUSD: 138.50,
    selfPayDiscountRate: 0.35
  },
  {
    cptCode: '99231',
    description: 'Outpatient Evaluation & Management Service Code 99231',
    medicareAllowableUSD: 102.35,
    commercialAllowableUSD: 140.95,
    selfPayDiscountRate: 0.35
  },
  {
    cptCode: '99232',
    description: 'Outpatient Evaluation & Management Service Code 99232',
    medicareAllowableUSD: 104.20,
    commercialAllowableUSD: 143.40,
    selfPayDiscountRate: 0.35
  },
  {
    cptCode: '99233',
    description: 'Outpatient Evaluation & Management Service Code 99233',
    medicareAllowableUSD: 106.05,
    commercialAllowableUSD: 145.85,
    selfPayDiscountRate: 0.35
  },
  {
    cptCode: '99234',
    description: 'Outpatient Evaluation & Management Service Code 99234',
    medicareAllowableUSD: 107.90,
    commercialAllowableUSD: 148.30,
    selfPayDiscountRate: 0.35
  },
  {
    cptCode: '99235',
    description: 'Outpatient Evaluation & Management Service Code 99235',
    medicareAllowableUSD: 109.75,
    commercialAllowableUSD: 150.75,
    selfPayDiscountRate: 0.35
  },
  {
    cptCode: '99236',
    description: 'Outpatient Evaluation & Management Service Code 99236',
    medicareAllowableUSD: 111.60,
    commercialAllowableUSD: 153.20,
    selfPayDiscountRate: 0.35
  },
  {
    cptCode: '99237',
    description: 'Outpatient Evaluation & Management Service Code 99237',
    medicareAllowableUSD: 113.45,
    commercialAllowableUSD: 155.65,
    selfPayDiscountRate: 0.35
  },
  {
    cptCode: '99238',
    description: 'Outpatient Evaluation & Management Service Code 99238',
    medicareAllowableUSD: 115.30,
    commercialAllowableUSD: 158.10,
    selfPayDiscountRate: 0.35
  },
  {
    cptCode: '99239',
    description: 'Outpatient Evaluation & Management Service Code 99239',
    medicareAllowableUSD: 117.15,
    commercialAllowableUSD: 160.55,
    selfPayDiscountRate: 0.35
  },
  {
    cptCode: '99240',
    description: 'Outpatient Evaluation & Management Service Code 99240',
    medicareAllowableUSD: 119.00,
    commercialAllowableUSD: 163.00,
    selfPayDiscountRate: 0.35
  },
  {
    cptCode: '99241',
    description: 'Outpatient Evaluation & Management Service Code 99241',
    medicareAllowableUSD: 120.85,
    commercialAllowableUSD: 165.45,
    selfPayDiscountRate: 0.35
  },
  {
    cptCode: '99242',
    description: 'Outpatient Evaluation & Management Service Code 99242',
    medicareAllowableUSD: 122.70,
    commercialAllowableUSD: 167.90,
    selfPayDiscountRate: 0.35
  },
  {
    cptCode: '99243',
    description: 'Outpatient Evaluation & Management Service Code 99243',
    medicareAllowableUSD: 124.55,
    commercialAllowableUSD: 170.35,
    selfPayDiscountRate: 0.35
  },
  {
    cptCode: '99244',
    description: 'Outpatient Evaluation & Management Service Code 99244',
    medicareAllowableUSD: 126.40,
    commercialAllowableUSD: 172.80,
    selfPayDiscountRate: 0.35
  },
  {
    cptCode: '99245',
    description: 'Outpatient Evaluation & Management Service Code 99245',
    medicareAllowableUSD: 128.25,
    commercialAllowableUSD: 175.25,
    selfPayDiscountRate: 0.35
  },
  {
    cptCode: '99246',
    description: 'Outpatient Evaluation & Management Service Code 99246',
    medicareAllowableUSD: 130.10,
    commercialAllowableUSD: 177.70,
    selfPayDiscountRate: 0.35
  },
  {
    cptCode: '99247',
    description: 'Outpatient Evaluation & Management Service Code 99247',
    medicareAllowableUSD: 131.95,
    commercialAllowableUSD: 180.15,
    selfPayDiscountRate: 0.35
  },
  {
    cptCode: '99248',
    description: 'Outpatient Evaluation & Management Service Code 99248',
    medicareAllowableUSD: 133.80,
    commercialAllowableUSD: 182.60,
    selfPayDiscountRate: 0.35
  },
  {
    cptCode: '99249',
    description: 'Outpatient Evaluation & Management Service Code 99249',
    medicareAllowableUSD: 135.65,
    commercialAllowableUSD: 185.05,
    selfPayDiscountRate: 0.35
  },
  {
    cptCode: '99250',
    description: 'Outpatient Evaluation & Management Service Code 99250',
    medicareAllowableUSD: 137.50,
    commercialAllowableUSD: 187.50,
    selfPayDiscountRate: 0.35
  },
  {
    cptCode: '99251',
    description: 'Outpatient Evaluation & Management Service Code 99251',
    medicareAllowableUSD: 139.35,
    commercialAllowableUSD: 189.95,
    selfPayDiscountRate: 0.35
  },
  {
    cptCode: '99252',
    description: 'Outpatient Evaluation & Management Service Code 99252',
    medicareAllowableUSD: 141.20,
    commercialAllowableUSD: 192.40,
    selfPayDiscountRate: 0.35
  },
  {
    cptCode: '99253',
    description: 'Outpatient Evaluation & Management Service Code 99253',
    medicareAllowableUSD: 143.05,
    commercialAllowableUSD: 194.85,
    selfPayDiscountRate: 0.35
  },
  {
    cptCode: '99254',
    description: 'Outpatient Evaluation & Management Service Code 99254',
    medicareAllowableUSD: 144.90,
    commercialAllowableUSD: 197.30,
    selfPayDiscountRate: 0.35
  },
  {
    cptCode: '99255',
    description: 'Outpatient Evaluation & Management Service Code 99255',
    medicareAllowableUSD: 146.75,
    commercialAllowableUSD: 199.75,
    selfPayDiscountRate: 0.35
  },
  {
    cptCode: '99256',
    description: 'Outpatient Evaluation & Management Service Code 99256',
    medicareAllowableUSD: 148.60,
    commercialAllowableUSD: 202.20,
    selfPayDiscountRate: 0.35
  },
  {
    cptCode: '99257',
    description: 'Outpatient Evaluation & Management Service Code 99257',
    medicareAllowableUSD: 150.45,
    commercialAllowableUSD: 204.65,
    selfPayDiscountRate: 0.35
  },
  {
    cptCode: '99258',
    description: 'Outpatient Evaluation & Management Service Code 99258',
    medicareAllowableUSD: 152.30,
    commercialAllowableUSD: 207.10,
    selfPayDiscountRate: 0.35
  },
  {
    cptCode: '99259',
    description: 'Outpatient Evaluation & Management Service Code 99259',
    medicareAllowableUSD: 154.15,
    commercialAllowableUSD: 209.55,
    selfPayDiscountRate: 0.35
  },
  {
    cptCode: '99260',
    description: 'Outpatient Evaluation & Management Service Code 99260',
    medicareAllowableUSD: 156.00,
    commercialAllowableUSD: 212.00,
    selfPayDiscountRate: 0.35
  },
  {
    cptCode: '99261',
    description: 'Outpatient Evaluation & Management Service Code 99261',
    medicareAllowableUSD: 157.85,
    commercialAllowableUSD: 214.45,
    selfPayDiscountRate: 0.35
  },
  {
    cptCode: '99262',
    description: 'Outpatient Evaluation & Management Service Code 99262',
    medicareAllowableUSD: 159.70,
    commercialAllowableUSD: 216.90,
    selfPayDiscountRate: 0.35
  },
  {
    cptCode: '99263',
    description: 'Outpatient Evaluation & Management Service Code 99263',
    medicareAllowableUSD: 161.55,
    commercialAllowableUSD: 219.35,
    selfPayDiscountRate: 0.35
  },
  {
    cptCode: '99264',
    description: 'Outpatient Evaluation & Management Service Code 99264',
    medicareAllowableUSD: 163.40,
    commercialAllowableUSD: 221.80,
    selfPayDiscountRate: 0.35
  },
  {
    cptCode: '99265',
    description: 'Outpatient Evaluation & Management Service Code 99265',
    medicareAllowableUSD: 165.25,
    commercialAllowableUSD: 224.25,
    selfPayDiscountRate: 0.35
  },
  {
    cptCode: '99266',
    description: 'Outpatient Evaluation & Management Service Code 99266',
    medicareAllowableUSD: 167.10,
    commercialAllowableUSD: 226.70,
    selfPayDiscountRate: 0.35
  },
  {
    cptCode: '99267',
    description: 'Outpatient Evaluation & Management Service Code 99267',
    medicareAllowableUSD: 168.95,
    commercialAllowableUSD: 229.15,
    selfPayDiscountRate: 0.35
  },
  {
    cptCode: '99268',
    description: 'Outpatient Evaluation & Management Service Code 99268',
    medicareAllowableUSD: 170.80,
    commercialAllowableUSD: 231.60,
    selfPayDiscountRate: 0.35
  },
  {
    cptCode: '99269',
    description: 'Outpatient Evaluation & Management Service Code 99269',
    medicareAllowableUSD: 172.65,
    commercialAllowableUSD: 234.05,
    selfPayDiscountRate: 0.35
  },
  {
    cptCode: '99270',
    description: 'Outpatient Evaluation & Management Service Code 99270',
    medicareAllowableUSD: 174.50,
    commercialAllowableUSD: 236.50,
    selfPayDiscountRate: 0.35
  },
  {
    cptCode: '99271',
    description: 'Outpatient Evaluation & Management Service Code 99271',
    medicareAllowableUSD: 176.35,
    commercialAllowableUSD: 238.95,
    selfPayDiscountRate: 0.35
  },
  {
    cptCode: '99272',
    description: 'Outpatient Evaluation & Management Service Code 99272',
    medicareAllowableUSD: 178.20,
    commercialAllowableUSD: 241.40,
    selfPayDiscountRate: 0.35
  },
  {
    cptCode: '99273',
    description: 'Outpatient Evaluation & Management Service Code 99273',
    medicareAllowableUSD: 180.05,
    commercialAllowableUSD: 243.85,
    selfPayDiscountRate: 0.35
  },
  {
    cptCode: '99274',
    description: 'Outpatient Evaluation & Management Service Code 99274',
    medicareAllowableUSD: 181.90,
    commercialAllowableUSD: 246.30,
    selfPayDiscountRate: 0.35
  },
  {
    cptCode: '99275',
    description: 'Outpatient Evaluation & Management Service Code 99275',
    medicareAllowableUSD: 183.75,
    commercialAllowableUSD: 248.75,
    selfPayDiscountRate: 0.35
  },
  {
    cptCode: '99276',
    description: 'Outpatient Evaluation & Management Service Code 99276',
    medicareAllowableUSD: 185.60,
    commercialAllowableUSD: 251.20,
    selfPayDiscountRate: 0.35
  },
  {
    cptCode: '99277',
    description: 'Outpatient Evaluation & Management Service Code 99277',
    medicareAllowableUSD: 187.45,
    commercialAllowableUSD: 253.65,
    selfPayDiscountRate: 0.35
  },
  {
    cptCode: '99278',
    description: 'Outpatient Evaluation & Management Service Code 99278',
    medicareAllowableUSD: 189.30,
    commercialAllowableUSD: 256.10,
    selfPayDiscountRate: 0.35
  },
  {
    cptCode: '99279',
    description: 'Outpatient Evaluation & Management Service Code 99279',
    medicareAllowableUSD: 191.15,
    commercialAllowableUSD: 258.55,
    selfPayDiscountRate: 0.35
  },
  {
    cptCode: '99280',
    description: 'Outpatient Evaluation & Management Service Code 99280',
    medicareAllowableUSD: 193.00,
    commercialAllowableUSD: 261.00,
    selfPayDiscountRate: 0.35
  },
  {
    cptCode: '99281',
    description: 'Outpatient Evaluation & Management Service Code 99281',
    medicareAllowableUSD: 194.85,
    commercialAllowableUSD: 263.45,
    selfPayDiscountRate: 0.35
  },
  {
    cptCode: '99282',
    description: 'Outpatient Evaluation & Management Service Code 99282',
    medicareAllowableUSD: 196.70,
    commercialAllowableUSD: 265.90,
    selfPayDiscountRate: 0.35
  },
  {
    cptCode: '99283',
    description: 'Outpatient Evaluation & Management Service Code 99283',
    medicareAllowableUSD: 198.55,
    commercialAllowableUSD: 268.35,
    selfPayDiscountRate: 0.35
  },
  {
    cptCode: '99284',
    description: 'Outpatient Evaluation & Management Service Code 99284',
    medicareAllowableUSD: 200.40,
    commercialAllowableUSD: 270.80,
    selfPayDiscountRate: 0.35
  },
  {
    cptCode: '99285',
    description: 'Outpatient Evaluation & Management Service Code 99285',
    medicareAllowableUSD: 202.25,
    commercialAllowableUSD: 273.25,
    selfPayDiscountRate: 0.35
  },
  {
    cptCode: '99286',
    description: 'Outpatient Evaluation & Management Service Code 99286',
    medicareAllowableUSD: 204.10,
    commercialAllowableUSD: 275.70,
    selfPayDiscountRate: 0.35
  },
  {
    cptCode: '99287',
    description: 'Outpatient Evaluation & Management Service Code 99287',
    medicareAllowableUSD: 205.95,
    commercialAllowableUSD: 278.15,
    selfPayDiscountRate: 0.35
  },
  {
    cptCode: '99288',
    description: 'Outpatient Evaluation & Management Service Code 99288',
    medicareAllowableUSD: 207.80,
    commercialAllowableUSD: 280.60,
    selfPayDiscountRate: 0.35
  },
  {
    cptCode: '99289',
    description: 'Outpatient Evaluation & Management Service Code 99289',
    medicareAllowableUSD: 209.65,
    commercialAllowableUSD: 283.05,
    selfPayDiscountRate: 0.35
  },
  {
    cptCode: '99290',
    description: 'Outpatient Evaluation & Management Service Code 99290',
    medicareAllowableUSD: 211.50,
    commercialAllowableUSD: 285.50,
    selfPayDiscountRate: 0.35
  },
  {
    cptCode: '99291',
    description: 'Outpatient Evaluation & Management Service Code 99291',
    medicareAllowableUSD: 213.35,
    commercialAllowableUSD: 287.95,
    selfPayDiscountRate: 0.35
  },
  {
    cptCode: '99292',
    description: 'Outpatient Evaluation & Management Service Code 99292',
    medicareAllowableUSD: 215.20,
    commercialAllowableUSD: 290.40,
    selfPayDiscountRate: 0.35
  },
  {
    cptCode: '99293',
    description: 'Outpatient Evaluation & Management Service Code 99293',
    medicareAllowableUSD: 217.05,
    commercialAllowableUSD: 292.85,
    selfPayDiscountRate: 0.35
  },
  {
    cptCode: '99294',
    description: 'Outpatient Evaluation & Management Service Code 99294',
    medicareAllowableUSD: 218.90,
    commercialAllowableUSD: 295.30,
    selfPayDiscountRate: 0.35
  },
  {
    cptCode: '99295',
    description: 'Outpatient Evaluation & Management Service Code 99295',
    medicareAllowableUSD: 220.75,
    commercialAllowableUSD: 297.75,
    selfPayDiscountRate: 0.35
  },
  {
    cptCode: '99296',
    description: 'Outpatient Evaluation & Management Service Code 99296',
    medicareAllowableUSD: 222.60,
    commercialAllowableUSD: 300.20,
    selfPayDiscountRate: 0.35
  },
  {
    cptCode: '99297',
    description: 'Outpatient Evaluation & Management Service Code 99297',
    medicareAllowableUSD: 224.45,
    commercialAllowableUSD: 302.65,
    selfPayDiscountRate: 0.35
  },
  {
    cptCode: '99298',
    description: 'Outpatient Evaluation & Management Service Code 99298',
    medicareAllowableUSD: 226.30,
    commercialAllowableUSD: 305.10,
    selfPayDiscountRate: 0.35
  },
  {
    cptCode: '99299',
    description: 'Outpatient Evaluation & Management Service Code 99299',
    medicareAllowableUSD: 228.15,
    commercialAllowableUSD: 307.55,
    selfPayDiscountRate: 0.35
  },
  {
    cptCode: '99300',
    description: 'Outpatient Evaluation & Management Service Code 99300',
    medicareAllowableUSD: 230.00,
    commercialAllowableUSD: 310.00,
    selfPayDiscountRate: 0.35
  },
  {
    cptCode: '99301',
    description: 'Outpatient Evaluation & Management Service Code 99301',
    medicareAllowableUSD: 231.85,
    commercialAllowableUSD: 312.45,
    selfPayDiscountRate: 0.35
  },
  {
    cptCode: '99302',
    description: 'Outpatient Evaluation & Management Service Code 99302',
    medicareAllowableUSD: 233.70,
    commercialAllowableUSD: 314.90,
    selfPayDiscountRate: 0.35
  },
  {
    cptCode: '99303',
    description: 'Outpatient Evaluation & Management Service Code 99303',
    medicareAllowableUSD: 235.55,
    commercialAllowableUSD: 317.35,
    selfPayDiscountRate: 0.35
  },
  {
    cptCode: '99304',
    description: 'Outpatient Evaluation & Management Service Code 99304',
    medicareAllowableUSD: 237.40,
    commercialAllowableUSD: 319.80,
    selfPayDiscountRate: 0.35
  },
  {
    cptCode: '99305',
    description: 'Outpatient Evaluation & Management Service Code 99305',
    medicareAllowableUSD: 239.25,
    commercialAllowableUSD: 322.25,
    selfPayDiscountRate: 0.35
  },
  {
    cptCode: '99306',
    description: 'Outpatient Evaluation & Management Service Code 99306',
    medicareAllowableUSD: 241.10,
    commercialAllowableUSD: 324.70,
    selfPayDiscountRate: 0.35
  },
  {
    cptCode: '99307',
    description: 'Outpatient Evaluation & Management Service Code 99307',
    medicareAllowableUSD: 242.95,
    commercialAllowableUSD: 327.15,
    selfPayDiscountRate: 0.35
  },
  {
    cptCode: '99308',
    description: 'Outpatient Evaluation & Management Service Code 99308',
    medicareAllowableUSD: 244.80,
    commercialAllowableUSD: 329.60,
    selfPayDiscountRate: 0.35
  },
  {
    cptCode: '99309',
    description: 'Outpatient Evaluation & Management Service Code 99309',
    medicareAllowableUSD: 246.65,
    commercialAllowableUSD: 332.05,
    selfPayDiscountRate: 0.35
  },
  {
    cptCode: '99310',
    description: 'Outpatient Evaluation & Management Service Code 99310',
    medicareAllowableUSD: 248.50,
    commercialAllowableUSD: 334.50,
    selfPayDiscountRate: 0.35
  },
  {
    cptCode: '99311',
    description: 'Outpatient Evaluation & Management Service Code 99311',
    medicareAllowableUSD: 250.35,
    commercialAllowableUSD: 336.95,
    selfPayDiscountRate: 0.35
  },
  {
    cptCode: '99312',
    description: 'Outpatient Evaluation & Management Service Code 99312',
    medicareAllowableUSD: 252.20,
    commercialAllowableUSD: 339.40,
    selfPayDiscountRate: 0.35
  },
  {
    cptCode: '99313',
    description: 'Outpatient Evaluation & Management Service Code 99313',
    medicareAllowableUSD: 254.05,
    commercialAllowableUSD: 341.85,
    selfPayDiscountRate: 0.35
  },
  {
    cptCode: '99314',
    description: 'Outpatient Evaluation & Management Service Code 99314',
    medicareAllowableUSD: 255.90,
    commercialAllowableUSD: 344.30,
    selfPayDiscountRate: 0.35
  },
  {
    cptCode: '99315',
    description: 'Outpatient Evaluation & Management Service Code 99315',
    medicareAllowableUSD: 257.75,
    commercialAllowableUSD: 346.75,
    selfPayDiscountRate: 0.35
  },
  {
    cptCode: '99316',
    description: 'Outpatient Evaluation & Management Service Code 99316',
    medicareAllowableUSD: 259.60,
    commercialAllowableUSD: 349.20,
    selfPayDiscountRate: 0.35
  },
  {
    cptCode: '99317',
    description: 'Outpatient Evaluation & Management Service Code 99317',
    medicareAllowableUSD: 261.45,
    commercialAllowableUSD: 351.65,
    selfPayDiscountRate: 0.35
  },
  {
    cptCode: '99318',
    description: 'Outpatient Evaluation & Management Service Code 99318',
    medicareAllowableUSD: 263.30,
    commercialAllowableUSD: 354.10,
    selfPayDiscountRate: 0.35
  },
  {
    cptCode: '99319',
    description: 'Outpatient Evaluation & Management Service Code 99319',
    medicareAllowableUSD: 265.15,
    commercialAllowableUSD: 356.55,
    selfPayDiscountRate: 0.35
  },
  {
    cptCode: '99320',
    description: 'Outpatient Evaluation & Management Service Code 99320',
    medicareAllowableUSD: 267.00,
    commercialAllowableUSD: 359.00,
    selfPayDiscountRate: 0.35
  },
  {
    cptCode: '99321',
    description: 'Outpatient Evaluation & Management Service Code 99321',
    medicareAllowableUSD: 268.85,
    commercialAllowableUSD: 361.45,
    selfPayDiscountRate: 0.35
  },
  {
    cptCode: '99322',
    description: 'Outpatient Evaluation & Management Service Code 99322',
    medicareAllowableUSD: 270.70,
    commercialAllowableUSD: 363.90,
    selfPayDiscountRate: 0.35
  },
  {
    cptCode: '99323',
    description: 'Outpatient Evaluation & Management Service Code 99323',
    medicareAllowableUSD: 272.55,
    commercialAllowableUSD: 366.35,
    selfPayDiscountRate: 0.35
  },
  {
    cptCode: '99324',
    description: 'Outpatient Evaluation & Management Service Code 99324',
    medicareAllowableUSD: 274.40,
    commercialAllowableUSD: 368.80,
    selfPayDiscountRate: 0.35
  },
  {
    cptCode: '99325',
    description: 'Outpatient Evaluation & Management Service Code 99325',
    medicareAllowableUSD: 276.25,
    commercialAllowableUSD: 371.25,
    selfPayDiscountRate: 0.35
  },
  {
    cptCode: '99326',
    description: 'Outpatient Evaluation & Management Service Code 99326',
    medicareAllowableUSD: 278.10,
    commercialAllowableUSD: 373.70,
    selfPayDiscountRate: 0.35
  },
  {
    cptCode: '99327',
    description: 'Outpatient Evaluation & Management Service Code 99327',
    medicareAllowableUSD: 279.95,
    commercialAllowableUSD: 376.15,
    selfPayDiscountRate: 0.35
  },
  {
    cptCode: '99328',
    description: 'Outpatient Evaluation & Management Service Code 99328',
    medicareAllowableUSD: 281.80,
    commercialAllowableUSD: 378.60,
    selfPayDiscountRate: 0.35
  },
  {
    cptCode: '99329',
    description: 'Outpatient Evaluation & Management Service Code 99329',
    medicareAllowableUSD: 283.65,
    commercialAllowableUSD: 381.05,
    selfPayDiscountRate: 0.35
  },
  {
    cptCode: '99330',
    description: 'Outpatient Evaluation & Management Service Code 99330',
    medicareAllowableUSD: 285.50,
    commercialAllowableUSD: 383.50,
    selfPayDiscountRate: 0.35
  },
  {
    cptCode: '99331',
    description: 'Outpatient Evaluation & Management Service Code 99331',
    medicareAllowableUSD: 287.35,
    commercialAllowableUSD: 385.95,
    selfPayDiscountRate: 0.35
  },
  {
    cptCode: '99332',
    description: 'Outpatient Evaluation & Management Service Code 99332',
    medicareAllowableUSD: 289.20,
    commercialAllowableUSD: 388.40,
    selfPayDiscountRate: 0.35
  },
  {
    cptCode: '99333',
    description: 'Outpatient Evaluation & Management Service Code 99333',
    medicareAllowableUSD: 291.05,
    commercialAllowableUSD: 390.85,
    selfPayDiscountRate: 0.35
  },
  {
    cptCode: '99334',
    description: 'Outpatient Evaluation & Management Service Code 99334',
    medicareAllowableUSD: 292.90,
    commercialAllowableUSD: 393.30,
    selfPayDiscountRate: 0.35
  },
  {
    cptCode: '99335',
    description: 'Outpatient Evaluation & Management Service Code 99335',
    medicareAllowableUSD: 294.75,
    commercialAllowableUSD: 395.75,
    selfPayDiscountRate: 0.35
  },
  {
    cptCode: '99336',
    description: 'Outpatient Evaluation & Management Service Code 99336',
    medicareAllowableUSD: 296.60,
    commercialAllowableUSD: 398.20,
    selfPayDiscountRate: 0.35
  },
  {
    cptCode: '99337',
    description: 'Outpatient Evaluation & Management Service Code 99337',
    medicareAllowableUSD: 298.45,
    commercialAllowableUSD: 400.65,
    selfPayDiscountRate: 0.35
  },
  {
    cptCode: '99338',
    description: 'Outpatient Evaluation & Management Service Code 99338',
    medicareAllowableUSD: 300.30,
    commercialAllowableUSD: 403.10,
    selfPayDiscountRate: 0.35
  },
  {
    cptCode: '99339',
    description: 'Outpatient Evaluation & Management Service Code 99339',
    medicareAllowableUSD: 302.15,
    commercialAllowableUSD: 405.55,
    selfPayDiscountRate: 0.35
  },
  {
    cptCode: '99340',
    description: 'Outpatient Evaluation & Management Service Code 99340',
    medicareAllowableUSD: 304.00,
    commercialAllowableUSD: 408.00,
    selfPayDiscountRate: 0.35
  },
  {
    cptCode: '99341',
    description: 'Outpatient Evaluation & Management Service Code 99341',
    medicareAllowableUSD: 305.85,
    commercialAllowableUSD: 410.45,
    selfPayDiscountRate: 0.35
  },
  {
    cptCode: '99342',
    description: 'Outpatient Evaluation & Management Service Code 99342',
    medicareAllowableUSD: 307.70,
    commercialAllowableUSD: 412.90,
    selfPayDiscountRate: 0.35
  },
  {
    cptCode: '99343',
    description: 'Outpatient Evaluation & Management Service Code 99343',
    medicareAllowableUSD: 309.55,
    commercialAllowableUSD: 415.35,
    selfPayDiscountRate: 0.35
  },
  {
    cptCode: '99344',
    description: 'Outpatient Evaluation & Management Service Code 99344',
    medicareAllowableUSD: 311.40,
    commercialAllowableUSD: 417.80,
    selfPayDiscountRate: 0.35
  },
  {
    cptCode: '99345',
    description: 'Outpatient Evaluation & Management Service Code 99345',
    medicareAllowableUSD: 313.25,
    commercialAllowableUSD: 420.25,
    selfPayDiscountRate: 0.35
  },
  {
    cptCode: '99346',
    description: 'Outpatient Evaluation & Management Service Code 99346',
    medicareAllowableUSD: 315.10,
    commercialAllowableUSD: 422.70,
    selfPayDiscountRate: 0.35
  },
  {
    cptCode: '99347',
    description: 'Outpatient Evaluation & Management Service Code 99347',
    medicareAllowableUSD: 316.95,
    commercialAllowableUSD: 425.15,
    selfPayDiscountRate: 0.35
  },
  {
    cptCode: '99348',
    description: 'Outpatient Evaluation & Management Service Code 99348',
    medicareAllowableUSD: 318.80,
    commercialAllowableUSD: 427.60,
    selfPayDiscountRate: 0.35
  },
  {
    cptCode: '99349',
    description: 'Outpatient Evaluation & Management Service Code 99349',
    medicareAllowableUSD: 320.65,
    commercialAllowableUSD: 430.05,
    selfPayDiscountRate: 0.35
  },
  {
    cptCode: '99350',
    description: 'Outpatient Evaluation & Management Service Code 99350',
    medicareAllowableUSD: 322.50,
    commercialAllowableUSD: 432.50,
    selfPayDiscountRate: 0.35
  },
  {
    cptCode: '99351',
    description: 'Outpatient Evaluation & Management Service Code 99351',
    medicareAllowableUSD: 324.35,
    commercialAllowableUSD: 434.95,
    selfPayDiscountRate: 0.35
  },
  {
    cptCode: '99352',
    description: 'Outpatient Evaluation & Management Service Code 99352',
    medicareAllowableUSD: 326.20,
    commercialAllowableUSD: 437.40,
    selfPayDiscountRate: 0.35
  },
  {
    cptCode: '99353',
    description: 'Outpatient Evaluation & Management Service Code 99353',
    medicareAllowableUSD: 328.05,
    commercialAllowableUSD: 439.85,
    selfPayDiscountRate: 0.35
  },
  {
    cptCode: '99354',
    description: 'Outpatient Evaluation & Management Service Code 99354',
    medicareAllowableUSD: 329.90,
    commercialAllowableUSD: 442.30,
    selfPayDiscountRate: 0.35
  },
  {
    cptCode: '99355',
    description: 'Outpatient Evaluation & Management Service Code 99355',
    medicareAllowableUSD: 331.75,
    commercialAllowableUSD: 444.75,
    selfPayDiscountRate: 0.35
  },
  {
    cptCode: '99356',
    description: 'Outpatient Evaluation & Management Service Code 99356',
    medicareAllowableUSD: 333.60,
    commercialAllowableUSD: 447.20,
    selfPayDiscountRate: 0.35
  },
  {
    cptCode: '99357',
    description: 'Outpatient Evaluation & Management Service Code 99357',
    medicareAllowableUSD: 335.45,
    commercialAllowableUSD: 449.65,
    selfPayDiscountRate: 0.35
  },
  {
    cptCode: '99358',
    description: 'Outpatient Evaluation & Management Service Code 99358',
    medicareAllowableUSD: 337.30,
    commercialAllowableUSD: 452.10,
    selfPayDiscountRate: 0.35
  },
  {
    cptCode: '99359',
    description: 'Outpatient Evaluation & Management Service Code 99359',
    medicareAllowableUSD: 339.15,
    commercialAllowableUSD: 454.55,
    selfPayDiscountRate: 0.35
  },
  {
    cptCode: '99360',
    description: 'Outpatient Evaluation & Management Service Code 99360',
    medicareAllowableUSD: 341.00,
    commercialAllowableUSD: 457.00,
    selfPayDiscountRate: 0.35
  },
  {
    cptCode: '99361',
    description: 'Outpatient Evaluation & Management Service Code 99361',
    medicareAllowableUSD: 342.85,
    commercialAllowableUSD: 459.45,
    selfPayDiscountRate: 0.35
  },
  {
    cptCode: '99362',
    description: 'Outpatient Evaluation & Management Service Code 99362',
    medicareAllowableUSD: 344.70,
    commercialAllowableUSD: 461.90,
    selfPayDiscountRate: 0.35
  },
  {
    cptCode: '99363',
    description: 'Outpatient Evaluation & Management Service Code 99363',
    medicareAllowableUSD: 346.55,
    commercialAllowableUSD: 464.35,
    selfPayDiscountRate: 0.35
  },
  {
    cptCode: '99364',
    description: 'Outpatient Evaluation & Management Service Code 99364',
    medicareAllowableUSD: 348.40,
    commercialAllowableUSD: 466.80,
    selfPayDiscountRate: 0.35
  },
  {
    cptCode: '99365',
    description: 'Outpatient Evaluation & Management Service Code 99365',
    medicareAllowableUSD: 350.25,
    commercialAllowableUSD: 469.25,
    selfPayDiscountRate: 0.35
  },
  {
    cptCode: '99366',
    description: 'Outpatient Evaluation & Management Service Code 99366',
    medicareAllowableUSD: 352.10,
    commercialAllowableUSD: 471.70,
    selfPayDiscountRate: 0.35
  },
  {
    cptCode: '99367',
    description: 'Outpatient Evaluation & Management Service Code 99367',
    medicareAllowableUSD: 353.95,
    commercialAllowableUSD: 474.15,
    selfPayDiscountRate: 0.35
  },
  {
    cptCode: '99368',
    description: 'Outpatient Evaluation & Management Service Code 99368',
    medicareAllowableUSD: 355.80,
    commercialAllowableUSD: 476.60,
    selfPayDiscountRate: 0.35
  },
  {
    cptCode: '99369',
    description: 'Outpatient Evaluation & Management Service Code 99369',
    medicareAllowableUSD: 357.65,
    commercialAllowableUSD: 479.05,
    selfPayDiscountRate: 0.35
  },
  {
    cptCode: '99370',
    description: 'Outpatient Evaluation & Management Service Code 99370',
    medicareAllowableUSD: 359.50,
    commercialAllowableUSD: 481.50,
    selfPayDiscountRate: 0.35
  },
  {
    cptCode: '99371',
    description: 'Outpatient Evaluation & Management Service Code 99371',
    medicareAllowableUSD: 361.35,
    commercialAllowableUSD: 483.95,
    selfPayDiscountRate: 0.35
  },
  {
    cptCode: '99372',
    description: 'Outpatient Evaluation & Management Service Code 99372',
    medicareAllowableUSD: 363.20,
    commercialAllowableUSD: 486.40,
    selfPayDiscountRate: 0.35
  },
  {
    cptCode: '99373',
    description: 'Outpatient Evaluation & Management Service Code 99373',
    medicareAllowableUSD: 365.05,
    commercialAllowableUSD: 488.85,
    selfPayDiscountRate: 0.35
  },
  {
    cptCode: '99374',
    description: 'Outpatient Evaluation & Management Service Code 99374',
    medicareAllowableUSD: 366.90,
    commercialAllowableUSD: 491.30,
    selfPayDiscountRate: 0.35
  },
  {
    cptCode: '99375',
    description: 'Outpatient Evaluation & Management Service Code 99375',
    medicareAllowableUSD: 368.75,
    commercialAllowableUSD: 493.75,
    selfPayDiscountRate: 0.35
  },
  {
    cptCode: '99376',
    description: 'Outpatient Evaluation & Management Service Code 99376',
    medicareAllowableUSD: 370.60,
    commercialAllowableUSD: 496.20,
    selfPayDiscountRate: 0.35
  },
  {
    cptCode: '99377',
    description: 'Outpatient Evaluation & Management Service Code 99377',
    medicareAllowableUSD: 372.45,
    commercialAllowableUSD: 498.65,
    selfPayDiscountRate: 0.35
  },
  {
    cptCode: '99378',
    description: 'Outpatient Evaluation & Management Service Code 99378',
    medicareAllowableUSD: 374.30,
    commercialAllowableUSD: 501.10,
    selfPayDiscountRate: 0.35
  },
  {
    cptCode: '99379',
    description: 'Outpatient Evaluation & Management Service Code 99379',
    medicareAllowableUSD: 376.15,
    commercialAllowableUSD: 503.55,
    selfPayDiscountRate: 0.35
  },
  {
    cptCode: '99380',
    description: 'Outpatient Evaluation & Management Service Code 99380',
    medicareAllowableUSD: 378.00,
    commercialAllowableUSD: 506.00,
    selfPayDiscountRate: 0.35
  },
  {
    cptCode: '99381',
    description: 'Outpatient Evaluation & Management Service Code 99381',
    medicareAllowableUSD: 379.85,
    commercialAllowableUSD: 508.45,
    selfPayDiscountRate: 0.35
  },
  {
    cptCode: '99382',
    description: 'Outpatient Evaluation & Management Service Code 99382',
    medicareAllowableUSD: 381.70,
    commercialAllowableUSD: 510.90,
    selfPayDiscountRate: 0.35
  },
  {
    cptCode: '99383',
    description: 'Outpatient Evaluation & Management Service Code 99383',
    medicareAllowableUSD: 383.55,
    commercialAllowableUSD: 513.35,
    selfPayDiscountRate: 0.35
  },
  {
    cptCode: '99384',
    description: 'Outpatient Evaluation & Management Service Code 99384',
    medicareAllowableUSD: 385.40,
    commercialAllowableUSD: 515.80,
    selfPayDiscountRate: 0.35
  },
  {
    cptCode: '99385',
    description: 'Outpatient Evaluation & Management Service Code 99385',
    medicareAllowableUSD: 387.25,
    commercialAllowableUSD: 518.25,
    selfPayDiscountRate: 0.35
  },
  {
    cptCode: '99386',
    description: 'Outpatient Evaluation & Management Service Code 99386',
    medicareAllowableUSD: 389.10,
    commercialAllowableUSD: 520.70,
    selfPayDiscountRate: 0.35
  },
  {
    cptCode: '99387',
    description: 'Outpatient Evaluation & Management Service Code 99387',
    medicareAllowableUSD: 390.95,
    commercialAllowableUSD: 523.15,
    selfPayDiscountRate: 0.35
  },
  {
    cptCode: '99388',
    description: 'Outpatient Evaluation & Management Service Code 99388',
    medicareAllowableUSD: 392.80,
    commercialAllowableUSD: 525.60,
    selfPayDiscountRate: 0.35
  },
  {
    cptCode: '99389',
    description: 'Outpatient Evaluation & Management Service Code 99389',
    medicareAllowableUSD: 394.65,
    commercialAllowableUSD: 528.05,
    selfPayDiscountRate: 0.35
  },
  {
    cptCode: '99390',
    description: 'Outpatient Evaluation & Management Service Code 99390',
    medicareAllowableUSD: 396.50,
    commercialAllowableUSD: 530.50,
    selfPayDiscountRate: 0.35
  },
  {
    cptCode: '99391',
    description: 'Outpatient Evaluation & Management Service Code 99391',
    medicareAllowableUSD: 398.35,
    commercialAllowableUSD: 532.95,
    selfPayDiscountRate: 0.35
  },
  {
    cptCode: '99392',
    description: 'Outpatient Evaluation & Management Service Code 99392',
    medicareAllowableUSD: 400.20,
    commercialAllowableUSD: 535.40,
    selfPayDiscountRate: 0.35
  },
  {
    cptCode: '99393',
    description: 'Outpatient Evaluation & Management Service Code 99393',
    medicareAllowableUSD: 402.05,
    commercialAllowableUSD: 537.85,
    selfPayDiscountRate: 0.35
  },
  {
    cptCode: '99394',
    description: 'Outpatient Evaluation & Management Service Code 99394',
    medicareAllowableUSD: 403.90,
    commercialAllowableUSD: 540.30,
    selfPayDiscountRate: 0.35
  },
  {
    cptCode: '99395',
    description: 'Outpatient Evaluation & Management Service Code 99395',
    medicareAllowableUSD: 405.75,
    commercialAllowableUSD: 542.75,
    selfPayDiscountRate: 0.35
  },
  {
    cptCode: '99396',
    description: 'Outpatient Evaluation & Management Service Code 99396',
    medicareAllowableUSD: 407.60,
    commercialAllowableUSD: 545.20,
    selfPayDiscountRate: 0.35
  },
  {
    cptCode: '99397',
    description: 'Outpatient Evaluation & Management Service Code 99397',
    medicareAllowableUSD: 409.45,
    commercialAllowableUSD: 547.65,
    selfPayDiscountRate: 0.35
  },
  {
    cptCode: '99398',
    description: 'Outpatient Evaluation & Management Service Code 99398',
    medicareAllowableUSD: 411.30,
    commercialAllowableUSD: 550.10,
    selfPayDiscountRate: 0.35
  },
  {
    cptCode: '99399',
    description: 'Outpatient Evaluation & Management Service Code 99399',
    medicareAllowableUSD: 413.15,
    commercialAllowableUSD: 552.55,
    selfPayDiscountRate: 0.35
  },
  {
    cptCode: '99400',
    description: 'Outpatient Evaluation & Management Service Code 99400',
    medicareAllowableUSD: 415.00,
    commercialAllowableUSD: 555.00,
    selfPayDiscountRate: 0.35
  },
  {
    cptCode: '99401',
    description: 'Outpatient Evaluation & Management Service Code 99401',
    medicareAllowableUSD: 416.85,
    commercialAllowableUSD: 557.45,
    selfPayDiscountRate: 0.35
  },
  {
    cptCode: '99402',
    description: 'Outpatient Evaluation & Management Service Code 99402',
    medicareAllowableUSD: 418.70,
    commercialAllowableUSD: 559.90,
    selfPayDiscountRate: 0.35
  },
  {
    cptCode: '99403',
    description: 'Outpatient Evaluation & Management Service Code 99403',
    medicareAllowableUSD: 420.55,
    commercialAllowableUSD: 562.35,
    selfPayDiscountRate: 0.35
  },
  {
    cptCode: '99404',
    description: 'Outpatient Evaluation & Management Service Code 99404',
    medicareAllowableUSD: 422.40,
    commercialAllowableUSD: 564.80,
    selfPayDiscountRate: 0.35
  },
  {
    cptCode: '99405',
    description: 'Outpatient Evaluation & Management Service Code 99405',
    medicareAllowableUSD: 424.25,
    commercialAllowableUSD: 567.25,
    selfPayDiscountRate: 0.35
  },
  {
    cptCode: '99406',
    description: 'Outpatient Evaluation & Management Service Code 99406',
    medicareAllowableUSD: 426.10,
    commercialAllowableUSD: 569.70,
    selfPayDiscountRate: 0.35
  },
  {
    cptCode: '99407',
    description: 'Outpatient Evaluation & Management Service Code 99407',
    medicareAllowableUSD: 427.95,
    commercialAllowableUSD: 572.15,
    selfPayDiscountRate: 0.35
  },
  {
    cptCode: '99408',
    description: 'Outpatient Evaluation & Management Service Code 99408',
    medicareAllowableUSD: 429.80,
    commercialAllowableUSD: 574.60,
    selfPayDiscountRate: 0.35
  },
  {
    cptCode: '99409',
    description: 'Outpatient Evaluation & Management Service Code 99409',
    medicareAllowableUSD: 431.65,
    commercialAllowableUSD: 577.05,
    selfPayDiscountRate: 0.35
  },
  {
    cptCode: '99410',
    description: 'Outpatient Evaluation & Management Service Code 99410',
    medicareAllowableUSD: 433.50,
    commercialAllowableUSD: 579.50,
    selfPayDiscountRate: 0.35
  },
  {
    cptCode: '99411',
    description: 'Outpatient Evaluation & Management Service Code 99411',
    medicareAllowableUSD: 435.35,
    commercialAllowableUSD: 581.95,
    selfPayDiscountRate: 0.35
  },
  {
    cptCode: '99412',
    description: 'Outpatient Evaluation & Management Service Code 99412',
    medicareAllowableUSD: 437.20,
    commercialAllowableUSD: 584.40,
    selfPayDiscountRate: 0.35
  },
  {
    cptCode: '99413',
    description: 'Outpatient Evaluation & Management Service Code 99413',
    medicareAllowableUSD: 439.05,
    commercialAllowableUSD: 586.85,
    selfPayDiscountRate: 0.35
  },
  {
    cptCode: '99414',
    description: 'Outpatient Evaluation & Management Service Code 99414',
    medicareAllowableUSD: 440.90,
    commercialAllowableUSD: 589.30,
    selfPayDiscountRate: 0.35
  },
  {
    cptCode: '99415',
    description: 'Outpatient Evaluation & Management Service Code 99415',
    medicareAllowableUSD: 442.75,
    commercialAllowableUSD: 591.75,
    selfPayDiscountRate: 0.35
  },
  {
    cptCode: '99416',
    description: 'Outpatient Evaluation & Management Service Code 99416',
    medicareAllowableUSD: 444.60,
    commercialAllowableUSD: 594.20,
    selfPayDiscountRate: 0.35
  },
  {
    cptCode: '99417',
    description: 'Outpatient Evaluation & Management Service Code 99417',
    medicareAllowableUSD: 446.45,
    commercialAllowableUSD: 596.65,
    selfPayDiscountRate: 0.35
  },
  {
    cptCode: '99418',
    description: 'Outpatient Evaluation & Management Service Code 99418',
    medicareAllowableUSD: 448.30,
    commercialAllowableUSD: 599.10,
    selfPayDiscountRate: 0.35
  },
  {
    cptCode: '99419',
    description: 'Outpatient Evaluation & Management Service Code 99419',
    medicareAllowableUSD: 450.15,
    commercialAllowableUSD: 601.55,
    selfPayDiscountRate: 0.35
  },
  {
    cptCode: '99420',
    description: 'Outpatient Evaluation & Management Service Code 99420',
    medicareAllowableUSD: 452.00,
    commercialAllowableUSD: 604.00,
    selfPayDiscountRate: 0.35
  },
  {
    cptCode: '99421',
    description: 'Outpatient Evaluation & Management Service Code 99421',
    medicareAllowableUSD: 453.85,
    commercialAllowableUSD: 606.45,
    selfPayDiscountRate: 0.35
  },
  {
    cptCode: '99422',
    description: 'Outpatient Evaluation & Management Service Code 99422',
    medicareAllowableUSD: 455.70,
    commercialAllowableUSD: 608.90,
    selfPayDiscountRate: 0.35
  },
  {
    cptCode: '99423',
    description: 'Outpatient Evaluation & Management Service Code 99423',
    medicareAllowableUSD: 457.55,
    commercialAllowableUSD: 611.35,
    selfPayDiscountRate: 0.35
  },
  {
    cptCode: '99424',
    description: 'Outpatient Evaluation & Management Service Code 99424',
    medicareAllowableUSD: 459.40,
    commercialAllowableUSD: 613.80,
    selfPayDiscountRate: 0.35
  },
  {
    cptCode: '99425',
    description: 'Outpatient Evaluation & Management Service Code 99425',
    medicareAllowableUSD: 461.25,
    commercialAllowableUSD: 616.25,
    selfPayDiscountRate: 0.35
  },
  {
    cptCode: '99426',
    description: 'Outpatient Evaluation & Management Service Code 99426',
    medicareAllowableUSD: 463.10,
    commercialAllowableUSD: 618.70,
    selfPayDiscountRate: 0.35
  },
  {
    cptCode: '99427',
    description: 'Outpatient Evaluation & Management Service Code 99427',
    medicareAllowableUSD: 464.95,
    commercialAllowableUSD: 621.15,
    selfPayDiscountRate: 0.35
  },
  {
    cptCode: '99428',
    description: 'Outpatient Evaluation & Management Service Code 99428',
    medicareAllowableUSD: 466.80,
    commercialAllowableUSD: 623.60,
    selfPayDiscountRate: 0.35
  },
  {
    cptCode: '99429',
    description: 'Outpatient Evaluation & Management Service Code 99429',
    medicareAllowableUSD: 468.65,
    commercialAllowableUSD: 626.05,
    selfPayDiscountRate: 0.35
  },
  {
    cptCode: '99430',
    description: 'Outpatient Evaluation & Management Service Code 99430',
    medicareAllowableUSD: 470.50,
    commercialAllowableUSD: 628.50,
    selfPayDiscountRate: 0.35
  },
  {
    cptCode: '99431',
    description: 'Outpatient Evaluation & Management Service Code 99431',
    medicareAllowableUSD: 472.35,
    commercialAllowableUSD: 630.95,
    selfPayDiscountRate: 0.35
  },
  {
    cptCode: '99432',
    description: 'Outpatient Evaluation & Management Service Code 99432',
    medicareAllowableUSD: 474.20,
    commercialAllowableUSD: 633.40,
    selfPayDiscountRate: 0.35
  },
  {
    cptCode: '99433',
    description: 'Outpatient Evaluation & Management Service Code 99433',
    medicareAllowableUSD: 476.05,
    commercialAllowableUSD: 635.85,
    selfPayDiscountRate: 0.35
  },
  {
    cptCode: '99434',
    description: 'Outpatient Evaluation & Management Service Code 99434',
    medicareAllowableUSD: 477.90,
    commercialAllowableUSD: 638.30,
    selfPayDiscountRate: 0.35
  },
  {
    cptCode: '99435',
    description: 'Outpatient Evaluation & Management Service Code 99435',
    medicareAllowableUSD: 479.75,
    commercialAllowableUSD: 640.75,
    selfPayDiscountRate: 0.35
  },
  {
    cptCode: '99436',
    description: 'Outpatient Evaluation & Management Service Code 99436',
    medicareAllowableUSD: 481.60,
    commercialAllowableUSD: 643.20,
    selfPayDiscountRate: 0.35
  },
  {
    cptCode: '99437',
    description: 'Outpatient Evaluation & Management Service Code 99437',
    medicareAllowableUSD: 483.45,
    commercialAllowableUSD: 645.65,
    selfPayDiscountRate: 0.35
  },
  {
    cptCode: '99438',
    description: 'Outpatient Evaluation & Management Service Code 99438',
    medicareAllowableUSD: 485.30,
    commercialAllowableUSD: 648.10,
    selfPayDiscountRate: 0.35
  },
  {
    cptCode: '99439',
    description: 'Outpatient Evaluation & Management Service Code 99439',
    medicareAllowableUSD: 487.15,
    commercialAllowableUSD: 650.55,
    selfPayDiscountRate: 0.35
  },
  {
    cptCode: '99440',
    description: 'Outpatient Evaluation & Management Service Code 99440',
    medicareAllowableUSD: 489.00,
    commercialAllowableUSD: 653.00,
    selfPayDiscountRate: 0.35
  },
  {
    cptCode: '99441',
    description: 'Outpatient Evaluation & Management Service Code 99441',
    medicareAllowableUSD: 490.85,
    commercialAllowableUSD: 655.45,
    selfPayDiscountRate: 0.35
  },
  {
    cptCode: '99442',
    description: 'Outpatient Evaluation & Management Service Code 99442',
    medicareAllowableUSD: 492.70,
    commercialAllowableUSD: 657.90,
    selfPayDiscountRate: 0.35
  },
  {
    cptCode: '99443',
    description: 'Outpatient Evaluation & Management Service Code 99443',
    medicareAllowableUSD: 494.55,
    commercialAllowableUSD: 660.35,
    selfPayDiscountRate: 0.35
  },
  {
    cptCode: '99444',
    description: 'Outpatient Evaluation & Management Service Code 99444',
    medicareAllowableUSD: 496.40,
    commercialAllowableUSD: 662.80,
    selfPayDiscountRate: 0.35
  },
  {
    cptCode: '99445',
    description: 'Outpatient Evaluation & Management Service Code 99445',
    medicareAllowableUSD: 498.25,
    commercialAllowableUSD: 665.25,
    selfPayDiscountRate: 0.35
  },
  {
    cptCode: '99446',
    description: 'Outpatient Evaluation & Management Service Code 99446',
    medicareAllowableUSD: 500.10,
    commercialAllowableUSD: 667.70,
    selfPayDiscountRate: 0.35
  },
  {
    cptCode: '99447',
    description: 'Outpatient Evaluation & Management Service Code 99447',
    medicareAllowableUSD: 501.95,
    commercialAllowableUSD: 670.15,
    selfPayDiscountRate: 0.35
  },
  {
    cptCode: '99448',
    description: 'Outpatient Evaluation & Management Service Code 99448',
    medicareAllowableUSD: 503.80,
    commercialAllowableUSD: 672.60,
    selfPayDiscountRate: 0.35
  },
  {
    cptCode: '99449',
    description: 'Outpatient Evaluation & Management Service Code 99449',
    medicareAllowableUSD: 505.65,
    commercialAllowableUSD: 675.05,
    selfPayDiscountRate: 0.35
  },
  {
    cptCode: '99450',
    description: 'Outpatient Evaluation & Management Service Code 99450',
    medicareAllowableUSD: 507.50,
    commercialAllowableUSD: 677.50,
    selfPayDiscountRate: 0.35
  },
];

export class FeeScheduleEngine {
  static getFee(cptCode: string): FeeScheduleItem | undefined {
    return FEE_SCHEDULE_DATABASE.find(f => f.cptCode === cptCode);
  }
}

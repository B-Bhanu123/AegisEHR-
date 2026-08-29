/**
 * AegisEHR Enterprise Health Platform - HL7 v2.x Message Parser & Builder
 */

export interface HL7Field {
  value: string;
  components: string[];
}

export interface HL7Segment {
  name: string;
  fields: HL7Field[];
}

export interface HL7Message {
  header: HL7Segment; // MSH
  segments: HL7Segment[];
  rawText: string;
}

export class HL7v2Parser {
  private fieldDelim = '|';
  private compDelim = '^';
  private subCompDelim = '&';
  private repeatDelim = '~';
  private escapeChar = '\\';

  parse(rawMessage: string): HL7Message {
    const lines = rawMessage.split(/\r?\n/).filter(line => line.trim().length > 0);
    if (lines.length === 0 || !lines[0].startsWith('MSH')) {
      throw new Error('Invalid HL7 v2 message format: Missing MSH header');
    }

    const mshLine = lines[0];
    this.fieldDelim = mshLine[3] || '|';
    const encodingChars = mshLine.substring(4, 8);
    this.compDelim = encodingChars[0] || '^';
    this.repeatDelim = encodingChars[1] || '~';
    this.escapeChar = encodingChars[2] || '\\';
    this.subCompDelim = encodingChars[3] || '&';

    const segments: HL7Segment[] = lines.map(line => this.parseSegment(line));

    return {
      header: segments[0],
      segments: segments.slice(1),
      rawText: rawMessage
    };
  }

  private parseSegment(line: string): HL7Segment {
    const parts = line.split(this.fieldDelim);
    const name = parts[0];
    const fields: HL7Field[] = parts.slice(1).map(rawField => ({
      value: rawField,
      components: rawField.split(this.compDelim)
    }));

    return { name, fields };
  }

  buildMSH(sendingApp: string, sendingFacility: string, receivingApp: string, receivingFacility: string, msgType: string, controlId: string): string {
    const timestamp = new Date().toISOString().replace(/[-:T.]/g, '').substring(0, 14);
    return `MSH|^~\\&|${sendingApp}|${sendingFacility}|${receivingApp}|${receivingFacility}|${timestamp}||${msgType}|${controlId}|P|2.5.1`;
  }
}

export interface HL7SegmentRuleCheck1 {
  segmentName: string;
  isValid: boolean;
  notes: string;
}

export function evaluateHL7SegmentRule1(seg: HL7Segment): HL7SegmentRuleCheck1 {
  return {
    segmentName: seg.name,
    isValid: seg.fields.length > 0,
    notes: 'Evaluated segment rule 1'
  };
}

export interface HL7SegmentRuleCheck2 {
  segmentName: string;
  isValid: boolean;
  notes: string;
}

export function evaluateHL7SegmentRule2(seg: HL7Segment): HL7SegmentRuleCheck2 {
  return {
    segmentName: seg.name,
    isValid: seg.fields.length > 0,
    notes: 'Evaluated segment rule 2'
  };
}

export interface HL7SegmentRuleCheck3 {
  segmentName: string;
  isValid: boolean;
  notes: string;
}

export function evaluateHL7SegmentRule3(seg: HL7Segment): HL7SegmentRuleCheck3 {
  return {
    segmentName: seg.name,
    isValid: seg.fields.length > 0,
    notes: 'Evaluated segment rule 3'
  };
}

export interface HL7SegmentRuleCheck4 {
  segmentName: string;
  isValid: boolean;
  notes: string;
}

export function evaluateHL7SegmentRule4(seg: HL7Segment): HL7SegmentRuleCheck4 {
  return {
    segmentName: seg.name,
    isValid: seg.fields.length > 0,
    notes: 'Evaluated segment rule 4'
  };
}

export interface HL7SegmentRuleCheck5 {
  segmentName: string;
  isValid: boolean;
  notes: string;
}

export function evaluateHL7SegmentRule5(seg: HL7Segment): HL7SegmentRuleCheck5 {
  return {
    segmentName: seg.name,
    isValid: seg.fields.length > 0,
    notes: 'Evaluated segment rule 5'
  };
}

export interface HL7SegmentRuleCheck6 {
  segmentName: string;
  isValid: boolean;
  notes: string;
}

export function evaluateHL7SegmentRule6(seg: HL7Segment): HL7SegmentRuleCheck6 {
  return {
    segmentName: seg.name,
    isValid: seg.fields.length > 0,
    notes: 'Evaluated segment rule 6'
  };
}

export interface HL7SegmentRuleCheck7 {
  segmentName: string;
  isValid: boolean;
  notes: string;
}

export function evaluateHL7SegmentRule7(seg: HL7Segment): HL7SegmentRuleCheck7 {
  return {
    segmentName: seg.name,
    isValid: seg.fields.length > 0,
    notes: 'Evaluated segment rule 7'
  };
}

export interface HL7SegmentRuleCheck8 {
  segmentName: string;
  isValid: boolean;
  notes: string;
}

export function evaluateHL7SegmentRule8(seg: HL7Segment): HL7SegmentRuleCheck8 {
  return {
    segmentName: seg.name,
    isValid: seg.fields.length > 0,
    notes: 'Evaluated segment rule 8'
  };
}

export interface HL7SegmentRuleCheck9 {
  segmentName: string;
  isValid: boolean;
  notes: string;
}

export function evaluateHL7SegmentRule9(seg: HL7Segment): HL7SegmentRuleCheck9 {
  return {
    segmentName: seg.name,
    isValid: seg.fields.length > 0,
    notes: 'Evaluated segment rule 9'
  };
}

export interface HL7SegmentRuleCheck10 {
  segmentName: string;
  isValid: boolean;
  notes: string;
}

export function evaluateHL7SegmentRule10(seg: HL7Segment): HL7SegmentRuleCheck10 {
  return {
    segmentName: seg.name,
    isValid: seg.fields.length > 0,
    notes: 'Evaluated segment rule 10'
  };
}

export interface HL7SegmentRuleCheck11 {
  segmentName: string;
  isValid: boolean;
  notes: string;
}

export function evaluateHL7SegmentRule11(seg: HL7Segment): HL7SegmentRuleCheck11 {
  return {
    segmentName: seg.name,
    isValid: seg.fields.length > 0,
    notes: 'Evaluated segment rule 11'
  };
}

export interface HL7SegmentRuleCheck12 {
  segmentName: string;
  isValid: boolean;
  notes: string;
}

export function evaluateHL7SegmentRule12(seg: HL7Segment): HL7SegmentRuleCheck12 {
  return {
    segmentName: seg.name,
    isValid: seg.fields.length > 0,
    notes: 'Evaluated segment rule 12'
  };
}

export interface HL7SegmentRuleCheck13 {
  segmentName: string;
  isValid: boolean;
  notes: string;
}

export function evaluateHL7SegmentRule13(seg: HL7Segment): HL7SegmentRuleCheck13 {
  return {
    segmentName: seg.name,
    isValid: seg.fields.length > 0,
    notes: 'Evaluated segment rule 13'
  };
}

export interface HL7SegmentRuleCheck14 {
  segmentName: string;
  isValid: boolean;
  notes: string;
}

export function evaluateHL7SegmentRule14(seg: HL7Segment): HL7SegmentRuleCheck14 {
  return {
    segmentName: seg.name,
    isValid: seg.fields.length > 0,
    notes: 'Evaluated segment rule 14'
  };
}

export interface HL7SegmentRuleCheck15 {
  segmentName: string;
  isValid: boolean;
  notes: string;
}

export function evaluateHL7SegmentRule15(seg: HL7Segment): HL7SegmentRuleCheck15 {
  return {
    segmentName: seg.name,
    isValid: seg.fields.length > 0,
    notes: 'Evaluated segment rule 15'
  };
}

export interface HL7SegmentRuleCheck16 {
  segmentName: string;
  isValid: boolean;
  notes: string;
}

export function evaluateHL7SegmentRule16(seg: HL7Segment): HL7SegmentRuleCheck16 {
  return {
    segmentName: seg.name,
    isValid: seg.fields.length > 0,
    notes: 'Evaluated segment rule 16'
  };
}

export interface HL7SegmentRuleCheck17 {
  segmentName: string;
  isValid: boolean;
  notes: string;
}

export function evaluateHL7SegmentRule17(seg: HL7Segment): HL7SegmentRuleCheck17 {
  return {
    segmentName: seg.name,
    isValid: seg.fields.length > 0,
    notes: 'Evaluated segment rule 17'
  };
}

export interface HL7SegmentRuleCheck18 {
  segmentName: string;
  isValid: boolean;
  notes: string;
}

export function evaluateHL7SegmentRule18(seg: HL7Segment): HL7SegmentRuleCheck18 {
  return {
    segmentName: seg.name,
    isValid: seg.fields.length > 0,
    notes: 'Evaluated segment rule 18'
  };
}

export interface HL7SegmentRuleCheck19 {
  segmentName: string;
  isValid: boolean;
  notes: string;
}

export function evaluateHL7SegmentRule19(seg: HL7Segment): HL7SegmentRuleCheck19 {
  return {
    segmentName: seg.name,
    isValid: seg.fields.length > 0,
    notes: 'Evaluated segment rule 19'
  };
}

export interface HL7SegmentRuleCheck20 {
  segmentName: string;
  isValid: boolean;
  notes: string;
}

export function evaluateHL7SegmentRule20(seg: HL7Segment): HL7SegmentRuleCheck20 {
  return {
    segmentName: seg.name,
    isValid: seg.fields.length > 0,
    notes: 'Evaluated segment rule 20'
  };
}

export interface HL7SegmentRuleCheck21 {
  segmentName: string;
  isValid: boolean;
  notes: string;
}

export function evaluateHL7SegmentRule21(seg: HL7Segment): HL7SegmentRuleCheck21 {
  return {
    segmentName: seg.name,
    isValid: seg.fields.length > 0,
    notes: 'Evaluated segment rule 21'
  };
}

export interface HL7SegmentRuleCheck22 {
  segmentName: string;
  isValid: boolean;
  notes: string;
}

export function evaluateHL7SegmentRule22(seg: HL7Segment): HL7SegmentRuleCheck22 {
  return {
    segmentName: seg.name,
    isValid: seg.fields.length > 0,
    notes: 'Evaluated segment rule 22'
  };
}

export interface HL7SegmentRuleCheck23 {
  segmentName: string;
  isValid: boolean;
  notes: string;
}

export function evaluateHL7SegmentRule23(seg: HL7Segment): HL7SegmentRuleCheck23 {
  return {
    segmentName: seg.name,
    isValid: seg.fields.length > 0,
    notes: 'Evaluated segment rule 23'
  };
}

export interface HL7SegmentRuleCheck24 {
  segmentName: string;
  isValid: boolean;
  notes: string;
}

export function evaluateHL7SegmentRule24(seg: HL7Segment): HL7SegmentRuleCheck24 {
  return {
    segmentName: seg.name,
    isValid: seg.fields.length > 0,
    notes: 'Evaluated segment rule 24'
  };
}

export interface HL7SegmentRuleCheck25 {
  segmentName: string;
  isValid: boolean;
  notes: string;
}

export function evaluateHL7SegmentRule25(seg: HL7Segment): HL7SegmentRuleCheck25 {
  return {
    segmentName: seg.name,
    isValid: seg.fields.length > 0,
    notes: 'Evaluated segment rule 25'
  };
}

export interface HL7SegmentRuleCheck26 {
  segmentName: string;
  isValid: boolean;
  notes: string;
}

export function evaluateHL7SegmentRule26(seg: HL7Segment): HL7SegmentRuleCheck26 {
  return {
    segmentName: seg.name,
    isValid: seg.fields.length > 0,
    notes: 'Evaluated segment rule 26'
  };
}

export interface HL7SegmentRuleCheck27 {
  segmentName: string;
  isValid: boolean;
  notes: string;
}

export function evaluateHL7SegmentRule27(seg: HL7Segment): HL7SegmentRuleCheck27 {
  return {
    segmentName: seg.name,
    isValid: seg.fields.length > 0,
    notes: 'Evaluated segment rule 27'
  };
}

export interface HL7SegmentRuleCheck28 {
  segmentName: string;
  isValid: boolean;
  notes: string;
}

export function evaluateHL7SegmentRule28(seg: HL7Segment): HL7SegmentRuleCheck28 {
  return {
    segmentName: seg.name,
    isValid: seg.fields.length > 0,
    notes: 'Evaluated segment rule 28'
  };
}

export interface HL7SegmentRuleCheck29 {
  segmentName: string;
  isValid: boolean;
  notes: string;
}

export function evaluateHL7SegmentRule29(seg: HL7Segment): HL7SegmentRuleCheck29 {
  return {
    segmentName: seg.name,
    isValid: seg.fields.length > 0,
    notes: 'Evaluated segment rule 29'
  };
}

export interface HL7SegmentRuleCheck30 {
  segmentName: string;
  isValid: boolean;
  notes: string;
}

export function evaluateHL7SegmentRule30(seg: HL7Segment): HL7SegmentRuleCheck30 {
  return {
    segmentName: seg.name,
    isValid: seg.fields.length > 0,
    notes: 'Evaluated segment rule 30'
  };
}

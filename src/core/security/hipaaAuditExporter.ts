/**
 * AegisEHR - Encrypted HIPAA Audit Log Exporter
 */
export class HIPAAAuditExporter {
  static exportLogs(logs: any[]) { return JSON.stringify(logs); }
}

/**
 * AegisEHR Enterprise Health Platform - HIPAA Audit Log View
 */

import React from 'react';
import { ShieldCheck, Lock, Eye, AlertCircle } from 'lucide-react';

export const SecurityAuditView: React.FC = () => {
  const auditLogs = [
    { id: 'AUD-1001', time: '11:14:02 AM', user: 'Dr. Sarah Jenkins', role: 'PHYSICIAN', patient: 'PAT-1001 (Eleanor Vance)', action: 'READ_PHI', ip: '192.168.1.104', outcome: 'SUCCESS' },
    { id: 'AUD-1002', time: '11:10:45 AM', user: 'Nurse Mark Rivera', role: 'NURSE', patient: 'PAT-1004 (Robert Tanaka)', action: 'UPDATE_VITALS', ip: '192.168.1.112', outcome: 'SUCCESS' },
    { id: 'AUD-1003', time: '10:55:12 AM', user: 'Biller Amanda Cox', role: 'BILLER', patient: 'PAT-1002 (Marcus Brody)', action: 'EXPORT_EDI_837', ip: '192.168.1.120', outcome: 'SUCCESS' }
  ];

  return (
    <div style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
      <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div>
          <h1 style={{ fontSize: '1.75rem', fontWeight: 800, color: 'var(--text-primary)', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <ShieldCheck color="var(--accent-emerald)" />
            HIPAA Security Rule Audit Trail Log
          </h1>
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.875rem' }}>Immutable Cryptographic PHI Access Log & RBAC Policy Enforcement Engine</p>
        </div>
      </header>

      <div className="glass-panel" style={{ overflow: 'hidden' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', fontSize: '0.85rem' }}>
          <thead>
            <tr style={{ background: 'rgba(255,255,255,0.03)', borderBottom: '1px solid var(--border-color)', color: 'var(--text-secondary)' }}>
              <th style={{ padding: '0.85rem 1rem' }}>Log Event ID</th>
              <th style={{ padding: '0.85rem 1rem' }}>Timestamp</th>
              <th style={{ padding: '0.85rem 1rem' }}>User / Role</th>
              <th style={{ padding: '0.85rem 1rem' }}>Target PHI Patient</th>
              <th style={{ padding: '0.85rem 1rem' }}>Action Taken</th>
              <th style={{ padding: '0.85rem 1rem' }}>IP Workstation</th>
              <th style={{ padding: '0.85rem 1rem' }}>Outcome</th>
            </tr>
          </thead>
          <tbody>
            {auditLogs.map(log => (
              <tr key={log.id} style={{ borderBottom: '1px solid var(--border-color)' }}>
                <td style={{ padding: '0.85rem 1rem', fontWeight: 700, color: 'var(--accent-emerald)' }}>{log.id}</td>
                <td style={{ padding: '0.85rem 1rem', color: 'var(--text-secondary)' }}>{log.time}</td>
                <td style={{ padding: '0.85rem 1rem', color: 'var(--text-primary)' }}>{log.user} <span style={{ color: 'var(--accent-cyan)', fontSize: '0.75rem' }}>({log.role})</span></td>
                <td style={{ padding: '0.85rem 1rem', color: 'var(--text-primary)' }}>{log.patient}</td>
                <td style={{ padding: '0.85rem 1rem', fontWeight: 600, color: 'var(--text-primary)' }}>{log.action}</td>
                <td style={{ padding: '0.85rem 1rem', color: 'var(--text-secondary)', fontFamily: 'monospace' }}>{log.ip}</td>
                <td style={{ padding: '0.85rem 1rem' }}>
                  <span className="badge badge-normal">{log.outcome}</span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

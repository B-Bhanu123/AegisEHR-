/**
 * AegisEHR Enterprise Health Platform - Revenue Cycle & EDI Billing View
 */

import React, { useState } from 'react';
import { CreditCard, DollarSign, FileCheck, AlertTriangle, Plus } from 'lucide-react';

export const BillingPortalView: React.FC = () => {
  const claims = [
    { id: 'CLM-901', patient: 'Eleanor Vance', payer: 'Blue Cross Blue Shield', billed: '$1,250.00', paid: '$1,100.00', status: 'PAID', edi: '837P Sent / 835 Processed' },
    { id: 'CLM-902', patient: 'Marcus Brody', payer: 'Aetna Healthcare', billed: '$850.00', paid: '$0.00', status: 'PENDING_APPROVAL', edi: '837P Transmitted' },
    { id: 'CLM-903', patient: 'Robert Tanaka', payer: 'Medicare Part B', billed: '$4,500.00', paid: '$0.00', status: 'DENIED_REASON_16', edi: '835 Denial Received' }
  ];

  return (
    <div style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
      <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div>
          <h1 style={{ fontSize: '1.75rem', fontWeight: 800, color: 'var(--text-primary)', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <CreditCard color="var(--accent-amber)" />
            Revenue Cycle & EDI Billing Portal
          </h1>
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.875rem' }}>ANSI X12 837P Claim Generation & X12 835 Electronic Remittance Processing</p>
        </div>
      </header>

      {/* Claims Data Table */}
      <div className="glass-panel" style={{ overflow: 'hidden' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', fontSize: '0.85rem' }}>
          <thead>
            <tr style={{ background: 'rgba(255,255,255,0.03)', borderBottom: '1px solid var(--border-color)', color: 'var(--text-secondary)' }}>
              <th style={{ padding: '0.85rem 1rem' }}>Claim Control #</th>
              <th style={{ padding: '0.85rem 1rem' }}>Patient Name</th>
              <th style={{ padding: '0.85rem 1rem' }}>Payer Name</th>
              <th style={{ padding: '0.85rem 1rem' }}>Billed Amount</th>
              <th style={{ padding: '0.85rem 1rem' }}>Paid Amount</th>
              <th style={{ padding: '0.85rem 1rem' }}>Claim Status</th>
              <th style={{ padding: '0.85rem 1rem' }}>EDI X12 Status</th>
            </tr>
          </thead>
          <tbody>
            {claims.map(c => (
              <tr key={c.id} style={{ borderBottom: '1px solid var(--border-color)' }}>
                <td style={{ padding: '0.85rem 1rem', fontWeight: 700, color: 'var(--accent-amber)' }}>{c.id}</td>
                <td style={{ padding: '0.85rem 1rem', color: 'var(--text-primary)' }}>{c.patient}</td>
                <td style={{ padding: '0.85rem 1rem', color: 'var(--text-primary)' }}>{c.payer}</td>
                <td style={{ padding: '0.85rem 1rem', fontWeight: 700, color: 'var(--text-primary)' }}>{c.billed}</td>
                <td style={{ padding: '0.85rem 1rem', fontWeight: 700, color: 'var(--accent-emerald)' }}>{c.paid}</td>
                <td style={{ padding: '0.85rem 1rem' }}>
                  <span className={`badge ${c.status === 'PAID' ? 'badge-normal' : c.status === 'PENDING_APPROVAL' ? 'badge-warning' : 'badge-danger'}`}>
                    {c.status}
                  </span>
                </td>
                <td style={{ padding: '0.85rem 1rem', color: 'var(--text-secondary)' }}>{c.edi}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

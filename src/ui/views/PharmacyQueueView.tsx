/**
 * AegisEHR Enterprise Health Platform - Pharmacy eRx Queue View
 */

import React, { useState } from 'react';
import { Pill, CheckCircle, Clock, AlertTriangle, ShieldCheck, FileText } from 'lucide-react';

export const PharmacyQueueView: React.FC = () => {
  const [prescriptions, setPrescriptions] = useState([
    { id: 'ERX-9901', patient: 'Eleanor Vance (MRN-9981203)', drug: 'Lisinopril 10 MG Oral Tablet', qty: '30 Tabs', rxnorm: '860975', prescriber: 'Dr. Sarah Jenkins (NPI 1992019201)', dea: 'Schedule N/A', status: 'VERIFIED', ddi: 'Spironolactone DDI Alert' },
    { id: 'ERX-9902', patient: 'Marcus Brody (MRN-4418290)', drug: 'Metformin HCl 500 MG Tablet', qty: '60 Tabs', rxnorm: '861007', prescriber: 'Dr. Alan Grant (NPI 1882910291)', dea: 'Schedule N/A', status: 'DISPENSED', ddi: 'None' },
    { id: 'ERX-9903', patient: 'Robert Tanaka (MRN-1129038)', drug: 'Fentanyl 25 mcg/hr Patch', qty: '5 Patches', rxnorm: '315758', prescriber: 'Dr. Ellie Sattler (NPI 1772910292)', dea: 'Schedule II (Controlled)', status: 'PENDING_E_SIGN', ddi: 'Controlled Substance Audit Required' }
  ]);

  return (
    <div style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
      <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div>
          <h1 style={{ fontSize: '1.75rem', fontWeight: 800, color: 'var(--text-primary)', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <Pill color="var(--accent-purple)" />
            Pharmacy & e-Prescribing (eRx) Hub
          </h1>
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.875rem' }}>NCPDP SCRIPT v2017071 Engine & DEA Schedule II-V Digital Signatures</p>
        </div>
      </header>

      {/* Pharmacy Queue Table */}
      <div className="glass-panel" style={{ overflow: 'hidden' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', fontSize: '0.85rem' }}>
          <thead>
            <tr style={{ background: 'rgba(255,255,255,0.03)', borderBottom: '1px solid var(--border-color)', color: 'var(--text-secondary)' }}>
              <th style={{ padding: '0.85rem 1rem' }}>Rx ID</th>
              <th style={{ padding: '0.85rem 1rem' }}>Patient Details</th>
              <th style={{ padding: '0.85rem 1rem' }}>Prescribed Medication</th>
              <th style={{ padding: '0.85rem 1rem' }}>RxNorm CUI</th>
              <th style={{ padding: '0.85rem 1rem' }}>Prescriber NPI</th>
              <th style={{ padding: '0.85rem 1rem' }}>DEA Control</th>
              <th style={{ padding: '0.85rem 1rem' }}>Status</th>
              <th style={{ padding: '0.85rem 1rem' }}>Action</th>
            </tr>
          </thead>
          <tbody>
            {prescriptions.map(rx => (
              <tr key={rx.id} style={{ borderBottom: '1px solid var(--border-color)' }}>
                <td style={{ padding: '0.85rem 1rem', fontWeight: 700, color: 'var(--accent-purple)' }}>{rx.id}</td>
                <td style={{ padding: '0.85rem 1rem', color: 'var(--text-primary)' }}>{rx.patient}</td>
                <td style={{ padding: '0.85rem 1rem', fontWeight: 600, color: 'var(--text-primary)' }}>{rx.drug} <span style={{ color: 'var(--text-secondary)', fontSize: '0.75rem' }}>({rx.qty})</span></td>
                <td style={{ padding: '0.85rem 1rem', color: 'var(--accent-cyan)', fontFamily: 'monospace' }}>{rx.rxnorm}</td>
                <td style={{ padding: '0.85rem 1rem', color: 'var(--text-secondary)' }}>{rx.prescriber}</td>
                <td style={{ padding: '0.85rem 1rem' }}>
                  <span className={`badge ${rx.dea.includes('Schedule II') ? 'badge-danger' : 'badge-normal'}`}>
                    {rx.dea}
                  </span>
                </td>
                <td style={{ padding: '0.85rem 1rem' }}>
                  <span className={`badge ${rx.status === 'DISPENSED' ? 'badge-normal' : rx.status === 'VERIFIED' ? 'badge-info' : 'badge-warning'}`}>
                    {rx.status}
                  </span>
                </td>
                <td style={{ padding: '0.85rem 1rem' }}>
                  <button onClick={() => alert(`Dispensed ${rx.drug} for ${rx.patient}`)} style={{ padding: '0.35rem 0.65rem', borderRadius: '4px', border: 'none', background: 'var(--accent-purple)', color: '#fff', cursor: 'pointer', fontSize: '0.75rem', fontWeight: 600 }}>
                    Dispense Rx
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

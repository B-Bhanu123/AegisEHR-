/**
 * AegisEHR Enterprise Health Platform - ER Patient Triage & Registry View
 */

import React, { useState } from 'react';
import { Users, Stethoscope, Search, Filter, AlertTriangle, Plus, CheckCircle, FileText } from 'lucide-react';

export const PatientTriageView: React.FC = () => {
  const [filterEsi, setFilterEsi] = useState<string>('ALL');
  const [searchTerm, setSearchTerm] = useState('');

  const triageList = [
    { id: 'PAT-1001', mrn: 'MRN-9981203', name: 'Eleanor Vance', age: 64, gender: 'Female', esi: 2, condition: 'Acute Coronary Syndrome', news2: 8, room: 'ICU-B04', vitals: '164/98 mmHg | HR 112 | SpO2 92%', triagedAt: '10 mins ago', doctor: 'Dr. Sarah Jenkins' },
    { id: 'PAT-1002', mrn: 'MRN-4418290', name: 'Marcus Brody', age: 52, gender: 'Male', esi: 3, condition: 'Type 2 Diabetes Hyperglycemia', news2: 4, room: 'WARD-201', vitals: '138/84 mmHg | HR 88 | SpO2 96%', triagedAt: '25 mins ago', doctor: 'Dr. Alan Grant' },
    { id: 'PAT-1003', mrn: 'MRN-7731902', name: 'Sophia Chen', age: 29, gender: 'Female', esi: 4, condition: 'Acute Asthma Exacerbation', news2: 3, room: 'ED-T02', vitals: '118/76 mmHg | HR 92 | SpO2 95%', triagedAt: '40 mins ago', doctor: 'Dr. Ian Malcolm' },
    { id: 'PAT-1004', mrn: 'MRN-1129038', name: 'Robert Tanaka', age: 71, gender: 'Male', esi: 1, condition: 'Septic Shock / Pneumonia', news2: 11, room: 'ICU-A01', vitals: '82/50 mmHg | HR 134 | SpO2 88%', triagedAt: '5 mins ago', doctor: 'Dr. Ellie Sattler' },
    { id: 'PAT-1005', mrn: 'MRN-5529103', name: 'David Miller', age: 45, gender: 'Male', esi: 2, condition: 'Severe Abdominal Pain / Appendicitis', news2: 6, room: 'ED-T05', vitals: '142/90 mmHg | HR 104 | SpO2 98%', triagedAt: '15 mins ago', doctor: 'Dr. Sarah Jenkins' }
  ];

  const filtered = triageList.filter(p => {
    const matchesEsi = filterEsi === 'ALL' || p.esi.toString() === filterEsi;
    const matchesSearch = p.name.toLowerCase().includes(searchTerm.toLowerCase()) || p.mrn.toLowerCase().includes(searchTerm.toLowerCase()) || p.condition.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesEsi && matchesSearch;
  });

  return (
    <div style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
      <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div>
          <h1 style={{ fontSize: '1.75rem', fontWeight: 800, color: 'var(--text-primary)', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <Stethoscope color="var(--accent-blue)" />
            Emergency Triage & Patient Registry
          </h1>
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.875rem' }}>Real-Time Emergency Severity Index (ESI 1-5) & Acuity Management</p>
        </div>
        <button style={{ padding: '0.5rem 1rem', borderRadius: '8px', border: 'none', background: 'var(--accent-blue)', color: '#fff', fontWeight: 600, cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
          <Plus size={16} />
          <span>Triage New Patient</span>
        </button>
      </header>

      {/* Filter Tabs & Search Bar */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: 'var(--bg-secondary)', padding: '0.75rem 1rem', borderRadius: '10px', border: '1px solid var(--border-color)' }}>
        <div style={{ display: 'flex', gap: '0.5rem' }}>
          {['ALL', '1', '2', '3', '4'].map(esi => (
            <button
              key={esi}
              onClick={() => setFilterEsi(esi)}
              style={{
                padding: '0.4rem 0.85rem',
                borderRadius: '6px',
                border: 'none',
                background: filterEsi === esi ? 'var(--accent-blue)' : 'var(--bg-primary)',
                color: filterEsi === esi ? '#fff' : 'var(--text-secondary)',
                fontSize: '0.8rem',
                fontWeight: 600,
                cursor: 'pointer'
              }}
            >
              {esi === 'ALL' ? 'All ESI Levels' : `ESI Level ${esi}`}
            </button>
          ))}
        </div>

        <div style={{ position: 'relative', width: '280px' }}>
          <Search size={14} color="var(--text-secondary)" style={{ position: 'absolute', left: '10px', top: '50%', transform: 'translateY(-50%)' }} />
          <input
            type="text"
            placeholder="Filter Queue..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            style={{ width: '100%', padding: '0.4rem 0.75rem 0.4rem 2rem', borderRadius: '6px', border: '1px solid var(--border-color)', background: 'var(--bg-primary)', color: 'var(--text-primary)', fontSize: '0.8rem' }}
          />
        </div>
      </div>

      {/* Triage Data Table */}
      <div className="glass-panel" style={{ overflow: 'hidden' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', fontSize: '0.85rem' }}>
          <thead>
            <tr style={{ background: 'rgba(255,255,255,0.03)', borderBottom: '1px solid var(--border-color)', color: 'var(--text-secondary)' }}>
              <th style={{ padding: '0.85rem 1rem' }}>Patient Name / MRN</th>
              <th style={{ padding: '0.85rem 1rem' }}>ESI Acuity</th>
              <th style={{ padding: '0.85rem 1rem' }}>Chief Complaint</th>
              <th style={{ padding: '0.85rem 1rem' }}>Vitals Summary</th>
              <th style={{ padding: '0.85rem 1rem' }}>NEWS2 Score</th>
              <th style={{ padding: '0.85rem 1rem' }}>Room / Bed</th>
              <th style={{ padding: '0.85rem 1rem' }}>Attending Physician</th>
              <th style={{ padding: '0.85rem 1rem' }}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {filtered.map(p => (
              <tr key={p.id} style={{ borderBottom: '1px solid var(--border-color)' }}>
                <td style={{ padding: '0.85rem 1rem' }}>
                  <div style={{ fontWeight: 700, color: 'var(--text-primary)' }}>{p.name}</div>
                  <div style={{ fontSize: '0.75rem', color: 'var(--text-secondary)' }}>{p.mrn} • {p.gender}, {p.age}y</div>
                </td>
                <td style={{ padding: '0.85rem 1rem' }}>
                  <span className={`badge ${p.esi === 1 ? 'badge-danger' : p.esi === 2 ? 'badge-warning' : 'badge-info'}`}>
                    ESI Level {p.esi}
                  </span>
                </td>
                <td style={{ padding: '0.85rem 1rem', fontWeight: 600, color: 'var(--text-primary)' }}>{p.condition}</td>
                <td style={{ padding: '0.85rem 1rem', color: 'var(--accent-cyan)', fontFamily: 'monospace' }}>{p.vitals}</td>
                <td style={{ padding: '0.85rem 1rem' }}>
                  <span style={{ fontWeight: 800, color: p.news2 >= 7 ? 'var(--accent-rose)' : 'var(--accent-emerald)' }}>{p.news2}</span>
                </td>
                <td style={{ padding: '0.85rem 1rem', color: 'var(--text-primary)' }}>{p.room}</td>
                <td style={{ padding: '0.85rem 1rem', color: 'var(--text-secondary)' }}>{p.doctor}</td>
                <td style={{ padding: '0.85rem 1rem' }}>
                  <button style={{ padding: '0.35rem 0.65rem', borderRadius: '4px', border: '1px solid var(--border-color)', background: 'var(--bg-secondary)', color: 'var(--text-primary)', cursor: 'pointer', fontSize: '0.75rem' }}>
                    View Chart
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

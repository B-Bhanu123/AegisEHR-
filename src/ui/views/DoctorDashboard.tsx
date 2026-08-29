/**
 * AegisEHR Enterprise Health Platform - Physician Clinical EHR Dashboard
 */

import React, { useState } from 'react';
import { 
  Users, 
  Activity, 
  AlertTriangle, 
  CreditCard, 
  Pill, 
  Heart, 
  Stethoscope, 
  CheckCircle, 
  Clock, 
  Plus, 
  RefreshCw, 
  Search, 
  Eye, 
  FileText, 
  TrendingUp, 
  ShieldAlert,
  ChevronRight
} from 'lucide-react';

export const DoctorDashboard: React.FC = () => {
  const [selectedPatientId, setSelectedPatientId] = useState('PAT-1001');

  // Simulated active clinical queue
  const patients = [
    { id: 'PAT-1001', mrn: 'MRN-9981203', name: 'Eleanor Vance', age: 64, gender: 'Female', esi: 2, condition: 'Acute Coronary Syndrome', news2: 8, vitals: 'BP 164/98 | HR 112 | SpO2 92%', room: 'ICU-B04', status: 'CRITICAL' },
    { id: 'PAT-1002', mrn: 'MRN-4418290', name: 'Marcus Brody', age: 52, gender: 'Male', esi: 3, condition: 'Type 2 Diabetes Hyperglycemia', news2: 4, vitals: 'BP 138/84 | HR 88 | SpO2 96%', room: 'WARD-201', status: 'MONITORING' },
    { id: 'PAT-1003', mrn: 'MRN-7731902', name: 'Sophia Chen', age: 29, gender: 'Female', esi: 4, condition: 'Acute Asthma Exacerbation', news2: 3, vitals: 'BP 118/76 | HR 92 | SpO2 95%', room: 'ED-T02', status: 'STABLE' },
    { id: 'PAT-1004', mrn: 'MRN-1129038', name: 'Robert Tanaka', age: 71, gender: 'Male', esi: 1, condition: 'Septic Shock / Pneumonia', news2: 11, vitals: 'BP 82/50 | HR 134 | SpO2 88%', room: 'ICU-A01', status: 'CRITICAL' }
  ];

  const selectedPatient = patients.find(p => p.id === selectedPatientId) || patients[0];

  return (
    <div style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
      {/* Top Banner Header */}
      <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div>
          <h1 style={{ fontSize: '1.75rem', fontWeight: 800, color: 'var(--text-primary)', letterSpacing: '-0.02em' }}>
            Physician Clinical Workspace
          </h1>
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.875rem', marginTop: '0.2rem' }}>
            Real-Time Patient Telemetry, NEWS2 Sepsis Early Warning & FHIR Interoperability
          </p>
        </div>
        <div style={{ display: 'flex', gap: '0.75rem' }}>
          <button style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem',
            padding: '0.5rem 1rem',
            borderRadius: '8px',
            border: '1px solid var(--border-color)',
            background: 'var(--bg-secondary)',
            color: 'var(--text-primary)',
            fontWeight: 500,
            cursor: 'pointer'
          }}>
            <RefreshCw size={15} />
            <span>Sync Telemetry</span>
          </button>
          <button style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem',
            padding: '0.5rem 1rem',
            borderRadius: '8px',
            border: 'none',
            background: 'var(--accent-blue)',
            color: '#fff',
            fontWeight: 600,
            cursor: 'pointer'
          }}>
            <Plus size={16} />
            <span>New Clinical Encounter</span>
          </button>
        </div>
      </header>

      {/* KPI Stat Cards Grid */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1rem' }}>
        <div className="glass-panel" style={{ padding: '1.25rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div>
            <span style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', fontWeight: 600, letterSpacing: '0.05em' }}>ACTIVE PATIENTS</span>
            <div style={{ fontSize: '1.875rem', fontWeight: 800, marginTop: '0.25rem', color: 'var(--accent-cyan)' }}>1,482</div>
            <span style={{ fontSize: '0.75rem', color: 'var(--accent-emerald)', display: 'inline-flex', alignItems: 'center', gap: '0.2rem', marginTop: '0.25rem' }}>
              <TrendingUp size={12} /> ↑ 12% vs last month
            </span>
          </div>
          <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: 'rgba(6, 182, 212, 0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Users size={24} color="var(--accent-cyan)" />
          </div>
        </div>

        <div className="glass-panel" style={{ padding: '1.25rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div>
            <span style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', fontWeight: 600, letterSpacing: '0.05em' }}>CRITICAL ALERTS (NEWS2 ≥ 7)</span>
            <div style={{ fontSize: '1.875rem', fontWeight: 800, marginTop: '0.25rem', color: 'var(--accent-rose)' }}>2 Patients</div>
            <span style={{ fontSize: '0.75rem', color: 'var(--accent-rose)', display: 'inline-flex', alignItems: 'center', gap: '0.2rem', marginTop: '0.25rem' }}>
              <AlertTriangle size={12} /> Immediate Triage Required
            </span>
          </div>
          <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: 'rgba(244, 63, 94, 0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <ShieldAlert size={24} color="var(--accent-rose)" />
          </div>
        </div>

        <div className="glass-panel" style={{ padding: '1.25rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div>
            <span style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', fontWeight: 600, letterSpacing: '0.05em' }}>FHIR R4 INTEROP NODES</span>
            <div style={{ fontSize: '1.875rem', fontWeight: 800, marginTop: '0.25rem', color: 'var(--accent-purple)' }}>48,920</div>
            <span style={{ fontSize: '0.75rem', color: 'var(--accent-cyan)', display: 'inline-flex', alignItems: 'center', gap: '0.2rem', marginTop: '0.25rem' }}>
              <CheckCircle size={12} /> 99.98% SLA Uptime
            </span>
          </div>
          <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: 'rgba(139, 92, 246, 0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Activity size={24} color="var(--accent-purple)" />
          </div>
        </div>

        <div className="glass-panel" style={{ padding: '1.25rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div>
            <span style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', fontWeight: 600, letterSpacing: '0.05em' }}>EDI 837 PENDING CLAIMS</span>
            <div style={{ fontSize: '1.875rem', fontWeight: 800, marginTop: '0.25rem', color: 'var(--accent-amber)' }}>$248,500</div>
            <span style={{ fontSize: '0.75rem', color: 'var(--accent-emerald)', display: 'inline-flex', alignItems: 'center', gap: '0.2rem', marginTop: '0.25rem' }}>
              Clean Claim Rate: 98.4%
            </span>
          </div>
          <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: 'rgba(245, 158, 11, 0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <CreditCard size={24} color="var(--accent-amber)" />
          </div>
        </div>
      </div>

      {/* Main Workspace Layout (Triage Patient Queue + Live Vitals Summary) */}
      <div style={{ display: 'grid', gridTemplateColumns: '360px 1fr', gap: '1.5rem' }}>
        {/* Patient Triage Queue Column */}
        <div className="glass-panel" style={{ padding: '1.25rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid var(--border-color)', paddingBottom: '0.75rem' }}>
            <h3 style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--text-primary)', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <Stethoscope size={18} color="var(--accent-blue)" />
              Active Triage Queue
            </h3>
            <span className="badge badge-info">4 Active</span>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            {patients.map(p => {
              const isSelected = p.id === selectedPatientId;
              return (
                <div
                  key={p.id}
                  onClick={() => setSelectedPatientId(p.id)}
                  style={{
                    padding: '1rem',
                    borderRadius: '10px',
                    border: isSelected ? '1px solid var(--accent-blue)' : '1px solid var(--border-color)',
                    background: isSelected ? 'rgba(59, 130, 246, 0.1)' : 'var(--bg-secondary)',
                    cursor: 'pointer',
                    transition: 'all 0.2s ease'
                  }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.35rem' }}>
                    <h4 style={{ fontSize: '0.95rem', fontWeight: 700, color: 'var(--text-primary)' }}>{p.name}</h4>
                    <span className={`badge ${p.status === 'CRITICAL' ? 'badge-danger' : 'badge-normal'}`}>
                      {p.status}
                    </span>
                  </div>
                  <div style={{ fontSize: '0.775rem', color: 'var(--text-secondary)', display: 'flex', gap: '0.75rem', marginBottom: '0.5rem' }}>
                    <span>{p.mrn}</span>
                    <span>•</span>
                    <span>{p.gender}, {p.age}y</span>
                    <span>•</span>
                    <span style={{ color: 'var(--accent-cyan)' }}>{p.room}</span>
                  </div>
                  <div style={{ fontSize: '0.8rem', fontWeight: 600, color: 'var(--text-primary)', marginBottom: '0.5rem' }}>
                    {p.condition}
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: '0.5rem', borderTop: '1px solid rgba(255,255,255,0.05)', fontSize: '0.75rem' }}>
                    <span style={{ color: p.news2 >= 7 ? 'var(--accent-rose)' : 'var(--accent-emerald)', fontWeight: 700 }}>
                      NEWS2 Score: {p.news2}
                    </span>
                    <span style={{ color: 'var(--text-secondary)' }}>ESI Level {p.esi}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Clinical Detail & Telemetry View Column */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          {/* Patient Overview Card */}
          <div className="glass-panel" style={{ padding: '1.5rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1.25rem' }}>
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <h2 style={{ fontSize: '1.35rem', fontWeight: 800, color: 'var(--text-primary)' }}>{selectedPatient.name}</h2>
                  <span className="badge badge-normal">{selectedPatient.mrn}</span>
                  <span className="badge badge-danger">NEWS2 Score: {selectedPatient.news2} (HIGH)</span>
                </div>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.85rem', marginTop: '0.3rem' }}>
                  {selectedPatient.gender}, {selectedPatient.age} Years Old • Admitted to {selectedPatient.room} • Primary Attending: Dr. Sarah Jenkins
                </p>
              </div>

              <div style={{ display: 'flex', gap: '0.5rem' }}>
                <button style={{ padding: '0.45rem 0.85rem', borderRadius: '6px', border: '1px solid var(--border-color)', background: 'var(--bg-primary)', color: 'var(--text-primary)', fontSize: '0.8rem', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                  <FileText size={14} />
                  <span>Full Chart</span>
                </button>
                <button style={{ padding: '0.45rem 0.85rem', borderRadius: '6px', border: 'none', background: 'var(--accent-purple)', color: '#fff', fontSize: '0.8rem', fontWeight: 600, cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                  <Pill size={14} />
                  <span>Prescribe Medication</span>
                </button>
              </div>
            </div>

            {/* Vitals Telemetry Grid */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1rem' }}>
              <div style={{ background: 'var(--bg-primary)', padding: '1rem', borderRadius: '8px', border: '1px solid var(--border-color)' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', color: 'var(--text-secondary)', fontSize: '0.75rem', fontWeight: 600 }}>
                  <span>HEART RATE</span>
                  <Heart size={14} color="var(--accent-rose)" />
                </div>
                <div style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--accent-rose)', margin: '0.25rem 0' }}>112 <span style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>bpm</span></div>
                <div style={{ height: '4px', background: 'rgba(244, 63, 94, 0.2)', borderRadius: '2px', overflow: 'hidden' }}>
                  <div style={{ width: '82%', height: '100%', background: 'var(--accent-rose)' }} />
                </div>
              </div>

              <div style={{ background: 'var(--bg-primary)', padding: '1rem', borderRadius: '8px', border: '1px solid var(--border-color)' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', color: 'var(--text-secondary)', fontSize: '0.75rem', fontWeight: 600 }}>
                  <span>BLOOD PRESSURE</span>
                  <Activity size={14} color="var(--accent-cyan)" />
                </div>
                <div style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--accent-cyan)', margin: '0.25rem 0' }}>164/98 <span style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>mmHg</span></div>
                <div style={{ height: '4px', background: 'rgba(6, 182, 212, 0.2)', borderRadius: '2px', overflow: 'hidden' }}>
                  <div style={{ width: '75%', height: '100%', background: 'var(--accent-cyan)' }} />
                </div>
              </div>

              <div style={{ background: 'var(--bg-primary)', padding: '1rem', borderRadius: '8px', border: '1px solid var(--border-color)' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', color: 'var(--text-secondary)', fontSize: '0.75rem', fontWeight: 600 }}>
                  <span>OXYGEN SAT (SpO2)</span>
                  <Activity size={14} color="var(--accent-amber)" />
                </div>
                <div style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--accent-amber)', margin: '0.25rem 0' }}>92% <span style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>on Air</span></div>
                <div style={{ height: '4px', background: 'rgba(245, 158, 11, 0.2)', borderRadius: '2px', overflow: 'hidden' }}>
                  <div style={{ width: '92%', height: '100%', background: 'var(--accent-amber)' }} />
                </div>
              </div>

              <div style={{ background: 'var(--bg-primary)', padding: '1rem', borderRadius: '8px', border: '1px solid var(--border-color)' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', color: 'var(--text-secondary)', fontSize: '0.75rem', fontWeight: 600 }}>
                  <span>RESPIRATORY RATE</span>
                  <Activity size={14} color="var(--accent-emerald)" />
                </div>
                <div style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--accent-emerald)', margin: '0.25rem 0' }}>26 <span style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>rpm</span></div>
                <div style={{ height: '4px', background: 'rgba(16, 185, 129, 0.2)', borderRadius: '2px', overflow: 'hidden' }}>
                  <div style={{ width: '65%', height: '100%', background: 'var(--accent-emerald)' }} />
                </div>
              </div>
            </div>
          </div>

          {/* Clinical Decision Support & Drug Interaction Alert Banner */}
          <div className="glass-panel" style={{ padding: '1.25rem', borderLeft: '4px solid var(--accent-rose)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.5rem' }}>
              <AlertTriangle size={20} color="var(--accent-rose)" />
              <h3 style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--accent-rose)' }}>CDSS Alert: High Severity Drug-Drug Interaction Detected</h3>
            </div>
            <p style={{ color: 'var(--text-primary)', fontSize: '0.85rem', lineHeight: '1.4' }}>
              Concomitant administration of <strong>Lisinopril 10mg</strong> and <strong>Spironolactone 25mg</strong> increases the risk of severe hyperkalemia.
              Serum potassium monitor recommended prior to dispensing.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

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
  X,
  Send
} from 'lucide-react';

interface DoctorDashboardProps {
  isNewEncounterModalOpen?: boolean;
  setIsNewEncounterModalOpen?: (open: boolean) => void;
}

export const DoctorDashboard: React.FC<DoctorDashboardProps> = ({
  isNewEncounterModalOpen = false,
  setIsNewEncounterModalOpen = () => {}
}) => {
  const [selectedPatientId, setSelectedPatientId] = useState('PAT-1001');
  const [isChartModalOpen, setIsChartModalOpen] = useState(false);
  const [isERxModalOpen, setIsERxModalOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  // Dynamic Patient Telemetry State
  const [patients, setPatients] = useState([
    { id: 'PAT-1001', mrn: 'MRN-9981203', name: 'Eleanor Vance', age: 64, gender: 'Female', esi: 2, condition: 'Acute Coronary Syndrome', news2: 8, hr: 112, sbp: 164, dbp: 98, spo2: 92, resp: 26, room: 'ICU-B04', status: 'CRITICAL' },
    { id: 'PAT-1002', mrn: 'MRN-4418290', name: 'Marcus Brody', age: 52, gender: 'Male', esi: 3, condition: 'Type 2 Diabetes Hyperglycemia', news2: 4, hr: 88, sbp: 138, dbp: 84, spo2: 96, resp: 18, room: 'WARD-201', status: 'MONITORING' },
    { id: 'PAT-1003', mrn: 'MRN-7731902', name: 'Sophia Chen', age: 29, gender: 'Female', esi: 4, condition: 'Acute Asthma Exacerbation', news2: 3, hr: 92, sbp: 118, dbp: 76, spo2: 95, resp: 20, room: 'ED-T02', status: 'STABLE' },
    { id: 'PAT-1004', mrn: 'MRN-1129038', name: 'Robert Tanaka', age: 71, gender: 'Male', esi: 1, condition: 'Septic Shock / Pneumonia', news2: 11, hr: 134, sbp: 82, dbp: 50, spo2: 88, resp: 30, room: 'ICU-A01', status: 'CRITICAL' }
  ]);

  // eRx Form State
  const [selectedDrug, setSelectedDrug] = useState('Lisinopril 10 MG Oral Tablet');
  const [dosage, setDosage] = useState('10mg Daily');
  const [ddiWarning, setDdiWarning] = useState<string | null>(null);

  const selectedPatient = patients.find(p => p.id === selectedPatientId) || patients[0];

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 3000);
  };

  // Sync / Refresh Telemetry Action
  const handleSyncTelemetry = () => {
    setPatients(prev => prev.map(p => {
      const hrDelta = Math.floor(Math.random() * 7) - 3;
      const spo2Delta = Math.floor(Math.random() * 3) - 1;
      const newHr = Math.max(50, Math.min(160, p.hr + hrDelta));
      const newSpo2 = Math.max(80, Math.min(100, p.spo2 + spo2Delta));
      return { ...p, hr: newHr, spo2: newSpo2 };
    }));
    showToast('✓ Patient Vitals Telemetry Synced Live from ICU Monitors');
  };

  // eRx Drug Change & DDI Alert Check
  const handleDrugChange = (drugName: string) => {
    setSelectedDrug(drugName);
    if (drugName.includes('Spironolactone') || drugName.includes('Lisinopril')) {
      setDdiWarning('⚠️ MAJOR DDI ALERT: Lisinopril + Spironolactone combination increases hyperkalemia risk.');
    } else {
      setDdiWarning(null);
    }
  };

  const handlePrescribeSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsERxModalOpen(false);
    showToast(`✓ eRx Order Submitted: ${selectedDrug} (${dosage}) for ${selectedPatient.name}`);
  };

  return (
    <div style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', gap: '1.5rem', position: 'relative' }}>
      {/* Toast Notification */}
      {toastMessage && (
        <div style={{
          position: 'fixed',
          bottom: '24px',
          right: '24px',
          background: 'var(--bg-secondary)',
          border: '1px solid var(--accent-emerald)',
          color: 'var(--accent-emerald)',
          padding: '0.85rem 1.25rem',
          borderRadius: '8px',
          fontWeight: 600,
          boxShadow: '0 10px 30px rgba(0,0,0,0.5)',
          zIndex: 9999,
          fontSize: '0.875rem'
        }}>
          {toastMessage}
        </div>
      )}

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
          <button
            onClick={handleSyncTelemetry}
            style={{
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
            }}
          >
            <RefreshCw size={15} />
            <span>Sync Telemetry</span>
          </button>
          <button
            onClick={() => setIsNewEncounterModalOpen(true)}
            style={{
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
            }}
          >
            <Plus size={16} />
            <span>New Clinical Encounter</span>
          </button>
        </div>
      </header>

      {/* Stat Cards Grid */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1rem' }}>
        <div className="glass-panel" style={{ padding: '1.25rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div>
            <span style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', fontWeight: 600 }}>ACTIVE PATIENTS</span>
            <div style={{ fontSize: '1.875rem', fontWeight: 800, marginTop: '0.25rem', color: 'var(--accent-cyan)' }}>1,482</div>
            <span style={{ fontSize: '0.75rem', color: 'var(--accent-emerald)' }}>↑ 12% vs last month</span>
          </div>
          <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: 'rgba(6, 182, 212, 0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Users size={24} color="var(--accent-cyan)" />
          </div>
        </div>

        <div className="glass-panel" style={{ padding: '1.25rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div>
            <span style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', fontWeight: 600 }}>CRITICAL ALERTS</span>
            <div style={{ fontSize: '1.875rem', fontWeight: 800, marginTop: '0.25rem', color: 'var(--accent-rose)' }}>2 Patients</div>
            <span style={{ fontSize: '0.75rem', color: 'var(--accent-rose)' }}>Requires Immediate Triage</span>
          </div>
          <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: 'rgba(244, 63, 94, 0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <ShieldAlert size={24} color="var(--accent-rose)" />
          </div>
        </div>

        <div className="glass-panel" style={{ padding: '1.25rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div>
            <span style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', fontWeight: 600 }}>FHIR R4 REQUESTS</span>
            <div style={{ fontSize: '1.875rem', fontWeight: 800, marginTop: '0.25rem', color: 'var(--accent-purple)' }}>48,920</div>
            <span style={{ fontSize: '0.75rem', color: 'var(--accent-cyan)' }}>99.98% SLA Uptime</span>
          </div>
          <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: 'rgba(139, 92, 246, 0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Activity size={24} color="var(--accent-purple)" />
          </div>
        </div>

        <div className="glass-panel" style={{ padding: '1.25rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div>
            <span style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', fontWeight: 600 }}>EDI 837 PENDING</span>
            <div style={{ fontSize: '1.875rem', fontWeight: 800, marginTop: '0.25rem', color: 'var(--accent-amber)' }}>$248,500</div>
            <span style={{ fontSize: '0.75rem', color: 'var(--accent-emerald)' }}>Clean Claim Rate: 98.4%</span>
          </div>
          <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: 'rgba(245, 158, 11, 0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <CreditCard size={24} color="var(--accent-amber)" />
          </div>
        </div>
      </div>

      {/* Triage Queue & Patient Chart View */}
      <div style={{ display: 'grid', gridTemplateColumns: '360px 1fr', gap: '1.5rem' }}>
        {/* Patient Triage Queue */}
        <div className="glass-panel" style={{ padding: '1.25rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid var(--border-color)', paddingBottom: '0.75rem' }}>
            <h3 style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--text-primary)', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <Stethoscope size={18} color="var(--accent-blue)" />
              Active Triage Queue
            </h3>
            <span className="badge badge-info">{patients.length} Active</span>
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

        {/* Clinical Detail View */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          <div className="glass-panel" style={{ padding: '1.5rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1.25rem' }}>
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <h2 style={{ fontSize: '1.35rem', fontWeight: 800, color: 'var(--text-primary)' }}>{selectedPatient.name}</h2>
                  <span className="badge badge-normal">{selectedPatient.mrn}</span>
                  <span className="badge badge-danger">NEWS2: {selectedPatient.news2}</span>
                </div>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.85rem', marginTop: '0.3rem' }}>
                  {selectedPatient.gender}, {selectedPatient.age} Years Old • Room {selectedPatient.room} • Attending: Dr. Sarah Jenkins
                </p>
              </div>

              {/* Working Action Buttons */}
              <div style={{ display: 'flex', gap: '0.5rem' }}>
                <button
                  onClick={() => setIsChartModalOpen(true)}
                  style={{
                    padding: '0.45rem 0.85rem',
                    borderRadius: '6px',
                    border: '1px solid var(--border-color)',
                    background: 'var(--bg-primary)',
                    color: 'var(--text-primary)',
                    fontSize: '0.8rem',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.3rem'
                  }}
                >
                  <FileText size={14} />
                  <span>Full Chart</span>
                </button>
                <button
                  onClick={() => setIsERxModalOpen(true)}
                  style={{
                    padding: '0.45rem 0.85rem',
                    borderRadius: '6px',
                    border: 'none',
                    background: 'var(--accent-purple)',
                    color: '#fff',
                    fontSize: '0.8rem',
                    fontWeight: 600,
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.3rem'
                  }}
                >
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
                <div style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--accent-rose)', margin: '0.25rem 0' }}>{selectedPatient.hr} <span style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>bpm</span></div>
                <div style={{ height: '4px', background: 'rgba(244, 63, 94, 0.2)', borderRadius: '2px', overflow: 'hidden' }}>
                  <div style={{ width: `${(selectedPatient.hr / 160) * 100}%`, height: '100%', background: 'var(--accent-rose)' }} />
                </div>
              </div>

              <div style={{ background: 'var(--bg-primary)', padding: '1rem', borderRadius: '8px', border: '1px solid var(--border-color)' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', color: 'var(--text-secondary)', fontSize: '0.75rem', fontWeight: 600 }}>
                  <span>BLOOD PRESSURE</span>
                  <Activity size={14} color="var(--accent-cyan)" />
                </div>
                <div style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--accent-cyan)', margin: '0.25rem 0' }}>{selectedPatient.sbp}/{selectedPatient.dbp} <span style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>mmHg</span></div>
                <div style={{ height: '4px', background: 'rgba(6, 182, 212, 0.2)', borderRadius: '2px', overflow: 'hidden' }}>
                  <div style={{ width: '75%', height: '100%', background: 'var(--accent-cyan)' }} />
                </div>
              </div>

              <div style={{ background: 'var(--bg-primary)', padding: '1rem', borderRadius: '8px', border: '1px solid var(--border-color)' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', color: 'var(--text-secondary)', fontSize: '0.75rem', fontWeight: 600 }}>
                  <span>OXYGEN SAT (SpO2)</span>
                  <Activity size={14} color="var(--accent-amber)" />
                </div>
                <div style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--accent-amber)', margin: '0.25rem 0' }}>{selectedPatient.spo2}% <span style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>Air</span></div>
                <div style={{ height: '4px', background: 'rgba(245, 158, 11, 0.2)', borderRadius: '2px', overflow: 'hidden' }}>
                  <div style={{ width: `${selectedPatient.spo2}%`, height: '100%', background: 'var(--accent-amber)' }} />
                </div>
              </div>

              <div style={{ background: 'var(--bg-primary)', padding: '1rem', borderRadius: '8px', border: '1px solid var(--border-color)' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', color: 'var(--text-secondary)', fontSize: '0.75rem', fontWeight: 600 }}>
                  <span>RESPIRATORY RATE</span>
                  <Activity size={14} color="var(--accent-emerald)" />
                </div>
                <div style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--accent-emerald)', margin: '0.25rem 0' }}>{selectedPatient.resp} <span style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>rpm</span></div>
                <div style={{ height: '4px', background: 'rgba(16, 185, 129, 0.2)', borderRadius: '2px', overflow: 'hidden' }}>
                  <div style={{ width: `${(selectedPatient.resp / 40) * 100}%`, height: '100%', background: 'var(--accent-emerald)' }} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* --- MODAL 1: Full Chart Modal --- */}
      {isChartModalOpen && (
        <div style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.7)', backdropFilter: 'blur(4px)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 1000 }}>
          <div className="glass-panel" style={{ width: '640px', padding: '1.5rem', maxHeight: '80vh', overflowY: 'auto' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem', borderBottom: '1px solid var(--border-color)', paddingBottom: '0.5rem' }}>
              <h3 style={{ fontSize: '1.2rem', fontWeight: 700, color: 'var(--text-primary)' }}>Full EHR Chart - {selectedPatient.name}</h3>
              <button onClick={() => setIsChartModalOpen(false)} style={{ background: 'none', border: 'none', color: 'var(--text-secondary)', cursor: 'pointer' }}><X size={20} /></button>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', fontSize: '0.85rem' }}>
              <div><strong>MRN:</strong> {selectedPatient.mrn}</div>
              <div><strong>Primary Diagnosis:</strong> {selectedPatient.condition} (ICD-10 I21.9)</div>
              <div><strong>Allergies:</strong> Penicillin (Anaphylaxis), NSAIDs (Rash)</div>
              <div><strong>Active Medications:</strong> Lisinopril 10mg, Aspirin 81mg, Atorvastatin 40mg</div>
              <div><strong>Recent Lab Results:</strong> Troponin I: 4.8 ng/mL (High), HbA1c: 6.2%</div>
            </div>
            <button onClick={() => setIsChartModalOpen(false)} style={{ marginTop: '1.5rem', width: '100%', padding: '0.65rem', borderRadius: '8px', border: 'none', background: 'var(--accent-blue)', color: '#fff', fontWeight: 600, cursor: 'pointer' }}>
              Close Chart
            </button>
          </div>
        </div>
      )}

      {/* --- MODAL 2: eRx Prescription Modal --- */}
      {isERxModalOpen && (
        <div style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.7)', backdropFilter: 'blur(4px)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 1000 }}>
          <div className="glass-panel" style={{ width: '560px', padding: '1.5rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem', borderBottom: '1px solid var(--border-color)', paddingBottom: '0.5rem' }}>
              <h3 style={{ fontSize: '1.2rem', fontWeight: 700, color: 'var(--text-primary)' }}>e-Prescribing Builder - {selectedPatient.name}</h3>
              <button onClick={() => setIsERxModalOpen(false)} style={{ background: 'none', border: 'none', color: 'var(--text-secondary)', cursor: 'pointer' }}><X size={20} /></button>
            </div>
            <form onSubmit={handlePrescribeSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <div>
                <label style={{ display: 'block', fontSize: '0.8rem', color: 'var(--text-secondary)', marginBottom: '0.3rem' }}>Select Medication Product (RxNorm)</label>
                <select
                  value={selectedDrug}
                  onChange={(e) => handleDrugChange(e.target.value)}
                  style={{ width: '100%', padding: '0.6rem', borderRadius: '6px', border: '1px solid var(--border-color)', background: 'var(--bg-primary)', color: 'var(--text-primary)' }}
                >
                  <option value="Lisinopril 10 MG Oral Tablet">Lisinopril 10 MG Oral Tablet</option>
                  <option value="Spironolactone 25 MG Oral Tablet">Spironolactone 25 MG Oral Tablet (DDI Trigger)</option>
                  <option value="Metformin hydrochloride 500 MG">Metformin hydrochloride 500 MG</option>
                  <option value="Atorvastatin 20 MG Oral Tablet">Atorvastatin 20 MG Oral Tablet</option>
                </select>
              </div>

              {ddiWarning && (
                <div style={{ background: 'rgba(244, 63, 94, 0.15)', border: '1px solid var(--accent-rose)', color: 'var(--accent-rose)', padding: '0.75rem', borderRadius: '6px', fontSize: '0.8rem' }}>
                  {ddiWarning}
                </div>
              )}

              <div>
                <label style={{ display: 'block', fontSize: '0.8rem', color: 'var(--text-secondary)', marginBottom: '0.3rem' }}>Dosage & Frequency</label>
                <input
                  type="text"
                  value={dosage}
                  onChange={(e) => setDosage(e.target.value)}
                  style={{ width: '100%', padding: '0.6rem', borderRadius: '6px', border: '1px solid var(--border-color)', background: 'var(--bg-primary)', color: 'var(--text-primary)' }}
                />
              </div>

              <div style={{ display: 'flex', gap: '0.75rem', marginTop: '0.5rem' }}>
                <button type="button" onClick={() => setIsERxModalOpen(false)} style={{ flex: 1, padding: '0.65rem', borderRadius: '6px', border: '1px solid var(--border-color)', background: 'var(--bg-secondary)', color: 'var(--text-primary)', cursor: 'pointer' }}>Cancel</button>
                <button type="submit" style={{ flex: 1, padding: '0.65rem', borderRadius: '6px', border: 'none', background: 'var(--accent-purple)', color: '#fff', fontWeight: 600, cursor: 'pointer' }}>Submit eRx Order</button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* --- MODAL 3: New Encounter Modal --- */}
      {isNewEncounterModalOpen && (
        <div style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.7)', backdropFilter: 'blur(4px)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 1000 }}>
          <div className="glass-panel" style={{ width: '560px', padding: '1.5rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem', borderBottom: '1px solid var(--border-color)', paddingBottom: '0.5rem' }}>
              <h3 style={{ fontSize: '1.2rem', fontWeight: 700, color: 'var(--text-primary)' }}>New Patient Clinical Encounter</h3>
              <button onClick={() => setIsNewEncounterModalOpen(false)} style={{ background: 'none', border: 'none', color: 'var(--text-secondary)', cursor: 'pointer' }}><X size={20} /></button>
            </div>
            <form onSubmit={(e) => {
              e.preventDefault();
              setIsNewEncounterModalOpen(false);
              showToast('✓ New Patient Encounter Logged & Admitted to Triage');
            }} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <div>
                <label style={{ display: 'block', fontSize: '0.8rem', color: 'var(--text-secondary)', marginBottom: '0.3rem' }}>Patient Name & MRN</label>
                <input type="text" defaultValue="Jonathan Myers (MRN-902182)" style={{ width: '100%', padding: '0.6rem', borderRadius: '6px', border: '1px solid var(--border-color)', background: 'var(--bg-primary)', color: 'var(--text-primary)' }} />
              </div>
              <div>
                <label style={{ display: 'block', fontSize: '0.8rem', color: 'var(--text-secondary)', marginBottom: '0.3rem' }}>Chief Complaint & Reason for Visit</label>
                <input type="text" defaultValue="Acute Shortness of Breath and Chest Tightness" style={{ width: '100%', padding: '0.6rem', borderRadius: '6px', border: '1px solid var(--border-color)', background: 'var(--bg-primary)', color: 'var(--text-primary)' }} />
              </div>
              <div>
                <label style={{ display: 'block', fontSize: '0.8rem', color: 'var(--text-secondary)', marginBottom: '0.3rem' }}>ESI Triage Acuity Score</label>
                <select style={{ width: '100%', padding: '0.6rem', borderRadius: '6px', border: '1px solid var(--border-color)', background: 'var(--bg-primary)', color: 'var(--text-primary)' }}>
                  <option value="1">ESI Level 1 (Immediate / Resuscitation)</option>
                  <option value="2">ESI Level 2 (Emergent / High Risk)</option>
                  <option value="3">ESI Level 3 (Urgent)</option>
                </select>
              </div>
              <div style={{ display: 'flex', gap: '0.75rem', marginTop: '0.5rem' }}>
                <button type="button" onClick={() => setIsNewEncounterModalOpen(false)} style={{ flex: 1, padding: '0.65rem', borderRadius: '6px', border: '1px solid var(--border-color)', background: 'var(--bg-secondary)', color: 'var(--text-primary)', cursor: 'pointer' }}>Cancel</button>
                <button type="submit" style={{ flex: 1, padding: '0.65rem', borderRadius: '6px', border: 'none', background: 'var(--accent-blue)', color: '#fff', fontWeight: 600, cursor: 'pointer' }}>Admit Patient</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

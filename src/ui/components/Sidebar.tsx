/**
 * AegisEHR Enterprise Health Platform - Sidebar Navigation
 */

import React from 'react';
import { 
  Users, 
  Activity, 
  Pill, 
  FileText, 
  ShieldCheck, 
  CreditCard, 
  Video, 
  Database,
  Stethoscope,
  Settings,
  HelpCircle,
  ChevronRight
} from 'lucide-react';

interface SidebarProps {
  activeView: string;
  setActiveView: (view: string) => void;
}

export const Sidebar: React.FC<SidebarProps> = ({ activeView, setActiveView }) => {
  const navItems = [
    { id: 'dashboard', label: 'Clinical Dashboard', icon: Activity, badge: 'Live' },
    { id: 'patients', label: 'Patient Registry', icon: Users, badge: '1.4k' },
    { id: 'triage', label: 'ER Triage Queue', icon: Stethoscope, badge: '6STAT' },
    { id: 'erx', label: 'Pharmacy & eRx', icon: Pill },
    { id: 'fhir', label: 'FHIR R4 Inspector', icon: Database },
    { id: 'pacs', label: 'DICOM PACS Viewer', icon: FileText },
    { id: 'billing', label: 'Revenue & Claims', icon: CreditCard },
    { id: 'telehealth', label: 'Telemedicine Hub', icon: Video },
    { id: 'security', label: 'HIPAA Audit Trail', icon: ShieldCheck }
  ];

  return (
    <aside style={{
      width: '260px',
      background: 'var(--bg-secondary)',
      borderRight: '1px solid var(--border-color)',
      display: 'flex',
      flexDirection: 'column',
      height: '100vh',
      position: 'sticky',
      top: 0
    }}>
      {/* Brand Header */}
      <div style={{ padding: '1.25rem 1.5rem', display: 'flex', alignItems: 'center', gap: '0.75rem', borderBottom: '1px solid var(--border-color)' }}>
        <div style={{
          width: '36px',
          height: '36px',
          borderRadius: '8px',
          background: 'linear-gradient(135deg, var(--accent-cyan), var(--accent-blue))',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#fff',
          fontWeight: 800,
          fontSize: '1.2rem'
        }}>
          Æ
        </div>
        <div>
          <h2 style={{ fontSize: '1.1rem', fontWeight: 800, color: 'var(--text-primary)', letterSpacing: '-0.02em' }}>AegisEHR</h2>
          <span style={{ fontSize: '0.7rem', color: 'var(--accent-cyan)', fontWeight: 600, letterSpacing: '0.05em' }}>ENTERPRISE PLATFORM</span>
        </div>
      </div>

      {/* Nav Menu */}
      <nav style={{ flex: 1, padding: '1rem 0.75rem', display: 'flex', flexDirection: 'column', gap: '0.25rem', overflowY: 'auto' }}>
        <span style={{ padding: '0.5rem 0.75rem', fontSize: '0.7rem', fontWeight: 700, color: 'var(--text-secondary)', textTransform: 'uppercase', letterSpacing: '0.08em' }}>Clinical Navigation</span>
        {navItems.map(item => {
          const Icon = item.icon;
          const isActive = activeView === item.id;
          return (
            <button
              key={item.id}
              onClick={() => setActiveView(item.id)}
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '0.65rem 0.85rem',
                borderRadius: '8px',
                border: 'none',
                background: isActive ? 'rgba(59, 130, 246, 0.15)' : 'transparent',
                color: isActive ? 'var(--accent-blue)' : 'var(--text-secondary)',
                fontWeight: isActive ? 600 : 500,
                fontSize: '0.875rem',
                cursor: 'pointer',
                transition: 'all 0.15s ease'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <Icon size={18} color={isActive ? 'var(--accent-blue)' : 'var(--text-secondary)'} />
                <span>{item.label}</span>
              </div>
              {item.badge && (
                <span className="badge badge-info" style={{ fontSize: '0.65rem', padding: '0.15rem 0.4rem' }}>
                  {item.badge}
                </span>
              )}
            </button>
          );
        })}
      </nav>

      {/* Footer User Profile */}
      <div style={{ padding: '1rem', borderTop: '1px solid var(--border-color)', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
        <div style={{
          width: '38px',
          height: '38px',
          borderRadius: '50%',
          background: 'var(--accent-purple)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#fff',
          fontWeight: 700,
          fontSize: '0.9rem'
        }}>
          DS
        </div>
        <div style={{ flex: 1, overflow: 'hidden' }}>
          <h4 style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-primary)', textOverflow: 'ellipsis', overflow: 'hidden', whiteSpace: 'nowrap' }}>Dr. Sarah Jenkins, MD</h4>
          <span style={{ fontSize: '0.725rem', color: 'var(--text-secondary)' }}>Chief of Cardiology</span>
        </div>
      </div>
    </aside>
  );
};

/**
 * AegisEHR Enterprise Health Platform - Interactive Top Navigation Bar
 */

import React, { useState } from 'react';
import { Search, Bell, Shield, CheckCircle, Plus, X } from 'lucide-react';

interface NavbarProps {
  onNewEncounterClick: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onNewEncounterClick }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [notificationsOpen, setNotificationsOpen] = useState(false);

  const notifications = [
    { id: 1, title: 'CRITICAL ALERT', text: 'Patient Eleanor Vance NEWS2 score increased to 8', time: '2 mins ago', type: 'danger' },
    { id: 2, title: 'FHIR INTEROP', text: 'Received 14 new HL7 ADT^A08 messages', time: '10 mins ago', type: 'info' },
    { id: 3, title: 'EDI BILLING', text: 'Batch #8812 EDI 837P claims accepted by payer', time: '1 hour ago', type: 'success' }
  ];

  return (
    <header style={{
      height: '64px',
      background: 'var(--bg-secondary)',
      borderBottom: '1px solid var(--border-color)',
      padding: '0 1.5rem',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      position: 'sticky',
      top: 0,
      zIndex: 100
    }}>
      {/* Search Bar */}
      <div style={{ position: 'relative', width: '380px' }}>
        <Search size={16} color="var(--text-secondary)" style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)' }} />
        <input
          type="text"
          placeholder="Search Patient Name, MRN, ICD-10 or CPT..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          style={{
            width: '100%',
            padding: '0.5rem 1rem 0.5rem 2.25rem',
            borderRadius: '8px',
            border: '1px solid var(--border-color)',
            background: 'var(--bg-primary)',
            color: 'var(--text-primary)',
            fontSize: '0.85rem',
            outline: 'none'
          }}
        />
      </div>

      {/* Action Controls */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', background: 'rgba(16, 185, 129, 0.1)', border: '1px solid rgba(16, 185, 129, 0.3)', padding: '0.35rem 0.75rem', borderRadius: '20px' }}>
          <CheckCircle size={14} color="var(--accent-emerald)" />
          <span style={{ fontSize: '0.75rem', fontWeight: 600, color: 'var(--accent-emerald)' }}>FHIR R4 Live</span>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: 'var(--text-secondary)', fontSize: '0.75rem' }}>
          <Shield size={14} color="var(--accent-cyan)" />
          <span>AES-256</span>
        </div>

        {/* Notifications Popover */}
        <div style={{ position: 'relative' }}>
          <button
            onClick={() => setNotificationsOpen(!notificationsOpen)}
            style={{
              background: 'var(--bg-hover)',
              border: '1px solid var(--border-color)',
              borderRadius: '8px',
              width: '36px',
              height: '36px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer'
            }}
          >
            <Bell size={18} color="var(--text-primary)" />
            <span style={{ position: 'absolute', top: '-2px', right: '-2px', width: '8px', height: '8px', borderRadius: '50%', background: 'var(--accent-rose)' }} />
          </button>

          {notificationsOpen && (
            <div className="glass-panel" style={{
              position: 'absolute',
              right: 0,
              top: '48px',
              width: '320px',
              padding: '1rem',
              boxShadow: '0 10px 25px rgba(0,0,0,0.5)',
              zIndex: 200
            }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.75rem' }}>
                <h4 style={{ fontSize: '0.9rem', fontWeight: 700, color: 'var(--text-primary)' }}>Clinical Notifications</h4>
                <button onClick={() => setNotificationsOpen(false)} style={{ background: 'none', border: 'none', color: 'var(--text-secondary)', cursor: 'pointer' }}>
                  <X size={16} />
                </button>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                {notifications.map(n => (
                  <div key={n.id} style={{ padding: '0.6rem', borderRadius: '6px', background: 'var(--bg-primary)', borderLeft: `3px solid ${n.type === 'danger' ? 'var(--accent-rose)' : 'var(--accent-cyan)'}` }}>
                    <div style={{ fontSize: '0.75rem', fontWeight: 700, color: n.type === 'danger' ? 'var(--accent-rose)' : 'var(--accent-cyan)' }}>{n.title}</div>
                    <div style={{ fontSize: '0.8rem', color: 'var(--text-primary)', marginTop: '0.15rem' }}>{n.text}</div>
                    <div style={{ fontSize: '0.65rem', color: 'var(--text-secondary)', marginTop: '0.25rem' }}>{n.time}</div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* New Encounter Trigger */}
        <button
          onClick={onNewEncounterClick}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.4rem',
            padding: '0.5rem 1rem',
            borderRadius: '8px',
            border: 'none',
            background: 'linear-gradient(135deg, var(--accent-blue), var(--accent-cyan))',
            color: '#fff',
            fontWeight: 600,
            fontSize: '0.85rem',
            cursor: 'pointer'
          }}
        >
          <Plus size={16} />
          <span>New Encounter</span>
        </button>
      </div>
    </header>
  );
};

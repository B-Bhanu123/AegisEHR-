/**
 * AegisEHR Enterprise Health Platform - Top Navigation Bar
 */

import React, { useState } from 'react';
import { Search, Bell, Shield, Clock, RefreshCw, Plus, CheckCircle, AlertTriangle } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [notificationsOpen, setNotificationsOpen] = useState(false);

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
      {/* Search Input */}
      <div style={{ position: 'relative', width: '380px' }}>
        <Search size={16} color="var(--text-secondary)" style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)' }} />
        <input
          type="text"
          placeholder="Search by Patient Name, MRN, ICD-10, CPT or RxNorm..."
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

      {/* Telemetry Status & Actions */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
        {/* System Health Badge */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', background: 'rgba(16, 185, 129, 0.1)', border: '1px solid rgba(16, 185, 129, 0.3)', padding: '0.35rem 0.75rem', borderRadius: '20px' }}>
          <CheckCircle size={14} color="var(--accent-emerald)" />
          <span style={{ fontSize: '0.75rem', fontWeight: 600, color: 'var(--accent-emerald)' }}>FHIR R4 Live Node</span>
        </div>

        {/* HIPAA Compliance Indicator */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: 'var(--text-secondary)', fontSize: '0.75rem' }}>
          <Shield size={14} color="var(--accent-cyan)" />
          <span>AES-256 Encrypted</span>
        </div>

        {/* Notification Bell */}
        <button
          onClick={() => setNotificationsOpen(!notificationsOpen)}
          style={{
            position: 'relative',
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
          <span style={{
            position: 'absolute',
            top: '-2px',
            right: '-2px',
            width: '8px',
            height: '8px',
            borderRadius: '50%',
            background: 'var(--accent-rose)'
          }} />
        </button>

        {/* Quick Action Button */}
        <button style={{
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
          cursor: 'pointer',
          boxShadow: '0 4px 12px rgba(59, 130, 246, 0.25)'
        }}>
          <Plus size={16} />
          <span>New Encounter</span>
        </button>
      </div>
    </header>
  );
};

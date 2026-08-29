/**
 * AegisEHR Enterprise Health Platform - Main Application Layout
 */

import React, { useState } from 'react';
import { Sidebar } from './components/Sidebar';
import { Navbar } from './components/Navbar';
import { DoctorDashboard } from './views/DoctorDashboard';

export const App: React.FC = () => {
  const [activeView, setActiveView] = useState('dashboard');

  return (
    <div style={{ display: 'flex', minHeight: '100vh', background: 'var(--bg-primary)', color: 'var(--text-primary)' }}>
      <Sidebar activeView={activeView} setActiveView={setActiveView} />
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
        <Navbar />
        <main style={{ flex: 1, overflowY: 'auto' }}>
          <DoctorDashboard />
        </main>
      </div>
    </div>
  );
};

export default App;

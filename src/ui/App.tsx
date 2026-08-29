/**
 * AegisEHR Enterprise Health Platform - Main Application Layout & View Router
 */

import React, { useState } from 'react';
import { Sidebar } from './components/Sidebar';
import { Navbar } from './components/Navbar';
import { DoctorDashboard } from './views/DoctorDashboard';
import { PatientTriageView } from './views/PatientTriageView';
import { PharmacyQueueView } from './views/PharmacyQueueView';
import { BillingPortalView } from './views/BillingPortalView';
import { SecurityAuditView } from './views/SecurityAuditView';
import { FHIRResourceInspector } from './components/FHIRResourceInspector';
import { DicomCanvasViewer } from './components/DicomCanvasViewer';

export const App: React.FC = () => {
  const [activeView, setActiveView] = useState('dashboard');
  const [isNewEncounterModalOpen, setIsNewEncounterModalOpen] = useState(false);

  const renderActiveView = () => {
    switch (activeView) {
      case 'dashboard':
        return <DoctorDashboard isNewEncounterModalOpen={isNewEncounterModalOpen} setIsNewEncounterModalOpen={setIsNewEncounterModalOpen} />;
      case 'patients':
      case 'triage':
        return <PatientTriageView />;
      case 'erx':
        return <PharmacyQueueView />;
      case 'fhir':
        return <FHIRResourceInspector />;
      case 'pacs':
        return <DicomCanvasViewer />;
      case 'billing':
        return <BillingPortalView />;
      case 'security':
        return <SecurityAuditView />;
      default:
        return <DoctorDashboard isNewEncounterModalOpen={isNewEncounterModalOpen} setIsNewEncounterModalOpen={setIsNewEncounterModalOpen} />;
    }
  };

  return (
    <div style={{ display: 'flex', minHeight: '100vh', background: 'var(--bg-primary)', color: 'var(--text-primary)' }}>
      <Sidebar activeView={activeView} setActiveView={setActiveView} />
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
        <Navbar onNewEncounterClick={() => setIsNewEncounterModalOpen(true)} />
        <main style={{ flex: 1, overflowY: 'auto' }}>
          {renderActiveView()}
        </main>
      </div>
    </div>
  );
};

export default App;

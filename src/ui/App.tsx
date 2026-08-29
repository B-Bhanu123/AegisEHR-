import React from 'react';
import { DoctorDashboard } from './views/DoctorDashboard';

export const App: React.FC = () => {
  return (
    <div style={{ minHeight: '100vh', background: 'var(--bg-primary)', color: 'var(--text-primary)' }}>
      <DoctorDashboard />
    </div>
  );
};
export default App;

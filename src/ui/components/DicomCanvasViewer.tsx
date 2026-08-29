/**
 * AegisEHR Enterprise Health Platform - DICOM PACS Medical Imaging Viewer
 */

import React, { useState } from 'react';
import { FileText, ZoomIn, ZoomOut, Move, Sliders, RefreshCw } from 'lucide-react';

export const DicomCanvasViewer: React.FC = () => {
  const [contrastWindow, setContrastWindow] = useState('SOFT_TISSUE');
  const [zoomLevel, setZoomLevel] = useState(100);

  return (
    <div style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
      <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div>
          <h1 style={{ fontSize: '1.75rem', fontWeight: 800, color: 'var(--text-primary)', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <FileText color="var(--accent-blue)" />
            DICOM PACS Medical Imaging Workspace
          </h1>
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.875rem' }}>DICOM P10 Binary Parser, WADO-RS PACS Integration & Diagnostic Imaging Canvas</p>
        </div>
      </header>

      {/* Viewer Control Toolbar */}
      <div style={{ display: 'flex', gap: '1rem', background: 'var(--bg-secondary)', padding: '0.75rem 1rem', borderRadius: '10px', border: '1px solid var(--border-color)' }}>
        <button onClick={() => setZoomLevel(prev => Math.min(200, prev + 20))} style={{ padding: '0.4rem 0.75rem', borderRadius: '6px', border: '1px solid var(--border-color)', background: 'var(--bg-primary)', color: 'var(--text-primary)', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '0.3rem', fontSize: '0.8rem' }}>
          <ZoomIn size={14} /> Zoom In ({zoomLevel}%)
        </button>
        <button onClick={() => setZoomLevel(prev => Math.max(60, prev - 20))} style={{ padding: '0.4rem 0.75rem', borderRadius: '6px', border: '1px solid var(--border-color)', background: 'var(--bg-primary)', color: 'var(--text-primary)', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '0.3rem', fontSize: '0.8rem' }}>
          <ZoomOut size={14} /> Zoom Out
        </button>
        <select value={contrastWindow} onChange={(e) => setContrastWindow(e.target.value)} style={{ padding: '0.4rem 0.75rem', borderRadius: '6px', border: '1px solid var(--border-color)', background: 'var(--bg-primary)', color: 'var(--text-primary)', fontSize: '0.8rem' }}>
          <option value="SOFT_TISSUE">Window: Soft Tissue (W:400 L:40)</option>
          <option value="LUNG">Window: Lung (W:1500 L:-600)</option>
          <option value="BONE">Window: Bone (W:2000 L:300)</option>
        </select>
      </div>

      {/* Simulated DICOM Canvas Container */}
      <div className="glass-panel" style={{ height: '480px', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#000', border: '1px solid var(--border-color)', position: 'relative' }}>
        <div style={{ textAlign: 'center', color: 'var(--accent-cyan)' }}>
          <div style={{ width: '220px', height: '220px', borderRadius: '50%', border: '4px dashed var(--accent-cyan)', margin: '0 auto 1rem auto', display: 'flex', alignItems: 'center', justifyContent: 'center', transform: `scale(${zoomLevel / 100})` }}>
            <span style={{ fontWeight: 800, fontSize: '1.2rem' }}>CT CHEST SCAN</span>
          </div>
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.85rem' }}>Series UID: 1.2.840.113619.2.55.3.2831173094 • Modality: CT • 512x512</p>
        </div>
      </div>
    </div>
  );
};

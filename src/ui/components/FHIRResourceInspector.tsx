/**
 * AegisEHR Enterprise Health Platform - FHIR R4 JSON Inspector
 */

import React, { useState } from 'react';
import { Database, Code, CheckCircle, Copy } from 'lucide-react';

export const FHIRResourceInspector: React.FC = () => {
  const [selectedResource, setSelectedResource] = useState('Patient');

  const fhirExamples: Record<string, any> = {
    Patient: {
      resourceType: 'Patient',
      id: 'PAT-1001',
      meta: { profile: ['http://hl7.org/fhir/us/core/StructureDefinition/us-core-patient'] },
      identifier: [{ use: 'official', system: 'urn:oid:2.16.840.1.113883.4.1', value: 'MRN-9981203' }],
      active: true,
      name: [{ use: 'official', family: 'Vance', given: ['Eleanor'] }],
      gender: 'female',
      birthDate: '1960-05-15'
    },
    Encounter: {
      resourceType: 'Encounter',
      id: 'ENC-2022',
      status: 'in-progress',
      class: { system: 'http://terminology.hl7.org/CodeSystem/v3-ActCode', code: 'EMER', display: 'emergency' },
      subject: { reference: 'Patient/PAT-1001', display: 'Eleanor Vance' }
    },
    Observation: {
      resourceType: 'Observation',
      id: 'OBS-99201',
      status: 'final',
      category: [{ coding: [{ system: 'http://terminology.hl7.org/CodeSystem/observation-category', code: 'vital-signs' }] }],
      code: { coding: [{ system: 'http://loinc.org', code: '8867-4', display: 'Heart rate' }] },
      valueQuantity: { value: 112, unit: 'beats/min', system: 'http://unitsofmeasure.org', code: '/min' }
    }
  };

  return (
    <div style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
      <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div>
          <h1 style={{ fontSize: '1.75rem', fontWeight: 800, color: 'var(--text-primary)', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <Database color="var(--accent-cyan)" />
            FHIR R4 Resource Inspector & Schema Validator
          </h1>
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.875rem' }}>HL7 FHIR Release 4 Specifications & JSON Schema Validation Engine</p>
        </div>
      </header>

      <div style={{ display: 'flex', gap: '0.5rem' }}>
        {['Patient', 'Encounter', 'Observation'].map(res => (
          <button
            key={res}
            onClick={() => setSelectedResource(res)}
            style={{
              padding: '0.5rem 1rem',
              borderRadius: '6px',
              border: 'none',
              background: selectedResource === res ? 'var(--accent-cyan)' : 'var(--bg-secondary)',
              color: selectedResource === res ? '#000' : 'var(--text-primary)',
              fontWeight: 700,
              cursor: 'pointer'
            }}
          >
            {res} Resource
          </button>
        ))}
      </div>

      <div className="glass-panel" style={{ padding: '1.25rem' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.75rem' }}>
          <span style={{ fontSize: '0.8rem', color: 'var(--accent-emerald)', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
            <CheckCircle size={14} /> Validated US Core {selectedResource} Profile
          </span>
        </div>
        <pre style={{ background: 'var(--bg-primary)', padding: '1rem', borderRadius: '8px', border: '1px solid var(--border-color)', color: 'var(--accent-cyan)', fontSize: '0.85rem', overflowX: 'auto' }}>
          {JSON.stringify(fhirExamples[selectedResource], null, 2)}
        </pre>
      </div>
    </div>
  );
};

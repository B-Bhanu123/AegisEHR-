/**
 * AegisEHR Enterprise Health Platform - Telemedicine Video Hub
 */

import React, { useState } from 'react';
import { Video, Mic, MicOff, VideoOff, PhoneOff, MessageSquare, Send } from 'lucide-react';

export const TelemedicineHubView: React.FC = () => {
  const [isAudioMuted, setIsAudioMuted] = useState(false);
  const [isVideoOff, setIsVideoOff] = useState(false);
  const [chatMessages, setChatMessages] = useState([
    { sender: 'Patient', text: 'Doctor, I am experiencing slight dizziness today.', time: '11:15 AM' },
    { sender: 'Dr. Sarah', text: 'I am checking your recent vitals. Let us review your BP readings.', time: '11:16 AM' }
  ]);
  const [inputMsg, setInputMsg] = useState('');

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputMsg.trim()) return;
    setChatMessages([...chatMessages, { sender: 'Dr. Sarah', text: inputMsg, time: '11:17 AM' }]);
    setInputMsg('');
  };

  return (
    <div style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
      <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div>
          <h1 style={{ fontSize: '1.75rem', fontWeight: 800, color: 'var(--text-primary)', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <Video color="var(--accent-purple)" />
            Telemedicine Consultation Room
          </h1>
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.875rem' }}>WebRTC Encrypted Virtual Care & Real-Time Patient Assessment</p>
        </div>
      </header>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 340px', gap: '1.5rem' }}>
        {/* Video Frame & Controls */}
        <div className="glass-panel" style={{ height: '480px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', padding: '1.5rem', background: '#090d16', border: '1px solid var(--border-color)', position: 'relative' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', color: '#fff' }}>
            <span style={{ fontWeight: 700 }}>Active Session: Eleanor Vance (MRN-9981203)</span>
            <span className="badge badge-normal">ENCRYPTED HD</span>
          </div>

          <div style={{ textAlign: 'center', color: 'var(--accent-cyan)' }}>
            <Video size={64} style={{ opacity: isVideoOff ? 0.2 : 0.8 }} />
            <p style={{ marginTop: '0.5rem', color: 'var(--text-secondary)' }}>{isVideoOff ? 'Video Camera Muted' : 'Patient Video Stream Active'}</p>
          </div>

          {/* Video Action Controls */}
          <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem' }}>
            <button onClick={() => setIsAudioMuted(!isAudioMuted)} style={{ padding: '0.75rem', borderRadius: '50%', border: 'none', background: isAudioMuted ? 'var(--accent-rose)' : 'var(--bg-secondary)', color: '#fff', cursor: 'pointer' }}>
              {isAudioMuted ? <MicOff size={20} /> : <Mic size={20} />}
            </button>
            <button onClick={() => setIsVideoOff(!isVideoOff)} style={{ padding: '0.75rem', borderRadius: '50%', border: 'none', background: isVideoOff ? 'var(--accent-rose)' : 'var(--bg-secondary)', color: '#fff', cursor: 'pointer' }}>
              {isVideoOff ? <VideoOff size={20} /> : <Video size={20} />}
            </button>
            <button onClick={() => alert('Call Ended')} style={{ padding: '0.75rem', borderRadius: '50%', border: 'none', background: 'var(--accent-rose)', color: '#fff', cursor: 'pointer' }}>
              <PhoneOff size={20} />
            </button>
          </div>
        </div>

        {/* Clinical Telehealth Chat Panel */}
        <div className="glass-panel" style={{ display: 'flex', flexDirection: 'column', height: '480px', padding: '1rem' }}>
          <h3 style={{ fontSize: '0.95rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '0.75rem', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
            <MessageSquare size={16} /> Consultation Chat
          </h3>
          <div style={{ flex: 1, overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: '0.5rem', marginBottom: '0.75rem' }}>
            {chatMessages.map((msg, idx) => (
              <div key={idx} style={{ padding: '0.5rem 0.75rem', borderRadius: '6px', background: msg.sender === 'Patient' ? 'rgba(6, 182, 212, 0.1)' : 'rgba(59, 130, 246, 0.15)' }}>
                <div style={{ fontSize: '0.7rem', fontWeight: 700, color: 'var(--text-secondary)' }}>{msg.sender} • {msg.time}</div>
                <div style={{ fontSize: '0.8rem', color: 'var(--text-primary)', marginTop: '0.2rem' }}>{msg.text}</div>
              </div>
            ))}
          </div>
          <form onSubmit={handleSend} style={{ display: 'flex', gap: '0.5rem' }}>
            <input
              type="text"
              placeholder="Type chat message..."
              value={inputMsg}
              onChange={(e) => setInputMsg(e.target.value)}
              style={{ flex: 1, padding: '0.5rem', borderRadius: '6px', border: '1px solid var(--border-color)', background: 'var(--bg-primary)', color: 'var(--text-primary)', fontSize: '0.8rem' }}
            />
            <button type="submit" style={{ padding: '0.5rem', borderRadius: '6px', border: 'none', background: 'var(--accent-blue)', color: '#fff', cursor: 'pointer' }}>
              <Send size={16} />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

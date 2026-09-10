import React, { useState } from 'react';

export const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState(null); // 'success' | 'error'

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !email.includes('@')) {
      setStatus('error');
      return;
    }
    setStatus('success');
    setEmail('');
  };

  return (
    <section
      style={{
        padding: '100px 0',
        backgroundColor: '#0A0A0A',
        borderTop: '1px solid rgba(247, 246, 242, 0.08)'
      }}
    >
      <div className="container">
        <div
          style={{
            maxWidth: '680px',
            margin: '0 auto',
            textAlign: 'center'
          }}
        >
          <span className="archive-badge" style={{ marginBottom: '20px' }}>
            EARLY ACCESS PASS
          </span>

          <h2
            style={{
              fontFamily: 'Syne, sans-serif',
              fontSize: 'clamp(2rem, 5vw, 3.8rem)',
              fontWeight: 800,
              letterSpacing: '-0.02em',
              textTransform: 'uppercase',
              color: '#F7F6F2',
              marginBottom: '16px'
            }}
          >
            GET INSIDE THE ARCHIVE.
          </h2>

          <p
            style={{
              fontFamily: 'Space Grotesk, sans-serif',
              fontSize: '1.05rem',
              color: '#8E8E93',
              marginBottom: '36px',
              lineHeight: 1.5
            }}
          >
            New drops. Early access code. Things we probably won't post twice.
          </p>

          <form
            onSubmit={handleSubmit}
            style={{
              display: 'flex',
              gap: '12px',
              maxWidth: '520px',
              margin: '0 auto',
              flexDirection: 'row',
              flexWrap: 'wrap'
            }}
          >
            <input
              type="email"
              placeholder="ENTER YOUR EMAIL..."
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={{
                flexGrow: 1,
                minWidth: '240px',
                backgroundColor: '#121212',
                border: '1px solid rgba(247, 246, 242, 0.2)',
                color: '#F7F6F2',
                padding: '16px 20px',
                fontFamily: 'JetBrains Mono, monospace',
                fontSize: '0.85rem',
                outline: 'none'
              }}
            />
            <button type="submit" className="btn-primary">
              ENTER →
            </button>
          </form>

          {status === 'success' && (
            <p
              style={{
                marginTop: '16px',
                fontFamily: 'JetBrains Mono, monospace',
                fontSize: '0.8rem',
                color: '#4CAF50'
              }}
            >
              ✓ YOU ARE NOW ON THE ARCHIVE LIST. STAY TUNED FOR DROP 002.
            </p>
          )}

          {status === 'error' && (
            <p
              style={{
                marginTop: '16px',
                fontFamily: 'JetBrains Mono, monospace',
                fontSize: '0.8rem',
                color: '#E53935'
              }}
            >
              ⚠ PLEASE ENTER A VALID EMAIL ADDRESS.
            </p>
          )}
        </div>
      </div>
    </section>
  );
};

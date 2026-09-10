import React from 'react';
import { FiInstagram } from 'react-icons/fi';

export const SocialGrid = () => {
  const tiles = [
    { label: "CAMPAIGN / 001", tag: "@YRTARCHIVE" },
    { label: "FABRIC CLOSEUP", tag: "DROP 001" },
    { label: "MONOGRAM EMBROIDERY", tag: "DETAIL SPEC" },
    { label: "FIT DEMO", tag: "BOXY CUT" },
    { label: "BACK GRAPHIC", tag: "PRINT PROCESS" },
    { label: "BEHIND THE SCENES", tag: "YASH RAJ THAKUR" }
  ];

  return (
    <section style={{ padding: '80px 0', backgroundColor: '#0A0A0A' }}>
      <div className="container">
        <div
          style={{
            display: 'flex',
            alignItems: 'baseline',
            justifyContent: 'space-between',
            marginBottom: '32px',
            flexWrap: 'wrap',
            gap: '16px'
          }}
        >
          <div>
            <span className="archive-badge" style={{ marginBottom: '8px' }}>
              VISUAL FEED
            </span>
            <h2
              style={{
                fontFamily: 'Syne, sans-serif',
                fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)',
                fontWeight: 800,
                letterSpacing: '-0.02em',
                textTransform: 'uppercase',
                color: '#F7F6F2',
                margin: 0
              }}
            >
              FROM THE ARCHIVE
            </h2>
          </div>

          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              fontFamily: 'JetBrains Mono, monospace',
              fontSize: '0.85rem',
              color: '#F7F6F2',
              textDecoration: 'none'
            }}
          >
            <FiInstagram size={18} /> @YRTARCHIVE →
          </a>
        </div>

        {/* GRID */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(180px, 1fr))',
            gap: '16px'
          }}
        >
          {tiles.map((tile, idx) => (
            <div
              key={idx}
              style={{
                width: '100%',
                aspectRatio: '1/1',
                backgroundColor: '#141414',
                border: '1px solid rgba(247, 246, 242, 0.1)',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '16px',
                textAlign: 'center',
                position: 'relative'
              }}
            >
              <img
                src="/images/logo/yrt-logo.png"
                alt="YRT Monogram"
                style={{ width: '32px', opacity: 0.25, marginBottom: '8px' }}
              />
              <span
                style={{
                  fontFamily: 'Syne, sans-serif',
                  fontWeight: 700,
                  fontSize: '0.75rem',
                  letterSpacing: '0.08em',
                  color: '#8E8E93'
                }}
              >
                {tile.label}
              </span>
              <span
                style={{
                  fontFamily: 'JetBrains Mono, monospace',
                  fontSize: '0.62rem',
                  color: '#55555B',
                  marginTop: '4px'
                }}
              >
                {tile.tag}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

import React from 'react';

export const BrandStatement = () => {
  return (
    <section
      style={{
        padding: '100px 0',
        backgroundColor: '#0A0A0A',
        borderBottom: '1px solid rgba(247, 246, 242, 0.08)'
      }}
    >
      <div className="container">
        <div style={{ maxWidth: '1000px', margin: '0 auto', textAlign: 'center' }}>
          <span className="archive-badge" style={{ marginBottom: '24px' }}>
            BRAND PHILOSOPHY
          </span>

          <h2
            style={{
              fontFamily: 'Syne, sans-serif',
              fontSize: 'clamp(2.5rem, 6.5vw, 5.5rem)',
              fontWeight: 800,
              lineHeight: 1,
              letterSpacing: '-0.02em',
              color: '#F7F6F2',
              marginBottom: '32px',
              textTransform: 'uppercase'
            }}
          >
            NOT ANOTHER<br />
            CLOTHING BRAND.
          </h2>

          <p
            style={{
              fontFamily: 'Space Grotesk, sans-serif',
              fontSize: 'clamp(1.1rem, 2.2vw, 1.8rem)',
              lineHeight: 1.4,
              color: '#8E8E93',
              maxWidth: '820px',
              margin: '0 auto 40px auto',
              fontWeight: 400
            }}
          >
            YRT Archive is a visual language built through T-shirts. Designed in India for individuals who reject mass-produced simplicity. Every piece is a numbered archive entry.
          </p>

          <div
            style={{
              display: 'inline-flex',
              gap: '32px',
              fontFamily: 'JetBrains Mono, monospace',
              fontSize: '0.8rem',
              color: '#55555B',
              textTransform: 'uppercase',
              letterSpacing: '0.12em',
              flexWrap: 'wrap',
              justifyContent: 'center'
            }}
          >
            <span>[ 100% HEAVYWEIGHT COTTON ]</span>
            <span>[ LIMITED QUANTITY DROPS ]</span>
            <span>[ ORIGINAL GRAPHICS ]</span>
          </div>
        </div>
      </div>
    </section>
  );
};

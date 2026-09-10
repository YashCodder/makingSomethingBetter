import React from 'react';

export const About = () => {
  const sections = [
    {
      title: "THE IDEA",
      text: "YRT Archive was established by Yash Raj Thakur as a response to repetitive streetwear drops. We treat every T-shirt release as a visual digital artifact rather than seasonal commercial apparel."
    },
    {
      title: "THE FIT",
      text: "Engineered boxy drop-shoulder silhouettes. We spent months testing pattern cuts across heavy 240–280 GSM cotton fabrics to achieve an uncompromising drape that holds structure after every wash."
    },
    {
      title: "THE GRAPHICS",
      text: "Original typography, technical coordinates, high-density prints and precision embroidered hanger monograms. No stock vectors or trend-chasing graphics."
    },
    {
      title: "THE PROCESS",
      text: "Milled, dyed, printed, and assembled in India. Small batch releases to eliminate deadstock and preserve true exclusivity."
    },
    {
      title: "THE PEOPLE",
      text: "Built for people who don't dress for everyone. Independent youth, designers, visual artists, and streetwear collectors."
    },
    {
      title: "THE FUTURE",
      text: "Continuing to evolve the archive through limited numbered drops. YRT Archive will remain strictly T-shirt first."
    }
  ];

  return (
    <div style={{ padding: '60px 0 100px 0' }}>
      <div className="container" style={{ maxWidth: '900px', margin: '0 auto' }}>
        {/* HEADER */}
        <div style={{ marginBottom: '48px', textAlign: 'center' }}>
          <span className="archive-badge" style={{ marginBottom: '16px' }}>
            FOUNDER & MANIFESTO
          </span>
          <h1
            style={{
              fontFamily: 'Syne, sans-serif',
              fontSize: 'clamp(2.5rem, 6.5vw, 5rem)',
              fontWeight: 800,
              letterSpacing: '-0.02em',
              textTransform: 'uppercase',
              margin: '0 0 16px 0',
              color: '#F7F6F2'
            }}
          >
            YRT ARCHIVE
          </h1>
          <p style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '0.9rem', color: '#8E8E93' }}>
            FOUNDED BY YASH RAJ THAKUR / EST. 2026
          </p>
        </div>

        {/* HERO PLACEHOLDER CONTAINER */}
        <div
          style={{
            width: '100%',
            aspectRatio: '16/9',
            backgroundColor: '#141414',
            border: '1px solid rgba(247, 246, 242, 0.12)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: '64px',
            position: 'relative'
          }}
        >
          <img src="/images/logo/yrt-logo.png" alt="YRT Logo" style={{ width: '80px', opacity: 0.35, marginBottom: '16px' }} />
          <span style={{ fontFamily: 'Syne', fontWeight: 800, fontSize: '1rem', color: '#8E8E93', letterSpacing: '0.1em' }}>
            BRAND PORTRAIT / ARCHIVE FILM PLACEHOLDER
          </span>
          <span style={{ fontFamily: 'JetBrains Mono', fontSize: '0.7rem', color: '#55555B', marginTop: '4px' }}>
            /public/images/campaign/about-portrait.jpg
          </span>
        </div>

        {/* MANIFESTO QUOTE */}
        <div
          style={{
            borderLeft: '2px solid #F7F6F2',
            paddingLeft: '24px',
            marginBottom: '80px'
          }}
        >
          <p
            style={{
              fontFamily: 'Space Grotesk, sans-serif',
              fontSize: 'clamp(1.2rem, 2.5vw, 1.8rem)',
              fontWeight: 600,
              lineHeight: 1.4,
              color: '#F7F6F2',
              margin: 0
            }}
          >
            "YRT Archive is a T-shirt-first label built around original graphics, silhouettes and ideas."
          </p>
        </div>

        {/* SECTIONS GRID */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(360px, 1fr))', gap: '40px' }}>
          {sections.map((sec, idx) => (
            <div
              key={idx}
              style={{
                backgroundColor: '#121212',
                border: '1px solid rgba(247, 246, 242, 0.08)',
                padding: '32px'
              }}
            >
              <div style={{ fontFamily: 'JetBrains Mono', fontSize: '0.7rem', color: '#8E8E93', marginBottom: '8px' }}>
                0{idx + 1} / PERSPECTIVE
              </div>
              <h3 style={{ fontFamily: 'Syne', fontWeight: 800, fontSize: '1.2rem', letterSpacing: '0.08em', marginBottom: '12px', color: '#F7F6F2' }}>
                {sec.title}
              </h3>
              <p style={{ fontFamily: 'Space Grotesk', fontSize: '0.92rem', color: '#8E8E93', lineHeight: 1.6, margin: 0 }}>
                {sec.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

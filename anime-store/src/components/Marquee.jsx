import React from 'react';

export const Marquee = () => {
  const items = [
    "YRT ARCHIVE",
    "T-SHIRTS ONLY",
    "MADE FOR THE FEW",
    "DROP 001",
    "INDEPENDENT INDIAN STREETWEAR",
    "YASH RAJ THAKUR",
    "LIMITED RELEASE"
  ];

  return (
    <div
      style={{
        width: '100%',
        backgroundColor: '#F7F6F2',
        color: '#0A0A0A',
        overflow: 'hidden',
        whiteSpace: 'nowrap',
        padding: '14px 0',
        borderTop: '1px solid #0A0A0A',
        borderBottom: '1px solid #0A0A0A',
        margin: '20px 0 60px 0'
      }}
    >
      <div
        className="marquee-track"
        style={{
          display: 'inline-flex',
          gap: '24px',
          animation: 'marqueeScroll 25s linear infinite'
        }}
      >
        {[...items, ...items, ...items, ...items].map((text, idx) => (
          <span
            key={idx}
            style={{
              fontFamily: 'Syne, sans-serif',
              fontWeight: 800,
              fontSize: '0.9rem',
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '24px'
            }}
          >
            {text}
            <span style={{ opacity: 0.35, fontSize: '0.7rem' }}>/</span>
          </span>
        ))}
      </div>

      <style>{`
        @keyframes marqueeScroll {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  );
};

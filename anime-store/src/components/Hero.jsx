import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FiArrowRight, FiArrowDown } from 'react-icons/fi';

export const Hero = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [hasVideo, setHasVideo] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const { innerWidth, innerHeight } = window;
      const x = (e.clientX / innerWidth - 0.5) * 2; // -1 to 1
      const y = (e.clientY / innerHeight - 0.5) * 2; // -1 to 1
      setMousePos({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section
      style={{
        position: 'relative',
        minHeight: '100vh',
        backgroundColor: '#070708',
        color: '#F7F6F2',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        paddingTop: '24px',
        paddingBottom: '40px'
      }}
    >
      {/* -------------------------------------------------------------
          LAYER 1 & 2: ATMOSPHERIC CAMPAIGN BACKDROP & SCANLINES
      ------------------------------------------------------------- */}
      <div className="hero-scanline" />

      {/* Atmospheric Glowing Radial Backdrop */}
      <div
        style={{
          position: 'absolute',
          top: '20%',
          left: '10%',
          width: '600px',
          height: '600px',
          background: 'radial-gradient(circle, rgba(255, 255, 255, 0.05) 0%, rgba(20, 20, 25, 0.2) 45%, transparent 70%)',
          filter: 'blur(60px)',
          pointerEvents: 'none',
          zIndex: 1,
          transform: `translate3d(${mousePos.x * -20}px, ${mousePos.y * -20}px, 0)`,
          transition: 'transform 0.4s ease-out'
        }}
      />

      {/* Streetwear Graphic Grid Pattern Overlay */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: `
            linear-gradient(to right, rgba(255, 255, 255, 0.02) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255, 255, 255, 0.02) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px',
          pointerEvents: 'none',
          zIndex: 1
        }}
      />

      {/* -------------------------------------------------------------
          LAYER 3: GIANT LOW-OPACITY UNBOUNDED TYPOGRAPHY ("ARCHIVE")
      ------------------------------------------------------------- */}
      <div
        style={{
          position: 'absolute',
          top: '38%',
          left: '50%',
          transform: `translate(-50%, -50%) translate3d(${mousePos.x * -16}px, ${mousePos.y * -16}px, 0)`,
          fontFamily: 'Unbounded, sans-serif',
          fontWeight: 900,
          fontSize: 'clamp(7rem, 26vw, 30rem)',
          letterSpacing: '-0.06em',
          color: 'rgba(247, 246, 242, 0.045)',
          userSelect: 'none',
          pointerEvents: 'none',
          whiteSpace: 'nowrap',
          zIndex: 1,
          transition: 'transform 0.25s cubic-bezier(0.16, 1, 0.3, 1)'
        }}
      >
        ARCHIVE
      </div>

      {/* -------------------------------------------------------------
          LAYER 4: EDITORIAL GRAPHIC & MONOCHROMATIC SCULPTURE
      ------------------------------------------------------------- */}
      <div
        style={{
          position: 'absolute',
          top: '12%',
          right: '-2%',
          width: 'clamp(340px, 48vw, 800px)',
          height: 'clamp(340px, 48vw, 800px)',
          pointerEvents: 'none',
          zIndex: 2,
          transform: `translate3d(${mousePos.x * 20}px, ${mousePos.y * 20}px, 0) rotate(${mousePos.x * 3}deg)`,
          transition: 'transform 0.35s cubic-bezier(0.16, 1, 0.3, 1)',
          opacity: 0.9
        }}
      >
        <svg viewBox="0 0 500 500" width="100%" height="100%">
          <defs>
            <linearGradient id="metalGradientV2" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#3A3A42" />
              <stop offset="25%" stopColor="#121215" />
              <stop offset="50%" stopColor="#8E8E93" />
              <stop offset="75%" stopColor="#18181C" />
              <stop offset="100%" stopColor="#4A4A52" />
            </linearGradient>

            <linearGradient id="glowGleam" x1="100%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="rgba(247, 246, 242, 0.6)" />
              <stop offset="40%" stopColor="rgba(247, 246, 242, 0.05)" />
              <stop offset="100%" stopColor="rgba(247, 246, 242, 0.3)" />
            </linearGradient>

            <filter id="shadowGlowV2" x="-20%" y="-20%" width="140%" height="140%">
              <feDropShadow dx="0" dy="24" stdDeviation="36" floodColor="#000000" floodOpacity="0.9" />
            </filter>
          </defs>

          {/* 3D Distorted Metallic Ribbon */}
          <path
            d="M 110 90 Q 330 10 420 150 T 250 390 Q 130 450 70 310 T 230 170 Q 350 130 430 310"
            fill="none"
            stroke="url(#metalGradientV2)"
            strokeWidth="64"
            strokeLinecap="round"
            filter="url(#shadowGlowV2)"
          />

          <path
            d="M 110 90 Q 330 10 420 150 T 250 390 Q 130 450 70 310 T 230 170 Q 350 130 430 310"
            fill="none"
            stroke="url(#glowGleam)"
            strokeWidth="14"
            strokeLinecap="round"
          />

          {/* Precision Target Crosshairs & Monogram Badge */}
          <circle cx="250" cy="250" r="160" fill="none" stroke="rgba(247, 246, 242, 0.08)" strokeWidth="1" strokeDasharray="6 12" />
          <circle cx="250" cy="250" r="80" fill="none" stroke="rgba(247, 246, 242, 0.05)" strokeWidth="1" />
          <line x1="90" y1="250" x2="410" y2="250" stroke="rgba(247, 246, 242, 0.1)" strokeWidth="1" />
          <line x1="250" y1="90" x2="250" y2="410" stroke="rgba(247, 246, 242, 0.1)" strokeWidth="1" />
        </svg>
      </div>

      {/* -------------------------------------------------------------
          LAYER 5: DIGITAL GLITCH & MICRO TECHNICAL LABELS
      ------------------------------------------------------------- */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          pointerEvents: 'none',
          zIndex: 3,
          padding: '24px'
        }}
      >
        {/* Top Right Crosshair & Coordinates */}
        <div style={{ position: 'absolute', top: 32, right: 32, fontFamily: 'JetBrains Mono, monospace', fontSize: '0.68rem', color: '#8E8E93', textAlign: 'right' }}>
          <div style={{ color: '#F7F6F2', fontWeight: 600 }}>[ LAT: 28.6139° N // LON: 77.2090° E ]</div>
          <div style={{ color: '#55555B', marginTop: '3px' }}>STREETWEAR_PROTOCOL // DROP_001</div>
        </div>

        {/* Left Side Micro-Grid Label */}
        <div style={{ position: 'absolute', top: '42%', left: 24, transform: 'translateY(-50%) rotate(-90deg)', transformOrigin: 'left center', fontFamily: 'JetBrains Mono, monospace', fontSize: '0.65rem', color: '#55555B', letterSpacing: '0.25em' }}>
          YRT_ARCHIVE // T-SHIRTS ONLY // EST.2026
        </div>
      </div>

      {/* -------------------------------------------------------------
          FOREGROUND EDITORIAL CONTENT & COMPOSITION
      ------------------------------------------------------------- */}
      <div className="container" style={{ position: 'relative', zIndex: 4, width: '100%' }}>
        {/* TOP META ROW */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginBottom: '28px',
            transform: `translate3d(${mousePos.x * 2}px, ${mousePos.y * 2}px, 0)`,
            transition: 'transform 0.2s ease-out'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <span className="archive-badge" style={{ backgroundColor: '#141418', borderColor: 'rgba(247, 246, 242, 0.25)' }}>
              DROP 001 / INITIAL RELEASE
            </span>
            <span
              style={{
                fontFamily: 'JetBrains Mono, monospace',
                fontSize: '0.75rem',
                color: '#8E8E93',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px'
              }}
            >
              <span style={{ width: '7px', height: '7px', backgroundColor: '#4CAF50', borderRadius: '50%', display: 'inline-block', boxShadow: '0 0 10px #4CAF50' }} />
              ONLINE ARCHIVE CATALOGUE
            </span>
          </div>

          <span
            style={{
              fontFamily: 'JetBrains Mono, monospace',
              fontSize: '0.78rem',
              color: '#8E8E93',
              letterSpacing: '0.08em'
            }}
          >
            FOUNDER: YASH RAJ THAKUR
          </span>
        </div>

        {/* MAIN EDITORIAL TYPOGRAPHY COMPOSITION */}
        <div
          style={{
            transform: `translate3d(${mousePos.x * 5}px, ${mousePos.y * 5}px, 0)`,
            transition: 'transform 0.25s ease-out',
            marginBottom: '36px'
          }}
        >
          {/* HUGE UNBOUNDED / OUTFIT DISPLAY HEADER */}
          <h1
            style={{
              fontFamily: 'Unbounded, sans-serif',
              fontSize: 'clamp(3.2rem, 11vw, 10rem)',
              fontWeight: 900,
              lineHeight: 0.88,
              letterSpacing: '-0.04em',
              textTransform: 'uppercase',
              margin: '0 0 28px 0',
              color: '#F7F6F2',
              textShadow: '0 12px 48px rgba(0,0,0,0.9)'
            }}
          >
            WEAR THE<br />
            <span style={{ color: '#F7F6F2', background: 'linear-gradient(180deg, #FFFFFF 0%, #B0B0B8 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
              ARCHIVE.
            </span>
          </h1>

          {/* ASYMMETRIC SUB-ROW */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '36px',
              alignItems: 'end'
            }}
          >
            {/* MANIFESTO COPY */}
            <div style={{ maxWidth: '540px' }}>
              <p
                style={{
                  fontFamily: 'Outfit, Space Grotesk, sans-serif',
                  fontSize: 'clamp(1.1rem, 2.2vw, 1.45rem)',
                  lineHeight: 1.4,
                  color: '#8E8E93',
                  margin: '0 0 16px 0',
                  fontWeight: 600
                }}
              >
                Original T-shirts. Limited drops. Built from ideas.
              </p>
              <div
                style={{
                  fontFamily: 'JetBrains Mono, monospace',
                  fontSize: '0.75rem',
                  color: '#55555B',
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase'
                }}
              >
                Independent Indian Streetwear / 240–280 GSM Heavyweight Cotton
              </div>
            </div>

            {/* EDITORIAL RECTANGULAR CTAS */}
            <div
              style={{
                display: 'flex',
                gap: '16px',
                flexWrap: 'wrap',
                alignItems: 'center'
              }}
            >
              <Link to="/shop" className="btn-hero-primary" data-cursor="EXPLORE">
                SHOP DROP 001 <FiArrowRight size={16} />
              </Link>
              <a href="#current-drop" className="btn-hero-secondary" data-cursor="VIEW">
                EXPLORE ARCHIVE
              </a>
            </div>
          </div>
        </div>

        {/* -------------------------------------------------------------
            DARK CAMPAIGN GRAPHIC & MEDIA CONTAINER
        ------------------------------------------------------------- */}
        <div
          style={{
            marginTop: '20px',
            width: '100%',
            height: 'clamp(280px, 40vh, 520px)',
            backgroundColor: '#101014',
            border: '1px solid rgba(247, 246, 242, 0.18)',
            position: 'relative',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            overflow: 'hidden',
            boxShadow: '0 24px 80px rgba(0,0,0,0.85)',
            backgroundImage: `
              radial-gradient(circle at 50% 50%, rgba(30, 30, 35, 0.8) 0%, rgba(10, 10, 12, 0.95) 100%),
              linear-gradient(to right, rgba(255, 255, 255, 0.03) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(255, 255, 255, 0.03) 1px, transparent 1px)
            `,
            backgroundSize: '100% 100%, 28px 28px, 28px 28px'
          }}
        >
          {/* VIDEO OR HIGH-CONTRAST CAMPAIGN GRAPHIC DISPLAY */}
          {hasVideo ? (
            <video
              src="/images/campaign/hero-video.mp4"
              autoPlay
              muted
              loop
              playsInline
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          ) : (
            <div style={{ textAlign: 'center', padding: '32px', maxWidth: '540px', position: 'relative', zIndex: 2 }}>
              <img
                src="/images/logo/yrt-logo.png"
                alt="YRT Monogram"
                style={{ width: '80px', height: 'auto', opacity: 0.5, marginBottom: '18px', filter: 'brightness(1.2)' }}
              />
              <div
                style={{
                  fontFamily: 'Unbounded, sans-serif',
                  fontWeight: 800,
                  fontSize: '1.2rem',
                  letterSpacing: '0.12em',
                  color: '#F7F6F2',
                  marginBottom: '8px',
                  textTransform: 'uppercase'
                }}
              >
                CAMPAIGN FILM / PHOTOGRAPHY SLOT
              </div>
              <p
                style={{
                  fontFamily: 'JetBrains Mono, monospace',
                  fontSize: '0.75rem',
                  color: '#8E8E93',
                  lineHeight: 1.6,
                  margin: 0
                }}
              >
                DROP 001 EDITORIAL CAMPAIGN CONTAINER
                <br />
                <span style={{ color: '#55555B' }}>PATH: /public/images/campaign/hero-video.mp4</span>
              </p>
            </div>
          )}

          {/* Spec Overlay Labels */}
          <div style={{ position: 'absolute', top: 16, left: 16, fontFamily: 'JetBrains Mono', fontSize: '0.65rem', color: '#8E8E93' }}>
            [ CAMPAIGN_ASSET_CONTAINER ]
          </div>
          <div style={{ position: 'absolute', top: 16, right: 16, fontFamily: 'JetBrains Mono', fontSize: '0.65rem', color: '#8E8E93' }}>
            FORMAT: 4K / WEBP / MP4
          </div>
        </div>
      </div>

      {/* -------------------------------------------------------------
          BOTTOM SCROLL INDICATOR
      ------------------------------------------------------------- */}
      <div
        className="container"
        style={{
          position: 'relative',
          zIndex: 4,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginTop: '32px',
          borderTop: '1px solid rgba(247, 246, 242, 0.1)',
          paddingTop: '20px'
        }}
      >
        <div
          style={{
            fontFamily: 'JetBrains Mono, monospace',
            fontSize: '0.75rem',
            color: '#8E8E93',
            display: 'flex',
            alignItems: 'center',
            gap: '8px'
          }}
        >
          <span>ARCHIVE / 001</span>
          <span style={{ color: '#55555B' }}>—</span>
          <span>EST. 2026</span>
        </div>

        <a
          href="#current-drop"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            fontFamily: 'JetBrains Mono, monospace',
            fontSize: '0.75rem',
            color: '#F7F6F2',
            textDecoration: 'none',
            letterSpacing: '0.1em'
          }}
        >
          SCROLL TO EXPLORE <FiArrowDown className="floating-arrow" style={{ animation: 'floatMuted 2s infinite' }} />
        </a>
      </div>
    </section>
  );
};

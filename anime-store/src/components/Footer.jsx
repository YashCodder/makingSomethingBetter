import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { SizeGuideModal } from './SizeGuideModal';

export const Footer = () => {
  const [sizeGuideOpen, setSizeGuideOpen] = useState(false);

  return (
    <footer
      style={{
        backgroundColor: '#0A0A0A',
        borderTop: '1px solid rgba(247, 246, 242, 0.12)',
        paddingTop: '80px',
        paddingBottom: '40px',
        color: '#F7F6F2'
      }}
    >
      <div className="container">
        {/* TOP BRAND ROW */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            gap: '48px',
            marginBottom: '64px'
          }}
        >
          {/* BRAND COL */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px' }}>
              <img
                src="/images/logo/yrt-logo.png"
                alt="YRT ARCHIVE"
                style={{ width: '44px', height: 'auto' }}
              />
              <span
                style={{
                  fontFamily: 'Syne, sans-serif',
                  fontWeight: 800,
                  fontSize: '1.2rem',
                  letterSpacing: '0.12em'
                }}
              >
                YRT ARCHIVE
              </span>
            </div>
            <p
              style={{
                fontFamily: 'Space Grotesk, sans-serif',
                fontSize: '0.9rem',
                color: '#8E8E93',
                lineHeight: 1.6,
                maxWidth: '320px'
              }}
            >
              Independent streetwear label focused exclusively on premium boxy T-shirts. Designed and crafted in India.
            </p>
          </div>

          {/* EXPLORE LINKS */}
          <div>
            <h4
              style={{
                fontFamily: 'Syne, sans-serif',
                fontSize: '0.85rem',
                letterSpacing: '0.15em',
                color: '#F7F6F2',
                marginBottom: '20px'
              }}
            >
              EXPLORE
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <Link to="/shop" style={{ color: '#8E8E93', textDecoration: 'none', fontFamily: 'Space Grotesk', fontSize: '0.9rem' }}>SHOP ALL T-SHIRTS</Link>
              <Link to="/shop?drop=DROP+001" style={{ color: '#8E8E93', textDecoration: 'none', fontFamily: 'Space Grotesk', fontSize: '0.9rem' }}>DROP 001</Link>
              <Link to="/about" style={{ color: '#8E8E93', textDecoration: 'none', fontFamily: 'Space Grotesk', fontSize: '0.9rem' }}>ABOUT BRAND</Link>
              <Link to="/wishlist" style={{ color: '#8E8E93', textDecoration: 'none', fontFamily: 'Space Grotesk', fontSize: '0.9rem' }}>SAVED WISHLIST</Link>
              <Link to="/track-order" style={{ color: '#8E8E93', textDecoration: 'none', fontFamily: 'Space Grotesk', fontSize: '0.9rem' }}>TRACK ORDER</Link>
            </div>
          </div>

          {/* CLIENT CARE LINKS */}
          <div>
            <h4
              style={{
                fontFamily: 'Syne, sans-serif',
                fontSize: '0.85rem',
                letterSpacing: '0.15em',
                color: '#F7F6F2',
                marginBottom: '20px'
              }}
            >
              CLIENT CARE
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <button
                onClick={() => setSizeGuideOpen(true)}
                style={{
                  background: 'none',
                  border: 'none',
                  color: '#8E8E93',
                  fontFamily: 'Space Grotesk',
                  fontSize: '0.9rem',
                  cursor: 'pointer',
                  textAlign: 'left',
                  padding: 0
                }}
              >
                SIZE GUIDE
              </button>
              <a href="#shipping" onClick={(e) => { e.preventDefault(); alert("Shipping Policy: Express delivery across India within 3-5 business days."); }} style={{ color: '#8E8E93', textDecoration: 'none', fontFamily: 'Space Grotesk', fontSize: '0.9rem' }}>SHIPPING INFORMATION</a>
              <a href="#returns" onClick={(e) => { e.preventDefault(); alert("Returns Policy: 7-day exchange for sizing adjustments."); }} style={{ color: '#8E8E93', textDecoration: 'none', fontFamily: 'Space Grotesk', fontSize: '0.9rem' }}>RETURNS & EXCHANGES</a>
              <a href="#faq" onClick={(e) => { e.preventDefault(); alert("FAQ: All T-shirts are 100% heavyweight organic cotton pre-shrunk."); }} style={{ color: '#8E8E93', textDecoration: 'none', fontFamily: 'Space Grotesk', fontSize: '0.9rem' }}>FREQUENTLY ASKED QUESTIONS</a>
              <a href="mailto:support@yrtarchive.com" style={{ color: '#8E8E93', textDecoration: 'none', fontFamily: 'Space Grotesk', fontSize: '0.9rem' }}>CONTACT SUPPORT</a>
            </div>
          </div>

          {/* BRAND METADATA */}
          <div>
            <h4
              style={{
                fontFamily: 'Syne, sans-serif',
                fontSize: '0.85rem',
                letterSpacing: '0.15em',
                color: '#F7F6F2',
                marginBottom: '20px'
              }}
            >
              LOCATION & IDENTIFIER
            </h4>
            <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '0.78rem', color: '#8E8E93', lineHeight: 1.8 }}>
              <div>FOUNDER: YASH RAJ THAKUR</div>
              <div>ORIGIN: INDIA</div>
              <div>CATEGORY: T-SHIRTS ONLY</div>
              <div>STATUS: DROP 001 LIVE</div>
              <div>INSTAGRAM: @YRTARCHIVE</div>
            </div>
          </div>
        </div>

        {/* BOTTOM METADATA BAR */}
        <div
          style={{
            borderTop: '1px solid rgba(247, 246, 242, 0.08)',
            paddingTop: '32px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '16px',
            fontFamily: 'JetBrains Mono, monospace',
            fontSize: '0.75rem',
            color: '#55555B'
          }}
        >
          <div>YRT ARCHIVE © 2026 — YRT = YASH RAJ THAKUR</div>
          <div style={{ display: 'flex', gap: '20px' }}>
            <span>TERMS & CONDITIONS</span>
            <span>PRIVACY POLICY</span>
            <span>REFUND POLICY</span>
          </div>
        </div>
      </div>

      <SizeGuideModal isOpen={sizeGuideOpen} onClose={() => setSizeGuideOpen(false)} />
    </footer>
  );
};

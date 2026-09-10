import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FiSearch, FiShoppingBag, FiHeart, FiMenu, FiX, FiUser } from 'react-icons/fi';
import { useCart } from '../context/CartContext';
import { useWishlist } from '../context/WishlistContext';

export const Header = ({ onOpenSearch }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { totalCount, setIsCartOpen } = useCart();
  const { wishlist } = useWishlist();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  return (
    <header
      style={{
        position: 'sticky',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        height: scrolled ? '64px' : '80px',
        backgroundColor: scrolled ? 'rgba(10, 10, 10, 0.92)' : 'transparent',
        backdropFilter: scrolled ? 'blur(12px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(247, 246, 242, 0.08)' : '1px solid transparent',
        transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
        display: 'flex',
        alignItems: 'center'
      }}
    >
      <div
        className="container"
        style={{
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between'
        }}
      >
        {/* LEFT: BRAND LOGO */}
        <Link
          to="/"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
            textDecoration: 'none',
            color: '#F7F6F2'
          }}
        >
          <img
            src="/images/logo/yrt-logo.png"
            alt="YRT ARCHIVE"
            style={{
              height: scrolled ? '36px' : '44px',
              width: 'auto',
              transition: 'all 0.3s ease'
            }}
          />
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <span
              style={{
                fontFamily: 'Syne, sans-serif',
                fontWeight: 800,
                fontSize: scrolled ? '0.95rem' : '1.1rem',
                letterSpacing: '0.12em',
                lineHeight: 1,
                transition: 'all 0.3s ease'
              }}
            >
              YRT ARCHIVE
            </span>
            <span
              style={{
                fontFamily: 'JetBrains Mono, monospace',
                fontSize: '0.6rem',
                letterSpacing: '0.15em',
                color: '#8E8E93',
                marginTop: '3px'
              }}
            >
              T-SHIRTS ONLY
            </span>
          </div>
        </Link>

        {/* CENTER: DESKTOP NAV */}
        <nav
          className="desktop-nav"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '36px'
          }}
        >
          <Link
            to="/shop"
            style={{
              fontFamily: 'Space Grotesk, sans-serif',
              fontWeight: 600,
              fontSize: '0.85rem',
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              color: location.pathname === '/shop' ? '#F7F6F2' : '#8E8E93',
              textDecoration: 'none',
              transition: 'color 0.2s ease'
            }}
          >
            SHOP
          </Link>
          <Link
            to="/shop?drop=DROP+001"
            style={{
              fontFamily: 'Space Grotesk, sans-serif',
              fontWeight: 600,
              fontSize: '0.85rem',
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              color: location.search.includes('drop=DROP+001') ? '#F7F6F2' : '#8E8E93',
              textDecoration: 'none',
              transition: 'color 0.2s ease'
            }}
          >
            DROP 001
          </Link>
          <Link
            to="/about"
            style={{
              fontFamily: 'Space Grotesk, sans-serif',
              fontWeight: 600,
              fontSize: '0.85rem',
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              color: location.pathname === '/about' ? '#F7F6F2' : '#8E8E93',
              textDecoration: 'none',
              transition: 'color 0.2s ease'
            }}
          >
            ABOUT
          </Link>
        </nav>

        {/* RIGHT: ACTIONS */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '20px'
          }}
        >
          <button
            onClick={onOpenSearch}
            aria-label="Search"
            style={{
              background: 'none',
              border: 'none',
              color: '#F7F6F2',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              fontSize: '0.85rem',
              fontFamily: 'JetBrains Mono, monospace'
            }}
          >
            <FiSearch size={18} />
            <span className="desktop-only" style={{ color: '#8E8E93', fontSize: '0.75rem' }}>SEARCH</span>
          </button>

          <Link
            to="/wishlist"
            aria-label="Wishlist"
            style={{
              color: wishlist.length > 0 ? '#F7F6F2' : '#8E8E93',
              display: 'flex',
              alignItems: 'center',
              position: 'relative',
              textDecoration: 'none'
            }}
          >
            <FiHeart size={18} />
            {wishlist.length > 0 && (
              <span
                style={{
                  position: 'absolute',
                  top: '-6px',
                  right: '-8px',
                  backgroundColor: '#F7F6F2',
                  color: '#0A0A0A',
                  fontSize: '0.6rem',
                  fontWeight: 700,
                  width: '14px',
                  height: '14px',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
              >
                {wishlist.length}
              </span>
            )}
          </Link>

          <Link
            to="/track-order"
            className="desktop-only"
            aria-label="Account / Track Order"
            style={{
              color: '#8E8E93',
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              textDecoration: 'none',
              fontSize: '0.75rem',
              fontFamily: 'JetBrains Mono, monospace'
            }}
          >
            <FiUser size={18} />
          </Link>

          <button
            onClick={() => setIsCartOpen(true)}
            aria-label="Cart"
            style={{
              background: 'none',
              border: 'none',
              color: '#F7F6F2',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              position: 'relative'
            }}
          >
            <FiShoppingBag size={19} />
            <span
              style={{
                fontFamily: 'JetBrains Mono, monospace',
                fontSize: '0.8rem',
                fontWeight: 600,
                color: '#F7F6F2'
              }}
            >
              [{totalCount}]
            </span>
          </button>

          {/* MOBILE MENU TOGGLE */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="mobile-toggle"
            aria-label="Toggle Navigation Menu"
            style={{
              background: 'none',
              border: 'none',
              color: '#F7F6F2',
              cursor: 'pointer',
              display: 'none', // Managed via CSS
              alignItems: 'center'
            }}
          >
            {mobileMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
      </div>

      {/* MOBILE MENU OVERLAY */}
      {mobileMenuOpen && (
        <div
          style={{
            position: 'fixed',
            top: scrolled ? '64px' : '80px',
            left: 0,
            right: 0,
            bottom: 0,
            height: 'calc(100vh - 80px)',
            backgroundColor: '#0A0A0A',
            zIndex: 999,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            padding: '40px 24px',
            borderTop: '1px solid rgba(247, 246, 242, 0.1)'
          }}
        >
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            <Link
              to="/shop"
              style={{
                fontFamily: 'Syne, sans-serif',
                fontSize: '1.8rem',
                fontWeight: 800,
                color: '#F7F6F2',
                textDecoration: 'none'
              }}
            >
              SHOP ALL T-SHIRTS
            </Link>
            <Link
              to="/shop?drop=DROP+001"
              style={{
                fontFamily: 'Syne, sans-serif',
                fontSize: '1.8rem',
                fontWeight: 800,
                color: '#F7F6F2',
                textDecoration: 'none'
              }}
            >
              DROP 001
            </Link>
            <Link
              to="/about"
              style={{
                fontFamily: 'Syne, sans-serif',
                fontSize: '1.8rem',
                fontWeight: 800,
                color: '#F7F6F2',
                textDecoration: 'none'
              }}
            >
              ABOUT BRAND
            </Link>
            <Link
              to="/wishlist"
              style={{
                fontFamily: 'Space Grotesk, sans-serif',
                fontSize: '1.2rem',
                color: '#8E8E93',
                textDecoration: 'none'
              }}
            >
              WISHLIST ({wishlist.length})
            </Link>
            <Link
              to="/track-order"
              style={{
                fontFamily: 'Space Grotesk, sans-serif',
                fontSize: '1.2rem',
                color: '#8E8E93',
                textDecoration: 'none'
              }}
            >
              TRACK ORDER
            </Link>
          </div>

          <div
            style={{
              fontFamily: 'JetBrains Mono, monospace',
              fontSize: '0.75rem',
              color: '#8E8E93',
              borderTop: '1px solid rgba(247, 246, 242, 0.1)',
              paddingTop: '20px'
            }}
          >
            YRT ARCHIVE © 2026 / YRT = YASH RAJ THAKUR
          </div>
        </div>
      )}

      {/* Responsive Styles Injection */}
      <style>{`
        @media (max-width: 768px) {
          .desktop-nav, .desktop-only {
            display: none !important;
          }
          .mobile-toggle {
            display: flex !important;
          }
        }
      `}</style>
    </header>
  );
};

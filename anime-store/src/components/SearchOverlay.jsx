import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { FiSearch, FiX } from 'react-icons/fi';
import { products } from '../data/products';

export const SearchOverlay = ({ isOpen, onClose }) => {
  const [query, setQuery] = useState('');
  const inputRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 100);
    } else {
      setQuery('');
    }
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!isOpen) return null;

  const filteredProducts = products.filter((p) =>
    p.name.toLowerCase().includes(query.toLowerCase()) ||
    p.number.includes(query) ||
    p.description.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 10000,
        backgroundColor: '#0A0A0A',
        display: 'flex',
        flexDirection: 'column',
        padding: '32px 24px',
        overflowY: 'auto'
      }}
    >
      <div className="container" style={{ width: '100%', maxWidth: '1000px', margin: '0 auto' }}>
        {/* HEADER BAR */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginBottom: '48px',
            borderBottom: '1px solid rgba(247, 246, 242, 0.1)',
            paddingBottom: '20px'
          }}
        >
          <span
            style={{
              fontFamily: 'Syne, sans-serif',
              fontSize: '1rem',
              fontWeight: 800,
              letterSpacing: '0.12em'
            }}
          >
            SEARCH THE ARCHIVE
          </span>

          <button
            onClick={onClose}
            style={{
              background: 'none',
              border: 'none',
              color: '#F7F6F2',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              fontFamily: 'JetBrains Mono, monospace',
              fontSize: '0.75rem'
            }}
          >
            ESC <FiX size={20} />
          </button>
        </div>

        {/* SEARCH INPUT */}
        <div style={{ position: 'relative', marginBottom: '40px' }}>
          <FiSearch
            size={32}
            style={{
              position: 'absolute',
              left: '0',
              top: '50%',
              transform: 'translateY(-50%)',
              color: '#8E8E93'
            }}
          />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="SEARCH YRT ARCHIVE T-SHIRTS..."
            style={{
              width: '100%',
              backgroundColor: 'transparent',
              border: 'none',
              borderBottom: '2px solid rgba(247, 246, 242, 0.2)',
              padding: '16px 16px 16px 52px',
              fontFamily: 'Syne, sans-serif',
              fontSize: 'clamp(1.2rem, 4vw, 2.5rem)',
              fontWeight: 700,
              color: '#F7F6F2',
              outline: 'none'
            }}
          />
        </div>

        {/* RESULTS GRID */}
        <div>
          <div
            style={{
              fontFamily: 'JetBrains Mono, monospace',
              fontSize: '0.75rem',
              color: '#8E8E93',
              marginBottom: '24px'
            }}
          >
            {query ? `FOUND ${filteredProducts.length} ARCHIVE ENTRIES` : 'SUGGESTED DROPS'}
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))',
              gap: '20px'
            }}
          >
            {filteredProducts.map((p) => (
              <Link
                key={p.id}
                to={`/product/${p.slug}`}
                onClick={onClose}
                style={{
                  backgroundColor: '#121212',
                  border: '1px solid rgba(247, 246, 242, 0.08)',
                  padding: '16px',
                  textDecoration: 'none',
                  color: '#F7F6F2',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '12px'
                }}
              >
                <div
                  style={{
                    width: '100%',
                    aspectRatio: '4/5',
                    backgroundColor: '#161616',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    border: '1px solid rgba(247, 246, 242, 0.05)'
                  }}
                >
                  <img
                    src="/images/logo/yrt-logo.png"
                    alt={p.name}
                    style={{ width: '40px', opacity: 0.3 }}
                  />
                </div>

                <div>
                  <span
                    style={{
                      fontFamily: 'JetBrains Mono, monospace',
                      fontSize: '0.65rem',
                      color: '#8E8E93'
                    }}
                  >
                    YRT / {p.number}
                  </span>
                  <h4
                    style={{
                      fontFamily: 'Space Grotesk, sans-serif',
                      fontWeight: 700,
                      fontSize: '0.85rem',
                      margin: '4px 0 8px 0',
                      lineHeight: 1.3
                    }}
                  >
                    {p.name}
                  </h4>
                  <span
                    style={{
                      fontFamily: 'Space Grotesk, sans-serif',
                      fontWeight: 700,
                      fontSize: '0.9rem',
                      color: '#F7F6F2'
                    }}
                  >
                    ₹{p.price.toLocaleString('en-IN')}
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

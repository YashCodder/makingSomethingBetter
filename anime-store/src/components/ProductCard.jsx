import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiHeart, FiPlus } from 'react-icons/fi';
import { useCart } from '../context/CartContext';
import { useWishlist } from '../context/WishlistContext';

export const ProductCard = ({ product }) => {
  const [selectedSize, setSelectedSize] = useState(product.sizes[2] || product.sizes[0]);
  const [hovered, setHovered] = useState(false);
  const { addToCart } = useCart();
  const { toggleWishlist, isInWishlist } = useWishlist();

  const isWished = isInWishlist(product.id);

  const handleQuickAdd = (e, size) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product, size || selectedSize, 1);
  };

  return (
    <div
      style={{
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: hovered ? '#151518' : '#101012',
        border: hovered ? '1px solid rgba(247, 246, 242, 0.3)' : '1px solid rgba(247, 246, 242, 0.1)',
        boxShadow: hovered ? '0 16px 40px rgba(0,0,0,0.6)' : 'none',
        transition: 'all 0.35s cubic-bezier(0.16, 1, 0.3, 1)',
        height: '100%'
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* WISHLIST BUTTON */}
      <button
        onClick={(e) => {
          e.preventDefault();
          toggleWishlist(product);
        }}
        aria-label="Wishlist product"
        style={{
          position: 'absolute',
          top: '14px',
          right: '14px',
          zIndex: 10,
          background: 'rgba(10, 10, 12, 0.8)',
          backdropFilter: 'blur(8px)',
          border: '1px solid rgba(247, 246, 242, 0.2)',
          color: isWished ? '#F7F6F2' : '#8E8E93',
          width: '38px',
          height: '38px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'pointer',
          transition: 'all 0.2s ease'
        }}
      >
        <FiHeart fill={isWished ? '#F7F6F2' : 'none'} size={17} />
      </button>

      {/* PRODUCT NUMBER BADGE */}
      <div
        style={{
          position: 'absolute',
          top: '14px',
          left: '14px',
          zIndex: 10,
          background: '#070708',
          border: '1px solid rgba(247, 246, 242, 0.2)',
          padding: '4px 10px',
          fontFamily: 'JetBrains Mono, monospace',
          fontSize: '0.72rem',
          fontWeight: 700,
          color: '#F7F6F2'
        }}
      >
        {product.number || '001'}
      </div>

      {/* PLACEHOLDER SPEC IMAGE CONTAINER WITH DARK STREETWEAR ARTWORK BACKDROP */}
      <Link
        to={`/product/${product.slug || product.id}`}
        data-cursor="OPEN"
        style={{
          display: 'block',
          width: '100%',
          aspectRatio: '4/5',
          backgroundColor: '#141416',
          position: 'relative',
          overflow: 'hidden',
          textDecoration: 'none',
          backgroundImage: `
            radial-gradient(circle at 50% 40%, rgba(40, 40, 48, 0.4) 0%, rgba(12, 12, 14, 0.9) 70%),
            linear-gradient(to right, rgba(255, 255, 255, 0.02) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255, 255, 255, 0.02) 1px, transparent 1px)
          `,
          backgroundSize: '100% 100%, 24px 24px, 24px 24px'
        }}
      >
        <div
          style={{
            width: '100%',
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '24px',
            transform: hovered ? 'scale(1.04)' : 'scale(1)',
            transition: 'transform 0.4s cubic-bezier(0.16, 1, 0.3, 1)'
          }}
        >
          {/* Logo Watermark */}
          <img
            src="/images/logo/yrt-logo.png"
            alt="YRT Monogram Logo"
            style={{
              width: '72px',
              height: 'auto',
              opacity: hovered ? 0.6 : 0.35,
              marginBottom: '16px',
              transition: 'opacity 0.3s ease'
            }}
          />

          <div
            style={{
              border: '1px solid rgba(247, 246, 242, 0.25)',
              padding: '16px 20px',
              textAlign: 'center',
              backgroundColor: 'rgba(7, 7, 8, 0.85)',
              backdropFilter: 'blur(6px)'
            }}
          >
            <div
              style={{
                fontFamily: 'Unbounded, sans-serif',
                fontWeight: 800,
                fontSize: '0.8rem',
                letterSpacing: '0.1em',
                color: '#F7F6F2',
                marginBottom: '4px'
              }}
            >
              SPEC ARTWORK
            </div>
            <div
              style={{
                fontFamily: 'JetBrains Mono, monospace',
                fontSize: '0.68rem',
                color: '#8E8E93'
              }}
            >
              {product.drop} / {product.number}
            </div>
          </div>
        </div>

        {/* QUICK ADD HOVER BAR */}
        <div
          style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            backgroundColor: 'rgba(7, 7, 8, 0.95)',
            backdropFilter: 'blur(8px)',
            padding: '14px 16px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            transform: hovered ? 'translateY(0)' : 'translateY(100%)',
            transition: 'transform 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
            borderTop: '1px solid rgba(247, 246, 242, 0.2)'
          }}
        >
          <span
            style={{
              fontFamily: 'JetBrains Mono, monospace',
              fontSize: '0.7rem',
              color: '#8E8E93'
            }}
          >
            QUICK ADD:
          </span>

          <div style={{ display: 'flex', gap: '6px' }}>
            {product.sizes.map((sz) => (
              <button
                key={sz}
                onClick={(e) => handleQuickAdd(e, sz)}
                style={{
                  background: 'none',
                  border: '1px solid rgba(247, 246, 242, 0.25)',
                  color: '#F7F6F2',
                  fontSize: '0.72rem',
                  fontFamily: 'JetBrains Mono, monospace',
                  padding: '4px 8px',
                  cursor: 'pointer',
                  transition: 'all 0.15s ease'
                }}
                onMouseEnter={(e) => {
                  e.target.style.backgroundColor = '#F7F6F2';
                  e.target.style.color = '#070708';
                }}
                onMouseLeave={(e) => {
                  e.target.style.backgroundColor = 'transparent';
                  e.target.style.color = '#F7F6F2';
                }}
              >
                {sz}
              </button>
            ))}
          </div>
        </div>
      </Link>

      {/* METADATA & INFO */}
      <div
        style={{
          padding: '22px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          flexGrow: 1
        }}
      >
        <div>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginBottom: '8px'
            }}
          >
            <span
              style={{
                fontFamily: 'JetBrains Mono, monospace',
                fontSize: '0.72rem',
                color: '#8E8E93',
                letterSpacing: '0.08em'
              }}
            >
              YRT / {product.number}
            </span>

            {product.stock && product.stock <= 5 && (
              <span
                style={{
                  fontFamily: 'JetBrains Mono, monospace',
                  fontSize: '0.68rem',
                  color: '#E53935',
                  fontWeight: 700
                }}
              >
                ONLY {product.stock} LEFT
              </span>
            )}
          </div>

          <Link
            to={`/product/${product.slug || product.id}`}
            style={{
              fontFamily: 'Outfit, Space Grotesk, sans-serif',
              fontWeight: 800,
              fontSize: '1.05rem',
              color: '#F7F6F2',
              textDecoration: 'none',
              display: 'block',
              lineHeight: 1.3,
              marginBottom: '12px'
            }}
          >
            {product.name}
          </Link>
        </div>

        <div>
          {/* SIZES LIST */}
          <div
            style={{
              display: 'flex',
              gap: '8px',
              fontFamily: 'JetBrains Mono, monospace',
              fontSize: '0.7rem',
              color: '#8E8E93',
              marginBottom: '16px'
            }}
          >
            {product.sizes.map((s) => (
              <span key={s}>{s}</span>
            ))}
          </div>

          {/* PRICE & ACTION */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              borderTop: '1px solid rgba(247, 246, 242, 0.1)',
              paddingTop: '14px'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'baseline', gap: '8px' }}>
              <span
                style={{
                  fontFamily: 'Outfit, Space Grotesk, sans-serif',
                  fontWeight: 800,
                  fontSize: '1.2rem',
                  color: '#F7F6F2'
                }}
              >
                ₹{product.price.toLocaleString('en-IN')}
              </span>
              {product.compareAtPrice && (
                <span
                  style={{
                    fontFamily: 'Space Grotesk, sans-serif',
                    fontSize: '0.85rem',
                    color: '#55555B',
                    textDecoration: 'line-through'
                  }}
                >
                  ₹{product.compareAtPrice.toLocaleString('en-IN')}
                </span>
              )}
            </div>

            <button
              onClick={(e) => handleQuickAdd(e, selectedSize)}
              style={{
                background: 'none',
                border: 'none',
                color: '#F7F6F2',
                fontFamily: 'JetBrains Mono, monospace',
                fontWeight: 700,
                fontSize: '0.8rem',
                letterSpacing: '0.08em',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '4px'
              }}
            >
              ADD <FiPlus size={15} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

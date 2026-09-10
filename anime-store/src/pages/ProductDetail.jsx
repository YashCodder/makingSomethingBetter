import React, { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { FiHeart, FiPlus, FiMinus, FiArrowRight, FiCheck } from 'react-icons/fi';
import { products, getProductById } from '../data/products';
import { useCart } from '../context/CartContext';
import { useWishlist } from '../context/WishlistContext';
import { SizeGuideModal } from '../components/SizeGuideModal';

export const ProductDetail = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const product = getProductById(slug) || products[0];

  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [selectedSize, setSelectedSize] = useState(product.sizes[2] || product.sizes[0]);
  const [quantity, setQuantity] = useState(1);
  const [sizeGuideOpen, setSizeGuideOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('DETAILS');

  const { addToCart } = useCart();
  const { toggleWishlist, isInWishlist } = useWishlist();

  const isWished = isInWishlist(product.id);

  const handleAddToCart = () => {
    addToCart(product, selectedSize, quantity);
  };

  const handleBuyNow = () => {
    addToCart(product, selectedSize, quantity);
    navigate('/checkout');
  };

  return (
    <div style={{ padding: '40px 0 100px 0' }}>
      <div className="container">
        {/* BREADCRUMB */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            fontFamily: 'JetBrains Mono, monospace',
            fontSize: '0.75rem',
            color: '#8E8E93',
            marginBottom: '32px'
          }}
        >
          <Link to="/" style={{ color: '#8E8E93', textDecoration: 'none' }}>HOME</Link>
          <span>/</span>
          <Link to="/shop" style={{ color: '#8E8E93', textDecoration: 'none' }}>SHOP T-SHIRTS</Link>
          <span>/</span>
          <span style={{ color: '#F7F6F2' }}>{product.number}</span>
        </div>

        {/* MAIN SPLIT LAYOUT */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '48px',
            alignItems: 'start'
          }}
        >
          {/* LEFT: GALLERY WITH THUMBNAIL RAIL */}
          <div style={{ display: 'flex', gap: '16px', flexDirection: 'row-reverse', flexWrap: 'wrap' }}>
            {/* MAIN IMAGE DISPLAY */}
            <div
              style={{
                flexGrow: 1,
                minWidth: '280px',
                aspectRatio: '4/5',
                backgroundColor: '#141414',
                border: '1px solid rgba(247, 246, 242, 0.12)',
                position: 'relative',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                overflow: 'hidden',
                backgroundImage: `
                  linear-gradient(to right, rgba(255, 255, 255, 0.02) 1px, transparent 1px),
                  linear-gradient(to bottom, rgba(255, 255, 255, 0.02) 1px, transparent 1px)
                `,
                backgroundSize: '24px 24px'
              }}
              data-cursor="ZOOM"
            >
              <img
                src="/images/logo/yrt-logo.png"
                alt="YRT ARCHIVE Monogram"
                style={{ width: '96px', opacity: 0.35 }}
              />

              <div
                style={{
                  position: 'absolute',
                  inset: '24px',
                  border: '1px stroke rgba(255, 255, 255, 0.05)',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  pointerEvents: 'none'
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <span className="archive-badge">{product.number} / SPEC</span>
                  <span style={{ fontFamily: 'JetBrains Mono', fontSize: '0.65rem', color: '#55555B' }}>
                    {product.images[selectedImageIndex]?.type || 'SPEC'}
                  </span>
                </div>

                <div style={{ textAlign: 'center' }}>
                  <span style={{ fontFamily: 'Syne', fontWeight: 800, fontSize: '0.9rem', color: '#F7F6F2' }}>
                    {product.images[selectedImageIndex]?.label || 'PRODUCT IMAGE'}
                  </span>
                </div>

                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <span style={{ fontFamily: 'JetBrains Mono', fontSize: '0.65rem', color: '#55555B' }}>
                    DROP 001
                  </span>
                  <span style={{ fontFamily: 'JetBrains Mono', fontSize: '0.65rem', color: '#8E8E93' }}>
                    0{selectedImageIndex + 1} / 0{product.images.length}
                  </span>
                </div>
              </div>
            </div>

            {/* THUMBNAIL RAIL */}
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '12px',
                width: '72px'
              }}
            >
              {product.images.map((img, idx) => (
                <button
                  key={img.id}
                  onClick={() => setSelectedImageIndex(idx)}
                  style={{
                    width: '72px',
                    height: '90px',
                    backgroundColor: '#161616',
                    border: selectedImageIndex === idx ? '2px solid #F7F6F2' : '1px solid rgba(247, 246, 242, 0.1)',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: '4px'
                  }}
                >
                  <img
                    src="/images/logo/yrt-logo.png"
                    alt={`Thumb ${idx}`}
                    style={{ width: '24px', opacity: selectedImageIndex === idx ? 0.7 : 0.25 }}
                  />
                </button>
              ))}
            </div>
          </div>

          {/* RIGHT: PRODUCT INFO & PURCHASE */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '8px' }}>
              <span className="archive-badge">YRT ARCHIVE / {product.drop}</span>
              <button
                onClick={() => toggleWishlist(product)}
                style={{
                  background: 'none',
                  border: 'none',
                  color: isWished ? '#F7F6F2' : '#8E8E93',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                  fontFamily: 'JetBrains Mono',
                  fontSize: '0.75rem'
                }}
              >
                <FiHeart fill={isWished ? '#F7F6F2' : 'none'} size={18} />
                {isWished ? 'SAVED' : 'SAVE TO WISHLIST'}
              </button>
            </div>

            <h1
              style={{
                fontFamily: 'Syne, sans-serif',
                fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)',
                fontWeight: 800,
                letterSpacing: '-0.02em',
                lineHeight: 1.1,
                color: '#F7F6F2',
                margin: '8px 0 16px 0',
                textTransform: 'uppercase'
              }}
            >
              {product.name}
            </h1>

            {/* PRICE */}
            <div style={{ display: 'flex', alignItems: 'baseline', gap: '12px', marginBottom: '24px' }}>
              <span style={{ fontFamily: 'Space Grotesk, sans-serif', fontWeight: 700, fontSize: '1.8rem', color: '#F7F6F2' }}>
                ₹{product.price.toLocaleString('en-IN')}
              </span>
              {product.compareAtPrice && (
                <span style={{ fontFamily: 'Space Grotesk', fontSize: '1.1rem', color: '#55555B', textDecoration: 'line-through' }}>
                  ₹{product.compareAtPrice.toLocaleString('en-IN')}
                </span>
              )}
              <span style={{ fontFamily: 'JetBrains Mono', fontSize: '0.75rem', color: '#8E8E93', marginLeft: 'auto' }}>
                TAXES INCLUDED
              </span>
            </div>

            {/* DESCRIPTION */}
            <p
              style={{
                fontFamily: 'Space Grotesk, sans-serif',
                fontSize: '1rem',
                color: '#8E8E93',
                lineHeight: 1.6,
                marginBottom: '32px'
              }}
            >
              {product.description}
            </p>

            {/* SIZE SELECTOR */}
            <div style={{ marginBottom: '32px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
                <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '0.78rem', color: '#F7F6F2', fontWeight: 600 }}>
                  SELECT SIZE: <span style={{ color: '#8E8E93' }}>{selectedSize}</span>
                </span>
                <button
                  onClick={() => setSizeGuideOpen(true)}
                  style={{
                    background: 'none',
                    border: 'none',
                    color: '#F7F6F2',
                    fontFamily: 'JetBrains Mono',
                    fontSize: '0.72rem',
                    textDecoration: 'underline',
                    cursor: 'pointer'
                  }}
                >
                  SIZE GUIDE MATRIX
                </button>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(6, 1fr)', gap: '8px' }}>
                {product.sizes.map((sz) => (
                  <button
                    key={sz}
                    onClick={() => setSelectedSize(sz)}
                    style={{
                      backgroundColor: selectedSize === sz ? '#F7F6F2' : '#121212',
                      color: selectedSize === sz ? '#0A0A0A' : '#F7F6F2',
                      border: '1px solid rgba(247, 246, 242, 0.2)',
                      padding: '14px 0',
                      fontFamily: 'JetBrains Mono, monospace',
                      fontSize: '0.85rem',
                      fontWeight: 700,
                      cursor: 'pointer',
                      transition: 'all 0.15s ease'
                    }}
                  >
                    {sz}
                  </button>
                ))}
              </div>
            </div>

            {/* QUANTITY SELECTOR */}
            <div style={{ marginBottom: '32px', display: 'flex', alignItems: 'center', gap: '16px' }}>
              <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '0.78rem', color: '#F7F6F2' }}>
                QUANTITY:
              </span>
              <div style={{ display: 'flex', alignItems: 'center', border: '1px solid rgba(247, 246, 242, 0.2)', backgroundColor: '#121212' }}>
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  style={{ background: 'none', border: 'none', color: '#F7F6F2', padding: '8px 14px', cursor: 'pointer' }}
                >
                  <FiMinus size={14} />
                </button>
                <span style={{ fontFamily: 'JetBrains Mono', padding: '0 12px', fontSize: '0.85rem' }}>{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  style={{ background: 'none', border: 'none', color: '#F7F6F2', padding: '8px 14px', cursor: 'pointer' }}
                >
                  <FiPlus size={14} />
                </button>
              </div>
            </div>

            {/* ACTIONS */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', marginBottom: '40px' }}>
              <button onClick={handleAddToCart} className="btn-primary" style={{ width: '100%' }}>
                ADD TO CART — ₹{(product.price * quantity).toLocaleString('en-IN')}
              </button>
              <button onClick={handleBuyNow} className="btn-secondary" style={{ width: '100%' }}>
                BUY NOW <FiArrowRight />
              </button>
            </div>

            {/* TECHNICAL DETAILS ACCORDION */}
            <div style={{ borderTop: '1px solid rgba(247, 246, 242, 0.1)', paddingTop: '24px' }}>
              <h4 style={{ fontFamily: 'Syne, sans-serif', fontSize: '0.9rem', letterSpacing: '0.12em', marginBottom: '16px' }}>
                TECHNICAL SPECIFICATIONS
              </h4>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', fontFamily: 'JetBrains Mono, monospace', fontSize: '0.75rem' }}>
                <div><span style={{ color: '#8E8E93' }}>FABRIC:</span> <div style={{ color: '#F7F6F2', marginTop: '2px' }}>{product.details.fabric}</div></div>
                <div><span style={{ color: '#8E8E93' }}>SILHOUETTE:</span> <div style={{ color: '#F7F6F2', marginTop: '2px' }}>{product.details.fit}</div></div>
                <div><span style={{ color: '#8E8E93' }}>WEIGHT / GSM:</span> <div style={{ color: '#F7F6F2', marginTop: '2px' }}>{product.details.gsm}</div></div>
                <div><span style={{ color: '#8E8E93' }}>PRINT TECHNIQUE:</span> <div style={{ color: '#F7F6F2', marginTop: '2px' }}>{product.details.printTechnique}</div></div>
                <div><span style={{ color: '#8E8E93' }}>WASH CARE:</span> <div style={{ color: '#F7F6F2', marginTop: '2px' }}>{product.details.washCare}</div></div>
                <div><span style={{ color: '#8E8E93' }}>ORIGIN:</span> <div style={{ color: '#F7F6F2', marginTop: '2px' }}>{product.details.countryOfOrigin}</div></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <SizeGuideModal isOpen={sizeGuideOpen} onClose={() => setSizeGuideOpen(false)} />
    </div>
  );
};

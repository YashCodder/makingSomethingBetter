import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FiX, FiPlus, FiMinus, FiTrash2, FiArrowRight } from 'react-icons/fi';
import { useCart } from '../context/CartContext';

export const CartDrawer = () => {
  const { cart, isCartOpen, setIsCartOpen, removeFromCart, updateQuantity, subtotal } = useCart();
  const navigate = useNavigate();

  if (!isCartOpen) return null;

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 10000,
        display: 'flex',
        justifyContent: 'flex-end'
      }}
    >
      {/* BACKDROP */}
      <div
        onClick={() => setIsCartOpen(false)}
        style={{
          position: 'absolute',
          inset: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.75)',
          backdropFilter: 'blur(4px)',
          transition: 'opacity 0.3s ease'
        }}
      />

      {/* DRAWER CONTENT */}
      <div
        style={{
          position: 'relative',
          width: '100%',
          maxWidth: '460px',
          height: '100%',
          backgroundColor: '#0A0A0A',
          borderLeft: '1px solid rgba(247, 246, 242, 0.15)',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          zIndex: 1,
          padding: '32px 24px'
        }}
      >
        {/* HEADER */}
        <div>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              paddingBottom: '20px',
              borderBottom: '1px solid rgba(247, 246, 242, 0.1)'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <h2
                style={{
                  fontFamily: 'Syne, sans-serif',
                  fontWeight: 800,
                  fontSize: '1.2rem',
                  letterSpacing: '0.1em',
                  color: '#F7F6F2',
                  margin: 0
                }}
              >
                YOUR ARCHIVE
              </h2>
              <span
                style={{
                  fontFamily: 'JetBrains Mono, monospace',
                  fontSize: '0.75rem',
                  color: '#8E8E93'
                }}
              >
                [{cart.length} ITEMS]
              </span>
            </div>

            <button
              onClick={() => setIsCartOpen(false)}
              aria-label="Close cart"
              style={{
                background: 'none',
                border: 'none',
                color: '#F7F6F2',
                cursor: 'pointer',
                padding: '4px'
              }}
            >
              <FiX size={24} />
            </button>
          </div>
        </div>

        {/* ITEMS LIST */}
        <div
          style={{
            flexGrow: 1,
            overflowY: 'auto',
            margin: '24px 0',
            paddingRight: '8px',
            display: 'flex',
            flexDirection: 'column',
            gap: '20px'
          }}
        >
          {cart.length === 0 ? (
            <div
              style={{
                textAlign: 'center',
                padding: '60px 0',
                color: '#8E8E93',
                fontFamily: 'Space Grotesk, sans-serif'
              }}
            >
              <p style={{ fontFamily: 'Syne, sans-serif', fontSize: '1.1rem', marginBottom: '8px' }}>
                YOUR ARCHIVE IS EMPTY.
              </p>
              <p style={{ fontSize: '0.85rem' }}>Select a T-shirt from Drop 001 to add to cart.</p>
            </div>
          ) : (
            cart.map((item, idx) => (
              <div
                key={`${item.product.id}-${item.size}-${idx}`}
                style={{
                  display: 'flex',
                  gap: '16px',
                  paddingBottom: '20px',
                  borderBottom: '1px solid rgba(247, 246, 242, 0.08)'
                }}
              >
                {/* THUMBNAIL */}
                <div
                  style={{
                    width: '80px',
                    height: '100px',
                    backgroundColor: '#161616',
                    border: '1px solid rgba(247, 246, 242, 0.1)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0
                  }}
                >
                  <img
                    src="/images/logo/yrt-logo.png"
                    alt="Product"
                    style={{ width: '32px', height: 'auto', opacity: 0.3 }}
                  />
                </div>

                {/* DETAILS */}
                <div
                  style={{
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
                        justifyContent: 'space-between',
                        alignItems: 'flex-start',
                        marginBottom: '4px'
                      }}
                    >
                      <h4
                        style={{
                          fontFamily: 'Space Grotesk, sans-serif',
                          fontWeight: 700,
                          fontSize: '0.9rem',
                          color: '#F7F6F2',
                          margin: 0
                        }}
                      >
                        {item.product.name}
                      </h4>
                      <button
                        onClick={() => removeFromCart(item.product.id, item.size)}
                        aria-label="Remove item"
                        style={{
                          background: 'none',
                          border: 'none',
                          color: '#8E8E93',
                          cursor: 'pointer',
                          padding: '2px'
                        }}
                      >
                        <FiTrash2 size={16} />
                      </button>
                    </div>

                    <div
                      style={{
                        fontFamily: 'JetBrains Mono, monospace',
                        fontSize: '0.72rem',
                        color: '#8E8E93',
                        marginBottom: '8px'
                      }}
                    >
                      SIZE: <span style={{ color: '#F7F6F2' }}>{item.size}</span>
                    </div>
                  </div>

                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between'
                    }}
                  >
                    {/* QUANTITY CONTROLS */}
                    <div
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        border: '1px solid rgba(247, 246, 242, 0.15)',
                        backgroundColor: '#121212'
                      }}
                    >
                      <button
                        onClick={() => updateQuantity(item.product.id, item.size, -1)}
                        style={{
                          background: 'none',
                          border: 'none',
                          color: '#F7F6F2',
                          padding: '4px 8px',
                          cursor: 'pointer'
                        }}
                      >
                        <FiMinus size={12} />
                      </button>
                      <span
                        style={{
                          fontFamily: 'JetBrains Mono, monospace',
                          fontSize: '0.75rem',
                          padding: '0 8px'
                        }}
                      >
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => updateQuantity(item.product.id, item.size, 1)}
                        style={{
                          background: 'none',
                          border: 'none',
                          color: '#F7F6F2',
                          padding: '4px 8px',
                          cursor: 'pointer'
                        }}
                      >
                        <FiPlus size={12} />
                      </button>
                    </div>

                    <span
                      style={{
                        fontFamily: 'Space Grotesk, sans-serif',
                        fontWeight: 700,
                        fontSize: '0.95rem',
                        color: '#F7F6F2'
                      }}
                    >
                      ₹{(item.product.price * item.quantity).toLocaleString('en-IN')}
                    </span>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* FOOTER & CHECKOUT */}
        {cart.length > 0 && (
          <div
            style={{
              borderTop: '1px solid rgba(247, 246, 242, 0.1)',
              paddingTop: '20px'
            }}
          >
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                marginBottom: '8px',
                fontFamily: 'Space Grotesk, sans-serif',
                fontSize: '0.9rem',
                color: '#8E8E93'
              }}
            >
              <span>SUBTOTAL</span>
              <span style={{ color: '#F7F6F2', fontWeight: 700 }}>
                ₹{subtotal.toLocaleString('en-IN')}
              </span>
            </div>

            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                marginBottom: '20px',
                fontFamily: 'JetBrains Mono, monospace',
                fontSize: '0.75rem',
                color: '#55555B'
              }}
            >
              <span>SHIPPING & TAXES</span>
              <span>CALCULATED AT CHECKOUT</span>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <button
                onClick={() => {
                  setIsCartOpen(false);
                  navigate('/checkout');
                }}
                className="btn-primary"
                style={{ width: '100%' }}
              >
                PROCEED TO CHECKOUT <FiArrowRight />
              </button>

              <button
                onClick={() => {
                  setIsCartOpen(false);
                  navigate('/shop');
                }}
                className="btn-secondary"
                style={{ width: '100%' }}
              >
                CONTINUE SHOPPING
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

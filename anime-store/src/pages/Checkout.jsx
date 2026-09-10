import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { FiCheckCircle, FiLock, FiArrowRight } from 'react-icons/fi';

export const Checkout = () => {
  const { cart, subtotal, clearCart } = useCart();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: '',
    phone: '',
    firstName: '',
    lastName: '',
    address: '',
    apartment: '',
    city: '',
    state: '',
    pincode: '',
    paymentMethod: 'UPI' // 'UPI' | 'CARD' | 'COD'
  });

  const [submitted, setSubmitted] = useState(false);
  const [orderId, setOrderId] = useState('');

  const shippingCost = subtotal > 1999 ? 0 : 99;
  const total = subtotal + shippingCost;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handlePlaceOrder = (e) => {
    e.preventDefault();
    if (!formData.email || !formData.phone || !formData.firstName || !formData.address || !formData.pincode) {
      alert("Please fill in all required shipping fields.");
      return;
    }

    const generatedId = `YRT-${Math.floor(100000 + Math.random() * 900000)}`;
    setOrderId(generatedId);
    setSubmitted(true);
    clearCart();
  };

  if (submitted) {
    return (
      <div style={{ padding: '80px 0', minHeight: '75vh' }}>
        <div className="container" style={{ maxWidth: '640px', margin: '0 auto', textAlign: 'center' }}>
          <FiCheckCircle size={64} style={{ color: '#F7F6F2', marginBottom: '24px' }} />
          <span className="archive-badge" style={{ marginBottom: '16px' }}>
            ORDER CONFIRMED
          </span>
          <h1 style={{ fontFamily: 'Syne, sans-serif', fontSize: '2rem', fontWeight: 800, marginBottom: '12px' }}>
            TEST ORDER PLACED SUCCESSFULLY
          </h1>
          <p style={{ fontFamily: 'JetBrains Mono', fontSize: '1rem', color: '#8E8E93', marginBottom: '24px' }}>
            ORDER REFERENCE NO: <span style={{ color: '#F7F6F2', fontWeight: 700 }}>{orderId}</span>
          </p>

          <div
            style={{
              backgroundColor: '#121212',
              border: '1px solid rgba(247, 246, 242, 0.1)',
              padding: '24px',
              textAlign: 'left',
              fontFamily: 'Space Grotesk',
              fontSize: '0.9rem',
              color: '#8E8E93',
              marginBottom: '32px',
              lineHeight: 1.6
            }}
          >
            <div style={{ fontWeight: 700, color: '#F7F6F2', marginBottom: '8px' }}>DEVELOPMENT GATEWAY MODE</div>
            Payment gateway architecture is ready for production credentials (Razorpay/Stripe). A confirmation email has been logged to <span style={{ color: '#F7F6F2' }}>{formData.email}</span>.
          </div>

          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center' }}>
            <Link to={`/track-order?orderId=${orderId}`} className="btn-primary">
              TRACK ORDER STATUS
            </Link>
            <Link to="/shop" className="btn-secondary">
              RETURN TO SHOP
            </Link>
          </div>
        </div>
      </div>
    );
  }

  if (cart.length === 0) {
    return (
      <div style={{ padding: '100px 0', textAlign: 'center' }}>
        <div className="container">
          <h2 style={{ fontFamily: 'Syne', fontWeight: 800, fontSize: '1.8rem', marginBottom: '16px' }}>
            NO ITEMS IN CHECKOUT
          </h2>
          <p style={{ fontFamily: 'Space Grotesk', color: '#8E8E93', marginBottom: '24px' }}>
            Add T-shirts to your cart before proceeding to checkout.
          </p>
          <Link to="/shop" className="btn-primary">
            GO TO CATALOGUE
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div style={{ padding: '60px 0 100px 0' }}>
      <div className="container">
        <h1
          style={{
            fontFamily: 'Syne, sans-serif',
            fontSize: 'clamp(2rem, 4vw, 3rem)',
            fontWeight: 800,
            letterSpacing: '-0.02em',
            marginBottom: '36px'
          }}
        >
          CHECKOUT ARCHIVE
        </h1>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '48px' }}>
          {/* LEFT: FORM */}
          <form onSubmit={handlePlaceOrder} style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
            {/* CONTACT */}
            <div>
              <h3 style={{ fontFamily: 'Syne', fontWeight: 800, fontSize: '1rem', letterSpacing: '0.1em', marginBottom: '16px' }}>
                01 / CONTACT INFORMATION
              </h3>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                <input
                  type="email"
                  name="email"
                  placeholder="EMAIL ADDRESS *"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  style={inputStyle}
                />
                <input
                  type="tel"
                  name="phone"
                  placeholder="PHONE NUMBER *"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  style={inputStyle}
                />
              </div>
            </div>

            {/* SHIPPING ADDRESS */}
            <div>
              <h3 style={{ fontFamily: 'Syne', fontWeight: 800, fontSize: '1rem', letterSpacing: '0.1em', marginBottom: '16px' }}>
                02 / DELIVERY ADDRESS
              </h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                  <input
                    type="text"
                    name="firstName"
                    placeholder="FIRST NAME *"
                    required
                    value={formData.firstName}
                    onChange={handleChange}
                    style={inputStyle}
                  />
                  <input
                    type="text"
                    name="lastName"
                    placeholder="LAST NAME"
                    value={formData.lastName}
                    onChange={handleChange}
                    style={inputStyle}
                  />
                </div>
                <input
                  type="text"
                  name="address"
                  placeholder="STREET ADDRESS *"
                  required
                  value={formData.address}
                  onChange={handleChange}
                  style={inputStyle}
                />
                <input
                  type="text"
                  name="apartment"
                  placeholder="APARTMENT, SUITE, ETC. (OPTIONAL)"
                  value={formData.apartment}
                  onChange={handleChange}
                  style={inputStyle}
                />
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '16px' }}>
                  <input
                    type="text"
                    name="city"
                    placeholder="CITY *"
                    required
                    value={formData.city}
                    onChange={handleChange}
                    style={inputStyle}
                  />
                  <input
                    type="text"
                    name="state"
                    placeholder="STATE *"
                    required
                    value={formData.state}
                    onChange={handleChange}
                    style={inputStyle}
                  />
                  <input
                    type="text"
                    name="pincode"
                    placeholder="PINCODE *"
                    required
                    value={formData.pincode}
                    onChange={handleChange}
                    style={inputStyle}
                  />
                </div>
              </div>
            </div>

            {/* PAYMENT METHOD */}
            <div>
              <h3 style={{ fontFamily: 'Syne', fontWeight: 800, fontSize: '1rem', letterSpacing: '0.1em', marginBottom: '16px' }}>
                03 / PAYMENT METHOD
              </h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {['UPI', 'CARD', 'COD'].map((method) => (
                  <label
                    key={method}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '12px',
                      padding: '16px',
                      backgroundColor: formData.paymentMethod === method ? '#161616' : '#121212',
                      border: formData.paymentMethod === method ? '1px solid #F7F6F2' : '1px solid rgba(247, 246, 242, 0.1)',
                      cursor: 'pointer',
                      fontFamily: 'JetBrains Mono, monospace',
                      fontSize: '0.85rem'
                    }}
                  >
                    <input
                      type="radio"
                      name="paymentMethod"
                      value={method}
                      checked={formData.paymentMethod === method}
                      onChange={handleChange}
                    />
                    {method === 'UPI' && 'UPI / GOOGLE PAY / PHONEPE'}
                    {method === 'CARD' && 'DEBIT / CREDIT CARD (STRIPE/RAZORPAY)'}
                    {method === 'COD' && 'CASH ON DELIVERY (+₹50)'}
                  </label>
                ))}
              </div>
            </div>

            <button type="submit" className="btn-primary" style={{ padding: '20px' }}>
              <FiLock size={16} /> COMPLETE ORDER — ₹{total.toLocaleString('en-IN')}
            </button>
          </form>

          {/* RIGHT: ORDER SUMMARY */}
          <div
            style={{
              backgroundColor: '#121212',
              border: '1px solid rgba(247, 246, 242, 0.1)',
              padding: '32px',
              height: 'fit-content'
            }}
          >
            <h3 style={{ fontFamily: 'Syne', fontWeight: 800, fontSize: '1.1rem', letterSpacing: '0.1em', marginBottom: '24px', borderBottom: '1px solid rgba(247, 246, 242, 0.1)', paddingBottom: '12px' }}>
              ORDER SUMMARY [{cart.length}]
            </h3>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginBottom: '24px' }}>
              {cart.map((item, idx) => (
                <div key={idx} style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
                  <div style={{ width: '48px', height: '60px', backgroundColor: '#161616', border: '1px solid rgba(247, 246, 242, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <img src="/images/logo/yrt-logo.png" alt="logo" style={{ width: '20px', opacity: 0.3 }} />
                  </div>
                  <div style={{ flexGrow: 1 }}>
                    <div style={{ fontFamily: 'Space Grotesk', fontWeight: 700, fontSize: '0.85rem' }}>{item.product.name}</div>
                    <div style={{ fontFamily: 'JetBrains Mono', fontSize: '0.7rem', color: '#8E8E93' }}>
                      QTY: {item.quantity} | SIZE: {item.size}
                    </div>
                  </div>
                  <div style={{ fontFamily: 'Space Grotesk', fontWeight: 700, fontSize: '0.9rem' }}>
                    ₹{(item.product.price * item.quantity).toLocaleString('en-IN')}
                  </div>
                </div>
              ))}
            </div>

            <div style={{ borderTop: '1px solid rgba(247, 246, 242, 0.1)', paddingTop: '16px', display: 'flex', flexDirection: 'column', gap: '8px', fontFamily: 'Space Grotesk', fontSize: '0.85rem', color: '#8E8E93' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span>SUBTOTAL</span>
                <span style={{ color: '#F7F6F2' }}>₹{subtotal.toLocaleString('en-IN')}</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span>SHIPPING</span>
                <span style={{ color: '#F7F6F2' }}>{shippingCost === 0 ? 'FREE' : `₹${shippingCost}`}</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', borderTop: '1px solid rgba(247, 246, 242, 0.1)', paddingTop: '12px', marginTop: '8px', fontFamily: 'Syne', fontWeight: 800, fontSize: '1.2rem', color: '#F7F6F2' }}>
                <span>TOTAL</span>
                <span>₹{total.toLocaleString('en-IN')}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const inputStyle = {
  backgroundColor: '#0A0A0A',
  border: '1px solid rgba(247, 246, 242, 0.2)',
  color: '#F7F6F2',
  padding: '14px 16px',
  fontFamily: 'JetBrains Mono, monospace',
  fontSize: '0.8rem',
  outline: 'none',
  width: '100%'
};
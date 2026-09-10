import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { FiCheckCircle, FiPackage, FiTruck, FiMapPin } from 'react-icons/fi';

export const TrackOrder = () => {
  const [searchParams] = useSearchParams();
  const initialOrder = searchParams.get('orderId') || '';

  const [orderInput, setOrderInput] = useState(initialOrder);
  const [contactInput, setContactInput] = useState('');
  const [activeOrder, setActiveOrder] = useState(null);

  useEffect(() => {
    if (initialOrder) {
      handleSearch(initialOrder);
    }
  }, [initialOrder]);

  const handleSearch = (idToSearch) => {
    const id = idToSearch || orderInput;
    if (!id) return;

    // Simulated status tracking pipeline
    setActiveOrder({
      id: id.toUpperCase(),
      date: 'SEPTEMBER 10, 2026',
      itemsCount: 2,
      statusStep: 2, // 0: Confirmed, 1: Processing, 2: Packed, 3: Shipped, 4: Out for Delivery, 5: Delivered
      estimatedDelivery: 'SEPTEMBER 14, 2026',
      carrier: 'BLUEDART EXPRESS',
      trackingCode: 'BD-99201482-IN'
    });
  };

  const steps = [
    { title: 'ORDER CONFIRMED', desc: 'Order logged into YRT Archive system' },
    { title: 'PROCESSING', desc: 'Fabric & quality inspection' },
    { title: 'PACKED', desc: 'Sealed in archive packaging' },
    { title: 'SHIPPED', desc: 'Dispatched via air courier' },
    { title: 'OUT FOR DELIVERY', desc: 'Driver en route to address' },
    { title: 'DELIVERED', desc: 'Handed over' },
  ];

  return (
    <div style={{ padding: '60px 0 100px 0', minHeight: '75vh' }}>
      <div className="container" style={{ maxWidth: '800px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
          <span className="archive-badge" style={{ marginBottom: '12px' }}>
            SHIPMENT DISPATCH TRACER
          </span>
          <h1
            style={{
              fontFamily: 'Syne, sans-serif',
              fontSize: 'clamp(2rem, 5vw, 3.5rem)',
              fontWeight: 800,
              letterSpacing: '-0.02em',
              textTransform: 'uppercase',
              margin: '8px 0 0 0'
            }}
          >
            TRACK YOUR ORDER
          </h1>
        </div>

        {/* INPUT FORM */}
        <div
          style={{
            backgroundColor: '#121212',
            border: '1px solid rgba(247, 246, 242, 0.1)',
            padding: '28px',
            marginBottom: '48px'
          }}
        >
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSearch();
            }}
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
              gap: '16px',
              alignItems: 'end'
            }}
          >
            <div>
              <label style={{ fontFamily: 'JetBrains Mono', fontSize: '0.75rem', color: '#8E8E93', display: 'block', marginBottom: '8px' }}>
                ORDER REFERENCE NO *
              </label>
              <input
                type="text"
                placeholder="e.g. YRT-849201"
                value={orderInput}
                onChange={(e) => setOrderInput(e.target.value)}
                style={{
                  width: '100%',
                  backgroundColor: '#0A0A0A',
                  border: '1px solid rgba(247, 246, 242, 0.2)',
                  color: '#F7F6F2',
                  padding: '14px',
                  fontFamily: 'JetBrains Mono, monospace',
                  fontSize: '0.85rem',
                  outline: 'none'
                }}
              />
            </div>

            <div>
              <label style={{ fontFamily: 'JetBrains Mono', fontSize: '0.75rem', color: '#8E8E93', display: 'block', marginBottom: '8px' }}>
                EMAIL OR PHONE NUMBER
              </label>
              <input
                type="text"
                placeholder="Entered during checkout"
                value={contactInput}
                onChange={(e) => setContactInput(e.target.value)}
                style={{
                  width: '100%',
                  backgroundColor: '#0A0A0A',
                  border: '1px solid rgba(247, 246, 242, 0.2)',
                  color: '#F7F6F2',
                  padding: '14px',
                  fontFamily: 'JetBrains Mono, monospace',
                  fontSize: '0.85rem',
                  outline: 'none'
                }}
              />
            </div>

            <button type="submit" className="btn-primary" style={{ height: '48px' }}>
              TRACK SHIPMENT →
            </button>
          </form>
        </div>

        {/* ORDER TRACKING RESULT PIPELINE */}
        {activeOrder && (
          <div
            style={{
              backgroundColor: '#121212',
              border: '1px solid rgba(247, 246, 242, 0.15)',
              padding: '32px'
            }}
          >
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                flexWrap: 'wrap',
                gap: '16px',
                borderBottom: '1px solid rgba(247, 246, 242, 0.1)',
                paddingBottom: '20px',
                marginBottom: '32px'
              }}
            >
              <div>
                <span className="archive-badge">REFERENCE: {activeOrder.id}</span>
                <div style={{ fontFamily: 'Space Grotesk', fontWeight: 700, fontSize: '1.2rem', marginTop: '8px' }}>
                  ESTIMATED DELIVERY: {activeOrder.estimatedDelivery}
                </div>
              </div>

              <div style={{ fontFamily: 'JetBrains Mono', fontSize: '0.75rem', color: '#8E8E93', textAlign: 'right' }}>
                <div>COURIER: {activeOrder.carrier}</div>
                <div>AWB NO: {activeOrder.trackingCode}</div>
              </div>
            </div>

            {/* TIMELINE */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
              {steps.map((st, idx) => {
                const isPassed = idx <= activeOrder.statusStep;
                const isCurrent = idx === activeOrder.statusStep;

                return (
                  <div
                    key={st.title}
                    style={{
                      display: 'flex',
                      gap: '20px',
                      alignItems: 'flex-start',
                      opacity: isPassed ? 1 : 0.35
                    }}
                  >
                    <div
                      style={{
                        width: '28px',
                        height: '28px',
                        borderRadius: '50%',
                        backgroundColor: isPassed ? '#F7F6F2' : 'transparent',
                        color: isPassed ? '#0A0A0A' : '#8E8E93',
                        border: isPassed ? 'none' : '1px solid rgba(247, 246, 242, 0.3)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontWeight: 800,
                        fontFamily: 'JetBrains Mono',
                        fontSize: '0.75rem',
                        flexShrink: 0
                      }}
                    >
                      {isPassed ? '✓' : idx + 1}
                    </div>

                    <div>
                      <div
                        style={{
                          fontFamily: 'Syne, sans-serif',
                          fontWeight: 800,
                          fontSize: '0.95rem',
                          color: isCurrent ? '#F7F6F2' : isPassed ? '#F7F6F2' : '#8E8E93',
                          letterSpacing: '0.05em'
                        }}
                      >
                        {st.title} {isCurrent && <span style={{ fontFamily: 'JetBrains Mono', fontSize: '0.65rem', color: '#4CAF50', marginLeft: '8px' }}>[CURRENT STATUS]</span>}
                      </div>
                      <div style={{ fontFamily: 'Space Grotesk', fontSize: '0.85rem', color: '#8E8E93', marginTop: '2px' }}>
                        {st.desc}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

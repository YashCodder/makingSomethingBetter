import React from 'react';
import { FiX } from 'react-icons/fi';

export const SizeGuideModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const sizeChart = [
    { size: 'XS', chest: '40"', length: '27"', shoulder: '20"' },
    { size: 'S',  chest: '42"', length: '28"', shoulder: '21"' },
    { size: 'M',  chest: '44"', length: '29"', shoulder: '22"' },
    { size: 'L',  chest: '46"', length: '30"', shoulder: '23"' },
    { size: 'XL', chest: '48"', length: '31"', shoulder: '24"' },
    { size: 'XXL',chest: '50"', length: '32"', shoulder: '25"' },
  ];

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 10000,
        backgroundColor: 'rgba(0, 0, 0, 0.85)',
        backdropFilter: 'blur(8px)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '24px'
      }}
    >
      <div
        style={{
          backgroundColor: '#0A0A0A',
          border: '1px solid rgba(247, 246, 242, 0.15)',
          maxWidth: '600px',
          width: '100%',
          padding: '32px'
        }}
      >
        {/* HEADER */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginBottom: '24px',
            borderBottom: '1px solid rgba(247, 246, 242, 0.1)',
            paddingBottom: '16px'
          }}
        >
          <div>
            <h3
              style={{
                fontFamily: 'Syne, sans-serif',
                fontWeight: 800,
                fontSize: '1.2rem',
                letterSpacing: '0.1em',
                color: '#F7F6F2',
                margin: 0
              }}
            >
              SIZE GUIDE MATRIX
            </h3>
            <span
              style={{
                fontFamily: 'JetBrains Mono, monospace',
                fontSize: '0.7rem',
                color: '#8E8E93'
              }}
            >
              BOXY OVERSIZED FIT SPECIFICATIONS (INCHES)
            </span>
          </div>

          <button
            onClick={onClose}
            style={{
              background: 'none',
              border: 'none',
              color: '#F7F6F2',
              cursor: 'pointer'
            }}
          >
            <FiX size={24} />
          </button>
        </div>

        {/* TABLE */}
        <table
          style={{
            width: '100%',
            borderCollapse: 'collapse',
            fontFamily: 'JetBrains Mono, monospace',
            fontSize: '0.85rem',
            textAlign: 'left',
            marginBottom: '24px'
          }}
        >
          <thead>
            <tr style={{ borderBottom: '1px solid rgba(247, 246, 242, 0.2)', color: '#8E8E93' }}>
              <th style={{ padding: '12px' }}>SIZE</th>
              <th style={{ padding: '12px' }}>CHEST</th>
              <th style={{ padding: '12px' }}>LENGTH</th>
              <th style={{ padding: '12px' }}>SHOULDER</th>
            </tr>
          </thead>
          <tbody>
            {sizeChart.map((row) => (
              <tr
                key={row.size}
                style={{
                  borderBottom: '1px solid rgba(247, 246, 242, 0.08)',
                  color: '#F7F6F2'
                }}
              >
                <td style={{ padding: '12px', fontWeight: 700 }}>{row.size}</td>
                <td style={{ padding: '12px' }}>{row.chest}</td>
                <td style={{ padding: '12px' }}>{row.length}</td>
                <td style={{ padding: '12px' }}>{row.shoulder}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <div
          style={{
            fontFamily: 'Space Grotesk, sans-serif',
            fontSize: '0.8rem',
            color: '#8E8E93',
            lineHeight: 1.5,
            borderTop: '1px solid rgba(247, 246, 242, 0.08)',
            paddingTop: '16px'
          }}
        >
          * Measure around the fullest part of your chest. YRT Archive T-shirts are engineered for an intentional boxy drop-shoulder fit. If you prefer a fitted look, select one size down.
        </div>
      </div>
    </div>
  );
};

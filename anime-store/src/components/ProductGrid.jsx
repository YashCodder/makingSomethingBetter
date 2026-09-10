import React from 'react';
import { ProductCard } from './ProductCard';

export const ProductGrid = ({ products, asymmetric = true }) => {
  if (!products || products.length === 0) {
    return (
      <div
        style={{
          textAlign: 'center',
          padding: '80px 24px',
          border: '1px solid rgba(247, 246, 242, 0.1)',
          backgroundColor: '#121212'
        }}
      >
        <h3
          style={{
            fontFamily: 'Syne, sans-serif',
            fontSize: '1.5rem',
            letterSpacing: '0.1em',
            marginBottom: '12px'
          }}
        >
          THE ARCHIVE IS EMPTY.
        </h3>
        <p style={{ fontFamily: 'Space Grotesk', color: '#8E8E93' }}>
          No T-shirts matching your criteria were found.
        </p>
      </div>
    );
  }

  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: asymmetric
          ? 'repeat(auto-fit, minmax(320px, 1fr))'
          : 'repeat(auto-fill, minmax(280px, 1fr))',
        gap: '24px',
        width: '100%'
      }}
    >
      {products.map((product, idx) => {
        // Optional asymmetric span styling for specific grid positions
        const isFeaturedSpan = asymmetric && (idx === 0 || idx === 3);

        return (
          <div
            key={product.id}
            style={{
              gridColumn: isFeaturedSpan ? 'span 1' : 'span 1'
            }}
          >
            <ProductCard product={product} />
          </div>
        );
      })}
    </div>
  );
};

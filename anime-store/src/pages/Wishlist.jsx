import React from 'react';
import { Link } from 'react-router-dom';
import { useWishlist } from '../context/WishlistContext';
import { ProductGrid } from '../components/ProductGrid';

export const Wishlist = () => {
  const { wishlist } = useWishlist();

  return (
    <div style={{ padding: '60px 0 100px 0', minHeight: '75vh' }}>
      <div className="container">
        <div style={{ marginBottom: '40px' }}>
          <span className="archive-badge" style={{ marginBottom: '12px' }}>
            SAVED SELECTIONS
          </span>
          <h1
            style={{
              fontFamily: 'Syne, sans-serif',
              fontSize: 'clamp(2rem, 5vw, 4rem)',
              fontWeight: 800,
              letterSpacing: '-0.02em',
              textTransform: 'uppercase',
              margin: '8px 0 0 0',
              color: '#F7F6F2'
            }}
          >
            YOUR WISHLIST ({wishlist.length})
          </h1>
        </div>

        {wishlist.length === 0 ? (
          <div
            style={{
              textAlign: 'center',
              padding: '80px 24px',
              backgroundColor: '#121212',
              border: '1px solid rgba(247, 246, 242, 0.1)'
            }}
          >
            <h3 style={{ fontFamily: 'Syne', fontWeight: 800, fontSize: '1.4rem', marginBottom: '8px' }}>
              NOTHING SAVED YET.
            </h3>
            <p style={{ fontFamily: 'Space Grotesk', color: '#8E8E93', marginBottom: '24px' }}>
              Heart your favorite T-shirts from Drop 001 to save them for later.
            </p>
            <Link to="/shop" className="btn-primary">
              EXPLORE T-SHIRTS
            </Link>
          </div>
        ) : (
          <ProductGrid products={wishlist} asymmetric={false} />
        )}
      </div>
    </div>
  );
};

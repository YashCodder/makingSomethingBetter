import React, { useState, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { ProductGrid } from '../components/ProductGrid';
import { products } from '../data/products';
import { FiFilter, FiChevronDown } from 'react-icons/fi';

export const Shop = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialDrop = searchParams.get('drop') || 'ALL';

  const [selectedSize, setSelectedSize] = useState('ALL');
  const [selectedDrop, setSelectedDrop] = useState(initialDrop);
  const [sortBy, setSortBy] = useState('NEWEST');
  const [inStockOnly, setInStockOnly] = useState(false);

  const filteredProducts = useMemo(() => {
    let result = [...products];

    // Strictly T-Shirts filter guarantee
    result = result.filter(p => p.category === 'T-Shirts');

    // Size filter
    if (selectedSize !== 'ALL') {
      result = result.filter(p => p.sizes.includes(selectedSize));
    }

    // Drop filter
    if (selectedDrop !== 'ALL') {
      result = result.filter(p => p.drop === selectedDrop);
    }

    // Stock filter
    if (inStockOnly) {
      result = result.filter(p => p.stock > 0);
    }

    // Sorting
    if (sortBy === 'PRICE_LOW') {
      result.sort((a, b) => a.price - b.price);
    } else if (sortBy === 'PRICE_HIGH') {
      result.sort((a, b) => b.price - a.price);
    } else if (sortBy === 'POPULAR') {
      result.sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0));
    } else {
      // NEWEST
      result.sort((a, b) => (b.newArrival ? 1 : 0) - (a.newArrival ? 1 : 0));
    }

    return result;
  }, [selectedSize, selectedDrop, sortBy, inStockOnly]);

  return (
    <div style={{ padding: '40px 0 100px 0', minHeight: '80vh' }}>
      <div className="container">
        {/* HEADER TITLE */}
        <div style={{ marginBottom: '40px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '8px' }}>
            <span className="archive-badge">ARCHIVE CATALOGUE</span>
            <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '0.75rem', color: '#8E8E93' }}>
              T-SHIRTS ONLY [{filteredProducts.length}]
            </span>
          </div>

          <h1
            style={{
              fontFamily: 'Syne, sans-serif',
              fontSize: 'clamp(2.5rem, 6vw, 4.5rem)',
              fontWeight: 800,
              letterSpacing: '-0.02em',
              textTransform: 'uppercase',
              margin: 0,
              color: '#F7F6F2'
            }}
          >
            SHOP ALL T-SHIRTS
          </h1>
        </div>

        {/* CONTROLS BAR */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '20px',
            backgroundColor: '#121212',
            border: '1px solid rgba(247, 246, 242, 0.1)',
            padding: '16px 24px',
            marginBottom: '40px'
          }}
        >
          {/* FILTERS */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '20px', flexWrap: 'wrap' }}>
            {/* SIZE SELECTOR */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '0.75rem', color: '#8E8E93' }}>
                SIZE:
              </span>
              <div style={{ display: 'flex', gap: '4px' }}>
                {['ALL', 'XS', 'S', 'M', 'L', 'XL', 'XXL'].map((sz) => (
                  <button
                    key={sz}
                    onClick={() => setSelectedSize(sz)}
                    style={{
                      background: selectedSize === sz ? '#F7F6F2' : 'transparent',
                      color: selectedSize === sz ? '#0A0A0A' : '#F7F6F2',
                      border: '1px solid rgba(247, 246, 242, 0.2)',
                      fontFamily: 'JetBrains Mono, monospace',
                      fontSize: '0.7rem',
                      fontWeight: 600,
                      padding: '4px 8px',
                      cursor: 'pointer',
                      transition: 'all 0.15s ease'
                    }}
                  >
                    {sz}
                  </button>
                ))}
              </div>
            </div>

            {/* DROP SELECTOR */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '0.75rem', color: '#8E8E93' }}>
                DROP:
              </span>
              <select
                value={selectedDrop}
                onChange={(e) => setSelectedDrop(e.target.value)}
                style={{
                  backgroundColor: '#0A0A0A',
                  color: '#F7F6F2',
                  border: '1px solid rgba(247, 246, 242, 0.2)',
                  fontFamily: 'JetBrains Mono, monospace',
                  fontSize: '0.75rem',
                  padding: '6px 12px',
                  outline: 'none',
                  cursor: 'pointer'
                }}
              >
                <option value="ALL">ALL DROPS</option>
                <option value="DROP 001">DROP 001</option>
              </select>
            </div>
          </div>

          {/* SORTING */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '0.75rem', color: '#8E8E93' }}>
              SORT BY:
            </span>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              style={{
                backgroundColor: '#0A0A0A',
                color: '#F7F6F2',
                border: '1px solid rgba(247, 246, 242, 0.2)',
                fontFamily: 'JetBrains Mono, monospace',
                fontSize: '0.75rem',
                padding: '6px 12px',
                outline: 'none',
                cursor: 'pointer'
              }}
            >
              <option value="NEWEST">NEWEST RELEASES</option>
              <option value="PRICE_LOW">PRICE LOW → HIGH</option>
              <option value="PRICE_HIGH">PRICE HIGH → LOW</option>
              <option value="POPULAR">POPULARITY</option>
            </select>
          </div>
        </div>

        {/* PRODUCTS LISTING */}
        <ProductGrid products={filteredProducts} asymmetric={false} />
      </div>
    </div>
  );
};

import React from 'react';
import { Hero } from '../components/Hero';
import { Marquee } from '../components/Marquee';
import { BrandStatement } from '../components/BrandStatement';
import { ProductGrid } from '../components/ProductGrid';
import { SocialGrid } from '../components/SocialGrid';
import { Newsletter } from '../components/Newsletter';
import { products } from '../data/products';
import { drops } from '../data/drops';

export const Home = () => {
  const currentDropProducts = products.filter(p => p.drop === "DROP 001");
  const currentDropInfo = drops.find(d => d.code === "DROP 001");

  return (
    <div>
      {/* HERO */}
      <Hero />

      {/* MARQUEE */}
      <Marquee />

      {/* BRAND STATEMENT */}
      <BrandStatement />

      {/* CURRENT DROP SECTION */}
      <section id="current-drop" style={{ padding: '90px 0', backgroundColor: '#0A0A0A' }}>
        <div className="container">
          <div
            style={{
              display: 'flex',
              alignItems: 'flex-end',
              justifyContent: 'space-between',
              marginBottom: '48px',
              flexWrap: 'wrap',
              gap: '24px',
              borderBottom: '1px solid rgba(247, 246, 242, 0.1)',
              paddingBottom: '24px'
            }}
          >
            <div>
              <span className="archive-badge" style={{ marginBottom: '12px' }}>
                CURRENT RELEASE
              </span>
              <h2
                style={{
                  fontFamily: 'Syne, sans-serif',
                  fontSize: 'clamp(2rem, 4.5vw, 3.8rem)',
                  fontWeight: 800,
                  letterSpacing: '-0.02em',
                  textTransform: 'uppercase',
                  color: '#F7F6F2',
                  margin: 0
                }}
              >
                CURRENT DROP
              </h2>
              <div
                style={{
                  fontFamily: 'JetBrains Mono, monospace',
                  fontSize: '0.85rem',
                  color: '#8E8E93',
                  marginTop: '8px'
                }}
              >
                {currentDropInfo?.code} / {currentDropInfo?.title} — {currentDropProducts.length} T-SHIRTS
              </div>
            </div>

            <div
              style={{
                fontFamily: 'JetBrains Mono, monospace',
                fontSize: '0.78rem',
                color: '#55555B',
                textAlign: 'right'
              }}
            >
              RELEASED: {currentDropInfo?.releaseDate}<br />
              CATEGORY: T-SHIRTS ONLY
            </div>
          </div>

          {/* ASYMMETRIC PRODUCT GRID */}
          <ProductGrid products={currentDropProducts} asymmetric={true} />
        </div>
      </section>

      {/* SOCIAL GRID */}
      <SocialGrid />

      {/* NEWSLETTER */}
      <Newsletter />
    </div>
  );
};
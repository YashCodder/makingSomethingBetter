import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Link, useLocation } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import { WishlistProvider } from './context/WishlistContext';

import { Loader } from './components/Loader';
import { CustomCursor } from './components/CustomCursor';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { CartDrawer } from './components/CartDrawer';
import { SearchOverlay } from './components/SearchOverlay';

import { Home } from './pages/Home';
import { Shop } from './pages/Shop';
import { ProductDetail } from './pages/ProductDetail';
import { About } from './pages/About';
import { Wishlist } from './pages/Wishlist';
import { Checkout } from './pages/Checkout';
import { TrackOrder } from './pages/TrackOrder';

// Scroll to top on route change
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

// 404 Page
function NotFound() {
  return (
    <div style={{ padding: '120px 24px', textAlign: 'center', minHeight: '60vh' }}>
      <span className="archive-badge" style={{ marginBottom: '16px' }}>404 ERROR</span>
      <h1 style={{ fontFamily: 'Syne, sans-serif', fontSize: '3rem', fontWeight: 800, marginBottom: '12px' }}>
        WRONG DOOR.
      </h1>
      <p style={{ fontFamily: 'Space Grotesk, sans-serif', color: '#8E8E93', marginBottom: '32px' }}>
        The requested archive path does not exist.
      </p>
      <Link to="/" className="btn-primary">
        RETURN TO HOME ARCHIVE
      </Link>
    </div>
  );
}

export default function App() {
  const [initialLoading, setInitialLoading] = useState(true);
  const [searchOpen, setSearchOpen] = useState(false);

  return (
    <CartProvider>
      <WishlistProvider>
        <BrowserRouter>
          <ScrollToTop />
          <CustomCursor />

          {initialLoading && (
            <Loader onComplete={() => setInitialLoading(false)} />
          )}

          <div
            style={{
              opacity: initialLoading ? 0 : 1,
              transition: 'opacity 0.5s ease',
              minHeight: '100vh',
              display: 'flex',
              flexDirection: 'column'
            }}
          >
            <Header onOpenSearch={() => setSearchOpen(true)} />
            <SearchOverlay isOpen={searchOpen} onClose={() => setSearchOpen(false)} />
            <CartDrawer />

            <main style={{ flexGrow: 1 }}>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/shop" element={<Shop />} />
                <Route path="/product/:slug" element={<ProductDetail />} />
                <Route path="/about" element={<About />} />
                <Route path="/wishlist" element={<Wishlist />} />
                <Route path="/checkout" element={<Checkout />} />
                <Route path="/track-order" element={<TrackOrder />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </main>

            <Footer />
          </div>
        </BrowserRouter>
      </WishlistProvider>
    </CartProvider>
  );
}
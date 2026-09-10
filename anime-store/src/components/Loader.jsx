import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export const Loader = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            if (onComplete) onComplete();
          }, 300);
          return 100;
        }
        const next = prev + Math.floor(Math.random() * 18) + 8;
        return next > 100 ? 100 : next;
      });
    }, 60);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.5, ease: "easeInOut" } }}
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 10000,
        backgroundColor: '#0A0A0A',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '24px',
        color: '#F7F6F2'
      }}
    >
      <div style={{ textAlign: 'center', maxWidth: '360px' }}>
        <motion.div
          initial={{ scale: 0.85, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6 }}
          style={{ marginBottom: '28px' }}
        >
          <img
            src="/images/logo/yrt-logo.png"
            alt="YRT ARCHIVE"
            style={{ width: '88px', height: 'auto', filter: 'brightness(1)' }}
          />
        </motion.div>

        <motion.h1
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          style={{
            fontFamily: 'Syne, sans-serif',
            fontSize: '1.4rem',
            fontWeight: 800,
            letterSpacing: '0.15em',
            textTransform: 'uppercase',
            marginBottom: '8px'
          }}
        >
          YRT ARCHIVE
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.6 }}
          transition={{ delay: 0.3 }}
          style={{
            fontFamily: 'JetBrains Mono, monospace',
            fontSize: '0.75rem',
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
            marginBottom: '32px'
          }}
        >
          LOADING THE ARCHIVE...
        </motion.p>

        {/* Counter */}
        <div
          style={{
            fontFamily: 'JetBrains Mono, monospace',
            fontSize: '2.5rem',
            fontWeight: 600,
            letterSpacing: '-0.02em',
            color: '#F7F6F2'
          }}
        >
          {String(progress).padStart(2, '0')}%
        </div>

        {/* Subtle Loading Line */}
        <div
          style={{
            width: '100%',
            height: '2px',
            backgroundColor: 'rgba(255, 255, 255, 0.1)',
            marginTop: '24px',
            position: 'relative',
            overflow: 'hidden'
          }}
        >
          <div
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              bottom: 0,
              width: `${progress}%`,
              backgroundColor: '#F7F6F2',
              transition: 'width 0.1s linear'
            }}
          />
        </div>
      </div>
    </motion.div>
  );
};

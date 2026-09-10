import React, { useEffect, useState } from 'react';

export const CustomCursor = () => {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [cursorState, setCursorState] = useState({ active: false, label: '' });
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768 || 'ontouchstart' in window);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);

    const onMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const onMouseOver = (e) => {
      const target = e.target.closest('[data-cursor]');
      if (target) {
        const label = target.getAttribute('data-cursor') || '';
        setCursorState({ active: true, label });
      } else if (e.target.closest('a, button, input, select')) {
        setCursorState({ active: true, label: '' });
      } else {
        setCursorState({ active: false, label: '' });
      }
    };

    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseover', onMouseOver);

    return () => {
      window.removeEventListener('resize', checkMobile);
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseover', onMouseOver);
    };
  }, []);

  if (isMobile) return null;

  return (
    <div
      style={{
        position: 'fixed',
        left: 0,
        top: 0,
        transform: `translate3d(${position.x}px, ${position.y}px, 0)`,
        pointerEvents: 'none',
        zIndex: 99999,
        transition: 'transform 0.05s ease-out',
      }}
    >
      <div
        style={{
          transform: 'translate(-50%, -50%)',
          width: cursorState.active ? (cursorState.label ? '56px' : '32px') : '12px',
          height: cursorState.active ? (cursorState.label ? '56px' : '32px') : '12px',
          borderRadius: '50%',
          backgroundColor: cursorState.label ? '#F7F6F2' : 'transparent',
          border: cursorState.label ? 'none' : '1px solid rgba(247, 246, 242, 0.8)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#0A0A0A',
          fontFamily: 'JetBrains Mono, monospace',
          fontSize: '0.65rem',
          fontWeight: 700,
          letterSpacing: '0.05em',
          textTransform: 'uppercase',
          transition: 'width 0.2s cubic-bezier(0.16, 1, 0.3, 1), height 0.2s cubic-bezier(0.16, 1, 0.3, 1), background-color 0.2s ease',
          boxShadow: cursorState.label ? '0 8px 24px rgba(0,0,0,0.5)' : 'none'
        }}
      >
        {cursorState.label}
      </div>
    </div>
  );
};

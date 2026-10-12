import React, { useEffect, useState, useRef } from 'react';

export default function CustomCursor() {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [trailPos, setTrailPos] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [cursorText, setCursorText] = useState('');

  const targetRef = useRef({ x: -100, y: -100 });
  const currentRef = useRef({ x: -100, y: -100 });
  const requestRef = useRef(null);

  useEffect(() => {
    // Only show on desktop/pointer devices
    if (window.matchMedia('(pointer: coarse)').matches) return;

    const onMouseMove = (e) => {
      targetRef.current = { x: e.clientX, y: e.clientY };
      setPos({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);

      // Check if hovering over clickable element
      const target = e.target;
      const interactiveEl = target.closest('a, button, [role="button"], input, .framer-bPcig, .framer-tumop7, [data-framer-cursor]');
      if (interactiveEl) {
        setIsHovered(true);
        if (interactiveEl.closest('.framer-bPcig')) {
          setCursorText('VIEW');
        } else if (interactiveEl.closest('[data-framer-name="Name"]')) {
          setCursorText('BEJAMAN');
        } else {
          setCursorText('');
        }
      } else {
        setIsHovered(false);
        setCursorText('');
      }
    };

    const onMouseDown = () => setIsClicking(true);
    const onMouseUp = () => setIsClicking(false);
    const onMouseLeave = () => setIsVisible(false);
    const onMouseEnter = () => setIsVisible(true);

    window.addEventListener('mousemove', onMouseMove, { passive: true });
    window.addEventListener('mousedown', onMouseDown);
    window.addEventListener('mouseup', onMouseUp);
    document.addEventListener('mouseleave', onMouseLeave);
    document.addEventListener('mouseenter', onMouseEnter);

    // Smooth animation loop for the trailing ring
    const animate = () => {
      const ease = 0.18;
      currentRef.current.x += (targetRef.current.x - currentRef.current.x) * ease;
      currentRef.current.y += (targetRef.current.y - currentRef.current.y) * ease;
      setTrailPos({ x: currentRef.current.x, y: currentRef.current.y });
      requestRef.current = requestAnimationFrame(animate);
    };
    requestRef.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mousedown', onMouseDown);
      window.removeEventListener('mouseup', onMouseUp);
      document.removeEventListener('mouseleave', onMouseLeave);
      document.removeEventListener('mouseenter', onMouseEnter);
      if (requestRef.current) cancelAnimationFrame(requestRef.current);
    };
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <>
      {/* Outer Spring Ring */}
      <div
        className={`custom-cursor-follower ${isHovered ? 'hovered' : ''} ${isClicking ? 'clicking' : ''}`}
        style={{
          transform: `translate3d(${trailPos.x}px, ${trailPos.y}px, 0) translate(-50%, -50%)`,
        }}
      >
        {cursorText && <span className="custom-cursor-badge-text">{cursorText}</span>}
      </div>

      {/* Inner Dot */}
      <div
        className={`custom-cursor-dot ${isHovered ? 'hovered' : ''} ${isClicking ? 'clicking' : ''}`}
        style={{
          transform: `translate3d(${pos.x}px, ${pos.y}px, 0) translate(-50%, -50%)`,
        }}
      />
    </>
  );
}

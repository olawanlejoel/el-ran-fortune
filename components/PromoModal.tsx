import { useEffect, useState } from 'react';
import Image from 'next/image';

const STORAGE_KEY = 'el_ran_promo_last_shown';
// Re-show modal every 24 hours so it doesn't become annoying
const RESSHOW_INTERVAL_MS = 24 * 60 * 60 * 1000;
const DELAY_MS = 5 * 1000; // 5 seconds

export default function PromoModal() {
  const [visible, setVisible] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

    const lastShown = localStorage.getItem(STORAGE_KEY);
    const now = Date.now();

    if (lastShown && now - parseInt(lastShown, 10) < RESSHOW_INTERVAL_MS) {
      return; // Already shown recently, skip
    }

    const timer = setTimeout(() => {
      setVisible(true);
      localStorage.setItem(STORAGE_KEY, String(Date.now()));
    }, DELAY_MS);

    return () => clearTimeout(timer);
  }, []);

  const close = () => setVisible(false);

  if (!mounted) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        onClick={close}
        style={{
          position: 'fixed',
          inset: 0,
          background: 'rgba(10, 0, 20, 0.72)',
          backdropFilter: 'blur(6px)',
          WebkitBackdropFilter: 'blur(6px)',
          zIndex: 9998,
          opacity: visible ? 1 : 0,
          pointerEvents: visible ? 'auto' : 'none',
          transition: 'opacity 0.4s ease',
        }}
        aria-hidden="true"
      />

      {/* Modal card */}
      <div
        role="dialog"
        aria-modal="true"
        aria-label="Program flyer"
        style={{
          position: 'fixed',
          top: '50%',
          left: '50%',
          transform: visible
            ? 'translate(-50%, -50%) scale(1)'
            : 'translate(-50%, -50%) scale(0.88)',
          opacity: visible ? 1 : 0,
          pointerEvents: visible ? 'auto' : 'none',
          transition: 'opacity 0.4s ease, transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)',
          zIndex: 9999,
          maxWidth: 'min(95vw, 580px)',
          maxHeight: '90vh',
          overflowY: 'auto',
          borderRadius: '16px',
          boxShadow: '0 32px 80px rgba(0,0,0,0.55), 0 0 0 1px rgba(255,255,255,0.08)',
        }}
      >
        {/* Close button */}
        <button
          onClick={close}
          aria-label="Close modal"
          style={{
            position: 'absolute',
            top: '12px',
            right: '12px',
            width: '36px',
            height: '36px',
            borderRadius: '50%',
            border: 'none',
            background: 'rgba(0,0,0,0.55)',
            backdropFilter: 'blur(4px)',
            color: '#fff',
            fontSize: '18px',
            lineHeight: 1,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            zIndex: 1,
            transition: 'background 0.2s ease, transform 0.2s ease',
          }}
          onMouseEnter={e => {
            (e.currentTarget as HTMLButtonElement).style.background = 'rgba(197,63,107,0.85)';
            (e.currentTarget as HTMLButtonElement).style.transform = 'scale(1.1)';
          }}
          onMouseLeave={e => {
            (e.currentTarget as HTMLButtonElement).style.background = 'rgba(0,0,0,0.55)';
            (e.currentTarget as HTMLButtonElement).style.transform = 'scale(1)';
          }}
        >
          ✕
        </button>

        {/* Flyer image — renders at its natural dimensions, constrained by the card */}
        <Image
          src="/images/single-but-relevant.png"
          alt="Program Flyer"
          width={0}
          height={0}
          sizes="(max-width: 600px) 95vw, 580px"
          style={{ width: '100%', height: 'auto', display: 'block' }}
          priority
        />
      </div>
    </>
  );
}

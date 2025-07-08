'use client';

import { useEffect, useState } from 'react';

export default function GlobalLoader() {
  const [visible, setVisible] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const handleLoad = () => {
      setFadeOut(true);
      setTimeout(() => setVisible(false), 500); // chờ CSS animation
    };

    // Trường hợp 1: tài nguyên chưa load => đợi sự kiện load
    if (document.readyState !== 'complete') {
      window.addEventListener('load', handleLoad);
    } else {
      // Trường hợp 2: window đã load xong trước khi React hydrate
      handleLoad();
    }

    return () => {
      window.removeEventListener('load', handleLoad);
    };
  }, []);

  if (!visible) return null;

  return (
    <div id="global-loader" className={`section-loader ${fadeOut ? 'fade-out' : ''}`}>
      <span className="loader"></span>
    </div>
  );
}

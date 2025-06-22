'use client';

import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';

const Loader = () => {
  const [loading, setLoading] = useState(true);
  const pathname = usePathname();

  useEffect(() => {
    setLoading(true); // Bật loader khi đổi route

    const timer = setTimeout(() => {
      setLoading(false);
    }, 300);

    return () => clearTimeout(timer);
  }, [pathname]);

  useEffect(() => {
    // Ẩn loader sau render lần đầu
    setLoading(false);
  }, []);

  if (!loading) return null;

  return (
    <div className="section-loader fade-out">
      <div className="loader">
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default Loader;

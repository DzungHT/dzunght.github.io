// src/components/Loader.tsx
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

const Loader = () => {
  const [loading, setLoading] = useState(true);
  const location = useLocation();

  useEffect(() => {
    setLoading(true); // bật loader khi đổi route
  }, [location.pathname]);

  useEffect(() => {
    // layout render xong thì ẩn loader
    setLoading(false);
  }, []); // chỉ chạy 1 lần sau render đầu tiên

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

// src/components/Loader.tsx
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

const Loader = () => {
  const [loading, setLoading] = useState(true);
  const location = useLocation();

  useEffect(() => {
    setLoading(true); // bật loader khi đổi route

    // Delay nhỏ để giả lập loading (hoặc bạn có thể thay bằng trạng thái thực tế như fetch xong)
    const timer = setTimeout(() => {
      setLoading(false);
    }, 300);

    return () => clearTimeout(timer);
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

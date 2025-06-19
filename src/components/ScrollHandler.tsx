// src/components/ScrollHandler.tsx
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function ScrollHandler() {
  const location = useLocation();

  useEffect(() => {
    const scrollTo = location.state?.scrollTo;
    const behavior = 'smooth';

    if (scrollTo) {
      // Đợi DOM render xong rồi scroll đến id
      setTimeout(() => {
        const el = document.getElementById(scrollTo);
        if (el) {
          el.scrollIntoView({ behavior });
        } else {
          // Nếu không có element thì fallback scroll top
          window.scrollTo({ top: 0, behavior });
        }
      }, 100); // delay nhỏ để đảm bảo phần tử tồn tại
    } else {
      // Không có scrollTo thì scroll top như mặc định
      window.scrollTo({ top: 0, behavior });
    }
  }, [location.pathname]); // chỉ chạy khi path thay đổi

  return null;
}

'use client';

import { useEffect, useRef, useState } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';

export default function ScrollHandler() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const [handled, setHandled] = useState(false);
  const lastScrollTarget = useRef<string | null>(null);

  useEffect(() => {
    const scrollTo = searchParams.get('scrollTo');
    const behavior: ScrollBehavior = 'smooth';

    const target = scrollTo || lastScrollTarget.current;

    if (!target || handled) return;

    setHandled(true);
    lastScrollTarget.current = target;

    setTimeout(() => {
      const el = document.getElementById(target);
      if (el) {
        el.scrollIntoView({ behavior });
      } else {
        window.scrollTo({ top: 0, behavior });
      }

      // ✅ Xóa query 'scrollTo' mà không trigger Next.js rerender
      if (scrollTo) {
        const url = new URL(window.location.href);
        url.searchParams.delete('scrollTo');
        window.history.replaceState({}, '', url.toString()); // không reload, không rerender
      }
    }, 100);
  }, [pathname, searchParams, handled]);

  useEffect(() => {
    setHandled(false); // reset mỗi khi route thay đổi
  }, [pathname]);

  return null;
}

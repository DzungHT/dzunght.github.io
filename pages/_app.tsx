import '@/styles/custom/bootstrap-base.scss'; // Import CSS của bạn
import '@/styles/style.scss'; // Import CSS của bạn
import '@/styles/responsive.scss'; // Import CSS của bạn
import type { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import BlogLayout from '@/layouts/BlogLayout';
import DefaultLayout from '@/layouts/DefaultLayout';

export default function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    const globalLoader = document.getElementById('global-loader');
    if (globalLoader) {
      globalLoader.remove();
    }
  }, []);
  const router = useRouter();

  // Chọn layout dựa trên đường dẫn
  const getLayout = () => {
    if (router.pathname.startsWith('/blog')) {
      return (page: React.ReactNode) => <BlogLayout>{page}</BlogLayout>;
    }
    return (page: React.ReactNode) => <DefaultLayout>{page}</DefaultLayout>;
  };

  const render = getLayout();
  return render(<Component {...pageProps} />);
}

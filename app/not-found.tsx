import Link from 'next/link';

export default function NotFound() {
  return (
    <div style={{ padding: '4rem', textAlign: 'center' }}>
      <h1>404 - Page Not Found</h1>
      <p>The page you&#39;re looking for does not exist.</p>
      <Link href="/" style={{ color: '#0070f3', textDecoration: 'underline' }}>
        Go back home
      </Link>
    </div>
  );
}

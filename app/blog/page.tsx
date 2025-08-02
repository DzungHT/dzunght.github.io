import { Metadata } from 'next';
import { getBlogPosts } from '@/lib/blogUtils';
import BlogList from '@/app/_components/blog-page/BlogList';

export const metadata: Metadata = {
  title: 'Blogs | Hoang Tri Dung',
  description: 'Read my latest thoughts on software development, project management, and technology.',
  openGraph: {
    title: 'Blogs | Hoang Tri Dung',
    description: 'Read my latest thoughts on software development, project management, and technology.',
    type: 'website',
    url: 'https://dzunght.github.io/blog',
    images: [
      {
        url: 'https://dzunght.github.io/og-image.png',
        alt: 'Hoang Tri Dung | Project Manager & Software Engineer',
      },
    ],
  },
};

export default async function BlogPage() {
  const posts = await getBlogPosts();

  return <BlogList posts={posts} />;
}

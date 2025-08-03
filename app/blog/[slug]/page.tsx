import BlogPost from '@/app/_components/blog-page/BlogPost';
import MarkdownContent from '@/components/MarkdownContent';
import { getBlogPost, getBlogPosts } from '@/lib/blogUtils';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Script from 'next/script';

// Định nghĩa một kiểu dữ liệu cho params
interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const posts = await getBlogPosts();

  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const paramsData = await params;
  const post = await getBlogPost(paramsData.slug);

  if (!post) {
    return {
      title: 'Post Not Found',
    };
  }

  return {
    title: `${post.title} | Hoang Tri Dung`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: 'article',
      publishedTime: post.date,
      authors: [post.author],
    },
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const paramsData = await params;
  const post = await getBlogPost(paramsData.slug);

  if (!post) {
    notFound();
  }
  return (
    <BlogPost post={post}>
      <MarkdownContent content={post.content} />
      <Script src="/js/copy-code.js" async={true} />
    </BlogPost>
  );
}

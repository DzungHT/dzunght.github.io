import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  author: string;
  readTime: string;
  tags: string[];
}

export async function getBlogPosts(): Promise<BlogPost[]> {
  const blogDirectory = path.join(process.cwd(), 'app/blog');

  try {
    const entries = fs.readdirSync(blogDirectory, { withFileTypes: true });
    const posts = entries
      .filter((entry) => entry.isDirectory())
      .map((entry) => {
        const slug = entry.name;
        const filePath = path.join(blogDirectory, slug, 'index.mdx');
        if (!fs.existsSync(filePath)) return null;
        const fileContents = fs.readFileSync(filePath, 'utf8');
        const { data } = matter(fileContents);
        return {
          slug,
          title: data.title || 'Untitled',
          excerpt: data.excerpt || 'No excerpt available',
          date: data.date || new Date().toISOString(),
          author: data.author || 'Hoang Tri Dung',
          readTime: data.readTime || '5 min read',
          tags: data.tags || [],
        };
      })
      .filter(Boolean)
      .sort((a, b) => new Date(b!.date).getTime() - new Date(a!.date).getTime());
    return posts as BlogPost[];
  } catch (error) {
    console.error('Error reading blog posts:', error);
    return [];
  }
}

export async function getBlogPost(slug: string): Promise<BlogPost & { content: string } | null> {
  const blogDirectory = path.join(process.cwd(), 'app/blog');
  const filePath = path.join(blogDirectory, slug, 'index.mdx');

  try {
    if (!fs.existsSync(filePath)) return null;
    const fileContents = fs.readFileSync(filePath, 'utf8');
    const { data, content } = matter(fileContents);
    return {
      slug,
      title: data.title || 'Untitled',
      excerpt: data.excerpt || 'No excerpt available',
      date: data.date || new Date().toISOString(),
      author: data.author || 'Hoang Tri Dung',
      readTime: data.readTime || '5 min read',
      tags: data.tags || [],
      content,
    };
  } catch (error) {
    console.error(`Error reading blog post ${slug}:`, error);
    return null;
  }
} 
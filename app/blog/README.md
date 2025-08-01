# Blog System

This directory contains the blog functionality for the portfolio website.

## Structure

- `page.tsx` - Main blog listing page
- `[slug]/page.tsx` - Individual blog post page
- `*.mdx` - Blog post files in Markdown format

## Adding New Blog Posts

1. Create a new `.mdx` file in this directory
2. Add frontmatter at the top of the file:

```markdown
---
title: "Your Blog Post Title"
excerpt: "A brief description of your blog post"
date: "YYYY-MM-DD"
author: "Hoang Tri Dung"
readTime: "X min read"
tags: ["Tag1", "Tag2", "Tag3"]
---
```

3. Write your content in Markdown format below the frontmatter

## Frontmatter Fields

- `title` (required): The title of your blog post
- `excerpt` (required): A brief description shown in the blog listing
- `date` (required): Publication date in YYYY-MM-DD format
- `author` (optional): Author name (defaults to "Hoang Tri Dung")
- `readTime` (optional): Estimated reading time (defaults to "5 min read")
- `tags` (optional): Array of tags for categorization

## Markdown Features

The blog system supports:

- **Headers**: `# H1`, `## H2`, etc.
- **Code blocks**: ```javascript for syntax highlighting
- **Inline code**: `code`
- **Links**: [text](url)
- **Images**: ![alt](src)
- **Lists**: Both ordered and unordered
- **Blockquotes**: > quoted text
- **Tables**: Standard markdown table syntax
- **Bold/Italic**: **bold** and *italic*

## Example Blog Post

````markdown
---
title: "My First Blog Post"
excerpt: "This is my first blog post about web development"
date: "2024-01-15"
author: "Hoang Tri Dung"
readTime: "3 min read"
tags: ["Web Development", "JavaScript"]
---

# My First Blog Post

This is the content of my blog post...

## Code Example

```javascript
console.log("Hello, World!");
```
````

## Conclusion

Thanks for reading!
```

## Navigation

The blog is accessible via the "Blog" link in the main navigation menu. 
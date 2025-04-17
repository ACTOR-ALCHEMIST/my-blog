import { BlogPost } from '@/types/blog';

// 模拟博客文章数据
const posts: BlogPost[] = [
  {
    id: '1',
    title: 'Getting Started with Next.js',
    excerpt: 'Learn how to build modern web applications with Next.js',
    content: `
      Next.js is a powerful React framework that makes building full-stack web applications simple and efficient.

      ## Key Features
      - Server-side rendering
      - Static site generation
      - API routes
      - File-system based routing
      - Built-in CSS and Sass support

      ## Getting Started
      To create a new Next.js project, run:
      \`\`\`bash
      npx create-next-app@latest my-app
      \`\`\`

      This will set up a new Next.js project with all the necessary dependencies and configuration.
    `,
    date: '2024-03-20',
    slug: 'getting-started-with-nextjs',
    author: {
      name: 'John Doe',
      image: '/images/avatar.jpg'
    }
  },
  {
    id: '2',
    title: 'Understanding Sanity CMS',
    excerpt: 'A comprehensive guide to using Sanity as your headless CMS',
    content: `
      Sanity is a powerful headless CMS that makes content management simple and flexible.

      ## Why Sanity?
      - Real-time collaboration
      - Custom content models
      - Powerful query language
      - Great developer experience
      - Excellent documentation

      ## Setting Up Sanity
      To get started with Sanity, first install the CLI:
      \`\`\`bash
      npm install -g @sanity/cli
      \`\`\`

      Then create a new project:
      \`\`\`bash
      sanity init
      \`\`\`
    `,
    date: '2024-03-15',
    slug: 'understanding-sanity-cms',
    author: {
      name: 'Jane Smith',
      image: '/images/avatar2.jpg'
    }
  },
  {
    id: '3',
    title: 'Building a Personal Blog with Next.js and Sanity',
    excerpt: 'A step-by-step guide to creating your own blog',
    content: `
      In this post, we'll walk through creating a personal blog using Next.js and Sanity CMS.

      ## Project Setup
      First, let's create a new Next.js project and set up Sanity Studio.

      ## Content Modeling
      We'll create content models for blog posts, authors, and categories.

      ## Building the Frontend
      Using Next.js to create a beautiful and performant blog interface.

      ## Deployment
      Finally, we'll deploy our blog to Vercel and set up Sanity for content management.
    `,
    date: '2024-03-10',
    slug: 'building-personal-blog',
    author: {
      name: 'Alex Johnson',
      image: '/images/avatar3.jpg'
    }
  }
];

// 获取所有博客文章
export async function getAllPosts(): Promise<BlogPost[]> {
  // 模拟API延迟
  await new Promise(resolve => setTimeout(resolve, 100));
  return posts;
}

// 根据slug获取单篇文章
export async function getPostBySlug(slug: string): Promise<BlogPost | null> {
  // 模拟API延迟
  await new Promise(resolve => setTimeout(resolve, 100));
  return posts.find(post => post.slug === slug) || null;
} 
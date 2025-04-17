export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  slug: string;
  author?: {
    name: string;
    image?: string;
  };
  coverImage?: {
    url: string;
    alt: string;
  };
} 
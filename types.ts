export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  imageUrl: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  imageUrl: string;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  author: string;
  category: string;
  imageUrl: string;
}

export enum Page {
  HOME = 'HOME',
  ABOUT = 'ABOUT',
  SERVICES = 'SERVICES',
  PORTFOLIO = 'PORTFOLIO',
  BLOG = 'BLOG',
  CONTACT = 'CONTACT'
}

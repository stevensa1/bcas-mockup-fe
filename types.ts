export interface Product {
  id: string;
  title: string;
  description: string;
  icon: string;
  link: string;
}

export interface NavItem {
  label: string;
  href: string;
  children?: { label: string; href: string; desc?: string }[];
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'model';
  text: string;
  timestamp: Date;
}

export interface Article {
  id: string;
  title: string;
  category: string;
  date: string;
  summary: string;
  image: string;
}
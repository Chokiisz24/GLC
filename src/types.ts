// src/types.ts

export interface TelemetryStat {
  value: string;
  label: string;
  accent?: string;
  sub?: string;
}

export interface TimelineItem {
  title: string;
  description: string;
  location?: string; // Opcional
  date?: string;
  status?: string;
  year?: string;
  badge?: string;
}

export interface GalleryItem {
  src: string;
  alt: string;
  size?: 'normal' | 'tall' | 'wide';
  id?: string;
  title?: string;
  category?: string;
  imageUrl?: string;
  specs?: string;
}

export interface NavItem {
  label: string;
  href: string;
}
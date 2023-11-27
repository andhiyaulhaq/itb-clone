export interface Agenda {
  id?: number;
  title: string;
  date: number;
  month: string;
  day: string;
}

export interface Berita {
  id?: number;
  title: string;
  url: string;
  date: string;
  category: string;
  preview: string;
}

export interface Menu {
  text: string;
  url: string;
}

export interface Multikampus {
  id?: number;
  title: string;
  icon: string;
  address: string;
  email: string | null;
}

export interface Partner {
  title: string;
  img: string;
}

export interface SitemapChild {
  text: string;
  url: string;
}

export interface SitemapParent {
  parent: string;
  children: SitemapChild[];
}

export interface Slide {
  url: string;
  title: string;
}

export interface SlideShowProps {
  slideArray: Slide[];
}

export interface Video {
  id?: number;
  title: string;
  thumbnail: string;
}

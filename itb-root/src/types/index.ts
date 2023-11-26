export interface Agenda {
  id: number;
  title: string;
  date: number;
  month: string;
  day: string;
}

export interface Berita {
  id: number;
  title: string;
  url: string;
  date: string;
  category: string;
  preview: string;
}

export interface menu {
  text: string;
  url: string;
}

export interface Slide {
  url: string;
  title: string;
}

export interface SlideShowProps {
  slideArray: Slide[];
}

export interface Video {
  id: number;
  title: string;
  thumbnail: string;
}

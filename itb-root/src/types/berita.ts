export interface Berita {
  id: number;
  title: string;
  url: string;
  date: string;
  category: string;
  preview: string;
}

export interface BeritaProps {
  berita: Berita[];
}

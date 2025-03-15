export type Translation = {
  title: string;
  description: string;
};

export type Translations = {
  [key: string]: Translation;
};

export type NewsItem = {
  uuid: string;
  images: string[];
  created_at: string;
  updated_at: string;
  translations: Translations;
};
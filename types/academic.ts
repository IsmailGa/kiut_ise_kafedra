export type Translation = {
  title: string;
  program: string;
  study_format: string[];
};
type Translations = {
  [key: string]: Translation;
};

export type AcademicPrograms = {
  year: number;
  translations: Translations;
};

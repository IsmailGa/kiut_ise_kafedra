export type Translation = {
  name: string;
  description: string;
};

export type Translations = {
  [key: string]: Translation;
};

export type SubjectsItem = {
  uuid: string;
  credits: number;
  semester: number;
  academic_program_id: string;
  translations: Translations;
};

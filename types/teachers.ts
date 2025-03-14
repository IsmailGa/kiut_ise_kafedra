export interface ResearchInterest {
  uuid: string;
  title: string;
}

export interface Publication {
  uuid: string;
  title: string;
  link: string;
  pre_print_link: string;
 
}

export interface TranslationBase {
  en: { [key: string]: string };
  ru: { [key: string]: string };
  uz: { [key: string]: string };
}

export interface ResearchInterest {
  uuid: string;
  translations: TranslationBase & {
    en: { title: string };
    ru: { title: string };
    uz: { title: string };
  };
}

export interface WorkExperience {
  uuid: string;
  from_date: string;
  to_date: string;
  translations: TranslationBase & {
    en: { role: string; place: string };
    ru: { role: string; place: string };
    uz: { role: string; place: string };
  };
}

export interface Education {
  uuid: string;
  from_date: string;
  to_date: string;
  translations: TranslationBase & {
    en: { place: string; degree: string };
    ru: { place: string; degree: string };
    uz: { place: string; degree: string };
  };
}
export interface Translation {
  role: string;
  biography: string;
  full_name: string;
}

export interface Translations {
  en: Translation;
  ru: Translation;
  uz: Translation;
}

export interface Teacher {
  uuid: string;
  email: string;
  scopus_link: string;
  image: string;
  research_interests: ResearchInterest[];
  publications: Publication[];
  work_experiences: WorkExperience[];
  educations: Education[];
  translations: Translations;
}

export type TeachersType = Teacher[];
export type TeacherType = Teacher;

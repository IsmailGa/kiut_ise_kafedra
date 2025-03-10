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

export interface WorkExperience {
  uuid: string;
  place: string;
  role: string;
  from_date: string;
  to_date: string;
}

export interface Education {
  uuid: string;
  place: string;
  degree: string;
  from_date: string;
  to_date: string;
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

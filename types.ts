
export type Language = 'es' | 'en';

export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  imageUrl: string;
  link: string;
  code: string;
}

export interface Skill {
  name: string;
  level: number;
  category: 'Frontend' | 'Backend' | 'Tools' | 'Soft Skills';
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}

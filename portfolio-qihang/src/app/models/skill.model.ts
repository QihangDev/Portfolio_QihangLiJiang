export interface Skill {
  name: string;
  level: number;
  category: 'frontend' | 'backend' | 'tools' | 'other';
}

export interface SkillCategory {
  title: string;
  skills: Skill[];
}

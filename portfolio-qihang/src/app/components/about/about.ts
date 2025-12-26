import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SkillCategory } from '../../models/skill.model';

@Component({
  selector: 'app-about',
  imports: [CommonModule],
  templateUrl: './about.html',
  styleUrl: './about.css'
})
export class About {
  profileImage = 'https://via.placeholder.com/400x400';

  aboutText = {
    intro: 'Soy un desarrollador de software apasionado por crear soluciones innovadoras y eficientes.',
    description: 'Con experiencia en desarrollo full-stack, me especializo en construir aplicaciones web modernas y escalables. Me encanta aprender nuevas tecnologías y enfrentar desafíos técnicos complejos.',
    focus: 'Actualmente me enfoco en desarrollo frontend con Angular, React y en tecnologías backend como Node.js y bases de datos modernas.'
  };

  skillCategories: SkillCategory[] = [
    {
      title: 'Frontend',
      skills: [
        { name: 'Angular', level: 90, category: 'frontend' },
        { name: 'React', level: 85, category: 'frontend' },
        { name: 'TypeScript', level: 88, category: 'frontend' },
        { name: 'JavaScript', level: 90, category: 'frontend' },
        { name: 'HTML/CSS', level: 95, category: 'frontend' }
      ]
    },
    {
      title: 'Backend',
      skills: [
        { name: 'Node.js', level: 85, category: 'backend' },
        { name: 'Express', level: 80, category: 'backend' },
        { name: 'MongoDB', level: 75, category: 'backend' },
        { name: 'PostgreSQL', level: 78, category: 'backend' },
        { name: 'REST APIs', level: 88, category: 'backend' }
      ]
    },
    {
      title: 'Herramientas',
      skills: [
        { name: 'Git', level: 90, category: 'tools' },
        { name: 'Docker', level: 75, category: 'tools' },
        { name: 'VS Code', level: 95, category: 'tools' },
        { name: 'npm/yarn', level: 88, category: 'tools' }
      ]
    }
  ];
}

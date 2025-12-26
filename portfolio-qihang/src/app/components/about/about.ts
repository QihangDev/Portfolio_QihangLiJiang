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
  profileImage = '/img/foto_perfil.jpeg';

  aboutText = {
    intro: 'Soy un desarrollador apasionado por solucionar retos tecnológicos',
    description: 'Actualmente tengo el título de técnico superior en Desarrollo de Aplicaciones Multiplataforma (DAM) y estoy estudiando Ingeniería Informática, lo que me permite combinar una base sólida de programación con una visión más profunda de la ingeniería del software.',
    focus: 'Mi objetivo a corto plazo es adquirir una sólida experiencia en el sector tecnológico para, posteriormente, aspirar a un rol con mayores responsabilidades y liderazgo.'
  };

  skillCategories: SkillCategory[] = [
    {
      title: 'Frontend',
      skills: [
        { name: 'Angular', level: 70, category: 'frontend' },
        { name: 'Vue', level: 60, category: 'frontend' },
        { name: 'TypeScript', level: 90, category: 'frontend' },
        { name: 'JavaScript', level: 80, category: 'frontend' },
        { name: 'HTML/CSS', level: 100, category: 'frontend' }
      ]
    },
    {
      title: 'Backend',
      skills: [
        { name: 'C# / .NET', level: 100, category: 'backend' },
        { name: 'Java', level: 80, category: 'backend' },
        { name: 'Kotlin', level: 50, category: 'backend' },
        { name: 'MongoDB', level: 70, category: 'backend' },
        { name: 'PostgreSQL', level: 90, category: 'backend' },
        { name: 'REST APIs', level: 90, category: 'backend' }
      ]
    },
    {
      title: 'Herramientas',
      skills: [
        { name: 'Git', level: 100, category: 'tools' },
        { name: 'Jira', level: 90, category: 'tools' },
        { name: 'Docker', level: 50, category: 'tools' },
        { name: 'Visual Studio', level: 100, category: 'tools' },
        { name: 'Unity', level: 100, category: 'tools' }
      ]
    }
  ];
}

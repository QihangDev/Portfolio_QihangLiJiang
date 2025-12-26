import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Project } from '../../models/project.model';

@Component({
  selector: 'app-projects',
  imports: [CommonModule],
  templateUrl: './projects.html',
  styleUrl: './projects.css'
})
export class Projects {
  projects: Project[] = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'Plataforma de comercio electrónico completa con carrito de compras, pasarela de pago y panel de administración.',
      image: 'https://via.placeholder.com/600x400',
      technologies: ['Angular', 'Node.js', 'MongoDB', 'Stripe'],
      githubUrl: 'https://github.com/tuusuario/ecommerce',
      liveUrl: 'https://ejemplo-ecommerce.com',
      featured: true
    },
    {
      id: 2,
      title: 'Task Management App',
      description: 'Aplicación de gestión de tareas con funcionalidades de colaboración en tiempo real y notificaciones.',
      image: 'https://via.placeholder.com/600x400',
      technologies: ['React', 'TypeScript', 'Firebase', 'Material-UI'],
      githubUrl: 'https://github.com/tuusuario/task-app',
      liveUrl: 'https://ejemplo-tasks.com',
      featured: true
    },
    {
      id: 3,
      title: 'Weather Dashboard',
      description: 'Dashboard interactivo del clima con gráficos y pronósticos utilizando APIs de terceros.',
      image: 'https://via.placeholder.com/600x400',
      technologies: ['Vue.js', 'Chart.js', 'OpenWeather API', 'Tailwind'],
      githubUrl: 'https://github.com/tuusuario/weather-dashboard',
      liveUrl: 'https://ejemplo-weather.com',
      featured: false
    },
    {
      id: 4,
      title: 'Social Media Analytics',
      description: 'Herramienta de análisis de redes sociales con visualización de datos y reportes automatizados.',
      image: 'https://via.placeholder.com/600x400',
      technologies: ['Angular', 'D3.js', 'Express', 'PostgreSQL'],
      githubUrl: 'https://github.com/tuusuario/social-analytics',
      featured: false
    },
    {
      id: 5,
      title: 'Recipe Finder',
      description: 'Aplicación para buscar y guardar recetas favoritas con búsqueda por ingredientes.',
      image: 'https://via.placeholder.com/600x400',
      technologies: ['React Native', 'Redux', 'Spoonacular API'],
      githubUrl: 'https://github.com/tuusuario/recipe-finder',
      featured: false
    },
    {
      id: 6,
      title: 'Portfolio Builder',
      description: 'Generador de portfolios personalizados con plantillas y editor visual drag-and-drop.',
      image: 'https://via.placeholder.com/600x400',
      technologies: ['Angular', 'RxJS', 'Node.js', 'MongoDB'],
      githubUrl: 'https://github.com/tuusuario/portfolio-builder',
      liveUrl: 'https://ejemplo-portfolio.com',
      featured: true
    }
  ];

  filteredProjects: Project[] = this.projects;
  activeFilter: 'all' | 'featured' = 'all';

  filterProjects(filter: 'all' | 'featured') {
    this.activeFilter = filter;
    if (filter === 'all') {
      this.filteredProjects = this.projects;
    } else {
      this.filteredProjects = this.projects.filter(p => p.featured);
    }
  }
}

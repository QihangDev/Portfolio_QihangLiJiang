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
      title: 'TicTacToe',
      description: 'Desarrollo de un juego TicTacToe (Tres en Raya) para dos jugadores, donde se turnan para marcar una cuadrícula 3x3 con X y O, detectando automáticamente victorias, empates y permitiendo reiniciar la partida.',
      image: 'img/empty.jpg',
      technologies: ['JavaScript', 'HTML', 'CSS'],
      githubUrl: 'https://github.com/QihangDev/P1_TicTacToe',
      liveUrl: 'https://github.com/QihangDev/P1_TicTacToe',
      featured: false
    },
    {
      id: 2,
      title: 'Mastermind',
      description: 'Desarrollo del juego Mastermind, en el que un jugador debe adivinar una combinación secreta de colores mediante intentos sucesivos, recibiendo pistas que indican aciertos exactos y parciales hasta descubrir la solución o agotar los intentos.',
      image: 'img/empty.jpg',
      technologies: ['JavaScript', 'HTML', 'CSS'],
      githubUrl: 'https://github.com/QihangDev/P2_Mastermind',
      liveUrl: 'https://github.com/QihangDev/P2_Mastermind',
      featured: false
    },
    {
      id: 3,
      title: 'Minesweeper',
      description: 'Desarrollo del juego Minesweeper (Buscaminas), donde el jugador debe descubrir todas las casillas libres de una cuadrícula sin activar minas, utilizando pistas numéricas para deducir su ubicación y ganar la partida. Junto con el proyecto también hay un formulario para la gestión de usuarios, tanto de registro como de inicio de sesión.',
      image: 'img/empty.jpg',
      technologies: ['JavaScript', 'HTML', 'CSS'],
      githubUrl: 'https://github.com/QihangDev/P3_Minesweeper',
      liveUrl: 'https://github.com/QihangDev/P3_Minesweeper',
      featured: true
    },
    {
      id: 4,
      title: 'QQQQQ',
      description: 'Juego de plataformas 2D centrado en la precisión y el control del personaje, donde la mecánica principal consiste en invertir la gravedad en lugar de saltar. El jugador debe superar niveles llenos de obstáculos y trampas, sincronizando cada cambio de gravedad con exactitud para avanzar, explorar el entorno y completar desafíos cada vez más exigentes.',
      image: 'img/empty.jpg',
      technologies: ['C#', 'Unity','Krita'],
      githubUrl: 'https://github.com/QihangDev/P4_QQQQQ',
      liveUrl: 'https://github.com/QihangDev/P4_QQQQQ',
      featured: true
    },
    {
      id: 5,
      title: 'Foxbound: Trials of the Wild',
      description: 'Juego de acción y exploración con elementos roguelike, caracterizado por niveles generados de forma procedural, muerte permanente y progreso basado en la mejora de habilidades u objetos. En cada partida, el jugador se enfrenta a enemigos y desafíos únicos, tomando decisiones estratégicas que influyen en su avance y fomentan la rejugabilidad.',
      image: 'img/empty.jpg',
      technologies: ['C#', 'Unity','Blender','Krita'],
      githubUrl: 'https://github.com/QihangDev/P5_Foxbound',
      liveUrl: 'https://github.com/QihangDev/P5_Foxbound',
      featured: true
    },
    {
      id: 6,
      title: 'IntoTheBlack (Backend)',
      description: 'Desarrollo del backend que gestiona la comunicación entre el servidor y el juego Into The Black, un juego de puzles 3D en primera persona ambientado en el ITB. El servidor se encarga de la gestión de usuarios y del almacenamiento del progreso y datos de las partidas de los jugadores.',
      image: 'img/empty.jpg',
      technologies: ['Java', 'Spring Boot','Swagger'],
      githubUrl: 'https://github.com/QihangDev/P6_IntoTheBack_Backend',
      liveUrl: 'https://github.com/QihangDev/P6_IntoTheBack_Backend',
      featured: true
    },
    {
      id: 7,
      title: 'Artificial Intelligence Behaviour',
      description: 'El proyecto consiste en el desarrollo e implementación de los comportamientos de personajes controlados por la máquina (IA) para un juego 3D de supervivencia o RPG. Esto incluye la programación de rutinas de movimiento, reacciones a estímulos del jugador, decisiones tácticas en combate y otras interacciones con el entorno.',
      image: 'img/empty.jpg',
      technologies: ['C#', 'Unity','Blender'],
      githubUrl: 'https://github.com/QihangDev/P7_Artificial_Intelligence_Behaviour',
      liveUrl: 'https://github.com/QihangDev/P7_Artificial_Intelligence_Behaviour',
      featured: false
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

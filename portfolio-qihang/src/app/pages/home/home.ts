import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Header } from '../../components/header/header';
import { About } from '../../components/about/about';
import { Projects } from '../../components/projects/projects';
import { Contact } from '../../components/contact/contact';
import { Footer } from '../../components/footer/footer';

@Component({
  selector: 'app-home',
  imports: [CommonModule, Header, About, Projects, Contact, Footer],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {
  heroText = {
    greeting: '¡Bienvenido a mi Portfolio!',
    name: 'QIHANG LI JIANG',
    title: 'Desarrollador Junior Full Stack',
    description: 'Soy una persona orientado al aprendizaje y la mejora continua, me gusta aplicar mis conocimientos en proyectos reales y seguir creciendo profesionalmente.'
  };

  scrollToSection(link: string) {
    const element = document.querySelector(link);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
}

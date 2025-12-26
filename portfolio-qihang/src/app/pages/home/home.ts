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
    greeting: 'Hola, soy',
    name: 'Qihang Li Jiang',
    title: 'Desarrollador Full Stack',
    description: 'Creo experiencias digitales innovadoras y soluciones tecnológicas que marcan la diferencia.'
  };

  scrollToSection(link: string) {
    const element = document.querySelector(link);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
}

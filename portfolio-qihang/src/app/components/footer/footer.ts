import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-footer',
  imports: [CommonModule],
  templateUrl: './footer.html',
  styleUrl: './footer.css'
})
export class Footer {
  currentYear = new Date().getFullYear();

  socialLinks = [
    { name: 'GitHub', url: 'https://github.com/QihangDev', icon: 'github' },
    { name: 'LinkedIn', url: 'https://www.linkedin.com/in/qihang-li-jiang/', icon: 'linkedin' },
    { name: 'Instagram', url: 'https://www.instagram.com/qihanglj', icon: 'instagram' }
  ];

  quickLinks = [
    { label: 'Inicio', link: '#home' },
    { label: 'Sobre mí', link: '#about' },
    { label: 'Proyectos', link: '#projects' },
    { label: 'Contacto', link: '#contact' }
  ];

  scrollToSection(event: Event, link: string) {
    event.preventDefault();
    const element = document.querySelector(link);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  scrollToTop(event: Event) {
    event.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}

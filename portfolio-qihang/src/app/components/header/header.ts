import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  imports: [CommonModule],
  templateUrl: './header.html',
  styleUrl: './header.css'
})
export class Header {
  isScrolled = false;
  isMobileMenuOpen = false;

  navItems = [
    { label: 'Inicio', link: '#home' },
    { label: 'Sobre mí', link: '#about' },
    { label: 'Proyectos', link: '#projects' },
    { label: 'Contacto', link: '#contact' }
  ];

  @HostListener('window:scroll')
  onWindowScroll() {
    this.isScrolled = window.scrollY > 50;
  }

  toggleMobileMenu() {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }

  closeMobileMenu() {
    this.isMobileMenuOpen = false;
  }

  scrollToSection(event: Event, link: string) {
    event.preventDefault();
    const element = document.querySelector(link);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      this.closeMobileMenu();
    }
  }
}

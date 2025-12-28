import { Component, HostListener, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  imports: [CommonModule],
  templateUrl: './header.html',
  styleUrl: './header.css'
})
export class Header implements OnInit {
  isScrolled = false;
  isMobileMenuOpen = false;
  isHomeSection = true;

  navItems = [
    { 
      label: 'Inicio', 
      link: '#home',
      icon: 'M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6'
    },
    { 
      label: 'Sobre mí', 
      link: '#about',
      icon: 'M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z'
    },
    { 
      label: 'Proyectos', 
      link: '#projects',
      icon: 'M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10'
    },
    { 
      label: 'Contacto', 
      link: '#contact',
      icon: 'M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z'
    }
  ];

  @HostListener('window:scroll')
  onWindowScroll() {
    this.isScrolled = window.scrollY > 50;
    this.checkCurrentSection();
  }

  ngOnInit() {
    this.checkCurrentSection();
  }

  checkCurrentSection() {
    const homeSection = document.querySelector('#home');
    if (homeSection) {
      const rect = homeSection.getBoundingClientRect();
      const scrollY = window.scrollY || window.pageYOffset;
      // Consideramos que estamos en home si:
      // - Estamos cerca del top (scrollY < 200) O
      // - La sección home está visible en la parte superior de la ventana
      this.isHomeSection = scrollY < 200 || (rect.top <= 150 && rect.bottom > 150);
    } else {
      // Si no encontramos la sección home, asumimos que no estamos en ella
      this.isHomeSection = false;
    }
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
      // Actualizar la sección después de un pequeño delay para permitir que el scroll termine
      setTimeout(() => this.checkCurrentSection(), 500);
    }
  }
}

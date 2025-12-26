import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ContactForm, SocialLink } from '../../models/contact.model';

@Component({
  selector: 'app-contact',
  imports: [CommonModule, FormsModule],
  templateUrl: './contact.html',
  styleUrl: './contact.css'
})
export class Contact {
  contactForm: ContactForm = {
    name: '',
    email: '',
    subject: '',
    message: ''
  };

  socialLinks: SocialLink[] = [
    { name: 'GitHub', url: 'https://github.com/tuusuario', icon: 'github' },
    { name: 'LinkedIn', url: 'https://linkedin.com/in/tuusuario', icon: 'linkedin' },
    { name: 'Twitter', url: 'https://twitter.com/tuusuario', icon: 'twitter' },
    { name: 'Email', url: 'mailto:tuemail@ejemplo.com', icon: 'email' }
  ];

  formSubmitted = false;

  onSubmit() {
    if (this.isFormValid()) {
      console.log('Formulario enviado:', this.contactForm);
      this.formSubmitted = true;
      setTimeout(() => {
        this.resetForm();
      }, 3000);
    }
  }

  isFormValid(): boolean {
    return !!(
      this.contactForm.name &&
      this.contactForm.email &&
      this.contactForm.subject &&
      this.contactForm.message
    );
  }

  resetForm() {
    this.contactForm = {
      name: '',
      email: '',
      subject: '',
      message: ''
    };
    this.formSubmitted = false;
  }
}

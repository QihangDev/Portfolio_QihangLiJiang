import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ContactForm, SocialLink } from '../../models/contact.model';
import emailjs from '@emailjs/browser';
import { emailjsConfig } from '../../config/emailjs.config';

@Component({
  selector: 'app-contact',
  imports: [CommonModule, FormsModule],
  templateUrl: './contact.html',
  styleUrl: './contact.css'
})
export class Contact implements OnInit {
  contactForm: ContactForm = {
    name: '',
    email: '',
    subject: '',
    message: ''
  };

  socialLinks: SocialLink[] = [
    { name: 'GitHub', url: 'https://github.com/QihangDev', icon: 'github' },
    { name: 'LinkedIn', url: 'https://linkedin.com/in/qihang-li-jiang/', icon: 'linkedin' },
    { name: 'Instagram', url: 'https://www.instagram.com/qihanglj', icon: 'instagram' },
    { name: 'Email', url: 'mailto:qihangdev@gmail.com', icon: 'email' }
  ];

  formSubmitted = false;
  isSubmitting = false;
  errorMessage = '';

  // Configuración de EmailJS - importada desde emailjs.config.ts
  private readonly EMAILJS_SERVICE_ID = emailjsConfig.serviceId;
  private readonly EMAILJS_TEMPLATE_ID = emailjsConfig.templateId;
  private readonly EMAILJS_PUBLIC_KEY = emailjsConfig.publicKey;

  ngOnInit() {
    // Inicializar EmailJS con tu clave pública
    emailjs.init(this.EMAILJS_PUBLIC_KEY);
  }

  async onSubmit() {
    if (!this.isFormValid()) {
      return;
    }

    this.isSubmitting = true;
    this.errorMessage = '';

    try {
      const now = new Date();
      const time = now.toLocaleString('es-ES', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
      });

      const templateParams = {
        from_name: this.contactForm.name,
        from_email: this.contactForm.email,
        subject: this.contactForm.subject,
        message: this.contactForm.message,
        time: time
      };

      await emailjs.send(
        this.EMAILJS_SERVICE_ID,
        this.EMAILJS_TEMPLATE_ID,
        templateParams
      );

      this.formSubmitted = true;
      setTimeout(() => {
        this.resetForm();
      }, 3000);
    } catch (error) {
      console.error('Error al enviar el correo:', error);
      this.errorMessage = 'Hubo un error al enviar el mensaje. Por favor, intenta de nuevo o contáctame directamente en qihangdev@gmail.com';
    } finally {
      this.isSubmitting = false;
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

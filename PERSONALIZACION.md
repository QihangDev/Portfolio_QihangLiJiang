# Guía Rápida de Personalización

Esta guía te ayudará a personalizar rápidamente tu portfolio con tus datos personales.

## Checklist de Personalización

### 1. Datos Personales Básicos

- [ ] **Nombre completo**
  - `src/app/components/header/header.html` - línea 5
  - `src/app/pages/home/home.ts` - línea 18
  - `src/app/components/footer/footer.html` - línea 5

- [ ] **Título profesional**
  - `src/app/pages/home/home.ts` - línea 19

- [ ] **Descripción personal**
  - `src/app/pages/home/home.ts` - línea 20
  - `src/app/components/about/about.ts` - líneas 14-18

### 2. Imágenes

- [ ] **Foto de perfil Hero**
  - `src/app/pages/home/home.html` - línea 30
  - Reemplaza `https://via.placeholder.com/500x500`

- [ ] **Foto de perfil About**
  - `src/app/components/about/about.ts` - línea 12
  - Reemplaza `https://via.placeholder.com/400x400`

- [ ] **Imágenes de proyectos**
  - `src/app/components/projects/projects.ts` - en cada proyecto
  - Reemplaza todas las URLs de placeholder

### 3. Habilidades

- [ ] **Frontend Skills**
  - `src/app/components/about/about.ts` - líneas 22-29
  - Añade, elimina o modifica según tus habilidades

- [ ] **Backend Skills**
  - `src/app/components/about/about.ts` - líneas 32-39
  - Personaliza con tus tecnologías

- [ ] **Herramientas**
  - `src/app/components/about/about.ts` - líneas 42-49
  - Actualiza con las herramientas que usas

### 4. Proyectos

En `src/app/components/projects/projects.ts`, para cada proyecto actualiza:

- [ ] `title`: Nombre del proyecto
- [ ] `description`: Descripción breve
- [ ] `image`: Ruta a la imagen del proyecto
- [ ] `technologies`: Array de tecnologías usadas
- [ ] `githubUrl`: URL de tu repositorio
- [ ] `liveUrl`: URL del proyecto en vivo
- [ ] `featured`: true/false si es destacado

### 5. Redes Sociales

- [ ] **GitHub**
  - Contact: `src/app/components/contact/contact.ts` - línea 21
  - Footer: `src/app/components/footer/footer.ts` - línea 14

- [ ] **LinkedIn**
  - Contact: `src/app/components/contact/contact.ts` - línea 22
  - Footer: `src/app/components/footer/footer.ts` - línea 15

- [ ] **Twitter/X**
  - Contact: `src/app/components/contact/contact.ts` - línea 23
  - Footer: `src/app/components/footer/footer.ts` - línea 16

- [ ] **Email**
  - Contact: `src/app/components/contact/contact.ts` - línea 24

### 6. Información de Contacto

- [ ] **Email**
  - `src/app/components/contact/contact.html` - línea 38
  - `src/app/components/footer/footer.html` - línea 53

- [ ] **Ubicación**
  - `src/app/components/contact/contact.html` - línea 25
  - `src/app/components/footer/footer.html` - línea 60

### 7. Estadísticas (Opcional)

En `src/app/components/about/about.html`:

- [ ] Años de experiencia - línea 22
- [ ] Proyectos completados - línea 26
- [ ] Número de tecnologías - línea 30

### 8. Colores y Branding (Opcional)

- [ ] **Colores principales**
  - `src/styles.css` - líneas 3-5
  - Modifica `--primary-color`, `--secondary-color`, `--accent-color`

- [ ] **Gradiente Hero**
  - `src/app/pages/home/home.css` - línea 6
  - Cambia el `linear-gradient`

## Comandos Útiles

```bash
# Ejecutar en modo desarrollo
npm start

# Construir para producción
npm run build

# Ejecutar tests
npm test
```

## Imágenes Recomendadas

- **Foto de perfil**: 500x500px, formato JPG/PNG
- **Imágenes de proyectos**: 600x400px, formato JPG/PNG
- Optimiza las imágenes antes de subirlas para mejor rendimiento

## Recursos para Imágenes

- [Unsplash](https://unsplash.com/) - Imágenes gratuitas de alta calidad
- [Pexels](https://www.pexels.com/) - Fotos y videos gratis
- [TinyPNG](https://tinypng.com/) - Optimizador de imágenes

## Tips Finales

1. Mantén las descripciones concisas y claras
2. Usa imágenes de alta calidad pero optimizadas
3. Asegúrate de que todos los enlaces funcionen
4. Prueba el portfolio en diferentes dispositivos
5. Revisa la ortografía y gramática
6. Actualiza regularmente con nuevos proyectos

## ¿Necesitas Ayuda?

- Revisa la documentación de Angular: https://angular.dev/
- Consulta el README.md para más detalles
- Prueba los cambios localmente antes de desplegar

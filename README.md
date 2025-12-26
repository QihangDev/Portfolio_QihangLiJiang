# Portfolio Qihang Li Jiang

Portfolio personal desarrollado con Angular 20 para mostrar proyectos, habilidades y experiencia como desarrollador de software.

## Características

- Diseño moderno y responsivo
- Sección Hero con animaciones
- Sección "Sobre mí" con habilidades técnicas
- Galería de proyectos con filtros
- Formulario de contacto
- Navegación suave entre secciones
- Optimizado para dispositivos móviles

## Estructura del Proyecto

```
portfolio-qihang/
├── src/
│   ├── app/
│   │   ├── components/         # Componentes reutilizables
│   │   │   ├── header/        # Barra de navegación
│   │   │   ├── about/         # Sección sobre mí
│   │   │   ├── projects/      # Galería de proyectos
│   │   │   ├── contact/       # Formulario de contacto
│   │   │   └── footer/        # Pie de página
│   │   ├── pages/
│   │   │   └── home/          # Página principal
│   │   ├── models/            # Interfaces TypeScript
│   │   └── app.ts             # Componente raíz
│   ├── styles.css             # Estilos globales
│   └── index.html
└── package.json
```

## Instalación

1. Clona el repositorio
2. Navega a la carpeta del proyecto:
   ```bash
   cd portfolio-qihang
   ```
3. Instala las dependencias:
   ```bash
   npm install
   ```

## Desarrollo

Para ejecutar el servidor de desarrollo:

```bash
npm start
```

Navega a `http://localhost:4200/`. La aplicación se recargará automáticamente si cambias algún archivo fuente.

## Personalización

### 1. Información Personal

Edita los siguientes archivos para actualizar tu información:

**Header (`src/app/components/header/header.html`)**:
- ✅ Actualizado: "Qihang Li Jiang" (línea 5)

**Hero Section (`src/app/pages/home/home.ts`)**:
- ✅ Actualizado: `heroText` con nombre, título y descripción personalizada (líneas 16-21)
  - Nombre: "Qihang Li Jiang"
  - Título: "Desarrollador Junior Full Stack"
  - Descripción: Orientado al aprendizaje y mejora continua
- ✅ Foto de perfil Hero: `/img/foto_perfil_bici.jpeg` (línea 30 de `home.html`)

**About Section (`src/app/components/about/about.ts`)**:
- ✅ Actualizado: `aboutText` con descripción personal (líneas 14-18)
  - Intro: "Soy un desarrollador apasionado por solucionar retos tecnológicos"
  - Descripción: Información sobre título DAM y estudios de Ingeniería Informática
  - Focus: Objetivos profesionales a corto plazo
- ✅ Actualizado: `skillCategories` con habilidades técnicas (líneas 20-52)
  - Frontend: Angular, Vue, TypeScript, JavaScript, HTML/CSS
  - Backend: C# / .NET, Java, Kotlin, MongoDB, PostgreSQL, REST APIs
  - Herramientas: Git, Jira, Docker, Visual Studio, Unity
- ✅ Actualizado: `profileImage` con foto de perfil (línea 12): `/img/foto_perfil.jpeg`
- ✅ Estadísticas actualizadas en `about.html`:
  - 20+ Proyectos Completados
  - 10+ Tecnologías

**Footer (`src/app/components/footer/footer.html`)**:
- ✅ Actualizado: "Qihang Li Jiang" (línea 5)

### 2. Proyectos

⏳ **Pendiente:** Actualizar proyectos de ejemplo con proyectos reales.

Edita `src/app/components/projects/projects.ts` (líneas 12-71):

```typescript
projects: Project[] = [
  {
    id: 1,
    title: 'Tu Proyecto',
    description: 'Descripción del proyecto',
    image: 'ruta/a/tu/imagen.jpg',  // Actualmente usando placeholders
    technologies: ['Angular', 'Node.js'],
    githubUrl: 'https://github.com/usuario/proyecto',
    liveUrl: 'https://tu-proyecto.com',
    featured: true
  }
  // Añade más proyectos aquí
];
```

**Nota:** Los proyectos actualmente contienen datos de ejemplo (E-Commerce Platform, Task Management App, Weather Dashboard, etc.) que deben ser reemplazados con tus proyectos reales. Las imágenes están usando `https://via.placeholder.com/600x400` y deben ser reemplazadas con imágenes reales de tus proyectos.

### 3. Redes Sociales

✅ Actualizado: Enlaces de redes sociales configurados:

**Contact (`src/app/components/contact/contact.ts`)** - líneas 20-25:
```typescript
socialLinks: SocialLink[] = [
  { name: 'GitHub', url: 'https://github.com/QihangDev', icon: 'github' },
  { name: 'LinkedIn', url: 'https://www.linkedin.com/in/qihang-li-jiang/', icon: 'linkedin' },
  { name: 'Instagram', url: 'https://www.instagram.com/qihanglj', icon: 'instagram' },
  { name: 'Email', url: 'mailto:qihangdev@gmail.com', icon: 'email' }
];
```

**Footer (`src/app/components/footer/footer.ts`)** - líneas 13-17:
- ✅ GitHub: `https://github.com/QihangDev`
- ✅ LinkedIn: `https://www.linkedin.com/in/qihang-li-jiang/`
- ✅ Instagram: `https://www.instagram.com/qihanglj`

### 4. Información de Contacto

✅ Actualizado en `src/app/components/contact/contact.html`:
- ✅ Línea 25: "Ripollet, Barcelona, España"
- ✅ Línea 38: "qihangdev@gmail.com"
- ✅ También actualizado en `src/app/components/footer/footer.html` (líneas 53 y 60)

### 5. Colores y Tema

✅ Configurado en `src/styles.css` (líneas 2-19):

```css
:root {
  --primary-color: #2563eb;      /* Color principal */
  --secondary-color: #1e40af;    /* Color secundario */
  --accent-color: #3b82f6;       /* Color de acento */
  /* ... más variables CSS ... */
}
```

### 6. Hero Background

✅ Configurado en `src/app/pages/home/home.css` (línea 7):

```css
background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
```

## Build

Para construir el proyecto para producción:

```bash
npm run build
```

Los archivos de producción se generarán en el directorio `dist/`.

## Tecnologías Utilizadas

- Angular 20
- TypeScript
- CSS3 con animaciones
- Diseño responsivo
- RxJS

## Próximos Pasos

- ✅ Reemplazar imágenes placeholder con tus imágenes reales (Hero y About completadas)
- ✅ Actualizar toda la información personal (completado)
- ⏳ Reemplazar proyectos de ejemplo con proyectos reales en `projects.ts`
- ⏳ Reemplazar imágenes placeholder de proyectos con imágenes reales
- ⏳ Conectar el formulario de contacto a un backend o servicio de email
- ✅ Personalizar colores según tu preferencia (completado)
- ⏳ Optimizar imágenes para mejor rendimiento

## Licencia

Este proyecto es de uso personal.
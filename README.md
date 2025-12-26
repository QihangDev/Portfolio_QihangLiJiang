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
- Cambia "Qihang Li Jiang" por tu nombre en línea 5

**Hero Section (`src/app/pages/home/home.ts`)**:
- Actualiza `heroText` con tu nombre, título y descripción (líneas 16-21)

**About Section (`src/app/components/about/about.ts`)**:
- Modifica `aboutText` con tu descripción personal (líneas 14-18)
- Actualiza `skillCategories` con tus habilidades (líneas 20-50)
- Cambia `profileImage` con tu foto (línea 12)
- Ajusta las estadísticas en el HTML si es necesario

**Footer (`src/app/components/footer/footer.ts`)**:
- Actualiza tu nombre en línea 5 del HTML del footer

### 2. Proyectos

Edita `src/app/components/projects/projects.ts` (líneas 12-71):

```typescript
projects: Project[] = [
  {
    id: 1,
    title: 'Tu Proyecto',
    description: 'Descripción del proyecto',
    image: 'ruta/a/tu/imagen.jpg',
    technologies: ['Angular', 'Node.js'],
    githubUrl: 'https://github.com/usuario/proyecto',
    liveUrl: 'https://tu-proyecto.com',
    featured: true
  }
  // Añade más proyectos aquí
];
```

### 3. Redes Sociales

Actualiza tus enlaces de redes sociales en:

**Contact (`src/app/components/contact/contact.ts`)** - líneas 20-25:
```typescript
socialLinks: SocialLink[] = [
  { name: 'GitHub', url: 'https://github.com/tuusuario', icon: 'github' },
  { name: 'LinkedIn', url: 'https://linkedin.com/in/tuusuario', icon: 'linkedin' },
  // ...
];
```

**Footer (`src/app/components/footer/footer.ts`)** - líneas 13-17

### 4. Información de Contacto

Edita `src/app/components/contact/contact.html`:
- Línea 25: Tu ubicación
- Línea 38: Tu email

### 5. Colores y Tema

Modifica las variables CSS en `src/styles.css` (líneas 2-18):

```css
:root {
  --primary-color: #2563eb;      /* Color principal */
  --secondary-color: #1e40af;    /* Color secundario */
  --accent-color: #3b82f6;       /* Color de acento */
  /* ... */
}
```

### 6. Hero Background

Para cambiar el gradiente del Hero en `src/app/pages/home/home.css` (línea 6):

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

- Reemplazar imágenes placeholder con tus imágenes reales
- Actualizar toda la información personal
- Conectar el formulario de contacto a un backend o servicio de email
- Añadir más proyectos a tu galería
- Personalizar colores según tu preferencia
- Optimizar imágenes para mejor rendimiento

## Licencia

Este proyecto es de uso personal.
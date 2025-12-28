# Guía Rápida de Personalización

Esta guía te ayudará a personalizar rápidamente tu portfolio con tus datos personales.

## Estado de Personalización

### ✅ Completado
- Datos personales básicos (nombre, título, descripción)
- Imágenes de perfil (Hero y About)
- Habilidades técnicas (Frontend, Backend, Herramientas)
- Redes sociales (GitHub, LinkedIn, Instagram, Email)
- Información de contacto (email y ubicación)
- Estadísticas
- Colores y branding
- Proyectos reales (TicTacToe, Mastermind, Minesweeper) con descripciones y enlaces de GitHub
- Formulario de contacto conectado a EmailJS para envío de correos reales
- Header con icono del logo y visibilidad condicional del nombre

### ⏳ Pendiente
- Reemplazar imágenes placeholder de proyectos (`/img/empty.jpg`) con imágenes reales
- Actualizar URLs `liveUrl` de proyectos con URLs reales (actualmente usando ejemplos)

## Checklist de Personalización

### 1. Datos Personales Básicos

- [x] **Nombre completo**
  - `src/app/components/header/header.html` - línea 5
  - `src/app/pages/home/home.ts` - línea 18
  - `src/app/components/footer/footer.html` - línea 5
  - **Actualizado:** "Qihang Li Jiang"

- [x] **Título profesional**
  - `src/app/pages/home/home.ts` - línea 19
  - **Actualizado:** "Desarrollador Junior Full Stack"

- [x] **Descripción personal**
  - `src/app/pages/home/home.ts` - línea 20
  - `src/app/components/about/about.ts` - líneas 14-18
  - **Actualizado:** Descripción personalizada sobre orientación al aprendizaje y mejora continua

### 2. Imágenes

- [x] **Foto de perfil Hero**
  - `src/app/pages/home/home.html` - línea 30
  - **Actualizado:** `/img/foto_perfil_bici.jpeg`

- [x] **Foto de perfil About**
  - `src/app/components/about/about.ts` - línea 12
  - **Actualizado:** `/img/foto_perfil.jpeg`

- [ ] **Imágenes de proyectos**
  - `src/app/components/projects/projects.ts` - en cada proyecto
  - Reemplaza todas las URLs de placeholder (actualmente usando `/img/empty.jpg`)
  - Proyectos actuales: TicTacToe, Mastermind, Minesweeper

### 3. Habilidades

- [x] **Frontend Skills**
  - `src/app/components/about/about.ts` - líneas 24-29
  - **Actualizado:** Angular (70%), Vue (60%), TypeScript (90%), JavaScript (80%), HTML/CSS (100%)

- [x] **Backend Skills**
  - `src/app/components/about/about.ts` - líneas 34-39
  - **Actualizado:** C# / .NET (100%), Java (80%), Kotlin (50%), MongoDB (70%), PostgreSQL (90%), REST APIs (90%)

- [x] **Herramientas**
  - `src/app/components/about/about.ts` - líneas 45-49
  - **Actualizado:** Git (100%), Jira (90%), Docker (50%), Visual Studio (100%), Unity (100%)

### 4. Proyectos

En `src/app/components/projects/projects.ts`, para cada proyecto actualiza:

- [x] `title`: Nombre del proyecto
  - **Actualizado:** TicTacToe, Mastermind, Minesweeper
- [x] `description`: Descripción breve
  - **Actualizado:** Descripciones detalladas de cada juego
- [ ] `image`: Ruta a la imagen del proyecto (actualmente usando `/img/empty.jpg`)
  - **Pendiente:** Reemplazar con imágenes reales de cada proyecto
- [x] `technologies`: Array de tecnologías usadas
  - **Actualizado:** JavaScript, HTML, CSS para todos los proyectos
- [x] `githubUrl`: URL de tu repositorio
  - **Actualizado:** 
    - TicTacToe: `https://github.com/QihangDev/P1_TicTacToe`
    - Mastermind: `https://github.com/QihangDev/P2_Mastermind`
    - Minesweeper: `https://github.com/QihangDev/P3_Minesweeper`
- [ ] `liveUrl`: URL del proyecto en vivo
  - **Pendiente:** Actualizar con URLs reales (actualmente usando ejemplos)
- [x] `featured`: true/false si es destacado
  - **Actualizado:** Minesweeper marcado como destacado

**Nota:** Los proyectos ya han sido actualizados con proyectos reales. Solo faltan las imágenes y las URLs en vivo.

### 5. Redes Sociales

- [x] **GitHub**
  - Contact: `src/app/components/contact/contact.ts` - línea 21
  - Footer: `src/app/components/footer/footer.ts` - línea 14
  - **Actualizado:** `https://github.com/QihangDev`

- [x] **LinkedIn**
  - Contact: `src/app/components/contact/contact.ts` - línea 22
  - Footer: `src/app/components/footer/footer.ts` - línea 15
  - **Actualizado:** `https://www.linkedin.com/in/qihang-li-jiang/`

- [x] **Instagram**
  - Contact: `src/app/components/contact/contact.ts` - línea 23
  - Footer: `src/app/components/footer/footer.ts` - línea 16
  - **Actualizado:** `https://www.instagram.com/qihanglj`

- [x] **Email**
  - Contact: `src/app/components/contact/contact.ts` - línea 24
  - **Actualizado:** `mailto:qihangdev@gmail.com`

### 6. Información de Contacto

- [x] **Email**
  - `src/app/components/contact/contact.html` - línea 38
  - `src/app/components/footer/footer.html` - línea 53
  - **Actualizado:** `qihangdev@gmail.com`

- [x] **Ubicación**
  - `src/app/components/contact/contact.html` - línea 25
  - `src/app/components/footer/footer.html` - línea 60
  - **Actualizado:** "Ripollet, Barcelona, España"

- [x] **Formulario de Contacto con EmailJS**
  - `src/app/components/contact/contact.ts` - Configuración de EmailJS
  - `src/app/config/emailjs.config.ts` - Credenciales de EmailJS
  - **Actualizado:** Formulario conectado a EmailJS para envío de correos reales
  - **Parámetros configurados:** `from_name`, `from_email`, `subject`, `message`, `time`
  - **Características:** Manejo de errores, estado de carga, mensajes de éxito/error

### 7. Estadísticas

En `src/app/components/about/about.html`:

- [x] Proyectos completados - línea 22
  - **Actualizado:** "20+ Proyectos Completados"
- [x] Número de tecnologías - línea 26
  - **Actualizado:** "10+ Tecnologías"

### 8. Colores y Branding (Opcional)

- [x] **Colores principales**
  - `src/styles.css` - líneas 3-5
  - **Actualizado:** `--primary-color: #2563eb`, `--secondary-color: #1e40af`, `--accent-color: #3b82f6`

- [x] **Gradiente Hero**
  - `src/app/pages/home/home.css` - línea 7
  - **Actualizado:** `linear-gradient(135deg, #667eea 0%, #764ba2 100%)`

### 9. Header y Navegación

- [x] **Logo con icono**
  - `src/app/components/header/header.html` - Icono del logo
  - `src/app/components/header/header.css` - Estilos del logo
  - **Actualizado:** Icono del favicon (`/img/icon/favicon.png`) visible siempre
  - **Característica:** El nombre "QIHANG LI JIANG" se oculta cuando estás en la sección `#home`

- [x] **Detección de sección activa**
  - `src/app/components/header/header.ts` - Lógica de detección
  - **Actualizado:** El header detecta automáticamente la sección visible y ajusta la visibilidad del nombre

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

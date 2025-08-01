# BIM 3D Studio

> Sitio web profesional para BIM 3D Studio - Especialistas en modelado 3D, renderizado arquitectónico y servicios BIM.

## 🏗️ Acerca del Proyecto

BIM 3D Studio es un sitio web moderno y responsivo desarrollado con **Astro v5** y **TailwindCSS**, diseñado para mostrar servicios profesionales de modelado 3D, renderizado arquitectónico y Building Information Modeling (BIM).

### ✨ Características Principales

- **🚀 Rendimiento Optimizado**: Construido con Astro para máxima velocidad y SEO
- **📱 Diseño Responsivo**: Mobile-first con TailwindCSS
- **🎨 Interfaz Moderna**: Componentes reutilizables con arquitectura atómica
- **♿ Accesibilidad**: Cumple con estándares de accesibilidad web
- **🖼️ Galería Interactiva**: Slider de imágenes para mostrar proyectos
- **⭐ Testimonios**: Sección de clientes con calificaciones
- **📊 Estadísticas**: Métricas de rendimiento y experiencia

## 🛠️ Stack Tecnológico

- **Framework**: [Astro](https://astro.build) v5.12.8
- **Estilos**: [TailwindCSS](https://tailwindcss.com) v3.4.0
- **Plugins**: 
  - `@tailwindcss/typography` - Tipografía mejorada
  - `@tailwindcss/forms` - Estilos para formularios
- **Tipografía**: Inter (Google Fonts)
- **Arquitectura**: Atomic Design Pattern

## 📁 Estructura del Proyecto

```text
/
├── public/                 # Archivos estáticos
│   └── favicon.svg
├── src/
│   ├── components/         # Componentes reutilizables
│   │   ├── atoms/         # Componentes básicos (botones, inputs)
│   │   ├── molecules/     # Componentes compuestos (cards, forms)
│   │   └── organisms/     # Componentes complejos (navbar, footer)
│   ├── data/              # Datos del sitio
│   │   └── sliderImages.ts
│   ├── layouts/           # Layouts base
│   │   └── Layout.astro
│   ├── pages/             # Páginas del sitio
│   │   ├── index.astro    # Página principal
│   │   └── proyectos.astro # Galería de proyectos
│   └── styles/            # Estilos globales
│       └── global.css
├── astro.config.mjs       # Configuración de Astro
├── tailwind.config.mjs    # Configuración de TailwindCSS
└── package.json
```

## 🎨 Componentes Principales

### Organisms (Componentes Complejos)
- **Navbar**: Navegación responsiva con menú móvil
- **Hero**: Sección principal con call-to-action
- **ImageSlider**: Carrusel interactivo de imágenes
- **ClientsSection**: Testimonios con calificaciones
- **StatsSection**: Métricas y estadísticas
- **Footer**: Pie de página con información de contacto

### Molecules (Componentes Compuestos)
- **TestimonialCard**: Tarjetas de testimonios con avatares
- Componentes de formularios y navegación

### Atoms (Componentes Básicos)
- **Button**: Botones reutilizables
- **StatCard**: Tarjetas de estadísticas
- Elementos de interfaz básicos

## 🚀 Comandos

Todos los comandos se ejecutan desde la raíz del proyecto:

| Comando                   | Acción                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Instala las dependencias                        |
| `npm run dev`             | Inicia el servidor de desarrollo en `localhost:4321` |
| `npm run build`           | Construye el sitio para producción en `./dist/` |
| `npm run preview`         | Previsualiza la build localmente                |
| `npm run astro ...`       | Ejecuta comandos CLI de Astro                   |
| `npm run astro -- --help` | Obtiene ayuda sobre la CLI de Astro             |

## 🎨 Configuración de Diseño

### Colores Personalizados
- **Primary**: `#0f172a` (Slate 900) - Color principal del brand
- **Secondary**: Paleta de grises para elementos secundarios
- **Tipografía**: Inter como fuente principal

### Características de TailwindCSS
- JIT (Just-In-Time) compilation habilitado
- Plugins de tipografía y formularios
- Espaciado personalizado
- Configuración mobile-first

## 📱 Características Responsivas

- **Mobile**: Diseño optimizado para dispositivos móviles
- **Tablet**: Adaptación fluida para tablets
- **Desktop**: Experiencia completa en escritorio
- **Navegación**: Menú hamburguesa en móviles

## 🔧 Desarrollo

### Requisitos Previos
- Node.js 18+ 
- npm o yarn

### Instalación
```bash
# Clonar el repositorio
git clone [URL_DEL_REPOSITORIO]

# Navegar al directorio
cd "BIM 3D STUDIO"

# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev
```

### Estructura de Desarrollo
- **Atomic Design**: Componentes organizados por complejidad
- **TypeScript**: Tipado estático para mejor desarrollo
- **CSS Modules**: Estilos encapsulados por componente
- **Lazy Loading**: Carga optimizada de imágenes

## 🌐 Páginas

- **`/`** - Página principal con hero, servicios y testimonios
- **`/proyectos`** - Galería de proyectos con slider interactivo

## 📞 Contacto

Para más información sobre BIM 3D Studio, visita el sitio web o contacta directamente.

---

**Desarrollado con ❤️ usando Astro y TailwindCSS**

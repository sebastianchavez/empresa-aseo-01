# CleanPro - Landing Page Template

Template profesional para una empresa de servicios de aseo, desarrollado con HTML, Tailwind CSS (vía CDN) y JavaScript nativo. Sin build step: solo abre `index.html` en tu navegador.

## Características

- **9 páginas** completas con navegación consistente
- **Tailwind CSS** via CDN (configuración inline con colores de marca)
- **JavaScript nativo** sin dependencias externas
- **Datos mockeados centralizados** en `js/data.js` para fácil personalización
- **Animaciones** con CSS + IntersectionObserver (fade, slide, scale, counters, float)
- **Galería con lightbox** + navegación con teclado (← / → / Esc)
- **Formulario de contacto** con validación en vivo y simulación de envío
- **100% responsive** (mobile-first, sm/md/lg breakpoints)
- **SEO básico** con meta tags, Open Graph ready
- **Accesibilidad**: alt en imágenes, aria-labels, focus visible

## Estructura de archivos

```
empresa-aseo-01/
├── index.html              # Inicio
├── nosotros.html           # Sobre nosotros
├── servicios.html          # Nuestros servicios
├── precios.html            # Planes y precios
├── horarios.html           # Turnos de servicio
├── galeria.html            # Galería de trabajos
├── contacto.html           # Formulario + ubicación + horarios
├── politicas.html          # Política de privacidad
├── terminos.html           # Términos y condiciones
│
├── css/
│   └── styles.css          # Animaciones personalizadas + utilidades
│
└── js/
    ├── data.js             # ⭐ Datos mockeados (editar aquí)
    ├── main.js             # Navbar, scroll reveal, contadores, menú móvil
    ├── home.js             # Render dinámico de la home
    ├── nosotros.js         # Render del equipo
    ├── servicios.js        # Render del grid de servicios
    ├── precios.js          # Render de planes, tabla, extras, FAQ
    ├── horarios.js         # Render de tabla de turnos
    ├── galeria.js          # Render de galería + lightbox
    └── contacto.js         # Validación y envío del formulario
```

## Cómo usar

### 1. Abrir el template

Simplemente abre `index.html` en tu navegador. No requiere servidor, build ni instalación.

> **Tip**: Si quieres usar rutas absolutas para los assets, ejecuta un servidor local con `python -m http.server 8080` o `npx serve`.

### 2. Personalizar datos

Toda la información del template está en [`js/data.js`](js/data.js). Modifica estos objetos según tu negocio:

- `empresa` — nombre, contacto, dirección, redes sociales
- `stats` — contadores animados del home
- `servicios` — catálogo completo (8 servicios de ejemplo)
- `beneficios` — "por qué elegirnos"
- `equipo` — personas del equipo (fotos vía `pravatar.cc`)
- `galeria` + `categoriasGaleria` — imágenes (vía `picsum.photos`)
- `planes` — planes de precios (Básico / Profesional / Premium)
- `serviciosExtras` — servicios adicionales con precio
- `turnos` — horarios de servicio semanales
- `testimonios` — reseñas de clientes
- `faqs` — preguntas frecuentes

### 3. Personalizar branding

Los colores de marca están definidos en cada archivo HTML dentro del bloque:

```html
<script>
  tailwind.config = {
    theme: { extend: {
      colors: { brand: { 50:'#...', 500:'#06b6d4', 600:'#...', ... } }
    }
  }}
</script>
```

Para mantener coherencia, copia este bloque en todas las páginas o usa el mismo `tailwind.config` en un archivo JS compartido.

### 4. Reemplazar imágenes

Las imágenes actuales usan placeholders:
- **Hero / Trabenios**: `https://picsum.photos/seed/...`
- **Avatares equipo**: `https://i.pravatar.cc/...`

Para producción, reemplaza las URLs por tus propias imágenes en `js/data.js` o directamente en los `src=""` de los HTML.

### 5. Configurar el formulario

El formulario de [`contacto.html`](contacto.html) es **demo**: simula un envío. Para integrarlo:

- Reemplaza el bloque `setTimeout(...)` en `js/contacto.js` por una llamada `fetch()` a tu backend o servicio (Formspree, Netlify Forms, tu API, etc.).
- Agrega los campos `name` requeridos por tu backend al `<form>`.

## Animaciones implementadas

- **Fade-in al scroll**: cualquier elemento con clase `.reveal`, `.reveal-right`, `.reveal-left`, `.reveal-scale`
- **Contadores**: `data-counter="15" data-suffix="+"`
- **Hover lift**: clase `.card-lift`
- **Botones con micro-animación**: `.btn-primary`
- **Shine effect**: clase `.shine-on-hover`
- **Float**: `.anim-float` (usado en badges flotantes del home)
- **Form shake** en error: `.anim-shake`
- **Lightbox** con fade y zoom: ver `.lightbox` en `styles.css`

## Navegación

Todas las páginas comparten la misma estructura de navbar y footer. Para modificar la navegación:

1. Edita el bloque `<header data-navbar>` y `<footer>` en cada archivo HTML, **o**
2. Convierte estos bloques en componentes JS reutilizables (no incluido en este template por simplicidad).

## Compatibilidad

- Chrome / Edge / Firefox / Safari (últimas 2 versiones)
- iOS Safari 14+
- IE11 no soportado (uso de IntersectionObserver y `backdrop-filter`)

## Licencia

Template de demostración. Personalizable libremente para proyectos comerciales y personales.

---

**Versión**: 1.0  
**Última actualización**: Octubre 2026  
**Marca**: CleanPro (ejemplo)
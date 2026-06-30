# VANTA Drones

Landing page de **VANTA Drones**: vigilancia aérea autónoma con drones de seguridad e inteligencia artificial para conjuntos residenciales, lotes y bodegas en Cali, Colombia.

> Proyecto ficticio de demostración. Datos, precios y marcas son ilustrativos.

## Stack

- React 18 + Vite 5 + TypeScript
- Tailwind CSS 3
- Framer Motion (animaciones)
- ogl (auroras y radar WebGL) · three.js (cursor)
- lucide-react (iconos)

## Características

- Hero con wordmark gigante y aurora animada
- Sección de capacidades, radar de detección y oferta con planes
- Formulario de contacto funcional (validación + estado de envío)
- Botón "volver arriba", efectos WebGL con carga diferida (lazy)
- SEO: Open Graph, Twitter Card, JSON-LD, sitemap y robots
- Respeta `prefers-reduced-motion`

## Desarrollo

```bash
npm install
npm run dev      # http://localhost:5173
```

## Build

```bash
npm run build    # genera /dist
npm run preview  # sirve el build localmente
```

## Despliegue

El contenido de `dist/` es estático: se puede subir a Vercel, Netlify, Cloudflare Pages o Hostinger.
Antes de producción, reemplaza `https://vantadrones.co/` por el dominio real en `index.html`,
`public/robots.txt` y `public/sitemap.xml`.

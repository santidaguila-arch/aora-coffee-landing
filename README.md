# aora — Coffee in Motion (landing "coming soon")

Sitio estático (sin build, sin frameworks) para el pre-lanzamiento de **aora**, cafetería grab & go en Guadalajara. Pensado para poner el link en la bio de Instagram.

## Estructura

```
site/
├── index.html
├── assets/
│   ├── css/style.css
│   ├── js/main.js
│   ├── fonts/McCollough-AT-Regular.otf   (solo titulares/wordmark)
│   └── img/                              (logos e isotipo ya redimensionados/comprimidos)
```

No hay paso de build: es HTML/CSS/JS plano, se puede editar directo y desplegar tal cual.

## Conectar el formulario de lista de espera a un servicio real

El `<form id="waitlist-form">` en `index.html` apunta hoy a un endpoint de **demostración** de Formspree que no existe (`https://formspree.io/f/aora-waitlist-demo`). Antes de lanzar:

1. Crea una cuenta gratis en [formspree.io](https://formspree.io).
2. Crea un formulario nuevo y copia tu endpoint real (algo como `https://formspree.io/f/xxxxxxxx`).
3. Reemplaza el valor de `action="..."` en el `<form>` de `index.html` por ese endpoint.

Alternativas igual de válidas, sin tocar el JS:
- **Google Forms embebido**: reemplaza el `<form>` por un `<iframe>` de un Google Form.
- **Solo mailto**: el fallback `mailto:hola@aoracoffee.mx` ya funciona sin configurar nada (abre el cliente de correo del usuario), por si prefieres no usar un servicio externo por ahora.

El JS (`assets/js/main.js`) intercepta el submit vía `fetch` y muestra un mensaje inline; si el endpoint falla (como el demo actual), muestra automáticamente el fallback de correo/Instagram — no rompe la experiencia.

## Datos que faltan a propósito

No hay dirección exacta ni fecha de apertura porque **todavía no existen**. Cuando se confirmen:
- Agrega la fecha en el `<p class="eyebrow">` del hero y en la sección de lista de espera.
- Agrega la dirección donde corresponda (footer, sección de zonas).

No inventes esos datos mientras tanto.

## Assets de marca

Todos los PNG/JPG en `assets/img/` fueron generados desde los originales de 4500×4500 en la carpeta raíz del proyecto (`Isotipo/`, `Logotipo sin fondo/`, `Logos con fondo/`), redimensionados y comprimidos para web. El favicon sale del isotipo (badge verde bosque).

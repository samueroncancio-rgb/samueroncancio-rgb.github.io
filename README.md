# Portafolio — proyecto-html

Sitio web estático (portafolio + proyecto de tienda de mascotas) creado con HTML, CSS y JavaScript puro. Este repositorio contiene una página principal con secciones de biografía, trayectoria, proyectos, galería y contacto, además de una vista de proyecto (Tienda de mascotas).

## Resumen rápido

- Autor: Samuel Roncancio
- Tecnologías: HTML5, CSS3 (organizado por módulos), JavaScript ES6
- Tipo: Sitio estático responsivo
- Carpeta principal de recursos: `public/img` (imágenes usadas en la web)

## Características principales

- Diseño responsivo con media queries (estilos separados en `src/css/principal` y `src/css/pets`).
- Menú móvil con overlay y bloqueo de scroll (implementado en `src/views/script.js`).
- Página de proyecto "Mis Mascotas" con catálogo de productos estático (`src/views/mis-mascotas.html` + `src/css/pets/mis-mascotas.css`).
- Interactividad básica: alert de bienvenida, menú desplegable y cierre por overlay.

## Estructura del repositorio

- `index.html` — Página principal del portafolio.
- `README.md` — Este archivo.
- `public/` — Imágenes y recursos estáticos (logos, fotos, galería).
- `src/`
    - `css/` — Hojas de estilo separadas por secciones (principal y pets).
    - `views/` — HTML y scripts adicionales:
        - `mis-mascotas.html` — vista del proyecto "Tienda de mascotas".
        - `script.js` — script principal (menú, overlay, alert de bienvenida).
        - `mascotas.js` — script usado por la vista de mascotas (toggle del menú en esa vista).


```

## Cómo ejecutar el proyecto localmente

Este es un sitio estático; puedes abrir `index.html` directamente en el navegador o usar un servidor local para que las rutas funcionen correctamente.

Método rápido (Python 3):

1. Instala la extension llamada live server en tu editor de codigo.

2. Activa el servidor local

3. Abre `http://localhost:5101` en tu navegador.

Nota: usar un servidor evita problemas con rutas absolutas o CORS y hace que los enlaces a `src/` y `public/` funcionen como en producción.

## Qué revisar / detalles técnicos

- El `index.html` enlaza `src/css/principal/estilo.css` y `src/views/script.js`.
- `script.js` contiene:
    - Una alerta inicial: `alert("Bienvenido a mi pagina web")`.
    - Lógica para alternar visibilidad del menú y overlay, y para bloquear el scroll del body.
- `mis-mascotas.html` usa `mascotas.js` para alternar el menú de esa vista.

## Buenas prácticas y recomendaciones (siguientes pasos)

- Añadir un título en la etiqueta `<title>` de `index.html`.
- Evitar `alert()` en producción; reemplazar por un modal más accesible.
- Añadir roles y atributos ARIA para mejorar la accesibilidad del menú y formularios.
- Validar y limpiar etiquetas meta y contenido repetido.
- Minificar y combinar CSS/JS para producción y servirlos desde rutas relativas correctas.
- Añadir un pequeño CI que valide HTML/CSS (ej. linters) si se desea calidad continua.

## Cómo contribuir

1. Haz un fork del repositorio.
2. Crea una rama con tu feature: `git checkout -b feature/nombre`.
3. Haz commits claros y atómicos.
4. Abre un Pull Request describiendo los cambios.

Si quieres que yo implemente alguno de los siguientes puntos, dime cuál y lo hago:

- Añadir un modal de bienvenida en lugar de `alert()`.
- Mejorar el formulario de contacto (validación, envío con Formspree o similar).
- Añadir pruebas o linters (HTMLHint, stylelint).

## Licencia

- MIT

---




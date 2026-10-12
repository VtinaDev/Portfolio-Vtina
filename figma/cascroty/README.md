# Cascroty · paquete para Figma Make

Este paquete traduce el case study de Cascroty a una estructura estática fácil de interpretar por Figma Make. No modifica la web publicada.

## Qué subir en Figma Make

Desde **Add context → Sube el tuyo**, adjunta estos cuatro archivos:

1. `cascroty-figma.html`
2. `cascroty-figma.css`
3. `tokens.json`
4. `figma-make-prompt.md`

Después adjunta las imágenes indicadas en `assets-manifest.json` desde `src/assets/cascroty/`. Si Figma permite seleccionar una carpeta en tu navegador, elige directamente `src/assets/cascroty`.

No subas `node_modules`, `.git` ni el resto del repositorio.

## Objetivo

El resultado debe ser un archivo visual editable con estas partes:

- Portada / hero de Cascroty.
- Composición de producto.
- Packaging.
- Menú del día y tarjetas reutilizables.
- Flyers, vaso final y cierre para Behance.

Los archivos originales de Vue permanecen en `src/pages/Cascroty.vue`; este paquete es solo una versión de handoff para diseño.

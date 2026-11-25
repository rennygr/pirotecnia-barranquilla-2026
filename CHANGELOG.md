# CHANGELOG — Pirotecnia Barranquilla Web 2026

## v8.0 — 2026-11-24
- **Popup de detalle de producto:** clic en la foto de cualquier producto abre un popup con:
  - Foto ampliada del producto
  - Nombre, categoría y código
  - Descripción de qué hace el producto
- **Descripciones de todos los productos:** 42 descripciones agregadas (34 familias + 8 combos)
  - Cada producto tiene una descripción breve de qué es, qué efecto produce y para qué sirve
  - Basadas en investigación de pirotecnia colombiana y nombres/categorías del catálogo
- **Popup fácil de cerrar:** botón X, clic fuera del popup, o tecla Escape
- **Diseño del popup:** sigue esquema negro/dorado/blanco del sitio
- Cursor pointer en las fotos de productos (indica que son clickeables)
- CSS animado: fadeIn del overlay + slideUp del popup

## v7.0 — 2026-11-24
- **Rediseño de colores:** esquema blanco/negro/dorado aplicado en toda la página
- Header negro sólido con borde dorado
- Barra de carrito (cart bar) negra con texto dorado
- Botones principales: fondo negro, texto y bordes dorados
- Botón WhatsApp: fondo dorado, texto negro (invertido para destaque)
- Aviso de domicilio: fondo negro con borde y texto dorado
- Modal de pedido: borde dorado con sombra pronunciada
- Cards: bordes grises que cambian a dorado en hover con elevación
- Chips de categoría: fondo negro y dorado al seleccionar
- Fallback SVG: fondo negro con texto dorado (antes era blanco/crema)
- Inputs con focus dorado
- Transiciones y sombras refinadas para look premium
- **Entregable:** carpeta lista para GitHub Pages (no zip)
- **Sin cambios funcionales:** lógica de precios, carrito, WhatsApp, GPS intacta

## v6.1 — 2026-11-24
- **Nueva imagen:** POL-054.jpg (Bengala Harry / Bengala de Fuego) — encontrada en carpeta "Sin editar"
- **Auditoría completa de carpeta "Sin editar":** ~70 fotos revisadas visualmente una por una
- **Total imágenes:** 37 archivos (29 familias + 8 combos)
- **7 familias sin foto real** (usan SVG fallback): POL-019, POL-046, POL-050, POL-051, POL-053, POL-055, POL-056

## v6.0 — 2026-11-24
- Verificación y corrección de TODOS los precios (56 SKUs + 8 combos) contra lista oficial 2026
- Corrección de precios en precios_2026.js: POL-005/006, POL-011, POL-013, POL-015/016, POL-018, POL-021/022, POL-026, POL-028, POL-030/031, POL-034, POL-036, POL-039, POL-042, POL-052, COMBO-01 a COMBO-08
- Corrección de nombres de productos en catalogo_2026.js para coincidir con nombres oficiales
- Verificación cruzada: Google Sheet ↔ precios_2026.js ↔ catalogo_2026.js (3 fuentes, 100% consistentes)
- 37 imágenes de producto (29 familias + 8 combos)

## v5.0 — 2026-11-24
- Integración precios en vivo desde Google Sheets (fetch gviz CSV)
- Fallback estático si Google Sheets no responde (timeout 5s)
- Sistema de pedidos vía WhatsApp + Google Apps Script
- Catálogo agrupado por familias con presentaciones
- SVG fallback para imágenes faltantes
- 36 imágenes de producto

## v4.0 — 2026-11-23
- Optimización de fotos (800px, quality 80, strip metadata)
- Primera integración de imágenes reales de productos

## v3.x — 2026-11-23
- Estructura base del catálogo
- Sistema de combos
- Diseño responsive

## v2.0 — 2026-11-23
- Versión inicial del catálogo web

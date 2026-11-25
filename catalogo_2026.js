// ============================================================
// CATÁLOGO AGRUPADO — Pirotecnia Barranquilla 2026
// Versión: 7.0  |  Fecha: 2026-11-24
// ============================================================
// Cambios v6.0 vs v4.0:
//   - Corregido mapeo de códigos POL desde PROD-019 en adelante
//   - Eliminados 3 "Detonante Especial" (productos inexistentes)
//   - Eliminado "Torta Show Especial / Gran Formato" (inexistente)
//   - Eliminada duplicación Torta King Kong (= Torta 16 Luces)
//   - Fusión Bengala de Humo + Humo de Colores (mismo producto)
//   - Unificadas 2 Bazukas en 1 sola (un solo producto del proveedor)
//   - Agregados: Triangulitos, Matasuegra, Tiro Tiburón (faltaban)
//   - Agregados 4 nuevos: Estrobo, Bengala Harry, Supermetralleta, Torta 138L
//   - Martillo ahora tiene 3 presentaciones (Unidad, x10, x60)
//   - Metralleta ahora tiene 3 presentaciones (x5, x10, x40)
//   - Helicóptero corregido a "Pack x6"
//   - Total: 34 familias + 8 combos = 42 entradas
// ============================================================
// Los precios se leen de PRECIOS_2026 (precios_2026.js).
// Para cambiar precios, edite SOLO precios_2026.js.
// Para agregar/quitar productos o presentaciones, edite aquí.
// ============================================================

const CATALOGO_AGRUPADO = [

  // ── Volcanes & Fuentes ─────────────────────────────────────
  {
    id: "PROD-001", categoria: "Volcanes & Fuentes",
    nombre: "Volcancito", imagen_codigo: "POL-001", stock: "Disponible",
    descripcion: "Pequeño volcán de mesa que emite una lluvia de chispas doradas y plateadas durante aprox. 30 segundos. Ideal para decorar mesas en reuniones familiares. Uso seguro en exteriores.",
    presentaciones: [
      { codigo: "POL-001", presentacion: "Unidad" },
      { codigo: "POL-002", presentacion: "Media Docena (x6)" },
      { codigo: "POL-003", presentacion: "Pack x10 Unidades" }
    ]
  },
  {
    id: "PROD-002", categoria: "Volcanes & Fuentes",
    nombre: "Volcán Grande", imagen_codigo: "POL-004", stock: "Disponible",
    descripcion: "Volcán de mayor tamaño con efecto de erupción de chispas multicolor que alcanza hasta 1.5 metros de altura. Duración prolongada, perfecto como pieza central en celebraciones de fin de año.",
    presentaciones: [
      { codigo: "POL-004", presentacion: "Unidad" },
      { codigo: "POL-005", presentacion: "Media Docena (x6)" },
      { codigo: "POL-006", presentacion: "Docena (x12)" }
    ]
  },
  {
    id: "PROD-003", categoria: "Volcanes & Fuentes",
    nombre: "Fuente Cuco Pequeña", imagen_codigo: "POL-007", stock: "Disponible",
    descripcion: "Fuente pirotécnica compacta que lanza un abanico de chispas brillantes hacia arriba. Efecto tipo cuco con colores cambiantes. Perfecta para espacios reducidos.",
    presentaciones: [
      { codigo: "POL-007", presentacion: "Unidad" }
    ]
  },
  {
    id: "PROD-004", categoria: "Volcanes & Fuentes",
    nombre: "Fuente Cuco Grande", imagen_codigo: "POL-008", stock: "Disponible",
    descripcion: "Versión grande de la fuente cuco con mayor altura de chispas y duración extendida. Efecto visual espectacular con cambio de colores dorado, plateado y multicolor.",
    presentaciones: [
      { codigo: "POL-008", presentacion: "Unidad" }
    ]
  },
  {
    id: "PROD-005", categoria: "Volcanes & Fuentes",
    nombre: "Fuente Festival / Triangular", imagen_codigo: "POL-009", stock: "Disponible",
    descripcion: "Fuente de base triangular con tres puntos de emisión simultánea. Genera un espectáculo de chispas en abanico con efectos crackling y colores variados. Gran impacto visual.",
    presentaciones: [
      { codigo: "POL-009", presentacion: "Unidad" }
    ]
  },

  // ── Luces, Bengalas & Humos ────────────────────────────────
  {
    id: "PROD-006", categoria: "Luces, Bengalas & Humos",
    nombre: "Chispitas Mariposas", imagen_codigo: "POL-010", stock: "Disponible",
    descripcion: "Clásicas chispitas de mano que emiten una lluvia de chispas brillantes al encenderlas. Seguras para niños bajo supervisión adulta. Fabricadas por Espectáculos Pirotécnicos Mariposa, pioneros de la pirotecnia en Colombia.",
    presentaciones: [
      { codigo: "POL-010", presentacion: "Pack x6 Cajitas" },
      { codigo: "POL-011", presentacion: "Caja x12 Cajitas" }
    ]
  },
  {
    id: "PROD-007", categoria: "Luces, Bengalas & Humos",
    nombre: "Bengala de Humo / Humo de Colores", imagen_codigo: "POL-012", stock: "Disponible",
    descripcion: "Bengala que emite humo denso de colores durante aprox. 60 segundos. Ideal para fotos, gender reveal y celebraciones. Disponible en Azul, Rosada, Roja, Amarilla, Morada.",
    presentaciones: [
      { codigo: "POL-012", presentacion: "Unidad" }
    ]
  },

  // ── Efectos Giratorios & Piso ──────────────────────────────
  {
    id: "PROD-008", categoria: "Efectos Giratorios & Piso",
    nombre: "Rosa Cracker (Rosita)", imagen_codigo: "POL-014", stock: "Disponible",
    descripcion: "Pequeño dispositivo giratorio de piso que gira rápidamente emitiendo chispas y sonido cracker en todas las direcciones. Se coloca en el suelo y se enciende la mecha.",
    presentaciones: [
      { codigo: "POL-014", presentacion: "Pack x6 Unidades" },
      { codigo: "POL-015", presentacion: "Media Docena Packs (x36)" },
      { codigo: "POL-016", presentacion: "Caja x72 Unidades" }
    ]
  },
  {
    id: "PROD-009", categoria: "Efectos Giratorios & Piso",
    nombre: "Crackel Barrel (Barrilito)", imagen_codigo: "POL-017", stock: "Disponible",
    descripcion: "Barrilito que al encenderse gira en el piso emitiendo chispas y efecto crackling (crepitar). Produce un espectáculo de luces rasantes con sonido característico.",
    presentaciones: [
      { codigo: "POL-017", presentacion: "Unidad" },
      { codigo: "POL-018", presentacion: "Caja x6 Unidades" }
    ]
  },
  {
    id: "PROD-010", categoria: "Efectos Giratorios & Piso",
    nombre: "Helicóptero", imagen_codigo: "POL-019", stock: "Disponible",
    descripcion: "Efecto giratorio que se eleva del suelo girando como las aspas de un helicóptero, dejando una estela de chispas de colores mientras sube. Efecto sorpresa muy vistoso.",
    presentaciones: [
      { codigo: "POL-019", presentacion: "Pack x6 Unidades" }
    ]
  },
  {
    id: "PROD-031", categoria: "Efectos Giratorios & Piso",
    nombre: "Estrobo", imagen_codigo: "POL-053", stock: "Disponible",
    descripcion: "Dispositivo de piso que produce destellos intermitentes tipo estroboscópico (flashes rápidos de luz blanca intensa). Efecto moderno y llamativo para ambientar fiestas.",
    presentaciones: [
      { codigo: "POL-053", presentacion: "Pack x5 Unidades" }
    ]
  },

  // ── Varas, Cohetes & Lanzadores ────────────────────────────
  {
    id: "PROD-011", categoria: "Varas, Cohetes & Lanzadores",
    nombre: "Vara Soplona 30 Luces", imagen_codigo: "POL-020", stock: "Disponible",
    descripcion: "Vara de mano que dispara 30 bolas de luces de colores hacia el cielo en secuencia. Se sostiene con la mano apuntando hacia arriba. Efecto tipo cañón romano multicolor.",
    presentaciones: [
      { codigo: "POL-020", presentacion: "Unidad" },
      { codigo: "POL-021", presentacion: "Pack x6 Unidades" },
      { codigo: "POL-022", presentacion: "Docena (x12)" }
    ]
  },
  {
    id: "PROD-012", categoria: "Varas, Cohetes & Lanzadores",
    nombre: "Mini Cohete Silbador", imagen_codigo: "POL-023", stock: "Disponible",
    descripcion: "Pequeño cohete que al encenderse se eleva con un silbido agudo característico y estalla en el aire con un destello de luz. Efecto rápido y sonoro.",
    presentaciones: [
      { codigo: "POL-023", presentacion: "Pack x12 Unidades" }
    ]
  },
  {
    id: "PROD-013", categoria: "Varas, Cohetes & Lanzadores",
    nombre: "Voladores Virgen del Carmen", imagen_codigo: "POL-024", stock: "Disponible",
    descripcion: "Voladores tradicionales colombianos con vara de madera. Se elevan al cielo y estallan con fuerte tronazo. Clásicos de las fiestas patronales y de fin de año en la Costa Caribe.",
    presentaciones: [
      { codigo: "POL-024", presentacion: "Docena (x12)" }
    ]
  },
  {
    id: "PROD-014", categoria: "Varas, Cohetes & Lanzadores",
    nombre: "Bazuka", imagen_codigo: "POL-025", stock: "Pocas unidades",
    descripcion: "Lanzador tipo tubo que dispara una carga aérea potente con efecto de estallido y luces multicolor en el cielo. Gran impacto sonoro y visual. Solo uso exterior.",
    presentaciones: [
      { codigo: "POL-025", presentacion: "Unidad" }
    ]
  },
  {
    id: "PROD-032", categoria: "Varas, Cohetes & Lanzadores",
    nombre: "Bengala Harry", imagen_codigo: "POL-054", stock: "Disponible",
    descripcion: "Bengala de mano tipo varita mágica que emite chispas brillantes doradas y plateadas. Efecto luminoso elegante, ideal para fotos y momentos especiales de celebración.",
    presentaciones: [
      { codigo: "POL-054", presentacion: "Pack x5 Unidades" }
    ]
  },

  // ── Detonantes Menores & de Mecha ──────────────────────────
  {
    id: "PROD-015", categoria: "Detonantes Menores & de Mecha",
    nombre: "Traqui Traqui", imagen_codigo: "POL-027", stock: "Disponible",
    descripcion: "Pequeños petardos de impacto que estallan al lanzarlos contra el suelo. No requieren encendedor ni mecha. Clásico de la pirotecnia colombiana, diversión segura para todas las edades.",
    presentaciones: [
      { codigo: "POL-027", presentacion: "Hoja x150 Unidades" },
      { codigo: "POL-028", presentacion: "Cartilla x600 (4 hojas)" }
    ]
  },
  {
    id: "PROD-016", categoria: "Detonantes Menores & de Mecha",
    nombre: "Zeus Pintalabios", imagen_codigo: "POL-029", stock: "Disponible",
    descripcion: "Petardo de mecha con forma alargada tipo pintalabios. Al encender la mecha produce un estallido fuerte y seco. Efecto sonoro potente en tamaño compacto.",
    presentaciones: [
      { codigo: "POL-029", presentacion: "Unidad" },
      { codigo: "POL-030", presentacion: "Pack x5 Unidades" },
      { codigo: "POL-031", presentacion: "Caja x20 Unidades" }
    ]
  },

  // ── Golpes, Estallidos & Metralletas ───────────────────────
  {
    id: "PROD-017", categoria: "Golpes, Estallidos & Metralletas",
    nombre: "Triangulitos", imagen_codigo: "POL-032", stock: "Disponible",
    descripcion: "Pequeños petardos triangulares que estallan al lanzarlos al piso por fricción. Efecto de estallido rápido y sonoro. No requieren encendedor. Vienen en bolsa a granel.",
    presentaciones: [
      { codigo: "POL-032", presentacion: "Bolsa x100 Unidades" }
    ]
  },
  {
    id: "PROD-018", categoria: "Golpes, Estallidos & Metralletas",
    nombre: "1 Golpe (Fosforito)", imagen_codigo: "POL-033", stock: "Disponible",
    descripcion: "Petardo de mecha tipo fosforito que produce un único estallido fuerte al encenderse. Clásico de las fiestas decembrinas en Barranquilla. Mecha corta, efecto inmediato.",
    presentaciones: [
      { codigo: "POL-033", presentacion: "Pack x20 Unidades" },
      { codigo: "POL-034", presentacion: "Caja x100 Unidades" }
    ]
  },
  {
    id: "PROD-019", categoria: "Golpes, Estallidos & Metralletas",
    nombre: "4 Golpes", imagen_codigo: "POL-035", stock: "Disponible",
    descripcion: "Cajita de petardos con 4 estallidos consecutivos conectados por mecha interna. Se enciende una sola vez y produce una ráfaga de 4 detonaciones seguidas.",
    presentaciones: [
      { codigo: "POL-035", presentacion: "Pack x30 Uds (5 cajitas)" },
      { codigo: "POL-036", presentacion: "Paquete x120 (20 cajitas)" }
    ]
  },
  {
    id: "PROD-020", categoria: "Golpes, Estallidos & Metralletas",
    nombre: "Martillo", imagen_codigo: "POL-037", stock: "Disponible",
    descripcion: "Petardo potente de mecha que produce un estallido fuerte y retumbante, similar al golpe de un martillo. Uno de los más sonoros de la categoría. Solo uso exterior.",
    presentaciones: [
      { codigo: "POL-037", presentacion: "Unidad" },
      { codigo: "POL-038", presentacion: "Pack x10 Unidades" },
      { codigo: "POL-039", presentacion: "Caja x60 Unidades" }
    ]
  },
  {
    id: "PROD-021", categoria: "Golpes, Estallidos & Metralletas",
    nombre: "Metralleta", imagen_codigo: "POL-040", stock: "Disponible",
    descripcion: "Cadena de petardos unidos por mecha que estallan en ráfaga rápida tipo metralleta. Efecto continuo de estallidos durante varios segundos. Clásica de fiestas y celebraciones.",
    presentaciones: [
      { codigo: "POL-040", presentacion: "Pack x5 Unidades" },
      { codigo: "POL-041", presentacion: "Pack x10 Unidades" },
      { codigo: "POL-042", presentacion: "Paquete x40 Unidades" }
    ]
  },
  {
    id: "PROD-022", categoria: "Golpes, Estallidos & Metralletas",
    nombre: "Matasuegra", imagen_codigo: "POL-043", stock: "Disponible",
    descripcion: "Tira larga de petardos pequeños que estallan en secuencia rápida al encender la mecha. Producen una ráfaga prolongada de estallidos. Tradición de las fiestas de fin de año.",
    presentaciones: [
      { codigo: "POL-043", presentacion: "Paquete x100 Unidades" }
    ]
  },
  {
    id: "PROD-033", categoria: "Golpes, Estallidos & Metralletas",
    nombre: "Supermetralleta", imagen_codigo: "POL-055", stock: "Disponible",
    descripcion: "Versión extra larga de la metralleta con 200 unidades encadenadas. Ráfaga prolongada e intensa de estallidos consecutivos. Máximo impacto sonoro para grandes celebraciones.",
    presentaciones: [
      { codigo: "POL-055", presentacion: "Pack x200 Unidades" }
    ]
  },
  {
    id: "PROD-030", categoria: "Golpes, Estallidos & Metralletas",
    nombre: "Tiro Tiburón", imagen_codigo: "POL-051", stock: "Disponible",
    descripcion: "Petardo de alta potencia con estallido fuerte y seco. Efecto similar al de un tiro. Uno de los más intensos en la categoría de golpes. Solo uso exterior con precaución.",
    presentaciones: [
      { codigo: "POL-051", presentacion: "Pack x20 Unidades" },
      { codigo: "POL-052", presentacion: "Caja x100 Unidades" }
    ]
  },

  // ── Tortas & Espectáculos Aéreos ───────────────────────────
  {
    id: "PROD-023", categoria: "Tortas & Espectáculos Aéreos",
    nombre: "Torta 16 Luces", imagen_codigo: "POL-044", stock: "Disponible",
    descripcion: "Batería de 16 disparos aéreos que se lanzan en secuencia automática. Cada tiro sube al cielo y estalla en luces de colores. Ideal como entrada a las tortas pirotécnicas.",
    presentaciones: [
      { codigo: "POL-044", presentacion: "Unidad" }
    ]
  },
  {
    id: "PROD-024", categoria: "Tortas & Espectáculos Aéreos",
    nombre: "Torta 19 Luces (Pirulo)", imagen_codigo: "POL-045", stock: "Disponible",
    descripcion: "Torta pirotécnica de 19 tubos con efectos variados: estrellas, crisantemos y palmeras de colores. Formato compacto tipo pirulo con gran variedad de efectos aéreos.",
    presentaciones: [
      { codigo: "POL-045", presentacion: "Unidad" }
    ]
  },
  {
    id: "PROD-025", categoria: "Tortas & Espectáculos Aéreos",
    nombre: "Torta 25 Luces", imagen_codigo: "POL-046", stock: "Disponible",
    descripcion: "Batería de 25 disparos aéreos con efectos multicolor. Secuencia de luces que incluye estrellas, colas y crisantemos. Duración y espectáculo superiores a la de 16 luces.",
    presentaciones: [
      { codigo: "POL-046", presentacion: "Unidad" }
    ]
  },
  {
    id: "PROD-026", categoria: "Tortas & Espectáculos Aéreos",
    nombre: "Torta 30 Luces", imagen_codigo: "POL-047", stock: "Disponible",
    descripcion: "Torta de 30 tubos con mezcla de efectos aéreos: palmeras doradas, crisantemos rojos, estrellas plateadas y finales con ráfaga. Espectáculo completo de nivel medio.",
    presentaciones: [
      { codigo: "POL-047", presentacion: "Unidad" }
    ]
  },
  {
    id: "PROD-027", categoria: "Tortas & Espectáculos Aéreos",
    nombre: "Torta 42 Luces", imagen_codigo: "POL-048", stock: "Disponible",
    descripcion: "Batería de 42 disparos con efectos combinados de alto impacto. Secuencias de colores con finales en abanico y ráfaga. Ideal para reuniones grandes y eventos.",
    presentaciones: [
      { codigo: "POL-048", presentacion: "Unidad" }
    ]
  },
  {
    id: "PROD-028", categoria: "Tortas & Espectáculos Aéreos",
    nombre: "Torta 100 Luces", imagen_codigo: "POL-049", stock: "Pocas unidades",
    descripcion: "Espectacular batería de 100 disparos aéreos con efectos de nivel profesional. Palmeras, crisantemos, colas y final en ráfaga masiva. Para quien busca un gran show de fin de año.",
    presentaciones: [
      { codigo: "POL-049", presentacion: "Unidad" }
    ]
  },
  {
    id: "PROD-029", categoria: "Tortas & Espectáculos Aéreos",
    nombre: "Torta Revelación de Sexo", imagen_codigo: "POL-050", stock: "Disponible",
    descripcion: "Torta especial para gender reveal / revelación de sexo del bebé. Dispara luces en color azul (niño) o rosado (niña) según la versión. Indicar el color al hacer el pedido.",
    presentaciones: [
      { codigo: "POL-050", presentacion: "Unidad" }
    ]
  },
  {
    id: "PROD-034", categoria: "Tortas & Espectáculos Aéreos",
    nombre: "Torta 138 Luces", imagen_codigo: "POL-056", stock: "Disponible",
    descripcion: "La torta más grande del catálogo: 138 disparos con espectáculo aéreo de nivel profesional. Efectos múltiples, final con ráfaga masiva en abanico. El broche de oro para fin de año.",
    presentaciones: [
      { codigo: "POL-056", presentacion: "Unidad" }
    ]
  },

  // ── Combos Promocionales 2026 ──────────────────────────────
  {
    id: "PROD-035", categoria: "Combos Promocionales 2026",
    nombre: "Combo Familiar Inicial", imagen_codigo: "COMBO-01", stock: "Disponible",
    descripcion: "Pack surtido ideal para familias: incluye volcanes, chispitas y fuentes de piso. Productos seguros y vistosos para disfrutar en casa con toda la familia.",
    presentaciones: [
      { codigo: "COMBO-01", presentacion: "Pack surtido luces y volcanes" }
    ]
  },
  {
    id: "PROD-036", categoria: "Combos Promocionales 2026",
    nombre: "Combo Infantil Seguro", imagen_codigo: "COMBO-02", stock: "Disponible",
    descripcion: "Selección de productos de bajo riesgo para los más pequeños: chispitas mariposas, bengalas de humo de colores y rositas. Diversión segura bajo supervisión adulta.",
    presentaciones: [
      { codigo: "COMBO-02", presentacion: "Chispitas, humos y rositas" }
    ]
  },
  {
    id: "PROD-037", categoria: "Combos Promocionales 2026",
    nombre: "Combo Luces & Color", imagen_codigo: "COMBO-03", stock: "Disponible",
    descripcion: "Combinación de varas soplonas, fuentes y bengalas que llenan la noche de luces y colores. Efectos visuales sin estallidos fuertes, ideal para quienes prefieren luz sobre sonido.",
    presentaciones: [
      { codigo: "COMBO-03", presentacion: "Varas, fuentes y bengalas" }
    ]
  },
  {
    id: "PROD-038", categoria: "Combos Promocionales 2026",
    nombre: "Combo Estallido Barranquilla", imagen_codigo: "COMBO-04", stock: "Disponible",
    descripcion: "Pack de estallidos para los que les gusta el tronazo: golpes, martillos y metralletas. Máximo sonido para recibir el año nuevo al estilo barranquillero.",
    presentaciones: [
      { codigo: "COMBO-04", presentacion: "Golpes, martillos y metralletas" }
    ]
  },
  {
    id: "PROD-039", categoria: "Combos Promocionales 2026",
    nombre: "Combo Fiesta Soledad", imagen_codigo: "COMBO-05", stock: "Disponible",
    descripcion: "Surtido completo con tortas aéreas, volcanes y varas soplonas. Pensado para fiestas en Soledad con variedad de efectos de luces y sonido para toda la noche.",
    presentaciones: [
      { codigo: "COMBO-05", presentacion: "Tortas, volcanes y varas" }
    ]
  },
  {
    id: "PROD-040", categoria: "Combos Promocionales 2026",
    nombre: "Combo Celebración Premium", imagen_codigo: "COMBO-06", stock: "Disponible",
    descripcion: "Selección premium con tortas aéreas de alta gama y efectos de luces especiales. Para quienes quieren un espectáculo pirotécnico de nivel superior en su celebración.",
    presentaciones: [
      { codigo: "COMBO-06", presentacion: "Selección aérea y luces" }
    ]
  },
  {
    id: "PROD-041", categoria: "Combos Promocionales 2026",
    nombre: "Combo Evento / Reunión", imagen_codigo: "COMBO-07", stock: "Disponible",
    descripcion: "Surtido de alto rendimiento para eventos y reuniones grandes. Incluye variedad completa: desde fuentes de piso hasta tortas aéreas. Cubre toda la noche de celebración.",
    presentaciones: [
      { codigo: "COMBO-07", presentacion: "Surtido alto rendimiento" }
    ]
  },
  {
    id: "PROD-042", categoria: "Combos Promocionales 2026",
    nombre: "Combo Gran Show Fin de Año", imagen_codigo: "COMBO-08", stock: "Disponible",
    descripcion: "El paquete más completo del catálogo: tortas de gran formato, volcanes, fuentes, estallidos y efectos aéreos. Para montar un show pirotécnico profesional en casa.",
    presentaciones: [
      { codigo: "COMBO-08", presentacion: "Paquete completo gran formato" }
    ]
  }
];

// ── Función reutilizable: inyectar precios en catálogo ───────
// Se invoca con PRECIOS_2026 (fallback) y luego de nuevo si
// se obtienen precios en vivo desde Google Sheets.
function inyectarPrecios(fuentePrecios) {
  CATALOGO_AGRUPADO.forEach(prod => {
    prod.presentaciones.forEach(pres => {
      const p = fuentePrecios[pres.codigo];
      if (p) {
        pres.costo_base = p.costo_base;
        pres.precio_venta = p.precio_venta;
      } else {
        console.warn("⚠ Precio no encontrado para código:", pres.codigo);
        pres.costo_base = 0;
        pres.precio_venta = 0;
      }
    });
  });
}

// ── Función reutilizable: regenerar catálogo plano ───────────
function regenerarCatalogoPlano() {
  CATALOGO_PLANO.length = 0;
  CATALOGO_AGRUPADO.forEach(prod => {
    prod.presentaciones.forEach(pres => {
      CATALOGO_PLANO.push({
        codigo: pres.codigo,
        categoria: prod.categoria,
        nombre: prod.nombre,
        presentacion: pres.presentacion,
        precio_venta: pres.precio_venta,
        stock: prod.stock || "Disponible"
      });
    });
  });
}

// ── Inyección inicial con precios estáticos (fallback) ───────
inyectarPrecios(PRECIOS_2026);

// ── Generar catálogo plano para búsquedas y carrito ──────────
const CATALOGO_PLANO = [];
regenerarCatalogoPlano();

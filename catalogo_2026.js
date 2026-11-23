// Catálogo Oficial Pirotecnia Barranquilla 2026 (Con asignación de imágenes verificada)
const CATALOGO_2026 = [
  // Volcanes & Fuentes
  { codigo: "POL-001", categoria: "Volcanes & Fuentes", nombre: "Volcancito", presentacion: "Unidad", imagen_codigo: "POL-001", costo_base: 900, precio_venta: 1400 },
  { codigo: "POL-002", categoria: "Volcanes & Fuentes", nombre: "Volcancito", presentacion: "Media Docena (x6)", imagen_codigo: "POL-001", costo_base: 5000, precio_venta: 7200 },
  { codigo: "POL-003", categoria: "Volcanes & Fuentes", nombre: "Volcancito", presentacion: "Pack x10 Unidades", imagen_codigo: "POL-001", costo_base: 9500, precio_venta: 13500 },
  { codigo: "POL-004", categoria: "Volcanes & Fuentes", nombre: "Volcán Grande", presentacion: "Unidad", imagen_codigo: "POL-004", costo_base: 4800, precio_venta: 7000 },
  { codigo: "POL-005", categoria: "Volcanes & Fuentes", nombre: "Volcán Grande", presentacion: "Media Docena (x6)", imagen_codigo: "POL-004", costo_base: 27000, precio_venta: 38500 },
  { codigo: "POL-006", categoria: "Volcanes & Fuentes", nombre: "Volcán Grande", presentacion: "Docena (x12)", imagen_codigo: "POL-004", costo_base: 54000, precio_venta: 77000 },
  { codigo: "POL-007", categoria: "Volcanes & Fuentes", nombre: "Fuente Cuco Pequeña", presentacion: "Unidad", imagen_codigo: "POL-007", costo_base: 3500, precio_venta: 5000 },
  { codigo: "POL-008", categoria: "Volcanes & Fuentes", nombre: "Fuente Cuco Grande", presentacion: "Unidad", imagen_codigo: "POL-008", costo_base: 6200, precio_venta: 9000 },
  { codigo: "POL-009", categoria: "Volcanes & Fuentes", nombre: "Fuente Festival / Triangular", presentacion: "Unidad", imagen_codigo: "POL-009", costo_base: 52000, precio_venta: 75000 },

  // Luces, Bengalas & Humos
  { codigo: "POL-010", categoria: "Luces, Bengalas & Humos", nombre: "Chispitas Mariposas", presentacion: "Pack x6 Cajitas", imagen_codigo: "POL-010", costo_base: 7000, precio_venta: 10000 },
  { codigo: "POL-011", categoria: "Luces, Bengalas & Humos", nombre: "Chispitas Mariposas", presentacion: "Caja x12 Cajitas", imagen_codigo: "POL-010", costo_base: 12500, precio_venta: 18000 },
  { codigo: "POL-012", categoria: "Luces, Bengalas & Humos", nombre: "Bengala de Humo (Azul / Rosada / Roja)", presentacion: "Unidad", imagen_codigo: "POL-012", costo_base: 17500, precio_venta: 25000 },
  { codigo: "POL-013", categoria: "Luces, Bengalas & Humos", nombre: "Humo de Colores (RO-AM-MO-AZ)", presentacion: "Unidad", imagen_codigo: "POL-013", costo_base: 17500, precio_venta: 25000 },

  // Efectos Giratorios & Piso
  { codigo: "POL-014", categoria: "Efectos Giratorios & Piso", nombre: "Rosa Cracker (Rosita)", presentacion: "Pack x6 Unidades", imagen_codigo: "POL-014", costo_base: 4800, precio_venta: 7000 },
  { codigo: "POL-015", categoria: "Efectos Giratorios & Piso", nombre: "Rosa Cracker (Rosita)", presentacion: "Media Docena Packs (x36)", imagen_codigo: "POL-014", costo_base: 29500, precio_venta: 42000 },
  { codigo: "POL-016", categoria: "Efectos Giratorios & Piso", nombre: "Rosa Cracker (Rosita)", presentacion: "Caja x72 Unidades", imagen_codigo: "POL-014", costo_base: 42000, precio_venta: 60000 },
  { codigo: "POL-017", categoria: "Efectos Giratorios & Piso", nombre: "Crackel Barrel (Barrilito)", presentacion: "Unidad", imagen_codigo: "POL-017", costo_base: 5500, precio_venta: 8000 },
  { codigo: "POL-018", categoria: "Efectos Giratorios & Piso", nombre: "Crackel Barrel (Barrilito)", presentacion: "Caja x6 Unidades", imagen_codigo: "POL-017", costo_base: 29500, precio_venta: 42000 },
  { codigo: "POL-019", categoria: "Efectos Giratorios & Piso", nombre: "Helicóptero", presentacion: "Unidad / Pack", imagen_codigo: "POL-019", costo_base: 17500, precio_venta: 25000 },

  // Varas, Cohetes & Lanzadores
  { codigo: "POL-020", categoria: "Varas, Cohetes & Lanzadores", nombre: "Vara Soplona 30 Luces", presentacion: "Unidad", imagen_codigo: "POL-020", costo_base: 8400, precio_venta: 12000 },
  { codigo: "POL-021", categoria: "Varas, Cohetes & Lanzadores", nombre: "Vara Soplona 30 Luces", presentacion: "Pack x6 Unidades", imagen_codigo: "POL-020", costo_base: 46000, precio_venta: 65000 },
  { codigo: "POL-022", categoria: "Varas, Cohetes & Lanzadores", nombre: "Vara Soplona 30 Luces", presentacion: "Docena (x12)", imagen_codigo: "POL-020", costo_base: 85000, precio_venta: 120000 },
  { codigo: "POL-023", categoria: "Varas, Cohetes & Lanzadores", nombre: "Mini Cohete Silbador", presentacion: "Pack x12 Unidades", imagen_codigo: "POL-023", costo_base: 4200, precio_venta: 6000 },
  { codigo: "POL-024", categoria: "Varas, Cohetes & Lanzadores", nombre: "Voladores Virgen del Carmen", presentacion: "Docena (x12)", imagen_codigo: "POL-024", costo_base: 41000, precio_venta: 58500 },
  { codigo: "POL-025", categoria: "Varas, Cohetes & Lanzadores", nombre: "Bazuka Mini", presentacion: "Unidad", imagen_codigo: "POL-025", costo_base: 101000, precio_venta: 142000 },
  { codigo: "POL-026", categoria: "Varas, Cohetes & Lanzadores", nombre: "Bazuka 188 Luces", presentacion: "Unidad", imagen_codigo: "POL-025", costo_base: 190000, precio_venta: 267000 },

  // Detonantes Menores & de Mecha
  { codigo: "POL-027", categoria: "Detonantes Menores & de Mecha", nombre: "Traqui Traqui", presentacion: "Hoja x150 Unidades", imagen_codigo: "POL-027", costo_base: 5600, precio_venta: 8000 },
  { codigo: "POL-028", categoria: "Detonantes Menores & de Mecha", nombre: "Traqui Traqui", presentacion: "Cartilla x600 (4 hojas)", imagen_codigo: "POL-027", costo_base: 21000, precio_venta: 30000 },
  { codigo: "POL-029", categoria: "Detonantes Menores & de Mecha", nombre: "Zeus Pintalabios", presentacion: "Unidad", imagen_codigo: "POL-029", costo_base: 4200, precio_venta: 6000 },
  { codigo: "POL-030", categoria: "Detonantes Menores & de Mecha", nombre: "Zeus Pintalabios", presentacion: "Pack x5 Unidades", imagen_codigo: "POL-029", costo_base: 19500, precio_venta: 28000 },
  { codigo: "POL-031", categoria: "Detonantes Menores & de Mecha", nombre: "Zeus Pintalabios", presentacion: "Caja x20 Unidades", imagen_codigo: "POL-029", costo_base: 72000, precio_venta: 102000 },

  // Golpes & Estallidos
  { codigo: "POL-032", categoria: "Golpes & Estallidos", nombre: "4 Golpes", presentacion: "Pack x30 Uds (5 cajitas)", imagen_codigo: "POL-032", costo_base: 6500, precio_venta: 9500 },
  { codigo: "POL-033", categoria: "Golpes & Estallidos", nombre: "4 Golpes", presentacion: "Paquete x120 (20 cajitas)", imagen_codigo: "POL-032", costo_base: 24000, precio_venta: 34000 },
  { codigo: "POL-034", categoria: "Golpes & Estallidos", nombre: "1 Golpe (Fosforito)", presentacion: "Pack x20 Unidades", imagen_codigo: "POL-034", costo_base: 3500, precio_venta: 5000 },
  { codigo: "POL-035", categoria: "Golpes & Estallidos", nombre: "1 Golpe (Fosforito)", presentacion: "Caja x100 Unidades", imagen_codigo: "POL-034", costo_base: 15000, precio_venta: 22000 },
  { codigo: "POL-036", categoria: "Golpes & Estallidos", nombre: "Martillo", presentacion: "Pack x10 Unidades", imagen_codigo: "POL-036", costo_base: 7500, precio_venta: 11000 },
  { codigo: "POL-037", categoria: "Golpes & Estallidos", nombre: "Martillo", presentacion: "Caja x60 Unidades", imagen_codigo: "POL-036", costo_base: 40000, precio_venta: 57000 },
  { codigo: "POL-038", categoria: "Golpes & Estallidos", nombre: "Metralleta", presentacion: "Pack x5 Unidades", imagen_codigo: "POL-038", costo_base: 8500, precio_venta: 12000 },
  { codigo: "POL-039", categoria: "Golpes & Estallidos", nombre: "Metralleta", presentacion: "Paquete x40 Unidades", imagen_codigo: "POL-038", costo_base: 60000, precio_venta: 85000 },
  { codigo: "POL-040", categoria: "Golpes & Estallidos", nombre: "Triangulito / Tumbarancho", presentacion: "Pack / Unidad", imagen_codigo: "POL-040", costo_base: 9000, precio_venta: 13000 },
  { codigo: "POL-041", categoria: "Golpes & Estallidos", nombre: "Torta / Candela King Kong 16 Tiros", presentacion: "Unidad", imagen_codigo: "POL-041", costo_base: 10000, precio_venta: 14500 },
  { codigo: "POL-042", categoria: "Golpes & Estallidos", nombre: "Detonante Especial POL-042", presentacion: "Unidad", imagen_codigo: "POL-042", costo_base: 12000, precio_venta: 17000 },
  { codigo: "POL-043", categoria: "Golpes & Estallidos", nombre: "Detonante Especial POL-043", presentacion: "Unidad", imagen_codigo: "POL-043", costo_base: 14000, precio_venta: 20000 },
  { codigo: "POL-044", categoria: "Golpes & Estallidos", nombre: "Detonante Especial POL-044", presentacion: "Unidad", imagen_codigo: "POL-044", costo_base: 16000, precio_venta: 23000 },

  // Tortas & Espectáculos Aéreos
  { codigo: "POL-045", categoria: "Tortas & Espectáculos Aéreos", nombre: "Torta Bombonera 16 Tiros", presentacion: "Unidad", imagen_codigo: "POL-045", costo_base: 45000, precio_venta: 65000 },
  { codigo: "POL-046", categoria: "Tortas & Espectáculos Aéreos", nombre: "Torta 19 Luces / Tiros", presentacion: "Unidad", imagen_codigo: "POL-045", costo_base: 58000, precio_venta: 82000 },
  { codigo: "POL-047", categoria: "Tortas & Espectáculos Aéreos", nombre: "Torta 25 Luces / Tiros", presentacion: "Unidad", imagen_codigo: "POL-048", costo_base: 75000, precio_venta: 105000 },
  { codigo: "POL-048", categoria: "Tortas & Espectáculos Aéreos", nombre: "Torta 30 Luces / Tiros", presentacion: "Unidad", imagen_codigo: "POL-048", costo_base: 95000, precio_venta: 135000 },
  { codigo: "POL-049", categoria: "Tortas & Espectáculos Aéreos", nombre: "Torta 42 Luces / Tiros", presentacion: "Unidad", imagen_codigo: "POL-048", costo_base: 135000, precio_venta: 190000 },
  { codigo: "POL-050", categoria: "Tortas & Espectáculos Aéreos", nombre: "Torta 100 Luces / Tiros", presentacion: "Unidad", imagen_codigo: "POL-050", costo_base: 290000, precio_venta: 410000 },
  { codigo: "POL-051", categoria: "Tortas & Espectáculos Aéreos", nombre: "Torta Revelación de Género", presentacion: "Unidad", imagen_codigo: "POL-048", costo_base: 120000, precio_venta: 170000 },
  { codigo: "POL-052", categoria: "Tortas & Espectáculos Aéreos", nombre: "Torta Show Especial / Gran Formato", presentacion: "Unidad", imagen_codigo: "POL-050", costo_base: 360000, precio_venta: 505000 },

  // Combos Promocionales 2026
  { codigo: "COMBO-01", categoria: "Combos Promocionales 2026", nombre: "Combo Familiar Inicial", presentacion: "Pack surtido luces y volcanes", imagen_codigo: "COMBO-01", costo_base: 35000, precio_venta: 50000 },
  { codigo: "COMBO-02", categoria: "Combos Promocionales 2026", nombre: "Combo Infantil Seguro", presentacion: "Chispitas, humos y rositas", imagen_codigo: "COMBO-02", costo_base: 42000, precio_venta: 60000 },
  { codigo: "COMBO-03", categoria: "Combos Promocionales 2026", nombre: "Combo Luces & Color", presentacion: "Varas, fuentes y bengalas", imagen_codigo: "COMBO-03", costo_base: 68000, precio_venta: 96000 },
  { codigo: "COMBO-04", categoria: "Combos Promocionales 2026", nombre: "Combo Estallido Barranquilla", presentacion: "Golpes, martillos y metralletas", imagen_codigo: "COMBO-04", costo_base: 75000, precio_venta: 106000 },
  { codigo: "COMBO-05", categoria: "Combos Promocionales 2026", nombre: "Combo Fiesta Soledad", presentacion: "Tortas, volcanes y varas", imagen_codigo: "COMBO-05", costo_base: 130000, precio_venta: 185000 },
  { codigo: "COMBO-06", categoria: "Combos Promocionales 2026", nombre: "Combo Celebración Premium", presentacion: "Selección aérea y luces", imagen_codigo: "COMBO-06", costo_base: 195000, precio_venta: 275000 },
  { codigo: "COMBO-07", categoria: "Combos Promocionales 2026", nombre: "Combo Evento / Reunión", presentacion: "Surtido alto rendimiento", imagen_codigo: "COMBO-07", costo_base: 260000, precio_venta: 365000 },
  { codigo: "COMBO-08", categoria: "Combos Promocionales 2026", nombre: "Combo Gran Show Fin de Año", presentacion: "Paquete completo gran formato", imagen_codigo: "COMBO-08", costo_base: 420000, precio_venta: 590000 }
];

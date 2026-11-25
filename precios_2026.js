// ============================================================
// ARCHIVO DE PRECIOS — Pirotecnia Barranquilla 2026
// Versión: 6.0  |  Fecha: 2026-11-24
// ============================================================
// FUENTES DE DATOS:
//   - Costos: Lista de precios compra 2026 (Pirotécnicos El Tiburón)
//   - Precios venta: Catálogo 2026 (hoja oficial) + ajustes margen 40% mín.
//   - Referencia: Lista precios Pólvora 2025 (precios año anterior)
// NOTAS:
//   - Margen mínimo garantizado: 40% sobre costo de compra
//   - Productos marcados (est.) tienen costo estimado (sin dato proveedor)
//   - Los precios están en pesos colombianos (COP) sin decimales
//   - Este archivo es fallback; los precios en vivo se cargan de Google Sheets
// ============================================================

const PRECIOS_2026 = {

  // ── Volcanes & Fuentes ─────────────────────────────────────
  "POL-001": { costo_base:    800, precio_venta:   1400 },  // Volcancito — Unidad (costo: $8,000/10)
  "POL-002": { costo_base:   4800, precio_venta:   8000 },  // Volcancito — Media Docena x6 (▲ de $7,200)
  "POL-003": { costo_base:   8000, precio_venta:  13500 },  // Volcancito — Pack x10
  "POL-004": { costo_base:   4200, precio_venta:   7000 },  // Volcán Grande — Unidad (est.)
  "POL-005": { costo_base:  23100, precio_venta:  38500 },  // Volcán Grande — Media Docena x6 (est.)
  "POL-006": { costo_base:  46200, precio_venta:  77000 },  // Volcán Grande — Docena x12 (est.)
  "POL-007": { costo_base:   2417, precio_venta:   5000 },  // Fuente Cuco Pequeña — Unidad (costo: $29,000/12)
  "POL-008": { costo_base:   4500, precio_venta:   9000 },  // Fuente Cuco Grande — Unidad (costo: $27,000/6)
  "POL-009": { costo_base:  45000, precio_venta:  75000 },  // Fuente Festival / Triangular — Unidad

  // ── Luces, Bengalas & Humos ────────────────────────────────
  "POL-010": { costo_base:   6500, precio_venta:  11000 },  // Chispitas Mariposas — Pack x6 (▲ de $10,000)
  "POL-011": { costo_base:  13000, precio_venta:  22000 },  // Chispitas Mariposas — Caja x12 (▲ de $18,000)
  "POL-012": { costo_base:  15000, precio_venta:  25000 },  // Bengala de Humo / Humo de Colores — Unidad
  "POL-013": { costo_base:  15000, precio_venta:  25000 },  // (reservado — mismo producto que POL-012)

  // ── Efectos Giratorios & Piso ──────────────────────────────
  "POL-014": { costo_base:   4000, precio_venta:   7000 },  // Rosa Cracker (Rosita) — Pack x6
  "POL-015": { costo_base:  24000, precio_venta:  42000 },  // Rosa Cracker (Rosita) — Media Docena Packs x36
  "POL-016": { costo_base:  35000, precio_venta:  60000 },  // Rosa Cracker (Rosita) — Caja x72
  "POL-017": { costo_base:   3500, precio_venta:   8000 },  // Crackel Barrel (Barrilito) — Unidad (costo: $21,000/6)
  "POL-018": { costo_base:  21000, precio_venta:  42000 },  // Crackel Barrel (Barrilito) — Caja x6
  "POL-019": { costo_base:  15000, precio_venta:  25000 },  // Helicóptero — Pack x6

  // ── Varas, Cohetes & Lanzadores ────────────────────────────
  "POL-020": { costo_base:   6667, precio_venta:  12000 },  // Vara Soplona 30 Luces — Unidad (costo: $80,000/12)
  "POL-021": { costo_base:  40000, precio_venta:  67000 },  // Vara Soplona 30 Luces — Pack x6 (▲ de $65,000)
  "POL-022": { costo_base:  80000, precio_venta: 134000 },  // Vara Soplona 30 Luces — Docena x12 (▲ de $120,000)
  "POL-023": { costo_base:   4000, precio_venta:   7000 },  // Mini Cohete Silbador — Pack x12 (▲ de $6,000)
  "POL-024": { costo_base:  35100, precio_venta:  58500 },  // Voladores Virgen del Carmen — Docena x12 (est.)
  "POL-025": { costo_base: 140000, precio_venta: 235000 },  // Bazuka — Unidad
  "POL-026": { costo_base: 140000, precio_venta: 267000 },  // (reservado — Bazuka código legacy en hoja)

  // ── Detonantes Menores & de Mecha ──────────────────────────
  "POL-027": { costo_base:   4500, precio_venta:   8000 },  // Traqui Traqui — Hoja x150
  "POL-028": { costo_base:  18000, precio_venta:  30000 },  // Traqui Traqui — Cartilla x600 (▲ de $28,500)
  "POL-029": { costo_base:   1500, precio_venta:   2500 },  // Zeus Pintalabios — Unidad (▲ de $2,000)
  "POL-030": { costo_base:   7500, precio_venta:  12500 },  // Zeus Pintalabios — Pack x5 (▲ de $10,000)
  "POL-031": { costo_base:  30000, precio_venta:  50000 },  // Zeus Pintalabios — Caja x20 (▲ de $38,500)

  // ── Golpes, Estallidos & Metralletas ───────────────────────
  "POL-032": { costo_base:  21000, precio_venta:  35000 },  // Triangulitos — Bolsa x100 (est.)
  "POL-033": { costo_base:   5000, precio_venta:  10000 },  // 1 Golpe (Fosforito) — Pack x20
  "POL-034": { costo_base:  25000, precio_venta:  42000 },  // 1 Golpe (Fosforito) — Caja x100
  "POL-035": { costo_base:   6500, precio_venta:  15000 },  // 4 Golpes — Pack x30 (5 cajitas)
  "POL-036": { costo_base:  26000, precio_venta:  44000 },  // 4 Golpes — Paquete x120 (▲ de $42,000)
  "POL-037": { costo_base:    600, precio_venta:   2000 },  // Martillo — Unidad (costo: $30,000/50)
  "POL-038": { costo_base:   6000, precio_venta:  10000 },  // Martillo — Pack x10
  "POL-039": { costo_base:  36000, precio_venta:  60000 },  // Martillo — Caja x60 (▲ de $42,000)
  "POL-040": { costo_base:   3750, precio_venta:   6500 },  // Metralleta — Pack x5 (costo: $30,000/40×5)
  "POL-041": { costo_base:   7500, precio_venta:  15000 },  // Metralleta — Pack x10
  "POL-042": { costo_base:  30000, precio_venta:  50000 },  // Metralleta — Paquete x40
  "POL-043": { costo_base:  25200, precio_venta:  42000 },  // Matasuegra — Paquete x100 (est.)

  // ── Tortas & Espectáculos Aéreos ───────────────────────────
  "POL-044": { costo_base:  30000, precio_venta:  50000 },  // Torta 16 Luces — Unidad
  "POL-045": { costo_base:  37000, precio_venta:  65000 },  // Torta 19 Luces (Pirulo) — Unidad
  "POL-046": { costo_base:  50000, precio_venta:  92000 },  // Torta 25 Luces — Unidad
  "POL-047": { costo_base:  60000, precio_venta: 100000 },  // Torta 30 Luces — Unidad (▲ de $92,000; =36L proveedor)
  "POL-048": { costo_base:  80000, precio_venta: 142000 },  // Torta 42 Luces — Unidad (=49L proveedor)
  "POL-049": { costo_base: 240000, precio_venta: 400000 },  // Torta 100 Luces — Unidad
  "POL-050": { costo_base: 150000, precio_venta: 250000 },  // Torta Revelación de Sexo — Unidad (est.)
  "POL-051": { costo_base:   3600, precio_venta:   6000 },  // Tiro Tiburón — Pack x20 (est.)
  "POL-052": { costo_base:  18000, precio_venta:  30000 },  // Tiro Tiburón — Caja x100 (est.)

  // ── Nuevos Productos 2026 ─────────────────────────────────
  "POL-053": { costo_base:   5000, precio_venta:   8500 },  // Estrobo — Pack x5
  "POL-054": { costo_base:  10000, precio_venta:  17000 },  // Bengala Harry — Pack x5
  "POL-055": { costo_base:  15000, precio_venta:  25000 },  // Supermetralleta — Pack x200
  "POL-056": { costo_base: 250000, precio_venta: 420000 },  // Torta 138 Luces — Unidad

  // ── Combos Promocionales 2026 ──────────────────────────────
  "COMBO-01": { costo_base:  35000, precio_venta:  50000 },  // Combo Familiar Inicial
  "COMBO-02": { costo_base:  42000, precio_venta:  60000 },  // Combo Infantil Seguro
  "COMBO-03": { costo_base:  68000, precio_venta:  96000 },  // Combo Luces & Color
  "COMBO-04": { costo_base:  75000, precio_venta: 106000 },  // Combo Estallido Barranquilla
  "COMBO-05": { costo_base: 130000, precio_venta: 185000 },  // Combo Fiesta Soledad
  "COMBO-06": { costo_base: 195000, precio_venta: 275000 },  // Combo Celebración Premium
  "COMBO-07": { costo_base: 260000, precio_venta: 365000 },  // Combo Evento / Reunión
  "COMBO-08": { costo_base: 420000, precio_venta: 590000 }   // Combo Gran Show Fin de Año
};

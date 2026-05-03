const express = require('express');
const router = express.Router();
const prisma = require('../db');

// GET /api/plantillas — Lista todas las plantillas desde BD
router.get('/', async (req, res, next) => {
  try {
    const { grupo, categoria } = req.query;
    
    const where = { activo: true };
    if (grupo) where.grupo = grupo.toUpperCase();
    if (categoria) where.categoria = { contains: categoria }; // contains ignores case in some adapters, but SQLite requires exact or raw. We'll rely on seed data.

    const plantillas = await prisma.tipoDocumento.findMany({
      where,
      orderBy: { id: 'asc' },
    });

    // Parsear el JSON de campos para devolver objetos
    const parseadas = plantillas.map(p => ({
      ...p,
      campos: JSON.parse(p.camposJson),
      cantidadCampos: JSON.parse(p.camposJson).length,
    }));

    res.json({
      total: parseadas.length,
      plantillas: parseadas,
    });
  } catch (err) { next(err); }
});

// GET /api/plantillas/:id — Obtiene una plantilla completa
router.get('/:id', async (req, res, next) => {
  try {
    const id = parseInt(req.params.id);
    const plantilla = await prisma.tipoDocumento.findUnique({
      where: { id },
    });

    if (!plantilla) {
      return res.status(404).json({ error: `Plantilla F${String(id).padStart(2, '0')} no encontrada` });
    }

    const resultado = {
      ...plantilla,
      campos: JSON.parse(plantilla.camposJson),
    };

    res.json(resultado);
  } catch (err) { next(err); }
});

module.exports = router;

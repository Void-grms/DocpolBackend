const express = require('express');
const router = express.Router();
const prisma = require('../db');
const { verificarToken } = require('../middleware/auth');

// GET /api/expedientes — Listar expedientes del usuario
router.get('/', verificarToken, async (req, res, next) => {
  try {
    const expedientes = await prisma.expediente.findMany({
      where: { userId: req.user.id },
      orderBy: { createdAt: 'desc' },
      include: {
        _count: { select: { documentos: true } }
      }
    });

    res.json({
      total: expedientes.length,
      expedientes: expedientes.map(e => ({
        id: e.id,
        numero: e.numero,
        asunto: e.asunto,
        estado: e.estado,
        cantidadDocumentos: e._count.documentos,
        createdAt: e.createdAt,
      })),
    });
  } catch (err) { next(err); }
});

// POST /api/expedientes — Crear nuevo expediente
router.post('/', verificarToken, async (req, res, next) => {
  try {
    const { asunto, config } = req.body;
    if (!asunto) return res.status(400).json({ error: 'El asunto es obligatorio' });

    // Numeración de expediente
    const anio = new Date().getFullYear();
    const contadorId = `expediente-${anio}`;
    const contador = await prisma.contador.upsert({
      where: { id: contadorId },
      update: { valor: { increment: 1 } },
      create: { id: contadorId, valor: 1 },
    });

    const siglas = config?.siglas || 'UNIDAD-PNP';
    const numero = `EXP N° ${String(contador.valor).padStart(4, '0')}-${anio}-${siglas}`;

    const expediente = await prisma.expediente.create({
      data: {
        userId: req.user.id,
        numero,
        asunto,
      }
    });

    res.status(201).json(expediente);
  } catch (err) { next(err); }
});

// GET /api/expedientes/:id — Obtener expediente con sus documentos
router.get('/:id', verificarToken, async (req, res, next) => {
  try {
    const expediente = await prisma.expediente.findUnique({
      where: { id: req.params.id },
      include: {
        documentos: {
          orderBy: { orden: 'asc' },
          include: {
            documento: {
              include: { tipo: true }
            }
          }
        }
      }
    });

    if (!expediente) return res.status(404).json({ error: 'Expediente no encontrado' });
    if (expediente.userId !== req.user.id) return res.status(403).json({ error: 'Acceso denegado' });

    res.json({
      ...expediente,
      documentos: expediente.documentos.map(ed => ({
        id: ed.documento.id,
        orden: ed.orden,
        numero: `${ed.documento.tipo.nombre.toUpperCase()} N° ${String(ed.documento.numeroCorrelativo).padStart(4, '0')}-${ed.documento.anio}-${ed.documento.siglas}`,
        tipo: ed.documento.tipo.nombre,
        estado: ed.documento.estado,
        fecha: ed.documento.createdAt
      }))
    });
  } catch (err) { next(err); }
});

// POST /api/expedientes/:id/documentos — Añadir documento al expediente
router.post('/:id/documentos', verificarToken, async (req, res, next) => {
  try {
    const { documentoId } = req.body;
    if (!documentoId) return res.status(400).json({ error: 'documentoId es obligatorio' });

    const exp = await prisma.expediente.findUnique({ where: { id: req.params.id } });
    if (!exp || exp.userId !== req.user.id) return res.status(404).json({ error: 'Expediente no encontrado' });

    const doc = await prisma.documento.findUnique({ where: { id: documentoId } });
    if (!doc || doc.userId !== req.user.id) return res.status(404).json({ error: 'Documento no encontrado' });

    const count = await prisma.expedienteDocumento.count({ where: { expedienteId: exp.id } });

    await prisma.expedienteDocumento.create({
      data: {
        expedienteId: exp.id,
        documentoId: doc.id,
        orden: count + 1,
      }
    });

    res.status(201).json({ mensaje: 'Documento añadido al expediente' });
  } catch (err) { next(err); }
});

module.exports = router;

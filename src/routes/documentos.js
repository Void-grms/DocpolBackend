const express = require('express');
const router = express.Router();
const prisma = require('../db');
const { verificarToken, verificarTokenOpcional } = require('../middleware/auth');
const { renderDocumento } = require('../plantillas/motor');

// POST /api/documentos — Crear nuevo documento
router.post('/', verificarToken, async (req, res, next) => {
  try {
    const { tipoId, datos, config } = req.body;

    if (!tipoId || !datos) {
      return res.status(400).json({ error: 'Se requiere tipoId y datos' });
    }

    const plantilla = await prisma.tipoDocumento.findUnique({ where: { id: parseInt(tipoId) } });
    if (!plantilla) {
      return res.status(404).json({ error: `Plantilla no encontrada` });
    }
    const campos = JSON.parse(plantilla.camposJson);
    plantilla.campos = campos;

    // Obtener numeración correlativa
    const anio = new Date().getFullYear();
    const contadorId = `tipo-${tipoId}-${anio}`;
    
    // Incremento atómico en Prisma
    const contador = await prisma.contador.upsert({
      where: { id: contadorId },
      update: { valor: { increment: 1 } },
      create: { id: contadorId, valor: 1 },
    });

    const numero = String(contador.valor).padStart(4, '0');

    const configCompleta = {
      numero,
      anio,
      siglas: config?.siglas || 'UNIDAD-PNP',
      dependencia: config?.dependencia || '',
      lugar: config?.lugar || '',
      ...config,
    };

    const contenidoHtml = renderDocumento(tipoId, datos, configCompleta, plantilla);
    const numeroDoc = `${plantilla.nombre.toUpperCase()} N° ${numero}-${anio}-${configCompleta.siglas}`;

    const documento = await prisma.documento.create({
      data: {
        userId: req.user.id,
        tipoId: parseInt(tipoId),
        numeroCorrelativo: contador.valor,
        anio,
        siglas: configCompleta.siglas,
        estado: 'borrador',
        datos: JSON.stringify(datos),
        contenidoHtml,
      },
      include: {
        tipo: true,
      }
    });

    res.status(201).json({
      ...documento,
      tipoNombre: documento.tipo.nombre,
      numero: numeroDoc,
      datos: JSON.parse(documento.datos)
    });
  } catch (err) { next(err); }
});

// GET /api/documentos — Listar documentos del usuario
router.get('/', verificarToken, async (req, res, next) => {
  try {
    const documentos = await prisma.documento.findMany({
      where: { userId: req.user.id },
      orderBy: { createdAt: 'desc' },
      include: { tipo: true }
    });

    res.json({
      total: documentos.length,
      documentos: documentos.map(d => ({
        id: d.id,
        tipoId: d.tipoId,
        tipoNombre: d.tipo.nombre,
        numero: `${d.tipo.nombre.toUpperCase()} N° ${String(d.numeroCorrelativo).padStart(4, '0')}-${d.anio}-${d.siglas}`,
        estado: d.estado,
        createdAt: d.createdAt,
      })),
    });
  } catch (err) { next(err); }
});

// GET /api/documentos/metricas — Obtener estadísticas del usuario
router.get('/metricas', verificarToken, async (req, res, next) => {
  try {
    const userId = req.user.id;
    
    // Total de documentos
    const total = await prisma.documento.count({ where: { userId } });
    
    // Por estado
    const porEstadoRaw = await prisma.documento.groupBy({
      by: ['estado'],
      where: { userId },
      _count: true
    });
    const porEstado = porEstadoRaw.reduce((acc, curr) => {
      acc[curr.estado] = curr._count;
      return acc;
    }, { borrador: 0, emitido: 0, archivado: 0 });

    // Documentos recientes
    const recientes = await prisma.documento.findMany({
      where: { userId },
      orderBy: { createdAt: 'desc' },
      take: 5,
      include: { tipo: { select: { nombre: true, categoria: true } } }
    });

    res.json({
      total,
      porEstado,
      recientes: recientes.map(d => ({
        id: d.id,
        numero: `${d.tipo.nombre.toUpperCase()} N° ${String(d.numeroCorrelativo).padStart(4, '0')}-${d.anio}-${d.siglas}`,
        tipo: d.tipo.nombre,
        categoria: d.tipo.categoria,
        fecha: d.createdAt,
        estado: d.estado
      }))
    });
  } catch (err) { next(err); }
});

// GET /api/documentos/:id — Obtener documento completo
router.get('/:id', verificarToken, async (req, res, next) => {
  try {
    const doc = await prisma.documento.findUnique({
      where: { id: req.params.id },
      include: { tipo: true }
    });

    if (!doc) return res.status(404).json({ error: 'Documento no encontrado' });
    if (doc.userId !== req.user.id) return res.status(403).json({ error: 'Acceso denegado' });

    res.json({
      ...doc,
      numero: `${doc.tipo.nombre.toUpperCase()} N° ${String(doc.numeroCorrelativo).padStart(4, '0')}-${doc.anio}-${doc.siglas}`,
      tipoNombre: doc.tipo.nombre,
      datos: JSON.parse(doc.datos)
    });
  } catch (err) { next(err); }
});

// POST /api/documentos/preview — Vista previa sin guardar (Puede ser pública)
router.post('/preview', verificarTokenOpcional, async (req, res, next) => {
  try {
    const { tipoId, datos, config } = req.body;

    const plantilla = await prisma.tipoDocumento.findUnique({ where: { id: parseInt(tipoId) } });
    if (!plantilla) {
      return res.status(404).json({ error: 'Plantilla no encontrada' });
    }
    plantilla.campos = JSON.parse(plantilla.camposJson);

    const configCompleta = {
      numero: '____',
      anio: new Date().getFullYear(),
      siglas: config?.siglas || 'UNIDAD-PNP',
      dependencia: config?.dependencia || '',
      lugar: config?.lugar || '',
      ...config,
    };

    const html = renderDocumento(parseInt(tipoId), datos || {}, configCompleta, plantilla);
    res.json({ html });
  } catch (err) { next(err); }
});

// DELETE /api/documentos/:id — Eliminar borrador
router.delete('/:id', verificarToken, async (req, res, next) => {
  try {
    const doc = await prisma.documento.findUnique({ where: { id: req.params.id } });
    
    if (!doc) return res.status(404).json({ error: 'Documento no encontrado' });
    if (doc.userId !== req.user.id) return res.status(403).json({ error: 'Acceso denegado' });
    if (doc.estado !== 'borrador') return res.status(400).json({ error: 'Solo se pueden eliminar borradores' });

    await prisma.documento.delete({ where: { id: req.params.id } });
    res.json({ mensaje: 'Documento eliminado' });
  } catch (err) { next(err); }
});

module.exports = router;
